// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Add this line
  build: {
    outDir: "dist",
    assetsInlineLimit: 0,
  },
});
