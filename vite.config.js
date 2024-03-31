import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': '/assets',
      'jquery': path.resolve('./public/assets/js/jquery.min.js'),
      'bootstrap.bundle': path.resolve('./public/assets/js/bootstrap.bundle.min.js')
    }
  }
})