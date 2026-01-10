<template>
	<main class="hotel-theme">
		<section class="relative h-[100svh] overflow-hidden">
			<div class="absolute inset-0">
				<img
					src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070"
					class="w-full h-full object-cover scale-105 animate-slow-zoom"
					alt="Luxury Hotel"
				/>
				<div
					class="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20"
				/>
			</div>

			<div
				class="container relative z-10 h-full flex flex-col justify-center items-center text-white text-center"
			>
				<span
					class="uppercase tracking-[0.5em] mb-6 text-xs md:text-sm font-light"
					data-aos="fade-down"
				>
					Est 1998 — Grand Oasis
				</span>
				<h2
					class="text-5xl md:text-8xl font-serif mb-10 leading-[1.1]"
					data-aos="fade-up"
				>
					Mukammal <br />
					<span class="italic font-light text-primary-light">Hordiq</span>
					Hududi
				</h2>
				<div
					class="flex flex-col md:flex-row gap-5"
					data-aos="zoom-in"
					data-aos-delay="400"
				>
					<button class="btn-primary">Xonalarni ko'rish</button>
					<button class="btn-outline">Virtual tur</button>
				</div>
			</div>

			<div
				class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/70"
			>
				<UIcon
					name="material-symbols:keyboard-double-arrow-down-rounded"
					class="text-3xl"
				/>
			</div>
		</section>

		<section class="py-32 bg-white">
			<div class="container">
				<div class="text-center mb-20">
					<h2 class="text-4xl md:text-5xl font-serif text-secondary mb-4">
						Eksklyuziv Xonalar
					</h2>
					<div class="w-24 h-0.5 bg-primary mx-auto" />
				</div>

				<div class="grid grid-cols-1 md:grid-cols-2 gap-16">
					<div class="group cursor-pointer" data-aos="fade-right">
						<div
							class="relative overflow-hidden aspect-[4/5] rounded-xl shadow-lg"
						>
							<img
								src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070"
								class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
							/>
							<div
								class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"
							/>
							<div class="absolute bottom-10 left-10 text-white">
								<p class="text-sm uppercase tracking-widest mb-2">
									Luxury stay
								</p>
								<h4 class="text-3xl font-serif mb-4">Deluxe Suite</h4>
								<span
									class="px-6 py-2 bg-white text-black rounded-full font-medium"
									>$120 / tun</span
								>
							</div>
						</div>
					</div>

					<div class="group cursor-pointer md:mt-24" data-aos="fade-left">
						<div
							class="relative overflow-hidden aspect-[4/5] rounded-xl shadow-lg"
						>
							<img
								src="https://images.unsplash.com/photo-1591088398332-8a77d3996182?q=80&w=2074"
								class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
							/>
							<div
								class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"
							/>
							<div class="absolute bottom-10 left-10 text-white">
								<p class="text-sm uppercase tracking-widest mb-2">
									Premium Experience
								</p>
								<h4 class="text-3xl font-serif mb-4">Royal Garden</h4>
								<span
									class="px-6 py-2 bg-white text-black rounded-full font-medium"
									>$250 / tun</span
								>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="py-32 bg-background border-y border-primary/10">
			<div class="container">
				<div class="grid grid-cols-1 md:grid-cols-3 gap-16">
					<div
						v-for="(adv, i) in advantages"
						:key="i"
						class="text-center px-6"
						data-aos="fade-up"
						:data-aos-delay="i * 100"
					>
						<div class="text-primary mb-8 flex justify-center">
							<UIcon :name="adv.icon" class="text-6xl font-light" />
						</div>
						<h3 class="text-xl font-serif mb-4 text-secondary">
							{{ adv.title }}
						</h3>
						<p class="text-gray-500 leading-relaxed font-light">
							{{ adv.desc }}
						</p>
					</div>
				</div>
			</div>
		</section>

		<section
			class="py-16 bg-secondary overflow-hidden flex whitespace-nowrap border-y border-white/5"
		>
			<div
				class="animate-marquee-fast flex gap-20 items-center text-white/40 text-2xl font-serif tracking-[0.2em] uppercase"
			>
				<span v-for="n in 10" :key="n" class="flex items-center gap-10">
					Infinity Pool
					<span class="w-1.5 h-1.5 bg-primary rounded-full" /> Fine Dining
					<span class="w-1.5 h-1.5 bg-primary rounded-full" /> Luxury SPA
					<span class="w-1.5 h-1.5 bg-primary rounded-full" />
				</span>
			</div>
		</section>

		<section class="py-32 bg-white overflow-hidden">
			<div class="container">
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
					<div class="relative" data-aos="fade-right">
						<div
							class="aspect-square rounded-2xl overflow-hidden shadow-2xl relative z-10"
						>
							<img
								src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070"
								class="w-full h-full object-cover"
							/>
						</div>
						<div
							class="absolute -bottom-10 -left-10 w-64 h-64 bg-background rounded-2xl -z-0"
						/>
						<div class="absolute -top-6 -right-6 text-primary">
							<UIcon
								name="material-symbols:star-outline"
								class="text-6xl opacity-20"
							/>
						</div>
					</div>

					<div data-aos="fade-left">
						<span
							class="text-primary tracking-widest uppercase text-sm mb-4 block"
							>Merosimiz</span
						>
						<h2
							class="text-4xl md:text-5xl font-serif text-secondary mb-8 leading-tight"
						>
							O'n yillik tajriba va <br />
							samimiy mehmondo'stlik
						</h2>
						<div
							class="space-y-6 text-gray-600 text-lg font-light leading-relaxed"
						>
							<p>
								Grand Oasis Hotel 2010 yildan buyon mehmonlarni hashamatli va
								qulay muhitda kutib olmoqda.
							</p>
							<p>
								Biz zamonaviy dizayn va an'anaviy mehmondo'stlikni birlashtirgan
								holda, har bir mehmonimizga unutilmas tajriba taqdim etamiz.
							</p>
						</div>
						<button class="mt-10 btn-outline-dark">Batafsil ma'lumot</button>
					</div>
				</div>
			</div>
		</section>
		<section class="py-32 bg-background">
			<div
				class="container grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
			>
				<div data-aos="fade-up">
					<h2 class="text-4xl font-serif text-secondary mb-12">Aloqa</h2>
					<div class="space-y-10">
						<div class="flex items-start gap-6">
							<div
								class="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-primary shrink-0"
							>
								<UIcon
									name="material-symbols:location-on-outline"
									class="text-2xl"
								/>
							</div>
							<div>
								<h4 class="font-medium text-secondary">Manzil</h4>
								<p class="text-gray-500">
									Toshkent sh., Amir Temur ko'chasi 15
								</p>
							</div>
						</div>
						<div class="flex items-start gap-6">
							<div
								class="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-primary shrink-0"
							>
								<UIcon name="material-symbols:call-outline" class="text-2xl" />
							</div>
							<div>
								<h4 class="font-medium text-secondary">Telefon</h4>
								<p class="text-gray-500">+998 71 200 00 00</p>
							</div>
						</div>
					</div>
				</div>

				<div
					class="h-[500px] rounded-3xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 border-[12px] border-white"
					data-aos="zoom-in"
				>
					<iframe
						src="https://maps.google.com/..."
						class="w-full h-full"
						style="border: 0"
						loading="lazy"
					/>
				</div>
			</div>
		</section>
	</main>
