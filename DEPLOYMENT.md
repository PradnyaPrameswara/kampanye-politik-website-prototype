# Deployment Guide: Cloudflare Pages & GitHub Pages

This project is configured for static output deployment on both **Cloudflare Pages** and **GitHub Pages** without requiring separate adapters or code rewrites. The site brand is **Kabinet Merah Putih**; the repository name is `kampanye-politik-website-prototype`.

---

## 1. Cloudflare Pages

### Configuration Settings
- **Framework preset**: `None` / `Astro`
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Node.js version**: `22.23.4` (pinned via `actions/setup-node` in the GitHub Actions workflow; Astro 7 requires Node `>=22.23.4`)

### Environment Variables
No required environment variables for basic static deployment. Optional overrides:
- `CF_PAGES_URL`: Automatically populated by Cloudflare Pages.
- `SITE` / `ASTRO_SITE`: Optional canonical URL override. Defaults to `https://kabinet-merah-putih.pages.dev` when no deployment target is detected.

### Static Routing, Redirects & Headers
- Cloudflare Pages serves clean URLs directly from `dist/<page>/index.html`.
- Edge redirects are managed by `public/_redirects` (compiled to `dist/_redirects`).
- Cache-control and security headers are managed by `public/_headers` (compiled to `dist/_headers`). The global rule also sets `Content-Security-Policy`, `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, and `Referrer-Policy: strict-origin-when-cross-origin`.
- Both `dist/_headers` and `dist/_redirects` are read by Cloudflare Pages and by Cloudflare Workers Static Assets.

### Cloudflare Workers Static Assets (via Wrangler)
This repository also includes a minimal `wrangler.jsonc` file enabling deployment to Cloudflare Workers Static Assets without requiring runtime SSR adapters:
- **Configuration file**: `wrangler.jsonc`
- **Assets binding**: `"assets": { "directory": "./dist" }`
- **Validation command**: `npx wrangler deploy --dry-run`
- **Local development server**: `npx wrangler dev`

---

## 2. GitHub Pages

### Repository Settings Configuration
To enable GitHub Pages deployment via GitHub Actions:
1. In the GitHub repository, navigate to **Settings** > **Pages**.
2. Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. No branch selection is necessary when using GitHub Actions.

### Workflow Behavior
The workflow at `.github/workflows/deploy.yml`:
1. Triggers on pushes to `main` and supports manual execution via `workflow_dispatch`.
2. Checks out code and provisions Node.js 22.23.4 with npm caching.
3. Runs `npm ci` for clean dependency resolution.
4. Uses `actions/configure-pages@v5` to determine the environment's base path:
   - For default project pages (`https://<owner>.github.io/<repo>/`), it sets `ASTRO_BASE` to `/<repo>`.
   - If a custom domain or a user/organization page is configured, `ASTRO_BASE` resolves to `/`.
   - The workflow fails fast if `actions/configure-pages@v5` cannot determine the Pages environment.
   - The deployed canonical URL for this repository is `https://pradnyaprameswara.github.io/kampanye-politik-website-prototype/`.
5. Executes `npm run build`, producing static files in `dist`.
   - Astro prefixing and post-build integration ensure internal links, assets, redirects, and meta tags point to the subpath.
   - `public/.nojekyll` prevents GitHub Pages from running Jekyll, ensuring `dist/_astro/` assets are served correctly.
6. Uploads the artifact via `actions/upload-pages-artifact@v3` and deploys using `actions/deploy-pages@v4`.

---

## 3. How to Test Both Deployments Locally

### Testing Cloudflare Pages Build (Root Path)
```bash
# Build with root base path (default)
npm run build

# Preview locally
npm run preview
```
Verify:
- Navigation works at `http://localhost:4321/`
- Direct page navigation (e.g., `/about`, `/contact`, `/blog`) loads properly
- Assets load from `/_astro/` and `/images/`
- Redirects function (e.g., `/checkout` -> `/donate/50`)

### Testing GitHub Pages Build (Repository Subpath)
```bash
# Simulate GitHub Pages project subpath
GITHUB_PAGES=true npm run build

# Preview locally with base path
npx astro preview --base /kampanye-politik-website-prototype
```
Verify:
- Navigation works at `http://localhost:4321/kampanye-politik-website-prototype/`
- All internal links stay within `/kampanye-politik-website-prototype/`
- Images, icons, and fonts load correctly under the subpath
- Sitemap files `dist/sitemap-index.xml` and `dist/sitemap-0.xml` prefix URLs with the canonical GitHub Pages URL

---

## 4. Sitemap and robots.txt

`@astrojs/sitemap` writes `dist/sitemap-index.xml` and `dist/sitemap-0.xml`. The generated URLs use Astro's `site` plus `base`, so they must match the active deployment:

- Cloudflare Pages: `https://kabinet-merah-putih.pages.dev/sitemap-index.xml`
- GitHub Pages: `https://pradnyaprameswara.github.io/kampanye-politik-website-prototype/sitemap-index.xml`

`public/robots.txt` is copied verbatim to `dist/robots.txt`; its `Sitemap:` directive must be updated to the canonical URL of the target deployment.
