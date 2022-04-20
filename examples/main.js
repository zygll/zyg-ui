import Vue from 'vue'
import App from './App.vue'
import ZygUI  from '../packages/index'
Vue.config.productionTip = false
Vue.use(ZygUI)
new Vue({
  render: h => h(App),
}).$mount('#app')
