const fs = require('fs');

const code = fs.readFileSync('scripts/ix2_chunk_1.js', 'utf8');

const e13Idx = code.indexOf('"e-13":');
console.log('"e-13": at', e13Idx);
const unquoted = code.indexOf('e-13:');
console.log('e-13: at', unquoted);

// Let's find where ixData or site interactions are initialized:
const initIdx = code.indexOf('.init(');
console.log('.init( at', initIdx);
if (initIdx !== -1) {
  console.log(code.slice(initIdx, initIdx + 500));
}
