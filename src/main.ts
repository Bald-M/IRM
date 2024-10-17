import '@/assets/main.css'
import 'element-plus/dist/index.css'
//import '@/styles/element/index.scss'
import '@/assets/theme.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import ElementPlus from 'element-plus'
import axios from './utils/http'
import watcher from './utils/watchDog'
import './utils/permission'
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

app.config.globalProperties.$axios = axios
app.provide('$axios', axios)

//console.log(import.meta.env)

app.use(ElementPlus)
app.use(createPinia())
app.use(router)
app.mount('#app')

watcher(1)
