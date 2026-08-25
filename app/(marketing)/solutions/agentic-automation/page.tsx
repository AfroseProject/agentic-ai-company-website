import React from 'react';
import { ArchitectureHero, LifecycleSteps, IntegrationGrid } from '@/components/solutions';

export const metadata = {
  alternates: {
    canonical: '/solutions/agentic-automation',
  },
  title: 'Agentic Automation | Enterprise AI Workforce',
  description: 'Transformation of complex multi-step business workflows into intelligent automated operations.'
};

export default function AgenticAutomationPage() {
  const lifecycleSteps = [
    { title: "Goal", description: "The overarching business objective requested by the user or triggered system." },
    { title: "Context", description: "Gathering surrounding information, system state, and historical data." },
    { title: "Reasoning", description: "Evaluating the context against policies to determine the optimal path forward." },
    { title: "Planning", description: "Generating a multi-step sequence of actions required to achieve the goal." },
    { title: "Tool Selection", description: "Identifying which APIs, databases, or systems are needed for execution." },
    { title: "Execution", description: "Autonomously carrying out the planned actions across enterprise systems." },
    { title: "Validation", description: "Confirming the outcome matches the intent before finalizing the workflow." },
    { title: "Escalation", description: "Routing exceptions and edge cases to human operators when confidence is low." }
  ];

  const systems = [
    "Workflow Orchestrators",
    "Enterprise Message Buses",
    "RPA Platforms",
    "ITSM Systems",
    "CRM Platforms",
    "HR Information Systems"
  ];

  return (
    <div className="w-full bg-[#05070B] min-h-screen">
      <ArchitectureHero 
        label="Agentic Automation"
        headline="AI THAT DOES MORE THAN ANSWER."
        description="Move beyond static rules. We transform complex, dynamic business workflows into intelligent operations that reason, plan, and execute."
      >
        {/* Abstract Workflow SVG */}
        <svg aria-hidden="true" viewBox="0 0 400 300" className="w-full h-full text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Traditional flow */}
          <path d="M50 100 L350 100" stroke="currentColor" strokeWidth="2" strokeDasharray="2 4" className="opacity-20" />
          <rect x="50" y="90" width="20" height="20" rx="4" fill="currentColor" className="opacity-40" />
          <rect x="190" y="90" width="20" height="20" rx="4" fill="currentColor" className="opacity-40" />
          <rect x="330" y="90" width="20" height="20" rx="4" fill="currentColor" className="opacity-40" />
          
          {/* Agentic flow */}
          <path d="M50 200 C 125 200, 150 150, 200 150 C 250 150, 275 250, 350 200" stroke="currentColor" strokeWidth="2" className="opacity-50" />
          <circle cx="50" cy="200" r="8" fill="currentColor" className="opacity-80" />
          <circle cx="125" cy="183" r="6" stroke="currentColor" strokeWidth="2" className="opacity-60" />
          <circle cx="200" cy="150" r="10" fill="currentColor" className="opacity-90 shadow-[0_0_15px_rgba(79,140,255,0.5)]" />
          <circle cx="275" cy="216" r="6" stroke="currentColor" strokeWidth="2" className="opacity-60" />
          <circle cx="350" cy="200" r="8" fill="currentColor" className="opacity-80" />
        </svg>
      </ArchitectureHero>

      <LifecycleSteps 
        title="The Agentic Workflow"
        description="How agentic automation handles dynamic execution compared to static rule-based systems."
        steps={lifecycleSteps}
      />

      <IntegrationGrid 
        title="Enterprise Connectors"
        description="Agentic automation bridges the gap between disparate business platforms."
        systems={systems}
      />
    </div>
  );
}
