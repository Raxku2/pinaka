import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [preact(),
  tailwindcss(),
  VitePWA({
    registerType: 'autoUpdate', // Automatically updates the app when you push new code
    devOptions: {
      enabled: true // Allows you to test the offline mode in development!
    },
    workbox: {
      // Tells it what types of files to cache for offline use
      globPatterns: ['**/*.{js,css,html,ico,png,svg}']
    },
    manifest: {
      name: 'Pinaka',
      short_name: 'Pinaka',
      description: 'Rakesh Portfolio Website - Pinaka',
      theme_color: '#070f19',
      // Note: PWAs usually require at least a basic icon array here to be installable
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        }
      ]
    }
  }),
  ],
})
