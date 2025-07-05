import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // atur base ke root agar routing dan asset jalan dengan benar
});
