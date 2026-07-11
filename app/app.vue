<script setup lang="ts">
const { companyInfo } = useCompanyInfo()

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: companyInfo.name,
  description: 'Montaż sufitów napinanych w Inowrocławiu, Janikowie i całym regionie kujawsko-pomorskim. Bez kucia, bez pyłu, montaż w jeden dzień.',
  telephone: companyInfo.phoneDisplay,
  email: companyInfo.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Ludzisko 56',
    addressLocality: 'Janikowo',
    postalCode: '88-160',
    addressRegion: 'kujawsko-pomorskie',
    addressCountry: 'PL'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: companyInfo.mapLat,
    longitude: companyInfo.mapLng
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '09:00', closes: '13:00' }
  ],
  areaServed: companyInfo.serviceCities,
  priceRange: '$$'
}

useHead({
  titleTemplate: (title) => (title ? `${title} · Radec24` : 'Radec24 – Sufity napinane Inowrocław i region kujawsko-pomorski'),
  script: [
    { type: 'application/ld+json', innerHTML: JSON.stringify(localBusinessJsonLd) }
  ]
})
</script>

<template>
  <NuxtLayout>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </NuxtLayout>
</template>
