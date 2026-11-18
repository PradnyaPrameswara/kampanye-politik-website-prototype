import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

// Environment-aware deployment configuration
const isCloudflare = Boolean(process.env.CF_PAGES) || Boolean(process.env.CLOUDFLARE) || Boolean(process.env.CF_WORKER) || process.env.DEPLOY_TARGET === 'cloudflare';
const isGitHubPages = process.env.GITHUB_PAGES === 'true' || process.env.DEPLOY_TARGET === 'github-pages';

const defaultRepoOwner = 'PradnyaPrameswara';
const defaultRepoName = 'kampanye-politik-website-prototype';
const defaultCloudflareSite = 'https://kampanye-politik-website-prototype.agungpradnya7.workers.dev';

const repoOwner = process.env.GITHUB_REPOSITORY_OWNER ||
  (process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.split('/')[0] : defaultRepoOwner);
const repoName = process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.split('/')[1] : defaultRepoName;

// Determine site URL
const getSite = () => {
  if (process.env.ASTRO_SITE) return process.env.ASTRO_SITE;
  if (process.env.SITE) return process.env.SITE;
  if (isCloudflare && process.env.CF_PAGES_URL) return process.env.CF_PAGES_URL;
  if (isGitHubPages) return `https://${repoOwner.toLowerCase()}.github.io`;
  return defaultCloudflareSite;
};

// Determine base path
const getBase = () => {
  if (process.env.ASTRO_BASE !== undefined) return process.env.ASTRO_BASE;
  if (process.env.BASE_PATH !== undefined) return process.env.BASE_PATH;
  if (isCloudflare) return '/';
  if (isGitHubPages) return `/${repoName}`;
  return '/';
};

const site = getSite();
const base = getBase();

// Integration to ensure internal links, static assets, and redirects work under subpaths
function basePathRewriter(basePath, siteUrl) {
  const cleanBase = basePath ? basePath.replace(/\/+$/, '') : '';
  const siteOrigin = siteUrl ? new URL(siteUrl).origin : '';

  return {
    name: 'base-path-rewriter',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        if (!cleanBase || cleanBase === '') return;

        const distDir = fileURLToPath(dir);

        function prefixUrl(url) {
          if (!url || typeof url !== 'string') return url;
          if (
            url.startsWith('//') ||
            url.startsWith('http://') ||
            url.startsWith('https://') ||
            url.startsWith('mailto:') ||
            url.startsWith('tel:') ||
            url.startsWith('data:') ||
            url.startsWith('javascript:') ||
            url.startsWith('#')
          ) {
            return url;
          }
          if (url === '/') return cleanBase + '/';
          if (url.startsWith('/')) {
            if (url.startsWith(cleanBase + '/') || url === cleanBase) return url;
            return cleanBase + url;
          }
          return url;
        }

        function prefixSrcset(srcset) {
          return srcset
            .split(',')
            .map((part) => {
              const trimmed = part.trim();
              const spaceIdx = trimmed.indexOf(' ');
              if (spaceIdx === -1) return prefixUrl(trimmed);
              const u = trimmed.slice(0, spaceIdx);
              const desc = trimmed.slice(spaceIdx);
              return prefixUrl(u) + desc;
            })
            .join(', ');
        }

        function processHtml(content) {
          if (siteOrigin) {
            content = content.replace(
              /<link rel="canonical" href="([^"]+)"/g,
              (match, url) => {
                if (!url.startsWith(siteOrigin + '/')) return match;
                const relative = url.slice(siteOrigin.length);
                if (relative.startsWith(cleanBase + '/') || relative === cleanBase) return match;
                return `<link rel="canonical" href="${siteOrigin}${cleanBase}${relative}"`;
              },
            );
          }

          content = content.replace(/\bhref="([^"]+)"/g, (match, u) => `href="${prefixUrl(u)}"`);
          content = content.replace(/\bhref='([^']+)'/g, (match, u) => `href='${prefixUrl(u)}'`);

          content = content.replace(/\bsrc="([^"]+)"/g, (match, u) => `src="${prefixUrl(u)}"`);
          content = content.replace(/\bsrc='([^']+)'/g, (match, u) => `src='${prefixUrl(u)}'`);

          content = content.replace(/\bsrcset="([^"]+)"/g, (match, val) => `srcset="${prefixSrcset(val)}"`);
          content = content.replace(/\bsrcset='([^']+)'/g, (match, val) => `srcset='${prefixSrcset(val)}'`);

          content = content.replace(/\bcontent="0;url=([^"]+)"/g, (match, u) => `content="0;url=${prefixUrl(u)}"`);
          content = content.replace(/\bcontent="(\/[^"]+)"/g, (match, u) => `content="${prefixUrl(u)}"`);

          content = content.replace(/url\((['"]?)(\/[^'")]+)\1\)/g, (match, q, u) => {
            return `url(${q}${prefixUrl(u)}${q})`;
          });

          return content;
        }

        function processJs(content) {
          content = content.replace(/(["'])\/(images|icons|favicon\.png|apple-touch-icon\.png)/g, (m, q, p) => `${q}${cleanBase}/${p}`);
          content = content.replace(/(["'])\/(about|contact|team|blog|donate|join|objectives|member|post|program)(["'/?#])/g, (m, q, r, end) => `${q}${cleanBase}/${r}${end}`);
          return content;
        }

        function walk(currentDir) {
          const entries = fs.readdirSync(currentDir, { withFileTypes: true });
          for (const entry of entries) {
            const fullPath = path.join(currentDir, entry.name);
            if (entry.isDirectory()) {
              walk(fullPath);
            } else if (entry.name.endsWith('.html')) {
              const raw = fs.readFileSync(fullPath, 'utf8');
              const modified = processHtml(raw);
              if (modified !== raw) {
                fs.writeFileSync(fullPath, modified, 'utf8');
              }
            } else if (entry.name.endsWith('.js')) {
              const raw = fs.readFileSync(fullPath, 'utf8');
              const modified = processJs(raw);
              if (modified !== raw) {
                fs.writeFileSync(fullPath, modified, 'utf8');
              }
            }
          }
        }

        walk(distDir);
      },
    },
  };
}

export default defineConfig({
  site,
  base,
  output: 'static',
  legacy: {
    collectionsBackwardsCompat: true,
  },
  integrations: [
    react(),
    sitemap(),
    basePathRewriter(base, site),
  ],
  vite: {
    build: {
      cssMinify: false,
    },
    css: {
      postcss: {
        plugins: [tailwindcss(), autoprefixer()],
      },
    },
  },
  redirects: {
    '/donate':           '/program',
    '/donate/success':   '/program',
    '/donate/cancel':    '/program',
    '/donate/5':         '/program',
    '/donate/10':        '/program',
    '/donate/25':        '/program',
    '/donate/50':        '/program',
    '/donate/100':       '/program',
    '/checkout':         '/program',
    '/product/5':        '/program',
    '/product/10':       '/program',
    '/product/25':       '/program',
    '/product/50':       '/program',
    '/product/100':      '/program',
    '/blogcategory/advocacy':  '/blog/category/advocacy',
    '/blogcategory/community': '/blog/category/community',
    '/blogcategory/policy':    '/blog/category/policy',
  },
});
