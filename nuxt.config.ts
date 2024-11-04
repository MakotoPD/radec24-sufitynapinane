export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
		title: 'Sufity napinane - Radec24 | Sufity napinane inowrcoław',
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
				content: 'sufity napinane Inowrocław, sufity napinane kujawsko-pomorskie, RADEC24 sufity napinane, montaż sufitów napinanych Inowrocław, sufity napinane montaż Inowrocław, montaż sufitów napinanych kujawsko-pomorskie, napinane sufity Inowrocław, napinane sufity kujawsko-pomorskie, montaż sufitów podwieszanych Inowrocław, sufit podwieszany kujawsko-pomorskie, instalacja sufitów napinanych Inowrocław, sufit napinany LED Inowrocław, sufit napinany 3D Inowrocław, sufit napinany z nadrukiem kujawsko-pomorskie, sufit napinany z oświetleniem Inowrocław, montaż sufitów napinanych z efektem lustrzanym, sufit napinany materiałowy kujawsko-pomorskie, sufit napinany matowy Inowrocław, sufit napinany lakierowany Inowrocław, sufit napinany błyszczący kujawsko-pomorskie, sufit napinany transparentny Inowrocław, sufity napinane z grafiką, sufit napinany gwieździste niebo kujawsko-pomorskie, sufity napinane Bydgoszcz, sufity napinane Toruń, sufity napinane Włocławek, sufity napinane Grudziądz, sufit napinany na zamówienie kujawsko-pomorskie, montaż sufitów napinanych Bydgoszcz, montaż sufitów napinanych Toruń, sufit napinany dom kujawsko-pomorskie, sufit napinany mieszkanie Inowrocław, sufit napinany do łazienki Inowrocław, sufit napinany do kuchni kujawsko-pomorskie, sufit napinany do salonu, sufit napinany do biura Inowrocław, sufit napinany w domu jednorodzinnym, sufit napinany w pokoju dziecięcym, cena sufitu napinanego Inowrocław, koszt montażu sufitu napinanego kujawsko-pomorskie, trwałość sufitów napinanych, zalety sufitów napinanych, sufit napinany czy warto, opinie o sufitach napinanych Inowrocław, nowoczesne sufity napinane, gdzie zamówić sufit napinany Inowrocław, najtańsze sufity napinane Inowrocław, instalacja sufitów napinanych w domu kujawsko-pomorskie, profesjonalny montaż sufitów napinanych Inowrocław, szybki montaż sufitu napinanego Inowrocław, fachowy montaż sufitów napinanych, montaż sufitów napinanych Toruń, sufit napinany Toruń, napinane sufity Toruń, sufit napinany LED Bydgoszcz, sufit napinany Bydgoszcz, montaż sufitów napinanych Bydgoszcz, sufit napinany Bydgoszcz, montaż sufitów napinanych Grudziądz, sufit napinany Grudziądz, montaż sufitów napinanych Włocławek, sufit napinany Włocławek, napinane sufity Bydgoszcz, sufit napinany z oświetleniem Bydgoszcz, sufit napinany z oświetleniem Toruń, sufit napinany z nadrukiem Bydgoszcz, sufit napinany z nadrukiem Toruń, sufit napinany w pokoju dziecięcym Toruń, sufit napinany w pokoju dziecięcym Bydgoszcz, sufit napinany do łazienki Toruń, sufit napinany do łazienki Bydgoszcz, sufit napinany do salonu Bydgoszcz, sufit napinany do salonu Toruń, sufit napinany do kuchni Toruń, sufit napinany do kuchni Bydgoszcz'
			},
			{
				name: 'og:image',
				content: '/og.png'
			},
			{
				name: 'og:title',
				content: 'Sufity napinane - Radec24 | Sufity napinane inowrcoław'
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
		script: [
			{
				type: 'application/ld+json',
				children: '{"@context": "https://schema.org","@type": "GeneralContractor","name": "RADEC24","image": "https://radec24.pl/favicon.png","@id": "","url": "https://radec24.pl","telephone": "+48737444950","priceRange": "2000-15000","address": {  "@type": "PostalAddress",  "streetAddress": "Świętego Ducha 108", "addressLocality": "Inowrocław","postalCode": "88-100","addressCountry": "PL"},"openingHoursSpecification": {"@type": "OpeningHoursSpecification","dayOfWeek": [  "Monday",  "Tuesday",  "Wednesday",  "Thursday",  "Friday",  "Saturday", "Sunday"],"opens": "00:00","closes": "23:59"},"sameAs": ["https://www.facebook.com/RADEC24pl/","https://www.instagram.com/radec24pl","https://www.youtube.com/channel/UCKJPSXYHxrWx0PDYVwqLGEw/","https://radec24.pl"] }'
			}
		]
    },

  },
  spaLoadingTemplate: false,

  modules: [
		'@nuxtjs/tailwindcss',    	//css framework
		'@nuxt/image-edge',       	//images
		'nuxt-gtag',             	//gtag google analytics
		'@nuxtjs/google-fonts',   	//google fonts
		'~/modules/sitemap',		//sitemap
		'nuxt-gtag',				//google analytics
  	],


  	sitemap: {
		hostname: 'https://radec24.pl',
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
