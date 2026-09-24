const fs = require('fs');

const code = fs.readFileSync('scripts/ix2_chunk_1.js', 'utf8');

const initStr = 'Webflow.require("ix2").init(';
const startIdx = code.indexOf(initStr);
if (startIdx === -1) {
  console.log('init not found');
  process.exit(1);
}

const objStart = startIdx + initStr.length;
// Find matching parenthesis
let depth = 1;
let inString = false;
let stringChar = '';
let endIdx = objStart;

while (endIdx < code.length && depth > 0) {
  const c = code[endIdx];
  if (inString) {
    if (c === '\\') {
      endIdx += 2;
      continue;
    }
    if (c === stringChar) {
      inString = false;
    }
  } else {
    if (c === '"' || c === "'") {
      inString = true;
      stringChar = c;
    } else if (c === '(') {
      depth++;
    } else if (c === ')') {
      depth--;
      if (depth === 0) break;
    }
  }
  endIdx++;
}

const jsonLike = code.slice(objStart, endIdx);
console.log('Extracted config length:', jsonLike.length);

// Save to file
fs.writeFileSync('scripts/raw_ix2_config.cjs', 'module.exports = ' + jsonLike);
console.log('Saved scripts/raw_ix2_config.cjs');

try {
  const config = require('./raw_ix2_config.cjs');
  console.log('Successfully evaluated config!');
  console.log('Events keys count:', Object.keys(config.events || {}).length);
  console.log('ActionLists keys count:', Object.keys(config.actionLists || {}).length);
  fs.writeFileSync('scripts/ix2_config.json', JSON.stringify(config, null, 2));
  console.log('Saved scripts/ix2_config.json!');
} catch (e) {
  console.error('Error evaluating config:', e.message);
}
