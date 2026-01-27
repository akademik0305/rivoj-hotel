// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
	compatibilityDate: "2024-11-01",
	devtools: { enabled: true },
	colorMode: {
		preference: "light",
	},

	ssr: true,
	// SEO va meta
	experimental: {
		payloadExtraction: false,
	},

	app: {
		head: {
			htmlAttrs: {
				lang: "uz",
			},
			link: [
				{
					rel: "icon",
					type: "image/x-icon",
					href: "/favicon.ico",
				},
				// { rel: 'canonical', href: 'https://rivoj98.uz' }
			],
			meta: [
				{ charset: "utf-8" },
				{ name: "viewport", content: "width=device-width, initial-scale=1" },
				{ name: "author", content: "Rivoj-98 Hotel" },
				{ name: "robots", content: "index, follow" },
				// { name: 'yandex-verification', content: '9eea816606fb6a73' }
			],
		},
		baseURL: "/", // yoki '/subfolder/' agar kerak bo'lsa
		buildAssetsDir: "/_nuxt/",
		// __dangerouslyDisableSanitizersByTagID: {
		// 	'yandex-metrika': ['innerHTML']
		// }
	},

	runtimeConfig: {
		public: {
			// apiBaseUrl: process.env.API_BASE_URL,
		},
	},

	modules: [
		"@nuxt/eslint",
		"@nuxt/fonts",
		"@nuxt/icon",
		"@nuxt/image",
		"@nuxt/test-utils",
		"@nuxt/ui",
		"nuxt-swiper",
		"@nuxtjs/i18n",
		"@pinia/nuxt",
		"pinia-plugin-persistedstate/nuxt",
		"@nuxtjs/sitemap",
		"nuxt-gtag",
		"@nuxtjs/seo",
		"nuxt-schema-org",
	],
	icon: {
		serverBundle: {
			collections: ["material-symbols", "mdi", "line-icons"],
		},
	},

	site: {
		url: "https://rivoj98hotel.uz/",
		name: "Rivoj-98 Hotel",
	},

	gtag: {
		id: "G-4NQX6G9EFF",
	},

	vite: {
		plugins: [tailwindcss()],
	},
	css: ["~/assets/css/main.css"],

	i18n: {
		defaultLocale: "uz",
		langDir: "./locales/",
		locales: [
			{
				code: "uz",
				name: "uz",
				file: "uz.json",
			},
			{
				code: "ru",
				name: "ru",
				file: "ru.json",
			},
			{
				code: "en",
				name: "en",
				file: "en.json",
			},
		],
		detectBrowserLanguage: false
	},

	sitemap: {
		// routes: [
		// 	'/',
		// 	// '/about',
		// 	// '/contact',
		// 	// '/cart',
		// ]
	},
})
