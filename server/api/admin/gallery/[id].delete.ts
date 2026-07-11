import { join } from 'node:path'
import { unlink } from 'node:fs/promises'
import { eq } from 'drizzle-orm'
import { useDb, schema } from '../../../db'

export default defineEventHandler(async (event) => {
  await requireUserSession(event)
  const id = Number(getRouterParam(event, 'id'))
  if (!Number.isInteger(id)) throw createError({ statusCode: 400, statusMessage: 'Nieprawidłowe ID.' })

  const db = useDb()
  const [row] = await db.delete(schema.galleryImages).where(eq(schema.galleryImages.id, id)).returning()
  if (!row) throw createError({ statusCode: 404, statusMessage: 'Nie znaleziono zdjęcia.' })

  const config = useRuntimeConfig()
  await unlink(join(process.cwd(), config.galleryUploadDir, row.filename)).catch(() => {})

  return { ok: true }
})
