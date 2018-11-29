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
// 轮播图
import { Swipe, SwipeItem ,Loadmore ,InfiniteScroll } from 'we-vue'
Vue.use(Swipe).use(SwipeItem)
// 加载更多
Vue.use(Loadmore)
// 无限滚动加载
Vue.use(InfiniteScroll)

// 注册导航守卫（每次加载一个页面时就会自动被执行）
router.beforeEach((to, from, next) => {
  if(to.meta.needLogin)
  {
    let ACCESS_TOKEN = localStorage.getItem('ACCESS_TOKEN')
    if(ACCESS_TOKEN)
      next()
    else
      // 重定向到登录页面
      next('/login')
  }
  else
    // 直接加载页面
    next()
})

// 先统一设置接口的基础地址
Vue.axios.defaults.baseURL = 'http://127.0.0.1:8000/api'


Vue.config.productionTip = false
import 'we-vue/lib/style.css'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
