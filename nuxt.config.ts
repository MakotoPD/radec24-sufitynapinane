export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
		title: 'Sufity napinane - Radec24 | Sufity napinane inowrcoław kujawsko-pomorskie',
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
				content: 'Radec24 - Jesteśmy wykonawcą profesjonalnych rozwiązań sufitów napinanych, które dodają nie tylko uroku, ale także funkcjonalności Twoim przestrzeniom. Nasza firma specjalizuje się w montażu sufitów napinanych o najwyższej jakości, spełniających najbardziej wymagające standardy estetyczne i techniczne.'
			},
			{
				name: 'keywords',
				content: 'sufity napinane, sufity napinany, sufity, napinany, stretch ceiling, ceiling, stretch, kujawsko, pomorskie, kujawsko pomorskie, sufity napinane cena, sufity napinane co to jest, sufity napinane inowrocław, sufity napinane bydgoszcz, sufity napinane toruń, sufit napinany czarny, sufit napinany w salonie, sufit napinany realizacje, folia, lustro, cena, z, w, na, czarny, do, jak'
			},
			{
				name: 'og:image',
				content: '/og.png'
			},
			{
				name: 'og:title',
				content: 'Sufity napinane - Radec24 | Sufity napinane inowrcoław kujawsko-pomorskie'
			},
			{
				name: 'og:description',
				content: 'Radec24 - Jesteśmy wykonawcą profesjonalnych rozwiązań sufitów napinanych, które dodają nie tylko uroku, ale także funkcjonalności Twoim przestrzeniom. Nasza firma specjalizuje się w montażu sufitów napinanych o najwyższej jakości, spełniających najbardziej wymagające standardy estetyczne i techniczne.'
			},
			{
				property:"og:type",
				content:"website"
			},
			{
				name:"twitter:card",
				content:"summary_large_image"
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
  spaLoadingTemplate: false,

  modules: [
    '@nuxtjs/tailwindcss',    		//css framework
		'@nuxt/image-edge',       	//images
		'nuxt-gtag',             	//gtag google analytics
		'@nuxtjs/google-fonts',   	//google fonts
		'~/modules/sitemap',		//sitemap
		'nuxt-gtag',				//google analytics
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
