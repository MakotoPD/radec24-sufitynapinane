import { eq } from 'drizzle-orm'
import { useDb, schema } from '../db'

export default defineNitroPlugin(async () => {
  const config = useRuntimeConfig()

  const seeds = [
    { username: config.admin1Username, password: config.admin1Password },
    { username: config.admin2Username, password: config.admin2Password }
  ].filter(seed => seed.username && seed.password)

  if (seeds.length === 0) return

  try {
    const db = useDb()
    for (const seed of seeds) {
      const [existing] = await db.select().from(schema.adminUsers).where(eq(schema.adminUsers.username, seed.username)).limit(1)
      if (existing) continue
      const passwordHash = await hashPassword(seed.password)
      await db.insert(schema.adminUsers).values({ username: seed.username, passwordHash })
      console.log(`[seed-admins] Utworzono konto administratora: ${seed.username}`)
    }
  } catch (err) {
    console.warn('[seed-admins] Nie udało się utworzyć kont administratorów (baza danych niedostępna?)', err)
  }
})
