import { createRouter, createWebHistory } from 'vue-router'

// container
const DefaultContainer = () => import('../containers/defaultContainer.vue')

const routes = [
  {
    path: '/',
    redirect: '/login',
    children: [
      {
        path: '/register',
        name: 'register',
        component: () => import('@/views/Register')
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/login')
      }
    ]
  },
  {
    path: '/index',
    redirect: '/index/home',
    component: DefaultContainer,
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/index')
      },
      {
        path: 'info',
        name: 'info',
        component: () => import('@/views/info')
      },
      {
        path: 'list',
        name: 'List',
        component: () => import('@/views/foundList')
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

// 路由守衛
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.token
  if (to.path === '/login' || to.path === '/register') {
    next()
  } else {
    isLogin ? next() : next('/login')
  }
})

export default router
