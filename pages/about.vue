<script lang="ts" setup>
// //===============================-< imports >-===============================
// import Service from '~/service/Service'
// import urls from '~/service/urls'
// // import type { TAbout, TAwwards } from '~/types/api.types'
// // //> utils
// const { locale } = useI18n()
// const token = useToken()
//===============================-< awwards >-===============================
//> variables
// const awwardsRef = ref(null)
// const awwardsSwiper = useSwiper(awwardsRef, {
// 	spaceBetween: 20,
// 	slidesPerView: 2,
// 	effect: 'creative',
// 	creativeEffect: {},
// 	loop: true,
// 	autoplay: {
// 		delay: 3000,
// 	},
// })

// //===============================-< get awwards >-===============================
// //> variables
// const awwards = ref<TAwwards>()

// //> functions

// async function getAwwards() {
// 	awwards.value = await Service.get(
// 		urls.getAwwards(),
// 		locale.value,
// 		token.value
// 	)
// }
// getAwwards()

// //===============================-< get about >-===============================
// //> variables
// const about = ref<TAbout>()

// //> functions

// async function getAbout() {
// 	about.value = await Service.get(urls.getAbout(), locale.value, token.value)
// }
// getAbout()

useSeoMeta({
	title: 'Rivoj-98',
	ogImage: '/icon.png',
})
</script>
<template>
	<main class="wrapper">
		<nav class="hidden md:block mt-5">
			<div class="container">
				<BaseBreadcump
					:links="[
						{ label: $t('home_page'), url: '/' },
						{ label: 'Biz haqimizda' },
					]"
				/>
			</div>
		</nav>

		<!-- about -->
		<section class="mt-4 pb-6 md:pb-8 lg:pb-10">
			<div class="container">
				<div class="flex items-center justify-between">
					<h2 class="text-xl md:text-2xl lg:text-3xl font-semibold">
						Biz haqimizda
					</h2>
				</div>
				<!-- <p class="mt-4 font-medium" v-html="about?.data.content" /> -->
				<div class="mt-6 text-text">
					<p class="text-black font-semibold text-lg">
						"Ривож-98" хусусий корхонаси – тараққиёт ва сифат тимсоли
					</p>
					<p class="mt-4">
						Бунёдкорлик инсон табиатига хос фазилатдир. Биноларни барпо этиш,
						кенг кўламли лойиҳаларни амалга ошириш, ўзини намоён қилиш истаги
						инсоният тараққиётининг ажралмас қисмидир. Йиллар, ўн йилликлар
						давомида бетиним меҳнат эвазига ажойиб бинолар қад ростламоқда,
						корхоналар ишга туширилмоқда ва янги иш ўринлари яратилмоқда.
					</p>
					<p class="mt-4">
						Айнан шундай кенг кўламли бизнес лойиҳалар қаторида "Ривож-98"
						хусусий корхонасининг ташкил этилиши ҳам ўз ўрнини эгаллади.
						"Ривож-98" хусусий корхонаси ўз фаолиятини 1998 йилда Фарғона
						вилоятининг Фарғона туманида бошлаган. Корхона ўз олдига юқори
						сифатли маҳсулотлар ишлаб чиқариш орқали “Ривож-98” миллий брендини
						халқаро даражага олиб чиқиш, энг замонавий уй-жой ва ижтимоий
						объектларни сифатли темир-бетон маҳсулотлари билан таъминлаш, юқори
						қаватли бинолар, уйлар, заводлар, фабрикалар, коттежлар,
						меҳмонхоналар ва ресторанларни барпо этишда сифатли темир-бетон
						маҳсулотларини етказиб беришни мақсад қилиб қўйган.
					</p>
				</div>
				<div class="mt-6 text-text">
					<p class="text-black font-semibold text-lg">
						Компания ҳақида қисқача маълумот
					</p>
					<p class="mt-4">
						1998 йилда Мамадалиев Маҳамадали Раҳмонович ташаббуси билан
						"Ривож-98" хусусий корхонаси ташкил этилди. Корхона ўз фаолиятининг
						дастлабки босқ ичида электр монтаж соҳасида иш юритган. Фаолиятни
						кенгайтириш мақсадида 2013 йилдан бошлаб “Ривож-98” хусусий
						корхонаси таркибида электр сим ёғочлари ишлаб чиқариш йўлга
						қўйилган. 2017 йилдан эътиборан эса пол қопламалари, яъни бетон
						плиталар ишлаб чиқариш бошланган.
					</p>
					<p class="mt-4">
						Дастлаб корхонада 6 нафар ходим меҳнат қилган бўлса, бугунги кунда
						ишчи-ходимлар сони 30 нафарга етган. Улардан 60 фоизини ёшлар ташкил
						этади. Компаниянинг асосий тамойили – "профессионаллик ва сифат".
						Корхонада тажрибали қурувчилар, муҳандислар, архитекторлар ва юқори
						малакага эга мутахассислар фаолият юритиб келмоқда.
					</p>
					<p class="mt-4">
						Бугунги кунда аҳоли эҳтиёжларини ҳисобга олган ҳолда бунёдкорлик
						ишлари жадал суръатларда ортмоқда. Кун сайин чирой очиб бораётган
						шаҳарлар, аҳолини иш билан таъминлаш ва ишлаб чиқаришнинг турли
						йўналишларида фаолият юритиш ҳам билим, ҳам малака талаб этади. Ана
						шундай тажрибага эга бўлган "Ривож-98" хусусий корхонаси
						мамлакатимизда ўз нуфузига эга компаниялардан бири ҳисобланади.
					</p>
					<p class="mt-4">
						"Ривож-98" – Фарғона ва Фарғона водийсидаги энг йирик темир-бетон
						маҳсулотлари ишлаб чиқарувчилардан бири.
					</p>
					<p class="mt-4">
						Компания ўзини ишончли шерик сифатида намоён этиб, белгиланган
						вазифаларни аниқ ва ўз вақтида профессионал даражада бажариб
						келмоқда. Корхона ходимлари самарадорлик, юқори ташкилотчилик ва
						мижозларнинг талабларига тезкорлик билан жавоб беришга шай
						эканлигини намоён этмоқда.
					</p>
					<p class="mt-4">
						Бугунги кунда корхонада режалаштириш босқичида бир қатор янги
						лойиҳалар ишлаб чиқилмоқда. Демак, яқин келажакда "Ривож-98" хусусий
						корхонаси жамоасининг янги муваффақият ва ютуқларига гувоҳ бўламиз,
						деган умиддамиз!
					</p>
				</div>
			</div>
		</section>

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
	</main>
</template>
