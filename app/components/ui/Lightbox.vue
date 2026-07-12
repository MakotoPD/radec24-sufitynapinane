<script setup lang="ts">
interface LightboxImage {
  url: string
  alt?: string | null
  caption?: string | null
}

const props = defineProps<{
  images: LightboxImage[]
  index: number | null
}>()

const emit = defineEmits<{
  close: []
  'update:index': [value: number]
}>()

const current = computed(() => (props.index !== null ? props.images[props.index] : null))

function next() {
  if (props.index === null) return
  emit('update:index', (props.index + 1) % props.images.length)
}

function prev() {
  if (props.index === null) return
  emit('update:index', (props.index - 1 + props.images.length) % props.images.length)
}

function onKeydown(e: KeyboardEvent) {
  if (props.index === null) return
  if (e.key === 'Escape') emit('close')
  if (e.key === 'ArrowRight') next()
  if (e.key === 'ArrowLeft') prev()
}

watch(() => props.index, (val) => {
  if (typeof document === 'undefined') return
  document.body.style.overflow = val !== null ? 'hidden' : ''
})

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <div
      v-if="current"
      class="fixed inset-0 z-999 bg-(--color-ink)/92 flex items-center justify-center p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      @click.self="emit('close')"
    >
      <button
        class="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer border-none"
        aria-label="Zamknij"
        @click="emit('close')"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" /></svg>
      </button>

      <button
        v-if="images.length > 1"
        class="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer border-none"
        aria-label="Poprzednie zdjęcie"
        @click.stop="prev"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M15 6l-6 6 6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
      </button>
      <button
        v-if="images.length > 1"
        class="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer border-none"
        aria-label="Następne zdjęcie"
        @click.stop="next"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
      </button>

      <figure class="max-w-5xl w-full max-h-full flex flex-col items-center" @click.stop>
        <img :src="current.url" :alt="current.alt || ''" class="max-w-full max-h-[78vh] rounded-2xl object-contain shadow-2xl">
        <figcaption v-if="current.caption" class="text-white/80 text-sm mt-4 text-center">{{ current.caption }}</figcaption>
      </figure>
    </div>
  </Teleport>
</template>
