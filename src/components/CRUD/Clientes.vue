<template>
  <div>
    <h2>Nuevo Cliente</h2>
    <form @submit.prevent="submit">
      <v-text-field
        v-model="cedula.value.value"
        :counter="10"
        :error-messages="cedula.errorMessage.value"
        label="Cédula"
      ></v-text-field>

      <v-text-field
        v-model="nombres.value.value"
        :counter="50"
        :error-messages="nombres.errorMessage.value"
        label="Nombre"
      ></v-text-field>

      <v-text-field
        v-model="apellidos.value.value"
        :counter="50"
        :error-messages="apellidos.errorMessage.value"
        label="Apellidos"
      ></v-text-field>

      <v-text-field
        v-model="celular.value.value"
        :counter="10"
        :error-messages="celular.errorMessage.value"
        label="Celular"
      ></v-text-field>

      <v-text-field
        v-model="email.value.value"
        :error-messages="email.errorMessage.value"
        label="Correo"
      ></v-text-field>

      <v-text-field
        v-model="direccion.value.value"
        :error-messages="direccion.errorMessage.value"
        label="Dirección"
      ></v-text-field>

      <v-btn class="me-4" type="submit" color="primary">
        Registrar
      </v-btn>
      <v-btn @click="handleReset" color="secondary">
        Limpiar
      </v-btn>
    </form>
  </div>
</template>

<script setup>
import { useField, useForm } from 'vee-validate'
import { ingresarCliente } from '../services/ClienteServices'


const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    cedula(value) {
      if (!value) return 'La cédula es obligatoria.'
      if (!/^\d{10}$/.test(value)) return 'La cédula debe tener 10 dígitos.'
      return true
    },
    nombres(value) {
      if (!value || value.length < 2) return 'El nombre debe tener al menos 2 caracteres.'
      return true
    },
    apellidos(value) {
      if (!value || value.length < 2) return 'Los apellidos deben tener al menos 2 caracteres.'
      return true
    },
    celular(value) {
      if (!value || !/^\d{7,10}$/.test(value)) return 'El celular debe tener entre 7 y 10 dígitos.'
      return true
    },
    email(value) {
      if (!value || !/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return 'Correo inválido.'
      return true
    },
    direccion(value) {
      if (!value || value.length < 5) return 'Dirección requerida (mín. 5 caracteres).'
      return true
    },
  },
})

const cedula = useField('cedula')
const nombres = useField('nombres')
const apellidos = useField('apellidos')
const celular = useField('celular')
const email = useField('email')
const direccion = useField('direccion')

const submit = handleSubmit(async (values) => {
  try {
    console.log('Datos del cliente:', values)
    const response = await ingresarCliente(values)
    alert('Cliente registrado con éxito.')
    handleReset()
  } catch (error) {
    console.error('Error al registrar cliente:', error)
    alert('Hubo un error al registrar el cliente.')
  }
})
</script>
