import React from 'react';
import { ArchitectureHero } from '@/components/solutions';

export const metadata = {
  alternates: {
    canonical: '/technology',
  },
  title: 'Agent Architecture | Enterprise AI Workforce',
  description: 'Deep dive into our enterprise-grade Agentic AI architecture, orchestration layers, and security systems.'
};

export default function TechnologyPage() {
  return (
    <div className="w-full bg-[#05070B] min-h-screen">
      <ArchitectureHero 
        label="Technology Core"
        headline="ENTERPRISE AGENT ARCHITECTURE."
        description="A deterministic, policy-driven architecture designed to safely integrate Agentic AI with your core enterprise systems."
      >
        {/* Abstract Stack SVG */}
        <svg aria-hidden="true" viewBox="0 0 400 300" className="w-full h-full text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Base / Enterprise Systems */}
          <rect x="100" y="240" width="200" height="40" rx="4" stroke="currentColor" strokeWidth="2" className="opacity-20" />
          <path d="M120 260 L280 260" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="opacity-20" />
          
          {/* Tool Layer */}
          <rect x="120" y="190" width="160" height="30" rx="4" stroke="currentColor" strokeWidth="2" className="opacity-40" />
          <path d="M200 190 L200 240" stroke="currentColor" strokeWidth="2" className="opacity-40" />
          
          {/* Specialized Agents */}
          <rect x="140" y="130" width="30" height="40" rx="4" fill="currentColor" className="opacity-60" />
          <rect x="185" y="130" width="30" height="40" rx="4" fill="currentColor" className="opacity-60" />
          <rect x="230" y="130" width="30" height="40" rx="4" fill="currentColor" className="opacity-60" />
          <path d="M200 170 L200 190" stroke="currentColor" strokeWidth="2" className="opacity-40" />
          
          {/* Orchestrator */}
          <rect x="140" y="70" width="120" height="40" rx="4" stroke="currentColor" strokeWidth="2" className="opacity-80" />
          <circle cx="200" cy="90" r="10" fill="currentColor" className="opacity-90 shadow-[0_0_15px_rgba(79,140,255,0.5)]" />
          
          {/* Experience Layer & Users */}
          <path d="M200 20 L200 70" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="opacity-60" />
          <circle cx="200" cy="20" r="6" fill="currentColor" className="opacity-40" />
          <path d="M190 35 Q200 25 210 35" stroke="currentColor" strokeWidth="2" className="opacity-40" />
        </svg>
      </ArchitectureHero>

      {/* Main Architecture Diagram Section */}
      <section className="py-24 border-t border-[#1C2633] relative overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="mb-16">
            <h2 className="text-sm font-bold tracking-widest text-[#F5F7FA] mb-2 uppercase">Execution Stack</h2>
            <p className="text-[#9AA6B2] text-lg">The deterministic flow from user intent to enterprise execution.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            
            {/* Left Column: The Stack */}
            <div className="lg:col-span-8 flex flex-col space-y-4">
              
              {/* Layer: Users */}
              <div className="flex flex-col items-center">
                <div className="w-full bg-[#0B0F16] border border-[#1C2633] rounded-lg p-6 flex flex-col sm:flex-row justify-between items-center relative overflow-hidden group">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1C2633] group-hover:bg-primary transition-colors"></div>
                  <div>
                    <h3 className="text-xl font-medium text-[#F5F7FA] mb-1">Users & Triggers</h3>
                    <p className="text-sm text-[#9AA6B2]">Human operators, scheduled cron jobs, or API webhooks.</p>
                  </div>
                  <div className="mt-4 sm:mt-0 text-primary opacity-60">
                    <svg aria-hidden="true" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                <div className="h-8 w-px bg-[#1C2633] flex items-center justify-center">
                  <svg aria-hidden="true" className="w-4 h-4 text-[#1C2633] translate-y-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </div>

              {/* Layer: Experience */}
              <div className="flex flex-col items-center">
                <div className="w-full bg-[#0B0F16] border border-[#1C2633] rounded-lg p-6 flex flex-col sm:flex-row justify-between items-center relative overflow-hidden group">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1C2633] group-hover:bg-secondary transition-colors"></div>
                  <div>
                    <h3 className="text-xl font-medium text-[#F5F7FA] mb-1">Experience Layer</h3>
                    <p className="text-sm text-[#9AA6B2]">Chat interfaces, dashboards, Slack/Teams bots, and headless APIs.</p>
                  </div>
                </div>
                <div className="h-8 w-px bg-[#1C2633] flex items-center justify-center">
                  <svg aria-hidden="true" className="w-4 h-4 text-[#1C2633] translate-y-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </div>

              {/* Layer: Orchestrator */}
              <div className="flex flex-col items-center">
                <div className="w-full bg-[#05070B] border-2 border-primary/30 rounded-lg p-6 relative overflow-hidden group shadow-[0_0_30px_rgba(79,140,255,0.05)]">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
                  <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-1 tracking-wide">Agent Orchestrator</h3>
                      <p className="text-sm text-[#9AA6B2]">The central reasoning engine. Plans workflows, routes tasks, and synthesizes results.</p>
                    </div>
                  </div>
                  {/* Internal Orchestrator Loop */}
                  <div className="w-full bg-[#0B0F16] border border-[#1C2633] rounded p-4 flex items-center justify-between text-xs font-medium text-[#F5F7FA] tracking-wider uppercase">
                    <span>Observe</span>
                    <span className="text-[#1C2633]">→</span>
                    <span>Reason</span>
                    <span className="text-[#1C2633]">→</span>
                    <span>Plan</span>
                    <span className="text-[#1C2633]">→</span>
                    <span className="text-secondary">Delegate</span>
                  </div>
                </div>
                <div className="h-8 w-px bg-[#1C2633] flex items-center justify-center">
                  <svg aria-hidden="true" className="w-4 h-4 text-[#1C2633] translate-y-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </div>

              {/* Layer: Specialized Agents */}
              <div className="flex flex-col items-center">
                <div className="w-full bg-[#0B0F16] border border-[#1C2633] rounded-lg p-6 relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1C2633]"></div>
                  <div className="mb-4">
                    <h3 className="text-xl font-medium text-[#F5F7FA] mb-1">Specialized Agents</h3>
                    <p className="text-sm text-[#9AA6B2]">Domain-specific expert models executed in parallel.</p>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {["IT Ops", "Security", "Data Eng", "Finance"].map((agent, i) => (
                      <div key={i} className="bg-[#05070B] border border-[#1C2633] rounded p-3 text-center text-sm font-medium text-secondary">
                        {agent}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="h-8 w-px bg-[#1C2633] flex items-center justify-center">
                  <svg aria-hidden="true" className="w-4 h-4 text-[#1C2633] translate-y-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </div>

              {/* Layer: Tool Layer */}
              <div className="flex flex-col items-center">
                <div className="w-full bg-[#0B0F16] border border-[#1C2633] rounded-lg p-6 relative overflow-hidden group">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1C2633] group-hover:bg-[#9AA6B2] transition-colors"></div>
                  <div>
                    <h3 className="text-xl font-medium text-[#F5F7FA] mb-1">Tool Layer (MCP)</h3>
                    <p className="text-sm text-[#9AA6B2]">Deterministic function calling, APIs, and Model Context Protocol (MCP) integrations.</p>
                  </div>
                </div>
                <div className="h-8 w-px bg-[#1C2633] flex items-center justify-center">
                  <svg aria-hidden="true" className="w-4 h-4 text-[#1C2633] translate-y-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </div>

              {/* Layer: Enterprise Systems */}
              <div className="flex flex-col items-center">
                <div className="w-full bg-[#05070B] border border-[#1C2633] rounded-lg p-6 relative overflow-hidden group">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1C2633]"></div>
                  <div>
                    <h3 className="text-xl font-medium text-[#F5F7FA] mb-1">Enterprise Systems</h3>
                    <p className="text-sm text-[#9AA6B2]">Databases, ERPs, CRMs, Cloud Infrastructure, and Legacy Mainframes.</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Orthogonal Capabilities */}
            <div className="lg:col-span-4 flex flex-col space-y-6 lg:pl-8 lg:border-l lg:border-[#1C2633]">
              <div className="mb-2">
                <h2 className="text-sm font-bold tracking-widest text-[#F5F7FA] mb-2 uppercase">Platform Capabilities</h2>
                <p className="text-[#9AA6B2] text-sm">Services operating across the entire execution stack.</p>
              </div>

              {[
                { title: "Security", desc: "Identity, IAM, least-privilege enforcement, and prompt injection mitigation." },
                { title: "Governance", desc: "Policy enforcement, human-in-the-loop workflows, and rigid guardrails." },
                { title: "Knowledge", desc: "Enterprise RAG, vector databases, and semantic search routing." },
                { title: "Memory", desc: "Short-term context windows and long-term state persistence across sessions." },
                { title: "Observability", desc: "Audit logging, performance telemetry, and AI evaluation metrics." }
              ].map((cap, i) => (
                <div key={i} className="p-6 border border-[#1C2633] rounded-lg bg-[#0B0F16] hover:border-primary/50 transition-colors">
                  <h3 className="text-lg font-medium text-[#F5F7FA] mb-2">{cap.title}</h3>
                  <p className="text-[#9AA6B2] text-sm leading-relaxed">{cap.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-[#1C2633] bg-[#05070B]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-medium text-[#F5F7FA] mb-6">DEPLOY THE ARCHITECTURE</h2>
          <p className="text-[#9AA6B2] mb-10 max-w-2xl mx-auto">
            Discuss integration of the Agentic execution stack with your existing enterprise systems.
          </p>
          <a href="/contact" className="inline-block bg-primary text-[#05070B] px-8 py-4 text-sm font-bold tracking-wider hover:bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070B] rounded-sm">
            BUILD YOUR AI AGENT
          </a>
        </div>
      </section>

    </div>
  );
}
