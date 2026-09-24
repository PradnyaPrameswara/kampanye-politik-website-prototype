const fs = require('fs');

const code = fs.readFileSync('scripts/ix2_chunk_1.js', 'utf8');
const idx = code.indexOf('"a-2"');
console.log('Index of "a-2":', idx);
if (idx !== -1) {
  console.log(code.slice(idx - 100, idx + 1000));
}
