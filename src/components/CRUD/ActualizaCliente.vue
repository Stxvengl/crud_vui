<template>
  <v-dialog v-model="localDialog" max-width="600">
    <v-card>
      <v-card-title class="text-h6">Editar Cliente</v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field v-model="form.cedula" label="Cédula" />
          <v-text-field v-model="form.nombres" label="Nombres" />
          <v-text-field v-model="form.apellidos" label="Apellidos" />
          <v-text-field v-model="form.celular" label="Celular" />
          <v-text-field v-model="form.correo" label="Correo" />
          <v-text-field v-model="form.direccion" label="Dirección" />
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="blue" variant="text" @click="close">Cancelar</v-btn>
        <v-btn color="green" variant="text" @click="save">Guardar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, watch } from 'vue'
import { UpdateCliente } from '../services/ClienteServices'

const props = defineProps({
  modelValue: Boolean,
  cliente: Object
})
const emit = defineEmits(['update:modelValue', 'guardar'])

const localDialog = ref(props.modelValue)
const form = ref({ ...props.cliente })
watch(() => props.modelValue, (val) => {
  localDialog.value = val
  form.value = { ...props.cliente }
})

watch(() => localDialog.value, (val) => {
  emit('update:modelValue', val)
})

const close = () => {
  localDialog.value = false
}

const save = async () => {
  try {
    const response = await UpdateCliente(form.value)
    localDialog.value = false
  } catch (error) {
    console.error('Error al actualizar cliente:', error)
  }
}
</script>
