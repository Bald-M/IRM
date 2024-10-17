import { useAuthStore } from '../stores/auth'
import { jwtDecode } from 'jwt-decode'

// Function to check if the token is expired
const checkTokenExpiration = (token: string, authStore: any) => {
  try {
    // Get current time in seconds
    const currentTime = Math.floor(Date.now() / 1000)

    if (token) {
      // Decode the token
      const decoded: any = jwtDecode(token)
      console.log('Decoded token:', decoded)

      // Check if the token has a valid expiration time and if it is expired
      if (decoded.exp && decoded.exp < currentTime) {
        alert('Token expired. Please login again')
        // Clear the authentication data if the token is expired
        authStore.clearAuthData()
        window.location.reload()
      }
    } else {
      console.log('No valid authKey found.')
    }
  } catch (error) {
    // Catch any errors while decoding the token
    console.error('Error decoding token:', error)
  }
}

// The watcher function checks token expiration at intervals
const watcher = (intervalMinutes: number) => {
  const authStore = useAuthStore()
  // Restore authentication data from the store
  authStore.restoreAuthData()

  const token = authStore.authKey

   // Immediately check the token status on initialization
  checkTokenExpiration(token, authStore)

  // Convert the interval time from minutes to milliseconds
  const intervalMillis = intervalMinutes * 60 * 1000

  // Set an interval to check the token status periodically
  setInterval(() => {
    console.log('Checking token expiration...')
    const token = authStore.authKey
    checkTokenExpiration(token, authStore)
  }, intervalMillis)
}

export default watcher