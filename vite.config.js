import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      manifest: {
        name: 'Journal App',
        short_name: 'Mi PWA',
        description: 'Una increíble app de notas.',
        theme_color: '#ffffff', // Color de la barra de navegación
        background_color: '#ffffff', // Color de fondo
        icons: [
          {
            src: './src/assets/vite.svg', // Ruta al ícono de la PWA
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: './src/assets/vite.svg', // Ruta al ícono de la PWA
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
})
