import { cities } from '#shared/utils/cities'

export interface NavLink {
  label: string
  to: string
}

export const companyInfo = {
  name: 'Radec24',
  legalName: 'Radec24',
  phoneDisplay: '737 444 950',
  phoneHref: 'tel:+48737444950',
  email: 'radec24@wp.pl',
  emailHref: 'mailto:radec24@wp.pl',
  addressLine: 'Ludzisko 56, 88-160 Janikowo',
  addressCity: 'Inowrocław',
  addressRegion: 'kujawsko-pomorskie',
  hoursWeekday: 'Pon–Pt: 8:00–18:00',
  hoursSaturday: 'Sobota: 9:00–13:00',
  mapLat: 52.71952,
  mapLng: 18.179626,
  serviceCities: cities.map(c => c.name)
}

export const navLinks: NavLink[] = [
  { label: 'Strona główna', to: '/' },
  { label: 'O nas', to: '/o-nas' },
  { label: 'Czym jest sufit napinany', to: '/czym-jest-sufit-napinany' },
  { label: 'Konserwacja', to: '/konserwacja' },
  { label: 'Realizacje', to: '/realizacje' },
  { label: 'Kontakt', to: '/kontakt' }
]

export function useCompanyInfo() {
  return { companyInfo, navLinks }
}
