import https from "https"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/v1": {
        target: "https://my-delivery-app-api.onrender.com",
        changeOrigin: true,
        secure: false,
        agent: new https.Agent(),
      },
    },
  },
})
