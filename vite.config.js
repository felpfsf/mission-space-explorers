import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  root: './',
  publicDir: 'assets',
  server: { host: true },
  plugins: [react()]
})
