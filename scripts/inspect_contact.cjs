const fs = require('fs');
const html = fs.readFileSync('legacy-webflow/contact.html', 'utf8');
const start = html.indexOf('section-contact');
const end = html.indexOf('section-faq', start);
console.log(html.slice(start, end));
