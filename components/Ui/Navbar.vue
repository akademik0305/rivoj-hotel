<script setup lang="ts">
import urls from '~/service/urls'
import Service from '~/service/Service'
import { useCartStore } from '~/store/cart.store'
const switchLocalePath = useSwitchLocalePath()

//===============================-< imports >-===============================
const { locale } = useI18n()
const router = useRouter()
const localePath = useLocalePath()
const cartStore = useCartStore()

//===============================-< languages >-===============================
type TLocale = 'uz'
const currentLang = ref<TLocale>(locale.value)

watch(currentLang, () => {
	router.push(switchLocalePath(currentLang.value.toLowerCase() as TLocale))
})

//===============================-< handle scrool and resize >-===============================
const startFixed = 80
const isFixedNav = ref(false)
const navbarHeight = ref(80)

function handleScrool() {
	const navbar = document.querySelector('#navbar')
	const currentNavbarHeight = navbar?.scrollHeight || startFixed
	navbarHeight.value = currentNavbarHeight

	if (window.scrollY > currentNavbarHeight) {
		isFixedNav.value = true
		document.body.style.paddingTop = `${currentNavbarHeight}px`
	} else {
		isFixedNav.value = false
		document.body.style.paddingTop = '0px'
	}
}

function handleResize() {
	const navbar = document.querySelector('#navbar')
	const currentNavbarHeight = navbar?.scrollHeight || startFixed
	navbarHeight.value = currentNavbarHeight
}

//===============================-< get contact >-===============================
const contact = ref()

async function getContact() {
	const res = await Service.get(urls.getContactInfo(), locale.value, null)
	contact.value = res.data
}

getContact()

//===============================-< mobile menu >-===============================
const isMenuOpen = ref(false)
const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value)
const closeMenu = () => (isMenuOpen.value = false)

// Close menu when route changes
watch(
	() => router.currentRoute.value.path,
	() => {
		closeMenu()
	}
)

//===============================-< on page load >-===============================
onMounted(() => {
	currentLang.value = locale.value
	window.addEventListener('scroll', handleScrool)
	window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
	window.removeEventListener('scroll', handleScrool)
	window.removeEventListener('resize', handleResize)
})
</script>

