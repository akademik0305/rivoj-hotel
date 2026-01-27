<script setup>
// const { locale, t } = useI18n()
const localePath = useLocalePath()

// Statik ma'lumotlar (API o'rniga landing page uchun)
const contact = {
	email: "info@grandoasis.uz",
	phone: "+998 73 353 07 40",
	phone_2: "+998 88 733 98 98",
	address: "Vodil shaharchasi , Yaxshi Niyat ko'chasi, 1A uy",
	description:
		"Rivoj-98 Hotel — shinamlik va hashamat uyg'unligi. Biz bilan unutilmas lahzalarni his eting.",
}

const menuItems = [
	{ name: "Asosiy", path: "" },
	{ name: "Xonalar", path: "rooms" },
	{ name: "Xizmatlar", path: "advantages" },
	{ name: "Biz haqimizda", path: "about" },
	{ name: "Aloqa", path: "contact" },
]
</script>

<template>
	<footer
		class="bg-secondary text-white/80 pt-20 pb-10 overflow-hidden relative"
	>
		<div class="absolute -right-20 -top-20 text-white/5 pointer-events-none">
			<Icon name="material-symbols:star-outline" class="text-[300px]" />
		</div>

		<div class="container relative z-10">
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
				<div class="lg:col-span-2">
					<NuxtLink :to="localePath('/')" class="inline-block mb-8 group">
						<img
							src="~/assets/images/logo/logo.png"
							alt="Rivoj-98 Hotel"
							class="max-w-32 h-auto"
						/>
					</NuxtLink>
					<p class="max-w-md text-lg font-light leading-relaxed mb-8">
						{{ contact.description }}
					</p>
					<div class="flex gap-5">
						<a
							v-for="icon in ['instagram', 'facebook', 'telegram']"
							:key="icon"
							href="#"
							class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-500"
						>
							<Icon :name="`lineicons-${icon}`" class="text-lg" />
						</a>
					</div>
				</div>

				<div>
					<h4 class="text-white font-serif text-xl mb-8">Menyu</h4>
					<ul class="space-y-4 font-light text-sm uppercase tracking-widest">
						<li v-for="menu in menuItems" :key="menu.name">
							<a
								:href="`#${menu.path}`"
								class="hover:text-primary transition-colors"
								>{{ menu.name }}</a
							>
						</li>
					</ul>
				</div>

				<div>
					<h4 class="text-white font-serif text-xl mb-8">Bog'lanish</h4>
					<div class="space-y-5 font-light">
						<p class="flex items-start gap-4">
							<Icon
								name="material-symbols:location-on-outline"
								class="text-primary text-xl min-w-5"
							/>
							<span>{{ contact.address }}</span>
						</p>
						<p class="flex items-center gap-4">
							<UIcon
								name="material-symbols:call-outline"
								class="text-primary text-xl min-w-5"
							/>
							<a :href="`tel:${contact.phone}`" class="hover:text-primary">{{
								contact.phone
							}}</a>
						</p>
						<p class="flex items-center gap-4">
							<Icon
								name="material-symbols:call-outline"
								class="text-primary text-xl min-w-5"
							/>
							<a :href="`tel:${contact.phone}`" class="hover:text-primary">{{
								contact.phone_2
							}}</a>
						</p>
						<p class="flex items-center gap-4">
							<Icon
								name="material-symbols:mail-outline"
								class="text-primary text-xl min-w-5"
							/>
							<a :href="`mailto:${contact.email}`" class="hover:text-primary">{{
								contact.email
							}}</a>
						</p>
					</div>
				</div>
			</div>

			<div
				class="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6"
			>
				<p class="text-xs tracking-widest uppercase">
					© {{ new Date().getFullYear() }} Rivoj-98 Hotel. Barcha huquqlar
					himoyalangan.
				</p>

				<div class="flex items-center gap-2 text-xs uppercase tracking-widest">
					<span>Made with ❤️ by:</span>
					<a
						href="https://t.me/webcode_team"
						target="_blank"
						class="text-primary hover:underline font-medium"
					>
						WebCode Team
					</a>
				</div>
			</div>
		</div>
	</footer>
</template>

<style scoped>
footer {
	/* Agar globalda bo'lmasa */
	--primary: #c5a059;
	--secondary: #1a1a1a;
}

.text-primary {
	color: var(--primary);
}

.bg-primary {
	background-color: var(--primary);
}
</style>
