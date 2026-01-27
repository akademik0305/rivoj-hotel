<template>
	<main class="hotel-theme">
		<!-- banner -->
		<section id="home" class="relative h-[100svh] overflow-hidden">
			<div class="absolute inset-0">
				<img
					src="~/assets/images/jpg/banner.jpg"
					class="w-full h-full object-cover scale-105 animate-slow-zoom"
					alt="Rivoj-98 Hotel Vodil - Hashamatli mehmonxona binosi va premium xonalar"
					loading="eager"
					fetchpriority="high"
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
					Est 1998 — Rivoj-98 Hotel
				</span>
				<h1
					class="text-5xl md:text-8xl font-serif mb-10 leading-[1.1]"
					data-aos="fade-up"
				>
					Mukammal <br />
					<span class="italic font-light text-primary-light">Hordiq</span>
					Hududi
				</h1>
			</div>

			<div
				class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/70"
				aria-hidden="true"
			>
				<Icon
					name="material-symbols:keyboard-double-arrow-down-rounded"
					class="text-3xl"
				/>
			</div>
		</section>

		<!-- rooms -->
		<section
			id="rooms"
			class="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50"
		>
			<div class="container px-4 md:px-6">
				<div class="text-center mb-12 md:mb-20" data-aos="fade-up">
					<p class="text-primary text-sm uppercase tracking-[0.3em] mb-4">
						Premium Collection
					</p>
					<h2
						class="text-3xl md:text-5xl lg:text-6xl font-serif text-secondary mb-6"
					>
						Eksklyuziv Xonalar
					</h2>
					<div class="w-24 h-0.5 bg-primary mx-auto mb-6" aria-hidden="true" />
					<p class="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
						Har bir xona o'zining noyob dizayni va qulayliklari bilan sizga
						unutilmas tajriba taqdim etadi
					</p>
				</div>

				<div
					class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
					itemscope
					itemtype="https://schema.org/ItemList"
				>
					<article
						v-for="(room, index) in rooms"
						:key="room.id"
						class="group cursor-pointer"
						:class="{ 'md:mt-16': index % 2 !== 0 }"
						:data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
						:data-aos-delay="room.delay"
						itemscope
						itemtype="https://schema.org/Hotel"
						itemprop="itemListElement"
						@click="openRoomDetails(room)"
					>
						<div
							class="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
						>
							<div class="relative aspect-[4/5] overflow-hidden">
								<img
									:src="room.image"
									:alt="`${room.title} - Rivoj-98 Hotel premium ${room.category} xonasi`"
									class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
									loading="lazy"
									itemprop="image"
								/>
								<div
									class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all duration-500"
								/>

								<div
									class="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0"
								>
									<span
										class="text-xs font-medium text-secondary uppercase tracking-wider"
										>Batafsil ko'rish</span
									>
								</div>
							</div>

							<div
								class="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
							>
								<p
									class="text-xs md:text-sm uppercase tracking-[0.2em] mb-2 text-primary-light"
								>
									{{ room.category }}
								</p>
								<h3
									class="text-2xl md:text-3xl font-serif mb-3 md:mb-4"
									itemprop="name"
								>
									{{ room.title }}
								</h3>

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
												aria-hidden="true"
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
												aria-hidden="true"
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

									<div
										class="bg-white text-secondary px-5 py-2.5 rounded-full font-semibold text-sm md:text-base shadow-lg transform group-hover:scale-105 transition-transform duration-300"
										itemprop="priceRange"
									>
										{{ room.price }} so'm
										<span class="text-xs font-normal">/ kecha</span>
									</div>
								</div>
							</div>
						</div>
					</article>
				</div>
			</div>
		</section>

		<!-- Room Details Modal -->
		<Teleport to="body">
			<Transition
				enter-active-class="transition-all duration-300 ease-out"
				leave-active-class="transition-all duration-300 ease-in"
				enter-from-class="opacity-0"
				leave-to-class="opacity-0"
			>
				<div
					v-if="showModal"
					class="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
					role="dialog"
					aria-modal="true"
					aria-labelledby="modal-title"
					@click.self="closeModal"
				>
					<div
						class="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all duration-300"
						:class="showModal ? 'scale-100' : 'scale-95'"
					>
						<div v-if="selectedRoom" class="relative">
							<button
								class="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
								aria-label="Modalni yopish"
								@click="closeModal"
							>
								<svg
									class="w-6 h-6"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>

							<div
								class="relative aspect-[16/9] overflow-hidden rounded-t-2xl bg-gray-900"
							>
								<Transition
									enter-active-class="transition-opacity duration-300"
									leave-active-class="transition-opacity duration-300"
									enter-from-class="opacity-0"
									leave-to-class="opacity-0"
									mode="out-in"
								>
									<img
										:key="currentImageIndex"
										:src="selectedRoom.images[currentImageIndex]"
										:alt="`${selectedRoom.title} - Rasm ${currentImageIndex + 1}`"
										class="w-full h-full object-cover"
										loading="lazy"
									/>
								</Transition>

								<button
									class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 hover:bg-white transition-all hover:scale-110"
									aria-label="Oldingi rasm"
									@click="prevImage"
								>
									<svg
										class="w-5 h-5"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										aria-hidden="true"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M15 19l-7-7 7-7"
										/>
									</svg>
								</button>

								<button
									class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 hover:bg-white transition-all hover:scale-110"
									aria-label="Keyingi rasm"
									@click="nextImage"
								>
									<svg
										class="w-5 h-5"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										aria-hidden="true"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M9 5l7 7-7 7"
										/>
									</svg>
								</button>

								<div
									class="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm"
									aria-live="polite"
								>
									{{ currentImageIndex + 1 }} / {{ selectedRoom.images.length }}
								</div>

								<div class="absolute bottom-4 right-4 flex gap-2">
									<button
										v-for="(img, index) in selectedRoom.images"
										:key="index"
										class="w-2 h-2 rounded-full transition-all duration-300"
										:class="
											currentImageIndex === index
												? 'bg-white w-8'
												: 'bg-white/50 hover:bg-white/75'
										"
										:aria-label="`${index + 1}-rasmga o'tish`"
										@click="goToImage(index)"
									/>
								</div>
							</div>

							<div class="p-6 md:p-8">
								<p class="text-primary text-sm uppercase tracking-wider mb-2">
									{{ selectedRoom.category }}
								</p>
								<h3
									id="modal-title"
									class="text-3xl font-serif text-secondary mb-4"
								>
									{{ selectedRoom.title }}
								</h3>

								<div class="flex items-center gap-6 mb-6 text-gray-600">
									<div class="flex items-center gap-2">
										<svg
											class="w-5 h-5"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											aria-hidden="true"
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
											aria-hidden="true"
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
											{{ selectedRoom.price }} so'm
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
											href="tel:+998733530740"
											class="text-xl font-semibold text-primary hover:text-primary/80 transition-colors flex items-center gap-2"
											aria-label="Telefon qilish +998 73 353 07 40"
										>
											<svg
												class="w-5 h-5"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
												aria-hidden="true"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
												/>
											</svg>
											+998 73 353 07 40
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Transition>
		</Teleport>

		<!-- advantages -->
		<section
			id="advantages"
			class="py-32 bg-background border-y border-primary/10"
		>
			<div class="container">
				<div class="grid grid-cols-1 md:grid-cols-3 gap-16">
					<article
						v-for="(adv, i) in advantages"
						:key="i"
						class="text-center px-6"
						data-aos="fade-up"
						:data-aos-delay="i * 100"
					>
						<div
							class="text-primary mb-8 flex justify-center"
							aria-hidden="true"
						>
							<Icon :name="adv.icon" class="text-6xl font-light" />
						</div>
						<h3 class="text-xl font-serif mb-4 text-secondary">
							{{ adv.title }}
						</h3>
						<p class="text-gray-500 leading-relaxed font-light">
							{{ adv.desc }}
						</p>
					</article>
				</div>
			</div>
		</section>

		<!-- linear text -->
		<section
			class="py-16 bg-secondary overflow-hidden flex whitespace-nowrap border-y border-white/5"
			aria-hidden="true"
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

		<!-- about -->
		<section id="about" class="py-32 bg-white overflow-hidden">
			<div class="container">
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
					<div class="relative" data-aos="fade-right">
						<div
							class="aspect-square rounded-2xl overflow-hidden shadow-2xl relative z-10"
						>
							<img
								src="~/assets/images/jpg/about.jpg"
								class="w-full h-full object-cover"
								alt="Rivoj-98 Hotel ichki interyeri va mehmondo'stlik xizmatlari"
								loading="lazy"
							/>
						</div>
						<div
							class="absolute -bottom-10 -left-10 w-64 h-64 bg-background rounded-2xl -z-0"
							aria-hidden="true"
						/>
						<div
							class="absolute -top-6 -right-6 text-primary"
							aria-hidden="true"
						>
							<Icon
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
								Rivoj-98 Hotel 1998 yildan buyon mehmonlarni hashamatli va qulay
								muhitda kutib olmoqda.
							</p>
							<p>
								Biz zamonaviy dizayn va an'anaviy mehmondo'stlikni birlashtirgan
								holda, har bir mehmonimizga unutilmas tajriba taqdim etamiz.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- contact -->
		<section id="contact" class="py-32 bg-background">
			<div
				class="container grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
			>
				<address class="not-italic" data-aos="fade-up">
					<h2 class="text-4xl font-serif text-secondary mb-12">Aloqa</h2>
					<div class="space-y-10">
						<div class="flex items-start gap-6">
							<div
								class="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-primary shrink-0"
								aria-hidden="true"
							>
								<Icon
									name="material-symbols:location-on-outline"
									class="text-2xl"
								/>
							</div>
							<div>
								<h3 class="font-medium text-secondary">Manzil</h3>
								<p class="text-gray-500" itemprop="address">
									Vodil shaharchasi, Yaxshi Niyat ko'chasi, 1A uy
								</p>
							</div>
						</div>
						<div class="flex items-start gap-6">
							<div
								class="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-primary shrink-0"
								aria-hidden="true"
							>
								<Icon name="material-symbols:call-outline" class="text-2xl" />
							</div>
							<div class="flex flex-col gap-2">
								<h3 class="font-medium text-secondary">Telefonlar</h3>
								<a
									href="tel:+998733530740"
									class="text-gray-500 hover:text-primary transition-colors"
									itemprop="telephone"
								>
									+998 73 353 07 40
								</a>
								<a
									href="tel:+998733530740"
									class="text-gray-500 hover:text-primary transition-colors"
									itemprop="telephone"
								>
									+998 88 733 98 98
								</a>
							</div>
						</div>
					</div>
				</address>

				<div
					class="h-[500px] rounded-3xl overflow-hidden shadow-2xl grayscale-25 hover:grayscale-0 transition-all duration-1000 border-[12px] border-white"
					data-aos="zoom-in"
				>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.723471037667!2d71.72696629678954!3d40.1707102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb9396ef3b6ce5%3A0xee71b682e62832c0!2sHotel%20rivoj-98!5e0!3m2!1sru!2s!4v1768382713475!5m2!1sru!2s"
						style="border: 0"
						allowfullscreen=""
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
						class="w-full h-full"
						title="Rivoj-98 Hotel joylashuvi xaritada"
					/>
				</div>
			</div>
		</section>
	</main>
