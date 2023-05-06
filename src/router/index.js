// 引入vue和router
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 引入视图组件
import Home from '@/view/HomeView'

// 路由信息
const routes = [
  {
    // 默认跳转主页
    path: '/',
    redirect: '/home'
  },
  {
    // 主页
    path: '/home',
    name: 'home',
    component: Home
  }
]

// 导出路由
export default new VueRouter({
  // mode: 'history',
  routes: routes
})