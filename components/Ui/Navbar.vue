<script setup lang="ts">
const localePath = useLocalePath()

//===============================-< handle scroll >-===============================
const isScrolled = ref(false)

function handleScroll() {
	isScrolled.value = window.scrollY > 50
}

onMounted(() => {
	window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll)
})

//===============================-< mobile menu >-===============================
const isMenuOpen = ref(false)
const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value)

// Close menu on route change
watch(isMenuOpen, newVal => {
	if (newVal) {
		document.body.style.overflow = 'hidden'
	} else {
		document.body.style.overflow = ''
	}
})

onUnmounted(() => {
	document.body.style.overflow = ''
})

const menuItems = [
	{ name: 'Asosiy', path: '' },
	{ name: 'Xonalar', path: 'rooms' },
	{ name: 'Xizmatlar', path: 'advantages' },
	{ name: 'Biz haqimizda', path: 'about' },
	{ name: 'Aloqa', path: 'contact' },
]

const closeMenu = () => {
	isMenuOpen.value = false
}
</script>

<template>
	<nav
		id="navbar"
		class="fixed top-0 left-0 w-full z-[100] transition-all duration-500"
		:class="[
			isScrolled
				? 'bg-white/90 backdrop-blur-md py-3 shadow-sm border-b border-primary/10'
				: 'bg-transparent py-4 md:py-6',
		]"
	>
		<div class="container px-4 md:px-6">
			<div class="flex items-center justify-between">
				<!-- Logo -->
				<NuxtLink :to="localePath('/')" class="z-50 group" @click="closeMenu">
					<!-- <div class="flex flex-col items-center">
						<span
							class="text-xl sm:text-2xl md:text-3xl font-serif tracking-[0.15em] md:tracking-[0.2em] uppercase transition-colors duration-500"
							:class="isScrolled ? 'text-secondary' : 'text-white'"
						>
							Rivoj-98 Hotel
						</span>
						<span
							class="text-[7px] sm:text-[8px] uppercase tracking-[0.3em] md:tracking-[0.4em] -mt-1 transition-colors duration-500"
							:class="isScrolled ? 'text-primary' : 'text-primary-light'"
						>
							Hotel & Resort
						</span>
					</div> -->
					<img src="~/assets/images/logo/logo.png" alt="Rivoj-98 Hotel" class="max-w-32 h-auto" />
				</NuxtLink>

				<!-- Desktop Menu -->
				<ul class="hidden lg:flex items-center gap-8 xl:gap-10">
					<li v-for="item in menuItems" :key="item.path">
						<a
							:href="`#${item.path}`"
							class="nav-link font-light text-sm uppercase tracking-widest transition-all duration-500"
							:class="
								isScrolled
									? 'text-secondary hover:text-primary'
									: 'text-white/80 hover:text-white'
							"
						>
							{{ item.name }}
						</a>
					</li>
				</ul>

				<!-- Right Side Actions -->
				<div class="flex items-center gap-4 md:gap-6">
					<!-- Language Selector -->
					<button
						class="hidden sm:block text-xs uppercase tracking-tighter border-b border-current transition-colors duration-500 hover:opacity-70"
						:class="isScrolled ? 'text-secondary' : 'text-white'"
					>
						UZB
					</button>

					<!-- Mobile Menu Toggle -->
					<button
						class="lg:hidden flex flex-col gap-1.5 p-2 z-50 group"
						aria-label="Toggle menu"
						@click="toggleMenu"
					>
						<span
							class="w-6 h-0.5 transition-all duration-300"
							:class="[
								isScrolled || isMenuOpen ? 'bg-secondary' : 'bg-white',
								isMenuOpen ? 'rotate-45 translate-y-2' : '',
							]"
						/>
						<span
							class="w-6 h-0.5 transition-all duration-300"
							:class="[
								isScrolled || isMenuOpen ? 'bg-secondary' : 'bg-white',
								isMenuOpen ? 'opacity-0' : '',
							]"
						/>
						<span
							class="w-4 h-0.5 self-end transition-all duration-300"
							:class="[
								isScrolled || isMenuOpen ? 'bg-secondary' : 'bg-white',
								isMenuOpen ? '-rotate-45 -translate-y-2 w-6' : '',
							]"
						/>
					</button>
				</div>
			</div>
		</div>

		<!-- Mobile Menu Overlay -->
		<Transition
			enter-active-class="transition-all duration-500 ease-in-out"
			leave-active-class="transition-all duration-500 ease-in-out"
			enter-from-class="translate-y-[-100%]"
			leave-to-class="translate-y-[-100%]"
		>
			<div
				v-if="isMenuOpen"
				class="fixed inset-0 bg-background z-40 flex flex-col items-center justify-center lg:hidden overflow-y-auto"
			>
				<!-- Mobile Navigation Links -->
				<ul class="flex flex-col items-center gap-6 sm:gap-8">
					<li
						v-for="(item, index) in menuItems"
						:key="item.path"
						class="mobile-menu-item"
						:style="{ animationDelay: `${index * 0.1}s` }"
					>
						<a
							:href="`#${item.path}`"
							class="text-secondary hover:text-primary font-light text-2xl sm:text-3xl uppercase tracking-wider transition-all duration-300 hover:translate-x-2"
							@click="closeMenu"
						>
							{{ item.name }}
						</a>
					</li>
				</ul>

				<!-- Mobile Footer Info -->
				<div
					class="mt-12 sm:mt-16 flex flex-col items-center gap-4 text-gray-400"
				>
					<p class="text-sm tracking-widest">+998 71 200 00 00</p>
					<div class="flex gap-6">
						<a
							href="#"
							class="hover:text-primary transition-colors duration-300"
							aria-label="Instagram"
						>
							<UIcon name="i-pajamas:instagram" class="text-xl sm:text-2xl" />
						</a>
						<a
							href="#"
							class="hover:text-primary transition-colors duration-300"
							aria-label="Facebook"
						>
							<UIcon name="i-pajamas:facebook" class="text-xl sm:text-2xl" />
						</a>
					</div>

					<!-- Language in mobile menu -->
					<button
						class="sm:hidden mt-4 text-xs uppercase tracking-wider text-secondary hover:text-primary transition-colors duration-300 border-b border-current pb-1"
					>
						UZB
					</button>
				</div>
			</div>
		</Transition>
	</nav>
</template>

<style scoped>
/* Container responsiveness */
.container {
	max-width: 1400px;
	margin: 0 auto;
	width: 100%;
}

/* Desktop Navigation Link Effects */
.nav-link {
	position: relative;
}

.nav-link::after {
	content: '';
	position: absolute;
	bottom: -4px;
	left: 0;
	width: 0;
	height: 1px;
	background-color: currentColor;
	transition: width 0.4s ease;
}

.nav-link:hover::after {
	width: 100%;
}

/* Mobile Menu Animation */
@keyframes slideInFromTop {
	from {
		opacity: 0;
		transform: translateY(-20px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

.mobile-menu-item {
	animation: slideInFromTop 0.5s ease forwards;
	opacity: 0;
}

/* Responsive Typography */
@media (max-width: 640px) {
	.nav-link {
		font-size: 0.75rem;
	}
}

/* Tablet adjustments */
@media (min-width: 768px) and (max-width: 1023px) {
	.nav-link {
		font-size: 0.8rem;
	}
}

/* Theme Colors */
.hotel-theme {
	--primary: #c5a059;
	--secondary: #1a1a1a;
	--background: #fdfcf9;
}
</style>
