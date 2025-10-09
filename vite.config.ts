import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Noah-s-Art/", // <--- Add this line
  server: {
    port: 5173,
  },
});
