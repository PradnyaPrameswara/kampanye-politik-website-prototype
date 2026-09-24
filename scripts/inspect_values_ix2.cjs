const fs = require('fs');
const config = require('./ix2_config.json');

['a-27', 'a-28', 'a-29', 'a-30', 'a-31', 'a-32', 'a-33', 'a-34'].forEach(id => {
  const al = config.actionLists[id];
  console.log(`\n=== [${id}] ${al.title} ===`);
  al.actionItemGroups.forEach(g => {
    g.actionItems.forEach(item => {
      console.log(`  ${item.actionTypeId} target=${item.config?.target?.selector || item.config?.target?.id} val=${JSON.stringify(item.config?.value)} dur=${item.config?.duration}`);
    });
  });
});
