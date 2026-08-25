import fs from 'fs';
import path from 'path';

const filesToUpdate = [
  'app/(marketing)/how-it-works/page.tsx',
  'app/(marketing)/industries/[slug]/page.tsx',
  'app/(marketing)/services/ai-governance/page.tsx',
  'app/(marketing)/services/ai-security/page.tsx',
  'app/(marketing)/technology/page.tsx',
  'app/(marketing)/blog/[slug]/page.tsx'
];

for (const relPath of filesToUpdate) {
  const filePath = path.join(process.cwd(), relPath);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // For standard bottom CTAs
    content = content.replace(
      /className="inline-block bg-primary text-\[#05070B\] px-8 py-4 text-sm font-bold tracking-wider hover:bg-white transition-colors"/g,
      'className="inline-block bg-primary text-[#05070B] px-8 py-4 text-sm font-bold tracking-wider hover:bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070B] rounded-sm"'
    );

    // For MDX links
    content = content.replace(
      /className="text-primary hover:text-secondary underline underline-offset-4 decoration-primary\/30 transition-colors"/g,
      'className="text-primary hover:text-secondary underline underline-offset-4 decoration-primary/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070B] rounded-sm"'
    );
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated focus states in ${relPath}`);
  }
}
