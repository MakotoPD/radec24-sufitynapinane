import { eq } from 'drizzle-orm'
import { useDb, schema } from '../../db'

interface LoginBody {
  username: string
  password: string
}

export default defineEventHandler(async (event) => {
  const body = await readBody<LoginBody>(event)
  const db = useDb()

  const ip = getRequestIP(event, { xForwardedFor: true }) || 'unknown'
  const userAgent = getHeader(event, 'user-agent') || 'unknown'

  const username = body?.username?.trim() || ''
  const password = body?.password || ''

  const [user] = username
    ? await db.select().from(schema.adminUsers).where(eq(schema.adminUsers.username, username)).limit(1)
    : []

  const valid = user ? await verifyPassword(user.passwordHash, password) : false

  await db.insert(schema.loginLogs).values({
    username: username || '(puste)',
    success: valid,
    ip,
    userAgent
  })

  if (!valid || !user) {
    throw createError({ statusCode: 401, statusMessage: 'Nieprawidłowa nazwa użytkownika lub hasło.' })
  }

  await setUserSession(event, {
    user: { id: user.id, username: user.username }
  })

  return { ok: true }
})
