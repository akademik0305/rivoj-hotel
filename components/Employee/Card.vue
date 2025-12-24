<script lang="ts" setup>
//===============================-< imports >-===============================
import type { PropType } from 'vue'
import type { TEmployee } from '~/types/api.types'

//> props
const props = defineProps({
	employee: {
		type: Object as PropType<TEmployee>,
		required: true,
	},
})
</script>
<template>
	<div class="wrapper rounded-md p-4">
		<div class="flex items-center justify-center">
			<img
				:src="props.employee.file_url"
				class="w-full h-full rounded-2xl object-cover aspect-square max-w-60"
				:alt="props.employee.name"
			/>
		</div>
		<div class="mt-4 text-center">
			<h4 class="text-text text-xl font-semibold">{{ employee.name }}</h4>
			<p class="mt-4 text-subtext text-sm">{{ employee.position }}</p>
		</div>
	</div>
</template>
<style></style>
