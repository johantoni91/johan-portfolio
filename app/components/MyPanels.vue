<template>
    <div class="flex items-center justify-start gap-5 flex-wrap">
        <div v-for="panel in panels" :key="panel.id"
            class="flex flex-col gap-2 p-5 rounded-lg bg-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300 dark:bg-gray-700 dark:text-white">
            <div class="flex items-center gap-2">
                <component :is="panel.icon" class="w-6 h-6 text-gray-700" />
                <h3 class="text-lg font-semibold text-gray-800">{{ panel.title }}</h3>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ProjectorIcon, BookIcon } from 'lucide-vue-next';
const panels = [
    {
        id: 1,
        title: 'Projects',
        icon: ProjectorIcon
    },
    {
        id: 2,
        title: 'Languages',
        icon: BookIcon
    }
]
</script>