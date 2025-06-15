<template>
  <h2>Clientes</h2>

  <v-table density="compact">
    <thead>
      <tr>
        <th class="text-left">Cédula</th>
        <th class="text-left">Nombres</th>
        <th class="text-left">Apellidos</th>
        <th class="text-left">Celular</th>        
        <th class="text-left">Correo</th>
        <th class="text-left">Dirección</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="usuario in usuarios" :key="usuario.id_cliente">
        <td>{{ usuario.cedula }}</td>
        <td>{{ usuario.nombres }}</td>
        <td>{{ usuario.apellidos }}</td>
        <td>{{ usuario.celular }}</td>
        <td>{{ usuario.correo }}</td>
        <td>{{ usuario.direccion }}</td>

      </tr>
    </tbody>
  </v-table>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { obtenerClientes } from '../services/ClienteServices'

const usuarios = ref([])

onMounted(async () => {
  try {
    const response = await obtenerClientes()
    usuarios.value = response.data
  } catch (error) {
    console.error('Error cargando los clientes:', error)
  }
})
</script>
