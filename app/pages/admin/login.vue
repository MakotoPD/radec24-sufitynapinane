<script setup lang="ts">
definePageMeta({ layout: 'admin' })
useSeoMeta({ robots: 'noindex, nofollow' })

const { fetch: refreshSession, loggedIn } = useUserSession()
const username = ref('')
const password = ref('')
const error = ref('')
const loading = ref(false)

if (loggedIn.value) {
  await navigateTo('/admin')
}

async function onSubmit() {
  error.value = ''
  loading.value = true
  try {
    await $fetch('/api/admin/login', { method: 'POST', body: { username: username.value, password: password.value } })
    await refreshSession()
    await navigateTo('/admin')
  } catch (e: any) {
    error.value = e?.data?.statusMessage || 'Nieprawidłowa nazwa użytkownika lub hasło.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="max-w-sm mx-auto py-10">
    <h1 class="text-2xl font-bold text-(--color-ink) mb-6">Logowanie do panelu</h1>
    <form class="flex flex-col gap-4" @submit.prevent="onSubmit">
      <div>
        <label class="text-sm font-semibold text-(--color-ink) block mb-1.5">Login</label>
        <input v-model="username" type="text" autocomplete="username" class="w-full px-3.5 py-2.5 rounded-[10px] border border-(--color-border) text-sm focus:outline-none focus:border-(--color-accent)" required>
      </div>
      <div>
        <label class="text-sm font-semibold text-(--color-ink) block mb-1.5">Hasło</label>
        <input v-model="password" type="password" autocomplete="current-password" class="w-full px-3.5 py-2.5 rounded-[10px] border border-(--color-border) text-sm focus:outline-none focus:border-(--color-accent)" required>
      </div>
      <div v-if="error" class="text-(--color-accent) text-sm">{{ error }}</div>
      <button type="submit" class="btn-accent py-3 text-sm disabled:opacity-60" :disabled="loading">
        {{ loading ? 'Logowanie…' : 'Zaloguj się' }}
      </button>
    </form>
  </div>
</template>
