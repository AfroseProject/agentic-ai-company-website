import React from 'react';
import { ArchitectureHero } from '@/components/solutions';

export const metadata = {
  alternates: {
    canonical: '/how-it-works',
  },
  title: 'How It Works | Agentic AI Lifecycle',
  description: 'The end-to-end engineering lifecycle for enterprise Agentic AI. From discovery and design to deployment and continuous evolution.'
};

const lifecycleSteps = [
  {
    num: "01",
    title: "DISCOVER",
    desc: "We analyze your enterprise workflows to identify deterministic bottlenecks and high-ROI opportunities for autonomous intervention. We define the precise goal, context, and required tooling."
  },
  {
    num: "02",
    title: "DESIGN",
    desc: "Architecting the agent's logic, memory requirements, and escalation pathways. We establish the boundaries of agency and define the human-in-the-loop (HITL) authorization nodes."
  },
  {
    num: "03",
    title: "BUILD",
    desc: "Engineering the reasoning engine using optimal foundation models. Implementing specialized multi-agent communication patterns, retrieval-augmented generation (RAG), and semantic vector spaces."
  },
  {
    num: "04",
    title: "CONNECT",
    desc: "Integration with your enterprise systems via secure APIs and Model Context Protocol (MCP). The agent is explicitly equipped with the deterministic tools required to execute its goals."
  },
  {
    num: "05",
    title: "SECURE",
    desc: "Applying military-grade constraints. Implementing Identity and Access Management (IAM), least-privilege tool execution, and prompt injection defense mechanisms to ensure absolute safety."
  },
  {
    num: "06",
    title: "TEST",
    desc: "Rigorous adversarial red-teaming, boundary testing, and simulation in sandboxed environments to guarantee the agent adheres strictly to defined enterprise policies under edge-case conditions."
  },
  {
    num: "07",
    title: "DEPLOY",
    desc: "Phased rollout into production environments. Initial deployment often operates in 'Assist' or 'Collaborate' mode to build human trust before graduating to full autonomy."
  },
  {
    num: "08",
    title: "OPERATE",
    desc: "Continuous execution, observability, and auditability. We monitor reasoning traces, token usage, latency, and success rates through our centralized governance dashboard."
  },
  {
    num: "09",
    title: "EVOLVE",
    desc: "Ongoing optimization based on production telemetry. As the agent encounters novel scenarios, we refine its context window, update its knowledge base, and expand its toolset."
  }
];

