<script lang="ts" setup>
//===============================-< imports >-===============================
import { useI18n } from 'vue-i18n'
import Service from '~/service/Service'
import urls from '~/service/urls'
import type {
	TAdvantage,
	TBanners,
	TEmployees,
	TFaqs,
	TPartners,
	TSections,
} from '~/types/api.types'

const { locale } = useI18n()
const token = useToken()
const localePath = useLocalePath()
const route = useRoute()

// Meta tag start
const title =
	"Rivoj-98 | Temir Beton Mahsulotlari - Plita, Opora, Blok, Fundament | Farg'ona"

useSeoMeta({
	title,
	description:
		"Rivoj-98 - Farg'ona vodiysining yetakchi temir beton zavodi. Yuqori sifatli plitalar, elektr oporalari, stalba, fundament bloklari (FBS). 1998 yildan beri ishonchli hamkor. Respublikamiz bo'ylab yetkazib berish.",
	keywords:
		"rivoj98, rivoj-98, temir beton, plita, opora, stalba, fundament, blok, FBS, beton mahsulotlari, Farg'ona, temir beton zavod, qurilish materiallari",
	ogTitle: "Rivoj-98 - Temir Beton Mahsulotlari Zavodi | Farg'ona",
	ogDescription:
		'Yuqori sifatli temir beton mahsulotlari ishlab chiqaruvchisi. 25+ yillik tajriba.',
	ogImage: 'https://rivoj98shop.uz/logo.png',
	ogUrl: 'https://rivoj98shop.uz',
	ogType: 'website',
})

useHead({
	link: [{ rel: 'canonical', href: `https://rivoj98shop.uz${route.fullPath}` }],
	title,
	meta: [
		{
			name: 'description',
			content: 'Temir beton mahsulotlari ishlab chiqarish korxonasi - Rivoj-98',
		},
		{
			name: 'author',
			content: 'Rivoj-98',
		},
		{
			name: 'robots',
			content: 'index, follow',
		},
	],
})
// Meta tag end

// Organization Schema
useHead({
	script: [
		{
			type: 'application/ld+json',
			children: JSON.stringify({
				'@context': 'https://schema.org',
				'@type': 'Organization',
				name: 'Rivoj-98',
				alternateName: 'Rivoj 98',
				description:
					'Temir beton mahsulotlari ishlab chiqaruvchisi - plitalar, oporalar, stalba, fundament bloklari',
				url: 'https://rivoj98shop.uz',
				logo: 'https://rivoj98shop.uz/logo.png',
				image: 'https://rivoj98shop.uz/logo.png',
				foundingDate: '1998',
				slogan: 'Professionallik va sifat',
				contactPoint: {
					'@type': 'ContactPoint',
					telephone: '+998 78 555 98 98',
					contactType: 'customer service',
					areaServed: 'UZ',
					availableLanguage: ['uz', 'ru'],
				},
				address: {
					'@type': 'PostalAddress',
					addressCountry: 'UZ',
					addressLocality: "Farg'ona",
					addressRegion: "Farg'ona viloyati",
				},
				areaServed: {
					'@type': 'Place',
					name: "O'zbekiston",
				},
				sameAs: [
					'https://www.facebook.com/rivoj98',
					'https://www.instagram.com/rivoj98',
					'https://t.me/rivoj98',
				],
			}),
		},
		{
			hid: 'yandex-metrika',
			innerHTML: `
        (function(m,e,t,r,i,k,a){
            m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {
              if (document.scripts[j].src === r) { return; }
            }
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],
            k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
        })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=106143568', 'ym');

        ym(106143568, 'init', {
          ssr: true,
          webvisor: true,
          clickmap: true,
          ecommerce: "dataLayer",
          accurateTrackBounce: true,
          trackLinks: true
        });
      `,
			type: 'text/javascript',
		},
	],
	noscript: [
		{
			children: `
        <div>
          <img src="https://mc.yandex.ru/watch/106143568"
               style="position:absolute; left:-9999px;"
               alt="" />
        </div>
      `,
		},
	],
})

