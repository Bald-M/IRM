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
      path: '/student/application',
      name: 'studentApplication',
      component: () => import('@/views/student/ApplicationView.vue'),
      meta: { requireAuth: true, role: 'Student' }
    },
    {
      path: '/student/profile',
      name: 'studentProfile',
      component: () => import('@/views/student/ProfileView.vue'),
      meta: { requireAuth: true, role: 'Student' }
    },
    {
      path: '/auth',
      redirect: '/login',
      component: () => import('@/views/login/AuthLayout.vue'),
      children: [
        {
          path: '/login',
          name: 'login',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('@/views/login/LoginView.vue')
        },
        {
          path: '/registration',
          name: 'registration',
          component: () => import('@/views/login/RegistrationView.vue')
        },
        {
          path: '/requestResetPassword',
          name: 'requestResetPassword',
          component: () => import('@/views/login/RequestResetPasswordView.vue')
        },
        {
          path: '/resetPassVerification',
          name: 'resetPassVerification',
          component: () => import('@/views/login/ResetPassVerificationView.vue')
        },
        {
          path: '/resetPassword',
          name: 'resetPassword',
          component: () => import('@/views/login/ResetPasswordView.vue')
        }
      ]
    },
    // {
    //   path: '/reset-password/request',
    //   name: 'requestResetPassword',
    //   component: () => import('@/views/RequestResetPasswordView.vue')
    // },
    // {
    //   path: '/reset-password/reset',
    //   name: 'ResetPassword',
    //   component: () => import("@/views/login/ResetPasswordView.vue")
    // },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/admin/panel',
      redirect: '/admin/panel/studentsList',
      name: 'adminHome',
      component: () => import('@/views/admin/PanelView.vue'),
      meta: { requireAuth: true, role: 'Admin' },
      children: [
        {
          path: '/admin/panel/studentsList',
          name: 'studentsList',
          component: () => import('@/views/admin/StudentsListView.vue')
        },
        // Dynamic Router
        // If Bob id is 123, when admin click on Bob, the router redirect to /admin/panel/studentsList/123
        // StudentsDetailView.vue accept id as props
        {
          path: '/admin/panel/studentsList/:id',
          name: 'studentDetails',
          component: () => import('@/views/admin/StudentsDetailsView.vue'),
          // Allow Router Parameter
          props: true
        }
      ]
    },
    {
      path: '/client/panel',
      redirect: '/client/panel/candidatesList',
      component: () => import('@/views/client/PanelView.vue'),
      meta: { requireAuth: true, role: 'Industry' },
      children: [
        {
          path: '/client/panel/candidatesList',
          name: 'candidateList',
          component: () => import('@/views/client/CandidatesListView.vue')
        }
      ]
    },
    {
      path: '/emailVerification',
      name: 'emailVerification',
      component: () => import('@/views/EmailVerificationView.vue')
    },
    // {
    //   path: '/resetPassVerification',
    //   name: 'resetPassVerificat@/views/login/ResetPassVerificationView.vue',
    //   component: () => import('@/views/ResetPassVerificationView.vue')
    // },
    {
      path: '/unauthorized',
      name: 'unauthorized',
      component: () => import('@/views/401View.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('@/views/404View.vue')
    }
  ]
})

// child

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
