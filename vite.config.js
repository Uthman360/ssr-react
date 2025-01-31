import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    ssr: true, // Enable SSR build
    rollupOptions: {
      input: "./src/entry-server.jsx", // Specify SSR entry point
    },
  },
});
