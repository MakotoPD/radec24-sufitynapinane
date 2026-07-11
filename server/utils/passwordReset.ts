import { randomBytes } from 'node:crypto'
import { and, desc, eq, isNull } from 'drizzle-orm'
import { Resend } from 'resend'
import { useDb, schema } from '../db'

export function recoveryEmailForUsername(username: string): string | null {
  const config = useRuntimeConfig()
  if (username === config.admin1Username) return config.admin1RecoveryEmail
  if (username === config.admin2Username) return config.admin2RecoveryEmail
  return null
}

export async function countConsecutiveFailures(username: string): Promise<number> {
  const db = useDb()
  const recent = await db.select({ success: schema.loginLogs.success })
    .from(schema.loginLogs)
    .where(eq(schema.loginLogs.username, username))
    .orderBy(desc(schema.loginLogs.createdAt))
    .limit(20)

  let count = 0
  for (const row of recent) {
    if (row.success) break
    count++
  }
  return count
}

export async function sendPasswordResetEmail(userId: number, username: string) {
  const to = recoveryEmailForUsername(username)
  if (!to) return

  const config = useRuntimeConfig()
  const db = useDb()

  await db.update(schema.passwordResetTokens)
    .set({ usedAt: new Date() })
    .where(and(eq(schema.passwordResetTokens.userId, userId), isNull(schema.passwordResetTokens.usedAt)))

  const token = randomBytes(32).toString('hex')
  const expiresAt = new Date(Date.now() + 60 * 60 * 1000)
  await db.insert(schema.passwordResetTokens).values({ userId, token, expiresAt })

  const resetUrl = `${config.public.siteUrl}/admin/resetuj-haslo?token=${token}`

  try {
    const resend = new Resend(config.resendApiKey)
    await resend.emails.send({
      from: `Radec24 Panel <${config.contactFromEmail}>`,
      to,
      subject: `Reset hasła do panelu — konto "${username}"`,
      text: [
        `Wykryto 3 nieudane próby logowania do panelu admina Radec24 na konto "${username}".`,
        '',
        'Jeśli to Ty — kliknij poniższy link, aby ustawić nowe hasło (ważny 1 godzinę):',
        resetUrl,
        '',
        'Jeśli to nie Ty, zignoruj tę wiadomość. Ktoś mógł pomylić hasło albo próbować je odgadnąć — obecne hasło pozostaje aktywne, dopóki nie skorzystasz z linku powyżej.'
      ].join('\n')
    })
  } catch (err) {
    console.error('[password-reset] Resend send failed', err)
  }
}
