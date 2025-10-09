import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // use root since noahsprotocol.com is the main domain
  server: {
    port: 5173,
  },
});
