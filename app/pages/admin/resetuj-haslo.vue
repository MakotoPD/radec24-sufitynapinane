<script setup lang="ts">
definePageMeta({ layout: 'admin' })
useSeoMeta({ title: 'Reset hasła', robots: 'noindex, nofollow' })

const route = useRoute()
const token = String(route.query.token || '')

const { data: check, pending } = await useFetch('/api/admin/reset-password', {
  query: { token }
})

const password = ref('')
const passwordConfirm = ref('')
const error = ref('')
const submitting = ref(false)
const done = ref(false)

async function onSubmit() {
  error.value = ''
  if (password.value.length < 10) {
    error.value = 'Hasło musi mieć co najmniej 10 znaków.'
    return
  }
  if (password.value !== passwordConfirm.value) {
    error.value = 'Hasła nie są identyczne.'
    return
  }
  submitting.value = true
  try {
    await $fetch('/api/admin/reset-password', { method: 'POST', body: { token, password: password.value } })
    done.value = true
  } catch (e: any) {
    error.value = e?.data?.statusMessage || 'Nie udało się zresetować hasła.'
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <div class="max-w-sm mx-auto py-10">
    <h1 class="text-2xl font-bold text-(--color-ink) mb-6">Reset hasła</h1>

    <div v-if="pending" class="text-sm text-(--color-ink-3)">Sprawdzam link…</div>

    <div v-else-if="!check?.valid" class="text-sm">
      <p class="text-(--color-accent) mb-4">Ten link do resetu hasła jest nieprawidłowy lub wygasł.</p>
      <NuxtLink to="/admin/login" class="text-(--color-ink) font-semibold border-b-2 border-(--color-ink)">Wróć do logowania</NuxtLink>
    </div>

    <div v-else-if="done" class="text-sm">
      <p class="text-(--color-success) mb-4">Hasło zostało zmienione. Możesz się teraz zalogować.</p>
      <NuxtLink to="/admin/login" class="btn-accent inline-flex px-6 py-3">Przejdź do logowania</NuxtLink>
    </div>

    <form v-else class="flex flex-col gap-4" @submit.prevent="onSubmit">
      <p class="text-sm text-(--color-ink-3)">Ustawiasz nowe hasło dla konta <strong class="text-(--color-ink)">{{ check.username }}</strong>.</p>
      <div>
        <label class="text-sm font-semibold text-(--color-ink) block mb-1.5">Nowe hasło</label>
        <input v-model="password" type="password" autocomplete="new-password" class="w-full px-3.5 py-2.5 rounded-[10px] border border-(--color-border) text-sm focus:outline-none focus:border-(--color-accent)" required>
      </div>
      <div>
        <label class="text-sm font-semibold text-(--color-ink) block mb-1.5">Powtórz nowe hasło</label>
        <input v-model="passwordConfirm" type="password" autocomplete="new-password" class="w-full px-3.5 py-2.5 rounded-[10px] border border-(--color-border) text-sm focus:outline-none focus:border-(--color-accent)" required>
      </div>
      <div v-if="error" class="text-(--color-accent) text-sm">{{ error }}</div>
      <button type="submit" class="btn-accent py-3 text-sm disabled:opacity-60" :disabled="submitting">
        {{ submitting ? 'Zapisywanie…' : 'Ustaw nowe hasło' }}
      </button>
    </form>
  </div>
</template>
