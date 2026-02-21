const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const appDir = path.join(__dirname, 'app');
const report = [];

walkDir(appDir, function(filePath) {
  if (filePath.endsWith('page.tsx') || filePath.endsWith('.md') || filePath.endsWith('.mdx')) {
    const content = fs.readFileSync(filePath, 'utf8');
    // Remove imports, exports, HTML tags, and JSX tags for rough text count
    let text = content
      .replace(/<[^>]*>?/gm, ' ') // remove tags
      .replace(/import .*/g, '')
      .replace(/export .*/g, '')
      .replace(/className=(["'])(?:(?=(\\?))\2.)*?\1/g, '')
      .replace(/\{[^}]+\}/g, ' ') // crude remove of jsx variable injections
      .replace(/\s+/g, ' ')
      .trim();
    
    const wordCount = text.split(' ').filter(w => w.length > 0).length;
    let relativeUrl = filePath.replace(appDir, '').replace(/\\/g, '/').replace('/page.tsx', '');
    if (relativeUrl === '') relativeUrl = '/';
    // Clean out route groups
    relativeUrl = relativeUrl.replace(/\/\([^)]+\)/g, '');
    
    report.push({
      url: relativeUrl || '/',
      wordCount,
      status: wordCount < 800 ? 'FAIL (Thin)' : 'PASS',
      file: filePath.replace(__dirname, '')
    });
  }
});

console.log("URL | WORD COUNT | STATUS | FILEPATH");
console.log("-----------------------------------------");
report.sort((a,b) => a.wordCount - b.wordCount).forEach(r => {
  console.log(`${r.url.padEnd(30)} | ${r.wordCount.toString().padStart(4)} | ${r.status.padEnd(11)} | ${r.file}`);
});
