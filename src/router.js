import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        // 首页
        {
          path: '',
          name: 'index',
          component: () => import('./views/Index/index.vue'),
        },
        // 分类
        {
          path: '/category',
          name: 'category',
          component: () => import('./views/Index/category.vue'),
        },
        // 购物车
        {
          path: '/cart',
          name: 'cart',
          component: () => import('./views/Index/cart.vue'),
        },
        // 个人中心
        {
          path: '/self',
          name: 'self',
          component: () => import('./views/Index/self.vue'),
          meta: {
            needLogin: true
          }
        }
      ]
    },
    // 登录
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    // 注册
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/Register.vue')
    },
     // 搜索
     {
      path: '/search',
      name: 'search',
      component: () => import('./views/Search.vue')
    },
    // 全部订单
    {
      path: '/order',
      name: 'order',
      component: () => import('./views/Self/order.vue'),
    },
    // 待发货
    {
      path: '/go_order',
      name: 'go_order',
      component: () => import('./views/Self/go_order'),
    },
    // 待评价
    {
      path: '/go_message',
      name: 'go_message',
      component: () => import('./views/Self/go_message.vue'),
    },
    // 商品详情页(退款后点击的页面)
    {
      path: '/goods',
      name: 'goods',
      component: () => import('./views/Self/goods.vue'),
    },
    // 评价文本页面
    {
      path: '/message',
      name: 'message',
      component: () => import('./views/Self/message.vue'),
    },
    // 个人信息
    {
      path: '/datum',
      name: 'datum',
      component: () => import('./views/Self/datum.vue'),

    },
    // 个人信息中的个人昵称
    {
      path: '/namechange',
      name: 'namechange',
      component: () => import('./views/Self/namechange.vue'),
    },
    // 我的收藏
    {
      path: '/mycollect',
      name: 'mycollect',
      component: () => import('./views/Self/mycollect.vue'),
    },
    // 我的积分
    {
      path: '/integral',
      name: 'integral',
      component: () => import('./views/Self/integral.vue'),
    },
    // 地址管理
    {
      path: '/address',
      name: 'address',
      component: () => import('./views/Self/address.vue'),
    },
    // 添加地址管理
    {
      path: '/go_address',
      name: 'go_address',
      component: () => import('./views/Self/go_address.vue'),
    },
    // 分销
    {
      path: '/none',
      name: 'none',
      component: () => import('./views/Self/none.vue'),
    },
    // 结算
    {
      path:'/buy',
      name:'buy',
      component:() => import('./views/buy.vue'),
      meta: {
        needLogin: true
      }
    }

  ]
})
