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
  build: {
    rollupOptions: {
      input: {
        inicio: fileURLToPath(new URL('./index.html', import.meta.url)),
        nosotros: fileURLToPath(new URL('./nosotros.html', import.meta.url)),
        proyectos: fileURLToPath(new URL('./proyectos.html', import.meta.url)),
        patrimonio: fileURLToPath(new URL('./patrimonio.html', import.meta.url)),
        escuela: fileURLToPath(new URL('./escuela.html', import.meta.url)),
        recursos: fileURLToPath(new URL('./recursos.html', import.meta.url))
      },
    },
  },
});
