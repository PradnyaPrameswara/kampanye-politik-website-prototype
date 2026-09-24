const https = require('https');
const fs = require('fs');

const url = 'https://cdn.prod.website-files.com/66d846ba7c7de0b8222d6fa5/js/webflow.1d936ca9.d856c5aa598173b0.js';

https.get(url, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    fs.writeFileSync('scripts/webflow_site.js', data);
    console.log('Saved webflow_site.js, size:', data.length);
    // Search for ix2 actions or actionList
    const actionListMatch = data.match(/actionLists:\{([^}]+)\}/);
    if (actionListMatch) {
      console.log('Found actionLists snippet:', actionListMatch[0].slice(0, 300));
    }
  });
}).on('error', err => {
  console.error('Error fetching:', err);
});
