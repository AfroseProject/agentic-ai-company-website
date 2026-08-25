import fs from 'fs';
import path from 'path';

function findTsxFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const stat = fs.statSync(path.join(dir, file));
    if (stat.isDirectory() && !file.includes('node_modules') && !file.includes('.next')) {
      findTsxFiles(path.join(dir, file), fileList);
    } else if (file.endsWith('.tsx')) {
      fileList.push(path.join(dir, file));
    }
  }
  return fileList;
}

const baseDirs = [
  path.join(process.cwd(), 'app'),
  path.join(process.cwd(), 'components')
];

let files = [];
for (const d of baseDirs) {
  if (fs.existsSync(d)) {
    files = files.concat(findTsxFiles(d));
  }
}

let modifiedCount = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;
  
  // Find <svg ... > that doesn't have aria-hidden, aria-label, role="img", or role="graphics-document"
  // This regex matches <svg followed by anything except those attributes, until the closing >
  // Actually, a simpler way is string replacement with a replacer function.
  
  content = content.replace(/<svg([^>]+)>/g, (match, attrs) => {
    if (attrs.includes('aria-hidden') || attrs.includes('aria-label') || attrs.includes('role=')) {
      return match;
    }
    // Add aria-hidden="true"
    return `<svg aria-hidden="true"${attrs}>`;
  });

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    modifiedCount++;
    console.log(`Updated SVGs in ${file.replace(process.cwd(), '')}`);
  }
}

console.log(`Total files modified: ${modifiedCount}`);
