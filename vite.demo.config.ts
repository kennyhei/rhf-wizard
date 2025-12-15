import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    // Base path used in index.html
    base: "/rhf-wizard",
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    define: {
      "process.env.NODE_ENV": JSON.stringify(mode),
    },
    plugins: [tailwindcss(), react()],
    build: {
      minify: true,
      cssMinify: true,
      lib: {
        entry: path.resolve(__dirname, "demo/main.tsx"),
        name: "rhf-wizard",
        formats: ["es"],
        fileName: (format) => `rhf-wizard.${format}.js`,
      },
      rollupOptions: {
        input: {
          app: "./index.html",
        },
      },
    },
  };
});
