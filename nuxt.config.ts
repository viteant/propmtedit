import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: {enabled: true},
  css: ['./app/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      titleTemplate: '%s | PromptEdit',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'theme-color',
          content: '#03050b',
        },
        {
          name: 'apple-mobile-web-app-status-bar-style',
          content: 'black-translucent',
        },
        {
          name: 'apple-mobile-web-app-capable',
          content: 'yes',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
    },
  },

  vite: {
      plugins: [tailwindcss()],
  },

  icon: {
    componentName: 'NuxtIcon'
  },

  modules: ['v-gsap-nuxt', '@nuxt/icon']
})
