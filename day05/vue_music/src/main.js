import Vue from 'vue'
import App from './App.vue'
import axios from './utils/axios'

import router from './router/index'
Vue.config.productionTip = false
Vue.prototype.$axios=axios  //将请求模块挂载到vue原型上
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
