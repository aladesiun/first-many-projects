import react from '@vitejs/plugin-react'; // Import the Vite React plugin

import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()], // Use the Vite React plugin

  // Configure esbuild options
  esbuild: {
    jsxInject: `import React from 'react';`, // Ensure React is imported for JSX
  },
});
