import type { APIContext } from 'astro';

export function GET({ url }: APIContext) {
  const sitemap = new URL('sitemap-index.xml', url).href;

  return new Response(
    `User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
}
