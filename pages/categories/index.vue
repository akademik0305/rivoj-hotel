<script setup>
//===============================-< imports >-===============================
import Service from '~/service/Service'
import urls from '~/service/urls'
const { locale } = useI18n()
//===============================-< get categories >-===============================
//> variables
const categories = ref()
//> functions
async function getCategories() {
	console.log(urls.getCategories())

	const res = await Service.get(urls.getCategories(), locale.value, null)
	categories.value = res.data
}

getCategories()
</script>
<template>
	<main class="py-6">
		<nav>
			<div class="container">
				<h2 class="text-2xl font-semibold">{{ $t('categories') }}</h2>
				<BaseBreadcump
					:links="[
						{ label: $t('home_page'), url: '/' },
						{ label: $t('categories') },
					]"
				/>
			</div>
		</nav>

		<section class="mt-8">
			<div class="container">
				<!-- <ProductLoadingScreen v-if="!categories?.length" /> -->
				<!-- v-else -->
				<div
					class="mt-6 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5"
				>
					<CategoryCard
						v-for="category in categories"
						:key="category.id"
						:category="category"
					/>
				</div>
			</div>
		</section>
	</main>
</template>
