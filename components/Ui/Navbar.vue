<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useAuthStore } from '~/store/auth.store'
import type { TUser } from '../../types/auth.type'
import urls from '~/service/urls'
import Service from '~/service/Service'
import { useCartStore } from '~/store/cart.store'
const switchLocalePath = useSwitchLocalePath()

//===============================-< imports >-===============================
// import { useRouter } from 'vue-router'
// const router = useRouter()

//utils
const { locale, t } = useI18n()
const router = useRouter()
const token = useToken()
const toast = useToast()
const localePath = useLocalePath()
// store
const authStore = useAuthStore()
const cartStore = useCartStore()

// get data
// const companyData = useCompanyData();
// async function getdata() {
//   const res = await Service.get(urls.allSettingsGet, locale.value, token.value);
//   companyData.value = res?.data[0];
// }

// getdata();
//===============================-< languages >-===============================
//> variables
type TLocale = 'uz' | 'ru' | 'en'
// const locales = ["Uz", "Ru", "En"];

const currentLang = ref<TLocale>(locale.value)

//> functions
watch(currentLang, () => {
	// setLocale(currentLang.value.toLowerCase() as TLocale)
	router.push(switchLocalePath(currentLang.value.toLowerCase() as TLocale))
})

//===============================-< fixed navbar and category >-===============================
//> variables
const startFixed = 80
const isFixedNav = ref(false)

//> functions
function handleScrool() {
	const navbarHeight =
		document.querySelector('#navbar')?.scrollHeight || startFixed
	if (window.scrollY > navbarHeight) {
		isFixedNav.value = true
		document.body.style.paddingTop = '80px'
	} else {
		isFixedNav.value = false
		document.body.style.paddingTop = '0px'
	}
}

//===============================-< login or register >-===============================
//> variables
const isOpenLogin = ref(false)
const openLogin = () => {
	if (authStore?.user) {
		router.push(localePath('/profile'))
	} else {
		isOpenLogin.value = true
	}
}

const closeLogin = () => {
	isOpenLogin.value = false
}

//> functions
function submitLogin(user_data: TUser) {
	token.value = user_data.auth_key
	authStore.user = { ...user_data, auth_key: '' }
	authStore.isLogged = true
	window.location.reload()
	closeLogin()
}

//===============================-< get contact >-===============================
//> variables
const contact = ref()
//> functions
async function getContact() {
	const res = await Service.get(urls.getContactInfo(), locale.value, null)
	contact.value = res.data
}

getContact()

//===============================-< go to wishlist page >-===============================
//> variables
//> functions
function goToWishlist() {
	if (authStore.isLogged) {
		router.push(localePath('/wishlist'))
	} else {
		toast.add({
			title: t('need_login_for_see_wishlist'),
			color: 'error',
		})
	}
}

// toggle menu
// mobile menu
const isMenuOpen = ref(false)
const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value)
const closeMenu = () => (isMenuOpen.value = false)

//===============================-< on page load >-===============================
//> variables
//> functions
onMounted(() => {
	currentLang.value = locale.value
	window.addEventListener('scroll', handleScrool)
	// mapStore.getUserPosition()
})
onUnmounted(() => {
	window.removeEventListener('scroll', handleScrool)
})
</script>

