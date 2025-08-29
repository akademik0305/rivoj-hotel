<script lang="ts" setup>
//===============================-< imports >-===============================
// types
// import type { TRestaurant, TRestaurantsData } from '~/types/api.types'
// // service
import Service from "~/service/Service";
import urls from "~/service/urls";
import type { TBanners, TSections } from "~/types/api.types";

// //> utils
const { locale } = useI18n();
const token = useToken();
const localePath = useLocalePath();
// const router = useRouter()
// const localePath = useLocalePath()

//===============================-< categories >-===============================
// //> variables
// const categoriesRef = ref(null)
// const categoriesSwiper = useSwiper(categoriesRef, {
// 	slidesPerView: 6,
// 	spaceBetween: 20,
// })
//> functions

//===============================-< get  banner >-===============================
//> variables
const banners = ref<TBanners>();
//> functions
async function getBanners() {
	banners.value = await Service.get(urls.getBanners(), locale.value, null);
}

getBanners();

//===============================-< banners swiper >-===============================
//> variables
const bannersRef = ref(null);
const bannersSwiper = useSwiper(bannersRef, {
	loop: true,
	spaceBetween: 20,
	autoplay: {
		delay: 3000,
	},
	pagination: {
		clickable: true,
	},
});
//> functions

//===============================-< categories >-===============================
//> variables
const categoryCardsRef = ref(null);
const categoryCardsSwiper = useSwiper(categoryCardsRef, {
	spaceBetween: 20,
	breakpoints: {
		320: {
			slidesPerView: 2.2,
			spaceBetween: 12,
		},
		450: {
			slidesPerView: 2.2,
		},
		600: {
			slidesPerView: 2.6,
		},
		768: {
			slidesPerView: 3.2,
		},
		1024: {
			slidesPerView: 3.5,
		},
		1280: {
			slidesPerView: 4,
		},
	},
	autoplay: {
		delay: 3000,
	},
});
//> functions

//===============================-< get categories >-===============================
//> variables
const categories = ref();
//> functions
async function getCategories() {
	const res = await Service.get(urls.getCategories(), locale.value, null);

	categories.value = res.data;
}

getCategories();

//===============================-< get sections >-===============================
//> variables
const sections = ref<TSections>();

async function getSections() {
	sections.value = await Service.get(
		urls.getSections(),
		locale.value,
		token.value
	);
}

getSections();
// refetch sections
function refetchSections() {
	getSections();
}
//> functions
</script>
<template>
	<main class="">
		<!-- banner -->
		<section class="mt-3 pb-8">
			<div class="container">
				<ClientOnly>
					<div class="relative">
						<swiper-container ref="bannersRef" :init="true">
							<swiper-slide v-for="(slide, idx) in banners?.data" :key="idx">
								<a
									:href="slide.url"
									target="_blank"
									class="block h-auto md:h-[450px]"
								>
									<img
										class="w-full h-full object-contain rounded-xl overflow-hidden"
										:src="slide.file_url"
										alt=""
									/>
								</a>
							</swiper-slide>
						</swiper-container>
						<button
							class="absolute top-1/2 -translate-y-1/2 -left-5 w-12 h-12 rounded-full bg-white shadow-md hidden md:flex items-center justify-center p-2 z-10"
							@click="bannersSwiper.prev()"
						>
							<UIcon name="tabler:chevron-left" class="text-2xl" />
						</button>
						<button
							class="absolute top-1/2 -translate-y-1/2 -right-5 w-12 h-12 rounded-full bg-white shadow-md hidden md:flex items-center justify-center p-2 z-10"
							@click="bannersSwiper.next()"
						>
							<UIcon name="tabler:chevron-right" class="text-2xl" />
						</button>
					</div>
				</ClientOnly>
			</div>
		</section>
		<!-- banner -->

		<!-- categories cards -->
		<section class="pb-8">
			<div class="container">
				<div class="flex items-center justify-between">
					<h2 class="text-2xl font-semibold">{{ $t("popular_categories") }}</h2>
				</div>
				<div class="mt-4 relative">
					<swiper-container ref="categoryCardsRef" :init="true" class="">
						<swiper-slide v-for="(slide, idx) in categories" :key="idx">
							<CategoryCard :category="slide" />
						</swiper-slide>
					</swiper-container>
					<button
						class="absolute top-1/2 -translate-y-1/2 -left-5 w-12 h-12 rounded-full bg-white shadow-md hidden md:flex items-center justify-center p-2 z-10"
						@click="categoryCardsSwiper.prev()"
					>
						<UIcon name="tabler:chevron-left" class="text-2xl" />
					</button>
					<button
						class="absolute top-1/2 -translate-y-1/2 -right-5 w-12 h-12 rounded-full bg-white shadow-md hidden md:flex items-center justify-center p-2 z-10"
						@click="categoryCardsSwiper.next()"
					>
						<UIcon name="tabler:chevron-right" class="text-2xl" />
					</button>
				</div>
			</div>
		</section>
		<!-- categories cards -->

		<!-- hot products -->
		<section
			v-for="section in sections?.data"
			v-show="section.products.length"
			:key="section.id"
			class="pb-8"
		>
			<div class="container">
				<div class="flex items-center justify-between">
					<h2 class="text-2xl font-semibold">{{ section.name }}</h2>
					<NuxtLink
						:to="localePath(`/sections/${section.id}`)"
						class="flex items-center gap-2 text-text hover:text-main transition-colors group"
					>
						{{ $t("all") }}
						<UIcon
							name="uil:arrow-right"
							class="font-medium text-2xl text-text group-hover:text-main transition-colors"
						/>
					</NuxtLink>
				</div>
				<div
					class="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-5"
				>
					<ProductCard
						v-for="product in section.products"
						:key="product.id"
						:product="product"
						@success-wishlist="refetchSections"
					/>
				</div>
			</div>
		</section>
		<!-- hot products -->

		<!-- map -->
		<section class="pb-10">
			<div class="container">
				<div class="flex items-center justify-between">
					<h2 class="text-2xl font-semibold">{{ $t("our_address") }}</h2>
				</div>
				<div class="mt-4 relative overflow-hidden w-full">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.5802910718353!2d71.73227842644344!3d40.173897570382415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb85c2ffd46eb7%3A0x583fcb9692d47240!2zIlJpdm9qLTk4IiDQl9CQ0JLQntCUINCW0JHQmA!5e0!3m2!1sru!2s!4v1756269338634!5m2!1sru!2s"
						style="border: 0"
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
						class="h-[50vh] w-full"
					/>
				</div>
			</div>
			<!-- map -->
		</section>
	</main>
</template>
