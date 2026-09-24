const fs = require('fs');
const html = fs.readFileSync('legacy-webflow/blog.html', 'utf8');
const start = html.indexOf('section-blog');
const end = html.indexOf('section-cta', start);
console.log(html.slice(start, end));
