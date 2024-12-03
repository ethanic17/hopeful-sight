import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: "./src/__tests__/setup.js", // Setup files (if any)
    coverage: {
      reporter: ["text", "json", "html"],
      exclude: ["**/__tests__/**", "**/test_data/**", "*.config.*"],
    },
  },
});
