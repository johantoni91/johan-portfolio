// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  nitro: {
    preset: 'static'
  },

  app: {
    head: {
      title: 'Johan Toni Wijaya',
      meta: [
        { name: "Johan's portfolio", content: 'Johan Toni Wijaya' },
      ]
    }
  },
  
  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxtjs/color-mode',
    'nuxt-echarts',
    '@vueuse/nuxt',
    'nuxt-aos',
    'nuxt-marquee'
  ],

  css: ['~/assets/css/main.css'],

  future: {
    compatibilityVersion: 4
  },
  compatibilityDate: '2024-11-27'
})