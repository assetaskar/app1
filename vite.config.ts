import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 5001,
  },
  build: {
    rollupOptions: {
      input: "src/main.ts",
      output: {
        format: "system",
        entryFileNames: '[name].js',
      },
      preserveEntrySignatures: 'strict'
    },
  },
  plugins: [vue({
    template: {
      transformAssetUrls: {
        base: "/src",
      },
    },
  })],
})
