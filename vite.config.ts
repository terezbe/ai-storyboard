import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react(), tailwindcss()],
    server: {
      proxy: {
        '/api/fal': {
          target: 'https://fal.run',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/fal/, ''),
          configure: (proxy) => {
            proxy.on('proxyReq', (proxyReq, req) => {
              // Use browser-sent Authorization if present, otherwise fall back to .env key
              const browserAuth = req.headers['authorization'];
              if (browserAuth) {
                proxyReq.setHeader('Authorization', browserAuth);
              } else if (env.FAL_KEY && env.FAL_KEY !== 'your-key-here') {
                proxyReq.setHeader('Authorization', `Key ${env.FAL_KEY}`);
              }
            });
          },
        },
      },
    },
  };
});
