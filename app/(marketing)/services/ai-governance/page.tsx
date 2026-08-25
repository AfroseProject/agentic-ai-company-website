import React from 'react';
import { ArchitectureHero } from '@/components/solutions';

export const metadata = {
  alternates: {
    canonical: '/services/ai-governance',
  },
  title: 'AI Governance | Enterprise AI Workforce',
  description: 'Enterprise AI governance, risk management, and human-in-the-loop oversight.'
};

export default function AIGovernancePage() {
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
            "name": "AI Governance",
            "item": "https://kaniniai.com/services/ai-governance"
          }
        ]
      },
      {
        "@type": "Service",
        "name": "AI Governance",
        "description": "Enterprise AI governance, risk management, and human-in-the-loop oversight.",
        "provider": {
          "@type": "Organization",
          "name": "Enterprise Agentic AI",
          "url": "https://kaniniai.com"
        }
      }
    ]
  };
  const governancePillars = [
    { title: "AI Policies", desc: "Define explicit boundaries for agent behavior, tool usage, and data access at the organizational level." },
    { title: "Access Control", desc: "Granular RBAC integration mapping agent permissions directly to your existing enterprise IAM directories." },
    { title: "Human Oversight", desc: "Configurable 'Assist, Collaborate, Automate' modes to keep humans in control of critical decisions." },
    { title: "Audit Logs", desc: "Cryptographically verifiable logs of all agent actions, reasoning traces, and API interactions." },
    { title: "Agent Evaluation", desc: "Continuous benchmarking of agent performance against established baseline metrics and KPIs." },
    { title: "Risk Classification", desc: "Automated tiering of workflows based on risk, applying stricter oversight to high-impact actions." },
    { title: "Model Governance", desc: "Centralized control over which foundational models are approved for specific enterprise tasks." },
    { title: "Data Governance", desc: "Enforcement of data residency, retention policies, and PII anonymization." },
    { title: "Approval Workflows", desc: "Multi-stage authorization chains requiring human consensus before executing sensitive actions." },
    { title: "Monitoring", desc: "Real-time dashboards for observability into agent fleets, system health, and anomalies." }
  ];

  return (
    <div className="w-full bg-[#05070B] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ArchitectureHero 
        label="AI Governance Services"
        headline="CONTROL AND OVERSIGHT AT SCALE."
        description="Maintain strict compliance and control over your Agentic AI workforce through comprehensive policy enforcement, immutable audit trails, and configurable human oversight."
      >
        {/* Governance Architecture Visualization */}
        <svg aria-hidden="true" viewBox="0 0 400 300" className="w-full h-full text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Policy Layer */}
          <rect x="50" y="40" width="300" height="40" rx="4" stroke="currentColor" strokeWidth="2" className="opacity-80" />
          <text x="200" y="65" fill="currentColor" fontSize="12" textAnchor="middle" className="font-bold tracking-widest">ENTERPRISE POLICY</text>
          
          <path d="M120 80 L120 130" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="opacity-40" />
          <path d="M200 80 L200 130" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="opacity-40" />
          <path d="M280 80 L280 130" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="opacity-40" />
          
          {/* Execution Layer with Guardrails */}
          <rect x="100" y="130" width="200" height="60" rx="4" fill="currentColor" className="opacity-10" />
          <rect x="100" y="130" width="200" height="60" rx="4" stroke="currentColor" strokeWidth="2" className="opacity-60" />
          <circle cx="200" cy="160" r="15" fill="currentColor" className="opacity-80 shadow-[0_0_15px_rgba(79,140,255,0.4)]" />
          <path d="M150 160 L180 160" stroke="currentColor" strokeWidth="2" className="opacity-60" />
          <path d="M220 160 L250 160" stroke="currentColor" strokeWidth="2" className="opacity-60" />
          
          {/* Audit & Monitoring Layer */}
          <path d="M200 190 L200 240" stroke="currentColor" strokeWidth="2" className="opacity-60" />
          <rect x="80" y="240" width="240" height="30" rx="4" stroke="currentColor" strokeWidth="1" className="opacity-40" />
          
          {/* Log data flowing down */}
          <circle cx="200" cy="205" r="3" fill="currentColor" className="opacity-90" />
          <circle cx="200" cy="225" r="3" fill="currentColor" className="opacity-90" />
          
          {/* Decorative database icons for logs */}
          <path d="M110 250 Q120 245 130 250 Q130 260 120 265 Q110 260 110 250 Z" stroke="currentColor" strokeWidth="1" className="opacity-60" />
          <path d="M110 255 Q120 260 130 255" stroke="currentColor" strokeWidth="1" className="opacity-60" />
          
          <path d="M270 250 Q280 245 290 250 Q290 260 280 265 Q270 260 270 250 Z" stroke="currentColor" strokeWidth="1" className="opacity-60" />
          <path d="M270 255 Q280 260 290 255" stroke="currentColor" strokeWidth="1" className="opacity-60" />
        </svg>
      </ArchitectureHero>

      <section className="py-24 border-t border-[#1C2633]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-sm font-bold tracking-widest text-[#F5F7FA] mb-2 uppercase">Governance Pillars</h2>
            <p className="text-[#9AA6B2] text-lg max-w-2xl">
              Our Agentic AI governance framework provides the structure necessary to deploy autonomous systems safely.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {governancePillars.map((pillar, idx) => (
              <div key={idx} className="flex flex-col border-b border-[#1C2633] pb-8">
                <h3 className="text-xl font-medium text-[#F5F7FA] mb-2">{pillar.title}</h3>
                <p className="text-[#9AA6B2] text-base leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Human + AI Interaction Modes */}
      <section className="py-24 border-t border-[#1C2633] bg-[#0B0F16]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-2xl font-medium text-[#F5F7FA] mb-4">DELEGATION WITH BOUNDARIES</h2>
            <p className="text-[#9AA6B2] max-w-2xl mx-auto">
              Not all workflows require full autonomy. We engineer systems with configurable interaction modes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 border border-[#1C2633] rounded-lg bg-[#05070B]">
              <h3 className="text-primary font-bold mb-3 tracking-widest text-sm uppercase">Assist</h3>
              <p className="text-[#9AA6B2] text-sm">AI recommends actions. Human operator decides and executes.</p>
            </div>
            <div className="p-6 border border-[#1C2633] rounded-lg bg-[#05070B]">
              <h3 className="text-secondary font-bold mb-3 tracking-widest text-sm uppercase">Collaborate</h3>
              <p className="text-[#9AA6B2] text-sm">AI performs routine work. Human supervises and approves critical steps.</p>
            </div>
            <div className="p-6 border border-[#1C2633] rounded-lg bg-[#05070B]">
              <h3 className="text-[#F5F7FA] font-bold mb-3 tracking-widest text-sm uppercase">Automate</h3>
              <p className="text-[#9AA6B2] text-sm">AI executes end-to-end within pre-approved deterministic workflows.</p>
            </div>
            <div className="p-6 border border-[#1C2633] rounded-lg bg-[#05070B] relative overflow-hidden">
              <div className="absolute inset-0 border-2 border-primary/20 rounded-lg"></div>
              <h3 className="text-[#F5F7FA] font-bold mb-3 tracking-widest text-sm uppercase">Autonomous</h3>
              <p className="text-[#9AA6B2] text-sm">AI reasons, plans, and executes freely within defined policies and permissions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-[#1C2633] bg-[#05070B]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-medium text-[#F5F7FA] mb-6">ESTABLISH AI OVERSIGHT</h2>
          <p className="text-[#9AA6B2] mb-10 max-w-2xl mx-auto">
            Build the governance structures required to scale your AI workforce safely.
          </p>
          <a href="/contact" className="inline-block bg-primary text-[#05070B] px-8 py-4 text-sm font-bold tracking-wider hover:bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070B] rounded-sm">
            TALK TO AN AI EXPERT
          </a>
        </div>
      </section>
    </div>
  );
}
