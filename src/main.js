import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.$axios = axios
Vue.prototype.$baseip = 'http://121.196.110.115:4000'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
