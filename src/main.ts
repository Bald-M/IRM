import '@/assets/main.css'
import 'element-plus/dist/index.css'
//import '@/styles/element/index.scss'
import '@/assets/theme.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import ElementPlus from 'element-plus'
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

app.use(ElementPlus)
app.use(createPinia())
app.use(router)
app.mount('#app')
