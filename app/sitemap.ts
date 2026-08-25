import { MetadataRoute } from 'next';
import { getPostSlugs } from '@/lib/mdx';
import { industries } from '@/content/industries';

const BASE_URL = 'https://kaniniai.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/solutions/agent-as-a-service',
    '/solutions/custom-ai-agents',
    '/solutions/agentic-automation',
    '/solutions/ai-service-desk',
    '/solutions/multi-agent-systems',
    '/services/ai-engineering',
    '/services/ai-security',
    '/services/ai-governance',
    '/industries',
    '/technology',
    '/how-it-works',
    '/resources',
    '/blog',
    '/contact',
  ];

  const staticUrls = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const industryUrls = industries.map((industry) => ({
    url: `${BASE_URL}/industries/${industry.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const blogSlugs = getPostSlugs();
  const blogUrls = blogSlugs.map((filename) => {
    const slug = filename.replace(/\.mdx$/, '');
    return {
      url: `${BASE_URL}/blog/${slug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    };
  });

  return [...staticUrls, ...industryUrls, ...blogUrls];
}
