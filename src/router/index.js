import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../components/index/index.vue'
import catalog from '../components/catalog/catalog.vue'
import form from '../components/form/form.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: index,
    meta: {
      title: 'Главная страница'
    }
  },
  {
    path: '/catalog',
    component: catalog,
    meta: {
      title: 'Каталог продукции'
    }

  },
  {
    path: '/form',
    component: form,
    meta: {
      title: 'Подбор программы'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  const { title } = to.meta
  const brand = 'Cat Energy'
  document.title = `${title ? title + ' | ' : ''}${brand}`
  next()
})

export default router
