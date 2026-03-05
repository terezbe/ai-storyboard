import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react(), tailwindcss()],
    server: {
      host: true,
      proxy: {
        '/api/fal': {
          target: 'https://fal.run',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/fal/, ''),
          configure: (proxy) => {
            proxy.on('proxyReq', (proxyReq, req) => {
              const browserAuth = req.headers['authorization'];
              if (browserAuth) {
                proxyReq.setHeader('Authorization', browserAuth);
              } else if (env.FAL_KEY && env.FAL_KEY !== 'your-key-here') {
                proxyReq.setHeader('Authorization', `Key ${env.FAL_KEY}`);
              }
            });
          },
        },
        '/api/claude': {
          target: 'https://api.anthropic.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/claude/, ''),
          configure: (proxy) => {
            proxy.on('proxyReq', (proxyReq, req) => {
              // Read key from custom header sent by browser, then remove it
              const browserKey = req.headers['x-claude-key'] as string | undefined;
              if (browserKey) {
                proxyReq.setHeader('x-api-key', browserKey);
                proxyReq.removeHeader('x-claude-key');
              } else if (env.CLAUDE_API_KEY && env.CLAUDE_API_KEY !== 'your-key-here') {
                proxyReq.setHeader('x-api-key', env.CLAUDE_API_KEY);
              }
              proxyReq.setHeader('anthropic-version', '2023-06-01');
              // Remove browser-origin headers that trigger CORS rejection
              proxyReq.removeHeader('origin');
              proxyReq.removeHeader('referer');
            });
          },
        },
      },
    },
  };
});
