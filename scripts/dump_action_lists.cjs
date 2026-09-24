const fs = require('fs');

const code = fs.readFileSync('scripts/ix2_chunk_1.js', 'utf8');

// Find where actionLists object starts
const startIdx = code.indexOf('"actionLists":');
if (startIdx !== -1) {
  // Extract a chunk starting from startIdx
  const sub = code.slice(startIdx, startIdx + 50000);
  // Find where it ends or inspect actionList IDs
  const re = /"a-(\d+)":\s*\{[^}]*?"title":\s*"([^"]+)"/g;
  let m;
  const list = [];
  while ((m = re.exec(sub)) !== null) {
    list.push({ id: `a-${m[1]}`, title: m[2] });
  }
  console.log('ActionLists found:', list);
} else {
  // Try regex for actionLists without quotes
  const re = /"title":"([^"]+)"/g;
  let m;
  const titles = new Set();
  while ((m = re.exec(code)) !== null) {
    titles.add(m[1]);
  }
  console.log('All titles found in chunk:', Array.from(titles));
}
