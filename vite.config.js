import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()

  ],
<<<<<<< HEAD
  base: process.env.VITE_BASE_PATH || "/nist_match",
=======
>>>>>>> temp-backup
})
