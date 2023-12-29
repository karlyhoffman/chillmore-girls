import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/static';

const isDev = import.meta.env.DEV;

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: vercel({
    webAnalytics: {
      enabled: !isDev,
    },
  }),
});
