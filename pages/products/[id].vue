<script lang="ts" setup>
//===============================-< imports >-===============================
import { useI18n } from "vue-i18n";
import Service from "~/service/Service";
import urls from "~/service/urls";
import { useCartStore } from "~/store/cart.store";
import { useStore } from "~/store/useful.store";
import type { TProduct } from "~/types/api.types";
const { locale } = useI18n();
const route = useRoute();
const token = useToken();
const store = useStore();
const cartStore = useCartStore();
const localePath = useLocalePath();
//===============================-< get product detail >-===============================
//> variables
const product = ref<TProduct>();
//> functions
async function getProduct() {
	product.value = await Service.get(
		urls.getOneProduct(Number(route.params.id)),
		locale.value,
		token.value
	);
}

getProduct();
</script>
<template>
	<main v-if="product" class="py-6">
		<nav>
			<div class="container">
				<h2 class="text-2xl font-semibold">
					{{ product?.name }}
				</h2>
				<BaseBreadcump
					:links="[
						{ label: $t('home_page'), url: '/' },
						{ label: $t('categories'), url: '/categories' },
						{ label: product?.name },
					]"
				/>
			</div>
		</nav>

		<section class="mt-8">
			<div class="container">
				<div
					class="flex items-start justify-start gap-6 lg:gap-8 flex-col md:flex-row"
				>
					<div class="w-full md:w-1/2">
						<ClientOnly>
							<!-- MAIN SWIPER -->
							<UiFuncybox
								:options="{
									Carousel: {
										infinite: false,
									},
								}"
							>
								<div
									class="rounded-2xl overflow-hidden border border-border p-4 md:p-8 w-full sm:w-auto"
								>
									<!-- <div v-if="false">
										<swiper-container
											:init="true"
											:loop="true"
											:slides-per-view="1"
											:space-between="20"
											:pagination="{
												clickable: true,
											}"
											:autoplay="{
												delay: 3000,
											}"
											class="rounded-2xl overflow-hidden border border-border"
										>
											<swiper-slide
												v-for="image in product.images"
												:key="image"
												class="p-4"
											>
												<a
													data-fancybox="gallery"
													class="w-full h-auto flex items-center justify-center"
													:href="image"
												>
													<img
														:src="image"
														:alt="product.name"
														class="w-full h-full max-w-80"
													/>
												</a>
											</swiper-slide>
										</swiper-container>
									</div> -->

									<a
										data-fancybox="gallery"
										class="w-full h-auto flex items-center justify-center"
										:href="product?.file_url"
									>
										<img
											:src="product?.file_url"
											:alt="product?.name"
											class="w-full h-full max-w-80"
										/>
									</a>
								</div>
							</UiFuncybox>
						</ClientOnly>
					</div>
					<div class="flex-1 flex flex-col w-full">
						<h4 class="text-xl font-semibold">{{ $t("about_product") }}</h4>
						<p class="mt-2" v-html="product?.details.description" />
						<div class="mt-2 md:mt-4 flex-1">
							<p class="font-bold text-sm md:text-xl">
								{{ store.formatCurrency(product?.new_price) }}
							</p>
							<p
								v-if="product?.discount"
								class="font-medium text-xs md:text-sm line-through text-subtext"
							>
								{{ store.formatCurrency(product?.price) }}
							</p>
						</div>

						<div class="mt-6">
							<div
								v-if="cartStore.checkIsExist(product.id)"
								class="w-max flex items-center justify-between gap-3"
							>
								<NuxtLink
									:to="localePath('/cart')"
									class="flex items-center justify-center gap-2 bg-main border border-bg rounded-full w-full py-1.5 px-4 cursor-pointer group hover:bg-bg hover:border-main transition-colors"
								>
									<UIcon
										name="proicons:cart"
										class="text-2xl w-6 text-bg group-hover:text-main"
									/>
								</NuxtLink>
								<button
									class="w-full flex items-center justify-center py-1.5 px-4 gap-2 rounded-3xl border border-main cursor-pointer hover:bg-main group transition-colors"
									@click="cartStore.removeFromCart(product.id)"
								>
									<UIcon
										name="mynaui:trash"
										class="text-2xl w-6 text-main group-hover:text-white"
									/>
									<span class="text-sm text-main group-hover:text-white">{{
										$t("delete")
									}}</span>
								</button>
							</div>
							<div v-else class="w-full">
								<!-- <p
									v-if="!product.residue"
									class="flex items-center justify-center gap-2 bg-gray-400 border border-bg rounded-full w-full py-2 px-3 md:px-6 flex-1 text-xs md:text-base"
								>
									{{ $t("empty") }}
								</p> -->
								<button
									class="flex items-center justify-center gap-2 bg-main border border-bg rounded-full w-full max-w-sm py-2 px-3 md:px-6 cursor-pointer group hover:bg-bg hover:border-main transition-colors"
									@click="cartStore.addToCart(product)"
								>
									<UIcon
										name="proicons:cart"
										class="text-2xl w-6 text-bg group-hover:text-main"
									/>
									<span class="text-sm text-bg group-hover:text-main">{{
										$t("add_to_cart")
									}}</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="mt-6">
			<div class="container">
				<h3 class="text-center text-lg lg:text-xl font-semibold">Mahsulot nomeklaturasi</h3>
				<div class="mt-4 border border-border rounded-lg overflow-auto">
					<div class="grid grid-rows-1 md:grid-cols-2">
						<div class="p-3">
							<p>Mahsulot markasi</p>
							<p class="mt-2 font-semibold text-lg">
								{{ product?.details.product_brand || "-" }}
							</p>
						</div>
						<div class="border-t md:border-t-0 md:border-l border-border p-3">
							<p class="">Uzunligi</p>
							<p class="mt-2 font-semibold text-lg">
								{{ product?.details.length || "-" }}
							</p>
						</div>
						<div class="p-3 border-t border-border">
							<p class="">Eni</p>
							<p class="mt-2 font-semibold text-lg">
								{{ product?.details.width || "-" }}
							</p>
						</div>
						<div class="border-t md:border-l border-border p-3">
							<p class="">Balandligi</p>
							<p class="mt-2 font-semibold text-lg">
								{{ product?.details.height || "-" }}
							</p>
						</div>
						<div class="p-3 border-t border-border">
							<p class="">Vazni</p>
							<p class="mt-2 font-semibold text-lg">
								{{ product?.details.weight || "-" }}
							</p>
						</div>
						<div class="border-t md:border-l border-border p-3">
							<p class="">Beton qorishmasi klassi</p>
							<p class="mt-2 font-semibold text-lg">
								{{ product?.details.mix_brand || "-" }}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- <section class="mt-8">
			<div class="container">
				<h4 class="text-xl font-semibold">Mahsulot xususiyatlari</h4>
				<div class="mt-5">
					<h5 class="font-semibold text-lg">Tavsif</h5>
					<p class="mt-2">
						Ushbu zamonaviy Artel UA43H3502 Smart televizori ajoyib
						xususiyatlarga ega zamonaviy qurilmadir. Uning 43 dyuymli diagonali
						ajoyib vizual tajribani yaratadi va 4K UHD (3840x2160) o'lchamlari
						tasvirning yuqori darajadagi ravshanligi va tafsilotlarini
						ta'minlaydi.
						<br />
						Ips matritsasi bilan jihozlangan LCD displey turi 178 daraja keng
						ko'rish burchagidan bahramand bo'lish imkonini beradi, bu qurilmani
						oilaviy tomosha qilish va kompaniyadagi qiziqarli oqshomlar uchun
						ideal qiladi. Direct LED yoritish texnologiyasi ilg'or LED
						texnologiyasi bilan birgalikda boy ranglar, boy kontrast va real
						tasvirni taqdim etadi. 16:9 nisbatda u yuqori aniqlikdagi filmlar va
						videolarni o'z ichiga olgan katta formatli tomosha qilish uchun
						ideal. Shuningdek, u sifatni keyingi bosqichga olib chiqadigan
						tasvirni qayta ishlash texnologiyasi bilan jihozlangan.
					</p>
				</div>
			</div>
		</section> -->
	</main>
</template>
