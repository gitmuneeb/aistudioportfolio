
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Replace 'aistudioportfolio' with your actual repository name if it differs
  base: '/aistudioportfolio/',
  define: {
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY || ''),
  },
  build: {
    outDir: 'dist',
  }
});