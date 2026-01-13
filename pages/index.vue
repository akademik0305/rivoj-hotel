<template>
	<main class="hotel-theme">
		<!-- banner -->
		<section id="#" class="relative h-[100svh] overflow-hidden">
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
		<!-- banner -->

		<!-- rooms -->
		<!-- Rooms Section -->
		<section id="rooms"  class="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
			<div class="container px-4 md:px-6">
				<!-- Section Header -->
				<div class="text-center mb-12 md:mb-20" data-aos="fade-up">
					<p class="text-primary text-sm uppercase tracking-[0.3em] mb-4">
						Premium Collection
					</p>
					<h2
						class="text-3xl md:text-5xl lg:text-6xl font-serif text-secondary mb-6"
					>
						Eksklyuziv Xonalar
					</h2>
					<div class="w-24 h-0.5 bg-primary mx-auto mb-6" />
					<p class="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
						Har bir xona o'zining noyob dizayni va qulayliklari bilan sizga
						unutilmas tajriba taqdim etadi
					</p>
				</div>

				<!-- Rooms Grid -->
				<div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
					<div
						v-for="(room, index) in rooms"
						:key="room.id"
						class="group cursor-pointer"
						:class="{ 'md:mt-16': index % 2 !== 0 }"
						:data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
						:data-aos-delay="room.delay"
						@click="openRoomDetails(room)"
					>
						<div
							class="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
						>
							<!-- Image Container -->
							<div class="relative aspect-[4/5] overflow-hidden">
								<img
									:src="room.image"
									:alt="room.title"
									class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
								/>
								<!-- Overlay -->
								<div
									class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all duration-500"
								/>

								<!-- Hover Info Badge -->
								<div
									class="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0"
								>
									<span
										class="text-xs font-medium text-secondary uppercase tracking-wider"
										>Batafsil ko'rish</span
									>
								</div>
							</div>

							<!-- Room Info -->
							<div
								class="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
							>
								<p
									class="text-xs md:text-sm uppercase tracking-[0.2em] mb-2 text-primary-light"
								>
									{{ room.category }}
								</p>
								<h4 class="text-2xl md:text-3xl font-serif mb-3 md:mb-4">
									{{ room.title }}
								</h4>

								<!-- Features - Hidden by default, shown on hover -->
								<div
									class="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100"
								>
									<span
										v-for="feature in room.features"
										:key="feature"
										class="text-xs bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full"
									>
										{{ feature }}
									</span>
								</div>

								<!-- Room Details -->
								<div class="flex items-center justify-between flex-wrap gap-4">
									<div
										class="flex items-center gap-4 text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 delay-150"
									>
										<div class="flex items-center gap-1">
											<svg
												class="w-4 h-4"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
												/>
											</svg>
											<span>{{ room.size }}</span>
										</div>
										<div class="flex items-center gap-1">
											<svg
												class="w-4 h-4"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
												/>
											</svg>
											<span>{{ room.guests }}</span>
										</div>
									</div>

									<!-- Price -->
									<div
										class="bg-white text-secondary px-5 py-2.5 rounded-full font-semibold text-sm md:text-base shadow-lg transform group-hover:scale-105 transition-transform duration-300"
									>
										${{ room.price }}
										<span class="text-xs font-normal">/ kecha</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- View All Button -->
				<div
					class="text-center mt-12 md:mt-16"
					data-aos="fade-up"
					data-aos-delay="400"
				>
					<button
						class="group px-8 py-4 bg-secondary text-white rounded-full uppercase tracking-wider text-sm font-medium hover:bg-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1 active:translate-y-0"
					>
						<span class="flex items-center gap-2">
							Barcha xonalarni ko'rish
							<svg
								class="w-4 h-4 group-hover:translate-x-1 transition-transform"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 5l7 7-7 7"
								/>
							</svg>
						</span>
					</button>
				</div>
			</div>
		</section>

		<!-- Room Details Modal -->
		<Transition
			enter-active-class="transition-all duration-300 ease-out"
			leave-active-class="transition-all duration-300 ease-in"
			enter-from-class="opacity-0"
			leave-to-class="opacity-0"
		>
			<div
				v-if="showModal"
				class="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
				@click.self="closeModal"
			>
				<div
					class="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all duration-300"
					:class="showModal ? 'scale-100' : 'scale-95'"
				>
					<div v-if="selectedRoom" class="relative">
						<!-- Close Button -->
						<button
							@click="closeModal"
							class="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
						>
							<svg
								class="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>

						<!-- Modal Image Slider -->
						<div
							class="relative aspect-[16/9] overflow-hidden rounded-t-2xl bg-gray-900"
						>
							<!-- Main Image -->
							<Transition
								enter-active-class="transition-opacity duration-500"
								leave-active-class="transition-opacity duration-500"
								enter-from-class="opacity-0"
								leave-to-class="opacity-0"
								mode="out-in"
							>
								<img
									:key="currentImageIndex"
									:src="selectedRoom.images[currentImageIndex]"
									:alt="`${selectedRoom.title} - Rasm ${currentImageIndex + 1}`"
									class="w-full h-full object-cover"
								/>
							</Transition>

							<!-- Previous Button -->
							<button
								@click="prevImage"
								class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 hover:bg-white transition-all hover:scale-110"
							>
								<svg
									class="w-5 h-5"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M15 19l-7-7 7-7"
									/>
								</svg>
							</button>

							<!-- Next Button -->
							<button
								@click="nextImage"
								class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 hover:bg-white transition-all hover:scale-110"
							>
								<svg
									class="w-5 h-5"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 5l7 7-7 7"
									/>
								</svg>
							</button>

							<!-- Image Counter -->
							<div
								class="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm"
							>
								{{ currentImageIndex + 1 }} / {{ selectedRoom.images.length }}
							</div>

							<!-- Dot Indicators -->
							<div class="absolute bottom-4 right-4 flex gap-2">
								<button
									v-for="(img, index) in selectedRoom.images"
									:key="index"
									@click="goToImage(index)"
									class="w-2 h-2 rounded-full transition-all duration-300"
									:class="
										currentImageIndex === index
											? 'bg-white w-8'
											: 'bg-white/50 hover:bg-white/75'
									"
								/>
							</div>
						</div>

						<!-- Modal Content -->
						<div class="p-6 md:p-8">
							<p class="text-primary text-sm uppercase tracking-wider mb-2">
								{{ selectedRoom.category }}
							</p>
							<h3 class="text-3xl font-serif text-secondary mb-4">
								{{ selectedRoom.title }}
							</h3>

							<div class="flex items-center gap-6 mb-6 text-gray-600">
								<div class="flex items-center gap-2">
									<svg
										class="w-5 h-5"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
										/>
									</svg>
									<span>{{ selectedRoom.size }}</span>
								</div>
								<div class="flex items-center gap-2">
									<svg
										class="w-5 h-5"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
										/>
									</svg>
									<span>{{ selectedRoom.guests }}</span>
								</div>
							</div>

							<div class="border-t pt-6 mb-6">
								<h4 class="text-lg font-semibold text-secondary mb-3">
									Xususiyatlar
								</h4>
								<div class="flex flex-wrap gap-2">
									<span
										v-for="feature in selectedRoom.features"
										:key="feature"
										class="bg-gray-100 px-4 py-2 rounded-full text-sm text-gray-700"
									>
										{{ feature }}
									</span>
								</div>
							</div>

							<div
								class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t"
							>
								<div>
									<p class="text-sm text-gray-600 mb-1">Narxi</p>
									<p class="text-3xl font-bold text-secondary">
										${{ selectedRoom.price }}
										<span class="text-base font-normal text-gray-600"
											>/ kecha</span
										>
									</p>
								</div>
								<div class="text-left sm:text-right">
									<p class="text-sm text-gray-600 mb-1">
										Bron qilish uchun bog'laning
									</p>
									<a
										href="tel:+998712000000"
										class="text-xl font-semibold text-primary hover:text-primary/80 transition-colors flex items-center gap-2"
									>
										<svg
											class="w-5 h-5"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
											/>
										</svg>
										+998 71 200 00 00
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Transition>
		<!-- rooms -->

		<!-- advantages -->
		<section id="advantages" class="py-32 bg-background border-y border-primary/10">
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
		<!-- advantages -->

		<!-- linear text -->
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
		<!-- linear text -->

		<!-- about -->
		<section id="about" class="py-32 bg-white overflow-hidden">
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
		<!-- about -->

		<!-- contact -->
		<section id="contact" class="py-32 bg-background">
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
		<!-- contact -->
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

