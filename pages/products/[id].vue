<script lang="ts" setup>
//===============================-< imports >-===============================
import { useI18n } from 'vue-i18n'
import Service from '~/service/Service'
import urls from '~/service/urls'
import { useCartStore } from '~/store/cart.store'
import { useStore } from '~/store/useful.store'
import type { TProduct } from '~/types/api.types'

const { locale } = useI18n()
const route = useRoute()
const token = useToken()
const store = useStore()
const cartStore = useCartStore()
const localePath = useLocalePath()

// disable ssr
definePageMeta({
	ssr: false
})

//===============================-< get product detail >-===============================
const product = ref<TProduct>()

async function getProduct() {
	const res = await Service.get(
		urls.getOneProduct(Number(route.params.id)),
		locale.value,
		token.value
	)
	product.value = res.data
}

getProduct()

// DYNAMIC SEO - Product asosida
watch(
	product,
	newProduct => {
		if (!newProduct) return

		// SEO Meta
		useSeoMeta({
			title: `${newProduct.name} | ${newProduct.category_name} | Rivoj-98`,
			description: `${
				newProduct.name
			} - Rivoj-98 zavodidan yuqori sifatli ${newProduct.category_name.toLowerCase()}. Narxi: ${store.formatCurrency(
				newProduct.new_price
			)}. ${
				newProduct.details?.description?.slice(0, 100) ||
				'GOST standartlariga muvofiq ishlab chiqarilgan'
			}...`,
			keywords: `${newProduct.name}, ${
				newProduct.category_name
			}, rivoj-98, temir beton, ${
				newProduct.details?.product_brand || ''
			}, qurilish materiallari, Farg'ona`,
			ogTitle: `${newProduct.name} - Rivoj-98`,
			ogDescription: `${
				newProduct.name
			} yuqori sifatli temir beton mahsuloti. Narxi: ${store.formatCurrency(
				newProduct.new_price
			)}`,
			ogImage: newProduct.file_url,
			ogUrl: `https://rivoj98shop.uz/products/${newProduct.id}`,
			ogType: 'product',
		})

		// Canonical URL
		useHead({
			link: [
				{ rel: 'canonical', href: `https://rivoj98shop.uz${route.fullPath}` },
			],
			meta: [
				{ name: 'robots', content: 'index, follow' },
				{
					property: 'product:price:amount',
					content: String(newProduct.new_price),
				},
				{ property: 'product:price:currency', content: 'UZS' },
			],
		})

		// Product Schema
		useHead({
			script: [
				{
					type: 'application/ld+json',
					children: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'Product',
						name: newProduct.name,
						description:
							newProduct.details?.description ||
							`${newProduct.name} - Rivoj-98 zavodidan yuqori sifatli temir beton mahsuloti`,
						image: newProduct.file_url,
						brand: {
							'@type': 'Brand',
							name: newProduct.details?.product_brand || 'Rivoj-98',
						},
						manufacturer: {
							'@type': 'Organization',
							name: 'Rivoj-98',
						},
						offers: {
							'@type': 'Offer',
							url: `https://rivoj98shop.uz/products/${newProduct.id}`,
							priceCurrency: 'UZS',
							price: newProduct.new_price,
							priceValidUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
								.toISOString()
								.split('T')[0],
							availability: 'https://schema.org/InStock',
							itemCondition: 'https://schema.org/NewCondition',
							seller: {
								'@type': 'Organization',
								name: 'Rivoj-98',
							},
						},
						aggregateRating: {
							'@type': 'AggregateRating',
							ratingValue: '4.8',
							reviewCount: '25',
						},
						category: newProduct.category_name,
					}),
				},
				// BreadcrumbList Schema
				{
					type: 'application/ld+json',
					children: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'BreadcrumbList',
						itemListElement: [
							{
								'@type': 'ListItem',
								position: 1,
								name: 'Bosh sahifa',
								item: 'https://rivoj98shop.uz',
							},
							{
								'@type': 'ListItem',
								position: 2,
								name: newProduct.category_name,
								item: `https://rivoj98shop.uz/categories/${newProduct.category_id}`,
							},
							{
								'@type': 'ListItem',
								position: 3,
								name: newProduct.name,
								item: `https://rivoj98shop.uz/products/${newProduct.id}`,
							},
						],
					}),
				},
			],
		})
	},
	{ immediate: true }
)
</script>

