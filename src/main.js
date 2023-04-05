import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import request from './utils/request'
import storage from './utils/storage'

const app = createApp(App)
// 全局挂载
app.config.globalProperties.$request = request;
app.config.globalProperties.$storage = storage;

app.use(router)
app.mount('#app')
