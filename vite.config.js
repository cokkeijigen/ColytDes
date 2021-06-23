import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  server: {
    proxy: {
      '/bili': {
        target: 'https://www.bilibili.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/bili/, '')
      },
    }
  }
})
