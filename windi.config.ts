import { defineConfig } from "vite-plugin-windicss";

export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
});
