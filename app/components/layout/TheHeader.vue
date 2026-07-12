<script setup lang="ts">
const { companyInfo, navLinks } = useCompanyInfo()
const menuOpen = ref(false)
const route = useRoute()
const uid = useId()
const mobileNavId = `${uid}-mobile-nav`

watch(() => route.fullPath, () => { menuOpen.value = false })
</script>

<template>
  <header class="sticky top-0 z-100 bg-(--color-bg)/92 backdrop-blur-md border-b border-(--color-border)">
    <div class="container-page flex items-center justify-between gap-6 py-4">
      <NuxtLink to="/" class="flex items-center shrink-0">
        <NuxtImg src="/img/logo.png" alt="Radec24" class="h-7 w-auto" width="269" height="28" />
      </NuxtLink>

      <nav aria-label="Menu główne" class="hidden min-[1150px]:flex items-center gap-8">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="text-[14.5px] transition-colors"
          :class="route.path === link.to ? 'font-semibold text-(--color-ink)' : 'font-medium text-(--color-ink-2) hover:text-(--color-ink)'"
          :aria-current="route.path === link.to ? 'page' : undefined"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <div class="flex items-center gap-3.5">
        <a
          :href="companyInfo.phoneHref"
          class="hidden min-[1150px]:inline-flex items-center gap-2 btn-accent text-[14.5px] px-5 py-2.5 whitespace-nowrap"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.2 1l-2.3 2.2z" fill="#fff" /></svg>
          {{ companyInfo.phoneDisplay }}
        </a>
        <button
          class="min-[1150px]:hidden bg-transparent border-none p-2 cursor-pointer"
          aria-label="Otwórz menu"
          :aria-expanded="menuOpen"
          :aria-controls="mobileNavId"
          @click="menuOpen = !menuOpen"
        >
          <svg v-if="!menuOpen" width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18" stroke="#1C1917" stroke-width="2" stroke-linecap="round" /></svg>
          <svg v-else width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="#1C1917" stroke-width="2" stroke-linecap="round" /></svg>
        </button>
      </div>
    </div>

    <nav v-if="menuOpen" :id="mobileNavId" aria-label="Menu mobilne" class="min-[1150px]:hidden border-t border-(--color-border) px-5 sm:px-8 py-4 flex flex-col gap-4 bg-(--color-bg)">
      <NuxtLink
        v-for="link in navLinks"
        :key="link.to"
        :to="link.to"
        class="text-base"
        :class="route.path === link.to ? 'font-semibold text-(--color-ink)' : 'font-medium text-(--color-ink-2)'"
        :aria-current="route.path === link.to ? 'page' : undefined"
      >
        {{ link.label }}
      </NuxtLink>
      <a :href="companyInfo.phoneHref" class="btn-accent text-[15px] py-3 text-center">
        Zadzwoń: {{ companyInfo.phoneDisplay }}
      </a>
    </nav>
  </header>
</template>
