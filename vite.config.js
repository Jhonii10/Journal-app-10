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
          workbox: {
            globPatterns: ['**/*.{js,css,html,ico,png,svg,json,vue,txt,woff2}']
        },
          manifest: {
            name: 'Journal App',
            short_name: 'Mi PWA',
            description: 'Una increíble app de notas.',
            theme_color: '#ffffff', // Color de la barra de navegación
            background_color: '#ffffff', // Color de fondo
            icons: [
              {
                src: 'src/assets/vite.svg', // Ruta absoluta al ícono de la PWA
                sizes: '192x192',
                
              },
              {
                src: 'src/assets/vite.svg', // Ruta absoluta al ícono de la PWA
                sizes: '512x512',
                
              },
            ],
          },
        }),
      ],
    })