<template>
	<div>
		<nav
			id="navbar"
			class="-top-10 left-0 bg-navbar-bg w-full z-50 border-b border-b-border transition-all"
			:class="[isFixedNav ? 'fixed top-0 shadow-md ' : 'static']"
		>
			<div class="container">
				<div
					class="py-4 flex items-center justify-between flex-col gap-6 md:flex-row"
				>
					<!-- logo -->
					<div class="flex items-center gap-6 justify-between md:justify-start">
						<NuxtLink :to="localePath('/')" class="block w-40 h-auto">
							<img
								:src="contact?.logo"
								alt="logo"
								class="w-full h-full object-contain max-h-20 rounded-md overflow-hidden"
							/>
						</NuxtLink>
					</div>
					<!-- menu -->
					<ul class="w-full flex items-center gap-4 justify-start">
						<li class="relative group">
							<NuxtLink
								:to="localePath('/')"
								class="font-medium text-text group-hover:text-main transition-colors duration-300"
								>Asosiy sahifa</NuxtLink
							>
							<span
								class="absolute bottom-0 left-0 w-full bg-main h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
							/>
						</li>
						<li class="relative group">
							<NuxtLink
								:to="localePath('/about')"
								class="font-medium text-text group-hover:text-main transition-colors duration-300"
								>Biz haqimizda</NuxtLink
							>
							<span
								class="absolute bottom-0 left-0 w-full bg-main h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
							/>
						</li>
						<li class="relative group">
							<NuxtLink
								:to="localePath('/categories')"
								class="font-medium text-text group-hover:text-main transition-colors duration-300"
								>Mahsulotlar</NuxtLink
							>
							<span
								class="absolute bottom-0 left-0 w-full bg-main h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
							/>
						</li>
						<li class="relative group">
							<NuxtLink
								:to="localePath('/employees')"
								class="font-medium text-text group-hover:text-main transition-colors duration-300"
								>Xodimlar</NuxtLink
							>
							<span
								class="absolute bottom-0 left-0 w-full bg-main h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
							/>
						</li>
						<li class="relative group">
							<NuxtLink
								:to="localePath('/contact')"
								class="font-medium text-text group-hover:text-main transition-colors duration-300"
								>Bog'lanish</NuxtLink
							>
							<span
								class="absolute bottom-0 left-0 w-full bg-main h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
							/>
						</li>
						<!-- <li class="relative">
							<button
								class="relative h-auto w-auto py-1.5 px-6 overflow-hidden border border-main text-main shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-main before:duration-300 before:ease-out hover:text-white hover:shadow-main hover:before:h-full hover:before:w-full hover:before:opacity-80 rounded-md"
							>
								<span class="relative z-10">Suxbatga yozilish</span>
							</button>
						</li> -->
					</ul>
					<!-- navbar right -->
					<div
						class="w-auto flex justify-between md:justify-end items-center gap-3"
					>
						<!-- <NuxtLink
							:to="localePath('/search')"
							class="flex items-center justify-center gap-2 w-full py-1.5 px-2 cursor-pointer hover:border-main transition-colors relative group"
						>
							<UIcon
								name="i-lucide-search"
								class="text-2xl w-6 text-text group-hover:text-main transition-colors"
							/>
						</NuxtLink> -->
						<!-- <button
							class="flex items-center justify-center gap-2 w-full py-1.5 px-2 cursor-pointer hover:border-main transition-colors relative group"
							@click="goToWishlist"
						>
							<UIcon
								name="mdi:heart-outline"
								class="text-2xl w-6 text-text group-hover:text-main transition-colors"
							/>
							<span
								v-if="wishlistCount"
								class="flex items-center justify-center bg-main rounded-full p-0.5 absolute top-0 right-0 text-bg text-xs w-5 h-5"
								>{{ wishlistCount || 0 }}</span
							>
						</button> -->
						<a
							target="_blank"
							href="/katalog_uz.pdf"
							class="flex items-center justify-center gap-2 border rounded-xl py-1.5 pl-8 pr-7 cursor-pointer group hover:bg-bg border-main text-main transition-colors"
						>
							Katalog
							<UIcon name="line-md:downloading-loop" class="text-2xl text-main" />
						</a>
						<NuxtLink
							:to="localePath('/cart')"
							class="relative flex items-center justify-center gap-2 w-auto py-1.5 px-2 cursor-pointer hover:border-main transition-colors group"
						>
							<UIcon
								name="proicons:cart"
								class="text-2xl w-6 text-text group-hover:text-main transition-colors"
							/>
							<span
								v-if="cartStore.productsCount"
								class="flex items-center justify-center bg-main rounded-full p-0.5 absolute top-0 right-0 text-bg text-xs w-5 h-5"
								>{{ cartStore.productsCount || 0 }}</span
							>
						</NuxtLink>
						<!-- mobile hamburger -->
						<button
							class="lg:hidden flex flex-col gap-1.5"
							aria-label="Toggle Menu"
							@click="toggleMenu"
						>
							<span
								class="w-6 h-0.5 bg-text transition-all"
								:class="isMenuOpen ? 'rotate-45 translate-y-2' : ''"
							/>
							<span
								class="w-6 h-0.5 bg-text transition-all"
								:class="isMenuOpen ? 'opacity-0' : ''"
							/>
							<span
								class="w-6 h-0.5 bg-text transition-all"
								:class="isMenuOpen ? '-rotate-45 -translate-y-2' : ''"
							/>
						</button>
					</div>
				</div>
			</div>
		</nav>

		<!-- mobile side menu -->
		<transition name="slide-right">
			<div
				v-if="isMenuOpen"
				class="fixed top-0 right-0 w-72 h-full bg-white shadow-lg z-50 flex flex-col gap-6 p-6"
			>
				<span
					class="cancel cursor-pointer absolute top-6 right-6"
					@click="closeMenu"
				>
					<UIcon name="tabler:x" class="text-xl" />
				</span>
				<NuxtLink :to="localePath('/')" @click="closeMenu">{{
					$t('home_page')
				}}</NuxtLink>
				<NuxtLink :to="localePath('/about')" @click="closeMenu">{{
					$t('about_clinic')
				}}</NuxtLink>
				<NuxtLink :to="localePath('/services')" @click="closeMenu">{{
					$t('services')
				}}</NuxtLink>
				<NuxtLink :to="localePath('/employees')" @click="closeMenu">{{
					$t('employees')
				}}</NuxtLink>
				<NuxtLink :to="localePath('/news')" @click="closeMenu">{{
					$t('news')
				}}</NuxtLink>
				<NuxtLink :to="localePath('/contact')" @click="closeMenu">{{
					$t('contact')
				}}</NuxtLink>
				<BaseButton :text="$t('submit_order_btn')" @click="openOrder" />
				<!-- <USelect
					v-model="currentLang"
					leading-icon="material-symbols:language"
					:items="locales"
					size="md"
					class="border border-border rounded-md py-2 max-w-[100px] hover:border-main transition-all duration-300"
				>
					<template #default="{ modelValue }">
						<span class="capitalize text-text">{{ modelValue }}</span>
					</template>
				</USelect> -->
			</div>
		</transition>

		<!--=== modals ===-->
		<!-- send phone number -->
		<BaseModal :is-open="isOpenLogin" @close="closeLogin">
			<template #header>
				<div class="">
					<h5 class="font-semibold text-xl text-center">
						{{ $t('login_or_register') }}
					</h5>
				</div>
			</template>
			<AuthLogin @success="submitLogin" />
		</BaseModal>
		<!--=== modals ===-->
	</div>
</template>
