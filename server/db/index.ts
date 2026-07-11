import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema'

let client: ReturnType<typeof postgres> | undefined
let dbInstance: ReturnType<typeof drizzle<typeof schema>> | undefined

export function useDb() {
  if (!dbInstance) {
    const config = useRuntimeConfig()
    client = postgres(config.databaseUrl)
    dbInstance = drizzle(client, { schema })
  }
  return dbInstance
}

export { schema }
