const fs = require('fs');

['about.html', 'contact.html', 'team.html', 'blog.html'].forEach(file => {
  const content = fs.readFileSync('legacy-webflow/' + file, 'utf8');
  console.log('==================== ' + file + ' ====================');
  const tagRegex = /<([a-z0-9-]+)([^>]*data-w-id="[^"]*"[^>]*)>/gi;
  let match;
  while ((match = tagRegex.exec(content)) !== null) {
    const tagName = match[1];
    const attrs = match[2];
    const classMatch = attrs.match(/class="([^"]*)"/);
    const styleMatch = attrs.match(/style="([^"]*)"/);
    const idMatch = attrs.match(/data-w-id="([^"]*)"/);
    const className = classMatch ? classMatch[1] : '';
    const style = styleMatch ? styleMatch[1] : '';
    const wid = idMatch ? idMatch[1] : '';
    console.log(`  <${tagName} class="${className}" style="${style}" data-w-id="${wid}">`);
  }
});
