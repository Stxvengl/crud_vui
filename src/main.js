import { createApp } from 'vue'
import App from './App.vue'

// Importar Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import { fa } from 'vuetify/iconsets/fa'
// Estilos personalizados
import './style.css'

// Crear instancia Vuetify
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdiSvg',
    aliases,
    sets: {
      mdiSvg: mdi,
    },
  },
})

// Crear app
const app = createApp(App)

// Usar Vuetify antes de montar
app.use(vuetify)

// Montar app
app.mount('#app')
