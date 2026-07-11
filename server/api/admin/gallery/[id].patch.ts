import { eq } from 'drizzle-orm'
import { useDb, schema } from '../../../db'

interface UpdateBody {
  title?: string
  location?: string
  category?: string
  sortOrder?: number
}

export default defineEventHandler(async (event) => {
  await requireUserSession(event)
  const id = Number(getRouterParam(event, 'id'))
  if (!Number.isInteger(id)) throw createError({ statusCode: 400, statusMessage: 'Nieprawidłowe ID.' })

  const body = await readBody<UpdateBody>(event)
  const db = useDb()

  const [row] = await db.update(schema.galleryImages).set({
    ...(body.title !== undefined ? { title: body.title } : {}),
    ...(body.location !== undefined ? { location: body.location } : {}),
    ...(body.category !== undefined ? { category: body.category } : {}),
    ...(body.sortOrder !== undefined ? { sortOrder: body.sortOrder } : {})
  }).where(eq(schema.galleryImages.id, id)).returning()

  if (!row) throw createError({ statusCode: 404, statusMessage: 'Nie znaleziono zdjęcia.' })

  return { item: { ...row, url: `/uploads/${row.filename}` } }
})
