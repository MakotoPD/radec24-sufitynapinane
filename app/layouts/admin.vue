<script setup lang="ts">
const { user, clear } = useUserSession()
const route = useRoute()

async function logout() {
  await clear()
  await navigateTo('/admin/login')
}

const navItems = [
  { label: 'Galeria', to: '/admin' },
  { label: 'Logi logowań', to: '/admin/logi' }
]
</script>

<template>
  <div class="min-h-screen bg-(--color-bg)">
    <a href="#main-content" class="skip-link">Przejdź do treści</a>
    <header class="border-b border-(--color-border) bg-white">
      <div class="container-page flex items-center justify-between py-4 gap-4 flex-wrap">
        <div class="flex items-center gap-8">
          <NuxtLink to="/admin" class="font-display font-bold text-lg text-(--color-ink)">Radec24 · Panel</NuxtLink>
          <nav v-if="!['/admin/login', '/admin/resetuj-haslo'].includes(route.path)" class="flex items-center gap-5">
            <NuxtLink
              v-for="item in navItems"
              :key="item.to"
              :to="item.to"
              class="text-sm font-medium"
              :class="route.path === item.to ? 'text-(--color-accent)' : 'text-(--color-ink-3) hover:text-(--color-ink)'"
            >
              {{ item.label }}
            </NuxtLink>
          </nav>
        </div>
        <div v-if="user" class="flex items-center gap-4">
          <span class="text-sm text-(--color-ink-3)">Zalogowano jako <strong class="text-(--color-ink)">{{ user.username }}</strong></span>
          <button class="text-sm font-semibold text-(--color-accent) cursor-pointer bg-transparent border-none" @click="logout">Wyloguj</button>
        </div>
      </div>
    </header>
    <main id="main-content" tabindex="-1" class="container-page py-10">
      <slot />
    </main>
  </div>
</template>
