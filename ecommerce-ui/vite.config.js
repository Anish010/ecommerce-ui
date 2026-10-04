import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
 
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: { port: 3000, strictPort: true }, // gateway CORS allows only :3000
  test: { environment: 'jsdom', setupFiles: './src/test/setup.js', globals: true },
});
