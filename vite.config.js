import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@certs": path.resolve(__dirname, "src/certs.js"),
      "@assets": path.resolve(__dirname, "src/assets.js"),
      "@reducers": path.resolve(__dirname, "src/redux/reducers"),
      "@icons": path.resolve(__dirname, "src/assets/icons"),
      "@compo": path.resolve(__dirname, "src/components"),
      "@bgs": path.resolve(__dirname, "src/assets/backgrounds"),
    },
  },
});
