import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {},
  },
<<<<<<< HEAD
  base: '/chat/',
=======
>>>>>>> 74b696ecb0184db7ffe4d4f5543c92d5b87042db
});
