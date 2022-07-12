import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import('@/views/index')
      }
    ]
  },
  {
    path: '/register',
    redirect: '/register',
    children: [
      {
        path: '/register',
        name: 'register',
        component: () => import('@/views/Register')
      }
    ]
  },
  {
    // 匹配所有路徑  vue2使用*   vue3使用/:pathMatch(.*)*或/:pathMatch(.*)或/:catchAll(.*)
    path: '/:catchAll(.*)',
    component: () => import('@/views/404'),
    hidden: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
