import { createRouter, createWebHistory } from 'vue-router'
import FormularioRecogida from '../views/FormularioRecogida.vue'

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: FormularioRecogida
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
