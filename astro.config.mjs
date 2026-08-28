import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://sectorvault.example.com',
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN', 'zh-TW', 'en', 'ja'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        // @gitee/typescript-sdk-v5 生成代码需要的共享 client 实例由垫片提供
        '@hey-api/client-axios': fileURLToPath(
          new URL('./src/lib/adapters/hey-api-client-axios-shim.ts', import.meta.url),
        ),
      },
    },
  },
});
