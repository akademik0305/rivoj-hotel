<script lang="ts" setup>
//===============================-< imports >-===============================
// types
// import type { TRestaurant, TRestaurantsData } from '~/types/api.types'
// // service
import { useI18n } from 'vue-i18n'
import Service from '~/service/Service'
import urls from '~/service/urls'
import type {
	TAdvantage,
	TBanners,
	TEmployee,
	TSections,
} from '~/types/api.types'

// //> utils
const { locale } = useI18n()
const token = useToken()
const localePath = useLocalePath()
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
const banners = ref<TBanners>()
//> functions
async function getBanners() {
	banners.value = await Service.get(urls.getBanners(), locale.value, null)
}

getBanners()

//===============================-< banners swiper >-===============================
//> variables
const bannersRef = ref(null)
const bannersSwiper = useSwiper(bannersRef, {
	// loop: true,
	spaceBetween: 20,
	autoplay: {
		delay: 3000,
	},
	pagination: {
		clickable: true,
	},
})
//> functions

//===============================-< categories >-===============================
//> variables
const categoryCardsRef = ref(null)
const categoryCardsSwiper = useSwiper(categoryCardsRef, {
	loop: true,
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
})
//> functions

//===============================-< get categories >-===============================
//> variables
const categories = ref()
//> functions
async function getCategories() {
	const res = await Service.get(urls.getCategories(), locale.value, null)

	categories.value = res.data
}

getCategories()

//===============================-< get sections >-===============================
//> variables
const sections = ref<TSections>()

async function getSections() {
	sections.value = await Service.get(
		urls.getSections(),
		locale.value,
		token.value
	)
}

getSections()
// refetch sections
function refetchSections() {
	getSections()
}
//> functions

//===============================-< get advantages >-===============================
//> variables
const advantages = ref<TAdvantage[]>()
//> functions
async function getAdvantages() {
	const res = await Service.get(urls.getAdvantages(), locale.value, null)

	advantages.value = res.data
}

getAdvantages()

//===============================-< get employees >-===============================
//> variables
const employees = ref<TEmployee[]>()
//> functions
async function getEmployees() {
	employees.value = await Service.get(urls.getEmployees(), locale.value, null)
}

getEmployees()
</script>
<template>
	<main class="">
		<!-- banner -->
		<section class="mt-3 pb-12">
			<div class="container">
				<ClientOnly>
					<div class="relative">
						<swiper-container ref="bannersRef" :init="true">
							<swiper-slide v-for="(slide, idx) in banners?.data" :key="idx">
								<!-- :href="slide.url" -->
								<!-- target="_blank" -->
								<div class="block h-auto md:h-[500px]">
									<img
										class="w-full h-full object-cover rounded-xl overflow-hidden"
										:src="slide.file_url"
										alt=""
									/>
								</div>
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
		<section class="pb-12">
			<div class="container">
				<div class="flex items-center justify-between">
					<h2 class="text-2xl font-semibold">{{ $t('popular_categories') }}</h2>
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

		<!-- sections -->
		<section
			v-for="section in sections?.data"
			v-show="section.products.length"
			:key="section.id"
			class="pb-12"
		>
			<div class="container">
				<div class="flex items-center justify-between">
					<h2 class="text-2xl font-semibold">{{ section.name }}</h2>
					<NuxtLink
						:to="localePath(`/sections/${section.id}`)"
						class="flex items-center gap-2 text-text hover:text-main transition-colors group"
					>
						{{ $t('all') }}
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
		<!-- sections -->

		<!-- advantages -->
		<section class="pb-12">
			<div class="container">
				<div class="flex items-center justify-between">
					<h2 class="text-2xl font-semibold">{{ $t('our_advantages') }}</h2>
				</div>
				<div class="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<div
						v-for="item in advantages"
						:key="item.id"
						class="border border-border rounded-md p-6"
					>
						<div class="flex items-center justify-center">
							<!-- :src="item.file_url" -->
							<img
								src="~/assets/images/svg/star_quality.svg"
								:alt="item.title"
								class="w-full h-full rounded-full border border-border object-cover aspect-square max-w-32"
							/>
						</div>
						<div class="mt-4 text-center">
							<h4 class="text-text text-xl">{{ item.title }}</h4>
							<p class="mt-4 text-subtext text-sm">{{ item.description }}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- advantages -->

		<!-- video -->
		<section class="pb-12">
			<div class="container">
				<div class="flex items-center justify-between">
					<h2 class="text-2xl font-semibold">{{ $t('work_video') }}</h2>
				</div>
				<div class="mt-4">
					<iframe
						src="https://www.youtube-nocookie.com/embed/jlydPpMKobg?si=t9af2k8fSIEUINkR&rel=0"
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerpolicy="strict-origin-when-cross-origin"
						allowfullscreen
						class="w-full h-full min-h-[30svh] md:min-h-[60svh] rounded-md overflow-hidden"
					/>
				</div>
			</div>
		</section>
		<!-- video -->

		<!-- employees -->
		<!-- <section class="pb-12">
			<div class="container">
				<div class="flex items-center justify-between">
					<h2 class="text-2xl font-semibold">{{ $t("our_employees") }}</h2>
				</div>
				<div
					class="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
				>
					<div
						v-for="item in employees"
						:key="item.id"
						class="border border-border rounded-md p-4"
					>
						<div class="flex items-center justify-center">
							<img
								:src="item.file_url"
								:alt="item.firstname"
								class="w-full h-full rounded-2xl border border-border object-cover aspect-square max-w-40"
							/>
						</div>
						<div class="mt-4 text-center">
							<h4 class="text-text text-xl font-semibold">
								{{ item.firstname }}
							</h4>
							<p class="mt-4 text-subtext text-sm">{{ item.position }}</p>
						</div>
					</div>
				</div>
			</div>
		</section> -->
		<section class="pb-12">
			<div class="container">
				<div class="flex items-center justify-between">
					<h2 class="text-2xl font-semibold">{{ $t('our_employees') }}</h2>
				</div>
				<div
					class="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
				>
					<div
						v-for="item in 5"
						:key="item"
						class="rounded-md p-4"
					>
						<div class="flex items-center justify-center">
							<!-- :src="item.file_url"
							:alt="item.firstname" -->

							<img
								src="~/assets/images/webp/1.webp"
								class="w-full h-full rounded-2xl object-cover aspect-square max-w-60"
							/>
						</div>
						<div class="mt-4 text-center">
							<h4 class="text-text text-xl font-semibold">
								<!-- {{ item.firstname }} -->
								Шерхон
							</h4>
							<p class="mt-4 text-subtext text-sm">
								<!-- {{ item.position }} -->
								Сотув менежери
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- employees -->

		<!-- map -->
		<section class="pb-12">
			<div class="container">
				<div class="flex items-center justify-between">
					<h2 class="text-2xl font-semibold">{{ $t('our_address') }}</h2>
				</div>
				<div class="mt-4 relative overflow-hidden w-full">
					<iframe
						title="map"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.5802910718353!2d71.73227842644344!3d40.173897570382415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb85c2ffd46eb7%3A0x583fcb9692d47240!2zIlJpdm9qLTk4IiDQl9CQ0JLQntCUINCW0JHQmA!5e0!3m2!1sru!2s!4v1756269338634!5m2!1sru!2s"
						style="border: 0"
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
						class="h-[50vh] w-full rounded-md overflow-hidden border border-border"
					/>
				</div>
			</div>
			<!-- map -->
		</section>
	</main>
</template>

<style>
.ytp-pause-overlay {
	display: none !important;
}
</style>
