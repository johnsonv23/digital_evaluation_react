import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

export default defineConfig(({ mode }) => {
  const isDev = mode === 'development';

  // Properly resolve current directory in ESM (Windows safe)
  const currentDir = path.dirname(new URL(import.meta.url).pathname).replace(/^\/([A-Za-z]:)/, '$1');

  return {
    plugins: [react()],
    server: isDev
      ? {
          port: 5173,
          https: {
            key: fs.readFileSync(path.resolve(currentDir, 'localhost-key.pem')),
            cert: fs.readFileSync(path.resolve(currentDir, 'localhost.pem')),
          },
        }
      : {
          port: 5173, // ignored by Vercel
        },
    build: {
      outDir: 'build', // Vercel expects this
    },
  };
});
