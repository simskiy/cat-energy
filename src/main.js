import Vue from 'vue'
import App from './App.vue'
import router from './router'
import btn from './components/btn'

import './styles/main.sass'

Vue.config.productionTip = false

Vue.component('app-btn', btn)

export const eventEmitter = new Vue()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
