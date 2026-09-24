const fs = require('fs');

const config = require('./ix2_config.json');

const actionLists = config.actionLists || {};
const events = config.events || {};

let out = '=================== ALL 39 ACTION LISTS ===================\n';

Object.entries(actionLists).forEach(([id, al]) => {
  out += `\n[ActionList ${id}] "${al.title}"\n`;
  
  // Find events that trigger this actionList
  const triggeringEvents = Object.entries(events).filter(([eid, ev]) => {
    return ev.action && ev.action.config && ev.action.config.actionListId === id;
  });
  
  triggeringEvents.forEach(([eid, ev]) => {
    const target = ev.target ? (ev.target.selector || ev.target.id) : 'unknown';
    out += `  -> Triggered by ${eid} (${ev.eventTypeId}) on: ${target}\n`;
  });
  
  // Inspect actionItemGroups
  (al.actionItemGroups || []).forEach((group, gIdx) => {
    (group.actionItems || []).forEach(item => {
      const type = item.actionTypeId;
      const config = item.config || {};
      const target = config.target ? (config.target.selector || config.target.id || (config.target.useEventTarget ? 'EVENT_TARGET' : '')) : '';
      out += `     Step: ${type} target=${target} duration=${config.duration}ms delay=${config.delay}ms easing=${config.easing}\n`;
      if (config.value !== undefined) {
        out += `       value: ${JSON.stringify(config.value)}\n`;
      }
    });
  });
});

fs.writeFileSync('scripts/action_lists_summary.txt', out, 'utf8');
console.log('Saved action_lists_summary.txt as utf8, length:', out.length);
