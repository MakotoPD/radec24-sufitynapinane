import { migrate } from 'drizzle-orm/postgres-js/migrator'
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))

const databaseUrl = process.env.DATABASE_URL
if (!databaseUrl) {
  console.error('[migrate] DATABASE_URL is not set')
  process.exit(1)
}

const sql = postgres(databaseUrl, { max: 1 })
const db = drizzle(sql)

await migrate(db, { migrationsFolder: join(__dirname, 'migrations') })
console.log('[migrate] Migrations applied successfully.')
await sql.end()
