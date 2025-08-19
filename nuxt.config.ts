// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  nitro: {
    preset: 'static'
  },

  app: {
    baseURL: '/',
    head: {
      title: 'Johan Toni Wijaya',
      meta: [
        { name: "Johan's portfolio", content: 'Johan Toni Wijaya' },
      ]
    }
  },

  imports: {
    dirs: ['components', 'composables'],
  },

  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxtjs/color-mode',
    'nuxt-echarts',
    '@vueuse/nuxt',
    'nuxt-aos',
    'nuxt-marquee',
    '@vite-pwa/nuxt'
  ],

  pwa: {
    registerType: 'autoUpdate', // service worker auto update
    manifest: {
      name: 'Johan Portfolio',
      short_name: 'NuxtPWA',
      description: 'Contoh Progressive Web App dengan Nuxt 3',
      theme_color: '#ffffff',
      background_color: '#ffffff',
      display: 'standalone',
      orientation: 'portrait',
      start_url: '/',
      icons: [
        {
          src: '/assets/logo.jpeg',
          sizes: '192x192',
          type: 'image/jpeg'
        },
        {
          src: '/assets/logo.jpeg',
          sizes: '512x512',
          type: 'image/jpeg'
        }
      ]
    },
    workbox: {
      navigateFallback: '/', // fallback offline
    },
    devOptions: {
      enabled: true, // aktifkan PWA di mode dev
    }
  },

  css: ['~/assets/css/main.css'],

  future: {
    compatibilityVersion: 4
  },
  compatibilityDate: '2024-11-27'
})