<script lang="ts" setup>
// ===============================-< imports >-===============================
import Service from '~/service/Service'
import urls from '~/service/urls'
import type { TEmployees } from '~/types/api.types'
//> utils
const { locale } = useI18n()
const token = useToken()
// const localePath = useLocalePath();

// ===============================-< get employees >-===============================
// > variables
const employees = ref<TEmployees>()

// > functions

async function getEmployees() {
	employees.value = await Service.get(
		urls.getEmployees(),
		locale.value,
		token.value
	)
}

getEmployees()

// ===============================-< order create status >-===============================
// > variables
// const isOpenOrder = ref(false);
// const activeId = ref<number | undefined>(undefined);
//> functions
// const openOrder = (id: number) => {
// 	activeId.value = id;
// 	isOpenOrder.value = true;
// };

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
						Bizning jamoa
					</h2>
				</div>

				<div class="mt-4">
					<!-- ✅ responsive grid -->
					<div
						class="mt-6 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
					>
						<EmployeeCard
							v-for="item in employees?.data"
							:key="item.id"
							:employee="item"
						/>
					</div>
				</div>
			</div>
		</section>
		<!-- employee cards -->
	</main>
</template>
