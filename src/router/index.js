import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../components/index/index.vue'
import catalog from '../components/catalog/catalog.vue'
import form from '../components/form/form.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: index
  },
  {
    path: '/catalog',
    component: catalog

  },
  {
    path: '/form',
    component: form
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
