<script lang="ts" setup>
//===============================-< imports >-===============================
import { useI18n } from 'vue-i18n'
import * as z from 'zod'
import Service from '~/service/Service'
import urls from '~/service/urls'
// import type { TSettings } from '~/types/api.types'
// //> utils
const { locale, t } = useI18n()
const token = useToken()
const toast = useToast()

//===============================-< get settings >-===============================
//> variables
// const settings = ref<TSettings>()

//> functions

// async function getSettings() {
// 	settings.value = await Service.get(
// 		urls.getContactInfo(),
// 		locale.value,
// 		token.value
// 	)
// }

// getSettings()

//===============================-< submit add >-===============================
//> variables
const schema = z.object({
	name: z.string({ required_error: t('enter_name') }),
	phone: z
		.string({ required_error: t('enter_phone') })
		.min(17, t('wrong_number')),
	message: z.string().optional()
})

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
	name: undefined,
	phone: '+998 ',
	message: undefined,
})

//> fuctions
interface IData {
	full_name: string | undefined
	phone: string | undefined
	team_id?: number
	service_id?: number
}

const form = useTemplateRef('form')
async function onSubmit() {
	const data: IData = {
		full_name: state.name,
		phone: state.phone?.replace(/[\s-]+/g, ''),
	}

	const res = await Service.post(
		urls.sendContact(),
		locale.value,
		data,
		token.value
	)
	if (res.status === 200) {
		toast.add({
			title: t('success_send'),
			color: 'success',
		})
		state.name = ''
		state.phone = '+998'
	} else {
		toast.add({
			title: t('error_send'),
			color: 'error',
		})
	}
}
</script>
<template>
	<main class="py-6 lg:py-10">
		<section class="text-subtext relative">
			<div class="container mx-auto px-4 sm:px-6 lg:px-8">
				<div class="flex flex-col md:flex-row gap-6">
					<!-- Map section -->
					<div
						class="w-full md:w-1/2 lg:w-3/5 bg-white rounded-lg overflow-hidden relative"
					>
						<iframe
							title="map"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.5802910718353!2d71.73227842644344!3d40.173897570382415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb85c2ffd46eb7%3A0x583fcb9692d47240!2zIlJpdm9qLTk4IiDQl9CQ0JLQntCUINCW0JHQmA!5e0!3m2!1sru!2s!4v1756269338634!5m2!1sru!2s"
							style="border: 0"
							loading="lazy"
							referrerpolicy="no-referrer-when-downgrade"
							class="w-full h-full min-h-60"
						/>

						<!-- Info card -->
						<!-- <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md m-4">
							<div class="w-full sm:w-1/2 px-6">
								<h2 class="title-font font-semibold text-text tracking-widest text-xs">
									{{ $t('address') }}
								</h2>
								<p class="mt-1">{{ settings?.data.address }}</p>
							</div>
							<div class="w-full sm:w-1/2 px-6 mt-4 sm:mt-0">
								<h4 class="font-semibold text-text tracking-widest text-xs">
									{{ $t('email') }}
								</h4>
								<a class="text-indigo-500 leading-relaxed">{{
									settings?.data.email
								}}</a>
								<h2 class="font-semibold text-text tracking-widest text-xs mt-4">
									{{ $t('phone') }}
								</h2>
								<p class="leading-relaxed">{{ settings?.data.phone }}</p>
							</div>
						</div> -->
					</div>

					<!-- Contact form -->
					<div
						class="w-full md:w-1/2 lg:w-2/5 bg-white flex flex-col rounded-md p-4 sm:p-6 md:p-8"
					>
						<h2 class="text-lg mb-2 font-medium title-font">
							{{ $t('contact') }}
						</h2>
						<p class="leading-relaxed mb-5 text-subtext text-sm md:text-base">
							Ushbu formadan foydalanib bizga xabaringizni jo'nating. Biz siz bilan
							tez orada bog'lanamiz.
						</p>

						<UForm
							ref="form"
							:schema="schema"
							:state="state"
							class="space-y-4 mt-4"
							@submit="onSubmit"
						>
							<UFormField label="Ismingiz" name="name">
								<UInput
									v-model="state.name"
									type="text"
									class="w-full"
									size="lg"
								/>
							</UFormField>

							<UFormField label="Telefo'n raqam" name="phone">
								<UInput
									v-model="state.phone"
									v-maska="'+998 ## ###-##-##'"
									type="text"
									class="w-full"
									size="lg"
								/>
							</UFormField>
							<UFormField label="Xabaringiz" name="message">
								<UTextarea
									v-model="state.message"
									type="text"
									class="w-full"
									size="lg"
								/>
							</UFormField>


							<div>
								<BaseButton text="Yuborish" is-full />
							</div>
						</UForm>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>
