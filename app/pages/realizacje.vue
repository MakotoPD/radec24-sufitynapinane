<script setup lang="ts">
useSeoMeta({
  title: 'Realizacje',
  description: 'Galeria zrealizowanych sufitów napinanych w Inowrocławiu, Janikowie i regionie kujawsko-pomorskim.'
})

const { data: gallery } = await useFetch('/api/gallery')
const items = computed(() => gallery.value?.items ?? [])

const categories = computed(() => {
  const set = new Set<string>()
  items.value.forEach(i => { if (i.category) set.add(i.category) })
  return ['Wszystkie', ...Array.from(set)]
})

const activeFilter = ref('Wszystkie')

const filtered = computed(() => activeFilter.value === 'Wszystkie'
  ? items.value
  : items.value.filter(i => i.category === activeFilter.value))
</script>

<template>
  <div>
    <section class="container-page pt-14 sm:pt-16 pb-8">
      <div class="eyebrow mb-5">Portfolio</div>
      <h1 class="text-3xl sm:text-[44px] font-bold tracking-tight text-(--color-ink) max-w-175">Realizacje, które mówią same za siebie</h1>
      <p class="text-[16.5px] leading-relaxed text-(--color-ink-2) mt-4 max-w-155">
        Sufity napinane zamontowane w domach, mieszkaniach i lokalach usługowych w regionie kujawsko-pomorskim. Poniżej wybrane realizacje.
      </p>
    </section>

    <section v-if="items.length" class="container-page pb-6">
      <div class="flex gap-2.5 flex-wrap">
        <button
          v-for="cat in categories"
          :key="cat"
          class="border font-semibold text-sm px-5 py-2.5 rounded-full cursor-pointer transition-colors"
          :class="activeFilter === cat ? 'border-(--color-accent) bg-(--color-accent) text-white' : 'border-(--color-border) bg-white text-(--color-ink)'"
          @click="activeFilter = cat"
        >
          {{ cat }}
        </button>
      </div>
    </section>

    <section class="container-page pt-4 pb-20">
      <div v-if="filtered.length" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5.5">
        <div v-for="g in filtered" :key="g.id" class="relative rounded-2xl overflow-hidden aspect-4/3">
          <NuxtImg :src="g.url" :alt="g.title || 'Realizacja Radec24'" class="w-full h-full object-cover" width="420" height="315" />
          <div v-if="g.category" class="absolute left-3.5 top-3.5 bg-(--color-ink)/80 text-white px-3 py-1.5 rounded-lg text-[11.5px] font-semibold">{{ g.category }}</div>
          <div v-if="g.location" class="absolute left-3.5 bottom-3.5 bg-white/92 px-3 py-1.5 rounded-lg text-[12.5px] font-semibold text-(--color-ink)">{{ g.location }}</div>
        </div>
      </div>
      <div v-else class="text-center py-20 text-(--color-ink-3)">
        <p class="text-lg">Galeria realizacji jest w przygotowaniu.</p>
        <p class="text-sm mt-2">Zdjęcia pojawią się tu wkrótce — zadzwoń, aby zobaczyć przykłady na miejscu.</p>
      </div>
    </section>

    <section class="bg-(--color-accent) py-16 px-5 sm:px-8">
      <div class="container-page !px-0 flex items-center justify-between flex-wrap gap-7">
        <div>
          <h2 class="text-2xl sm:text-[30px] font-bold text-white tracking-tight">Twoje wnętrze może wyglądać tak samo dobrze</h2>
          <p class="text-base text-white/85 mt-2.5">Bezpłatny pomiar i wycena — bez zobowiązań.</p>
        </div>
        <NuxtLink to="/kontakt" class="btn-dark text-base px-7.5 py-4">Umów bezpłatny pomiar</NuxtLink>
      </div>
    </section>
  </div>
</template>
