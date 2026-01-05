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
//===============================-< get product detail >-===============================
//> variables
const product = ref<TProduct>()
//> functions
async function getProduct() {
	const res = await Service.get(
		urls.getOneProduct(Number(route.params.id)),
		locale.value,
		token.value
	)

	product.value = res.data
}

getProduct()
// 🔥 DYNAMIC SEO
useHead(() => {
  if (!product.value) return {}

  return {
    title: `${product.value.name} | ${product.value.category_name} | Rivoj98`,
    meta: [
      {
        name: 'description',
        content: `${product.value.name} — Rivoj98 tomonidan ishlab chiqariladigan sifatli ${product.value.category_name.toLowerCase()}.`
      }
    ]
  }
})

useSeoMeta({
	title: 'Rivoj-98',
	ogImage: '/icon.png',
})

// Product Schema
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": product.value?.name,
        "description": product.value?.description,
        "image": product.value?.file_url,
        "brand": {
          "@type": "Brand",
          "name": "Rivoj-98"
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "UZS",
          "price": product.value?.price,
          "availability": "https://schema.org/InStock"
        }
      })
    }
  ]
})
</script>
<template>
	<main
		v-if="product"
		class="py-8 min-h-screen bg-gradient-to-b from-bg to-navbar-bg"
	>
		<!-- Header -->
		<nav class="mb-8">
			<div class="container">
				<h1 class="text-3xl md:text-4xl font-bold text-text mb-4">
					{{ product?.name }}
				</h1>
				<ClientOnly>
					<BaseBreadcump
						:links="[
							{ label: $t('home_page'), url: '/' },
							{ label: product.category_name, url: '/categories' },
							{ label: product?.name },
						]"
					/>
				</ClientOnly>
			</div>
		</nav>

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
									>
										<img
											:src="product?.file_url"
											:alt="product?.name"
											class="w-full h-full max-w-96 object-contain group-hover:scale-105 transition-transform duration-500"
										/>
									</a>
								</div>
							</UiFuncybox>
						</ClientOnly>
					</div>

					<!-- Product Info -->
					<div class="flex-1 flex flex-col w-full space-y-6">
						<!-- Category Badge -->
						<div class="flex items-center gap-2">
							<span
								class="px-4 py-2 bg-main/10 text-main rounded-full text-sm font-medium"
							>
								{{ product?.category_name }}
							</span>
							<span
								v-if="product?.discount"
								class="px-4 py-2 bg-red-500/10 text-red-500 rounded-full text-sm font-medium flex items-center gap-1"
							>
								<UIcon name="i-lucide-tag" class="text-base" />
								-{{ product?.discount }}%
							</span>
						</div>

						<!-- About Product Card -->
						<div
							class="bg-navbar-bg border border-border rounded-2xl p-6 shadow-lg"
						>
							<h4
								class="text-xl font-bold text-text flex items-center gap-2 mb-4"
							>
								<UIcon name="i-lucide-info" class="text-2xl text-main" />
								{{ $t('about_product') }}
							</h4>
							<div
								class="prose prose-sm max-w-none text-subtext"
								v-html="product?.details?.description"
							/>
						</div>

						<!-- Price Card -->
						<div
							class="bg-gradient-to-r from-main/5 to-main/10 border border-main/20 rounded-2xl p-6"
						>
							<div class="flex items-center justify-between">
								<div>
									<p class="text-sm text-subtext mb-1">Narxi</p>
									<p class="font-bold text-2xl md:text-3xl text-main">
										{{ store.formatCurrency(product?.new_price) }}
									</p>
									<p
										v-if="product?.discount"
										class="font-medium text-sm md:text-base line-through text-subtext mt-1"
									>
										{{ store.formatCurrency(product?.price) }}
									</p>
								</div>
								<div
									class="w-16 h-16 rounded-full bg-main/10 flex items-center justify-center"
								>
									<UIcon name="i-lucide-wallet" class="text-3xl text-main" />
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
									>
										<UIcon
											name="i-lucide-shopping-cart"
											class="text-2xl group-hover:rotate-12 transition-transform"
										/>
										<span>Savatga o'tish</span>
									</NuxtLink>
									<button
										class="flex-1 min-w-[200px] flex items-center justify-center py-4 px-6 gap-2 rounded-xl border-2 border-red-500 text-red-500 cursor-pointer hover:bg-red-500 hover:text-white group transition-all duration-300 hover:scale-105 font-semibold"
										@click="cartStore.removeFromCart(product.id)"
									>
										<UIcon
											name="i-lucide-trash-2"
											class="text-2xl group-hover:rotate-12 transition-transform"
										/>
										<span>{{ $t('delete') }}</span>
									</button>
								</div>
								<button
									v-else
									class="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-main to-main/80 text-white rounded-xl py-4 px-6 cursor-pointer hover:shadow-lg hover:shadow-main/30 transition-all duration-300 hover:scale-105 active:scale-95 font-semibold text-lg group"
									@click="cartStore.addToCart(product)"
								>
									<UIcon
										name="i-lucide-shopping-cart"
										class="text-2xl group-hover:rotate-12 transition-transform"
									/>
									<span>{{ $t('add_to_cart') }}</span>
								</button>
							</ClientOnly>
						</div>
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
							<UIcon name="i-lucide-list" class="text-2xl text-main" />
						</div>
						<h3 class="text-xl lg:text-2xl font-bold text-text">
							Mahsulot nomeklaturasi
						</h3>
					</div>

					<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
						<!-- Brand -->
						<div
							class="bg-bg border border-border rounded-xl p-4 hover:border-main/30 transition-colors group"
						>
							<div class="flex items-start gap-3">
								<div
									class="w-10 h-10 rounded-lg bg-main/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
								>
									<UIcon
										name="i-lucide-badge-check"
										class="text-xl text-main"
									/>
								</div>
								<div class="flex-1">
									<p class="text-sm text-subtext mb-1">Mahsulot markasi</p>
									<p class="font-semibold text-lg text-text">
										{{ product?.details?.product_brand || '-' }}
									</p>
								</div>
							</div>
						</div>

						<!-- Length -->
						<div
							class="bg-bg border border-border rounded-xl p-4 hover:border-main/30 transition-colors group"
						>
							<div class="flex items-start gap-3">
								<div
									class="w-10 h-10 rounded-lg bg-main/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
								>
									<UIcon name="i-lucide-ruler" class="text-xl text-main" />
								</div>
								<div class="flex-1">
									<p class="text-sm text-subtext mb-1">Uzunligi</p>
									<p class="font-semibold text-lg text-text">
										{{ product?.details?.length || '-' }}
									</p>
								</div>
							</div>
						</div>

						<!-- Width -->
						<div
							class="bg-bg border border-border rounded-xl p-4 hover:border-main/30 transition-colors group"
						>
							<div class="flex items-start gap-3">
								<div
									class="w-10 h-10 rounded-lg bg-main/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
								>
									<UIcon
										name="i-lucide-move-horizontal"
										class="text-xl text-main"
									/>
								</div>
								<div class="flex-1">
									<p class="text-sm text-subtext mb-1">Eni</p>
									<p class="font-semibold text-lg text-text">
										{{ product?.details?.width || '-' }}
									</p>
								</div>
							</div>
						</div>

						<!-- Height -->
						<div
							class="bg-bg border border-border rounded-xl p-4 hover:border-main/30 transition-colors group"
						>
							<div class="flex items-start gap-3">
								<div
									class="w-10 h-10 rounded-lg bg-main/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
								>
									<UIcon
										name="i-lucide-move-vertical"
										class="text-xl text-main"
									/>
								</div>
								<div class="flex-1">
									<p class="text-sm text-subtext mb-1">Balandligi</p>
									<p class="font-semibold text-lg text-text">
										{{ product?.details.height || '-' }}
									</p>
								</div>
							</div>
						</div>

						<!-- Weight -->
						<div
							class="bg-bg border border-border rounded-xl p-4 hover:border-main/30 transition-colors group"
						>
							<div class="flex items-start gap-3">
								<div
									class="w-10 h-10 rounded-lg bg-main/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
								>
									<UIcon name="i-lucide-weight" class="text-xl text-main" />
								</div>
								<div class="flex-1">
									<p class="text-sm text-subtext mb-1">Vazni</p>
									<p class="font-semibold text-lg text-text">
										{{ product?.details.weight || '-' }}
									</p>
								</div>
							</div>
						</div>

						<!-- Mix Brand -->
						<div
							class="bg-bg border border-border rounded-xl p-4 hover:border-main/30 transition-colors group"
						>
							<div class="flex items-start gap-3">
								<div
									class="w-10 h-10 rounded-lg bg-main/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
								>
									<UIcon name="i-lucide-layers" class="text-xl text-main" />
								</div>
								<div class="flex-1">
									<p class="text-sm text-subtext mb-1">
										Beton qorishmasi klassi
									</p>
									<p class="font-semibold text-lg text-text">
										{{ product?.details.mix_brand || '-' }}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>
