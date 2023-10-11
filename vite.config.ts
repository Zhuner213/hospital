import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 引入 node 提供的内置模块 path：可以获取绝对路径
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  // src 文件夹配置别名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