</template>
<script setup>
// ============================================
// IMPORTS
// ============================================
import { ref, onUnmounted } from "vue"

// ============================================
// SEO: META TEGLAR VA HEAD KONFIGURATSIYASI
// ============================================
useHead({
	title: "Rivoj-98 Hotel Vodil | Hashamatli Mehmonxona va Xonalar",
	meta: [
		// Asosiy meta teglar
		{
			name: "description",
			content:
				"Rivoj-98 Hotel Vodilda premium xonalar, ajoyib oshxona xizmatlari. 1998 yildan beri mehmonlarni samimiy mehmondo'stlik va zamonaviy qulayliklar bilan kutib olmoqda. Bron qilish: +998 73 353 07 40",
		},
		{
			name: "keywords",
			content:
				"Rivoj-98 hotel, Vodil mehmonxona, hotel Vodil, luxury hotel Uzbekistan, mehmonxona Vodil, premium xonalar, Vodil, restoran Vodil, hashamatli mehmonxona, Deluxe Suite, Royal Garden, Presidential Suite, Standard Room, hotel booking Vodil",
		},
		{ name: "author", content: "Rivoj-98 Hotel" },
		{
			name: "robots",
			content:
				"index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
		},
		{ name: "googlebot", content: "index, follow" },
		{ name: "viewport", content: "width=device-width, initial-scale=1.0" },
		{ "http-equiv": "X-UA-Compatible", content: "IE=edge" },

		// Open Graph (Facebook, LinkedIn)
		{ property: "og:type", content: "website" },
		{ property: "og:site_name", content: "Rivoj-98 Hotel" },
		{
			property: "og:title",
			content: "Rivoj-98 Hotel Vodil | Hashamatli Mehmonxona va Xonalar",
		},
		{
			property: "og:description",
			content:
				"Premium xonalar, ajoyib oshxona xizmatlari bilan unutilmas tajriba. 1998 yildan beri mehmonlarni samimiy mehmondo'stlik bilan kutib olmoqda.",
		},
		{
			property: "og:image",
			content:
				"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070",
		},
		{ property: "og:image:width", content: "2070" },
		{ property: "og:image:height", content: "1380" },
		{
			property: "og:image:alt",
			content: "Rivoj-98 Hotel Vodil - Hashamatli mehmonxona",
		},
		{ property: "og:url", content: "https://rivoj98hotel.uz" },
		{ property: "og:locale", content: "uz_UZ" },

		// Twitter Card
		{ name: "twitter:card", content: "summary_large_image" },
		{
			name: "twitter:title",
			content: "Rivoj-98 Hotel Vodil | Hashamatli Mehmonxona",
		},
		{
			name: "twitter:description",
			content:
				"Premium xonalar, ajoyib oshxona xizmatlari. Bron qilish: +998 73 353 07 40",
		},
		{
			name: "twitter:image",
			content:
				"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070",
		},
		{ name: "twitter:image:alt", content: "Rivoj-98 Hotel Vodil" },

		// Geo teglar
		{ name: "geo.region", content: "UZ" },
		{ name: "geo.placename", content: "Vodil" },
		{ name: "geo.position", content: "40.1707102;71.72696629678954" },
		{ name: "ICBM", content: "40.1707102, 71.72696629678954" },

		// Qo'shimcha SEO teglar
		{ name: "theme-color", content: "#c5a059" },
		{ name: "apple-mobile-web-app-capable", content: "yes" },
		{
			name: "apple-mobile-web-app-status-bar-style",
			content: "black-translucent",
		},
		{ name: "format-detection", content: "telephone=yes" },
		{ name: "application-name", content: "Rivoj-98 Hotel" },
		{ name: "mobile-web-app-capable", content: "yes" },
	],
	link: [
		{ rel: "canonical", href: "https://rivoj98hotel.uz" },
		{ rel: "alternate", hreflang: "uz", href: "https://rivoj98hotel.uz" },
		{ rel: "alternate", hreflang: "ru", href: "https://rivoj98hotel.uz/ru" },
		{ rel: "alternate", hreflang: "en", href: "https://rivoj98hotel.uz/en" },
		{
			rel: "alternate",
			hreflang: "x-default",
			href: "https://rivoj98hotel.uz",
		},
		{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
		{
			rel: "apple-touch-icon",
			sizes: "180x180",
			href: "/apple-touch-icon.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "32x32",
			href: "/favicon-32x32.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "16x16",
			href: "/favicon-16x16.png",
		},
		{ rel: "manifest", href: "/site.webmanifest" },
	],
	htmlAttrs: {
		lang: "uz",
		dir: "ltr",
	},
})

// ============================================
// SEO: STRUCTURED DATA (JSON-LD)
// ============================================
useSchemaOrg([
	// Hotel Schema
	{
		"@context": "https://schema.org",
		"@type": "Hotel",
		"@id": "https://rivoj98hotel.uz/#hotel",
		name: "Rivoj-98 Hotel",
		alternateName: "Rivoj 98 Hotel Vodil",
		description:
			"Vodilda joylashgan hashamatli mehmonxona. Premium xonalar, ajoyib oshxona va zamonaviy qulayliklar. 1998 yildan beri mehmonlarni samimiy mehmondo'stlik bilan kutib olmoqda.",
		image: [
			"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070",
			"https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070",
			"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070",
			"https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2070",
		],
		url: "https://rivoj98hotel.uz",
		telephone: "+998733530740",
		email: "info@rivoj98hotel.uz",
		address: {
			"@type": "PostalAddress",
			streetAddress: "Yaxshi Niyat ko'chasi, 1A uy",
			addressLocality: "Vodil",
			addressRegion: "Farg'ona",
			addressCountry: "UZ",
		},
		geo: {
			"@type": "GeoCoordinates",
			latitude: 40.1707102,
			longitude: 71.72696629678954,
		},
		hasMap: "https://maps.google.com/?q=40.1707102,71.72696629678954",
		priceRange: "$80-$450",
		starRating: {
			"@type": "Rating",
			ratingValue: "5",
			bestRating: "5",
		},
		amenityFeature: [
			{
				"@type": "LocationFeatureSpecification",
				name: "Restaurant",
				value: true,
			},
			{ "@type": "LocationFeatureSpecification", name: "SPA", value: true },
			{
				"@type": "LocationFeatureSpecification",
				name: "Wellness Center",
				value: true,
			},
			{
				"@type": "LocationFeatureSpecification",
				name: "Free WiFi",
				value: true,
			},
			{
				"@type": "LocationFeatureSpecification",
				name: "24/7 Security",
				value: true,
			},
			{
				"@type": "LocationFeatureSpecification",
				name: "Infinity Pool",
				value: true,
			},
			{ "@type": "LocationFeatureSpecification", name: "Jacuzzi", value: true },
			{
				"@type": "LocationFeatureSpecification",
				name: "Mini Bar",
				value: true,
			},
			{
				"@type": "LocationFeatureSpecification",
				name: "Smart TV",
				value: true,
			},
			{ "@type": "LocationFeatureSpecification", name: "Balcony", value: true },
			{
				"@type": "LocationFeatureSpecification",
				name: "Room Service",
				value: true,
			},
			{ "@type": "LocationFeatureSpecification", name: "Parking", value: true },
		],
		checkinTime: "14:00",
		checkoutTime: "12:00",
		numberOfRooms: 4,
		currenciesAccepted: "USD, UZS",
		paymentAccepted: "Cash, Credit Card",
		openingHours: "Mo-Su 00:00-23:59",
	},
	// LocalBusiness Schema
	{
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		"@id": "https://rivoj98hotel.uz/#business",
		name: "Rivoj-98 Hotel",
		image: [
			"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070",
			"https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070",
		],
		url: "https://rivoj98hotel.uz",
		telephone: "+998733530740",
		priceRange: "$80-$450",
		address: {
			"@type": "PostalAddress",
			streetAddress: "Yaxshi Niyat ko'chasi, 1A uy",
			addressLocality: "Vodil",
			addressRegion: "Farg'ona",
			addressCountry: "UZ",
		},
		geo: {
			"@type": "GeoCoordinates",
			latitude: 40.1707102,
			longitude: 71.72696629678954,
		},
		openingHoursSpecification: {
			"@type": "OpeningHoursSpecification",
			dayOfWeek: [
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday",
				"Saturday",
				"Sunday",
			],
			opens: "00:00",
			closes: "23:59",
		},
		sameAs: [
			"https://www.facebook.com/rivoj98hotel",
			"https://www.instagram.com/rivoj98hotel",
			"https://t.me/rivoj98hotel",
		],
	},
	// Organization Schema
	{
		"@context": "https://schema.org",
		"@type": "Organization",
		"@id": "https://rivoj98hotel.uz/#organization",
		name: "Rivoj-98 Hotel",
		url: "https://rivoj98hotel.uz",
		logo: "https://rivoj98hotel.uz/logo.png",
		description: "Vodilda joylashgan hashamatli mehmonxona",
		email: "info@rivoj98hotel.uz",
		telephone: "+998733530740",
		address: {
			"@type": "PostalAddress",
			streetAddress: "Yaxshi Niyat ko'chasi, 1A uy",
			addressLocality: "Vodil",
			addressRegion: "Farg'ona",
			addressCountry: "UZ",
		},
		sameAs: [
			"https://www.facebook.com/rivoj98hotel",
			"https://www.instagram.com/rivoj98hotel",
			"https://t.me/rivoj98hotel",
		],
	},
	// BreadcrumbList Schema
	{
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Bosh sahifa",
				item: "https://rivoj98hotel.uz",
			},
			{
				"@type": "ListItem",
				position: 2,
				name: "Xonalar",
				item: "https://rivoj98hotel.uz#rooms",
			},
			{
				"@type": "ListItem",
				position: 3,
				name: "Aloqa",
				item: "https://rivoj98hotel.uz#contact",
			},
		],
	},
])

