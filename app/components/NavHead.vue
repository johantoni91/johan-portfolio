<template>
    <nav class="sticky top-0 z-20 h-12 max-w-screen p-3 rounded-br-lg flex justify-between items-center transition-all duration-700 ease-in-out"
        :class="[navbarClass, onScroll]">
        <UButton variant="ghost" color="neutral" class="hidden md:flex hover:cursor-pointer"
            @click="$emit('toggle_sidebar')">
            <Icon name="hugeicons:menu-01" class="w-5 h-5 font-bold text-lg text-green-500 dark:text-white" />
        </UButton>
        <UButton variant="ghost" class="flex md:hidden hover:cursor-pointer" @click="$emit('mobile_sidebar')">
            <Icon name="hugeicons:menu-01" class="w-5 h-5 font-bold text-lg text-green-500 dark:text-white" />
        </UButton>

        <div class="flex justify-center items-center gap-3">
            <UButton color="neutral" variant="ghost" class="hover:cursor-pointer" @click="toggleDark">
                <div v-if="isDark">
                    <SunIcon class="w-5 h-5 font-bold text-yellow-500" />
                </div>
                <div v-else>
                    <MoonIcon class="w-5 h-5 font-bold text-blue-500" />
                </div>
            </UButton>
            <UModal title="Profile">
                <UButton :class="'cursor-pointer'" icon="material-symbols:account-circle" variant="ghost" />

                <template #body>
                    <div class="flex items-center justify-start gap-3">
                        <img src="/assets/me.jpeg" width="150" height="150" class="rounded-lg thumbnail shadow-lg"
                            alt="">
                        <table>
                            <tr v-for="(identity, index) in Identities()" :key="index">
                                <th class="text-start">{{ identity.label }} &nbsp;</th>
                                <td class="w-4">:</td>
                                <td><small>{{ identity.desc }}</small></td>
                            </tr>
                        </table>
                    </div>
                </template>
            </UModal>

        </div>
    </nav>
</template>

<script setup lang="ts">
import { MoonIcon, SunIcon } from 'lucide-vue-next'
const isDark = ref(false)

onMounted(() => {
    // Sync awal dari localStorage
    if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.classList.add('dark')
        isDark.value = true
    }
})

const toggleDark = () => {
    isDark.value = !isDark.value
    const html = document.documentElement
    if (isDark.value) {
        html.classList.add('dark')
        localStorage.setItem('theme', 'dark')
    } else {
        html.classList.remove('dark')
        localStorage.setItem('theme', 'light')
    }
}

const isOpen = useState('isOpen')
const state = useState('state')
const isScrolled = ref(false)

const handleScroll = () => {
    isScrolled.value = window.scrollY > 0
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    handleScroll() // langsung cek saat mount
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})

const navbarClass = computed(() => {
    if (!isOpen.value) return 'ml-0'
    return state.value ? 'ml-60' : 'ml-20'
})

const onScroll = computed(() => {
    return isScrolled.value
        ? 'bg-white/80 backdrop-blur-md shadow-md dark:bg-slate-800/80'
        : 'bg-transparent'
})
</script>
