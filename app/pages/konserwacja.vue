<script setup lang="ts">
useSeoMeta({
  title: 'Konserwacja sufitu napinanego',
  description: 'Jak dbać o sufit napinany — zalecenia dotyczące czyszczenia, czego unikać oraz odpowiedzi na najczęstsze pytania o konserwację.'
})

const { companyInfo } = useCompanyInfo()

const doList = [
  'Czyść miękką, niestrzępiącą się ściereczką z mikrofibry.',
  'Używaj wody z delikatnym płynem do naczyń.',
  'Wycieraj ruchem okrężnym, lekko dociskając.',
  'Odkurzaj na sucho z użyciem miękkiej końcówki, jeśli sufit jest zakurzony.',
  'Wietrz pomieszczenie, by ograniczyć osadzanie się pary i tłuszczu.'
]

const dontList = [
  'Nie używaj acetonu, rozpuszczalników ani środków na bazie alkoholu.',
  'Nie szoruj szczotkami ani gąbkami o twardej powierzchni.',
  'Nie dociskaj ostrych ani twardych przedmiotów do membrany.',
  'Nie stosuj środków wybielających na bazie chloru.',
  'Nie próbuj samodzielnie naprawiać przebicia membrany.'
]

const cleanSteps = [
  { num: '1', text: 'Przygotuj miękką ściereczkę z mikrofibry i letnią wodę z kroplą płynu do naczyń.' },
  { num: '2', text: 'Wyciśnij ściereczkę tak, aby była tylko wilgotna, nie mokra.' },
  { num: '3', text: 'Przetrzyj sufit delikatnymi, okrężnymi ruchami, zaczynając od rogów pomieszczenia.' },
  { num: '4', text: 'Osusz powierzchnię suchą, czystą ściereczką, aby uniknąć zacieków.' }
]

const faqs = [
  { q: 'Czym mogę myć sufit napinany?', a: 'Miękką ściereczką z mikrofibry zwilżoną wodą z dodatkiem delikatnego płynu do naczyń. Wystarczy przetrzeć powierzchnię bez mocnego pocierania.' },
  { q: 'Czy mogę używać środków na bazie alkoholu lub acetonu?', a: 'Nie — rozpuszczalniki, aceton oraz środki na bazie alkoholu mogą trwale uszkodzić lub odbarwić membranę PVC.' },
  { q: 'Co zrobić z zaciekiem po zalaniu przez sąsiada z góry?', a: 'Sufit napinany jest odporny na zalanie i może zatrzymać znaczną ilość wody. Skontaktuj się ze mną — bezpiecznie spuszczę wodę i osuszę membranę bez demontażu.' },
  { q: 'Czy sufit żółknie z czasem?', a: 'Materiały, których używam, mają powłokę ograniczającą osadzanie się kurzu i utratę koloru — przy prawidłowej pielęgnacji sufit długo zachowuje swój wygląd.' }
]
</script>

<template>
  <div>
    <section class="container-page max-w-225 pt-14 sm:pt-18 pb-8">
      <div class="eyebrow mb-5">Poradnik</div>
      <h1 class="text-3xl sm:text-[44px] font-bold tracking-tight text-(--color-ink)">Jak dbać o sufit napinany</h1>
      <p class="text-[17px] leading-relaxed text-(--color-ink-2) mt-5">
        Sufit napinany nie wymaga malowania, szpachlowania ani odświeżania. Prawidłowo pielęgnowany zachowuje pierwotny wygląd przez wiele lat. Poniżej podpowiadam, jak go czyścić i czego unikać.
      </p>
    </section>

    <section class="container-page max-w-225 pb-16 sm:pb-18">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div class="card p-7.5">
          <div class="w-11 h-11 rounded-xl bg-(--color-success-light) flex items-center justify-center mb-4.5">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#2C7A4B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" /></svg>
          </div>
          <h3 class="text-[17px] font-semibold text-(--color-ink) mb-3.5">Zalecane</h3>
          <div class="flex flex-col gap-2.5">
            <div v-for="d in doList" :key="d" class="flex gap-2.5 text-[14.5px] leading-relaxed text-(--color-ink-2)">
              <span class="text-(--color-success) flex-none">✓</span>{{ d }}
            </div>
          </div>
        </div>
        <div class="card p-7.5">
          <div class="w-11 h-11 rounded-xl bg-(--color-accent-light) flex items-center justify-center mb-4.5">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="#E3423A" stroke-width="2.2" stroke-linecap="round" /></svg>
          </div>
          <h3 class="text-[17px] font-semibold text-(--color-ink) mb-3.5">Czego unikać</h3>
          <div class="flex flex-col gap-2.5">
            <div v-for="d in dontList" :key="d" class="flex gap-2.5 text-[14.5px] leading-relaxed text-(--color-ink-2)">
              <span class="text-(--color-accent) flex-none">✕</span>{{ d }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-(--color-surface) py-16 sm:py-18">
      <div class="container-page max-w-225">
        <h2 class="text-2xl sm:text-[28px] font-bold text-(--color-ink) mb-2">Czyszczenie krok po kroku</h2>
        <p class="text-[15px] text-(--color-ink-3) mb-8">Zalecana częstotliwość: raz na 2–3 miesiące, częściej w kuchni.</p>
        <div class="flex flex-col">
          <div v-for="c in cleanSteps" :key="c.num" class="grid grid-cols-[36px_1fr] gap-4.5 py-5 border-t border-(--color-border-2)">
            <div class="w-7.5 h-7.5 rounded-full bg-(--color-accent) text-white font-display font-bold text-[13px] flex items-center justify-center">{{ c.num }}</div>
            <div class="text-[14.5px] leading-relaxed text-(--color-ink-2) pt-0.5">{{ c.text }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="container-page max-w-225 py-16 sm:py-18">
      <h2 class="text-2xl sm:text-[28px] font-bold text-(--color-ink) mb-6">Najczęstsze pytania o konserwację</h2>
      <UiFaqAccordion :items="faqs" />
    </section>

    <section class="bg-(--color-accent) py-16 px-5 sm:px-8">
      <div class="container-page !px-0 flex items-center justify-between flex-wrap gap-7">
        <div>
          <h2 class="text-2xl sm:text-[30px] font-bold text-white tracking-tight">Potrzebujesz pomocy z konserwacją?</h2>
          <p class="text-base text-white/85 mt-2.5">Doradzę, a jeśli trzeba — wykonam serwis na miejscu.</p>
        </div>
        <a :href="companyInfo.phoneHref" class="btn-dark text-base px-7.5 py-4">Zadzwoń: {{ companyInfo.phoneDisplay }}</a>
      </div>
    </section>
  </div>
</template>
