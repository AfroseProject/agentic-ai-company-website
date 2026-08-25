import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content/blog');

export interface PostMetadata {
  title: string;
  date: string;
  description: string;
  category: string;
  author: string;
  readingTime: string;
  slug: string;
}

export function getPostSlugs() {
  if (!fs.existsSync(contentDirectory)) return [];
  return fs.readdirSync(contentDirectory);
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(contentDirectory, `${realSlug}.mdx`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    meta: {
      ...data,
      slug: realSlug,
    } as PostMetadata,
    content,
  };
}

export function getAllPosts(): { slug: string; meta: PostMetadata }[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post) => post !== null)
    .sort((post1, post2) => (post1.meta.date > post2.meta.date ? -1 : 1));
  
  return posts;
}

export function getPostsByCategory(category: string) {
  const posts = getAllPosts();
  return posts.filter((post) => post.meta.category === category);
}
