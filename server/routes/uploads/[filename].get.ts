import { join, extname, basename } from 'node:path'
import { existsSync } from 'node:fs'
import { readFile } from 'node:fs/promises'

const MIME: Record<string, string> = {
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.avif': 'image/avif'
}

export default defineEventHandler(async (event) => {
  const filename = basename(getRouterParam(event, 'filename') || '')
  const config = useRuntimeConfig()
  const filePath = join(process.cwd(), config.galleryUploadDir, filename)

  if (!filename || !existsSync(filePath)) {
    throw createError({ statusCode: 404, statusMessage: 'Not found' })
  }

  const ext = extname(filename).toLowerCase()
  setHeader(event, 'Content-Type', MIME[ext] || 'application/octet-stream')
  setHeader(event, 'Cache-Control', 'public, max-age=31536000, immutable')
  return await readFile(filePath)
})
