<template>
    <div class="z-50 fixed bottom-14 right-3 p-1 rounded-full">
        <UModal fullscreen title="Contact Me" class="md:hidden flex">
            <UTooltip text="Contact Me" :content="{ side: 'left', sideOffset: 10 }">
                <UButton variant="ghost" size="sm"
                    class="hover:bg-transparent hover:cursor-pointer shadow-lg transition-all duration-300 ease-in-out">
                    <Icon name="material-symbols-light:headset-mic-sharp" class="w-8 h-8 bg-green-500" />
                </UButton>
            </UTooltip>

            <template #body>
                <UForm :schema="schema" :state="state" class="space-y-4 mb-5" @submit="onSubmit">
                    <!-- <UFormField label="Name or Company" name="name">
                        <UInput v-model="state.name" :autofocus="true" size="xl" :class="'w-full'" />
                    </UFormField> -->

                    <UFormField label="Email" name="email">
                        <UInput v-model="state.email" size="xl" :class="'w-full'" />
                    </UFormField>

                    <!-- <UFormField label="Phone" name="phone">
                        <UInput v-model="state.phone" size="xl" :class="'w-full'" />
                    </UFormField> -->

                    <UFormField label="Message" name="message">
                        <UInput v-model="state.message" size="xl" :class="'w-full'" />
                    </UFormField>

                    <div class="flex justify-end">
                        <UButton type="submit" variant="soft" color="success"
                            :class="'shadow shadow-green-500 cursor-pointer'">
                            Submit
                        </UButton>
                    </div>
                </UForm>
                <USeparator size="xl" />

                <div class="flex justify-center items-center">
                    <small class="text-center mt-3 mx-auto">Contact me with my social media</small>
                </div>

                <div class="flex flex-col gap-3">
                    <Icon name="lucide:arrow-big-down-dash"
                        class="animate-bounce w-8 h-8 bg-green-500 drop-shadow-green mt-3 mx-auto" />

                    <div class="flex justify-center gap-5 items-center">
                        <NuxtLink to="https://wa.me/6289671022623" target="_blank">
                            <Icon name="logos:whatsapp-icon" class="w-12 h-12 hover:animate-pulse" />
                        </NuxtLink>
                        <USeparator orientation="vertical" class="h-12" size="xl" />
                        <NuxtLink to="https://ig.me/m/ng.johan.w" target="_blank">
                            <Icon name="skill-icons:instagram" class="w-12 h-12 hover:animate-pulse" />
                        </NuxtLink>
                        <USeparator orientation="vertical" class="h-12" size="xl" />
                        <NuxtLink to="https://www.linkedin.com/in/johan-toni-wijaya-9b1522146/" target="_blank">
                            <Icon name="skill-icons:linkedin" class="w-12 h-12 hover:animate-pulse" />
                        </NuxtLink>
                    </div>
                </div>
            </template>
        </UModal>

        <UModal title="Contact Me" class="hidden md:flex">
            <UTooltip text="Contact Me" :content="{ side: 'left', sideOffset: 10 }">
                <UButton variant="ghost" size="sm"
                    class="hover:bg-transparent hover:cursor-pointer transition-all duration-300 ease-in-out">
                    <Icon name="material-symbols-light:headset-mic-sharp" class="w-8 h-8 bg-green-500" />
                </UButton>
            </UTooltip>

            <template #body>
                <UForm :schema="schema" :state="state" class="space-y-4 mb-5" @submit="onSubmit">
                    <!-- <UFormField label="Name or Company" name="name">
                        <UInput v-model="state.name" :autofocus="true" size="xl" :class="'w-full'" />
                    </UFormField> -->

                    <UFormField label="Email" name="email">
                        <UInput v-model="state.email" size="xl" :class="'w-full'" />
                    </UFormField>

                    <!-- <UFormField label="Phone" name="phone">
                        <UInput v-model="state.phone" size="xl" :class="'w-full'" />
                    </UFormField> -->

                    <UFormField label="Message" name="message">
                        <UInput v-model="state.message" size="xl" :class="'w-full'" />
                    </UFormField>

                    <div class="flex justify-end">
                        <UButton type="submit" variant="soft" color="success"
                            :class="'shadow shadow-green-500 cursor-pointer'">
                            Submit
                        </UButton>
                    </div>
                </UForm>

                <USeparator size="xl" />

                <div class="flex justify-center items-center">
                    <small class="text-center mt-3 mx-auto">Contact me with my social media</small>
                </div>

                <div class="flex flex-col gap-3">
                    <Icon name="lucide:arrow-big-down-dash"
                        class="animate-bounce w-8 h-8 bg-green-500 drop-shadow-green mt-3 mx-auto" />

                    <div class="flex justify-center gap-5 items-center">
                        <NuxtLink to="https://wa.me/6289671022623" target="_blank">
                            <Icon name="logos:whatsapp-icon" class="w-12 h-12 hover:animate-pulse" />
                        </NuxtLink>
                        <USeparator orientation="vertical" class="h-12" size="xl" />
                        <NuxtLink to="https://ig.me/m/ng.johan.w" target="_blank">
                            <Icon name="skill-icons:instagram" class="w-12 h-12 hover:animate-pulse" />
                        </NuxtLink>
                        <USeparator orientation="vertical" class="h-12" size="xl" />
                        <NuxtLink to="https://www.linkedin.com/in/johan-toni-wijaya-9b1522146/" target="_blank">
                            <Icon name="skill-icons:linkedin" class="w-12 h-12 hover:animate-pulse" />
                        </NuxtLink>
                    </div>
                </div>
            </template>
        </UModal>
    </div>
</template>

<script setup lang="ts">
import { object, string, type InferType } from 'yup'
import type { FormSubmitEvent } from '@nuxt/ui'

const schema = object({
    // name: string().required('Required'),
    email: string().email('Invalid email').required('Required'),
    // phone: string()
    //     .matches(/^\d+$/, 'Must be a number')
    //     .min(10, 'Must be at least 10 digits')
    //     .max(15, 'Must be at most 15 digits'),
    message: string()
        .min(10, 'Must be at least 10 characters')
        .max(500, 'Must be at most 500 characters')
})

type Schema = InferType<typeof schema>

const state = reactive({
    // name: undefined,
    email: '',
    // phone: undefined,
    message: ''
})

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<Schema>) {
    try {
        const data = await $fetch('https://formspree.io/f/xanenaoe', {
            method: 'POST',
            headers: {
                'Accept': 'application/json'
            },
            body: {
                // name: state.name,
                email: state.email,
                // phone: state.phone,
                message: state.message
            }
        })

        if (data) {
            toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
            state.email = ''
            state.message = ''
        } else {
            toast.add({ title: 'Failed', description: 'The form failed to submitted.', color: 'error' })
        }
    } catch (err) {
        toast.add({
            title: 'Error',
            description: 'An error occurred while submitting the form.',
            color: 'error',
        })
        console.error(err)
    }
}
</script>
