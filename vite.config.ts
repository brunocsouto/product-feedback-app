import { defineConfig } from 'vite'
import { imagetools } from 'vite-imagetools'
import react from '@vitejs/plugin-react'

import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  root: '.',
  plugins: [react()], 
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './assets'),
      '@components': path.resolve(__dirname, './src/components')
    }
  }
})
