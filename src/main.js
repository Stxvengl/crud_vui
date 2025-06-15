import { createApp } from 'vue'
import App from './App.vue'

// Importar Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Estilos personalizados
import './style.css'

// Crear instancia Vuetify
const vuetify = createVuetify({
  components,
  directives,
})

// Crear app
const app = createApp(App)

// Usar Vuetify antes de montar
app.use(vuetify)

// Montar app
app.mount('#app')
