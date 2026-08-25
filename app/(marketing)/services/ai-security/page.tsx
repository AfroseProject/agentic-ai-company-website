import React from 'react';
import { ArchitectureHero } from '@/components/solutions';

export const metadata = {
  alternates: {
    canonical: '/services/ai-security',
  },
  title: 'AI Security | Enterprise AI Workforce',
  description: 'Enterprise-grade security architecture for Agentic AI, preventing prompt injection, excessive agency, and data exfiltration.'
};

export default function AISecurityPage() {
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
            "name": "AI Security",
            "item": "https://kaniniai.com/services/ai-security"
          }
        ]
      },
      {
        "@type": "Service",
        "name": "AI Security",
        "description": "Enterprise-grade security architecture for Agentic AI, preventing prompt injection, excessive agency, and data exfiltration.",
        "provider": {
          "@type": "Organization",
          "name": "Enterprise Agentic AI",
          "url": "https://kaniniai.com"
        }
      }
    ]
  };
  const securityFeatures = [
    { name: "Identity & Authorization", desc: "Agents authenticate using standard enterprise IdP, assuming specific roles with restricted scopes." },
    { name: "Least Privilege & Tool Permissions", desc: "Rigid API access controls ensure agents can only execute tools explicitly permitted for their active task." },
    { name: "Data Security", desc: "In-transit and at-rest encryption, with automatic redaction of PII and MNPI before LLM processing." },
    { name: "Prompt Injection Defense", desc: "Multi-layered input validation and intent classification to prevent adversarial manipulation." },
    { name: "Indirect Prompt Injection", desc: "Sanitization of data retrieved from external APIs or documents before it enters the agent's context window." },
    { name: "Excessive Agency Prevention", desc: "Hardcoded boundaries on autonomous loops; mandatory human-in-the-loop triggers for high-risk actions." },
    { name: "Agent-to-Agent Security", desc: "Mutual authentication and strictly typed payloads when specialized agents communicate." },
    { name: "Memory Security", desc: "Tenant-isolated vector databases with RBAC enforcing access to long-term agent memory." },
    { name: "Auditability", desc: "Immutable logging of every prompt, context window, reasoning step, tool call, and output." },
    { name: "Human Approval (HITL)", desc: "Configurable workflow interruptions requiring cryptographic approval from a human operator." },
    { name: "Monitoring & AI Red Teaming", desc: "Continuous adversarial testing and real-time behavioral anomaly detection." },
    { name: "Model Risk", desc: "Provider-agnostic routing ensuring fallback to alternative LLMs during outages or behavioral degradation." }
  ];

  return (
    <div className="w-full bg-[#05070B] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ArchitectureHero 
        label="AI Security Services"
        headline="SECURE THE AI THAT RUNS YOUR BUSINESS."
        description="Deploy autonomous systems with confidence. Our agentic architectures are engineered from the ground up to prevent excessive agency, mitigate prompt injection, and enforce enterprise data boundaries."
      >
        {/* Agent Security Architecture Visualization */}
        <svg aria-hidden="true" viewBox="0 0 400 300" className="w-full h-full text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Central Protected Agent */}
          <rect x="160" y="110" width="80" height="80" rx="8" stroke="currentColor" strokeWidth="2" className="opacity-90 shadow-[0_0_20px_rgba(79,140,255,0.4)]" />
          <circle cx="200" cy="150" r="20" fill="currentColor" className="opacity-80" />
          
          {/* Shield / Perimeter */}
          <path d="M200 40 L300 70 L300 180 C300 230 250 270 200 290 C150 270 100 230 100 180 L100 70 Z" stroke="currentColor" strokeWidth="2" className="opacity-30" strokeDasharray="4 4" />
          
          {/* Input Sanitization (Left) */}
          <path d="M40 150 L80 150" stroke="currentColor" strokeWidth="2" className="opacity-40" />
          <rect x="80" y="135" width="10" height="30" fill="#EF4444" className="opacity-80" /> {/* Red block indicating stopped threat */}
          <circle cx="40" cy="150" r="4" fill="#EF4444" className="opacity-80" />
          
          {/* Validated Input */}
          <path d="M40 110 L100 110 L100 140 L160 140" stroke="currentColor" strokeWidth="2" className="opacity-60" />
          <circle cx="40" cy="110" r="4" fill="currentColor" className="opacity-80" />
          <circle cx="130" cy="140" r="3" fill="currentColor" className="opacity-90" />
          
          {/* RBAC / IAM Check (Top) */}
          <rect x="180" y="20" width="40" height="20" rx="2" stroke="currentColor" strokeWidth="1" className="opacity-60" />
          <path d="M200 40 L200 110" stroke="currentColor" strokeWidth="2" className="opacity-40" />
          
          {/* Output / Tool Execution (Right) */}
          <path d="M240 150 L280 150" stroke="currentColor" strokeWidth="2" className="opacity-60" />
          <rect x="280" y="130" width="40" height="40" rx="4" stroke="currentColor" strokeWidth="2" className="opacity-60" />
          
          {/* HITL Override (Bottom) */}
          <rect x="175" y="260" width="50" height="20" rx="2" stroke="currentColor" strokeWidth="1" className="opacity-60" />
          <path d="M200 260 L200 190" stroke="currentColor" strokeWidth="2" className="opacity-40" strokeDasharray="2 2" />
        </svg>
      </ArchitectureHero>

      <section className="py-24 border-t border-[#1C2633]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-sm font-bold tracking-widest text-[#F5F7FA] mb-2 uppercase">Security Controls</h2>
            <p className="text-[#9AA6B2] text-lg max-w-2xl">
              We implement a defense-in-depth approach to AI security, ensuring agents operate safely within deterministic boundaries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map((feature, idx) => (
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
          <h2 className="text-3xl font-medium text-[#F5F7FA] mb-6">SECURE YOUR AI INITIATIVES</h2>
          <p className="text-[#9AA6B2] mb-10 max-w-2xl mx-auto">
            Discuss our security architectures and implementation practices with a technical expert.
          </p>
          <a href="/contact" className="inline-block bg-primary text-[#05070B] px-8 py-4 text-sm font-bold tracking-wider hover:bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070B] rounded-sm">
            TALK TO AN AI EXPERT
          </a>
        </div>
      </section>
    </div>
  );
}
