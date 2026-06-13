import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  site: "https://resume-com.khurmiprateek3.workers.dev",
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
})
