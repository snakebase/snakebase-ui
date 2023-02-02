export default defineNuxtConfig({
  app: {
    baseURL: '/ui',
  },
  css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.css' ],
  build: {
    transpile: ['vuetify'],
  },
  ssr: true,
  vite: {},
})

