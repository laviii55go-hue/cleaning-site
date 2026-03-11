import type { APIRoute } from 'astro';

const getRobotsTxt = (sitemapUrl: string) => `User-agent: *
Allow: /

# Google AdSense クローラーを許可
User-agent: Mediapartners-Google
Allow: /

# サイトマップ
Sitemap: ${sitemapUrl}
`;

export const GET: APIRoute = ({ site }) => {
  const base = site ? (typeof site === 'string' ? site : site.href) : 'https://example.com';
  const sitemapUrl = new URL('sitemap-index.xml', base).href;
  return new Response(getRobotsTxt(sitemapUrl), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
