import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

  // @是系统给封装好的别名，代表src目录的'绝对路径名'信息

  { path: 'login', name: 'login', component: () => import('@/views/login') },
  { path: '/home', name: 'home', component: () => import('@/views/home') }
]
const router = new VueRouter({
  routes
})

export default router
