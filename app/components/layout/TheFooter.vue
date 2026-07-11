<script setup lang="ts">
import { cities } from '#shared/utils/cities'

const { companyInfo, navLinks } = useCompanyInfo()
const guideLinks = navLinks.filter(l => ['/czym-jest-sufit-napinany', '/konserwacja'].includes(l.to))
const mainLinks = navLinks.filter(l => !['/czym-jest-sufit-napinany', '/konserwacja'].includes(l.to))
const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-(--color-dark) px-5 sm:px-8 pt-16 pb-7">
    <div class="container-page !px-0">
      <div class="grid grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-10 pb-11 border-b border-(--color-dark-3)">
        <div class="col-span-2 lg:col-span-1">
          <div class="bg-white inline-block px-4 py-2.5 rounded-[10px] mb-4">
            <NuxtImg src="/img/logo.png" alt="Radec24" class="h-6 w-auto" width="230" height="24" />
          </div>
          <p class="text-sm leading-relaxed text-(--color-ink-4) max-w-70">
            Montaż sufitów napinanych na terenie regionu kujawsko-pomorskiego. Osobiste zaangażowanie na każdym etapie realizacji.
          </p>
        </div>
        <div>
          <div class="text-[13px] font-bold text-white uppercase tracking-wider mb-4.5">Nawigacja</div>
          <div class="flex flex-col gap-3">
            <NuxtLink v-for="link in mainLinks" :key="link.to" :to="link.to" class="text-(--color-ink-4) text-sm hover:text-white transition-colors">
              {{ link.label }}
            </NuxtLink>
          </div>
        </div>
        <div>
          <div class="text-[13px] font-bold text-white uppercase tracking-wider mb-4.5">Poradnik</div>
          <div class="flex flex-col gap-3">
            <NuxtLink v-for="link in guideLinks" :key="link.to" :to="link.to" class="text-(--color-ink-4) text-sm hover:text-white transition-colors">
              {{ link.label }}
            </NuxtLink>
          </div>
        </div>
        <div>
          <div class="text-[13px] font-bold text-white uppercase tracking-wider mb-4.5">Kontakt</div>
          <div class="flex flex-col gap-3 text-sm text-(--color-ink-4)">
            <a :href="companyInfo.phoneHref" class="hover:text-white transition-colors">{{ companyInfo.phoneDisplay }}</a>
            <a :href="companyInfo.emailHref" class="hover:text-white transition-colors">{{ companyInfo.email }}</a>
            <span>{{ companyInfo.addressLine }}</span>
            <span>{{ companyInfo.hoursWeekday }}</span>
          </div>
        </div>
      </div>
      <div class="pt-8 flex flex-wrap gap-x-3 gap-y-1.5">
        <NuxtLink
          v-for="c in cities"
          :key="c.slug"
          :to="`/sufity-napinane-${c.slug}`"
          class="text-[12.5px] text-(--color-ink-4) hover:text-white transition-colors"
        >
          Sufity napinane {{ c.name }}
        </NuxtLink>
      </div>
      <div class="flex justify-between pt-5 text-[13px] text-(--color-ink-3) flex-wrap gap-3">
        <span>© {{ year }} Radec24. Wszystkie prawa zastrzeżone.</span>
        <span>{{ companyInfo.serviceCities.join(' · ') }}</span>
      </div>
    </div>
  </footer>
</template>
