import React from 'react';
import { ArchitectureHero, LifecycleSteps, IntegrationGrid } from '@/components/solutions';

export const metadata = {
  alternates: {
    canonical: '/solutions/multi-agent-systems',
  },
  title: 'Multi-Agent Systems | Enterprise AI Workforce',
  description: 'Multiple specialized AI agents working together through intelligent orchestration.'
};

export default function MultiAgentSystemsPage() {
  const lifecycleSteps = [
    { title: "User Request", description: "A complex enterprise objective is submitted by a human operator or system trigger." },
    { title: "Orchestration", description: "The central AI Orchestrator receives the goal, analyzes context, and breaks it into sub-tasks." },
    { title: "Delegation", description: "Sub-tasks are routed to specialized departmental agents (e.g., Security, IT, HR) based on their expertise." },
    { title: "Execution", description: "Specialized agents execute their specific tasks simultaneously using domain-specific tools." },
    { title: "Synthesis", description: "The Orchestrator aggregates the results from all specialized agents into a unified context." },
    { title: "Completion", description: "The final, validated response or action sequence is delivered back to the user or system." }
  ];

  const systems = [
    "Enterprise AI Orchestrators",
    "Agent Registration Registries",
    "Shared Memory Stores (Vector DBs)",
    "API Gateways",
    "Event Streaming Platforms (Kafka)",
    "Identity & Access Management"
  ];

  return (
    <div className="w-full bg-[#05070B] min-h-screen">
      <ArchitectureHero 
        label="Multi-Agent Systems"
        headline="SPECIALIZED AGENTS. UNIFIED EXECUTION."
        description="Complex business processes require more than a single model. We engineer multi-agent architectures where specialized AI agents collaborate to solve enterprise-scale problems."
      >
        {/* Abstract Multi-Agent SVG */}
        <svg aria-hidden="true" viewBox="0 0 400 300" className="w-full h-full text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Central Orchestrator */}
          <circle cx="200" cy="150" r="30" fill="currentColor" className="opacity-80 shadow-[0_0_20px_rgba(79,140,255,0.6)]" />
          <circle cx="200" cy="150" r="45" stroke="currentColor" strokeWidth="1" className="opacity-40 animate-pulse" />
          
          {/* Specialized Agents */}
          <circle cx="100" cy="80" r="15" fill="currentColor" className="opacity-60" />
          <circle cx="300" cy="80" r="15" fill="currentColor" className="opacity-60" />
          <circle cx="100" cy="220" r="15" fill="currentColor" className="opacity-60" />
          <circle cx="300" cy="220" r="15" fill="currentColor" className="opacity-60" />
          
          {/* Connections */}
          <path d="M185 130 L110 90" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="opacity-40" />
          <path d="M215 130 L290 90" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="opacity-40" />
          <path d="M185 170 L110 210" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="opacity-40" />
          <path d="M215 170 L290 210" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="opacity-40" />
          
          {/* Data Packets */}
          <circle cx="147.5" cy="110" r="3" fill="currentColor" className="opacity-90" />
          <circle cx="252.5" cy="190" r="3" fill="currentColor" className="opacity-90" />
        </svg>
      </ArchitectureHero>

      <LifecycleSteps 
        title="Orchestrated Workflow"
        description="How the orchestrator coordinates specialized agents to achieve complex goals."
        steps={lifecycleSteps}
      />

      <IntegrationGrid 
        title="Infrastructure Requirements"
        description="The technical foundation required for multi-agent collaboration."
        systems={systems}
      />
    </div>
  );
}
