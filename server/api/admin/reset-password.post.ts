import { eq } from 'drizzle-orm'
import { useDb, schema } from '../../db'

interface ResetBody {
  token: string
  password: string
}

export default defineEventHandler(async (event) => {
  const body = await readBody<ResetBody>(event)
  const token = body?.token || ''
  const password = body?.password || ''

  if (!token) throw createError({ statusCode: 400, statusMessage: 'Brak tokenu.' })
  if (password.length < 10) throw createError({ statusCode: 400, statusMessage: 'Hasło musi mieć co najmniej 10 znaków.' })

  const db = useDb()
  const [row] = await db.select({
    id: schema.passwordResetTokens.id,
    userId: schema.passwordResetTokens.userId,
    expiresAt: schema.passwordResetTokens.expiresAt,
    usedAt: schema.passwordResetTokens.usedAt
  })
    .from(schema.passwordResetTokens)
    .where(eq(schema.passwordResetTokens.token, token))
    .limit(1)

  if (!row || row.usedAt || row.expiresAt.getTime() < Date.now()) {
    throw createError({ statusCode: 400, statusMessage: 'Link do resetu hasła jest nieprawidłowy lub wygasł.' })
  }

  const passwordHash = await hashPassword(password)

  await db.update(schema.adminUsers).set({ passwordHash, locked: false }).where(eq(schema.adminUsers.id, row.userId))
  await db.update(schema.passwordResetTokens).set({ usedAt: new Date() }).where(eq(schema.passwordResetTokens.id, row.id))

  return { ok: true }
})
