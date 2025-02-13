import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import vercel from "solid-start-vercel";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss(), solidPlugin({ adapter: vercel() })],
  server: {
    port: 3434,
  },
  build: {
    target: "esnext",
  },
});
