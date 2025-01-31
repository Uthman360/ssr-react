import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist/client", // Client-side build output directory
    emptyOutDir: true, // Clear output directory before build
  },
});
