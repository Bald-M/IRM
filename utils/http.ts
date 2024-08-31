import axios from 'axios'
import type { AxiosInstance, InternalAxiosRequestConfig, AxiosError } from 'axios'

// create an axios instance
const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  timeout: 5000
})

// Request Interceptors
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const url = config.url?.split('/')
    if (url && url[url.length - 1] !== 'login') {
      const token = localStorage.getItem('Token')
      if (token) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${token}`
        } as any
      }
    }
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

export default service