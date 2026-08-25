import React from 'react';
import Link from 'next/link';
import { ArchitectureHero } from '@/components/solutions';
import { getAllPosts } from '@/lib/mdx';

export const metadata = {
  alternates: {
    canonical: '/blog',
  },
  title: 'Blog | Enterprise AI Engineering',
  description: 'Technical articles, research, and updates on Agentic AI.'
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="w-full bg-[#05070B] min-h-screen">
      <ArchitectureHero 
        label="Engineering Blog"
        headline="TECHNICAL RESEARCH & UPDATES."
        description="Deep dives into multi-agent orchestration, LLM evaluation, and enterprise AI security."
      >
        <svg aria-hidden="true" viewBox="0 0 400 300" className="w-full h-full text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Abstract network of articles */}
          <circle cx="200" cy="150" r="12" fill="currentColor" className="opacity-90 shadow-[0_0_20px_rgba(79,140,255,0.5)]" />
          
          <path d="M200 150 L120 80" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="opacity-40" />
          <path d="M200 150 L280 80" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="opacity-40" />
          <path d="M200 150 L120 220" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="opacity-40" />
          <path d="M200 150 L280 220" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="opacity-40" />
          
          <rect x="90" y="60" width="60" height="40" rx="2" stroke="currentColor" strokeWidth="1" className="opacity-60" />
          <rect x="250" y="60" width="60" height="40" rx="2" stroke="currentColor" strokeWidth="1" className="opacity-60" />
          <rect x="90" y="200" width="60" height="40" rx="2" stroke="currentColor" strokeWidth="1" className="opacity-60" />
          <rect x="250" y="200" width="60" height="40" rx="2" stroke="currentColor" strokeWidth="1" className="opacity-60" />
        </svg>
      </ArchitectureHero>

      <section className="py-24 border-t border-[#1C2633]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-sm font-bold tracking-widest text-[#F5F7FA] mb-2 uppercase">Latest Articles</h2>
            <p className="text-[#9AA6B2] text-sm">Chronological updates from our engineering and research teams.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block h-full">
                <div className="h-full p-8 border border-[#1C2633] rounded-lg bg-[#0B0F16] hover:border-primary/40 transition-colors relative overflow-hidden flex flex-col">
                  <div className="absolute top-0 left-0 w-1 bottom-0 bg-[#1C2633] group-hover:bg-primary transition-colors"></div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono font-medium tracking-widest text-primary uppercase">{post.meta.category}</span>
                    <span className="text-xs text-[#9AA6B2]">{post.meta.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#F5F7FA] mb-3 group-hover:text-primary transition-colors">{post.meta.title}</h3>
                  <p className="text-[#9AA6B2] text-sm leading-relaxed mb-6 flex-grow">{post.meta.description}</p>
                  
                  <div className="flex items-center justify-between border-t border-[#1C2633] pt-4 mt-auto">
                    <div className="text-xs text-[#9AA6B2]">
                      <span className="text-[#F5F7FA] font-medium">{post.meta.author}</span> • {post.meta.readingTime}
                    </div>
                    <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg aria-hidden="true" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
            
            {posts.length === 0 && (
              <div className="col-span-full py-12 text-center border border-[#1C2633] border-dashed rounded-lg">
                <p className="text-[#9AA6B2]">No articles published yet.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
