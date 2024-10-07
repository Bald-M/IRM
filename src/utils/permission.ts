import router from '../router'
import { jwtDecode } from 'jwt-decode'
import { useAuthStore } from '../stores/auth'

router.beforeEach(async (to, from) => {
  const authStore = useAuthStore()
  // Restore the auth data from localStorage if page is reloaded
  authStore.restoreAuthData()
  // Use the authKey from the store
  const isLogin = authStore.authKey
  const userType = authStore.user_type
  // 如果用户未登录
  if (!isLogin) {
    // 允许访问登录、注册或主页
    if (to.path === '/login' || to.path === '/registration' || to.path === '/home' || to.path === '/reset-password/request' || to.path === '/emailVerification') {
      if (to.path === '/emailVerification' && (from.path !== '/login' && from.path !== '/registration')) {
        return { name: 'login' }
      }
      return true
    }
    // Redirect to login
    return { name: 'login' }
  } else {
    const decodedToken = jwtDecode(authStore.authKey)
    const currentTime = Date.now() / 1000
    if (!decodedToken.exp) {
      authStore.clearAuthData()
      return { name: 'login' }
    }
    // If token has expired
    if (decodedToken.exp < currentTime) {
      authStore.clearAuthData()
      return { name: 'login' }
    }
  }


  // 如果用户已登录，但其角色不匹配访问的路由权限，重定向到 unauthorized 页面
  if (isLogin && to.meta.requireAuth && to.meta.role !== userType) {
    return { name: 'unauthorized' }
  }

  // In other cases, continue navigation
  return true
})