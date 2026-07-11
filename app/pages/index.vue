<script setup lang="ts">
import { cities } from '#shared/utils/cities'

useSeoMeta({
  title: 'Sufity napinane Inowrocław i region kujawsko-pomorski',
  description: 'Montaż sufitów napinanych w Inowrocławiu, Janikowie i regionie kujawsko-pomorskim. Bez kucia, bez pyłu — gładki sufit montowany w jeden dzień. Bezpłatny pomiar i wycena.'
})

const { companyInfo } = useCompanyInfo()
const { services, processSteps } = useSiteContent()

const badges = [
  { value: 'Bez pośredników', label: 'montaż wykonuję osobiście, od pomiaru po odbiór' },
  { value: 'Materiały z gwarancją', label: 'certyfikowane folie PVC i tkaniny czołowych producentów' },
  { value: '1 dzień', label: 'zwykle tyle trwa montaż całego mieszkania' }
]

const faqs = [
  { q: 'Ile trwa montaż sufitu napinanego?', a: 'Standardowy montaż w jednym pomieszczeniu zajmuje od 2 do 4 godzin. Całe mieszkanie lub dom montuję najczęściej w ciągu jednego dnia roboczego.' },
  { q: 'Czy montaż wiąże się z bałaganem i kuciem ścian?', a: 'Nie. Montaż odbywa się na profilu mocowanym do ściany lub sufitu, bez kucia, mokrych prac i długiego sezonu schnięcia. Po montażu nie trzeba sprzątać gruzu ani pyłu.' },
  { q: 'Czy sufit napinany można zamontować na starym, nierównym suficie?', a: 'Tak — to jedna z głównych zalet tej technologii. Sufit napinany maskuje nierówności, pęknięcia i zacieki bez konieczności ich naprawy.' },
  { q: 'Jaka jest gwarancja na wykonaną usługę?', a: 'Na każdy montaż wystawiam pisemną gwarancję. Materiały posiadają dodatkowo gwarancję producenta.' },
  { q: 'Czy dojeżdżasz poza Inowrocław?', a: 'Tak, realizuję zlecenia na terenie całego regionu kujawsko-pomorskiego, w tym w Janikowie, Bydgoszczy, Toruniu i Włocławku.' }
]

const { data: gallery } = await useFetch('/api/gallery', { query: { limit: 6 } })
</script>

