import tailwindcss from '@tailwindcss/vite'
import { cities } from './shared/utils/cities'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  future: { compatibilityVersion: 4 },

  modules: [
    '@nuxtjs/seo',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxt/scripts',
    '@vueuse/nuxt',
    'nuxt-auth-utils'
  ],

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()]
  },

  app: {
    head: {
      htmlAttrs: { lang: 'pl' },
      script: [
        {
          defer: true,
          src: 'https://analytics.makoto.com.pl/script.js',
          'data-website-id': '951676a5-f08b-49aa-9f99-f704c77956c4'
        }
      ]
    }
  },

  site: {
    url: 'https://radec24.pl',
    name: 'Radec24 – Sufity napinane Inowrocław i region kujawsko-pomorski',
    description: 'Montaż sufitów napinanych w Inowrocławiu, Janikowie i całym regionie kujawsko-pomorskim. Bezpłatny pomiar i wycena, montaż bez kucia i remontu.',
    defaultLocale: 'pl'
  },

  sitemap: {
    exclude: ['/admin/**'],
    urls: cities.map(c => `/sufity-napinane-${c.slug}`)
  },

  robots: {
    disallow: ['/admin']
  },

  ogImage: {
    enabled: true
  },

  image: {
    quality: 80,
    format: ['webp', 'avif']
  },

  fonts: {
    families: [
      { name: 'Space Grotesk', provider: 'google', weights: [500, 600, 700] },
      { name: 'Inter', provider: 'google', weights: [400, 500, 600, 700] }
    ]
  },

  // Wartości poniżej to tylko defaulty na wypadek braku zmiennej środowiskowej.
  // W runtime Nuxt nadpisuje je automatycznie zmiennymi NUXT_<KLUCZ> (np. NUXT_DATABASE_URL) —
  // ważne w Dockerze, gdzie `pnpm build` i `docker run` mają różne env (sekrety nie są dostępne przy buildzie).
  runtimeConfig: {
    databaseUrl: '',
    resendApiKey: '',
    contactToEmail: 'radec24@wp.pl',
    contactFromEmail: 'radec24@makoto.com.pl',
    galleryUploadDir: '.data/uploads',
    admin1Username: 'Technik',
    admin1Password: '',
    admin1RecoveryEmail: 'patrydab4@gmail.com',
    admin2Username: 'radec24',
    admin2Password: '',
    admin2RecoveryEmail: 'radec24@wp.pl',
    public: {
      siteUrl: 'https://radec24.pl'
    }
  },

  nitro: {
    experimental: { openAPI: false }
  }
})
