import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Layout from '@/layout/index.vue'

Vue.use(VueRouter)

const constantRoutes: Array<RouteConfig> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: Layout
  }
]
const asyncRoutes: Array<RouteConfig> = [{
  path: '/editor',
  name: 'Editor',
  component: () => import('../views/VueQuillEditor/index.vue')
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [...constantRoutes, ...asyncRoutes]
})

export default router
