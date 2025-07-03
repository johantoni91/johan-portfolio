<!-- components/ScrollToTop.vue -->
<template>
    <UButton v-if="show" @click="scrollToTop" variant="ghost" color="success"
        :class="'fixed bottom-30 animate-pulse cursor-pointer z-50 right-5 rounded-lg transition-opacity duration-800'">
        <Icon name="material-symbols:arrow-warm-up-rounded" class="w-6 h-6" />
    </UButton>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const show = ref(false)

const handleScroll = () => {
    show.value = window.scrollY > 0
}

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>
