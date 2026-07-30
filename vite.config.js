import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/',
  root: 'src',
  publicDir: '../public',
  build: {
    outDir: '../',
    emptyOutDir: false, // Prevents wiping the root directory!
  }
})
