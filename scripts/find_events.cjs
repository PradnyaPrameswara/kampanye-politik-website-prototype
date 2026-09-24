const fs = require('fs');

const code = fs.readFileSync('scripts/ix2_chunk_1.js', 'utf8');

// Look around 365000 to 375000
const slice = code.slice(365000, 385000);
fs.writeFileSync('scripts/ix2_events_dump.txt', slice);
console.log('Dumped slice around e-13, length:', slice.length);

// Let's search for "events":{ in the whole code
const eventsMatches = [];
let pos = 0;
while ((pos = code.indexOf('"events":{', pos)) !== -1) {
  eventsMatches.push(pos);
  pos += 10;
}
console.log('"events":{ positions:', eventsMatches);

// Let's search for "actionLists":{ in the whole code
const actionListsMatches = [];
pos = 0;
while ((pos = code.indexOf('"actionLists":{', pos)) !== -1) {
  actionListsMatches.push(pos);
  pos += 15;
}
console.log('"actionLists":{ positions:', actionListsMatches);
