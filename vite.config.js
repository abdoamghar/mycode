import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,           // Allows using 'describe', 'it', 'expect' without importing them
    environment: 'jsdom',    // Simulates a browser environment
    setupFiles: './src/setupTests.js', // Optional: for custom matchers
  },
})