//===============================-< get  banner >-===============================
const banners = ref<TBanners>()
async function getBanners() {
	banners.value = await Service.get(urls.getBanners(), locale.value, null)
}

//===============================-< banners swiper >-===============================
const bannersRef = ref(null)
const bannersSwiper = useSwiper(bannersRef, {
	loop: false,
	spaceBetween: 20,
	autoplay: {
		delay: 3000,
	},
	pagination: {
		clickable: true,
	},
})

//===============================-< categories >-===============================
const categoryCardsRef = ref(null)
const categoryCardsSwiper = useSwiper(categoryCardsRef, {
	loop: false,
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
})

//===============================-< get categories >-===============================
const categories = ref()
async function getCategories() {
	const res = await Service.get(urls.getCategories(), locale.value, null)
	categories.value = res.data
}

//===============================-< get sections >-===============================
const sections = ref<TSections>()
async function getSections() {
	sections.value = await Service.get(
		urls.getSections(),
		locale.value,
		token.value
	)
}

//===============================-< get advantages >-===============================
const advantages = ref<TAdvantage[]>()
async function getAdvantages() {
	const res = await Service.get(urls.getAdvantages(), locale.value, null)
	advantages.value = res.data
}

//===============================-< get employees >-===============================
const employees = ref<TEmployees>()
async function getEmployees() {
	employees.value = await Service.get(urls.getEmployees(), locale.value, null)
}

//===============================-< employees swiper >-===============================
const employeeCardsRef = ref(null)
const employeeCardsSwiper = useSwiper(employeeCardsRef, {
	loop: false,
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
		delay: 2000,
	},
})

//===============================-< get partners >-===============================
const partners = ref<TPartners>()
async function getPartners() {
	partners.value = await Service.get(urls.getPartners(), locale.value, null)
}

//===============================-< partners swiper >-===============================
const partnersRef = ref(null)
const partnersSwiper = useSwiper(partnersRef, {
	loop: false,
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
const faqs = ref<TFaqs>()
async function getFaqs() {
	faqs.value = await Service.get(urls.getFaqs(), locale.value, null)

	// FAQ Schema qo'shish
	if (faqs.value?.data) {
		useHead({
			script: [
				{
					type: 'application/ld+json',
					children: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'FAQPage',
						mainEntity: faqs.value.data.map((faq: any) => ({
							'@type': 'Question',
							name: faq.label || faq.question,
							acceptedAnswer: {
								'@type': 'Answer',
								text: faq.content || faq.answer,
							},
						})),
					}),
				},
			],
		})
	}
}

// get data
const isBannerReady = ref(false)
async function loadDataSequentially() {
	isBannerReady.value = false
	await getBanners()
	isBannerReady.value = true
	await getCategories()
	await getSections()
	await getAdvantages()
	await getEmployees()
	await getPartners()
	await getFaqs()
}

onMounted(() => {
	loadDataSequentially()
})
</script>

