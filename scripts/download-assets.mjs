import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';

const legacyDir = path.resolve('legacy-webflow');
const outputDir = path.resolve('public/images/webflow');
fs.mkdirSync(outputDir, { recursive: true });

const urls = new Set();

function scan(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scan(fullPath);
    } else if (entry.name.endsWith('.html') || entry.name.endsWith('.css')) {
      const text = fs.readFileSync(fullPath, 'utf8');
      const re = /https:\/\/cdn\.prod\.website-files\.com\/[a-zA-Z0-9_\-\.\/\%]+/g;
      let m;
      while ((m = re.exec(text)) !== null) {
        let url = m[0];
        // strip trailing punctuation or quotes
        url = url.replace(/["'\)>,;].*$/, '');
        if (/\.(svg|png|jpg|jpeg|webp|avif|gif)$/i.test(url)) {
          urls.add(url);
        }
      }
    }
  }
}

scan(legacyDir);

// Also scan the saved CSS file if present
const cssPath = path.resolve('.system_generated/steps/828/content.md');
if (fs.existsSync(cssPath)) {
  const cssText = fs.readFileSync(cssPath, 'utf8');
  const re = /https:\/\/cdn\.prod\.website-files\.com\/[a-zA-Z0-9_\-\.\/\%]+/g;
  let m;
  while ((m = re.exec(cssText)) !== null) {
    let url = m[0].replace(/["'\)>,;].*$/, '');
    if (/\.(svg|png|jpg|jpeg|webp|avif|gif)$/i.test(url)) {
      urls.add(url);
    }
  }
}

console.log(`Found ${urls.size} asset URLs to download.`);

async function download(url) {
  const decoded = decodeURIComponent(url);
  const filename = path.basename(decoded);
  const dest = path.join(outputDir, filename);
  if (fs.existsSync(dest) && fs.statSync(dest).size > 0) {
    return;
  }

  return new Promise((resolve) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location).then(resolve);
      }
      if (res.statusCode !== 200) {
        console.error(`Failed: ${url} (${res.statusCode})`);
        return resolve();
      }
      const stream = fs.createWriteStream(dest);
      res.pipe(stream);
      stream.on('finish', () => {
        stream.close();
        resolve();
      });
      stream.on('error', (err) => {
        console.error(`Error saving ${filename}:`, err.message);
        resolve();
      });
    }).on('error', (err) => {
      console.error(`Error fetching ${url}:`, err.message);
      resolve();
    });
  });
}

async function run() {
  const list = Array.from(urls);
  for (let i = 0; i < list.length; i += 5) {
    const chunk = list.slice(i, i + 5);
    await Promise.all(chunk.map(download));
    process.stdout.write(`Progress: ${Math.min(i + 5, list.length)} / ${list.length}\r`);
  }
  console.log('\nAll assets downloaded successfully!');
}

run();
