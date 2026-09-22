import fs from 'node:fs';
import path from 'node:path';

let css = fs.readFileSync('src/styles/webflow.css', 'utf8');

// Replace any https://cdn.prod.website-files.com/.../filename with /images/webflow/filename
css = css.replace(/https:\/\/cdn\.prod\.website-files\.com\/[^\)\"\'\s]+\/([^\)\"\'\s]+)/g, (match, filename) => {
  const decoded = decodeURIComponent(filename);
  const localFile = path.resolve('public/images/webflow', decoded);
  if (fs.existsSync(localFile)) {
    return `/images/webflow/${filename}`;
  }
  return match;
});

// Special replacements
css = css.replace(/url\([^)]*Hero%20Bg%20Image\.webp[^)]*\)/g, 'url("/images/shared/hero-bg-image.webp")');

fs.writeFileSync('src/styles/webflow.css', css);
console.log('Patched src/styles/webflow.css URLs to local assets!');
