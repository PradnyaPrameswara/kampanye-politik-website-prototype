const fs = require('fs');

['about.html', 'contact.html', 'team.html', 'blog.html'].forEach(file => {
  const content = fs.readFileSync('legacy-webflow/' + file, 'utf8');
  console.log('==================== ' + file + ' ====================');
  const sectionRegex = /<div class="([^"]*(?:section-[^"]*|banner|main-wrapper))"[^>]*>/gi;
  let match;
  while ((match = sectionRegex.exec(content)) !== null) {
    console.log('  ' + match[1]);
  }
});
