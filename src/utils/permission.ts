import router from '../router'
import { useAuthStore } from '../stores/auth'

const setupRouterGuard = () => {
  router.beforeEach(async (to, from) => {
    const authStore = useAuthStore()
    // Restore the auth data from localStorage if page is reloaded
    authStore.restoreAuthData()

    // Check if the user is logged in using the authKey from the store
    const isLogin = authStore.authKey
    const userType = authStore.user_type

    // Define a whitelist of routes that can be accessed without authentication
    const whiteList = ['/login', '/registration', '/home', '/requestResetPassword']

    // Allow access to routes in the whitelist
    if (whiteList.includes(to.path)) {
      return true
    } else {
      // Allow access to /emailVerification only if navigating from /registration or /login
      // and the server_ref has been set (after successful registration)
      if (to.path === '/emailVerification' && (from.path === '/registration' || from.path === '/login') && authStore.server_ref !== '') {
        return true
      }

      // Allow access to /resetPassVerification only if navigating from /requestResetPassword
      // and the server_ref is set
      if (to.path === '/resetPassVerification' && from.path === '/requestResetPassword' && authStore.server_ref !== '') {
        return true
      }

      // Allow access to /resetPassword only if navigating from /resetPassVerification
      if (to.path === '/resetPassword' && from.path === '/resetPassVerification') {
        return true
      }

      // Check if the user is logged in
      if (isLogin) {
        // Define role-based routing logic based on the user's role
        const roleBasedRoutes: Record<string, string> = {
          '/student': 'Student',
          '/client': 'Industry',
          '/admin': 'Admin'
        }

        // Restrict access to role-specific routes based on the user's type
        for (const prefix in roleBasedRoutes) {
          if (to.path.startsWith(prefix) && userType !== roleBasedRoutes[prefix]) {
            return { name: 'unauthorized' };
          }
        }

        // Allow access if the role matches
        return true
      }

      // If the user is not logged in, redirect to the login page
      return { name: 'login' }
    }

  })
}
// Exports the function for use in other modules
export default setupRouterGuard