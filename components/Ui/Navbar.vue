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
</script>

<template>
	<nav
		id="navbar"
		class="fixed top-0 left-0 w-full z-[100] transition-all duration-500"
		:class="[
			isScrolled
				? 'bg-white/90 backdrop-blur-md py-3 shadow-sm border-b border-primary/10'
				: 'bg-transparent py-6',
		]"
	>
		<div class="container">
			<div class="flex items-center justify-between">
				<NuxtLink :to="localePath('/')" class="z-50 group">
					<div class="flex flex-col items-center">
						<span
							class="text-2xl md:text-3xl font-serif tracking-[0.2em] uppercase transition-colors duration-500"
							:class="isScrolled ? 'text-secondary' : 'text-white'"
						>
							Grand Oasis
						</span>
						<span
							class="text-[8px] uppercase tracking-[0.4em] -mt-1 transition-colors duration-500"
							:class="isScrolled ? 'text-primary' : 'text-primary-light'"
						>
							Hotel & Resort
						</span>
					</div>
				</NuxtLink>

				<ul class="hidden lg:flex items-center gap-10">
					<li
						v-for="item in [
							{ name: 'Asosiy', path: '/' },
							{ name: 'Xonalar', path: '/rooms' },
							{ name: 'Xizmatlar', path: '/services' },
							{ name: 'Biz haqimizda', path: '/about' },
							{ name: 'Aloqa', path: '/contact' },
						]"
						:key="item.path"
					>
						<NuxtLink
							:to="localePath(item.path)"
							class="nav-link font-light text-sm uppercase tracking-widest transition-all duration-500"
							:class="
								isScrolled
									? 'text-secondary hover:text-primary'
									: 'text-white/80 hover:text-white'
							"
						>
							{{ item.name }}
						</NuxtLink>
					</li>
				</ul>

				<div class="flex items-center gap-6">
					<button
						class="hidden md:block text-xs uppercase tracking-tighter border-b border-current transition-colors duration-500"
						:class="isScrolled ? 'text-secondary' : 'text-white'"
					>
						UZB
					</button>

					<NuxtLink
						:to="localePath('/booking')"
						class="hidden sm:block btn-nav transition-all duration-500"
						:class="
							isScrolled ? 'bg-secondary text-white' : 'bg-primary text-white'
						"
					>
						Band qilish
					</NuxtLink>

					<button
						class="lg:hidden flex flex-col gap-1.5 p-2 z-50 group"
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

		<Transition
			enter-active-class="transition-all duration-500 ease-in-out"
			leave-active-class="transition-all duration-500 ease-in-out"
			enter-from-class="translate-y-[-100%]"
			leave-to-class="translate-y-[-100%]"
		>
			<div
				v-if="isMenuOpen"
				class="fixed inset-0 bg-background z-40 flex flex-col items-center justify-center lg:hidden"
			>
				<ul class="hidden lg:flex items-center gap-10">
					<li
						v-for="item in [
							{ name: 'Asosiy', href: '#' },
							{ name: 'Xonalar', href: '#rooms' },
							{ name: 'Xizmatlar', href: '#services' },
							{ name: 'Biz haqimizda', href: '#about' },
							{ name: 'Aloqa', href: '#contact' },
						]"
						:key="item.href"
					>
						<a
							:href="item.href"
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

				<div class="mt-16 flex flex-col items-center gap-4 text-gray-400">
					<p class="text-sm tracking-widest">+998 71 200 00 00</p>
					<div class="flex gap-4">
						<UIcon name="i-pajamas:instagram" class="text-xl" />
						<UIcon name="i-pajamas:facebook" class="text-xl" />
					</div>
				</div>
			</div>
		</Transition>
	</nav>
</template>

<style scoped>
/* Navbar Link Effektlari */
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

/* Nav Tugmasi */
/* .btn-nav {
  @apply px-8 py-2.5 rounded-sm text-xs uppercase tracking-[0.2em] font-medium hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 transition-all;
} */

/* Fon ranglari o'zgaruvchilari (global CSS da ham bo'lishi kerak) */
.hotel-theme {
	--primary: #c5a059;
	--secondary: #1a1a1a;
	--background: #fdfcf9;
}
</style>
