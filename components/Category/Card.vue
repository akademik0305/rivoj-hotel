<script lang="ts" setup>
const localePath = useLocalePath()

// props
const props = defineProps({
	category: {
		type: Object,
		required: true,
	},
})
</script>

<template>
	<NuxtLink
		:to="localePath(`/categories/${props.category.id}`)"
		class="flex-1 rounded-3xl overflow-hidden group relative transition-all duration-500 hover:scale-[1.02] flex flex-col"
	>
		<!-- Card Inner with Border Gradient -->
		<div
			class="flex-1 relative overflow-hidden rounded-3xl border-2 border-transparent bg-gradient-to-br from-gray-100 via-white to-gray-50 group-hover:border-main/30 transition-all duration-500 flex flex-col"
		>
			<!-- Image Container -->
			<div class="relative w-full h-40 md:h-52 overflow-hidden">
				<!-- Floating Badge -->
				<div
					class="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full shadow-lg z-10 transform -translate-x-32 group-hover:translate-x-0 transition-transform duration-500"
				>
					<span class="text-xs font-semibold text-main">Kategoriya</span>
				</div>

				<!-- Image with Zoom Effect -->
				<div
					class="absolute inset-0 bg-gradient-to-br from-main/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[5]"
				/>

				<img
					:src="category.file_url"
					:alt="category.name"
					class="w-full h-full object-contain group-hover:scale-101 group-hover:rotate-2 transition-all duration-700 ease-out"
				/>
			</div>

			<!-- Content Container -->
			<div class="flex-1 p-6 relative bg-white flex flex-col justify-between">
				<!-- Top Accent Line -->
				<div
					class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-main to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
				/>

				<!-- Category Name -->
				<h3
					class="font-bold text-text text-lg md:text-xl text-center group-hover:text-main transition-all duration-300 line-clamp-2"
				>
					{{ category.name }}
				</h3>

				<!-- Action Button -->
				<div
					class="hidden lg:flex lg:mt-3 items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
				>
					<span class="text-sm font-medium text-main">Batafsil</span>
					<div
						class="w-8 h-8 rounded-full bg-main/10 flex items-center justify-center group-hover:bg-main group-hover:scale-110 transition-all duration-300"
					>
						<svg
							class="w-4 h-4 text-main group-hover:text-white transition-colors duration-300"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2.5"
								d="M13 7l5 5m0 0l-5 5m5-5H6"
							/>
						</svg>
					</div>
				</div>
			</div>

			<!-- Corner Decoration -->
			<div
				class="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-main/5 to-transparent rounded-tl-full transform translate-x-12 translate-y-12 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"
			/>
		</div>

		<!-- Outer Glow Effect -->
		<div
			class="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-[0_0_30px_rgba(var(--main-rgb),0.3)]"
		/>
	</NuxtLink>
</template>

<style scoped>
:root {
	--main-rgb: 59, 130, 246; /* Adjust to your main color */
}
</style>
