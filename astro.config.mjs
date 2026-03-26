// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// 本番URL: Vercel の Environment Variables で PUBLIC_SITE_URL を設定するのが理想。
// ただし未設定だと sitemap / robots / canonical が example.com になり Search Console が壊滅するため、
// 既定値は実際の本番URLに寄せる（必要に応じて PUBLIC_SITE_URL で上書き）。
const siteUrl = import.meta.env.PUBLIC_SITE_URL || 'https://cleaning-site-lac.vercel.app';

export default defineConfig({
  site: siteUrl,
  integrations: [sitemap()],
});