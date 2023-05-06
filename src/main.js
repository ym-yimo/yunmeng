import Vue from 'vue'
import App from './App.vue'

// 引入router
import router from '@/router'
// 引入axios
import axios from 'axios'
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) },
}).$mount('#app')