</template>

<script setup>
const advantages = [
	{
		icon: 'material-symbols:restaurant',
		title: 'Ajoyib Oshxona',
		desc: 'Xalqaro va milliy oshxonaning eng yaxshi taomlari.',
	},
	{
		icon: 'material-symbols:spa-outline',
		title: 'Wellness & SPA',
		desc: "Sizning tanangiz va ruhingiz hordig'i uchun maxsus zona.",
	},
	{
		icon: 'material-symbols:verified-user-outline',
		title: 'Xavfsizlik',
		desc: '24/7 xavfsizlik tizimi va videonazorat xizmati.',
	},
]
</script>

<style scoped>
.hotel-theme {
	--primary: #c5a059;
	--primary-light: #e0c99e;
	--secondary: #1c1c1c;
	--background: #fdfcf9;
	--white: #ffffff;
}

/* Animatsiyalar */
@keyframes slow-zoom {
	0% {
		transform: scale(1);
	}
	100% {
		transform: scale(1.15);
	}
}
.animate-slow-zoom {
	animation: slow-zoom 30s ease-in-out infinite alternate;
}

@keyframes marquee-fast {
	0% {
		transform: translateX(0);
	}
	100% {
		transform: translateX(-50%);
	}
}
.animate-marquee-fast {
	animation: marquee-fast 40s linear infinite;
}
</style>