const rooms = [
	{
		id: 1,
		image:
			'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070',
		images: [
			'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070',
			'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2070',
			'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070',
			'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2070',
		],
		category: 'Luxury Stay',
		title: 'Deluxe Suite',
		price: '120',
		size: '45m²',
		guests: '2 kishi',
		features: ['King Size Bed', 'Balkon', 'Smart TV'],
		delay: '0',
	},
	{
		id: 2,
		image:
			'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070',
		images: [
			'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070',
			'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2070',
			'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070',
			'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2070',
		],
		category: 'Premium Experience',
		title: 'Royal Garden',
		price: '250',
		size: '65m²',
		guests: '4 kishi',
		features: ['Jacuzzi', "Bog ko'rinishi", 'Mini Bar'],
		delay: '100',
	},
	{
		id: 3,
		image:
			'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2070',
		images: [
			'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2070',
			'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070',
			'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070',
			'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2070',
		],
		category: 'Executive Class',
		title: 'Presidential Suite',
		price: '450',
		size: '120m²',
		guests: '6 kishi',
		features: ['Private Pool', 'Butler Service', 'Ocean View'],
		delay: '200',
	},
	{
		id: 4,
		image:
			'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2070',
		images: [
			'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2070',
			'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2070',
			'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070',
			'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070',
		],
		category: 'Comfort Zone',
		title: 'Standard Room',
		price: '80',
		size: '30m²',
		guests: '2 kishi',
		features: ['Queen Bed', 'City View', 'WiFi'],
		delay: '300',
	},
]

const selectedRoom = ref(null)
const showModal = ref(false)
const currentImageIndex = ref(0)

const openRoomDetails = room => {
	selectedRoom.value = room
	currentImageIndex.value = 0
	showModal.value = true
	document.body.style.overflow = 'hidden'
}

const closeModal = () => {
	showModal.value = false
	document.body.style.overflow = ''
}

const nextImage = () => {
	if (selectedRoom.value) {
		currentImageIndex.value =
			(currentImageIndex.value + 1) % selectedRoom.value.images.length
	}
}

const prevImage = () => {
	if (selectedRoom.value) {
		currentImageIndex.value =
			(currentImageIndex.value - 1 + selectedRoom.value.images.length) %
			selectedRoom.value.images.length
	}
}

const goToImage = index => {
	currentImageIndex.value = index
}

onUnmounted(() => {
	document.body.style.overflow = ''
})
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
