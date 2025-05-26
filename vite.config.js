// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills'; // Import the plugin

export default defineConfig({
  plugins: [
    react(),
    nodePolyfills(), // Add the plugin here
  ],
  // You might not need 'define' or 'resolve.alias' for global/buffer explicitly
  // if nodePolyfills handles them. Keep them if issues persist.
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: 'globalThis', // This helps with 'global is not defined'
      },
    },
  },
});