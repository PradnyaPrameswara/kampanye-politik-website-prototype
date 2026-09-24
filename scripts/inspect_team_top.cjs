const fs = require('fs');
const html = fs.readFileSync('legacy-webflow/team.html', 'utf8');
const idx = html.indexOf('team-top-content-wrapper');
console.log(html.slice(idx - 50, idx + 400));
