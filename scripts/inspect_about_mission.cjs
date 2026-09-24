const fs = require('fs');
const html = fs.readFileSync('legacy-webflow/about.html', 'utf8');
const start = html.indexOf('section-mission');
const end = html.indexOf('section-value', start);
console.log(html.slice(start, end));
