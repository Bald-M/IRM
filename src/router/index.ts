import { createRouter, createWebHashHistory } from 'vue-router'

// history: createWebHistory(import.meta.env.BASE_URL),
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/student/home',
      name: 'studentHome',
      component: () => import('@/views/student/HomeView.vue')
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/LoginView.vue')
    },
    {
      path: '/registration',
      name: 'registration',
      component: () => import('@/views/RegistrationView.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/404View.vue')
    }
  ]
})

// Navigation Guard
// router.beforeEach(async (to) => {
//   const isLogin = localStorage.getItem('authToken')
//   // If the User is login
//   if (!isLogin) {
//     // 允许访问登录页面或注册页面
//     if (to.name === 'login' || to.name === 'registration') {
//       return true // 继续导航
//     } 
//     // 否则，重定向到登录页面
//     else {
//       return { name: 'login' }
//     }
//   } 
  
//   // 如果用户已经登录，且试图访问登录页面 （如果用户是学生）
//   if (isLogin && to.name === 'login') {
//     return { name: 'studentHome' }
//   }
  
//   // 其他情况下继续导航
//   return true

// })

export default router
