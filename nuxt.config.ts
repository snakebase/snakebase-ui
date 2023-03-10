export default defineNuxtConfig({
  app: {
    baseURL: '/',
  },
  css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.css' ],
  build: {
    transpile: ['vuetify'],
  },
  ssr: false,
  vite: {},
})
