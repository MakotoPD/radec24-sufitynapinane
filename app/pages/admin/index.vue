<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: 'admin' })
useSeoMeta({ robots: 'noindex, nofollow' })

interface GalleryItem {
  id: number
  url: string
  title: string | null
  location: string | null
  category: string | null
  sortOrder: number
}

const { data, refresh } = await useFetch<{ items: GalleryItem[] }>('/api/admin/gallery')
const items = computed(() => data.value?.items ?? [])

const fileInput = ref<HTMLInputElement | null>(null)
const uploadTitle = ref('')
const uploadLocation = ref('')
const uploadCategory = ref('')
const uploading = ref(false)
const uploadError = ref('')

async function onUpload() {
  uploadError.value = ''
  const file = fileInput.value?.files?.[0]
  if (!file) { uploadError.value = 'Wybierz plik zdjęcia.'; return }

  const form = new FormData()
  form.append('file', file)
  if (uploadTitle.value) form.append('title', uploadTitle.value)
  if (uploadLocation.value) form.append('location', uploadLocation.value)
  if (uploadCategory.value) form.append('category', uploadCategory.value)

  uploading.value = true
  try {
    await $fetch('/api/admin/gallery', { method: 'POST', body: form })
    uploadTitle.value = ''
    uploadLocation.value = ''
    uploadCategory.value = ''
    if (fileInput.value) fileInput.value.value = ''
    await refresh()
  } catch (e: any) {
    uploadError.value = e?.data?.statusMessage || 'Nie udało się przesłać zdjęcia.'
  } finally {
    uploading.value = false
  }
}

async function removeItem(id: number) {
  if (!confirm('Usunąć to zdjęcie z galerii?')) return
  await $fetch(`/api/admin/gallery/${id}`, { method: 'DELETE' })
  await refresh()
}

async function saveMeta(item: GalleryItem) {
  await $fetch(`/api/admin/gallery/${item.id}`, {
    method: 'PATCH',
    body: { title: item.title, location: item.location, category: item.category }
  })
}

async function move(index: number, dir: -1 | 1) {
  const list = [...items.value]
  const target = index + dir
  if (target < 0 || target >= list.length) return
  const tmp = list[index]!
  list[index] = list[target]!
  list[target] = tmp
  data.value = { items: list }
  await $fetch('/api/admin/gallery/reorder', { method: 'POST', body: { ids: list.map(i => i.id) } })
  await refresh()
}
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold text-(--color-ink) mb-6">Galeria realizacji</h1>

    <div class="card p-6 mb-8">
      <h2 class="text-base font-semibold text-(--color-ink) mb-4">Dodaj zdjęcie</h2>
      <form class="grid grid-cols-1 sm:grid-cols-4 gap-3 items-end" @submit.prevent="onUpload">
        <div class="sm:col-span-1">
          <label class="text-xs font-semibold text-(--color-ink-3) block mb-1">Plik (JPG/PNG/WebP)</label>
          <input ref="fileInput" type="file" accept="image/jpeg,image/png,image/webp" class="text-sm w-full">
        </div>
        <div>
          <label class="text-xs font-semibold text-(--color-ink-3) block mb-1">Tytuł</label>
          <input v-model="uploadTitle" type="text" class="w-full px-3 py-2 rounded-lg border border-(--color-border) text-sm">
        </div>
        <div>
          <label class="text-xs font-semibold text-(--color-ink-3) block mb-1">Miejscowość</label>
          <input v-model="uploadLocation" type="text" class="w-full px-3 py-2 rounded-lg border border-(--color-border) text-sm">
        </div>
        <div class="flex gap-2">
          <div class="flex-1">
            <label class="text-xs font-semibold text-(--color-ink-3) block mb-1">Kategoria</label>
            <input v-model="uploadCategory" type="text" placeholder="np. Salon" class="w-full px-3 py-2 rounded-lg border border-(--color-border) text-sm">
          </div>
          <button type="submit" class="btn-accent px-5 py-2 text-sm self-end disabled:opacity-60" :disabled="uploading">
            {{ uploading ? 'Wysyłanie…' : 'Dodaj' }}
          </button>
        </div>
      </form>
      <div v-if="uploadError" class="text-(--color-accent) text-sm mt-3">{{ uploadError }}</div>
    </div>

    <div v-if="items.length" class="flex flex-col gap-3">
      <div v-for="(item, index) in items" :key="item.id" class="card p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <img :src="item.url" :alt="item.title || ''" class="w-full sm:w-28 h-28 object-cover rounded-lg flex-none" width="112" height="112" loading="lazy">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 flex-1 w-full">
          <input v-model="item.title" placeholder="Tytuł" class="px-3 py-2 rounded-lg border border-(--color-border) text-sm" @blur="saveMeta(item)">
          <input v-model="item.location" placeholder="Miejscowość" class="px-3 py-2 rounded-lg border border-(--color-border) text-sm" @blur="saveMeta(item)">
          <input v-model="item.category" placeholder="Kategoria" class="px-3 py-2 rounded-lg border border-(--color-border) text-sm" @blur="saveMeta(item)">
        </div>
        <div class="flex gap-2 flex-none">
          <button class="w-8 h-8 rounded-lg border border-(--color-border) text-sm disabled:opacity-30" :disabled="index === 0" @click="move(index, -1)">↑</button>
          <button class="w-8 h-8 rounded-lg border border-(--color-border) text-sm disabled:opacity-30" :disabled="index === items.length - 1" @click="move(index, 1)">↓</button>
          <button class="w-8 h-8 rounded-lg border border-(--color-accent) text-(--color-accent) text-sm" title="Usuń" @click="removeItem(item.id)">✕</button>
        </div>
      </div>
    </div>
    <div v-else class="text-(--color-ink-3) text-sm">Brak zdjęć w galerii. Dodaj pierwsze zdjęcie powyżej.</div>
  </div>
</template>
