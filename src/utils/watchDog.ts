import { useAuthStore } from '../stores/auth'
import axios from 'axios'


// Function to check if the token is expired
const checkTokenExpiration = async (authStore: any) => {
  try {
    const app_uid = authStore.uid

    if (!app_uid) {
      return
    }

    const response = await axios.post(import.meta.env.VITE_APP_API_URL + '/api/getTokenExpirationDate', { app_user_id: app_uid }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const expirationDate = new Date(response.data.expiration_date)

    // Get current time in seconds
    const currentTime = new Date()


    if (expirationDate < currentTime) {
      alert('Token expired. Please login again')
      authStore.clearAuthData()
      window.location.reload()
    } else {
      console.log('Token is valid until:', expirationDate)
    }
  } catch (error) {
    // Catch any errors while decoding the token
    console.error('Error decoding token:', error)
    // alert('An error occurred while checking the token expiration.');
  }
}

// The watcher function checks token expiration at intervals
const watcher = async (intervalMinutes: number) => {
  const authStore = useAuthStore()
  // Restore authentication data from the store
  authStore.restoreAuthData()

  // Immediately check the token status on initialization
  await checkTokenExpiration(authStore)

  // Convert the interval time from minutes to milliseconds
  const intervalMillis = intervalMinutes * 60 * 1000

  // Set an interval to check the token status periodically
  setInterval(async () => {
    console.log('Checking token expiration...')
    await checkTokenExpiration(authStore)
  }, intervalMillis)

}

// Export the function for use in other module
export default watcher