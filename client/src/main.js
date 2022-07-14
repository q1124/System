import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// plugin
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import axios from 'axios'

const app = createApp(App)

// vue3 import axios
app.config.globalProperties.$axios = axios

app.use(ElementPlus).use(store).use(router).mount('#app')

// createApp(App).use(store).use(router).mount('#app')
