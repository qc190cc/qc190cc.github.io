import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  console.log('🚀 ~ mode:', mode)
  return {
      base: mode === 'production' ? '/disttest' : '',
      plugins: [
      vue(),
      vueDevTools(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
    },
    build: {
      emptyOutDir: true,
      outDir: "../disttest",
      minify: "esbuild"
    }
  }
})
