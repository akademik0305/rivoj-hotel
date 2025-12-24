<script lang="ts" setup>
// import { useAuthStore } from "~/store/auth.store";
import { useCartStore } from "~/store/cart.store";
const { t } = useI18n();
const cartStore = useCartStore();
// const authStore = useAuthStore();
// const toast = useToast();
const localePath = useLocalePath();

//===============================-< submit order >-===============================
const isOpenSubmitOrder = ref(false);

const openSubmitOrder = () => {
	isOpenSubmitOrder.value = true;
};

const closeSubmitOrder = () => {
	isOpenSubmitOrder.value = false;
};
</script>

<template>
	<main class="py-8">
		<!-- Header Section -->
		<nav class="mb-8">
			<div class="container">
				<div class="flex items-center justify-between mb-4">
					<h2 class="text-3xl md:text-4xl font-bold text-text">
						{{ $t("cart") }}
					</h2>
					<div class="flex items-center gap-2 bg-main/10 px-4 py-2 rounded-full">
						<UIcon name="i-lucide-shopping-bag" class="text-xl text-main" />
						<span class="font-semibold text-main">{{ cartStore.productsCount }}</span>
					</div>
				</div>
				<BaseBreadcump
					:links="[{ label: t('home_page'), url: '/' }, { label: $t('cart') }]"
				/>
			</div>
		</nav>

		<section class="mt-8">
			<div class="container">
				<div class="flex items-start gap-6 flex-col lg:flex-row">
					<!-- Products Section -->
					<div class="flex-2 w-full space-y-4">
						<!-- Header Card -->
						<div
							v-if="cartStore.cart.length"
							class="bg-navbar-bg shadow-lg border border-border rounded-2xl p-6"
						>
							<div class="flex items-center justify-between">
								<div class="flex items-center gap-3">
									<div class="w-10 h-10 rounded-full bg-main/10 flex items-center justify-center">
										<UIcon name="i-lucide-package" class="text-xl text-main" />
									</div>
									<h3 class="font-semibold text-xl text-text">{{ $t("products") }}</h3>
								</div>
								<button
									class="flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer hover:bg-red-500/10 text-red-500 transition-all duration-300 hover:scale-105 font-medium"
									@click="cartStore.clearCart"
								>
									<UIcon name="i-lucide-trash-2" class="text-lg" />
									<span class="hidden sm:inline">{{ $t("clear") }}</span>
								</button>
							</div>
						</div>

						<!-- Products List -->
						<div v-if="cartStore.cart.length" class="space-y-4">
							<article
								v-for="product in cartStore.cart"
								:key="product.product_id"
								class="bg-navbar-bg shadow-lg border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:border-main/30 group"
							>
								<div class="flex items-center gap-4 md:gap-6">
									<!-- Product Image -->
									<div
										class="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center rounded-xl overflow-hidden shrink-0 bg-bg border border-border group-hover:border-main/30 transition-colors"
									>
										<img
											:src="product.imageUrl"
											:alt="product.product_name"
											class="w-full h-full object-contain p-2"
										/>
									</div>

									<!-- Product Details -->
									<div class="flex-1 flex flex-col gap-4">
										<!-- Product Name -->
										<NuxtLink
											:to="localePath(`/products/${product.product_id}`)"
											class="text-base md:text-lg font-medium text-text hover:text-main transition-colors line-clamp-2"
										>
											{{ product.product_name }}
										</NuxtLink>

										<!-- Controls and Price -->
										<div class="flex items-center justify-between gap-4 flex-wrap">
											<!-- Quantity Control -->
											<div class="flex items-center gap-3 bg-bg rounded-lg p-1 border border-border">
												<button
													class="w-8 h-8 flex items-center justify-center rounded-md hover:bg-main/10 transition-colors text-text hover:text-main"
													@click="product.quantity > 1 && product.quantity--; cartStore.handleChangeCount(product)"
												>
													<UIcon name="i-lucide-minus" class="text-lg" />
												</button>
												<UFormField name="quantity" class="w-16">
													<UInput
														v-model="product.quantity"
														size="md"
														class="text-center"
														type="number"
														:max="1000"
														:min="1"
														@update:model-value="cartStore.handleChangeCount(product)"
													/>
												</UFormField>
												<button
													class="w-8 h-8 flex items-center justify-center rounded-md hover:bg-main/10 transition-colors text-text hover:text-main"
													@click="product.quantity++; cartStore.handleChangeCount(product)"
												>
													<UIcon name="i-lucide-plus" class="text-lg" />
												</button>
											</div>

											<!-- Price -->
											<div class="flex items-center gap-4">
												<div class="text-lg md:text-xl font-bold text-main">
													{{ cartStore.formatCurrency(product.quantity * product.price) }}
												</div>

												<!-- Delete Button -->
												<button
													class="w-10 h-10 flex items-center justify-center rounded-lg cursor-pointer hover:bg-red-500/10 text-text hover:text-red-500 transition-all duration-300 hover:scale-110"
													@click="cartStore.removeFromCart(product.product_id)"
												>
													<UIcon name="i-lucide-trash-2" class="text-xl" />
												</button>
											</div>
										</div>
									</div>
								</div>
							</article>
						</div>

						<!-- Empty Cart State -->
						<div
							v-else
							class="bg-navbar-bg shadow-lg border border-border rounded-2xl p-12"
						>
							<div class="flex flex-col items-center justify-center gap-6">
								<div class="w-32 h-32 rounded-full bg-main/5 flex items-center justify-center">
									<UIcon name="i-lucide-shopping-cart" class="text-6xl text-main/30" />
								</div>
								<div class="text-center space-y-2">
									<h3 class="text-2xl font-semibold text-text">{{ $t("empty_cart") }}</h3>
									<p class="text-subtext">Savatingiz hozircha bo'sh</p>
								</div>
								<NuxtLink
									:to="localePath('/categories')"
									class="flex items-center gap-2 bg-main text-white px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-main/30 transition-all duration-300 hover:scale-105 font-medium"
								>
									<UIcon name="i-lucide-shopping-bag" class="text-xl" />
									Xarid qilishni boshlash
								</NuxtLink>
							</div>
						</div>
					</div>

					<!-- Order Summary Sidebar -->
					<div
						v-if="cartStore.cart.length"
						class="lg:sticky lg:top-24 flex-1 w-full lg:w-auto space-y-4"
					>
						<!-- Summary Card -->
						<div class="bg-navbar-bg shadow-lg border border-border rounded-2xl p-6 space-y-4">
							<div class="flex items-center gap-3 pb-4 border-b border-border">
								<div class="w-10 h-10 rounded-full bg-main/10 flex items-center justify-center">
									<UIcon name="i-lucide-calculator" class="text-xl text-main" />
								</div>
								<h3 class="font-semibold text-xl text-text">Buyurtma</h3>
							</div>

							<!-- Price Breakdown -->
							<div class="space-y-3">
								<div class="flex items-center justify-between py-2">
									<p class="text-subtext flex items-center gap-2">
										<UIcon name="i-lucide-package" class="text-lg" />
										{{ cartStore.productsCount }} {{ $t("product_price") }}:
									</p>
									<p class="font-semibold text-text">{{ cartStore.allPrice }}</p>
								</div>

								<div class="flex items-center justify-between py-3 border-t border-border">
									<p class="font-bold text-text text-lg">{{ $t("all_summ") }}:</p>
									<p class="font-bold text-main text-2xl">{{ cartStore.allPrice }}</p>
								</div>
							</div>

							<!-- Order Button -->
							<button
								class="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-main to-main/80 text-white rounded-xl py-4 px-6 cursor-pointer hover:shadow-lg hover:shadow-main/30 transition-all duration-300 hover:scale-105 active:scale-95 font-semibold text-lg group"
								@click="openSubmitOrder"
							>
								<UIcon name="i-lucide-check-circle" class="text-2xl group-hover:rotate-12 transition-transform" />
								{{ $t("order") }}
							</button>
						</div>

						<!-- Additional Info Card -->
						<!-- <div class="bg-main/5 border border-main/20 rounded-xl p-4 space-y-2">
							<div class="flex items-start gap-2">
								<UIcon name="i-lucide-shield-check" class="text-xl text-main mt-0.5" />
								<div>
									<p class="text-sm font-medium text-text">Xavfsiz to'lov</p>
									<p class="text-xs text-subtext">SSL sertifikati bilan himoyalangan</p>
								</div>
							</div>
							<div class="flex items-start gap-2">
								<UIcon name="i-lucide-truck" class="text-xl text-main mt-0.5" />
								<div>
									<p class="text-sm font-medium text-text">Tez yetkazib berish</p>
									<p class="text-xs text-subtext">2-3 kun ichida yetkazamiz</p>
								</div>
							</div>
						</div> -->
					</div>
				</div>
			</div>
		</section>

		<!--=== modals ===-->
		<BaseModal :is-open="isOpenSubmitOrder" @close="closeSubmitOrder">
			<template #header>
				<div class="flex items-center justify-center gap-3">
					<div class="w-12 h-12 rounded-full bg-main/10 flex items-center justify-center">
						<UIcon name="i-lucide-shopping-cart" class="text-2xl text-main" />
					</div>
					<h5 class="font-bold text-2xl text-text">
						Buyurtmani rasmiylashtirish
					</h5>
				</div>
			</template>
			<CartOrder @success="closeSubmitOrder" />
		</BaseModal>
		<!--=== modals ===-->
	</main>
</template>