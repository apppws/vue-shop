import Vue from 'vue'


import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

import WeVue from 'we-vue'
Vue.use(WeVue)

Vue.config.productionTip = false

import 'we-vue/lib/style.css'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
