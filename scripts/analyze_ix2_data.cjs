const fs = require('fs');

['index.html', 'about.html', 'contact.html', 'team.html', 'blog.html'].forEach(file => {
  const html = fs.readFileSync('legacy-webflow/' + file, 'utf8');
  const match = html.match(/data-w-id="([^"]+)"/g);
  console.log(file, 'has data-w-id count:', match ? match.length : 0);
});

// Search for the site data in chunk 0 or 1
const chunk0 = fs.readFileSync('scripts/ix2_chunk_1.js', 'utf8');
// Check if ixData is defined
const ixDataIdx = chunk0.indexOf('ixData');
console.log('ixData in chunk 1:', ixDataIdx);

// Look for a-1, a-2, a-3 in chunk 1
const aMatch = chunk0.match(/"a-\d+"/g);
console.log('a-N occurrences in chunk 1:', aMatch ? aMatch.slice(0, 10) : 'none');
