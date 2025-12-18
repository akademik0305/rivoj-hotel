<script lang="ts" setup>
//===============================-< imports >-===============================
// types
import type { AccordionItem } from '@nuxt/ui'
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
		// delay: 2000,
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

//===============================-< employees swiper >-===============================
//> variables
const employeeCardsRef = ref(null)
const employeeCardsSwiper = useSwiper(employeeCardsRef, {
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
		delay: 1000,
	},
})

//===============================-< partners swiper >-===============================
//> variables
const partnersRef = ref(null)
const partnersSwiper = useSwiper(partnersRef, {
	loop: true,
	spaceBetween: 20,
	breakpoints: {
		320: {
			slidesPerView: 2.2,
			spaceBetween: 12,
		},
		450: {
			slidesPerView: 2.5,
		},
		600: {
			slidesPerView: 3.0,
		},
		768: {
			slidesPerView: 3.5,
		},
		1024: {
			slidesPerView: 5,
		},
		1280: {
			slidesPerView: 6,
		},
	},
	autoplay: {
		delay: 1500,
	},
})

//===============================-< faqs >-===============================
//> variables

const items = ref<AccordionItem[]>([
	{
		label: 'Юқори сифат ва профессионаллик',
		content:
			'Биз ўз соҳамизда тажрибали мутахассислар жамоасимиз ва хизматларимизнинг сифати доимо юқори даражада.',
	},
	{
		label: 'Colors',

		content:
			'Choose a primary and a neutral color from your Tailwind CSS theme.',
	},
	{
		label: 'Components',

		content:
			'You can customize components by using the `class` / `ui` props or in your app.config.ts.',
	},
])
//> functions
</script>
<template>
	<main class="">
		<!-- banner -->
		<section class="mt-3 pb-12">
			<div class="container">
				<ClientOnly>
					<div class="relative">
						<swiper-container ref="bannersRef" :init="false">
							<swiper-slide v-for="(slide, idx) in banners?.data" :key="idx">
								<!-- :href="slide.url" -->
								<!-- target="_blank" -->
								<div class="block h-auto md:h-[400px] lg:h-[550px]">
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
					<swiper-container ref="categoryCardsRef" :init="false" class="">
						<swiper-slide
							v-for="(slide, idx) in categories"
							:key="slide.id || idx"
							data-aos="fade-up"
						>
							<CategoryCard :category="slide" />
						</swiper-slide>
					</swiper-container>
					<button
						class="absolute top-1/2 -translate-y-1/2 -left-5 w-12 h-12 rounded-full bg-white shadow-md hidden md:flex items-center justify-center p-2 z-10"
						@click="categoryCardsSwiper?.prev()"
					>
						<UIcon name="tabler:chevron-left" class="text-2xl" />
					</button>
					<button
						class="absolute top-1/2 -translate-y-1/2 -right-5 w-12 h-12 rounded-full bg-white shadow-md hidden md:flex items-center justify-center p-2 z-10"
						@click="categoryCardsSwiper?.next()"
					>
						<UIcon name="tabler:chevron-right" class="text-2xl" />
					</button>
				</div>
			</div>
		</section>

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
						Barchasi
						<UIcon
							name="uil:arrow-right"
							class="font-medium text-2xl text-text group-hover:text-main transition-colors"
						/>
					</NuxtLink>
				</div>
				<div
					class="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 md:gap-5"
				>
					<ProductCard
						v-for="(product, index) in section.products"
						:key="product.id"
						:product="product"
						data-aos="flip-left"
						data-aos-duration="500"
						:data-aos-delay="index * 100"
						@success-wishlist="refetchSections"
					/>
				</div>
			</div>
		</section>
		<!-- sections -->

		<!-- loop text -->
		<section class="pb-12">
			<UiScrollVelocity
				:texts="[
					'Beton plita * Temir-beton ustunlar * FBS bloklar * Temir-beton novlar * Rigellar * ',
				]"
				:velocity="20"
				:damping="20"
				:stiffness="400"
				:velocity-mapping="{ input: [0, 1000], output: [0, 5] }"
				class-name="custom-scroll-text"
				parallax-class-name="custom-parallax"
				scroller-class-name="custom-scroller"
			/>
		</section>
		<!-- loop text -->

		<!-- advantages -->
		<section class="pb-12">
			<div class="container">
				<div class="flex items-center justify-between mb-8">
					<h2 class="text-2xl md:text-3xl font-bold text-text">
						{{ $t('our_advantages') }}
					</h2>
				</div>

				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<div
						v-for="(item, index) in advantages"
						:key="item.id"
						class="group relative transition-all duration-500 hover:scale-[1.02]"
						data-aos="fade-up"
						:data-aos-delay="index * 100"
					>
						<!-- Card Inner -->
						<div
							class="relative overflow-hidden rounded-3xl border-2 border-transparent bg-gradient-to-br from-gray-50 via-white to-gray-50 group-hover:border-main/30 transition-all duration-500 p-8 h-full flex flex-col"
						>
							<!-- Icon Container -->
							<div class="relative mb-6">
								<!-- Background Decoration -->
								<div
									class="absolute inset-0 bg-gradient-to-br from-main/10 to-main/5 rounded-full blur-2xl transform scale-75 group-hover:scale-100 transition-transform duration-500"
								/>

								<!-- Icon Wrapper -->
								<div class="relative w-24 h-24 mx-auto">
									<div
										class="absolute inset-0 bg-gradient-to-br from-main/20 to-main/10 rounded-full group-hover:rotate-180 transition-transform duration-700"
									/>
									<div
										class="absolute inset-2 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-500"
									>
										<img
											:src="item.file_url"
											:alt="item.title"
											class="w-14 h-14 object-contain group-hover:scale-110 transition-transform duration-500"
										/>
									</div>
								</div>
							</div>

							<!-- Content -->
							<div class="text-center flex-1 flex flex-col">
								<!-- Top Accent Line -->
								<div
									class="w-16 h-1 bg-gradient-to-r from-transparent via-main to-transparent mx-auto mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
								/>

								<!-- Title -->
								<h4
									class="text-text text-lg md:text-xl font-bold mb-3 group-hover:text-main transition-colors duration-300"
								>
									{{ item.title }}
								</h4>

								<!-- Description -->
								<p
									class="text-subtext text-sm md:text-base leading-relaxed flex-1"
								>
									{{ item.description }}
								</p>

								<!-- Bottom Decoration -->
								<div
									class="mt-6 flex items-center justify-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
								>
									<div class="w-2 h-2 rounded-full bg-main/30" />
									<div class="w-2 h-2 rounded-full bg-main/50" />
									<div class="w-2 h-2 rounded-full bg-main" />
									<div class="w-2 h-2 rounded-full bg-main/50" />
									<div class="w-2 h-2 rounded-full bg-main/30" />
								</div>
							</div>

							<!-- Corner Decoration -->
							<div
								class="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-main/5 to-transparent rounded-tl-full transform translate-x-12 translate-y-12 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"
							/>
						</div>

						<!-- Outer Glow Effect -->
						<div
							class="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-[0_0_30px_rgba(59,130,246,0.2)]"
						/>
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
		<section class="pb-12">
			<div class="container relative">
				<div class="flex items-center justify-between">
					<h2 class="text-2xl font-semibold">{{ $t('our_employees') }}</h2>
					<NuxtLink
						:to="localePath(`/employees`)"
						class="flex items-center gap-2 text-text hover:text-main transition-colors group"
					>
						Barchasi
						<UIcon
							name="uil:arrow-right"
							class="font-medium text-2xl text-text group-hover:text-main transition-colors"
						/>
					</NuxtLink>
				</div>
				<swiper-container ref="employeeCardsRef" :init="true" class="">
					<swiper-slide
						v-for="(slide, idx) in 5"
						:key="idx"
						data-aos="fade-up"
						:data-aos-delay="idx * 100"
						data-aos-offset="300"
					>
						<EmployeeCard />
					</swiper-slide>
				</swiper-container>
				<button
					class="absolute top-1/2 -translate-y-1/2 -left-5 w-12 h-12 rounded-full bg-white shadow-md hidden md:flex items-center justify-center p-2 z-10"
					@click="employeeCardsSwiper.prev()"
				>
					<UIcon name="tabler:chevron-left" class="text-2xl" />
				</button>
				<button
					class="absolute top-1/2 -translate-y-1/2 -right-5 w-12 h-12 rounded-full bg-white shadow-md hidden md:flex items-center justify-center p-2 z-10"
					@click="employeeCardsSwiper.next()"
				>
					<UIcon name="tabler:chevron-right" class="text-2xl" />
				</button>
			</div>
		</section>
		<!-- employees -->

		<!-- partners -->
		<section class="pb-12">
			<div class="container relative">
				<div class="flex items-center justify-between mb-4">
					<h2 class="text-2xl font-semibold">Kimlar bizga ishonadi ?</h2>
				</div>
				<client-only>
					<swiper-container ref="partnersRef" :init="false" class="">
						<swiper-slide
							v-for="(slide, idx) in 9"
							:key="idx"
							data-aos="fade-up"
							data-aos-offset="200"
						>
							<div>
								<img src="~/assets/images/png/1.png" alt="Dream house" />
							</div>
						</swiper-slide>
					</swiper-container>
				</client-only>
			</div>
		</section>
		<!-- partners -->

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
						class="h-[30vh] md:h-[50vh] w-full rounded-md overflow-hidden border border-border"
					/>
				</div>
			</div>
			<!-- map -->
		</section>
		<!-- map -->

		<!-- faq -->
		<section class="pb-12">
			<div class="container">
				<div class="flex items-center justify-between">
					<h2 class="text-2xl font-semibold">Ko'p beriladigan savollar</h2>
				</div>
				<div class="mt-2">
					<UAccordion
						trailing-icon="i-lucide-plus"
						:items="items"
						:ui="{
							label: 'text-lg font-semibold',
							body: 'text-md pl-3',
							trailingIcon: 'text-2xl font-semibold',
						}"
					/>
				</div>
			</div>
		</section>
		<!-- faq -->

		<section class="pb-12">
			<div class="container">
				<div class="flex flex-col items-center">
					<div
						class="text-center text-xl md:text-2xl lg:text-3xl text-main font-semibold"
					>
						Eng yaxshi mahsulotlar siz uchun!
					</div>
					<div class="mt-4">
						<a
							target="_blank"
							href="/katalog_uz.pdf"
							class="group inline-block border-2 border-main text-main font-medium text-lg overflow-hidden h-16 rounded-lg"
						>
							<div
								class="transition-all duration-500 group-hover:-translate-y-16"
							>
								<!-- Primary -->
								<div
									class="flex items-center justify-center px-8 h-16 bg-main text-white transition-all duration-500 gap-2"
								>
									<UIcon
										name="material-symbols:cloud-outline"
										class="text-2xl text-white"
									/>
									<!-- <span class="mr-1 fa fa-cloud"></span> -->
									Katalogni yuklab olish
								</div>

								<!-- Secondary -->
								<div class="flex items-center justify-center gap-2 px-8 h-16">
									<UIcon
										name="icon-park-outline:hard-disk"
										class="text-2xl text-main"
									/>
									<!-- <span class="mr-1 fa fa-hdd-o"></span> -->
									Size: 52 kb
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>

<style>
.ytp-pause-overlay {
	display: none !important;
}
</style>
