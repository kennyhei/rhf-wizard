import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import terser from '@rollup/plugin-terser'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      }
    },
    plugins: [
      react(),
      dts()
    ],
    // Exclude "public" folder from production build
    publicDir: mode === 'development' ? 'public' : false,
    build: {
      minify: true,
      cssMinify: true,
      sourcemap: true,
      lib: {
        entry: path.resolve(__dirname, 'src/index.ts'),
        name: 'react-formik-step-wizard',
        formats: ['es'],
        fileName: (format) => `react-formik-step-wizard.${format}.js`
      },
      rollupOptions: {
        // Excludes react from build file
        external: ['react', 'react-dom', 'formik'],
        output: {
          globals: {
            react: 'React'
          }
        },
        plugins: [terser()]
      }
    }
  }
})
