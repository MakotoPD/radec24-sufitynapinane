<script setup lang="ts">
const props = defineProps<{ error: { statusCode: number, message?: string } }>()
const { companyInfo } = useCompanyInfo()
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-(--color-bg)">
    <div class="font-display text-7xl font-bold text-(--color-accent)">{{ props.error.statusCode }}</div>
    <h1 class="text-2xl font-bold text-(--color-ink) mt-4">
      {{ props.error.statusCode === 404 ? 'Nie znaleziono strony' : 'Coś poszło nie tak' }}
    </h1>
    <p class="text-(--color-ink-3) mt-2 max-w-md">
      Wróć na stronę główną lub zadzwoń bezpośrednio: {{ companyInfo.phoneDisplay }}
    </p>
    <NuxtLink to="/" class="btn-accent px-7 py-3.5 mt-7">Wróć na stronę główną</NuxtLink>
  </div>
</template>
