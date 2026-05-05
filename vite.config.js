import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

export default defineConfig(({ mode }) => {
  const isDev = mode === 'development';
  let httpsConfig = false;

  if (isDev) {
    try {
      const currentDir = path
        .dirname(new URL(import.meta.url).pathname)
        .replace(/^\/([A-Za-z]:)/, '$1');

      httpsConfig = {
        key: fs.readFileSync(path.resolve(currentDir, 'localhost-key.pem')),
        cert: fs.readFileSync(path.resolve(currentDir, 'localhost.pem')),
      };
    } catch {
      console.warn('mkcert files not found, running without HTTPS');
    }
  }

  return {
    plugins: [react()],
    server: {
      port: 5173,
      https: httpsConfig,
    },
    build: {
      outDir: 'build',
    },
  };
});