<template>
	<div>
		<nav
			id="navbar"
			class="-top-10 left-0 bg-navbar-bg w-full z-50 border-b border-b-border transition-all"
			:class="[isFixedNav ? 'fixed top-0 shadow-md' : 'static']"
		>
			<div class="container">
				<div class="py-4 flex items-center justify-between">
					<!-- Logo -->
					<NuxtLink
						:to="localePath('/')"
						class="block w-32 sm:w-40 h-auto z-50"
					>
						<img
							:src="contact?.logo"
							alt="logo"
							class="w-full h-full object-contain max-h-16 sm:max-h-20 rounded-md overflow-hidden"
						/>
					</NuxtLink>

					<!-- Desktop Menu -->
					<ul class="hidden lg:flex items-center gap-6 xl:gap-8">
						<li class="relative group">
							<NuxtLink
								:to="localePath('/')"
								class="font-medium text-text group-hover:text-main transition-colors duration-300"
							>
								Asosiy sahifa
							</NuxtLink>
							<span
								class="absolute bottom-0 left-0 w-full bg-main h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
							/>
						</li>
						<li class="relative group">
							<NuxtLink
								:to="localePath('/about')"
								class="font-medium text-text group-hover:text-main transition-colors duration-300"
							>
								Biz haqimizda
							</NuxtLink>
							<span
								class="absolute bottom-0 left-0 w-full bg-main h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
							/>
						</li>
						<li class="relative group">
							<NuxtLink
								:to="localePath('/categories')"
								class="font-medium text-text group-hover:text-main transition-colors duration-300"
							>
								Mahsulotlar
							</NuxtLink>
							<span
								class="absolute bottom-0 left-0 w-full bg-main h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
							/>
						</li>
						<li class="relative group">
							<NuxtLink
								:to="localePath('/employees')"
								class="font-medium text-text group-hover:text-main transition-colors duration-300"
							>
								Xodimlar
							</NuxtLink>
							<span
								class="absolute bottom-0 left-0 w-full bg-main h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
							/>
						</li>
						<li class="relative group">
							<NuxtLink
								:to="localePath('/contact')"
								class="font-medium text-text group-hover:text-main transition-colors duration-300"
							>
								Bog'lanish
							</NuxtLink>
							<span
								class="absolute bottom-0 left-0 w-full bg-main h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
							/>
						</li>
					</ul>

					<!-- Right Actions -->
					<div class="flex items-center gap-2 sm:gap-3 z-50">
						<!-- Katalog Button -->
						<a
							target="_blank"
							href="/katalog_uz.pdf"
							class="hidden sm:flex items-center justify-center gap-2 border rounded-xl py-1.5 px-4 lg:px-7 cursor-pointer group hover:bg-main hover:text-white border-main text-main transition-all duration-300 text-sm lg:text-base hover:shadow-lg hover:shadow-main/30 hover:scale-105 active:scale-95"
						>
							<span class="hidden md:inline">Katalog</span>
							<span class="md:hidden">PDF</span>
							<UIcon
								name="line-md:downloading-loop"
								class="text-xl lg:text-2xl group-hover:text-white"
							/>
						</a>

						<!-- Cart -->
						<NuxtLink
							:to="localePath('/cart')"
							class="relative flex items-center justify-center gap-2 w-auto py-1.5 px-2 cursor-pointer hover:border-main transition-colors group"
						>
							<UIcon
								name="proicons:cart"
								class="text-xl sm:text-2xl w-5 sm:w-6 text-text group-hover:text-main transition-colors"
							/>
							<span
								v-if="cartStore.productsCount"
								class="flex items-center justify-center bg-main rounded-full absolute -top-1 -right-1 text-bg text-xs w-5 h-5 font-semibold"
							>
								{{ cartStore.productsCount }}
							</span>
						</NuxtLink>

						<!-- Mobile Hamburger -->
						<button
							class="lg:hidden flex flex-col gap-1.5 p-2"
							aria-label="Toggle Menu"
							@click="toggleMenu"
						>
							<span
								class="w-6 h-0.5 bg-text transition-all duration-300"
								:class="isMenuOpen ? 'rotate-45 translate-y-2' : ''"
							/>
							<span
								class="w-6 h-0.5 bg-text transition-all duration-300"
								:class="isMenuOpen ? 'opacity-0' : ''"
							/>
							<span
								class="w-6 h-0.5 bg-text transition-all duration-300"
								:class="isMenuOpen ? '-rotate-45 -translate-y-2' : ''"
							/>
						</button>
					</div>
				</div>
			</div>

			<!-- Mobile Menu Overlay -->
			<Transition
				enter-active-class="transition-opacity duration-300"
				leave-active-class="transition-opacity duration-300"
				enter-from-class="opacity-0"
				leave-to-class="opacity-0"
			>
				<div
					v-if="isMenuOpen"
					class="fixed inset-0 bg-black/50 lg:hidden z-50"
					:style="{ top: `${navbarHeight}px` }"
					@click="closeMenu"
				/>
			</Transition>

			<!-- Mobile Menu Drawer -->
			<Transition
				enter-active-class="transition-transform duration-300 ease-out"
				leave-active-class="transition-transform duration-300 ease-in"
				enter-from-class="translate-x-full"
				leave-to-class="translate-x-full"
			>
				<div
					v-if="isMenuOpen"
					class="fixed right-0 top-0 h-screen w-80 sm:w-96 bg-gradient-to-b from-navbar-bg to-bg shadow-2xl lg:hidden overflow-y-auto z-50 border-l border-border"
					:style="{ marginTop: `${navbarHeight}px` }"
				>
					<div class="p-6 sm:p-8">
						<!-- Menu Header -->
						<!-- <div class="mb-8">
							<h3 class="text-2xl font-bold text-main mb-2">Menu</h3>
							<div class="h-1 w-16 bg-main rounded-full" />
						</div> -->

						<!-- Mobile Menu Items -->
						<ul class="flex flex-col gap-2">
							<li class="group">
								<NuxtLink
									:to="localePath('/')"
									class="flex items-center justify-between font-semibold text-base text-text hover:text-main transition-all duration-300 py-4 px-4 rounded-lg hover:bg-main/10 hover:translate-x-1 border-b border-border/50"
									@click="closeMenu"
								>
									<span class="flex items-center gap-3">
										<UIcon name="i-lucide-home" class="text-xl" />
										Asosiy sahifa
									</span>
									<UIcon
										name="i-lucide-chevron-right"
										class="text-lg opacity-0 group-hover:opacity-100 transition-opacity"
									/>
								</NuxtLink>
							</li>
							<li class="group">
								<NuxtLink
									:to="localePath('/about')"
									class="flex items-center justify-between font-semibold text-base text-text hover:text-main transition-all duration-300 py-4 px-4 rounded-lg hover:bg-main/10 hover:translate-x-1 border-b border-border/50"
									@click="closeMenu"
								>
									<span class="flex items-center gap-3">
										<UIcon name="i-lucide-info" class="text-xl" />
										Biz haqimizda
									</span>
									<UIcon
										name="i-lucide-chevron-right"
										class="text-lg opacity-0 group-hover:opacity-100 transition-opacity"
									/>
								</NuxtLink>
							</li>
							<li class="group">
								<NuxtLink
									:to="localePath('/categories')"
									class="flex items-center justify-between font-semibold text-base text-text hover:text-main transition-all duration-300 py-4 px-4 rounded-lg hover:bg-main/10 hover:translate-x-1 border-b border-border/50"
									@click="closeMenu"
								>
									<span class="flex items-center gap-3">
										<UIcon name="i-lucide-package" class="text-xl" />
										Mahsulotlar
									</span>
									<UIcon
										name="i-lucide-chevron-right"
										class="text-lg opacity-0 group-hover:opacity-100 transition-opacity"
									/>
								</NuxtLink>
							</li>
							<li class="group">
								<NuxtLink
									:to="localePath('/employees')"
									class="flex items-center justify-between font-semibold text-base text-text hover:text-main transition-all duration-300 py-4 px-4 rounded-lg hover:bg-main/10 hover:translate-x-1 border-b border-border/50"
									@click="closeMenu"
								>
									<span class="flex items-center gap-3">
										<UIcon name="i-lucide-users" class="text-xl" />
										Xodimlar
									</span>
									<UIcon
										name="i-lucide-chevron-right"
										class="text-lg opacity-0 group-hover:opacity-100 transition-opacity"
									/>
								</NuxtLink>
							</li>
							<li class="group">
								<NuxtLink
									:to="localePath('/contact')"
									class="flex items-center justify-between font-semibold text-base text-text hover:text-main transition-all duration-300 py-4 px-4 rounded-lg hover:bg-main/10 hover:translate-x-1 border-b border-border/50"
									@click="closeMenu"
								>
									<span class="flex items-center gap-3">
										<UIcon name="i-lucide-phone" class="text-xl" />
										Bog'lanish
									</span>
									<UIcon
										name="i-lucide-chevron-right"
										class="text-lg opacity-0 group-hover:opacity-100 transition-opacity"
									/>
								</NuxtLink>
							</li>
						</ul>

						<!-- Mobile Katalog Button -->
						<div class="mt-8">
							<a
								target="_blank"
								href="/katalog_uz.pdf"
								class="flex items-center justify-center gap-2 border-2 rounded-lg py-3 px-5 cursor-pointer bg-main text-white font-semibold transition-all duration-300 w-full hover:shadow-lg hover:shadow-main/30 hover:scale-105 active:scale-95 text-sm"
								@click="closeMenu"
							>
								<UIcon name="line-md:downloading-loop" class="text-xl" />
								Katalog yuklash
							</a>

							<!-- Additional Info Card -->
							<div class="mt-4 p-3 bg-main/5 rounded-lg border border-main/20">
								<p class="text-xs text-text/70 text-center">
									Barcha mahsulotlar va xizmatlar bilan tanishing
								</p>
							</div>
						</div>
					</div>
				</div>
			</Transition>
		</nav>
	</div>
</template>
