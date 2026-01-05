<script lang="ts" setup>
//===============================-< imports >-===============================
import Service from "~/service/Service";
import urls from "~/service/urls";
import type { TSectionProducts } from "~/types/api.types";
const { locale } = useI18n();
const route = useRoute();
const token = useToken();
//===============================-< get section >-===============================
//> variables
const section = ref<TSectionProducts>();
// const current_page = ref(1);
//> functions
async function getSectionProducts() {
	section.value = await Service.get(
		urls.getSectionProducts(Number(route.params.id)),
		locale.value,
		token.value
	);
}

getSectionProducts();

//===============================-< change page >-===============================
//> variables
//> functions
// function changePage(page: number) {
// 	current_page.value = page;
// 	getSectionProducts();
// }
useSeoMeta({
	title: 'Rivoj-98',
	ogImage: '/icon.png',
})
</script>
<template>
	<main class="py-6">
		<nav v-if="section">
			<div class="container">
				<h2 class="text-2xl font-semibold">{{ section.data?.section_name }}</h2>
				<BaseBreadcump
					:links="[
						{ label: $t('home_page'), url: '/' },
						{ label: section.data?.section_name },
					]"
				/>
			</div>
		</nav>
		<section class="mt-8">
			<div class="container">
				<div v-if="section?.data.products.length">
					<div
						class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-5"
					>
						<ProductCard
							v-for="product in section.data.products"
							:key="product.id"
							:product="product"
							@success-wishlist="getSectionProducts"
						/>
					</div>
					<!-- <div class="mt-5">
						<BasePagination
							v-if="section?.dataProvider?._meta.pageCount > 1"
							:meta="section?.dataProvider?._meta"
							@change-page="changePage"
						/>
					</div> -->
				</div>
				<div
					v-else
					class="w-full h-80 flex flex-col items-center justify-center gap-2"
				>
					<div class="w-40 h-auto flex justify-center">
						<Icon
							name="icon-park-solid:database-network"
							class="mt-2 text-7xl text-slate-400"
						/>
					</div>
					<p class="font-meduim text-base text-gray-4">
						{{ $t("empty_data_product") }}
					</p>
				</div>
			</div>
		</section>
	</main>
</template>
