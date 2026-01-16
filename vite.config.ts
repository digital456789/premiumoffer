import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/premiumoffer/', // Yeh aapki repository ka naam hai
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
