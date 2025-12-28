import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Is line ko dhyan se dekhein, repo name ke aage-piche slash hona zaroori hai
  base: '/my-portfolio/', 
})