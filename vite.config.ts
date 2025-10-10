import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // ensures the build goes into dist
  },
  server: {
    port: 5173,
  },
});
