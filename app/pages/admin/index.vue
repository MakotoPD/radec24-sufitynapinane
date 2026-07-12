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

const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp']
const MAX_SIZE = 8 * 1024 * 1024

const fileInput = ref<HTMLInputElement | null>(null)
const selectedFile = ref<File | null>(null)
const previewUrl = ref<string | null>(null)
const isDragging = ref(false)

const uploadTitle = ref('')
const uploadLocation = ref('')
const uploadCategory = ref('')
const uploading = ref(false)
const uploadError = ref('')

const uid = useId()
const ids = {
  title: `${uid}-title`,
  location: `${uid}-location`,
  category: `${uid}-category`,
  dropzone: `${uid}-dropzone`
}

function setFile(file: File | undefined | null) {
  if (!file) return
  if (!ALLOWED_TYPES.includes(file.type)) {
    uploadError.value = 'Dozwolone są tylko pliki JPG, PNG lub WebP.'
    return
  }
  if (file.size > MAX_SIZE) {
    uploadError.value = 'Plik jest zbyt duży (limit 8 MB).'
    return
  }
  uploadError.value = ''
  selectedFile.value = file
  if (previewUrl.value) URL.revokeObjectURL(previewUrl.value)
  previewUrl.value = URL.createObjectURL(file)
}

function onFileChange(e: Event) {
  setFile((e.target as HTMLInputElement).files?.[0])
}

function onDrop(e: DragEvent) {
  isDragging.value = false
  setFile(e.dataTransfer?.files?.[0])
}

function onDropzoneKeydown(e: KeyboardEvent) {
  if (previewUrl.value) return
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault()
    fileInput.value?.click()
  }
}

function clearFile() {
  selectedFile.value = null
  if (previewUrl.value) URL.revokeObjectURL(previewUrl.value)
  previewUrl.value = null
  if (fileInput.value) fileInput.value.value = ''
}