// ============================================
// MA'LUMOTLAR: AFZALLIKLAR
// ============================================
const advantages = [
	{
		icon: "material-symbols:restaurant",
		title: "Ajoyib Oshxona",
		desc: "Xalqaro va milliy oshxonaning eng yaxshi taomlari.",
	},
	{
		icon: "material-symbols:spa-outline",
		title: "Wellness & SPA",
		desc: "Sizning tanangiz va ruhingiz hordig'i uchun maxsus zona.",
	},
	{
		icon: "material-symbols:verified-user-outline",
		title: "Xavfsizlik",
		desc: "24/7 xavfsizlik tizimi va videonazorat xizmati.",
	},
]

// ============================================
// MA'LUMOTLAR: XONALAR
// ============================================
const rooms = [
	{
		id: 1,
		image: "./2-room/room-1.jpg",
		images: [
			"./2-room/room-3.jpg",
			"./2-room/room-5.jpg",
			"./2-room/room-6.jpg",
			"./2-room/room-7.jpg",
		],
		category: "Luxury Stay",
		title: "2-Kishilik",
		price: "600 000",
		size: "30m²",
		guests: "2 kishi",
		features: ["King Size Bed", "Balkon", "Smart TV"],
		delay: "0",
	},
	{
		id: 2,
		image: "./5-room/room-1.jpg",
		images: [
			"./5-room/room-2.jpg",
			"./5-room/room-4.jpg",
			"./5-room/room-3.jpg",
			"./5-room/room-1.jpg",
		],
		category: "Premium Experience",
		title: "4-kishilik",
		price: "800 000",
		size: "40m²",
		guests: "4 kishi",
		features: ["Jacuzzi", "Bog ko'rinishi", "Mini Bar"],
		delay: "100",
	},
	{
		id: 3,
		image: "./5-room/room-2.jpg",
		images: [
			"./5-room/room-2.jpg",
			"./5-room/room-3.jpg",
			"./5-room/room-4.jpg",
			"./5-room/room-1.jpg",
		],
		category: "Executive Class",
		title: "5-kishilik",
		price: "1000 000",
		size: "100m²",
		guests: "5 kishi",
		features: ["Private Pool", "Butler Service", "Ocean View"],
		delay: "200",
	},
]

