import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        contacto: resolve(__dirname, "contacto.html"),
        educacion: resolve(__dirname, "educacion.html"),
        experiencia: resolve(__dirname, "experiencia.html"),
        proyectos: resolve(__dirname, "proyectos.html"),
      },
    },
  },
});
