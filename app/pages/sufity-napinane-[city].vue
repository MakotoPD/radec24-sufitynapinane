<script setup lang="ts">
import { findCity } from '#shared/utils/cities'

const route = useRoute()
const citySlug = String(route.params.city || '')
const city = findCity(citySlug)

if (!city) {
  throw createError({ statusCode: 404, statusMessage: 'Nie znaleziono strony', fatal: true })
}

const { companyInfo } = useCompanyInfo()
const { services, processSteps } = useSiteContent()
const site = useSiteConfig()

usePageSeo({
  title: `Sufity napinane ${city.name}`,
  description: `Montaż sufitów napinanych ${city.locative} i okolicy. Bezpłatny pomiar i wycena, montaż bez kucia i bałaganu — zwykle w jeden dzień. Zadzwoń: ${companyInfo.phoneDisplay}.`,
  ogBadge: city.name
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'Montaż sufitów napinanych',
        name: `Sufity napinane ${city.name}`,
        provider: {
          '@type': 'LocalBusiness',
          name: companyInfo.name,
          telephone: companyInfo.phoneDisplay,
          email: companyInfo.email
        },
        areaServed: { '@type': 'City', name: city.name },
        url: `${site.url}/sufity-napinane-${city.slug}`
      })
    }
  ]
})

const faqs = [
  { q: `Czy montujecie sufity napinane ${city.locative}?`, a: `Tak, realizuję montaże ${city.locative} i najbliższej okolicy. Pomiar i wycenę ustalamy telefonicznie, a termin montażu dopasowuję do Twojego kalendarza.` },
  { q: 'Ile trwa montaż?', a: 'Standardowy montaż w jednym pomieszczeniu zajmuje od 2 do 4 godzin. Całe mieszkanie lub dom montuję najczęściej w ciągu jednego dnia roboczego.' },
  { q: 'Czy dojazd na wycenę i pomiar jest płatny?', a: 'Nie — pomiar i wycena są bezpłatne i nie zobowiązują do niczego.' },
  { q: 'Jaka jest gwarancja na montaż?', a: 'Na każdy montaż wystawiam pisemną gwarancję. Materiały posiadają dodatkowo gwarancję producenta.' }
]
</script>

<template>
  <div>
    <section class="container-page grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center pt-14 sm:pt-18 pb-14">
      <div>
        <div class="eyebrow mb-5.5">Sufity napinane {{ city.locative }}</div>
        <h1 class="text-4xl sm:text-5xl lg:text-[52px] leading-[1.06] font-bold tracking-tight text-(--color-ink)">
          Sufity napinane<br>{{ city.name }}
        </h1>
        <p class="mt-6 text-lg leading-relaxed text-(--color-ink-2) max-w-130">
          Projektuję i montuję sufity napinane {{ city.locative }} oraz najbliższej okolicy — w domach, mieszkaniach i lokalach usługowych. Bez kucia, bez pyłu, bez wielotygodniowego remontu — gładki, idealnie równy sufit montuję w jeden dzień.
        </p>
        <p class="mt-4 text-base leading-relaxed text-(--color-ink-3) max-w-130">
          Pomiar i wycenę ustalamy telefonicznie, a montaż wykonuję osobiście — bez podwykonawców i przypadkowych ekip.
        </p>
        <div class="flex items-center gap-4.5 mt-9 flex-wrap">
          <a :href="companyInfo.phoneHref" class="btn-accent text-base px-7.5 py-4">
            Zadzwoń teraz: {{ companyInfo.phoneDisplay }}
          </a>
          <NuxtLink to="/realizacje" class="text-(--color-ink) font-semibold text-base py-4 border-b-2 border-(--color-ink)">
            Zobacz realizacje →
          </NuxtLink>
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

    <section class="container-page py-16 sm:py-18">
      <div class="max-w-160 mb-12">
        <div class="eyebrow mb-3">Oferta {{ city.locative }}</div>
        <h2 class="text-3xl sm:text-[36px] font-bold tracking-tight text-(--color-ink)">Sufit napinany dopasowany<br>do każdego wnętrza</h2>
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

    <section class="bg-(--color-surface) py-16 sm:py-18">
      <div class="container-page">
        <div class="max-w-160 mb-14">
          <div class="eyebrow mb-3">Jak pracuję</div>
          <h2 class="text-3xl sm:text-[36px] font-bold tracking-tight text-(--color-ink)">Od telefonu do gotowego sufitu</h2>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
          <div class="hidden lg:block absolute top-[23px] left-[5%] right-[5%] h-0.5 bg-(--color-border-2) z-0" />
          <div v-for="step in processSteps" :key="step.num" class="relative z-10">
            <div class="w-11.5 h-11.5 rounded-full bg-(--color-accent) text-white font-display font-bold text-lg flex items-center justify-center mb-5">{{ step.num }}</div>
            <h3 class="text-[17px] font-semibold text-(--color-ink) mb-2">{{ step.title }}</h3>
            <p class="text-sm leading-relaxed text-(--color-ink-3)">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="container-page max-w-225 py-16 sm:py-18">
      <div class="mb-10">
        <div class="eyebrow mb-3">FAQ</div>
        <h2 class="text-3xl sm:text-[34px] font-bold tracking-tight text-(--color-ink)">Najczęstsze pytania — {{ city.name }}</h2>
      </div>
      <UiFaqAccordion :items="faqs" />
    </section>

    <section class="bg-(--color-accent) py-16 px-5 sm:px-8">
      <div class="container-page !px-0 flex items-center justify-between flex-wrap gap-7">
        <div>
          <h2 class="text-2xl sm:text-[30px] font-bold text-white tracking-tight">Zaprojektujmy razem Twój sufit {{ city.locative }}</h2>
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
