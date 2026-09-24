const fs = require('fs');
const html = fs.readFileSync('legacy-webflow/about.html', 'utf8');
const start = html.indexOf('section-value');
const end = html.indexOf('section-team', start);
console.log(html.slice(start, end));
