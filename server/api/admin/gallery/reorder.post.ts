import { eq } from 'drizzle-orm'
import { useDb, schema } from '../../../db'

interface ReorderBody {
  ids: number[]
}

export default defineEventHandler(async (event) => {
  await requireUserSession(event)
  const body = await readBody<ReorderBody>(event)
  if (!Array.isArray(body?.ids)) throw createError({ statusCode: 400, statusMessage: 'Nieprawidłowe dane.' })

  const db = useDb()
  await Promise.all(body.ids.map((id, index) =>
    db.update(schema.galleryImages).set({ sortOrder: index }).where(eq(schema.galleryImages.id, id))
  ))

  return { ok: true }
})
