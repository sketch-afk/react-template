import { defineConfig } from 'vite';

export default defineConfig({
  esbuild: {
    jsx: 'transform',
    jsxFactory: 'createElement',
    jsxFragment: 'Fragment',
  },
  
  // This forces the initial "First Boot" scanner to use the exact same rules!
  optimizeDeps: {
    esbuildOptions: {
      jsx: 'transform',
      jsxFactory: 'createElement',
      jsxFragment: 'Fragment',
    }
  },
});