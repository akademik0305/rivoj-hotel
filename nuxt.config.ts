// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import type { TCategory } from "./types/api.types";

export default defineNuxtConfig({
	compatibilityDate: "2024-11-01",
	devtools: { enabled: true },
	colorMode: {
		preference: "light",
	},

	ssr: true,
	nitro: {
		preset: 'static',
		prerender: {
			crawlLinks: true,
			routes: ['/']
		}
	},

	// SEO va meta
	experimental: {
		payloadExtraction: false
	},

	app: {
		head: {
			htmlAttrs: {
				lang: 'uz'
			},
			link: [
				{
					rel: "icon",
					type: "image/png",
					href: "./icon.png",
				},
				{ rel: 'canonical', href: 'https://rivoj98.uz' }

			],
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{ name: 'author', content: 'Rivoj-98' },
				{ name: 'robots', content: 'index, follow' },
			],

		},
		baseURL: '/', // yoki '/subfolder/' agar kerak bo'lsa
		buildAssetsDir: '/_nuxt/',
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
	],
	site: {
		url: 'https://rivoj98shop.uz/',
		name: 'Rivoj-98',
	},



	icon: {
		serverBundle: {
			collections: ["hugeicons"], // <!--- this
		},
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
			// {
			// 	code: "ru",
			// 	name: "ru",
			// 	file: "ru.json",
			// },
			// {
			// 	code: "en",
			// 	name: "en",
			// 	file: "en.json",
			// },
		],
	},

	sitemap: {
		urls: async () => {
			const locale = 'uz';
			const urls: any[] = [];

			try {
				// Kategoriyalar
				const categories: { data: TCategory } = await $fetch(`https://api.rivoj98shop.uz/api/categories`, {
					headers: { 'Accept-Language': locale }
				});

				if (Array.isArray(categories.data)) {
					categories.data.forEach((cat: TCategory) => {

						urls.push({
							loc: `/categories/${cat.id}`,
							lastmod: new Date(),
							changefreq: 'weekly',
							priority: 0.8
						});
					});
				}

				// Mahsulotlar
				const products = await $fetch(`https://api.rivoj98shop.uz/api/products`, {
					headers: { 'Accept-Language': locale }
				});

				if (Array.isArray(products.data)) {
					products.data.forEach((product: any) => {
						urls.push({
							loc: `/products/${product.id}`,
							lastmod: new Date(),
							changefreq: 'monthly',
							priority: 0.6
						});
					});
				}


			} catch (error) {
				console.error('❌ Sitemap xatolik:', error);
			}

			return urls;
		},


		routes: [
			'/',
			'/about',
			'/contact',
			'/cart',
		]
	}
});
