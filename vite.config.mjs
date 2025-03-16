import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  plugins: [
    tailwindcss(),
    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 75 },
      webp: { quality: 80 },
      avif: { quality: 70 },
      svg: {
          plugins: [
              { name: 'removeViewBox', active: false },
              { name: 'sortAttrs' },
          ],
      },
  }),
  ],
})
