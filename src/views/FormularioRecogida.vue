<template>
  <div class="formulario-recogida">
    <h1>Solicitud de recogida de vehículo</h1>
    <form @submit.prevent="enviarFormulario">
      <input v-model="nombre" placeholder="Nombre" required />
      <input v-model="telefono" placeholder="Teléfono" required />
      <input v-model="matricula" placeholder="Matrícula" required />
      <input v-model="marcaModelo" placeholder="Marca y Modelo" required />
      <input v-model="direccion" placeholder="Dirección de recogida" required />
      <input v-model="cp" placeholder="Código Postal" required />
      <textarea v-model="observaciones" placeholder="Observaciones (opcional)"></textarea>

      <button type="submit">Enviar solicitud</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Swal from 'sweetalert2'
import api from '../services/api'

const nombre = ref('')
const telefono = ref('')
const matricula = ref('')
const marcaModelo = ref('')
const direccion = ref('')
const cp = ref('')
const observaciones = ref('')

const enviarFormulario = async () => {
  if (!nombre.value || !telefono.value || !matricula.value || !direccion.value || !cp.value) {
    Swal.fire('Error', 'Por favor, rellena todos los campos obligatorios.', 'error')
    return
  }

  try {
    const response = await api.post('/solicitud', {
      nombre: nombre.value,
      telefono: telefono.value,
      matricula: matricula.value,
      marca_modelo: marcaModelo.value,
      direccion: direccion.value,
      codigo_postal: cp.value,
      observaciones: observaciones.value,
    })

    Swal.fire('¡Enviado!', 'Tu solicitud ha sido enviada correctamente.', 'success')
    // Limpia campos
    nombre.value = ''
    telefono.value = ''
    matricula.value = ''
    marcaModelo.value = ''
    direccion.value = ''
    cp.value = ''
    observaciones.value = ''
  } catch (error) {
    console.error(error)
    Swal.fire('Error', 'Hubo un problema al enviar la solicitud.', 'error')
  }
}
</script>

<style scoped>
.formulario-recogida {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  background-color: #f9f9f9;
}
input, textarea {
  display: block;
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 6px;
}
button {
  background-color: #4caf50;
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
button:hover {
  background-color: #43a047;
}
</style>
