import { createRouter, createWebHistory } from 'vue-router'

// 创建并导出路由器实例
export default createRouter({
    // 选择 history 模式（url里没有#）
    history: createWebHistory(),
    // 管理路由
    routes: [
        {
            path: '/home',
            component: () => import('@/views/home/index.vue')
        },
        {
            path: '/hospital',
            component: () => import('@/views/hospital/index.vue')
        },
        // 路由重定向
        {
            path: '/',
            redirect: '/home'
        }
    ]
})