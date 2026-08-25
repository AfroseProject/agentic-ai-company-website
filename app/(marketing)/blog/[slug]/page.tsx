import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostBySlug, getPostSlugs } from '@/lib/mdx';

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.mdx$/, ''),
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.meta.title} | Blog`,
    description: post.meta.description,
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}

// Custom components to pass to MDXRemote for styling
const mdxComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h1 className="text-3xl md:text-4xl font-bold text-[#F5F7FA] mt-12 mb-6 tracking-tight" {...props} />,
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h2 className="text-2xl font-bold text-[#F5F7FA] mt-10 mb-4 border-b border-[#1C2633] pb-2" {...props} />,
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h3 className="text-xl font-bold text-[#F5F7FA] mt-8 mb-4" {...props} />,
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => <p className="text-[#9AA6B2] text-base leading-relaxed mb-6" {...props} />,
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => <ul className="list-disc list-outside pl-6 text-[#9AA6B2] mb-6 space-y-2" {...props} />,
  ol: (props: React.OlHTMLAttributes<HTMLOListElement>) => <ol className="list-decimal list-outside pl-6 text-[#9AA6B2] mb-6 space-y-2" {...props} />,
  li: (props: React.LiHTMLAttributes<HTMLLIElement>) => <li className="text-base" {...props} />,
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => <a className="text-primary hover:text-secondary underline underline-offset-4 decoration-primary/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070B] rounded-sm" {...props} />,
  blockquote: (props: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-4 border-primary bg-primary/5 pl-6 py-4 pr-4 my-8 rounded-r-lg italic text-[#F5F7FA]" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => {
    // Check if it's a block of code or inline code
    if (props.className) {
      return <code className="block bg-[#05070B] border border-[#1C2633] p-4 rounded-lg overflow-x-auto text-sm font-mono text-secondary my-6" {...props} />;
    }
    return <code className="bg-[#1C2633] px-1.5 py-0.5 rounded text-sm font-mono text-secondary" {...props} />;
  },
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => <pre className="p-0 m-0 bg-transparent" {...props} />,
  strong: (props: React.HTMLAttributes<HTMLElement>) => <strong className="font-bold text-[#F5F7FA]" {...props} />
};

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="w-full bg-[#05070B] min-h-screen pt-32 pb-24">
      <article className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="mb-12 border-b border-[#1C2633] pb-12">
          <Link href="/blog" className="inline-flex items-center text-sm font-mono text-primary hover:text-secondary transition-colors mb-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070B] rounded-sm">
            <svg aria-hidden="true" className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            BACK TO BLOG
          </Link>
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-3 py-1 border border-primary/20 bg-primary/5 rounded-full text-[10px] font-mono font-medium tracking-widest text-primary uppercase">
              {post.meta.category}
            </span>
            <span className="text-sm text-[#9AA6B2]">{post.meta.date}</span>
            <span className="text-sm text-[#9AA6B2]">•</span>
            <span className="text-sm text-[#9AA6B2]">{post.meta.readingTime}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F7FA] leading-tight mb-6">
            {post.meta.title}
          </h1>
          <p className="text-xl text-[#9AA6B2] leading-relaxed mb-8">
            {post.meta.description}
          </p>
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-[#1C2633] flex items-center justify-center text-[#F5F7FA] font-bold text-sm mr-4">
              {post.meta.author.charAt(0)}
            </div>
            <div>
              <div className="text-sm font-bold text-[#F5F7FA]">{post.meta.author}</div>
              <div className="text-xs text-[#9AA6B2]">Author</div>
            </div>
          </div>
        </div>
        <div className="prose prose-invert prose-lg max-w-none">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>
      </article>
      {/* Related/Next Section could go here in a future phase */}
    </div>
  );
}
