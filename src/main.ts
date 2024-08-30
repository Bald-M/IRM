import '@/assets/main.css'
import 'element-plus/dist/index.css'
//import '@/styles/element/index.scss'
import '@/assets/theme.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import ElementPlus from 'element-plus'
import axios from 'axios'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.config.globalProperties.$router = router
app.provide('$router', router)

//axios.defaults.baseURL = 'http://47.250.88.49:7001/'
axios.defaults.baseURL = 'http://127.0.0.1:7001/'
app.provide('$axios', axios)

app.use(ElementPlus)
app.use(createPinia())
app.use(router)
app.mount('#app')
