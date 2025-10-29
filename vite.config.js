import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/sohail-portfolio/', // 👈 Must match your repo name exactly
  build: {
    outDir: 'dist',
  },
});
