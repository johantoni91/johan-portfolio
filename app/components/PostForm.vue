<script setup>
const props = defineProps(['modelValue'])
defineEmits(['update:modelValue', 'submit'])

const localPost = ref({ title: '', body: '' })

watch(() => props.modelValue, (val) => {
    localPost.value = { ...val }
}, { immediate: true })
</script>

<template>
    <UCard class="mb-4">
        <form @submit.prevent="$emit('submit', localPost)">
            <div class="space-y-3">
                <UInput v-model="localPost.title" placeholder="Judul" />
                <UTextarea v-model="localPost.body" placeholder="Isi post" />
                <UButton type="submit" color="primary">Simpan</UButton>
            </div>
        </form>
    </UCard>
</template>
