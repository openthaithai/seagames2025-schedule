import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({  
  plugins: [react()],
  base: '/seagame2025',
  server: {
    port: 8080
  }
})