<template>
  <div>
    <!-- HERO -->
    <section class="container-page grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center pt-14 sm:pt-18 pb-14 sm:pb-16">
      <div>
        <div class="eyebrow mb-5.5">Sufity napinane w regionie kujawsko-pomorskim</div>
        <h1 class="text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] font-bold tracking-tight text-(--color-ink)">
          Sufit, który zmienia<br>charakter wnętrza.
        </h1>
        <p class="mt-6 text-lg leading-relaxed text-(--color-ink-2) max-w-130">
          Projektuję i montuję sufity napinane w domach, mieszkaniach oraz lokalach usługowych na terenie regionu kujawsko-pomorskiego. Bez kucia, bez pyłu, bez wielotygodniowego remontu — gładki, idealnie równy sufit montuję w jeden dzień.
        </p>
        <div class="flex items-center gap-4.5 mt-9 flex-wrap">
          <a :href="companyInfo.phoneHref" class="btn-accent text-base px-7.5 py-4">
            Zadzwoń teraz: {{ companyInfo.phoneDisplay }}
          </a>
          <NuxtLink to="/realizacje" class="text-(--color-ink) font-semibold text-base py-4 border-b-2 border-(--color-ink)">
            Zobacz realizacje →
          </NuxtLink>
        </div>
        <div class="flex gap-8 sm:gap-9 mt-11 pt-8 border-t border-(--color-border) flex-wrap">
          <div v-for="b in badges" :key="b.value" class="max-w-52">
            <div class="font-display text-lg font-bold text-(--color-ink)">{{ b.value }}</div>
            <div class="text-[13px] text-(--color-ink-3) mt-1">{{ b.label }}</div>
          </div>
        </div>
      </div>
      <div class="relative">
        <div class="absolute -top-7 -right-7 w-[88%] h-[88%] bg-(--color-accent) rounded-3xl rotate-3 z-0" />
        <div class="relative z-10 rounded-3xl overflow-hidden aspect-4/5 border border-(--color-border)">
          <NuxtImg src="/img/sufit.png" alt="Zrealizowany sufit napinany z podświetleniem LED" class="w-full h-full object-cover" width="554" height="696" />
        </div>
        <div class="absolute -bottom-6 -left-7 z-20 bg-(--color-dark) text-white px-6 py-5 rounded-[18px] shadow-2xl max-w-55">
          <div class="text-[13px] text-(--color-ink-4) mb-1">Montaż w</div>
          <div class="font-display text-[22px] font-bold">1 dzień</div>
          <div class="text-[12.5px] text-(--color-ink-4) mt-1">bez remontu i bałaganu</div>
        </div>
      </div>
    </section>

    <!-- USŁUGI -->
    <section class="container-page py-16 sm:py-20">
      <div class="max-w-160 mb-12">
        <div class="eyebrow mb-3">Moja oferta</div>
        <h2 class="text-3xl sm:text-[38px] font-bold tracking-tight text-(--color-ink)">Sufit napinany dopasowany<br>do każdego wnętrza</h2>
        <p class="text-[16.5px] leading-relaxed text-(--color-ink-2) mt-4">
          Od klasycznych, matowych powierzchni po efektowne sufity z podświetleniem imitującym niebo — dobieram rozwiązanie do stylu pomieszczenia i budżetu inwestycji.
        </p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="s in services" :key="s.title" class="card p-7">
          <div class="w-12 h-12 rounded-xl bg-(--color-accent-light) flex items-center justify-center mb-5">
            <UiServiceIcon :icon="s.icon" />
          </div>
          <h3 class="text-[19px] font-semibold text-(--color-ink) mb-2.5">{{ s.title }}</h3>
          <p class="text-[14.5px] leading-relaxed text-(--color-ink-3)">{{ s.desc }}</p>
        </div>
      </div>
    </section>

    <!-- DLACZEGO MY -->
    <section class="bg-(--color-dark) py-16 sm:py-20">
      <div class="container-page grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-center">
        <div>
          <div class="font-bold text-[13px] tracking-wider uppercase text-(--color-accent-soft) mb-3">Dlaczego Radec24</div>
          <h2 class="text-3xl sm:text-[34px] font-bold text-white tracking-tight">Osobiste zaangażowanie<br>widoczne w detalach</h2>
          <p class="text-base leading-relaxed text-(--color-ink-4) mt-4.5">
            Każdy sufit montuję osobiście — bez podwykonawców i przypadkowych ekip. Pracuję na certyfikowanych foliach PVC i tkaninach, a każdą realizację obejmuję pisemną gwarancją.
          </p>
          <NuxtLink to="/o-nas" class="inline-block mt-6.5 text-white font-semibold text-[15px] border-b-2 border-(--color-accent) pb-1">
            Poznaj moją historię →
          </NuxtLink>
        </div>
        <div class="grid grid-cols-2 gap-px bg-(--color-dark-3) rounded-2xl overflow-hidden">
          <div class="bg-(--color-dark-2) p-7">
            <div class="font-display text-2xl font-bold text-white">Jednoosobowa działalność</div>
            <div class="text-sm text-(--color-ink-4) mt-2">pełna odpowiedzialność za każdy etap montażu</div>
          </div>
          <div class="bg-(--color-dark-2) p-7">
            <div class="font-display text-2xl font-bold text-white">Certyfikowane materiały</div>
            <div class="text-sm text-(--color-ink-4) mt-2">folie i tkaniny z gwarancją producenta</div>
          </div>
          <div class="bg-(--color-dark-2) p-7">
            <div class="font-display text-2xl font-bold text-white">Montaż w 1 dzień</div>
            <div class="text-sm text-(--color-ink-4) mt-2">bez kucia, pyłu i wielotygodniowego remontu</div>
          </div>
          <div class="bg-(--color-dark-2) p-7">
            <div class="font-display text-2xl font-bold text-white">Pisemna gwarancja</div>
            <div class="text-sm text-(--color-ink-4) mt-2">na każdą wykonaną usługę</div>
          </div>
        </div>
      </div>
    </section>

    <!-- PROCES -->
    <section class="container-page py-16 sm:py-20">
      <div class="max-w-160 mb-14">
        <div class="eyebrow mb-3">Jak pracuję</div>
        <h2 class="text-3xl sm:text-[38px] font-bold tracking-tight text-(--color-ink)">Od telefonu do gotowego sufitu</h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
        <div class="hidden lg:block absolute top-[23px] left-[5%] right-[5%] h-0.5 bg-(--color-border) z-0" />
        <div v-for="step in processSteps" :key="step.num" class="relative z-10">
          <div class="w-11.5 h-11.5 rounded-full bg-(--color-accent) text-white font-display font-bold text-lg flex items-center justify-center mb-5">{{ step.num }}</div>
          <h3 class="text-[17px] font-semibold text-(--color-ink) mb-2">{{ step.title }}</h3>
          <p class="text-sm leading-relaxed text-(--color-ink-3)">{{ step.desc }}</p>
        </div>
      </div>
    </section>

    <!-- REALIZACJE PREVIEW -->
    <section v-if="gallery?.items?.length" class="bg-(--color-surface) py-16 sm:py-20">
      <div class="container-page">
        <div class="flex justify-between items-end mb-10 flex-wrap gap-4">
          <div>
            <div class="eyebrow mb-3">Portfolio</div>
            <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-(--color-ink)">Ostatnie realizacje</h2>
          </div>
          <NuxtLink to="/realizacje" class="font-semibold text-[15px] text-(--color-ink) border-b-2 border-(--color-ink) pb-0.5">
            Zobacz pełną galerię →
          </NuxtLink>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div v-for="g in gallery.items" :key="g.id" class="relative rounded-2xl overflow-hidden aspect-4/3">
            <NuxtImg :src="g.url" :alt="g.title || 'Realizacja Radec24'" class="w-full h-full object-cover" width="400" height="300" />
            <div v-if="g.location" class="absolute left-3.5 bottom-3.5 bg-white/92 px-3 py-1.5 rounded-lg text-[12.5px] font-semibold text-(--color-ink)">{{ g.location }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- OBSZAR DZIAŁANIA -->
    <section class="bg-(--color-surface) py-16 sm:py-20">
      <div class="container-page grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div>
          <div class="eyebrow mb-3">Obszar działania</div>
          <h2 class="text-3xl sm:text-[34px] font-bold tracking-tight text-(--color-ink)">Cały region<br>kujawsko-pomorski</h2>
          <p class="text-base leading-relaxed text-(--color-ink-2) mt-4.5 max-w-115">
            Dojeżdżam do klientów w całym regionie z siedzibą w Janikowie pod Inowrocławiem. Pomiar i wycenę ustalamy telefonicznie, montaż wykonuję w umówionym terminie.
          </p>
          <div class="flex flex-wrap gap-2.5 mt-7">
            <NuxtLink
              v-for="c in cities"
              :key="c.slug"
              :to="`/sufity-napinane-${c.slug}`"
              class="bg-white border border-(--color-border) px-4 py-2.5 rounded-full text-[13.5px] font-medium text-(--color-ink) hover:border-(--color-accent) hover:text-(--color-accent) transition-colors"
            >
              {{ c.name }}
            </NuxtLink>
          </div>
        </div>
        <div class="relative aspect-square">
          <svg viewBox="0 0 400 400" class="w-full h-full">
            <path d="M120 40 L280 55 L340 140 L360 230 L300 320 L200 360 L100 330 L50 250 L45 150 L80 80 Z" fill="#fff" stroke="#E8E1D9" stroke-width="2" />
            <circle cx="180" cy="180" r="7" fill="#E3423A" />
            <circle cx="240" cy="140" r="5" fill="#E3423A" opacity="0.7" />
            <circle cx="150" cy="250" r="5" fill="#E3423A" opacity="0.7" />
            <circle cx="260" cy="240" r="5" fill="#E3423A" opacity="0.7" />
            <circle cx="200" cy="300" r="5" fill="#E3423A" opacity="0.7" />
            <circle cx="110" cy="150" r="5" fill="#E3423A" opacity="0.7" />
            <text x="180" y="165" text-anchor="middle" font-family="Space Grotesk, sans-serif" font-size="12" font-weight="700" fill="#1C1917">Inowrocław</text>
          </svg>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="container-page max-w-225 py-16 sm:py-20">
      <div class="mb-10">
        <div class="eyebrow mb-3">FAQ</div>
        <h2 class="text-3xl sm:text-[34px] font-bold tracking-tight text-(--color-ink)">Najczęstsze pytania</h2>
      </div>
      <UiFaqAccordion :items="faqs" />
    </section>

    <!-- CTA -->
    <section class="bg-(--color-accent) py-16 px-5 sm:px-8">
      <div class="container-page !px-0 flex items-center justify-between flex-wrap gap-7">
        <div>
          <h2 class="text-[28px] sm:text-[32px] font-bold text-white tracking-tight">Zaprojektujmy razem Twój sufit</h2>
          <p class="text-base text-white/85 mt-2.5">Bezpłatny pomiar i wycena — bez zobowiązań.</p>
        </div>
        <div class="flex gap-4 flex-wrap">
          <a :href="companyInfo.phoneHref" class="btn-dark text-base px-7.5 py-4">Zadzwoń: {{ companyInfo.phoneDisplay }}</a>
          <NuxtLink to="/kontakt" class="btn-light text-base px-7.5 py-4">Formularz kontaktowy</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
