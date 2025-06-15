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
        <th class="text-left">Acciones</th>
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
        <td>
          <v-menu>
            <template #activator="{ props }">
              <v-btn icon v-bind="props">
                <v-icon :icon="`mdiSvg:${mdiAccount}`" class="me-2" />
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="abrirModal(usuario)">
                <v-icon :icon="`mdiSvg:${mdiPencil}`" class="me-2" />
              </v-list-item>
              <v-list-item @click="eliminar(usuario)">
                <v-icon :icon="`mdiSvg:${mdiDelete}`" class="me-2" color="red" />
              </v-list-item>
            </v-list>
          </v-menu>
        </td>
      </tr>
    </tbody>
  </v-table>
  <ActualizaCliente v-if="usuarioSeleccionado" v-model="dialogVisible" :cliente="usuarioSeleccionado"
    @cerrar="cerrarModal" />
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { obtenerClientes } from '../services/ClienteServices'
import { mdiAccount, mdiPencil, mdiDelete } from '@mdi/js'
import ActualizaCliente from './ActualizaCliente.vue'
import { DeleteCliente } from '../services/ClienteServices'
const usuarios = ref([])

onMounted(async () => {
  try {
    const response = await obtenerClientes()
    usuarios.value = response.data
  } catch (error) {
    console.error('Error cargando los clientes:', error)
  }
})
const dialogVisible = ref(false)
const usuarioSeleccionado = ref(null)

const abrirModal = (usuario) => {
  usuarioSeleccionado.value = usuario
  dialogVisible.value = true
}

const cerrarModal = () => {
  dialogVisible.value = false
  usuarioSeleccionado.value = null
}
const eliminar = async (values) => {
  try {
    const response = await DeleteCliente(values)
  } catch (error) {
    console.error('Error al actualizar cliente:', error)
  }
}
</script>
