import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import basicSsl from "@vitejs/plugin-basic-ssl";

export default defineConfig({
  plugins: [react(), basicSsl()],
  base: "/janmashtami-fancy-dress/",
  server: {
    host: "0.0.0.0",
    https: true,
  },
});
