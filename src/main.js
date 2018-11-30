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
import { Swipe, SwipeItem ,Loadmore ,InfiniteScroll ,NumberSpinner } from 'we-vue'
Vue.use(Swipe).use(SwipeItem)
// 加载更多
Vue.use(Loadmore)
// 无限滚动加载
Vue.use(InfiniteScroll)
// 输入框
Vue.use(NumberSpinner)

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

//为 axios  添加一个拦截器
Vue.axios.interceptors.request.use(function (config) {
  // 在发送请求之前自动执行 
  let token = localStorage.getItem('ACCESS_TOKEN')
  // 判断这个token是否存在
  if(token)
  {
    config.headers['Authorization'] = "Bearer "+token
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// 先统一设置接口的基础地址
Vue.axios.defaults.baseURL = 'http://127.0.0.1:8000/api'


Vue.config.productionTip = false
import 'we-vue/lib/style.css'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
