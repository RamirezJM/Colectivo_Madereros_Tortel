// vite.config.js
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        /*  silenceDeprecations: ['import', 'mixed-decls', 'color-functions', 'global-builtin'], */
        quietDeps: true, // silencia warnings que vienen de node_modules (Bootstrap, etc.)
      },
    },
  },
});
