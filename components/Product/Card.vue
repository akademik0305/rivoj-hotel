<script lang="ts" setup>
//===============================-< imports >-===============================
// types
import type { TProduct, TSectionProduct } from '~/types/api.types'

//> utils
import { useCartStore } from '~/store/cart.store'
import { useStore } from '~/store/useful.store'
const localePath = useLocalePath()

// store
const cartStore = useCartStore()
const store = useStore()

// props
const props = defineProps({
	product: {
		type: Object as PropType<TProduct | TSectionProduct>,
		required: true,
	},
})

//===============================-< computed >-===============================
const hasDiscount = computed(
	() => props.product.discount && props.product.discount > 0
)
const discountedPrice = computed(() => {
	if (hasDiscount.value) {
		return (
			props.product.price - (props.product.price * props.product.discount) / 100
		)
	}
	return props.product.price
})

</script>

<template>
	<article
		class="flex-1 block group relative transition-all duration-500 hover:scale-[1.02] h-full rounded-2xl"
	>
		<!-- Card Inner with Border Gradient -->
		<div
			class="relative overflow-hidden rounded-2xl border-2 border-transparent bg-gradient-to-br from-gray-100 via-white to-gray-50 group-hover:border-main/30 transition-all duration-500 h-full flex flex-col"
		>
			<!-- Image Container -->
			<NuxtLink
				:to="localePath(`/products/${props.product.id}`)"
				class="relative w-full h-40 md:h-56 overflow-hidden block"
			>
				<!-- Discount Badge -->
				<div
					v-if="hasDiscount"
					class="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full shadow-lg z-10 transform -translate-x-32 group-hover:translate-x-0 transition-transform duration-500"
				>
					<span class="text-xs font-semibold">-{{ product.discount }}%</span>
				</div>

				<!-- New Badge (if needed) -->
				<div
					v-else
					class="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full shadow-lg z-10 transform -translate-x-32 group-hover:translate-x-0 transition-transform duration-500"
				>
					<span class="text-xs font-semibold text-main">Yangi</span>
				</div>

				<!-- Wishlist Button -->
				<!-- <button
					class="absolute top-4 right-4 w-10 h-10 bg-white/95 backdrop-blur-md rounded-full shadow-lg z-10 flex items-center justify-center transform translate-x-16 group-hover:translate-x-0 transition-transform duration-500 hover:scale-110"
					@click.prevent="toggleWishlist(props.product.id)"
				>
					<UIcon
						v-if="props.product.isSaved"
						name="mdi:heart"
						class="text-xl text-red-500"
					/>
					<UIcon v-else name="mdi:heart-outline" class="text-xl text-gray-400" />
				</button> -->

				<!-- Image with Zoom Effect -->
				<div
					class="absolute inset-0 bg-gradient-to-br from-main/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[5]"
				/>
				<img
					:src="product.file_url"
					:alt="product.name"
					class="w-full h-full object-contain p-4 group-hover:scale-125 group-hover:rotate-2 transition-all duration-700 ease-out"
				/>
			</NuxtLink>

			<!-- Content Container -->
			<div class="p-6 relative bg-white flex-1 flex flex-col">
				<!-- Top Accent Line -->
				<div
					class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-main to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
				/>

				<!-- Product Name -->
				<NuxtLink
					:to="localePath(`/products/${props.product.id}`)"
					class="block"
				>
					<h3
						class="font-bold text-text text-base md:text-lg group-hover:text-main transition-all duration-300 line-clamp-2 mb-4"
					>
						{{ product.name }}
					</h3>
				</NuxtLink>

				<!-- Price Section -->
				<div class="mb-3">
					<div class="flex items-center gap-2">
						<p class="text-lg md:text-xl font-bold text-main">
							{{ store.formatCurrency(discountedPrice) }}
						</p>
						<p
							v-if="hasDiscount"
							class="text-xs md:text-sm line-through text-gray-400"
						>
							{{ store.formatCurrency(props.product.price) }}
						</p>
					</div>
				</div>

				<!-- Action Buttons -->
				<div class="mt-auto">
					<!-- If in cart -->
					<div
						v-if="cartStore.checkIsExist(props.product.id)"
						class="flex items-center gap-2"
					>
						<NuxtLink
							:to="localePath('/cart')"
							class="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-full bg-main hover:bg-main/90 transition-all duration-300 shadow-lg hover:shadow-xl"
						>
							<UIcon
								name="proicons:cart"
								class="!hidden md:!block text-lg text-white"
							/>
							<span class="text-[11px] md:text-sm font-medium text-white"
								>Savatda</span
							>
						</NuxtLink>
						<button
							class="w-10 h-10 rounded-full bg-red-50 hover:bg-red-100 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md"
							@click="cartStore.removeFromCart(props.product.id)"
						>
							<UIcon name="mynaui:trash" class="text-lg text-red-500" />
						</button>
					</div>

					<!-- If not in cart -->
					<div v-else class="relative z-10">
						<button
							class="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-main hover:bg-main/90 transition-all duration-300 shadow-lg hover:shadow-xl group/btn"
							@click="cartStore.addToCart(props.product)"
						>
							<UIcon name="proicons:cart" class="text-lg text-white" />
							<span class="text-xs md:text-sm font-medium text-white">{{
								$t('add_to_cart')
							}}</span>
							<div
								class="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover/btn:scale-110 transition-transform duration-300"
							>
								<UIcon
									name="heroicons:arrow-right-20-solid"
									class="text-xs text-white"
								/>
							</div>
						</button>
					</div>
				</div>
			</div>

			<!-- Corner Decoration -->
			<div
				class="absolute bottom-0 right-0 w-24 h-24 pointer-events-none bg-gradient-to-tl from-main/5 to-transparent rounded-tl-full transform translate-x-12 translate-y-12 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"
			/>
		</div>

		<!-- Outer Glow Effect -->
		<div
			class="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-[0_0_30px_rgba(59,130,246,0.3)]"
		/>
	</article>
</template>
