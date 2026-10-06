# Deployment Guide: Cloudflare Pages & GitHub Pages

This project is configured for static output deployment on both **Cloudflare Pages** and **GitHub Pages** without requiring separate adapters or code rewrites.

---

## 1. Cloudflare Pages

### Configuration Settings
- **Framework preset**: `None` / `Astro`
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Node.js version**: `20` (automatically picked up via `.nvmrc`)

### Environment Variables
No required environment variables for basic static deployment. Optional overrides:
- `CF_PAGES_URL`: Automatically populated by Cloudflare Pages.
- `SITE`: Optional custom canonical URL (e.g., `https://civicunity.org`).

### Static Routing, Redirects & Headers
- Cloudflare Pages serves clean URLs directly from `dist/<page>/index.html`.
- Edge redirects are managed by `public/_redirects` (compiled to `dist/_redirects`).
- Cache-control and security headers are managed by `public/_headers` (compiled to `dist/_headers`).

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
2. Checks out code and provisions Node.js 20 with npm caching.
3. Runs `npm ci` for clean dependency resolution.
4. Uses `actions/configure-pages@v5` to determine the environment's base path:
   - For default project pages (`https://<owner>.github.io/<repo>/`), it sets `ASTRO_BASE` to `/<repo>`.
   - If a custom domain is configured in repository settings, `ASTRO_BASE` resolves to `/`.
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
- Sitemap at `dist/sitemap-0.xml` prefixes URLs with the subpath
