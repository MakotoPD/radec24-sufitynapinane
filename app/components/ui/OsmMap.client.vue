<script setup lang="ts">
import 'leaflet/dist/leaflet.css'

const { companyInfo } = useCompanyInfo()
const mapEl = ref<HTMLElement | null>(null)

onMounted(async () => {
  const L = await import('leaflet')

  const icon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  })

  if (!mapEl.value) return

  const map = L.map(mapEl.value, {
    center: [companyInfo.mapLat, companyInfo.mapLng],
    zoom: 13,
    scrollWheelZoom: false
  })

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 19
  }).addTo(map)

  L.marker([companyInfo.mapLat, companyInfo.mapLng], { icon })
    .addTo(map)
    .bindPopup(`<strong>${companyInfo.name}</strong><br>${companyInfo.addressLine}`)
    .openPopup()
})
</script>

<template>
  <div ref="mapEl" class="w-full h-full rounded-[22px] overflow-hidden border border-(--color-border)" />
</template>
