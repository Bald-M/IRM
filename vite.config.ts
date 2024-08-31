import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
  // CORS 
})


// server: {
//   host: '0.0.0.0',
//   port: import.meta.env.VITE_APP_PORT,
//   proxy: {
//     'api': {
//       target: import.meta.env.VITE_APP_API_BASEURL,
//       changeOrigin: true,
//       rewrite: (path) => path.replace(/^\/api/, '')
//     }
//   }
// }
