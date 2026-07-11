import { desc } from 'drizzle-orm'
import { useDb, schema } from '../../db'

export default defineEventHandler(async (event) => {
  await requireUserSession(event)
  const db = useDb()

  const rows = await db.select().from(schema.loginLogs).orderBy(desc(schema.loginLogs.createdAt)).limit(200)

  return { items: rows }
})
