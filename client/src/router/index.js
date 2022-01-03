import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Wireframe1 from '../views/wireframe/Wireframe1.vue'
import Testes from '../views/Testes.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Wireframe1,
    children: [
      {
        path: '',
        component: Home
      }
    ]
  },
  {
    path: '/teste',
    component: Wireframe1,
    children: [
      {
        path: '',
        component: Testes
      }
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
