// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// 本番URL: Vercel の PUBLIC_SITE_URL または環境変数で設定（例: https://cleaning-site-xxx.vercel.app）
const siteUrl = import.meta.env.PUBLIC_SITE_URL || 'https://example.com';

export default defineConfig({
  site: siteUrl,
  integrations: [sitemap()],
});