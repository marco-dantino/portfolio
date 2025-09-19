import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "contacto.html"),
        about: resolve(__dirname, "educacion.html"),
        about: resolve(__dirname, "experiencia.html"),
        about: resolve(__dirname, "servicio.html"),
      },
    },
  },
});
