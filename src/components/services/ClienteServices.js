// src/ClienteServices.js
import axios from 'axios'

export async function obtenerClientes() {
  try {
    const response = await axios.post('http://localhost:8000/api/Clientes/ObtenerClientes') 
    return response.data
  } catch (error) {
    console.error('Error al obtener clientes:', error)
    throw error
  }
}
export async function ingresarCliente(values) {
  try {
    const response = await axios.post('http://localhost:8000/api/Clientes/StoreRegistro', { values })
    return response.data
  } catch (error) {
    console.error('Error al obtener cliente por ID:', error)
    throw error
  }
}   
export async function UpdateCliente(values) {
  try {
    const response = await axios.post('http://localhost:8000/api/Clientes/ActualizarCliente', { values })
    return response.data
  } catch (error) {
    console.error('Error al obtener cliente por ID:', error)
    throw error
  }
}   
export async function DeleteCliente(values) {
  try {
    const response = await axios.post('http://localhost:8000/api/Clientes/EliminarCliente', { values })
    return response.data
  } catch (error) {
    console.error('Error al obtener cliente por ID:', error)
    throw error
  }
}   