export default function HowItWorksPage() {
  return (
    <div className="w-full bg-[#05070B] min-h-screen">
      <ArchitectureHero 
        label="Engineering Lifecycle"
        headline="HOW IT WORKS."
        description="The rigid, deterministic engineering lifecycle we use to build, secure, and operate enterprise-grade Agentic AI systems."
      >
        <svg aria-hidden="true" viewBox="0 0 400 300" className="w-full h-full text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Continuous Loop / Lifecycle visualization */}
          <path d="M200 50 C280 50 350 120 350 200 C350 240 320 270 280 270 C240 270 200 230 200 230 C200 230 160 270 120 270 C80 270 50 240 50 200 C50 120 120 50 200 50 Z" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" className="opacity-40 animate-[spin_60s_linear_infinite] origin-[200px_160px]" />
          <path d="M200 80 C260 80 310 130 310 190 C310 220 290 240 260 240 C230 240 200 210 200 210 C200 210 170 240 140 240 C110 240 90 220 90 190 C90 130 140 80 200 80 Z" stroke="currentColor" strokeWidth="1" className="opacity-20 animate-[spin_40s_linear_infinite_reverse] origin-[200px_160px]" />
          
          <circle cx="200" cy="50" r="8" fill="currentColor" className="opacity-90 shadow-[0_0_15px_rgba(79,140,255,0.6)]" />
          <circle cx="350" cy="200" r="6" fill="currentColor" className="opacity-70" />
          <circle cx="50" cy="200" r="6" fill="currentColor" className="opacity-70" />
          
          {/* Internal Nodes */}
          <circle cx="200" cy="160" r="4" fill="#F5F7FA" className="opacity-50" />
          <path d="M200 160 L200 50" stroke="#F5F7FA" strokeWidth="1" strokeDasharray="2 4" className="opacity-30" />
          <path d="M200 160 L350 200" stroke="#F5F7FA" strokeWidth="1" strokeDasharray="2 4" className="opacity-30" />
          <path d="M200 160 L50 200" stroke="#F5F7FA" strokeWidth="1" strokeDasharray="2 4" className="opacity-30" />
        </svg>
      </ArchitectureHero>

      <section className="py-24 relative">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5 pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="mb-20 text-center">
            <h2 className="text-sm font-bold tracking-widest text-primary mb-2 uppercase">The 9-Phase Methodology</h2>
            <p className="text-[#9AA6B2] text-lg max-w-2xl mx-auto">
              We do not just hand over a model. We orchestrate a complete engineering lifecycle to ensure your AI workforce is capable, secure, and continuously improving.
            </p>
          </div>

          <div className="relative">
            {/* Center Line for Desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-[#1C2633] to-transparent -translate-x-1/2"></div>
            {/* Left Line for Mobile */}
            <div className="md:hidden absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-[#1C2633] to-transparent"></div>

            <div className="space-y-16">
              {lifecycleSteps.map((step, index) => {
                const isEven = index % 2 === 0;
                
                return (
                  <div key={index} className="relative flex flex-col md:flex-row items-center justify-between group">
                    
                    {/* Desktop Layout - Left Side */}
                    <div className={`hidden md:block w-5/12 ${isEven ? 'text-right pr-12' : 'order-last text-left pl-12'}`}>
                      {isEven ? (
                        <>
                          <h3 className="text-2xl font-bold text-[#F5F7FA] mb-3 tracking-wide">{step.title}</h3>
                          <p className="text-[#9AA6B2] text-sm leading-relaxed">{step.desc}</p>
                        </>
                      ) : (
                        <div className="text-[120px] font-bold text-[#1C2633] leading-none opacity-30 select-none">
                          {step.num}
                        </div>
                      )}
                    </div>

                    {/* Timeline Node */}
                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10 w-12 h-12">
                      <div className="w-12 h-12 rounded-full bg-[#0B0F16] border border-primary/40 flex items-center justify-center group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(79,140,255,0.3)] transition-all duration-300">
                        <div className="w-3 h-3 rounded-full bg-primary/70 group-hover:bg-primary transition-colors"></div>
                      </div>
                    </div>

                    {/* Desktop Layout - Right Side */}
                    <div className={`hidden md:block w-5/12 ${isEven ? 'order-last text-left pl-12' : 'text-right pr-12'}`}>
                      {isEven ? (
                        <div className="text-[120px] font-bold text-[#1C2633] leading-none opacity-30 select-none">
                          {step.num}
                        </div>
                      ) : (
                        <>
                          <h3 className="text-2xl font-bold text-[#F5F7FA] mb-3 tracking-wide">{step.title}</h3>
                          <p className="text-[#9AA6B2] text-sm leading-relaxed">{step.desc}</p>
                        </>
                      )}
                    </div>

                    {/* Mobile Layout */}
                    <div className="md:hidden w-full pl-24 pr-4">
                      <div className="text-4xl font-bold text-[#1C2633] mb-2 opacity-50">{step.num}</div>
                      <h3 className="text-xl font-bold text-[#F5F7FA] mb-3 tracking-wide">{step.title}</h3>
                      <p className="text-[#9AA6B2] text-sm leading-relaxed">{step.desc}</p>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-[#1C2633] bg-[#0B0F16]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-medium text-[#F5F7FA] mb-6">START THE LIFECYCLE</h2>
          <p className="text-[#9AA6B2] mb-10 max-w-2xl mx-auto">
            Ready to deploy enterprise AI agents that actually work? Begin with a discovery session.
          </p>
          <a href="/contact" className="inline-block bg-primary text-[#05070B] px-8 py-4 text-sm font-bold tracking-wider hover:bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070B] rounded-sm">
            INITIATE DISCOVERY
          </a>
        </div>
      </section>
    </div>
  );
}
