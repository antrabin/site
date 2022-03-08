import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import WindiCss from "vite-plugin-windicss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), WindiCss()],
});
