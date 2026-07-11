import { desc, eq } from 'drizzle-orm'
import { useDb, schema } from '../db'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const db = useDb()

  const rows = query.category
    ? await db.select().from(schema.galleryImages).where(eq(schema.galleryImages.category, String(query.category))).orderBy(schema.galleryImages.sortOrder, desc(schema.galleryImages.createdAt))
    : await db.select().from(schema.galleryImages).orderBy(schema.galleryImages.sortOrder, desc(schema.galleryImages.createdAt))

  const limited = query.limit ? rows.slice(0, Number(query.limit)) : rows

  return {
    items: limited.map(row => ({
      id: row.id,
      url: `/uploads/${row.filename}`,
      title: row.title,
      location: row.location,
      category: row.category
    }))
  }
})
