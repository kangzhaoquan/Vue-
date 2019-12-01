import Vue from 'vue'
// 引入vue
import App from './App.vue'
// 引入一个组件
import router from './router/index'
// 引入router
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App), // 渲染函数
}).$mount('#app') // 挂载在#app上
