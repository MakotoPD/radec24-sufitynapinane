export interface CityInfo {
  slug: string
  name: string
  /** Poprawna forma miejscownika, np. "w Toruniu", "we Włocławku" */
  locative: string
}

export const cities: CityInfo[] = [
  { slug: 'inowroclaw', name: 'Inowrocław', locative: 'w Inowrocławiu' },
  { slug: 'janikowo', name: 'Janikowo', locative: 'w Janikowie' },
  { slug: 'bydgoszcz', name: 'Bydgoszcz', locative: 'w Bydgoszczy' },
  { slug: 'torun', name: 'Toruń', locative: 'w Toruniu' },
  { slug: 'wloclawek', name: 'Włocławek', locative: 'we Włocławku' },
  { slug: 'grudziadz', name: 'Grudziądz', locative: 'w Grudziądzu' },
  { slug: 'swiecie', name: 'Świecie', locative: 'w Świeciu' },
  { slug: 'znin', name: 'Żnin', locative: 'w Żninie' },
  { slug: 'mogilno', name: 'Mogilno', locative: 'w Mogilnie' },
  { slug: 'kruszwica', name: 'Kruszwica', locative: 'w Kruszwicy' },
  { slug: 'barcin', name: 'Barcin', locative: 'w Barcinie' },
  { slug: 'pakosc', name: 'Pakość', locative: 'w Pakości' }
]

export function findCity(slug: string): CityInfo | undefined {
  return cities.find(c => c.slug === slug)
}
