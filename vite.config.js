import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // Opens the browser automatically
  },
  build: {
    target: "esnext", // Ensure the output is compatible with modern browsers
  },
});
