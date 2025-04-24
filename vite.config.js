import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/TaleRouterDom/', // Set this to your deployment path
  plugins: [react()],
});