<template>
	<main class="">
		<!-- SEO Intro Text - ko'rinmas lekin Google o'qiydi -->
		<div class="sr-only">
			<h1>Rivoj-98 - Temir Beton Mahsulotlari Ishlab Chiqaruvchisi</h1>
			<p>
				Rivoj-98 xususiy korxonasi 1998 yildan beri Farg'ona vodiysida yuqori
				sifatli temir beton mahsulotlari: plitalar, elektr oporalari, stalba,
				fundament bloklari (FBS) ishlab chiqaradi. Professionallik va sifat -
				bizning tamoyilimiz.
			</p>
		</div>

		<!-- banner -->
		<section class="mt-3 pb-12">
			<div class="container">
				<ClientOnly>
					<div v-show="isBannerReady" class="relative">
						<swiper-container ref="bannersRef" :init="true">
							<swiper-slide v-for="(slide, idx) in banners?.data" :key="idx">
								<div class="block h-[280px] md:h-[400px] lg:h-[600px]">
									<img
										class="w-full h-full object-cover rounded-xl overflow-hidden"
										:src="slide.file_url"
										:alt="`Rivoj-98 temir beton mahsulotlari - Banner ${
											idx + 1
										}`"
										loading="lazy"
									/>
								</div>
							</swiper-slide>
						</swiper-container>
						<button
							v-if="bannersSwiper"
							class="absolute top-1/2 -translate-y-1/2 -left-5 w-12 h-12 rounded-full bg-white shadow-md hidden md:flex items-center justify-center p-2 z-10"
							@click="bannersSwiper.prev()"
							aria-label="Oldingi slayd"
						>
							<UIcon name="tabler:chevron-left" class="text-2xl" />
						</button>
						<button
							v-if="bannersSwiper"
							class="absolute top-1/2 -translate-y-1/2 -right-5 w-12 h-12 rounded-full bg-white shadow-md hidden md:flex items-center justify-center p-2 z-10"
							@click="bannersSwiper.next()"
							aria-label="Keyingi slayd"
						>
							<UIcon name="tabler:chevron-right" class="text-2xl" />
						</button>
					</div>
					<div
						v-show="!isBannerReady"
						class="h-[400px] lg:h-[550px] bg-gray-200 rounded-xl animate-pulse"
					/>
				</ClientOnly>
			</div>
		</section>

		<!-- categories cards -->
		<section class="pb-12" aria-labelledby="popular-categories">
			<div class="container">
				<div class="flex items-center justify-between">
					<h2 id="popular-categories" class="text-2xl font-semibold">
						Mashhur Temir Beton Kategoriyalari
					</h2>
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
						aria-label="Oldingi kategoriya"
					>
						<UIcon name="tabler:chevron-left" class="text-2xl" />
					</button>
					<button
						class="absolute top-1/2 -translate-y-1/2 -right-5 w-12 h-12 rounded-full bg-white shadow-md hidden md:flex items-center justify-center p-2 z-10"
						@click="categoryCardsSwiper?.next()"
						aria-label="Keyingi kategoriya"
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
			:aria-labelledby="`section-${section.id}`"
		>
			<div class="container">
				<div class="flex items-center justify-between">
					<h2 :id="`section-${section.id}`" class="text-2xl font-semibold">
						{{ section.name }}
					</h2>
					<NuxtLink
						:to="localePath(`/sections/${section.id}`)"
						class="flex items-center gap-2 text-text hover:text-main transition-colors group"
						:aria-label="`${section.name} bo'limidagi barcha mahsulotlarni ko'rish`"
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
					/>
				</div>
			</div>
		</section>

		<!-- loop text -->
		<section class="pb-12" aria-label="Mahsulotlar ro'yxati">
			<UiScrollVelocity
				:texts="[
					'Beton plita • Temir-beton ustunlar • FBS bloklar • Temir-beton novlar • Rigellar • Elektr oporalari • Stalba • Fundament bloklari • ',
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

		<!-- advantages -->
		<section class="pb-12" aria-labelledby="advantages-heading">
			<div class="container">
				<div class="flex items-center justify-between mb-8">
					<h2
						id="advantages-heading"
						class="text-2xl md:text-3xl font-bold text-text"
					>
						Rivoj-98 ning Afzalliklari
					</h2>
				</div>

				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<article
						v-for="(item, index) in advantages"
						:key="item.id"
						class="group relative transition-all duration-500 hover:scale-[1.02]"
						data-aos="fade-up"
						:data-aos-delay="index * 100"
					>
						<div
							class="relative overflow-hidden rounded-3xl border-2 border-transparent bg-gradient-to-br from-gray-50 via-white to-gray-50 group-hover:border-main/30 transition-all duration-500 p-8 h-full flex flex-col"
						>
							<div class="relative mb-6">
								<div
									class="absolute inset-0 bg-gradient-to-br from-main/10 to-main/5 rounded-full blur-2xl transform scale-75 group-hover:scale-100 transition-transform duration-500"
								/>

								<div class="relative w-24 h-24 mx-auto">
									<div
										class="absolute inset-0 bg-gradient-to-br from-main/20 to-main/10 rounded-full group-hover:rotate-180 transition-transform duration-700"
									/>
									<div
										class="absolute inset-2 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-500"
									>
										<img
											:src="item.file_url"
											:alt="`${item.title} - Rivoj-98 afzalligi`"
											class="w-14 h-14 object-contain group-hover:scale-110 transition-transform duration-500"
											loading="lazy"
										/>
									</div>
								</div>
							</div>

							<div class="text-center flex-1 flex flex-col">
								<div
									class="w-16 h-1 bg-gradient-to-r from-transparent via-main to-transparent mx-auto mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
								/>

								<h3
									class="text-text text-lg md:text-xl font-bold mb-3 group-hover:text-main transition-colors duration-300"
								>
									{{ item.title }}
								</h3>

								<p
									class="text-subtext text-sm md:text-base leading-relaxed flex-1"
								>
									{{ item.description }}
								</p>

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

							<div
								class="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-main/5 to-transparent rounded-tl-full transform translate-x-12 translate-y-12 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"
							/>
						</div>

						<div
							class="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-[0_0_30px_rgba(59,130,246,0.2)]"
						/>
					</article>
				</div>
			</div>
		</section>

		<!-- video -->
		<section class="pb-12" aria-labelledby="video-heading">
			<div class="container">
				<div class="flex items-center justify-between">
					<h2 id="video-heading" class="text-2xl font-semibold">
						Rivoj-98 Ishlab Chiqarish Jarayoni
					</h2>
				</div>
				<div class="mt-4">
					<iframe
						src="https://www.youtube-nocookie.com/embed/jlydPpMKobg?si=t9af2k8fSIEUINkR&rel=0"
						title="Rivoj-98 temir beton mahsulotlari ishlab chiqarish jarayoni"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerpolicy="strict-origin-when-cross-origin"
						allowfullscreen
						class="w-full h-full min-h-[30svh] md:min-h-[60svh] rounded-md overflow-hidden"
					/>
				</div>
			</div>
		</section>

		<!-- employees -->
		<section class="pb-12" aria-labelledby="employees-heading">
			<div class="container relative">
				<div class="flex items-center justify-between">
					<h2 id="employees-heading" class="text-2xl font-semibold">
						Bizning Professional Jamoamiz
					</h2>
					<NuxtLink
						:to="localePath(`/employees`)"
						class="flex items-center gap-2 text-text hover:text-main transition-colors group"
						aria-label="Barcha xodimlarni ko'rish"
					>
						Barchasi
						<UIcon
							name="uil:arrow-right"
							class="font-medium text-2xl text-text group-hover:text-main transition-colors"
						/>
					</NuxtLink>
				</div>
				<swiper-container ref="employeeCardsRef" :init="false" class="">
					<swiper-slide
						v-for="(employee, idx) in employees?.data"
						:key="idx"
						data-aos="fade-up"
						:data-aos-delay="idx * 100"
						data-aos-offset="300"
					>
						<EmployeeCard :employee="employee" />
					</swiper-slide>
				</swiper-container>
			</div>
		</section>

		<!-- partners -->
		<section class="pb-12" aria-labelledby="partners-heading">
			<div class="container relative">
				<div class="flex items-center justify-between mb-4">
					<h2 id="partners-heading" class="text-2xl font-semibold">
						Bizga Ishongan Hamkorlar
					</h2>
				</div>
				<client-only>
					<swiper-container ref="partnersRef" :init="false" class="">
						<swiper-slide
							v-for="(partner, idx) in partners?.data"
							:key="idx"
							data-aos="fade-up"
							data-aos-offset="200"
						>
							<div class="w-40 h-28">
								<img
									:src="partner.file_url"
									:alt="`${partner.name} - Rivoj-98 hamkori`"
									class="w-full h-full object-contain mix-blend-multiply"
									loading="lazy"
								/>
							</div>
						</swiper-slide>
					</swiper-container>
				</client-only>
			</div>
		</section>

		<!-- faq -->
		<section class="pb-12" aria-labelledby="faq-heading">
			<div class="container">
				<div class="flex items-center justify-between">
					<h2 id="faq-heading" class="text-2xl font-semibold">
						Ko'p Beriladigan Savollar - Rivoj-98
					</h2>
				</div>
				<div class="mt-2">
					<UAccordion
						trailing-icon="i-lucide-plus"
						:items="faqs?.data"
						:ui="{
							label: 'text-lg font-semibold',
							body: 'text-md pl-3',
							trailingIcon: 'text-2xl font-semibold',
						}"
					/>
				</div>
			</div>
		</section>

		<!-- Catalog -->
		<section class="pb-12" aria-labelledby="catalog-heading">
			<div class="container">
				<div class="flex flex-col items-center">
					<h2
						id="catalog-heading"
						class="text-center text-xl md:text-2xl lg:text-3xl text-main font-semibold"
					>
						Rivoj-98 Mahsulotlar Katalogi
					</h2>
					<p class="mt-2 text-center text-gray-600">
						Barcha temir beton mahsulotlarimiz haqida batafsil ma'lumot
					</p>
					<div class="mt-4">
						<a
							target="_blank"
							href="/katalog_uz.pdf"
							class="group inline-block border-2 border-main text-main font-medium text-lg overflow-hidden h-16 rounded-lg"
							aria-label="Rivoj-98 mahsulotlar katalogini yuklab olish"
						>
							<div
								class="transition-all duration-500 group-hover:-translate-y-16"
							>
								<div
									class="flex items-center justify-center px-8 h-16 bg-main text-white transition-all duration-500 gap-2"
								>
									<UIcon
										name="material-symbols:cloud-outline"
										class="text-2xl text-white"
										aria-hidden="true"
									/>
									Katalogni yuklab olish
								</div>

								<div class="flex items-center justify-center gap-2 px-8 h-16">
									<UIcon
										name="icon-park-outline:hard-disk"
										class="text-2xl text-main"
										aria-hidden="true"
									/>
									Hajmi: 52 kb
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</section>

		<!-- map -->
		<section class="pb-12" aria-labelledby="location-heading">
			<div class="container">
				<div class="flex items-center justify-between">
					<h2 id="location-heading" class="text-2xl font-semibold">
						Rivoj-98 Manzili - Farg'ona
					</h2>
				</div>
				<div class="mt-4 relative overflow-hidden w-full">
					<iframe
						title="Rivoj-98 zavodi joylashuvi - Farg'ona, O'zbekiston"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.5802910718353!2d71.73227842644344!3d40.173897570382415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb85c2ffd46eb7%3A0x583fcb9692d47240!2zIlJpdm9qLTk4IiDQl9CQ0JLQntCUINCG0JHQmA!5e0!3m2!1sru!2s!4v1756269338634!5m2!1sru!2s"
						style="border: 0"
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
						class="h-[30vh] md:h-[50vh] w-full rounded-md overflow-hidden border border-border"
					/>
				</div>
				<div class="mt-4 text-center">
					<p class="text-gray-600">
						<strong>Manzil:</strong> Farg'ona viloyati, Farg'ona tumani
					</p>
					<p class="text-gray-600 mt-1">
						<strong>Telefon:</strong> +998 78 555 98 98
					</p>
				</div>
			</div>
		</section>
	</main>
</template>

<style>
.ytp-pause-overlay {
	display: none !important;
}

/* Screen reader only */
.sr-only {
	position: absolute;
	width: 1px;
	height: 1px;
	padding: 0;
	margin: -1px;
	overflow: hidden;
	clip: rect(0, 0, 0, 0);
	white-space: nowrap;
	border-width: 0;
}
</style>
