import App from './App.vue'

Vue.config.productionTip = false

import {router} from './router'

import mvui from '@/index'
Vue.use(mvui)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
