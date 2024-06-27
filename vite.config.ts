import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.GITHUB_PAGES ? 'gh-pages-react' : './',
  plugins: [react()],
  server: { port: 3000 },
})
