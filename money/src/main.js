import Vue from 'vue'
import vuetify from '@/plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import modal from './plugins/ModalWindow'

Vue.config.productionTip = false
Vue.use(modal)

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
