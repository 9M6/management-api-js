import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    copyPublicDir: false,
    lib: { entry: resolve(__dirname, "lib/main.ts"), formats: ["es"] },
    target: "esnext",
  },
  resolve: { alias: { src: resolve("lib/") } },
  plugins: [dts({ insertTypesEntry: true })],
});