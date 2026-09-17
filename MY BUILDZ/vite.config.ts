import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, "index.html"),       
        project2: resolve(import.meta.dirname, "Main_Project_2.html"), 
        project3: resolve(import.meta.dirname, "Resturant.html"), 
      },
    },
  },
});
