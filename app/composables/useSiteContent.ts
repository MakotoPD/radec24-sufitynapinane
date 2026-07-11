export interface ServiceItem {
  title: string
  desc: string
  icon: 'rect' | 'print' | 'circle' | 'bars' | 'levels' | 'star'
}

export interface ProcessStep {
  num: string
  title: string
  desc: string
}

export const services: ServiceItem[] = [
  { title: 'Sufity gładkie', desc: 'Matowe, satynowe lub błyszczące powierzchnie w dowolnym kolorze z palety RAL.', icon: 'rect' },
  { title: 'Sufity drukowane', desc: 'Dowolna grafika, wzór lub fototapeta wydrukowana bezpośrednio na membranie.', icon: 'print' },
  { title: 'Sufity podświetlane', desc: 'Efekt gwiaździstego nieba lub równomierne podświetlenie LED w całej powierzchni.', icon: 'circle' },
  { title: 'Sufity akustyczne', desc: 'Perforowana membrana wyciszająca pomieszczenie — idealna do biur i sypialni.', icon: 'bars' },
  { title: 'Sufity wielopoziomowe', desc: 'Konstrukcje z różnicą wysokości podkreślające strefy w pomieszczeniu.', icon: 'levels' },
  { title: 'Elementy dekoracyjne', desc: 'Podświetlane karnisze, gwiazdy 3D i indywidualne rozwiązania na zamówienie.', icon: 'star' }
]

export const processSteps: ProcessStep[] = [
  { num: '1', title: 'Kontakt i pomiar', desc: 'Umawiamy bezpłatny pomiar w dogodnym dla Ciebie terminie.' },
  { num: '2', title: 'Projekt i wycena', desc: 'Dobieramy materiał, kolor i fakturę, przygotowuję wycenę.' },
  { num: '3', title: 'Montaż', desc: 'Montuję sufit osobiście — zwykle w ciągu jednego dnia.' },
  { num: '4', title: 'Odbiór i gwarancja', desc: 'Odbierasz gotowe wnętrze wraz z pisemną gwarancją.' }
]

export function useSiteContent() {
  return { services, processSteps }
}
