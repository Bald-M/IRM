import router from '../router'
import { useAuthStore } from '../stores/auth'

router.beforeEach(async (to, from) => {
  const authStore = useAuthStore()
  // Restore the auth data from localStorage if page is reloaded
  authStore.restoreAuthData()
  // Use the authKey from the store
  const isLogin = authStore.authKey
  const userType = authStore.user_type
  const whiteList = ['/login', '/registration', '/home', '/reset-password/request']

  if (whiteList.includes(to.path)) {
    return true
  } else {
    // 只有从/registration且post成功后才能访问
    if (to.path === '/emailVerification' && (from.path === '/registration' || from.path === '/login') && authStore.server_ref !== '') {
      return true
    }

    if (to.path === '/resetPassVerification' && from.path === '/reset-password/request' && authStore.server_ref !== '') {
      // 只能从 /reset-password/request 访问
      return true
    }

    if (to.path === '/reset-password/reset' && from.path === '/resetPassVerification') {
      // 只能从 /resetPassVerification 访问
      return true
    }

    // Student
    if (isLogin) {

      const roleBasedRoutes: Record<string, string> = {
        '/student': 'Student',
        '/client': 'Industry',
        '/admin': 'Admin'
      }

      for (const prefix in roleBasedRoutes) {
        if (to.path.startsWith(prefix) && userType !== roleBasedRoutes[prefix]) {
          return { name: 'unauthorized' };
        }
      }


      return true
    }

    return { name: 'login' }
  }

})