import { asc } from 'drizzle-orm'
import { useDb, schema } from '../../../db'

export default defineEventHandler(async (event) => {
  await requireUserSession(event)
  const db = useDb()

  const rows = await db.select().from(schema.galleryImages).orderBy(asc(schema.galleryImages.sortOrder))

  return {
    items: rows.map(row => ({ ...row, url: `/uploads/${row.filename}` }))
  }
})
