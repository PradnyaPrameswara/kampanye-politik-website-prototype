const fs = require('fs');

const code = fs.readFileSync('scripts/ix2_chunk_1.js', 'utf8');

// In Webflow, IX2 store usually has:
// actionLists: { "a-1": { ... }, "a-2": { ... } }
// events: { ... }
const actionListsIdx = code.indexOf('actionLists:');
if (actionListsIdx !== -1) {
  console.log('actionLists found at index', actionListsIdx);
  // Find matching brace or slice a chunk
  const slice = code.slice(actionListsIdx, actionListsIdx + 8000);
  console.log('Snippet:');
  console.log(slice.slice(0, 3000));
} else {
  console.log('actionLists not found directly, searching for "actionList"');
}
