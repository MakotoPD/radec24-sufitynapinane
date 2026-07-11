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
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://radec24.pl',
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

  runtimeConfig: {
    databaseUrl: process.env.DATABASE_URL,
    resendApiKey: process.env.RESEND_API_KEY,
    contactToEmail: process.env.CONTACT_TO_EMAIL || 'radec24@wp.pl',
    contactFromEmail: process.env.CONTACT_FROM_EMAIL || 'radec24@makoto.com.pl',
    galleryUploadDir: process.env.GALLERY_UPLOAD_DIR || '.data/uploads',
    admin1Username: process.env.ADMIN1_USERNAME || 'Technik',
    admin1Password: process.env.ADMIN1_PASSWORD || '',
    admin2Username: process.env.ADMIN2_USERNAME || 'radec24',
    admin2Password: process.env.ADMIN2_PASSWORD || '',
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://radec24.pl'
    }
  },

  nitro: {
    experimental: { openAPI: false }
  }
})
