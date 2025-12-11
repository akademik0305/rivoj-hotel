<template>
	<div
		class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 p-6"
	>
		<div class="max-w-7xl mx-auto">
			<!-- Header -->
			<div class="mb-8 flex items-center justify-between">
				<div class="space-y-3">
					<div class="h-8 bg-white/60 rounded-lg w-64 backdrop-blur-sm" />
					<div class="h-4 bg-white/40 rounded w-96 backdrop-blur-sm" />
				</div>
				<div class="flex gap-2">
					<div class="w-10 h-10 bg-white/60 rounded-lg backdrop-blur-sm"></div>
					<div class="w-10 h-10 bg-white/60 rounded-lg backdrop-blur-sm"></div>
				</div>
			</div>

			<!-- Product Grid -->
			<div
				class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
			>
				<div
					v-for="index in 8"
					:key="index"
					class="bg-white/70 backdrop-blur-md rounded-2xl overflow-hidden border border-white/50 shadow-sm relative product-card"
					:style="{
						animationDelay: `${(index - 1) * 80}ms`,
					}"
				>
					<!-- Animated gradient overlay -->
					<div
						class="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10 animate-pulse"
					></div>

					<!-- Product Image Area -->
					<div
						class="relative h-64 bg-gradient-to-br from-gray-100/80 to-gray-200/80 flex items-center justify-center overflow-hidden"
					>
						<!-- Animated circles -->
						<div class="absolute inset-0 flex items-center justify-center">
							<div
								class="absolute w-20 h-20 border-4 border-blue-300/30 rounded-full ping-animation"
								style="animation-delay: 0s"
							></div>
							<div
								class="absolute w-20 h-20 border-4 border-purple-300/30 rounded-full ping-animation"
								style="animation-delay: 0.5s"
							></div>
							<div
								class="absolute w-20 h-20 border-4 border-pink-300/30 rounded-full ping-animation"
								style="animation-delay: 1s"
							></div>
						</div>

						<!-- Center icon -->
						<div
							class="relative z-10 w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl animate-pulse"
						></div>
					</div>

					<!-- Product Details -->
					<div class="relative p-5 space-y-4">
						<!-- Title -->
						<div class="space-y-2">
							<div
								class="h-5 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg w-5/6 animate-pulse"
							></div>
							<div
								class="h-3 bg-gradient-to-r from-gray-100 to-gray-200 rounded w-full animate-pulse"
							></div>
							<div
								class="h-3 bg-gradient-to-r from-gray-100 to-gray-200 rounded w-4/5 animate-pulse"
							></div>
						</div>

						<!-- Price and Rating -->
						<div class="flex justify-between items-center pt-3">
							<div class="flex items-center gap-2">
								<div
									class="w-2 h-2 bg-green-400 rounded-full animate-pulse"
								></div>
								<div
									class="h-7 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full w-20 animate-pulse"
								></div>
							</div>
							<div
								class="h-5 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full w-16 animate-pulse"
							></div>
						</div>

						<!-- Button -->
						<div class="pt-2">
							<div
								class="h-11 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 rounded-xl w-full animate-pulse"
							></div>
						</div>
					</div>
				</div>
			</div>

			<!-- Floating loader -->
			<div
				class="fixed top-8 right-8 bg-white/90 backdrop-blur-lg rounded-full px-6 py-3 shadow-xl border border-white/50"
			>
				<div class="flex items-center gap-3">
					<div class="flex gap-1">
						<div
							class="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
							style="animation-delay: 0ms"
						></div>
						<div
							class="w-2 h-2 bg-purple-500 rounded-full animate-bounce"
							style="animation-delay: 150ms"
						></div>
						<div
							class="w-2 h-2 bg-pink-500 rounded-full animate-bounce"
							style="animation-delay: 300ms"
						></div>
					</div>
					<span class="text-sm font-medium text-gray-700">Loading</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
// No script needed for this component
</script>

<style scoped>
@keyframes fadeIn {
	from {
		opacity: 0;
		transform: translateY(20px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

@keyframes ping {
	75%,
	100% {
		transform: scale(2);
		opacity: 0;
	}
}

.product-card {
	animation: fadeIn 0.6s ease-out forwards;
	opacity: 0;
}

.ping-animation {
	animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
}
</style>
