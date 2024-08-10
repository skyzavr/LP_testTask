import path from 'path';
import { defineConfig } from 'vite';
export default defineConfig({
  build: {
    outDir: '../dist',
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@widgets': path.resolve(__dirname, 'src/widgets'),
      '@data': path.resolve(__dirname, 'src/js/data'),
      '@helpers': path.resolve(__dirname, 'src/js/helpers'),
    },
  },
  server: {
    port: 8080,
  },
});
