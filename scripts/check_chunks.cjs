const https = require('https');
const fs = require('fs');

const urls = [
  'https://cdn.prod.website-files.com/66d846ba7c7de0b8222d6fa5/js/webflow.schunk.fa046cbb9c58fdf2.js',
  'https://cdn.prod.website-files.com/66d846ba7c7de0b8222d6fa5/js/webflow.schunk.46a8651e538d9fcf.js'
];

urls.forEach((url, i) => {
  https.get(url, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      console.log(`URL ${i} (${url}): size ${data.length}`);
      if (data.includes('actionLists')) {
        console.log(`URL ${i} contains actionLists!`);
        fs.writeFileSync(`scripts/ix2_chunk_${i}.js`, data);
      }
      if (data.includes('IX2_')) {
        console.log(`URL ${i} contains IX2_!`);
      }
    });
  });
});
