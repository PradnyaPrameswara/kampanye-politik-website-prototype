const fs = require('fs');
const html = fs.readFileSync('legacy-webflow/team.html', 'utf8');
const match = html.match(/<div class="team-collection-list-wrapper[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/);
if (match) {
  console.log(match[0].slice(0, 1500));
} else {
  console.log('No match for team-collection-list-wrapper');
  // Find where team-card is
  const idx = html.indexOf('team-card');
  console.log(html.slice(idx - 100, idx + 400));
}
