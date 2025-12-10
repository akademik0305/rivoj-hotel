<script lang="ts" setup>
//===============================-< imports >-===============================
// import Service from "~/service/Service";
// import urls from "~/service/urls";
// import type { TEmployees } from "~/types/api.types";
// //> utils
// const { locale } = useI18n();
// const token = useToken();
const localePath = useLocalePath();

//===============================-< get employees >-===============================
//> variables
// const employees = ref<TEmployees>();

//> functions

// async function getEmployees() {
// 	employees.value = await Service.get(
// 		urls.getOurTeam(),
// 		locale.value,
// 		token.value
// 	);
// }

// getEmployees();

//===============================-< order create status >-===============================
//> variables
const isOpenOrder = ref(false);
const activeId = ref<number | undefined>(undefined);
//> functions
const openOrder = (id: number) => {
	activeId.value = id;
	isOpenOrder.value = true;
};

// const closeOrder = () => {
// 	activeId.value = undefined;
// 	isOpenOrder.value = false;
// };

// submit
// async function submitOrder() {
// 	closeOrder();
// }
</script>
<template>
	<main class="wrapper">
		<nav class="mt-5 hidden md:block">
			<div class="container">
				<BaseBreadcump
					:links="[
						{
							label: 'Asosiy sahifa',
							url: '/',
						},
						{
							label: 'Xodimlar',
						},
					]"
				/>
			</div>
		</nav>

		<!-- employee cards -->
		<section class="mt-2 pb-6 md:pb-8 lg:pb-10">
			<div class="container">
				<div class="flex items-center justify-between">
					<h2 class="text-xl md:text-2xl lg:text-3xl font-semibold">
						Bizning xodimlar
					</h2>
				</div>

				<div class="mt-4">
					<!-- ✅ responsive grid -->
          <div
					class="mt-6 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
				>
					<div
						v-for="item in 5"
						:key="item"
						class="rounded-md p-4"
					>
						<div class="flex items-center justify-center">
							<!-- :src="item.file_url"
							:alt="item.firstname" -->

							<img
								src="~/assets/images/webp/1.webp"
								class="w-full h-full rounded-2xl object-cover aspect-square max-w-60"
							/>
						</div>
						<div class="mt-4 text-center">
							<h4 class="text-text text-xl font-semibold">
								<!-- {{ item.firstname }} -->
								Шерхон
							</h4>
							<p class="mt-4 text-subtext text-sm">
								<!-- {{ item.position }} -->
								Сотув менежери
							</p>
						</div>
					</div>
				</div>
				</div>
			</div>

			<!--===Modals===-->
			<!-- <BaseModal :is-open="isOpenOrder" @close="closeOrder">
				<template #header>
					<h3 class="font-semibold text-lg">{{ $t("submit_order_btn") }}</h3>
					<p class="mt-2 text-text">
						{{ $t("order_modal.title") }}
						<span class="text-main font-semibold">{{
							$t("order_modal.name")
						}}</span>
						{{ $t("order_modal.and") }}
						<span class="text-main font-semibold">{{
							$t("order_modal.phone")
						}}</span
						>,
						{{ $t("order_modal.instruction") }}
					</p>
				</template>
				<OrderCreate :team-id="activeId" @success="submitOrder" />
			</BaseModal> -->
			<!--===Modals===-->
		</section>
		<!-- employee cards -->
	</main>
</template>
