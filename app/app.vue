<template>
  <UApp>
    <div class="relative min-h-screen w-screen flex flex-col gap-3 bg-slate-100 dark:bg-slate-900">
      <ContactMe />
      <ScrollToTop />
      <Sidebar @shortcut="shortcut" @mobile_sidebar="mobile_sidebar" />
      <Navbar @toggle_sidebar="toggle_sidebar" @mobile_sidebar="mobile_sidebar" />
      <main class="px-5 transition-all duration-700 ease-in-out" :class="navbarClass">
        <NuxtPage />
      </main>
      <footer
        class="p-5 text-center text-md mt-auto bg-slate-200 dark:bg-slate-800 dark:text-white transition-all duration-700 ease-in-out"
        :class="navbarClass">
        <USeparator label="Built by Johan Toni Wijaya. All Right Reserved © 2025" color="success" type="dotted" />
      </footer>
    </div>
  </UApp>

</template>

<script setup>
import Sidebar from '~/components/SidePart.vue'
import Navbar from '~/components/NavHead.vue'
import { computed } from 'vue'

const route = useRoute()
const title = route.name
  .toLowerCase()
  .split(' ')
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(' ')

useHead({
  title: computed(() => `Johan | ${title == 'Index' ? 'Dashboard' : title}`),
})

const isOpen = useState('isOpen', () => false)
const mobOpen = useState('mobOpen', () => false)
const state = useState('state', () => false)

const toggle_sidebar = () => {
  isOpen.value = !isOpen.value
}
const shortcut = () => {
  state.value = !state.value
}

const mobile_sidebar = () => {
  mobOpen.value = !mobOpen.value
}

const navbarClass = computed(() => {
  if (!isOpen.value) return 'ml-0'
  return state.value ? 'ml-60' : 'ml-20'
})
</script>