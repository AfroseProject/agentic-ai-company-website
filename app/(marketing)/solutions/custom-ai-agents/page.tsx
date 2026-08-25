import React from 'react';
import { ArchitectureHero, LifecycleSteps, IntegrationGrid } from '@/components/solutions';

export const metadata = {
  alternates: {
    canonical: '/solutions/custom-ai-agents',
  },
  title: 'Custom AI Agents | Enterprise AI Workforce',
  description: 'Organization-specific AI agents designed around unique business processes, data, policies and systems.'
};

export default function CustomAIAgentsPage() {
  const lifecycleSteps = [
    { title: "Discover", description: "Analyze business workflows, data sources, and define the agent's core objectives." },
    { title: "Design", description: "Architect the agent's reasoning process, tool access, and security guardrails." },
    { title: "Build", description: "Develop prompts, integrate LLMs, and construct deterministic tool connections." },
    { title: "Integrate", description: "Connect the agent to your internal APIs, databases, and SaaS platforms." },
    { title: "Secure", description: "Implement identity controls, least-privilege access, and prompt injection protection." },
    { title: "Test", description: "Evaluate agent performance against edge cases, hallucinations, and safety boundaries." },
    { title: "Deploy", description: "Roll out to production with human-in-the-loop oversight mechanisms." },
    { title: "Operate", description: "Monitor execution, audit logs, and manage live system performance." },
    { title: "Evolve", description: "Optimize workflows and expand agent capabilities based on telemetry data." }
  ];

  const systems = [
    "Custom Internal APIs",
    "Private Vector Databases",
    "On-Premise ERPs",
    "Identity Providers (IdP)",
    "Cloud Storage (AWS/Azure/GCP)",
    "Proprietary Knowledge Bases"
  ];

  return (
    <div className="w-full bg-[#05070B] min-h-screen">
      <ArchitectureHero 
        label="Custom AI Agents"
        headline="ENGINEERED FOR YOUR EXACT BUSINESS PROCESSES."
        description="We design organization-specific AI agents around your unique business logic, proprietary data, and security policies."
      >
        {/* Abstract Custom Agent SVG */}
        <svg aria-hidden="true" viewBox="0 0 400 300" className="w-full h-full text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="150" r="80" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="opacity-20 animate-spin-slow" />
          <circle cx="200" cy="150" r="40" stroke="currentColor" strokeWidth="2" className="opacity-40" />
          <circle cx="200" cy="150" r="10" fill="currentColor" className="opacity-80" />
          
          <path d="M200 50 L200 110" stroke="currentColor" strokeWidth="2" className="opacity-30" />
          <path d="M200 190 L200 250" stroke="currentColor" strokeWidth="2" className="opacity-30" />
          <path d="M100 150 L160 150" stroke="currentColor" strokeWidth="2" className="opacity-30" />
          <path d="M240 150 L300 150" stroke="currentColor" strokeWidth="2" className="opacity-30" />
          
          {/* Nodes */}
          <rect x="180" y="30" width="40" height="20" rx="4" stroke="currentColor" className="opacity-60" />
          <rect x="180" y="250" width="40" height="20" rx="4" stroke="currentColor" className="opacity-60" />
          <rect x="60" y="140" width="40" height="20" rx="4" stroke="currentColor" className="opacity-60" />
          <rect x="300" y="140" width="40" height="20" rx="4" stroke="currentColor" className="opacity-60" />
        </svg>
      </ArchitectureHero>

      <LifecycleSteps 
        title="Custom Agent Development Lifecycle"
        description="A rigorous engineering process from concept to production-grade automation."
        steps={lifecycleSteps}
      />

      <IntegrationGrid 
        title="Connect to Any System"
        description="Custom agents can be integrated with any platform that exposes an API or database connection."
        systems={systems}
      />
    </div>
  );
}
