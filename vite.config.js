import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', 'src/assets/*'], // Añade los activos necesarios aquí
      manifest: {
        name: 'Journal App',
        short_name: 'Mi PWA',
        description: 'Una increíble app de notas.',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        icons: [
          {
            src: '/src/assets/vite.svg', // Ruta relativa al directorio público
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/src/assets/vite.svg', // Ruta relativa al directorio público
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});

