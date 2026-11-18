import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/Kiruthika-portfolio/",
  publicDir: "public",
  build: {
    copyPublicDir: true,
  },
});