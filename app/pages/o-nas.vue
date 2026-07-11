<script setup lang="ts">
useSeoMeta({
  title: 'O nas',
  description: 'Radec24 to jednoosobowa firma z Inowrocławia specjalizująca się w montażu sufitów napinanych. Osobiste zaangażowanie na każdym etapie realizacji.'
})

const { companyInfo } = useCompanyInfo()

const values = [
  { title: 'Montaż bez pośredników', desc: 'Każdy sufit montuję osobiście — bez podzlecania przypadkowym wykonawcom. Masz pewność, kto pojawi się u Ciebie w domu.', icon: 'M12 3l7 3v6c0 5-3 8-7 9-4-1-7-4-7-9V6l7-3z' },
  { title: 'Materiały z gwarancją', desc: 'Korzystam z certyfikowanych folii i tkanin czołowych europejskich producentów.', icon: 'user' },
  { title: 'Uczciwa wycena', desc: 'Cena ustalana po pomiarze jest ostateczna — bez ukrytych kosztów i dopłat.', icon: 'M4 12h16M4 12l4-4M4 12l4 4M20 12l-4-4M20 12l-4 4' }
]
</script>

<template>
  <div>
    <section class="container-page grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center pt-14 sm:pt-18 pb-14">
      <div>
        <div class="eyebrow mb-5">O firmie</div>
        <h1 class="text-3xl sm:text-[44px] font-bold tracking-tight text-(--color-ink) leading-tight">
          Sufity napinane, na których<br class="hidden sm:block">można polegać
        </h1>
        <p class="text-[16.5px] leading-relaxed text-(--color-ink-2) mt-5">
          Radec24 to jednoosobowa firma z Inowrocławia specjalizująca się w montażu sufitów napinanych. Prowadzę ją osobiście — od pierwszego telefonu, przez pomiar i wycenę, po sam montaż. Dzięki temu każda realizacja, niezależnie czy to niewielka łazienka, czy cały dom, wykonywana jest z tą samą starannością i pod moim bezpośrednim nadzorem.
        </p>
        <p class="text-[16.5px] leading-relaxed text-(--color-ink-2) mt-4">
          Bazę mam w Janikowie pod Inowrocławiem, ale realizuję zlecenia w całym regionie kujawsko-pomorskim — dla klientów indywidualnych, jak i przy współpracy z ekipami wykończeniowymi.
        </p>
      </div>
      <div class="relative">
        <div class="absolute -top-6 -left-6 w-[88%] h-[88%] bg-(--color-accent) rounded-3xl -rotate-3 z-0" />
        <div class="relative z-10 rounded-3xl overflow-hidden aspect-4/5 border border-(--color-border)">
          <NuxtImg src="/img/sufit.png" alt="Realizacja sufitu napinanego Radec24" class="w-full h-full object-cover" width="554" height="696" />
        </div>
      </div>
    </section>

    <section class="container-page py-16 sm:py-20">
      <div class="max-w-160 mb-12">
        <div class="eyebrow mb-3">Moje podejście</div>
        <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-(--color-ink)">Na czym buduję zaufanie klientów</h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div v-for="v in values" :key="v.title" class="card p-7">
          <div class="w-12 h-12 rounded-xl bg-(--color-accent-light) flex items-center justify-center mb-5">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E3423A" stroke-width="1.6">
              <circle v-if="v.icon==='user'" cx="12" cy="8" r="3.5" /><path v-if="v.icon==='user'" d="M5 20c0-3.9 3.1-7 7-7s7 3.1 7 7" />
              <path v-else :d="v.icon" stroke-linecap="round" />
            </svg>
          </div>
          <h3 class="text-[19px] font-semibold text-(--color-ink) mb-2.5">{{ v.title }}</h3>
          <p class="text-[14.5px] leading-relaxed text-(--color-ink-3)">{{ v.desc }}</p>
        </div>
      </div>
    </section>

    <section class="bg-(--color-surface) py-16 sm:py-20">
      <div class="container-page max-w-225">
        <div class="mb-10">
          <div class="eyebrow mb-3">Jak wygląda współpraca</div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-(--color-ink)">Czego możesz się spodziewać</h2>
        </div>
        <div class="flex flex-col">
          <div class="grid grid-cols-1 sm:grid-cols-[110px_1fr] gap-4 sm:gap-6 py-6 border-t border-(--color-border-2)">
            <div class="font-display text-xl font-bold text-(--color-accent)">Kontakt</div>
            <div>
              <div class="text-base font-semibold text-(--color-ink) mb-1.5">Rozmowa i wstępna wycena telefoniczna</div>
              <div class="text-[14.5px] leading-relaxed text-(--color-ink-3)">Opisujesz pomieszczenie, doradzam rozwiązanie i umawiamy termin bezpłatnego pomiaru.</div>
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-[110px_1fr] gap-4 sm:gap-6 py-6 border-t border-(--color-border-2)">
            <div class="font-display text-xl font-bold text-(--color-accent)">Pomiar</div>
            <div>
              <div class="text-base font-semibold text-(--color-ink) mb-1.5">Wizyta na miejscu i dobór materiału</div>
              <div class="text-[14.5px] leading-relaxed text-(--color-ink-3)">Mierzę pomieszczenie, pokazuję próbki faktur i kolorów, przedstawiam ostateczną wycenę.</div>
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-[110px_1fr] gap-4 sm:gap-6 py-6 border-t border-(--color-border-2)">
            <div class="font-display text-xl font-bold text-(--color-accent)">Montaż</div>
            <div>
              <div class="text-base font-semibold text-(--color-ink) mb-1.5">Realizacja w umówionym terminie</div>
              <div class="text-[14.5px] leading-relaxed text-(--color-ink-3)">Montuję sufit osobiście, zwykle w ciągu jednego dnia, bez kucia i bałaganu.</div>
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-[110px_1fr] gap-4 sm:gap-6 py-6 border-t border-(--color-border-2)">
            <div class="font-display text-xl font-bold text-(--color-accent)">Gwarancja</div>
            <div>
              <div class="text-base font-semibold text-(--color-ink) mb-1.5">Odbiór i wsparcie posprzedażowe</div>
              <div class="text-[14.5px] leading-relaxed text-(--color-ink-3)">Otrzymujesz pisemną gwarancję, a w razie pytań jestem dostępny pod telefonem.</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-(--color-accent) py-16 px-5 sm:px-8">
      <div class="container-page !px-0 flex items-center justify-between flex-wrap gap-7">
        <div>
          <h2 class="text-2xl sm:text-[30px] font-bold text-white tracking-tight">Poznajmy się przy okazji wyceny</h2>
          <p class="text-base text-white/85 mt-2.5">Bezpłatny pomiar i wycena — bez zobowiązań.</p>
        </div>
        <a :href="companyInfo.phoneHref" class="btn-dark text-base px-7.5 py-4">Zadzwoń: {{ companyInfo.phoneDisplay }}</a>
      </div>
    </section>
  </div>
</template>
