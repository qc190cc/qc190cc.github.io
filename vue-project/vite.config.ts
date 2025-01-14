import { fileURLToPath, URL } from 'node:url'
import { defineConfig, ConfigEnv, UserConfig } from "vite";

import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  return {
      base: mode === 'production' ? '/dist' : '',
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
      outDir: "../dist",
      minify: "esbuild"
    }
  }
});
