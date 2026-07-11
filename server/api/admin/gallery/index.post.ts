import { randomUUID } from 'node:crypto'
import { join, extname } from 'node:path'
import { mkdir, writeFile } from 'node:fs/promises'
import { max } from 'drizzle-orm'
import { useDb, schema } from '../../../db'

const ALLOWED_EXT: Record<string, string> = {
  'image/jpeg': '.jpg',
  'image/png': '.png',
  'image/webp': '.webp'
}

const MAX_SIZE = 8 * 1024 * 1024

export default defineEventHandler(async (event) => {
  await requireUserSession(event)

  const parts = await readMultipartFormData(event)
  if (!parts) throw createError({ statusCode: 400, statusMessage: 'Brak danych formularza.' })

  const filePart = parts.find(p => p.name === 'file' && p.filename)
  if (!filePart || !filePart.data) throw createError({ statusCode: 400, statusMessage: 'Brak pliku.' })
  if (filePart.data.length > MAX_SIZE) throw createError({ statusCode: 400, statusMessage: 'Plik jest zbyt duży (limit 8 MB).' })

  const ext = ALLOWED_EXT[filePart.type || '']
  if (!ext) throw createError({ statusCode: 400, statusMessage: 'Dozwolone są tylko pliki JPG, PNG lub WebP.' })

  const title = parts.find(p => p.name === 'title')?.data?.toString('utf-8') || null
  const location = parts.find(p => p.name === 'location')?.data?.toString('utf-8') || null
  const category = parts.find(p => p.name === 'category')?.data?.toString('utf-8') || null

  const config = useRuntimeConfig()
  const uploadDir = join(process.cwd(), config.galleryUploadDir)
  await mkdir(uploadDir, { recursive: true })

  const filename = `${randomUUID()}${ext}`
  await writeFile(join(uploadDir, filename), filePart.data)

  const db = useDb()
  const [{ value: maxOrder } = { value: 0 }] = await db.select({ value: max(schema.galleryImages.sortOrder) }).from(schema.galleryImages)

  const [row] = await db.insert(schema.galleryImages).values({
    filename,
    title,
    location,
    category,
    sortOrder: (maxOrder ?? 0) + 1
  }).returning()

  return { item: { ...row, url: `/uploads/${row.filename}` } }
})
