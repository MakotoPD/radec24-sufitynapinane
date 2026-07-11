import { Resend } from 'resend'
import { useDb, schema } from '../db'

interface ContactBody {
  name: string
  phone: string
  email: string
  city?: string
  message: string
  rodo: boolean
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export default defineEventHandler(async (event) => {
  const body = await readBody<ContactBody>(event)

  if (!body?.name?.trim()) throw createError({ statusCode: 400, statusMessage: 'Podaj imię i nazwisko.' })
  if (!body.phone || body.phone.replace(/[^0-9]/g, '').length < 9) throw createError({ statusCode: 400, statusMessage: 'Podaj poprawny numer telefonu.' })
  if (!isValidEmail(body.email || '')) throw createError({ statusCode: 400, statusMessage: 'Podaj poprawny adres e-mail.' })
  if (!body.message?.trim() || body.message.trim().length < 10) throw createError({ statusCode: 400, statusMessage: 'Opisz zapytanie (min. 10 znaków).' })
  if (!body.rodo) throw createError({ statusCode: 400, statusMessage: 'Zgoda RODO jest wymagana.' })

  const config = useRuntimeConfig()
  const db = useDb()

  let emailSent = false
  try {
    const resend = new Resend(config.resendApiKey)
    await resend.emails.send({
      from: `Formularz Radec24 <${config.contactFromEmail}>`,
      to: config.contactToEmail,
      replyTo: body.email,
      subject: `Nowe zapytanie ze strony — ${body.name}`,
      text: [
        `Imię i nazwisko: ${body.name}`,
        `Telefon: ${body.phone}`,
        `E-mail: ${body.email}`,
        `Miejscowość: ${body.city || '—'}`,
        '',
        'Wiadomość:',
        body.message
      ].join('\n')
    })
    emailSent = true
  } catch (err) {
    console.error('[contact] Resend send failed', err)
  }

  await db.insert(schema.contactMessages).values({
    name: body.name.trim(),
    phone: body.phone.trim(),
    email: body.email.trim(),
    city: body.city?.trim() || null,
    message: body.message.trim(),
    emailSent
  })

  if (!emailSent) {
    throw createError({ statusCode: 502, statusMessage: 'Nie udało się wysłać wiadomości e-mail.' })
  }

  return { ok: true }
})
