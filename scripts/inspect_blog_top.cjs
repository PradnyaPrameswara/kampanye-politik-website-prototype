const fs = require('fs');
const html = fs.readFileSync('legacy-webflow/blog.html', 'utf8');
const start = html.indexOf('section-blog');
const cardIdx = html.indexOf('blog-card', start);
console.log(html.slice(start, cardIdx));
