import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true
    })
  ],
  resolve: {
    alias: [
      { find: '@components', replacement: '/src/components' },
      { find: '@constants', replacement: '/src/constants' },
      { find: '@icons', replacement: '/src/icons' },
      { find: '@styles', replacement: '/src/styles' }
    ]
  },
  server: {
    open: true
  }
})
