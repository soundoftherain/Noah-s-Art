import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // or "/Noah-s-Art/" if you're using GitHub Pages only (not custom domain)
  build: {
    outDir: "dist",
  },
  server: {
    port: 5173,
  },
});
