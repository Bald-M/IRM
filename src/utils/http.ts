import axios from 'axios'
import type { AxiosInstance, InternalAxiosRequestConfig, AxiosError } from 'axios'

// create an axios instance with custom configuration
const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL, // Base URL for all API requests (from environment variables)
  timeout: 20000 // Request timeout set to 20 seconds
})

// Request Interceptors
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Extracts the endpoint from the request URL
    const url = config.url?.split('/')
    // If the request URL does not end with 'login', attach the Authorization token
    if (url && url[url.length - 1] !== 'login') {
      // Retrieves token from localStorage
      const token = localStorage.getItem('Token')
      if (token) {
        config.headers = {
          ...config.headers, // Preserves any existing headers
          Authorization: `Bearer ${token}` // Adds the Authorization header with the Bearer token
        } as any
      }
    }
    return config // Returns modified request configuration
  },
  (error: AxiosError) => {
    return Promise.reject(error) // Rejects the promise on request error
  }
)
// Exports the Axios instance with interceptors for use in other modules
export default service