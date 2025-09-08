import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/aayushraina3.github.io/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  server: {
    fs: {
      strict: false,
    },
  },
})
