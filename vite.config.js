import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import eslintPlugin from "vite-plugin-eslint";

// export default defineConfig({
//   plugins: [react(), eslintPlugin()],
//   optimizeDeps: {
//     include: ["@tanstack/react-query-devtools"],
//   },
// });

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["@tanstack/react-query-devtools"],
  },
});
