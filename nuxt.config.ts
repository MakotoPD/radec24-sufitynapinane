// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
			title: 'Sufity napinane - Radec24',
			htmlAttrs: {
				lang: 'pl',
			},
			meta: [{
					charset: 'utf-8'
				},
				{
					name: 'viewport',
					content: 'width=device-width, initial-scale=1'
				},
				{
					name: 'format-detection',
					content: 'telephone=no'
				},
				{
					name: 'description',
					content: 'Sufity napinane - RADEC24'
				},
				{
					name: 'keywords',
					content: 'sufity napinane, sufity napinany, sufity, napinany, stretch ceiling, ceiling, stretch, kujawsko, pomorskie, kujawsko pomorskie, sufity napinane cena, sufity napinane co to jest, sufity napinane inowrocław, sufity napinane bydgoszcz, sufity napinane toruń, sufit napinany czarny, sufit napinany w salonie, sufit napinany realizacje, folia, lustro, cena, z, w, na, czarny, do, jak'
				},
				{
					name: 'og:image',
					content: '/og.png'
				}
			],
			link: [{
					rel: 'icon',
					type: 'image/x-icon',
					href: '/favicon.ico'
				},
			],
    },

  },

  modules: [
    '@nuxtjs/tailwindcss',    		//css framework
		'@nuxt/image-edge',       	//images
		'nuxt-gtag',             	//gtag google analytics
		'@nuxtjs/google-fonts',   	//google fonts
		'~/modules/sitemap',		//sitemap
		'nuxt-gtag'					//google analytics
  	],


  	sitemap: {
		hostname: 'https://sufitynapinane.radec24.pl',
	},
	

  plugins: [
    { src: "@/plugins/aos", ssr: false, mode: "client" }
  ],

  tailwindcss: {
		configPath: 'tailwind.config',
	},

  googleFonts: {
		display: 'swap',
		families: {
			Poppins: {
				wght: [300, 400, 500, 600, 700, 800, 900],
			},
      		Roboto: {
				wght: [300, 400, 500, 600, 700, 800, 900],
			},
		},
	},

	gtag: {
		id: 'G-E0WG7DX403'
	},

	runtimeConfig: {

		public: {
			datoCmsToken: process.env.DATO_CMS_TOKEN
		}
	  },

  	css: [
		'@/assets/css/global.css',
	],

	routeRules:{
		'/': { ssr: false, prerender: true },
		'/realizacje': { ssr: true, isr: true }
	}

})
