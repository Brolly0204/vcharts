import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import VCharts from 'v-charts'

// 完整引入
// Vue.use(VCharts)

// 按需引入
import '@/common/chart.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