// ============================================
// REAKTIV MA'LUMOTLAR
// ============================================
const selectedRoom = ref(null)
const showModal = ref(false)
const currentImageIndex = ref(0)

// ============================================
// FUNKSIYALAR: MODAL BOSHQARUVI
// ============================================

/**
 * Xona tafsilotlari modalini ochish
 * Modal ochilganda body scroll o'chiriladi
 *
 * @param {Object} room - Tanlangan xona ma'lumotlari
 * @param {number} room.id - Xona ID raqami
 * @param {string} room.title - Xona nomi
 * @param {string} room.price - Xona narxi
 * @param {Array} room.images - Xona rasmlari massivi
 * @param {Array} room.features - Xona xususiyatlari
 */
const openRoomDetails = room => {
	selectedRoom.value = room
	currentImageIndex.value = 0
	showModal.value = true
	document.body.style.overflow = "hidden"

	// Accessibility uchun focus
	setTimeout(() => {
		const modalElement = document.querySelector('[role="dialog"]')
		if (modalElement) {
			modalElement.focus()
		}
	}, 100)
}

/**
 * Modalni yopish va body scroll ni tiklash
 * ESC tugmasi bosilganda ham ishlaydi
 */
const closeModal = () => {
	showModal.value = false
	document.body.style.overflow = ""
	selectedRoom.value = null
	currentImageIndex.value = 0
}

