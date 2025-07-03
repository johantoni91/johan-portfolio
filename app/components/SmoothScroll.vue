<template>
    <div ref="scrollContainer" data-scroll-container>
        <section v-for="n in 5" :key="n" class="h-screen flex items-center justify-center text-5xl font-bold"
            :data-scroll data-scroll-speed="1">
            Section {{ n }}
        </section>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useNuxtApp } from '#app'

const { $locomotive } = useNuxtApp()
const scrollContainer = ref<HTMLElement | null>(null)

onMounted(() => {
    if (scrollContainer.value) {
        new $locomotive({
            el: scrollContainer.value,
            smooth: true,
            lerp: 0.1, // kehalusan scroll (0–1)
        })
    }
})
</script>

<style scoped>
section:nth-child(odd) {
    background-color: #f1f5f9;
}

section:nth-child(even) {
    background-color: #e2e8f0;
}
</style>
