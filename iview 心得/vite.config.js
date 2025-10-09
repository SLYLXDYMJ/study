import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~': fileURLToPath(new URL('./node_modules', import.meta.url))
    },
  },
  css: {
    // 在开发过程中是否启用 sourcemap（方便定位 less scss 样式位置）
    devSourcemap: true,
    
    //预处理器配置项
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      },
      scss: {}
    }
  }
})
