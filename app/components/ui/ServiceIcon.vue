<script setup lang="ts">
defineProps<{ icon: 'rect' | 'print' | 'circle' | 'bars' | 'levels' | 'star' }>()
</script>

<template>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E3423A" stroke-width="1.6">
    <rect v-if="icon === 'rect'" x="3" y="5" width="18" height="14" rx="2" />
    <path v-else-if="icon === 'print'" d="M4 17l4-5 3 3 5-6 4 8" fill="none" />
    <circle v-else-if="icon === 'circle'" cx="12" cy="12" r="4" />
    <path v-else-if="icon === 'bars'" d="M4 10v4M8 7v10M12 4v16M16 8v8M20 11v2" stroke-linecap="round" />
    <g v-else-if="icon === 'levels'"><rect x="3" y="9" width="18" height="10" rx="1" /><rect x="7" y="5" width="10" height="6" rx="1" /></g>
    <path v-else d="M12 2l2.4 6.8L21 11l-6.6 2.2L12 20l-2.4-6.8L3 11l6.6-2.2z" />
  </svg>
</template>
