import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// plugin
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(ElementPlus).use(store).use(router).mount('#app')

// createApp(App).use(store).use(router).mount('#app')
