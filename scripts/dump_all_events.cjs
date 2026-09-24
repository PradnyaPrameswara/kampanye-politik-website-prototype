const fs = require('fs');

const code = fs.readFileSync('scripts/ix2_chunk_1.js', 'utf8');

// Find where ixData is passed
// Usually Webflow does: Webflow.require("ix2").init({ ... }) or { events: { ... }, actionLists: { ... } }
const eventsIdx = code.indexOf('"e-1":');
console.log('e-1 at:', eventsIdx);
if (eventsIdx !== -1) {
  // Let's search backward for events:
  const eventsKey = code.lastIndexOf('events:', eventsIdx);
  console.log('events: at:', eventsKey);
  // Let's search for actionLists:
  const actionListsKey = code.lastIndexOf('actionLists:', eventsIdx);
  console.log('actionLists: at:', actionListsKey);

  // Let's dump all event IDs and actionList IDs
  const eventRegex = /"(e-\d+)":\{([^}]+eventTypeId:"([^"]+)"[^}]+)\}/g;
  let em;
  const events = [];
  while ((em = eventRegex.exec(code)) !== null) {
    const raw = em[0];
    const targetMatch = raw.match(/id:"[^|]+\|([^"]+)"/);
    const actionMatch = raw.match(/actionListId:"([^"]+)"/);
    events.push({
      eventId: em[1],
      eventTypeId: em[3],
      targetDataWId: targetMatch ? targetMatch[1] : null,
      actionListId: actionMatch ? actionMatch[1] : null,
    });
  }
  console.log('Total events found:', events.length);
  console.log(events);
}
