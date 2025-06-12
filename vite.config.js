import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss({
    darkMode: 'class',
    // other Tailwind CSS configurations...
  })],
  server: {
    proxy: {
      // Proxy API requests starting with /api to your ngrok URL
      '/api': {
        target: 'https://accb-2401-4900-4e66-be54-dcb3-415f-d160-6022.ngrok-free.app',
        changeOrigin: true,
        secure: false,
        // Optionally, rewrite the path if needed:
        // rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
    allowedHosts: [
      'a837-106-51-68-87.ngrok-free.app'
    ],
  },
})

