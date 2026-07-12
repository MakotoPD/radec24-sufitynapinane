<script setup lang="ts">
interface FaqItem {
  q: string
  a: string
}

const props = defineProps<{ items: FaqItem[], defaultOpenIndex?: number }>()
const openIndex = ref(props.defaultOpenIndex ?? 0)
const uid = useId()

function toggle(i: number) {
  openIndex.value = openIndex.value === i ? -1 : i
}
</script>

<template>
  <div class="flex flex-col gap-px bg-(--color-border) rounded-2xl overflow-hidden">
    <div v-for="(faq, i) in props.items" :key="faq.q" class="bg-white">
      <h3>
        <button
          :id="`${uid}-btn-${i}`"
          class="w-full text-left bg-transparent border-none px-6 py-5 flex justify-between items-center cursor-pointer"
          :aria-expanded="openIndex === i"
          :aria-controls="`${uid}-panel-${i}`"
          @click="toggle(i)"
        >
          <span class="text-[15.5px] font-semibold text-(--color-ink)">{{ faq.q }}</span>
          <span aria-hidden="true" class="text-xl text-(--color-accent-dark) flex-none ml-4">{{ openIndex === i ? '−' : '+' }}</span>
        </button>
      </h3>
      <div
        v-if="openIndex === i"
        :id="`${uid}-panel-${i}`"
        role="region"
        :aria-labelledby="`${uid}-btn-${i}`"
        class="px-6 pb-6 text-[14.5px] leading-relaxed text-(--color-ink-3)"
      >
        {{ faq.a }}
      </div>
    </div>
  </div>
</template>
