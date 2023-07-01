import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    vue({
      css: true, // Dynamically inject css as a <style> tag
      compileTemplate: true, // Explicitly convert template to render function
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  base: "./",
  build: {
    outDir: "./lib",
    lib: {
      // the entry file that is loaded whenever someone imports
      // your plugin in their app
      entry: resolve(__dirname, "src/lib.js"),

      // the exposed global variable
      // is required when formats includes 'umd' or 'iife'
      name: "GutenTap",

      // the proper extensions will be added, ie:
      // name.js (es module)
      // name.umd.cjs) (common js module)
      // default fileName is the name option of package.json
      fileName: "guten-tap",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        name: "GutenTap",
        exports: "named",
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
