import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    // Base path used in index.html
    base: '/react-hook-form-step-wizard',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      }
    },
    define: {
      'process.env.NODE_ENV': JSON.stringify(mode)
    },
    plugins: [
      react()
    ],
    build: {
      minify: true,
      cssMinify: true,
      lib: {
        entry: path.resolve(__dirname, 'demo/main.tsx'),
        name: 'react-hook-form-step-wizard',
        formats: ['es'],
        fileName: (format) => `react-hook-form-step-wizard.${format}.js`
      },
      rollupOptions: {
        input: {
          app: './index.html'
        }
      }
    }
  }
})
