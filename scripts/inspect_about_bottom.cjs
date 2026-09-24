const fs = require('fs');
const html = fs.readFileSync('legacy-webflow/about.html', 'utf8');
const idx = html.indexOf('about-bottom-content-wrapper');
console.log(html.slice(idx - 50, idx + 400));
