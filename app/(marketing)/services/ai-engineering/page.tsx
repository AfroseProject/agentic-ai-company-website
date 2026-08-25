import React from 'react';
import { ArchitectureHero } from '@/components/solutions';
import Link from 'next/link';

export const metadata = {
  alternates: {
    canonical: '/services/ai-engineering',
  },
  title: 'AI Engineering | Enterprise AI Workforce',
  description: 'Enterprise AI Engineering services building Agentic AI systems that understand, plan, execute, and validate complex workflows.'
};

export default function AIEngineeringPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://kaniniai.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://kaniniai.com/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "AI Engineering",
            "item": "https://kaniniai.com/services/ai-engineering"
          }
        ]
      },
      {
        "@type": "Service",
        "name": "AI Engineering",
        "description": "Enterprise AI Engineering services building Agentic AI systems that understand, plan, execute, and validate complex workflows.",
        "provider": {
          "@type": "Organization",
          "name": "Enterprise Agentic AI",
          "url": "https://kaniniai.com"
        }
      }
    ]
  };
  const engineeringPrinciples = [
    { name: "Deterministic Orchestration", desc: "We design multi-agent systems with rigid, deterministic routing and strictly typed tool schemas, moving beyond unpredictable prompt-chaining." },
    { name: "Memory & Context Design", desc: "Implementing isolated Vector DB architectures (RAG) mapped to precise RBAC permissions, ensuring agents only retrieve authorized knowledge." },
    { name: "Tool & API Integration", desc: "Engineering robust OpenAPI interfaces for legacy enterprise systems, safely exposing core business logic to autonomous agents." },
    { name: "Stateful Execution", desc: "Building state machines for long-running agent workflows, supporting asynchronous human-in-the-loop (HITL) approvals without timing out." },
    { name: "Observability & Tracing", desc: "Deploying comprehensive LLM observability stacks to trace every token, reasoning step, and tool invocation for total auditability." },
    { name: "Continuous Evaluation", desc: "Establishing programmatic evaluation pipelines (LLM-as-a-judge) to monitor agent accuracy and behavioral drift in production." }
  ];

  return (
    <div className="w-full bg-[#05070B] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ArchitectureHero 
        label="AI Engineering Services"
        headline="AI THAT DOES MORE THAN ANSWER."
        description="We engineer production-grade Agentic AI systems. We move beyond chatbots to build autonomous workforces capable of reasoning, planning, and executing complex enterprise tasks."
      >
        {/* Agentic Flow Visualization */}
        <svg aria-hidden="true" viewBox="0 0 400 300" className="w-full h-full text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Base structure */}
          <rect x="50" y="50" width="300" height="200" rx="4" stroke="currentColor" strokeWidth="1" className="opacity-20" strokeDasharray="2 2" />
          
          {/* User Input / Goal */}
          <circle cx="50" cy="150" r="8" fill="currentColor" className="opacity-80 shadow-[0_0_10px_rgba(79,140,255,0.8)]" />
          <path d="M58 150 L100 150" stroke="currentColor" strokeWidth="2" className="opacity-60" />
          <text x="50" y="130" fill="currentColor" className="text-[10px] font-mono opacity-80 text-center" textAnchor="middle">GOAL</text>
          
          {/* Orchestrator / Reasoning Engine */}
          <rect x="100" y="110" width="80" height="80" rx="8" stroke="currentColor" strokeWidth="2" fill="#05070B" className="opacity-90 shadow-[0_0_15px_rgba(79,140,255,0.4)]" />
          <circle cx="140" cy="150" r="15" fill="currentColor" className="opacity-80" />
          <text x="140" y="95" fill="currentColor" className="text-[10px] font-mono opacity-80 text-center" textAnchor="middle">PLAN</text>

          {/* Sub-agents / Tools branch */}
          <path d="M180 150 L220 100" stroke="currentColor" strokeWidth="2" className="opacity-40" />
          <path d="M180 150 L220 150" stroke="currentColor" strokeWidth="2" className="opacity-40" />
          <path d="M180 150 L220 200" stroke="currentColor" strokeWidth="2" className="opacity-40" />
          
          <rect x="220" y="80" width="40" height="40" rx="4" stroke="currentColor" strokeWidth="1" fill="#0B0F16" className="opacity-80" />
          <rect x="220" y="130" width="40" height="40" rx="4" stroke="currentColor" strokeWidth="1" fill="#0B0F16" className="opacity-80" />
          <rect x="220" y="180" width="40" height="40" rx="4" stroke="currentColor" strokeWidth="1" fill="#0B0F16" className="opacity-80" />

          {/* Aggregation / Execution */}
          <path d="M260 100 L300 150" stroke="currentColor" strokeWidth="2" className="opacity-40" />
          <path d="M260 150 L300 150" stroke="currentColor" strokeWidth="2" className="opacity-40" />
          <path d="M260 200 L300 150" stroke="currentColor" strokeWidth="2" className="opacity-40" />
          
          {/* Final Output */}
          <circle cx="300" cy="150" r="12" fill="currentColor" className="opacity-90 shadow-[0_0_15px_rgba(79,140,255,0.6)]" />
          <path d="M312 150 L350 150" stroke="currentColor" strokeWidth="2" className="opacity-60" />
          <circle cx="350" cy="150" r="4" fill="currentColor" className="opacity-80" />
          <text x="350" y="130" fill="currentColor" className="text-[10px] font-mono opacity-80 text-center" textAnchor="middle">EXECUTE</text>
        </svg>
      </ArchitectureHero>

      <section className="py-24 border-t border-[#1C2633]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-primary mb-4 uppercase font-mono">Traditional AI</h2>
              <div className="p-8 border border-[#1C2633] rounded-lg bg-[#0B0F16] flex flex-col space-y-4">
                <div className="flex items-center text-[#F5F7FA] font-medium"><span className="w-8 h-8 rounded-full bg-[#1C2633] flex items-center justify-center mr-4 text-xs font-mono text-primary">01</span> Question</div>
                <div className="pl-4 border-l border-[#1C2633] h-4 ml-4"></div>
                <div className="flex items-center text-[#9AA6B2]"><span className="w-8 h-8 rounded-full bg-[#05070B] border border-[#1C2633] flex items-center justify-center mr-4 text-xs font-mono">02</span> Answer</div>
              </div>
            </div>
            
            <div>
              <h2 className="text-sm font-bold tracking-widest text-primary mb-4 uppercase font-mono">Agentic AI</h2>
              <div className="p-8 border border-primary/30 rounded-lg bg-[#0B0F16] flex flex-col space-y-3 relative overflow-hidden shadow-[0_0_30px_rgba(79,140,255,0.05)]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px]"></div>
                
                {['Goal', 'Understand', 'Plan', 'Retrieve', 'Reason', 'Use Tools', 'Execute', 'Validate', 'Complete'].map((step, i) => (
                  <div key={i} className="flex items-center text-[#F5F7FA]">
                    <span className="w-6 h-6 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mr-4 text-[10px] font-mono text-primary">{i + 1}</span> 
                    <span className={i === 0 || i === 8 ? "font-bold text-primary" : "text-[#9AA6B2]"}>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-sm font-bold tracking-widest text-[#F5F7FA] mb-2 uppercase">Engineering Principles</h2>
            <p className="text-[#9AA6B2] text-lg max-w-2xl">
              We apply rigorous software engineering principles to Large Language Models, treating them as reasoning engines within a larger, deterministic software architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {engineeringPrinciples.map((feature, idx) => (
              <div key={idx} className="p-8 border border-[#1C2633] rounded-lg bg-[#0B0F16] hover:border-primary/50 transition-colors">
                <h3 className="text-lg font-medium text-[#F5F7FA] mb-3">{feature.name}</h3>
                <p className="text-[#9AA6B2] text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-[#1C2633] bg-[#0B0F16]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-medium text-[#F5F7FA] mb-6">ENGINEER YOUR AGENT</h2>
          <p className="text-[#9AA6B2] mb-10 max-w-2xl mx-auto">
            Partner with our AI engineering team to design, build, and deploy custom autonomous systems for your enterprise.
          </p>
          <Link href="/contact" className="inline-block bg-primary text-[#05070B] px-8 py-4 text-sm font-bold tracking-wider hover:bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070B] rounded-sm">
            TALK TO AN AI EXPERT
          </Link>
        </div>
      </section>
    </div>
  );
}