async function onUpload() {
  uploadError.value = ''
  if (!selectedFile.value) { uploadError.value = 'Wybierz plik zdjęcia.'; return }

  const form = new FormData()
  form.append('file', selectedFile.value)
  if (uploadTitle.value) form.append('title', uploadTitle.value)
  if (uploadLocation.value) form.append('location', uploadLocation.value)
  if (uploadCategory.value) form.append('category', uploadCategory.value)

  uploading.value = true
  try {
    await $fetch('/api/admin/gallery', { method: 'POST', body: form })
    uploadTitle.value = ''
    uploadLocation.value = ''
    uploadCategory.value = ''
    clearFile()
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
      <form class="flex flex-col gap-5" @submit.prevent="onUpload">
        <div
          :id="ids.dropzone"
          class="relative rounded-2xl border-2 border-dashed transition-colors cursor-pointer flex flex-col items-center justify-center text-center px-6 py-9"
          :class="isDragging ? 'border-(--color-accent) bg-(--color-accent-light)' : 'border-(--color-border) bg-(--color-bg) hover:border-(--color-ink-5)'"
          :role="previewUrl ? undefined : 'button'"
          :tabindex="previewUrl ? undefined : 0"
          :aria-label="previewUrl ? undefined : 'Wybierz lub przeciągnij zdjęcie do przesłania'"
          @click="fileInput?.click()"
          @keydown="onDropzoneKeydown"
          @dragenter.prevent="isDragging = true"
          @dragover.prevent="isDragging = true"
          @dragleave.prevent="isDragging = false"
          @drop.prevent="onDrop"
        >
          <input ref="fileInput" type="file" accept="image/jpeg,image/png,image/webp" class="hidden" tabindex="-1" aria-hidden="true" @change="onFileChange">

          <template v-if="previewUrl">
            <img :src="previewUrl" alt="" class="w-28 h-28 object-cover rounded-xl mb-3 pointer-events-none">
            <div class="text-sm font-medium text-(--color-ink) break-all px-4">{{ selectedFile?.name }}</div>
            <button type="button" class="text-xs text-(--color-accent-dark) font-semibold mt-2 cursor-pointer bg-transparent border-none" @click.stop="clearFile">
              Usuń i wybierz inny plik
            </button>
          </template>
          <template v-else>
            <div class="w-12 h-12 rounded-full bg-(--color-accent-light) flex items-center justify-center mb-3 pointer-events-none">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 16V4M12 4l-4 4M12 4l4 4" stroke="#E3423A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /><path d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2" stroke="#E3423A" stroke-width="1.8" stroke-linecap="round" /></svg>
            </div>
            <div class="text-sm font-semibold text-(--color-ink) pointer-events-none">Przeciągnij zdjęcie tutaj lub kliknij, aby wybrać plik</div>
            <div class="text-xs text-(--color-ink-3) mt-1 pointer-events-none">JPG, PNG lub WebP — maks. 8&nbsp;MB</div>
          </template>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <label :for="ids.title" class="text-xs font-semibold text-(--color-ink-3) block mb-1">Tytuł</label>
            <input :id="ids.title" v-model="uploadTitle" type="text" class="w-full px-3 py-2 rounded-lg border border-(--color-border) text-sm">
          </div>
          <div>
            <label :for="ids.location" class="text-xs font-semibold text-(--color-ink-3) block mb-1">Miejscowość</label>
            <input :id="ids.location" v-model="uploadLocation" type="text" class="w-full px-3 py-2 rounded-lg border border-(--color-border) text-sm">
          </div>
          <div>
            <label :for="ids.category" class="text-xs font-semibold text-(--color-ink-3) block mb-1">Kategoria</label>
            <input :id="ids.category" v-model="uploadCategory" type="text" placeholder="np. Salon" class="w-full px-3 py-2 rounded-lg border border-(--color-border) text-sm">
          </div>
        </div>

        <button type="submit" class="btn-accent px-6 py-3 text-sm self-start disabled:opacity-60" :disabled="uploading || !selectedFile">
          {{ uploading ? 'Wysyłanie…' : 'Dodaj zdjęcie' }}
        </button>
      </form>
      <div v-if="uploadError" role="alert" class="text-(--color-accent-dark) text-sm mt-3">{{ uploadError }}</div>
    </div>

    <div v-if="items.length" class="flex flex-col gap-3">
      <div v-for="(item, index) in items" :key="item.id" class="card p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <img :src="item.url" :alt="item.title || ''" class="w-full sm:w-28 h-28 object-cover rounded-lg flex-none" width="112" height="112" loading="lazy">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 flex-1 w-full">
          <input v-model="item.title" placeholder="Tytuł" aria-label="Tytuł zdjęcia" class="px-3 py-2 rounded-lg border border-(--color-border) text-sm" @blur="saveMeta(item)">
          <input v-model="item.location" placeholder="Miejscowość" aria-label="Miejscowość zdjęcia" class="px-3 py-2 rounded-lg border border-(--color-border) text-sm" @blur="saveMeta(item)">
          <input v-model="item.category" placeholder="Kategoria" aria-label="Kategoria zdjęcia" class="px-3 py-2 rounded-lg border border-(--color-border) text-sm" @blur="saveMeta(item)">
        </div>
        <div class="flex gap-2 flex-none">
          <button class="w-8 h-8 rounded-lg border border-(--color-border) text-sm disabled:opacity-30" :disabled="index === 0" aria-label="Przesuń zdjęcie wyżej" @click="move(index, -1)">↑</button>
          <button class="w-8 h-8 rounded-lg border border-(--color-border) text-sm disabled:opacity-30" :disabled="index === items.length - 1" aria-label="Przesuń zdjęcie niżej" @click="move(index, 1)">↓</button>
          <button class="w-8 h-8 rounded-lg border border-(--color-accent) text-(--color-accent-dark) text-sm" aria-label="Usuń zdjęcie" @click="removeItem(item.id)">✕</button>
        </div>
      </div>
    </div>
    <div v-else class="text-(--color-ink-3) text-sm">Brak zdjęć w galerii. Dodaj pierwsze zdjęcie powyżej.</div>
  </div>
</template>
