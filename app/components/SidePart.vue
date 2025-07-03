<template>
    <aside
        class="hidden h-screen z-30 fixed bg-gray-300 dark:text-white dark:bg-gray-800 dark:shadow dark:shadow-white p-5 md:flex flex-col justify-between gap-4 transition-all duration-700 ease-in-out"
        :class="sidebarClass">
        <div>
            <div class="flex items-center gap-3 mb-5">
                <img src="/assets/logo.jpeg" alt="Logo" class="w-10 h-10 rounded-lg" />
                <h1 class="font-bold text-xl" :class="panel">Jo</h1>
            </div>
            <div class="flex flex-col gap-3">
                <NuxtLink v-for="link in links" :key="link.name" :to="link.to"
                    class="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-700 ease-in-out">
                    <Icon :name="link.icon" style="color: black" class="w-5 h-5 dark:invert" />
                    <span :class="panel">{{ link.name }}</span>
                </NuxtLink>
            </div>
        </div>
        <button
            class="rounded-lg gap-3 p-2 flex items-center hover:cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-700 ease-in-out"
            @click="$emit('shortcut')">
            <Icon name="hugeicons:rotate-left-04" style="color: black" class="w-5 h-5 dark:invert" />
            <span :class="panel">Icon Only</span>
        </button>
    </aside>
    <aside
        class="z-50 fixed w-screen bg-gray-300 dark:bg-gray-800 dark:text-white dark:shadow dark:shadow-white p-5 flex md:hidden flex-col justify-between transition-all duration-700 ease-in-out"
        :class="mobSide">
        <div>
            <div class="flex justify-between items-center mb-5">
                <div class="flex justify-center items-center gap-3">
                    <img src="/assets/logo.jpeg" alt="Logo" class="w-10 h-10 rounded-lg thumbnail" />
                    <h1 class="font-bold text-xl">Jo</h1>
                </div>
                <UButton variant="ghost" color="neutral" @click="$emit('mobile_sidebar')">
                    <Icon name="material-symbols:arrows-input-rounded"
                        class="w-5 h-5 font-bold text-lg text-black dark:text-white" />
                </UButton>
            </div>
            <div class="flex flex-col gap-3 justify-center">
                <NuxtLink v-for="link in links" :key="link.name" :to="link.to"
                    class="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-700 ease-in-out">
                    <Icon :name="link.icon" style="color: black" class="w-5 h-5 dark:invert" />
                    <span>{{ link.name }}</span>
                </NuxtLink>
            </div>
        </div>
    </aside>
</template>

<script setup>
import { computed } from 'vue'

const isOpen = useState('isOpen')
const mobOpen = useState('mobOpen')
const state = useState('state')

const sidebarClass = computed(() => {
    if (!isOpen.value) return '-translate-x-full'
    return state.value ? 'w-60' : 'w-20'
})

const mobSide = computed(() => {
    if (!mobOpen.value) return '-translate-y-full'
    return 'translate-y-[90]'
})

const panel = computed(() => {
    if (!state.value) return 'hidden'
    return true
})

const links = [
    { name: 'Dashboard', to: '/', icon: 'hugeicons:dashboard-square-02' },
    { name: 'About', to: '/about', icon: 'hugeicons:user-account' },
    { name: 'Experiences', to: '/experiences', icon: 'hugeicons:brain-02' }
]

</script>