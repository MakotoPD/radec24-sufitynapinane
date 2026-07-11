import { eq } from 'drizzle-orm'
import { useDb, schema } from '../../db'

export default defineEventHandler(async (event) => {
  const token = String(getQuery(event).token || '')
  if (!token) return { valid: false }

  const db = useDb()
  const [row] = await db.select({
    username: schema.adminUsers.username,
    expiresAt: schema.passwordResetTokens.expiresAt,
    usedAt: schema.passwordResetTokens.usedAt
  })
    .from(schema.passwordResetTokens)
    .innerJoin(schema.adminUsers, eq(schema.adminUsers.id, schema.passwordResetTokens.userId))
    .where(eq(schema.passwordResetTokens.token, token))
    .limit(1)

  if (!row || row.usedAt || row.expiresAt.getTime() < Date.now()) {
    return { valid: false }
  }

  return { valid: true, username: row.username }
})
