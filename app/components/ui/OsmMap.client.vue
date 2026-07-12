<script setup lang="ts">
import 'leaflet/dist/leaflet.css'

const { companyInfo } = useCompanyInfo()
const mapEl = ref<HTMLElement | null>(null)

const pinSvg = `
<svg width="38" height="50" viewBox="0 0 38 50" xmlns="http://www.w3.org/2000/svg">
  <path d="M19 0C8.5 0 0 8.5 0 19c0 14.25 19 31 19 31s19-16.75 19-31C38 8.5 29.5 0 19 0z" fill="#E3423A"/>
  <circle cx="19" cy="19" r="8" fill="#FBF8F5"/>
</svg>`

onMounted(async () => {
  const L = await import('leaflet')

  const icon = L.divIcon({
    html: pinSvg,
    className: 'radec-map-pin',
    iconSize: [38, 50],
    iconAnchor: [19, 50],
    popupAnchor: [0, -46]
  })

  if (!mapEl.value) return

  const map = L.map(mapEl.value, {
    center: [companyInfo.mapLat, companyInfo.mapLng],
    zoom: 13,
    scrollWheelZoom: false,
    zoomControl: false
  })

  L.control.zoom({ position: 'bottomright' }).addTo(map)

  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
    maxZoom: 19
  }).addTo(map)

  L.marker([companyInfo.mapLat, companyInfo.mapLng], { icon })
    .addTo(map)
    .bindPopup(`<strong>${companyInfo.name}</strong><br>${companyInfo.addressLine}`, { className: 'radec-map-popup' })
    .openPopup()
})
</script>

<template>
  <div ref="mapEl" role="application" aria-label="Mapa lokalizacji Radec24 — Ludzisko 56, Janikowo" class="w-full h-full rounded-[22px] overflow-hidden border border-(--color-border)" />
</template>
