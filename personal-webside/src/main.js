import Vue from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import App from './App'
import router from './router'
Vue.use(Antd)
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
