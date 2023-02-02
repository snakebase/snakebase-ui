import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin(nuxtApp => {
  const snakebaseTheme = {
    dark: true,
    colors: {
      'background': '#1C1B22',
      'surface': '#232228',
      'primary': '#FFE873',
      'primary-darken': '#FFD43B',
      'secondary': '#4B8BBE',
      'secondary-darken': '#306998',
      'error': '#B00020',
      'info': '#2196F3',
      'success': '#4CAF50',
      'warning': '#FB8C00',
    }
  }

  const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      }
    },
    theme: {
      defaultTheme: 'snakebaseTheme',
      themes: {
        snakebaseTheme,
      },
    },
  })

  nuxtApp.vueApp.use(vuetify)
})