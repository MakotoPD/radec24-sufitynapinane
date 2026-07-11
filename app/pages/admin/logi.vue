<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: 'admin' })
useSeoMeta({ robots: 'noindex, nofollow' })

interface LogItem {
  id: number
  username: string
  success: boolean
  ip: string | null
  userAgent: string | null
  createdAt: string
}

const { data } = await useFetch<{ items: LogItem[] }>('/api/admin/logs')
const items = computed(() => data.value?.items ?? [])

function formatDate(value: string) {
  return new Date(value).toLocaleString('pl-PL', { dateStyle: 'medium', timeStyle: 'short' })
}
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold text-(--color-ink) mb-6">Logi logowań do panelu</h1>
    <div class="card overflow-x-auto">
      <table class="w-full text-sm min-w-150">
        <thead>
          <tr class="border-b border-(--color-border) text-left text-(--color-ink-3)">
            <th class="px-4 py-3 font-semibold">Data</th>
            <th class="px-4 py-3 font-semibold">Użytkownik</th>
            <th class="px-4 py-3 font-semibold">Status</th>
            <th class="px-4 py-3 font-semibold">IP</th>
            <th class="px-4 py-3 font-semibold">User agent</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="log in items" :key="log.id" class="border-b border-(--color-border) last:border-0">
            <td class="px-4 py-3 whitespace-nowrap">{{ formatDate(log.createdAt) }}</td>
            <td class="px-4 py-3 font-medium text-(--color-ink)">{{ log.username }}</td>
            <td class="px-4 py-3">
              <span :class="log.success ? 'text-(--color-success)' : 'text-(--color-accent)'" class="font-semibold">
                {{ log.success ? 'Sukces' : 'Nieudana próba' }}
              </span>
            </td>
            <td class="px-4 py-3 text-(--color-ink-3)">{{ log.ip || '—' }}</td>
            <td class="px-4 py-3 text-(--color-ink-3) max-w-100 truncate" :title="log.userAgent || ''">{{ log.userAgent || '—' }}</td>
          </tr>
        </tbody>
      </table>
      <div v-if="!items.length" class="p-6 text-(--color-ink-3) text-sm">Brak zarejestrowanych logowań.</div>
    </div>
  </div>
</template>
