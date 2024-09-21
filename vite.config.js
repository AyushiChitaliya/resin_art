import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      'slick-carousel/slick/slick.css',
      'slick-carousel/slick/slick-theme.css'
    ],
  },
  build: {
    rollupOptions: {
      external: ['slick-carousel/slick/slick.css', 'slick-carousel/slick/slick-theme.css'],
    },
  },
});
