import { eq } from 'drizzle-orm'
import { useDb, schema } from '../../db'
import { countConsecutiveFailures, sendPasswordResetEmail } from '../../utils/passwordReset'

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

  // Konto zablokowane po wcześniejszych 3 nieudanych próbach — odrzuć bez sprawdzania hasła.
  if (user?.locked) {
    await db.insert(schema.loginLogs).values({ username, success: false, ip, userAgent })
    throw createError({
      statusCode: 401,
      statusMessage: 'Konto zostało zablokowane po 3 nieudanych próbach logowania. Sprawdź e-mail, aby ustawić nowe hasło.',
      data: { locked: true }
    })
  }

  const valid = user ? await verifyPassword(user.passwordHash, password) : false

  await db.insert(schema.loginLogs).values({
    username: username || '(puste)',
    success: valid,
    ip,
    userAgent
  })

  if (!valid || !user) {
    let locked = false
    if (user) {
      const failures = await countConsecutiveFailures(username)
      if (failures === 3) {
        await db.update(schema.adminUsers).set({ locked: true }).where(eq(schema.adminUsers.id, user.id))
        await sendPasswordResetEmail(user.id, username)
        locked = true
      }
    }
    throw createError({
      statusCode: 401,
      statusMessage: locked
        ? 'Konto zostało zablokowane po 3 nieudanych próbach logowania. Wysłano link do resetu hasła na przypisany adres e-mail.'
        : 'Nieprawidłowa nazwa użytkownika lub hasło.',
      data: { locked }
    })
  }

  await setUserSession(event, {
    user: { id: user.id, username: user.username }
  })

  return { ok: true }
})