<template>
	<main
		v-if="product"
		class="py-8 min-h-screen bg-gradient-to-b from-bg to-navbar-bg"
	>
		<!-- Breadcrumb Navigation -->
		<nav class="mb-8" aria-label="Breadcrumb">
			<div class="container">
				<ClientOnly>
					<BaseBreadcump
						:links="[
							{ label: $t('home_page'), url: '/' },
							{
								label: product.category_name,
								url: `/categories/${product.category_id}`,
							},
							{ label: product?.name },
						]"
					/>
				</ClientOnly>
			</div>
		</nav>

		<!-- H1 Header -->
		<header class="mb-6">
			<div class="container">
				<h1 class="text-3xl md:text-4xl font-bold text-text">
					{{ product?.name }} - Rivoj-98
				</h1>
				<p class="text-subtext mt-2">
					{{ product.category_name }} | Yuqori sifatli temir beton mahsuloti
				</p>
			</div>
		</header>

		<!-- Main Product Section -->
		<section class="mt-8">
			<div class="container">
				<div
					class="flex items-start justify-start gap-6 lg:gap-8 flex-col lg:flex-row"
				>
					<!-- Product Image -->
					<div class="w-full lg:w-1/2">
						<ClientOnly>
							<UiFuncybox
								:options="{
									Carousel: {
										infinite: false,
									},
								}"
							>
								<div
									class="rounded-2xl overflow-hidden border-2 border-border p-6 md:p-10 w-full bg-navbar-bg shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-main/30 group"
								>
									<a
										data-fancybox="gallery"
										class="w-full h-auto flex items-center justify-center cursor-zoom-in"
										:href="product?.file_url"
										:aria-label="`${product.name} - katta rasmini ko'rish`"
									>
										<img
											:src="product?.file_url"
											:alt="`${product.name} - ${product.category_name} - Rivoj-98 temir beton mahsuloti`"
											:title="product.name"
											class="w-full h-full max-w-96 object-contain group-hover:scale-105 transition-transform duration-500"
											loading="eager"
											itemprop="image"
										/>
									</a>
								</div>
							</UiFuncybox>
						</ClientOnly>
					</div>

					<!-- Product Info -->
					<div class="flex-1 flex flex-col w-full space-y-6">
						<!-- Category & Discount Badges -->
						<div class="flex items-center gap-2 flex-wrap">
							<span
								class="px-4 py-2 bg-main/10 text-main rounded-full text-sm font-medium"
								itemprop="category"
							>
								{{ product?.category_name }}
							</span>
							<span
								v-if="product?.discount"
								class="px-4 py-2 bg-red-500/10 text-red-500 rounded-full text-sm font-medium flex items-center gap-1"
							>
								<UIcon
									name="i-lucide-tag"
									class="text-base"
									aria-hidden="true"
								/>
								Chegirma -{{ product?.discount }}%
							</span>
							<span
								class="px-4 py-2 bg-green-500/10 text-green-500 rounded-full text-sm font-medium flex items-center gap-1"
							>
								<UIcon
									name="i-lucide-check-circle"
									class="text-base"
									aria-hidden="true"
								/>
								Skladda mavjud
							</span>
						</div>

						<!-- About Product Card -->
						<article
							class="bg-navbar-bg border border-border rounded-2xl p-6 shadow-lg"
						>
							<h2
								class="text-xl font-bold text-text flex items-center gap-2 mb-4"
							>
								<UIcon
									name="i-lucide-info"
									class="text-2xl text-main"
									aria-hidden="true"
								/>
								Mahsulot Haqida
							</h2>
							<div
								class="prose prose-sm max-w-none text-subtext"
								itemprop="description"
								v-html="
									product?.details?.description ||
									`${product.name} - Rivoj-98 zavodida GOST standartlariga muvofiq ishlab chiqarilgan yuqori sifatli temir beton mahsuloti. Professional qurilish ishlari uchun mo'ljallangan.`
								"
							/>
						</article>

						<!-- Price Card -->
						<div
							class="bg-gradient-to-r from-main/5 to-main/10 border border-main/20 rounded-2xl p-6"
							itemscope
							itemtype="https://schema.org/Offer"
						>
							<div class="flex items-center justify-between">
								<div>
									<p class="text-sm text-subtext mb-1">Narxi</p>
									<p
										class="font-bold text-2xl md:text-3xl text-main"
										itemprop="price"
										:content="product?.new_price"
									>
										{{ store.formatCurrency(product?.new_price) }}
										<!-- <meta itemprop="priceCurrency" content="UZS" /> -->
									</p>
									<p
										v-if="product?.discount"
										class="font-medium text-sm md:text-base line-through text-subtext mt-1"
									>
										{{ store.formatCurrency(product?.price) }}
									</p>
									<link
										itemprop="availability"
										href="https://schema.org/InStock"
									/>
								</div>
								<div
									class="w-16 h-16 rounded-full bg-main/10 flex items-center justify-center"
								>
									<UIcon
										name="i-lucide-wallet"
										class="text-3xl text-main"
										aria-hidden="true"
									/>
								</div>
							</div>
						</div>

						<!-- Action Buttons -->
						<div class="space-y-3">
							<ClientOnly>
								<div
									v-if="cartStore.checkIsExist(product.id)"
									class="flex items-center justify-between gap-3 flex-wrap"
								>
									<NuxtLink
										:to="localePath('/cart')"
										class="flex-1 min-w-[200px] flex items-center justify-center gap-2 bg-main text-white rounded-xl py-4 px-6 cursor-pointer hover:shadow-lg hover:shadow-main/30 transition-all duration-300 hover:scale-105 font-semibold group"
										aria-label="Savatga o'tish"
									>
										<UIcon
											name="i-lucide-shopping-cart"
											class="text-2xl group-hover:rotate-12 transition-transform"
											aria-hidden="true"
										/>
										<span>Savatga o'tish</span>
									</NuxtLink>
									<button
										class="flex-1 min-w-[200px] flex items-center justify-center py-4 px-6 gap-2 rounded-xl border-2 border-red-500 text-red-500 cursor-pointer hover:bg-red-500 hover:text-white group transition-all duration-300 hover:scale-105 font-semibold"
										aria-label="Savatdan o'chirish"
										@click="cartStore.removeFromCart(product.id)"
									>
										<UIcon
											name="i-lucide-trash-2"
											class="text-2xl group-hover:rotate-12 transition-transform"
											aria-hidden="true"
										/>
										<span>{{ $t('delete') }}</span>
									</button>
								</div>
								<button
									v-else
									class="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-main to-main/80 text-white rounded-xl py-4 px-6 cursor-pointer hover:shadow-lg hover:shadow-main/30 transition-all duration-300 hover:scale-105 active:scale-95 font-semibold text-lg group"
									aria-label="Savatga qo'shish"
									@click="cartStore.addToCart(product)"
								>
									<UIcon
										name="i-lucide-shopping-cart"
										class="text-2xl group-hover:rotate-12 transition-transform"
										aria-hidden="true"
									/>
									<span>{{ $t('add_to_cart') }}</span>
								</button>
							</ClientOnly>
						</div>

						<!-- Trust Badges -->
						<!-- <div class="grid grid-cols-3 gap-3">
							<div
								class="text-center p-3 bg-white/50 rounded-lg border border-border"
							>
								<UIcon
									name="i-lucide-shield-check"
									class="text-2xl text-green-500 mx-auto mb-1"
									aria-hidden="true"
								/>
								<p class="text-xs text-subtext font-medium">GOST standart</p>
							</div>
							<div
								class="text-center p-3 bg-white/50 rounded-lg border border-border"
							>
								<UIcon
									name="i-lucide-truck"
									class="text-2xl text-blue-500 mx-auto mb-1"
									aria-hidden="true"
								/>
								<p class="text-xs text-subtext font-medium">
									Tez yetkazib berish
								</p>
							</div>
							<div
								class="text-center p-3 bg-white/50 rounded-lg border border-border"
							>
								<UIcon
									name="i-lucide-award"
									class="text-2xl text-yellow-500 mx-auto mb-1"
									aria-hidden="true"
								/>
								<p class="text-xs text-subtext font-medium">Sifat kafolati</p>
							</div>
						</div> -->
					</div>
				</div>
			</div>
		</section>

		<!-- Product Specifications -->
		<section v-if="product.details" class="mt-12">
			<div class="container">
				<div
					class="bg-navbar-bg border border-border rounded-2xl p-6 md:p-8 shadow-lg"
				>
					<div class="flex items-center gap-3 mb-6">
						<div
							class="w-12 h-12 rounded-full bg-main/10 flex items-center justify-center"
						>
							<UIcon
								name="i-lucide-list"
								class="text-2xl text-main"
								aria-hidden="true"
							/>
						</div>
						<h2 class="text-xl lg:text-2xl font-bold text-text">
							Texnik Xususiyatlari - {{ product.name }}
						</h2>
					</div>

					<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
						<!-- Brand -->
						<div
							v-if="product?.details?.product_brand"
							class="bg-bg border border-border rounded-xl p-4 hover:border-main/30 transition-colors group"
						>
							<div class="flex items-start gap-3">
								<div
									class="w-10 h-10 rounded-lg bg-main/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
								>
									<UIcon
										name="i-lucide-badge-check"
										class="text-xl text-main"
										aria-hidden="true"
									/>
								</div>
								<div class="flex-1">
									<p class="text-sm text-subtext mb-1">Mahsulot markasi</p>
									<p class="font-semibold text-lg text-text">
										{{ product?.details?.product_brand }}
									</p>
								</div>
							</div>
						</div>

						<!-- Length -->
						<div
							v-if="product?.details?.length"
							class="bg-bg border border-border rounded-xl p-4 hover:border-main/30 transition-colors group"
						>
							<div class="flex items-start gap-3">
								<div
									class="w-10 h-10 rounded-lg bg-main/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
								>
									<UIcon
										name="i-lucide-ruler"
										class="text-xl text-main"
										aria-hidden="true"
									/>
								</div>
								<div class="flex-1">
									<p class="text-sm text-subtext mb-1">Uzunligi</p>
									<p class="font-semibold text-lg text-text">
										{{ product?.details?.length }}
									</p>
								</div>
							</div>
						</div>

						<!-- Width -->
						<div
							v-if="product?.details?.width"
							class="bg-bg border border-border rounded-xl p-4 hover:border-main/30 transition-colors group"
						>
							<div class="flex items-start gap-3">
								<div
									class="w-10 h-10 rounded-lg bg-main/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
								>
									<UIcon
										name="i-lucide-move-horizontal"
										class="text-xl text-main"
										aria-hidden="true"
									/>
								</div>
								<div class="flex-1">
									<p class="text-sm text-subtext mb-1">Eni</p>
									<p class="font-semibold text-lg text-text">
										{{ product?.details?.width }}
									</p>
								</div>
							</div>
						</div>

						<!-- Height -->
						<div
							v-if="product?.details?.height"
							class="bg-bg border border-border rounded-xl p-4 hover:border-main/30 transition-colors group"
						>
							<div class="flex items-start gap-3">
								<div
									class="w-10 h-10 rounded-lg bg-main/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
								>
									<UIcon
										name="i-lucide-move-vertical"
										class="text-xl text-main"
										aria-hidden="true"
									/>
								</div>
								<div class="flex-1">
									<p class="text-sm text-subtext mb-1">Balandligi</p>
									<p class="font-semibold text-lg text-text">
										{{ product?.details.height }}
									</p>
								</div>
							</div>
						</div>

						<!-- Weight -->
						<div
							v-if="product?.details?.weight"
							class="bg-bg border border-border rounded-xl p-4 hover:border-main/30 transition-colors group"
						>
							<div class="flex items-start gap-3">
								<div
									class="w-10 h-10 rounded-lg bg-main/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
								>
									<UIcon
										name="i-lucide-weight"
										class="text-xl text-main"
										aria-hidden="true"
									/>
								</div>
								<div class="flex-1">
									<p class="text-sm text-subtext mb-1">Vazni</p>
									<p class="font-semibold text-lg text-text">
										{{ product?.details.weight }}
									</p>
								</div>
							</div>
						</div>

						<!-- Mix Brand -->
						<div
							v-if="product?.details?.mix_brand"
							class="bg-bg border border-border rounded-xl p-4 hover:border-main/30 transition-colors group"
						>
							<div class="flex items-start gap-3">
								<div
									class="w-10 h-10 rounded-lg bg-main/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
								>
									<UIcon
										name="i-lucide-layers"
										class="text-xl text-main"
										aria-hidden="true"
									/>
								</div>
								<div class="flex-1">
									<p class="text-sm text-subtext mb-1">
										Beton qorishmasi klassi
									</p>
									<p class="font-semibold text-lg text-text">
										{{ product?.details.mix_brand }}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- SEO Content Section -->
		<section class="mt-12">
			<div class="container">
				<div class="bg-white rounded-2xl p-6 md:p-8 border border-border">
					<h2 class="text-2xl font-bold text-text mb-4">
						{{ product.name }} - Rivoj-98 dan Sifatli Temir Beton
					</h2>
					<div class="prose max-w-none text-subtext space-y-4">
						<p>
							<strong>{{ product.name }}</strong> - Rivoj-98 xususiy korxonasida
							ishlab chiqarilgan yuqori sifatli
							{{ product.category_name.toLowerCase() }}. Mahsulot GOST
							standartlariga to'liq muvofiq keladi va qurilish ishlarida keng
							qo'llaniladi.
						</p>
						<p>
							Rivoj-98 zavodi 1998 yildan beri Farg'ona vodiysida professional
							temir beton mahsulotlari ishlab chiqaruvchi sifatida faoliyat
							yuritadi. {{ product.name }} bizning eng mashhur
							mahsulotlarimizdan biri bo'lib, minglab qurilish loyihalarida
							muvaffaqiyatli ishlatilgan.
						</p>
						<h3 class="text-xl font-semibold text-text mt-6 mb-3">
							{{ product.name }} ning Afzalliklari:
						</h3>
						<ul class="list-disc list-inside space-y-2">
							<li>GOST standartlariga to'liq muvofiq ishlab chiqarilgan</li>
							<li>Yuqori mustahkamlik va bardoshlilik</li>
							<li>Professional qurilish ishlari uchun optimal</li>
							<li>Sifat nazorati bosqichlaridan o'tgan</li>
							<li>Raqobatbardosh narx va tez yetkazib berish</li>
						</ul>
						<p class="mt-4">
							{{ product.name }} buyurtma berish yoki batafsil ma'lumot olish
							uchun biz bilan
							<NuxtLink
								to="/contact"
								class="text-main hover:underline font-semibold"
							>
								bog'laning
							</NuxtLink>
							yoki to'g'ridan-to'g'ri
							<a
								href="tel:+998785559898"
								class="text-main hover:underline font-semibold"
							>
								+998 78 555 98 98
							</a>
							raqamiga qo'ng'iroq qiling.
						</p>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>
