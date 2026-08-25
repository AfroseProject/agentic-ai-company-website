import React from 'react';
import { ArchitectureHero } from '@/components/solutions';

export const metadata = {
  alternates: {
    canonical: '/resources',
  },
  title: 'Resources & Insights | Enterprise AI Workforce',
  description: 'Technical guides, architecture patterns, and enterprise insights for building and deploying Agentic AI systems.'
};

export default function ResourcesPage() {
  const categories = [
    "AI Agent Guides",
    "Agentic AI",
    "AI Security",
    "AI Governance",
    "Architecture",
    "Use Cases",
    "Industry Insights"
  ];

  // Placeholder resources demonstrating the layout
  const featuredResources = [
    {
      title: "The Enterprise Guide to Agentic Architecture",
      category: "Architecture",
      type: "Whitepaper",
      desc: "A comprehensive deep dive into orchestration layers, tool usage, and deterministic workflows.",
      date: "August 2026",
    },
    {
      title: "Securing Autonomous AI Systems",
      category: "AI Security",
      type: "Guide",
      desc: "How to prevent prompt injection, enforce least privilege, and establish robust AI governance.",
      date: "July 2026",
    },
    {
      title: "Human-in-the-Loop Workflow Patterns",
      category: "AI Governance",
      type: "Technical Brief",
      desc: "Configuring Assist, Collaborate, and Automate interaction modes for high-risk operations.",
      date: "June 2026",
    }
  ];

  const recentResources = [
    {
      title: "Multi-Agent System Orchestration",
      category: "Agentic AI",
      type: "Article",
      date: "August 15, 2026"
    },
    {
      title: "Financial Services AI Deployment",
      category: "Industry Insights",
      type: "Case Study",
      date: "August 02, 2026"
    },
    {
      title: "Evaluating LLMs for Tool Calling",
      category: "AI Agent Guides",
      type: "Article",
      date: "July 28, 2026"
    },
    {
      title: "AI Service Desk Transformation",
      category: "Use Cases",
      type: "Case Study",
      date: "July 14, 2026"
    }
  ];

  return (
    <div className="w-full bg-[#05070B] min-h-screen">
      <ArchitectureHero 
        label="Knowledge Base"
        headline="RESOURCES & INSIGHTS."
        description="Technical guides, architecture blueprints, and strategic insights for engineering the enterprise AI workforce."
      >
        <svg aria-hidden="true" viewBox="0 0 400 300" className="w-full h-full text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Abstract Database / Documents Visualization */}
          <rect x="150" y="50" width="100" height="120" rx="4" stroke="currentColor" strokeWidth="2" className="opacity-40" />
          <rect x="130" y="70" width="100" height="120" rx="4" stroke="currentColor" strokeWidth="2" fill="#05070B" className="opacity-60 shadow-[0_0_15px_rgba(79,140,255,0.2)]" />
          <rect x="110" y="90" width="100" height="120" rx="4" stroke="currentColor" strokeWidth="2" fill="#05070B" className="opacity-90 shadow-[0_0_20px_rgba(79,140,255,0.4)]" />
          
          {/* Document Lines */}
          <path d="M130 120 L190 120" stroke="currentColor" strokeWidth="2" className="opacity-60" />
          <path d="M130 140 L180 140" stroke="currentColor" strokeWidth="2" className="opacity-60" />
          <path d="M130 160 L170 160" stroke="currentColor" strokeWidth="2" className="opacity-40" />
          <path d="M130 180 L190 180" stroke="currentColor" strokeWidth="2" className="opacity-40" />

          {/* Connected Nodes indicating knowledge extraction */}
          <circle cx="280" cy="200" r="4" fill="currentColor" className="opacity-80" />
          <circle cx="250" cy="240" r="4" fill="currentColor" className="opacity-80" />
          <circle cx="310" cy="250" r="4" fill="currentColor" className="opacity-80" />
          
          <path d="M210 150 L280 200" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="opacity-40" />
          <path d="M210 150 L250 240" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="opacity-40" />
          <path d="M210 150 L310 250" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="opacity-40" />
        </svg>
      </ArchitectureHero>

      <section className="py-24 border-t border-[#1C2633]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Categories Grid */}
          <div className="mb-20">
            <h2 className="text-sm font-bold tracking-widest text-[#F5F7FA] mb-6 uppercase">Topics</h2>
            <div className="flex flex-wrap gap-3">
              {categories.map((cat, i) => (
                <div key={i} className="px-4 py-2 border border-[#1C2633] rounded-full bg-[#0B0F16] hover:border-primary/50 text-[#9AA6B2] hover:text-[#F5F7FA] text-sm cursor-pointer transition-colors">
                  {cat}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Featured Resources (Left Column) */}
            <div className="lg:col-span-8">
              <h2 className="text-sm font-bold tracking-widest text-[#F5F7FA] mb-8 uppercase">Featured Insights</h2>
              <div className="space-y-6">
                {featuredResources.map((resource, i) => (
                  <div key={i} className="group p-8 border border-[#1C2633] rounded-lg bg-[#0B0F16] hover:border-primary/40 transition-colors cursor-pointer relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 bottom-0 bg-[#1C2633] group-hover:bg-primary transition-colors"></div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-medium tracking-widest text-primary uppercase">{resource.category}</span>
                      <span className="text-xs text-[#9AA6B2]">{resource.date}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#F5F7FA] mb-3 group-hover:text-primary transition-colors">{resource.title}</h3>
                    <p className="text-[#9AA6B2] text-sm leading-relaxed mb-6">{resource.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold tracking-wider text-[#F5F7FA] border border-[#1C2633] rounded px-2 py-1 bg-[#05070B]">{resource.type}</span>
                      <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg aria-hidden="true" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Publications (Right Column) */}
            <div className="lg:col-span-4 flex flex-col space-y-8 lg:pl-8 lg:border-l lg:border-[#1C2633]">
              <div>
                <h2 className="text-sm font-bold tracking-widest text-[#F5F7FA] mb-8 uppercase">Recent Publications</h2>
                <div className="space-y-6">
                  {recentResources.map((resource, i) => (
                    <div key={i} className="group cursor-pointer border-b border-[#1C2633] pb-6 last:border-0 last:pb-0">
                      <div className="text-[10px] font-mono font-medium tracking-widest text-primary uppercase mb-2">
                        {resource.category}
                      </div>
                      <h3 className="text-base font-medium text-[#F5F7FA] group-hover:text-primary transition-colors mb-2">
                        {resource.title}
                      </h3>
                      <div className="text-xs text-[#9AA6B2] flex items-center justify-between">
                        <span>{resource.date}</span>
                        <span className="opacity-50">{resource.type}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter / Updates CTA */}
              <div className="mt-8 p-6 bg-[#0B0F16] border border-[#1C2633] rounded-lg">
                <h3 className="text-lg font-bold text-[#F5F7FA] mb-2">Technical Updates</h3>
                <p className="text-sm text-[#9AA6B2] mb-6">Receive architectural blueprints and engineering insights directly in your inbox.</p>
                <div className="flex">
                  <input type="email" placeholder="Email address" className="flex-1 bg-[#05070B] border border-[#1C2633] rounded-l text-[#F5F7FA] px-4 py-3 text-sm focus:outline-none focus:border-primary/50" readOnly />
                  <button className="bg-primary text-[#05070B] px-4 py-3 text-sm font-bold tracking-wider rounded-r hover:bg-white transition-colors cursor-pointer">
                    SUBSCRIBE
                  </button>
                </div>
                <p className="text-[10px] text-[#9AA6B2] mt-3">By subscribing, you agree to our privacy policy. No marketing fluff.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
