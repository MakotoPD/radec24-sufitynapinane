<script setup lang="ts">
usePageSeo({
  title: 'Czym jest sufit napinany?',
  description: 'Dowiedz się czym jest sufit napinany, jak wygląda montaż krok po kroku i czym różni się od tradycyjnego sufitu tynkowanego.'
})

const { companyInfo } = useCompanyInfo()

const steps = [
  { num: '1', title: 'Pomiar pomieszczenia', desc: 'Mierzę powierzchnię i sprawdzam stan istniejącego sufitu oraz instalacji.' },
  { num: '2', title: 'Montaż listwy przyściennej', desc: 'Profil mocujący przykręcam do ścian na wybranej wysokości sufitu.' },
  { num: '3', title: 'Podgrzanie i napięcie membrany', desc: 'Materiał podgrzewam nagrzewnicą do ok. 60°C, co zwiększa jego elastyczność, a następnie napinam w profilu.' },
  { num: '4', title: 'Wykończenie i montaż oświetlenia', desc: 'Docinam naddatek, montuję listwę maskującą oraz punkty oświetleniowe.' }
]

const finishes = [
  { title: 'Matowy', desc: 'Przypomina tradycyjny, tynkowany sufit. Uniwersalny, nie odbija światła.' },
  { title: 'Satynowy', desc: 'Delikatny połysk, lekko rozprasza światło — najczęściej wybierany do salonów.' },
  { title: 'Błyszczący (lakierowany)', desc: 'Efekt lustra optycznie powiększający pomieszczenie. Popularny w łazienkach.' }
]

const comparison = [
  { crit: 'Czas montażu', stretch: '1 dzień', traditional: '1–3 tygodnie' },
  { crit: 'Bałagan i pył', stretch: 'Brak', traditional: 'Duży' },
  { crit: 'Maskowanie nierówności', stretch: 'Tak, w pełni', traditional: 'Wymaga tynkowania' },
  { crit: 'Możliwość demontażu', stretch: 'Tak, wielokrotna', traditional: 'Nie' },
  { crit: 'Ukrycie instalacji', stretch: 'Tak, w przestrzeni podsufitowej', traditional: 'Ograniczone' },
  { crit: 'Trwałość koloru', stretch: 'Wieloletnia, z gwarancją', traditional: 'Wymaga odświeżania co 3–5 lat' }
]
</script>

<template>
  <div>
    <section class="container-page max-w-225 pt-14 sm:pt-18 pb-8">
      <div class="eyebrow mb-5">Poradnik</div>
      <h1 class="text-3xl sm:text-[44px] font-bold tracking-tight text-(--color-ink)">Czym jest sufit napinany?</h1>
      <p class="text-[17px] leading-relaxed text-(--color-ink-2) mt-5">
        Sufit napinany to cienka membrana z PVC lub tkaniny poliestrowej, którą montuje się na profilu przymocowanym do ścian lub istniejącego sufitu. Materiał jest podgrzewany i napinany tak, by utworzyć idealnie gładką, równą powierzchnię — bez śladów łączeń, pęknięć czy nierówności typowych dla tradycyjnego tynku.
      </p>
    </section>

    <section class="container-page max-w-225 pb-14 sm:pb-16">
      <div class="relative rounded-3xl overflow-hidden aspect-16/9 border border-(--color-border)">
        <NuxtImg src="/img/sufit.png" alt="Montaż sufitu napinanego" class="w-full h-full object-cover" width="900" height="506" />
      </div>
    </section>

    <section class="container-page max-w-225 pb-16 sm:pb-20">
      <h2 class="text-2xl sm:text-[28px] font-bold text-(--color-ink) mb-5">Jak wygląda montaż krok po kroku</h2>
      <div class="flex flex-col">
        <div v-for="step in steps" :key="step.num" class="grid grid-cols-[44px_1fr] gap-5 py-5.5 border-t border-(--color-border)">
          <div class="w-9 h-9 rounded-full bg-(--color-accent-light) text-(--color-accent-dark) font-display font-bold text-[15px] flex items-center justify-center">{{ step.num }}</div>
          <div>
            <div class="text-[16.5px] font-semibold text-(--color-ink) mb-1.5">{{ step.title }}</div>
            <div class="text-[15px] leading-relaxed text-(--color-ink-3)">{{ step.desc }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-(--color-surface) py-16 sm:py-18">
      <div class="container-page max-w-225">
        <h2 class="text-2xl sm:text-[28px] font-bold text-(--color-ink) mb-2">Rodzaje wykończenia</h2>
        <p class="text-[15px] text-(--color-ink-3) mb-8">Trzy podstawowe faktury membrany — każda inaczej odbija światło i pasuje do innego stylu wnętrza.</p>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div v-for="f in finishes" :key="f.title" class="bg-white rounded-2xl p-6.5 border border-(--color-border-2)">
            <div class="w-full aspect-video rounded-xl mb-4" :class="f.title === 'Matowy' ? 'bg-gradient-to-br from-[#EDE7DF] to-[#DCD3C6]' : f.title === 'Satynowy' ? 'bg-gradient-to-br from-[#E4DED6] to-[#C9C0B4]' : 'bg-gradient-to-br from-[#2C2824] to-[#141210]'" />
            <div class="text-[16.5px] font-semibold text-(--color-ink) mb-1.5">{{ f.title }}</div>
            <div class="text-sm leading-relaxed text-(--color-ink-3)">{{ f.desc }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="container-page max-w-225 py-16 sm:py-18">
      <h2 class="text-2xl sm:text-[28px] font-bold text-(--color-ink) mb-7">Sufit napinany a tradycyjny — porównanie</h2>
      <div class="border border-(--color-border) rounded-2xl overflow-x-auto">
        <div class="min-w-140">
          <div class="grid grid-cols-[1.3fr_1fr_1fr] bg-(--color-dark) text-white font-semibold text-sm">
            <div class="px-5 py-4">Kryterium</div>
            <div class="px-5 py-4">Sufit napinany</div>
            <div class="px-5 py-4">Sufit tradycyjny</div>
          </div>
          <div v-for="row in comparison" :key="row.crit" class="grid grid-cols-[1.3fr_1fr_1fr] border-t border-(--color-border) text-sm">
            <div class="px-5 py-4 font-semibold text-(--color-ink)">{{ row.crit }}</div>
            <div class="px-5 py-4 text-(--color-success)">{{ row.stretch }}</div>
            <div class="px-5 py-4 text-(--color-ink-3)">{{ row.traditional }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-(--color-accent) py-16 px-5 sm:px-8">
      <div class="container-page !px-0 flex items-center justify-between flex-wrap gap-7">
        <div>
          <h2 class="text-2xl sm:text-[30px] font-bold text-white tracking-tight">Masz pytania o technologię?</h2>
          <p class="text-base text-white/85 mt-2.5">Doradzę najlepsze rozwiązanie dla Twojego wnętrza.</p>
        </div>
        <a :href="companyInfo.phoneHref" class="btn-dark text-base px-7.5 py-4">Zadzwoń: {{ companyInfo.phoneDisplay }}</a>
      </div>
    </section>
  </div>
</template>
