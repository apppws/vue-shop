import Vue from 'vue'


import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

// we-vue 插件
import WeVue from 'we-vue'
Vue.use(WeVue)

Vue.config.productionTip = false
// 轮播图
import { Swipe, SwipeItem } from 'we-vue'
Vue.use(Swipe).use(SwipeItem)
import 'we-vue/lib/style.css'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
