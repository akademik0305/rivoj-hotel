<script lang="ts" setup>
//===============================-< imports >-===============================
import { useI18n } from 'vue-i18n'
import * as z from 'zod'
import Service from '~/service/Service'
import urls from '~/service/urls'

const { locale, t } = useI18n()
const token = useToken()
const toast = useToast()
const route = useRoute()

// SEO Meta
const title = 'Bog\'lanish | Rivoj-98 | Temir Beton | Farg\'ona'

useSeoMeta({
	title,
	description: 'Rivoj-98 bilan bog\'lanish. Temir beton mahsulotlari bo\'yicha buyurtma berish, savol-javoblar. Telefon: +998 78 555 98 98. Manzil: Farg\'ona viloyati, Farg\'ona tumani.',
	keywords: 'rivoj-98 bog\'lanish, rivoj98 telefon, rivoj-98 manzil, temir beton buyurtma, Farg\'ona, aloqa, kontakt',
	ogTitle: 'Rivoj-98 bilan bog\'lanish - Telefon va Manzil',
	ogDescription: 'Temir beton mahsulotlari bo\'yicha buyurtma berish uchun biz bilan bog\'laning. Professional maslahat va tez yetkazib berish.',
	ogImage: 'https://rivoj98shop.uz/icon.png',
	ogUrl: 'https://rivoj98shop.uz/contact',
	ogType: 'website',
})

useHead({
	link: [
		{ rel: 'canonical', href: `https://rivoj98shop.uz${route.fullPath}` }
	],
	title,
	meta: [
		{
			name: 'robots',
			content: 'index, follow'
		}
	],
	script: [
		// ContactPage Schema
		{
			type: 'application/ld+json',
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "ContactPage",
				"name": "Rivoj-98 bilan bog'lanish",
				"description": "Temir beton mahsulotlari bo'yicha buyurtma berish va savol-javoblar uchun bog'lanish sahifasi",
				"url": "https://rivoj98shop.uz/contact"
			})
		},
		// LocalBusiness Schema
		{
			type: 'application/ld+json',
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "LocalBusiness",
				"name": "Rivoj-98",
				"image": "https://rivoj98shop.uz/icon.png",
				"@id": "https://rivoj98shop.uz",
				"url": "https://rivoj98shop.uz",
				"telephone": "+998785559898",
				"priceRange": "$$",
				"address": {
					"@type": "PostalAddress",
					"streetAddress": "Farg'ona tumani",
					"addressLocality": "Farg'ona",
					"addressRegion": "Farg'ona viloyati",
					"addressCountry": "UZ"
				},
				"geo": {
					"@type": "GeoCoordinates",
					"latitude": 40.1738975,
					"longitude": 71.7344534
				},
				"openingHoursSpecification": {
					"@type": "OpeningHoursSpecification",
					"dayOfWeek": [
						"Monday",
						"Tuesday",
						"Wednesday",
						"Thursday",
						"Friday",
						"Saturday"
					],
					"opens": "09:00",
					"closes": "18:00"
				},
				"sameAs": [
					"https://www.facebook.com/rivoj98",
					"https://www.instagram.com/rivoj98",
					"https://t.me/rivoj98"
				]
			})
		}
	]
})

//===============================-< submit form >-===============================
const schema = z.object({
	name: z.string({ required_error: t('enter_name') }),
	phone: z
		.string({ required_error: t('enter_phone') })
		.min(17, t('wrong_number')),
	message: z.string().optional(),
})

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
	name: undefined,
	phone: '+998 ',
	message: undefined,
})

interface IData {
	name: string | undefined
	phone: string | undefined
	message: string
}

const form = useTemplateRef('form')
async function onSubmit() {
	const data: IData = {
		name: state.name,
		phone: state.phone?.replace(/[\s-]+/g, ''),
		message: state.message || '',
	}

	const res = await Service.post(
		urls.sendMessage(),
		locale.value,
		data,
		token.value
	)
	
	if (res.success) {
		toast.add({
			title: 'Xabaringiz muvaffaqiyatli yuborildi',
			description: 'Tez orada siz bilan bog\'lanamiz',
			color: 'success',
		})
		state.name = ''
		state.phone = '+998 '
		state.message = ''
	} else {
		toast.add({
			title: 'Xatolik yuz berdi',
			description: 'Iltimos, qayta urinib ko\'ring yoki to\'g\'ridan-to\'g\'ri qo\'ng\'iroq qiling',
			color: 'error',
		})
	}
}
</script>