// ============================================
// FUNKSIYALAR: RASM SLIDER BOSHQARUVI
// ============================================

/**
 * Keyingi rasmga o'tish
 * Oxirgi rasmdan keyin birinchi rasmga qaytadi (loop)
 */
const nextImage = () => {
	if (selectedRoom.value && selectedRoom.value.images) {
		currentImageIndex.value =
			(currentImageIndex.value + 1) % selectedRoom.value.images.length
	}
}

/**
 * Oldingi rasmga o'tish
 * Birinchi rasmdan oldingi rasmga qaytadi (reverse loop)
 */
const prevImage = () => {
	if (selectedRoom.value && selectedRoom.value.images) {
		currentImageIndex.value =
			(currentImageIndex.value - 1 + selectedRoom.value.images.length) %
			selectedRoom.value.images.length
	}
}

/**
 * Muayyan rasmga o'tish
 * Dot indikatorlar orqali rasm tanlash uchun
 *
 * @param {number} index - Rasm indeksi (0 dan boshlanadi)
 */
const goToImage = index => {
	if (
		index >= 0 &&
		selectedRoom.value &&
		index < selectedRoom.value.images.length
	) {
		currentImageIndex.value = index
	}
}

// ============================================
// EVENT LISTENERS
// ============================================

/**
 * Klaviatura hodisalarini tinglash
 * ESC - modalni yopish
 * Arrow Left - oldingi rasm
 * Arrow Right - keyingi rasm
 */
if (import.meta.client) {
	document.addEventListener("keydown", e => {
		if (showModal.value) {
			switch (e.key) {
				case "Escape":
					closeModal()
					break
				case "ArrowLeft":
					prevImage()
					break
				case "ArrowRight":
					nextImage()
					break
			}
		}
	})
}

// ============================================
// LIFECYCLE HOOKS
// ============================================

/**
 * Komponent o'chirilganda tozalash
 * Modal ochiq holda sahifadan chiqilsa ham scroll ishlaydi
 * Memory leak oldini olish uchun muhim
 */
onUnmounted(() => {
	document.body.style.overflow = ""
	showModal.value = false
	selectedRoom.value = null
})

// ============================================
// EXPORTS (agar kerak bo'lsa)
// ============================================
// defineExpose({
//   openRoomDetails,
//   closeModal,
//   rooms,
//   advantages
// })
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
