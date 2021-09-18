import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import BasicLayout from '@/layouts/BasicLayout.vue'

Vue.use(VueRouter)

const RouteView = {
  name: 'RouteView',
  render: (h:any) => h('router-view')
// h函数是createElement函数 生成<router-view/>
}

const constantRoutes: Array<RouteConfig> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: BasicLayout,
    children: [{
      path: '/editor',
      name: 'Editor',
      component: () => import('../views/VueQuillEditor/index.vue')
    }, {
      path: '/d3',
      name: 'Test',
      component: RouteView,
      // 需要加个组件在中间，不然无法显示子组件
      children: [{
        path: '/d3/test',
        name: 'Test',
        component: () => import('../views/d3js/D3Test.vue')
      }]
    }, {
      path: '/goods',
      name: 'Goods',
      component: () => import('../views/myTest/GoodLists.vue')
    }]
  },
]
const asyncRoutes: Array<RouteConfig> = [
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [...constantRoutes, ...asyncRoutes]
})

export default router