<template>
	<main class="py-6 lg:py-10">
		<!-- Breadcrumb -->
		<nav class="hidden md:block mb-5">
			<div class="container">
				<BaseBreadcump
					:links="[
						{ label: $t('home_page'), url: '/' },
						{ label: 'Bog\'lanish' },
					]"
				/>
			</div>
		</nav>

		<!-- Main Content -->
		<section class="text-subtext relative">
			<div class="container mx-auto px-4 sm:px-6 lg:px-8">
				<!-- Page Header -->
				<div class="text-center mb-8">
					<h1 class="text-3xl md:text-4xl font-bold text-text mb-4">
						Rivoj-98 bilan Bog'lanish
					</h1>
					<p class="text-base md:text-lg text-subtext max-w-2xl mx-auto">
						Temir beton mahsulotlari bo'yicha buyurtma berish, savol-javoblar va 
						professional maslahat uchun biz bilan bog'laning. Har doim xizmatdamiz!
					</p>
				</div>

				<div class="flex flex-col lg:flex-row gap-6">
					<!-- Map section -->
					<div
						class="w-full lg:w-3/5 bg-white rounded-lg overflow-hidden relative"
					>
						<h2 class="sr-only">Rivoj-98 zavodi joylashuvi - Farg'ona</h2>
						<iframe
							title="Rivoj-98 zavodi manzili va joylashuvi xaritada - Farg'ona viloyati, Farg'ona tumani"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.5802910718353!2d71.73227842644344!3d40.173897570382415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb85c2ffd46eb7%3A0x583fcb9692d47240!2zIlJpdm9qLTk4IiDQl9CQ0JLQntCUINCW0JHQmA!5e0!3m2!1sru!2s!4v1756269338634!5m2!1sru!2s"
							style="border: 0"
							loading="lazy"
							referrerpolicy="no-referrer-when-downgrade"
							class="w-full h-full min-h-[400px]"
						/>
					</div>

					<!-- Contact Info & Form -->
					<div class="w-full lg:w-2/5 flex flex-col gap-6">
						<!-- Contact Information Cards -->
						<div class="bg-white rounded-lg p-6 shadow-sm space-y-4">
							<h2 class="text-xl font-semibold text-text mb-4">
								Bog'lanish Ma'lumotlari
							</h2>

							<!-- Phone -->
							<div class="flex items-start gap-3">
								<div class="flex-shrink-0 w-10 h-10 bg-main/10 rounded-full flex items-center justify-center">
									<UIcon name="material-symbols:phone-in-talk" class="text-main text-xl" />
								</div>
								<div>
									<h3 class="font-semibold text-text text-sm">Telefon raqam</h3>
									<a 
										href="tel:+998785559898" 
										class="text-main hover:text-main/80 transition-colors font-medium"
										aria-label="Rivoj-98 ga qo'ng'iroq qilish"
									>
										+998 78 555 98 98
									</a>
									<p class="text-xs text-subtext mt-1">Dush-Juma: 09:00 - 18:00</p>
								</div>
							</div>

							<!-- Address -->
							<div class="flex items-start gap-3">
								<div class="flex-shrink-0 w-10 h-10 bg-main/10 rounded-full flex items-center justify-center">
									<UIcon name="material-symbols:location-on" class="text-main text-xl" />
								</div>
								<div>
									<h3 class="font-semibold text-text text-sm">Manzil</h3>
									<p class="text-subtext">
										Farg'ona viloyati, Farg'ona tumani
									</p>
								</div>
							</div>

							<!-- Email -->
							<div class="flex items-start gap-3">
								<div class="flex-shrink-0 w-10 h-10 bg-main/10 rounded-full flex items-center justify-center">
									<UIcon name="material-symbols:mail-outline" class="text-main text-xl" />
								</div>
								<div>
									<h3 class="font-semibold text-text text-sm">Email</h3>
									<a 
										href="mailto:info@rivoj98.uz" 
										class="text-main hover:text-main/80 transition-colors"
										aria-label="Rivoj-98 ga email yuborish"
									>
										info@rivoj98.uz
									</a>
								</div>
							</div>

							<!-- Working Hours -->
							<div class="flex items-start gap-3">
								<div class="flex-shrink-0 w-10 h-10 bg-main/10 rounded-full flex items-center justify-center">
									<UIcon name="material-symbols:schedule" class="text-main text-xl" />
								</div>
								<div>
									<h3 class="font-semibold text-text text-sm">Ish vaqti</h3>
									<p class="text-subtext">Dushanba - Shanba</p>
									<p class="text-subtext">09:00 - 18:00</p>
								</div>
							</div>
						</div>

						<!-- Contact Form -->
						<div class="bg-white rounded-lg p-6 shadow-sm">
							<h2 class="text-xl font-semibold text-text mb-2">
								Xabar Yuborish
							</h2>
							<p class="text-sm text-subtext mb-5">
								Ushbu formadan foydalanib bizga xabaringizni yuboring. 
								Biz siz bilan tez orada bog'lanamiz va barcha savollaringizga javob beramiz.
							</p>

							<UForm
								ref="form"
								:schema="schema"
								:state="state"
								class="space-y-4"
								@submit="onSubmit"
							>
								<UFormField label="Ismingiz *" name="name">
									<UInput
										v-model="state.name"
										type="text"
										placeholder="To'liq ismingizni kiriting"
										class="w-full"
										size="lg"
										aria-label="Ismingizni kiriting"
									/>
								</UFormField>

								<UFormField label="Telefon raqam *" name="phone">
									<UInput
										v-model="state.phone"
										v-maska="'+998 ## ###-##-##'"
										type="text"
										placeholder="+998 90 123-45-67"
										class="w-full"
										size="lg"
										aria-label="Telefon raqamingizni kiriting"
									/>
								</UFormField>

								<UFormField label="Xabaringiz" name="message">
									<UTextarea
										v-model="state.message"
										type="text"
										placeholder="Savolingiz yoki xabaringizni yozing..."
										class="w-full"
										size="lg"
										:rows="4"
										aria-label="Xabaringizni kiriting"
									/>
								</UFormField>

								<div>
									<BaseButton 
										text="Yuborish" 
										is-full 
										aria-label="Xabarni yuborish"
									/>
								</div>
							</UForm>
						</div>
					</div>
				</div>

				<!-- Additional Info Section -->
				<div class="mt-12 grid md:grid-cols-3 gap-6">
					<div class="bg-gradient-to-br from-main/5 to-main/10 rounded-lg p-6 text-center">
						<div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
							<UIcon name="material-symbols:support-agent" class="text-main text-3xl" />
						</div>
						<h3 class="font-semibold text-text text-lg mb-2">
							24/7 Maslahat
						</h3>
						<p class="text-subtext text-sm">
							Temir beton mahsulotlari bo'yicha professional maslahat va ko'mak
						</p>
					</div>

					<div class="bg-gradient-to-br from-main/5 to-main/10 rounded-lg p-6 text-center">
						<div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
							<UIcon name="material-symbols:local-shipping" class="text-main text-3xl" />
						</div>
						<h3 class="font-semibold text-text text-lg mb-2">
							Tez Yetkazib Berish
						</h3>
						<p class="text-subtext text-sm">
							O'zbekiston bo'ylab tez va ishonchli yetkazib berish xizmati
						</p>
					</div>

					<div class="bg-gradient-to-br from-main/5 to-main/10 rounded-lg p-6 text-center">
						<div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
							<UIcon name="material-symbols:verified" class="text-main text-3xl" />
						</div>
						<h3 class="font-semibold text-text text-lg mb-2">
							Sifat Kafolati
						</h3>
						<p class="text-subtext text-sm">
							GOST standartlariga muvofiq yuqori sifatli mahsulotlar
						</p>
					</div>
				</div>

				<!-- SEO Text Section -->
				<div class="mt-12 mx-auto">
					<div class="bg-white rounded-lg p-6 md:p-8">
						<h2 class="text-2xl font-semibold text-text mb-4">
							Rivoj-98 bilan Qanday Bog'lanish Mumkin?
						</h2>
						<div class="space-y-4 text-subtext">
							<p>
								<strong>Rivoj-98</strong> xususiy korxonasi bilan bog'lanish uchun bir necha 
								yo'l mavjud. Eng oson usul - telefon orqali: <a href="tel:+998785559898" class="text-main hover:underline">+998 78 555 98 98</a>. 
								Bizning mutaxassislarimiz sizga temir beton mahsulotlari bo'yicha batafsil 
								ma'lumot beradi va eng yaxshi yechimni taklif etadi.
							</p>
							<p>
								Agar sizda <strong>temir beton plitalar</strong>, <strong>elektr oporalari</strong>, 
								<strong>stalba</strong> yoki <strong>fundament bloklari (FBS)</strong> bo'yicha 
								savollar bo'lsa, yuqoridagi formadan foydalanib yozma xabar yuborishingiz mumkin. 
								Biz har bir mijozga individual yondashuvni ta'minlaymiz.
							</p>
							<p>
								Bizning zavodimiz <strong>Farg'ona viloyati, Farg'ona tumani</strong>da joylashgan. 
								Siz bizni to'g'ridan-to'g'ri zavod hududida ham tashrif buyurishingiz va mahsulotlar 
								bilan tanishishingiz mumkin. Ish vaqtimiz: Haftaning barcha kunlari, 07:00 dan 18:00 gacha.
							</p>
							<p>
								Rivoj-98 - bu 1998 yildan beri Farg'ona vodiysida faoliyat yuritayotgan, 
								yuqori sifatli temir beton mahsulotlari ishlab chiqaruvchi ishonchli kompaniya. 
								Biz bilan hamkorlik qilish - bu sifat, professionallik va o'z vaqtida yetkazib 
								berish kafolatidir!
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>

<style scoped>
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