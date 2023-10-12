// vue3 框架提供的 createApp 方法，可以用来创建应用实例
import { createApp } from 'vue'
// 引入根组件 App
import App from '@/App.vue'

import '@/style/reset.scss'

// 引入全局组件
import HospitalTop from '@/components/hospital-top/index.vue'
import HospitalBottom from '@/components/hospital-bottom/index.vue'

// 引入路由
import router from '@/router'

// 创建应用实例
const app = createApp(App)

// 注册全局组件
app.component('HospitalTop', HospitalTop)
app.component('HospitalBottom', HospitalBottom)

// 安装路由插件
app.use(router)

// 挂载
app.mount('#app')
