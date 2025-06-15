// src/ClienteServices.js
import axios from 'axios'

export async function obtenerClientes() {
  try {
    const response = await axios.post('http://localhost:8001/api/Clientes/ObtenerClientes') 
    return response.data
  } catch (error) {
    console.error('Error al obtener clientes:', error)
    throw error
  }
}
export async function ingresarCliente(values) {
  try {
    const response = await axios.post('http://localhost:8001/api/Clientes/StoreRegistro', { values })
    return response.data
  } catch (error) {
    console.error('Error al obtener cliente por ID:', error)
    throw error
  }
}   