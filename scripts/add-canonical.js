import fs from 'fs';
import path from 'path';

function findPageFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const stat = fs.statSync(path.join(dir, file));
    if (stat.isDirectory()) {
      findPageFiles(path.join(dir, file), fileList);
    } else if (file === 'page.tsx') {
      fileList.push(path.join(dir, file));
    }
  }
  return fileList;
}

const baseDir = path.join(process.cwd(), 'app');
const pageFiles = findPageFiles(baseDir);

for (const file of pageFiles) {
  let content = fs.readFileSync(file, 'utf8');
  
  if (content.includes('export const metadata = {') || content.includes('export const metadata: Metadata = {')) {
    if (!content.includes('alternates: {')) {
      let route = file.replace(baseDir, '').replace(/\\/g, '/').replace(/\/page\.tsx$/, '');
      if (route === '') route = '/';
      // Handle the (marketing) path segment which doesn't appear in the URL
      route = route.replace('/(marketing)', '') || '/';
      
      content = content.replace(
        /export const metadata([^=]*)=\s*\{/,
        `export const metadata$1= {\n  alternates: {\n    canonical: '${route}',\n  },`
      );
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Updated canonical for static route: ${route}`);
    }
  }
}
