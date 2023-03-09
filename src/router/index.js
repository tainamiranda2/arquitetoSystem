import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
//teste
//import Home from '../views/home/Home.vue'
import Login from '../views/Login.vue'

import Servico from '../views/servico/Servico.vue'
import clienteRegister from '../views/cliente/clienteRegister.vue'
import arquitetoRegister from '../views/arquiteto/arquitetoRegister.vue'

import dashboardArquiteto from '../views/arquiteto/dashboardArquiteto.vue'
import dashboardCliente from '../views/cliente/dashboardCliente.vue'
import estadoServico from '../views/arquiteto/estadoServico'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
 
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
      path: '/login',
      name:'login',
      component:Login
  },
  {
      path: '/clienteRegister',
      name:'clienteRegister',
      component:clienteRegister
  },
  {
      path: '/arquitetoRegister',
      name:'arquitetoRegister',
      component:arquitetoRegister
  },
  {
      path: '/servico/:id',
      name:'servico',
      component:Servico
  },
  {
      path: '/dashboardArquiteto',
      name:'dashboardArquiteto',
      component:dashboardArquiteto
  },
  {
      path: '/dashboardCliente',
      name:'dashboardCliente',
      component:dashboardCliente
  },
  {
    path:'/estadoServico/:id',
    name:'estadoServico',
    component: estadoServico
  }
 

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
