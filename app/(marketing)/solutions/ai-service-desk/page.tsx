import React from 'react';
import { ArchitectureHero, LifecycleSteps, IntegrationGrid } from '@/components/solutions';

export const metadata = {
  alternates: {
    canonical: '/solutions/ai-service-desk',
  },
  title: 'AI Service Desk | Enterprise AI Workforce',
  description: 'Intelligent IT Service Management and automated incident resolution.'
};

export default function AIServiceDeskPage() {
  const lifecycleSteps = [
    { title: "Identify", description: "Receive employee request and securely verify identity and device context." },
    { title: "Diagnose", description: "Analyze the issue by querying telemetry, logs, and system health status." },
    { title: "Policy Check", description: "Cross-reference the proposed fix against enterprise IT and security policies." },
    { title: "Remediate", description: "Execute approved scripts, API calls, or configuration changes to resolve the issue." },
    { title: "Validate", description: "Confirm the system is functioning correctly after remediation is applied." },
    { title: "Document", description: "Automatically update the ITSM ticket with full resolution notes and close the case." }
  ];

  const systems = [
    "ServiceNow",
    "Jira Service Management",
    "Zendesk",
    "Active Directory / Entra ID",
    "CrowdStrike / SentinelOne",
    "Slack / Microsoft Teams"
  ];

  return (
    <div className="w-full bg-[#05070B] min-h-screen">
      <ArchitectureHero 
        label="AI Service Desk"
        headline="AUTONOMOUS IT INCIDENT RESOLUTION."
        description="Eliminate L1 and L2 support queues. Deploy an IT agent that understands infrastructure, enforces policy, and resolves employee issues instantly."
      >
        {/* Abstract ITSM SVG */}
        <svg aria-hidden="true" viewBox="0 0 400 300" className="w-full h-full text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="150" y="50" width="100" height="200" rx="8" stroke="currentColor" strokeWidth="2" className="opacity-30" />
          <path d="M150 100 L250 100" stroke="currentColor" strokeWidth="2" className="opacity-20" />
          <path d="M150 150 L250 150" stroke="currentColor" strokeWidth="2" className="opacity-20" />
          <path d="M150 200 L250 200" stroke="currentColor" strokeWidth="2" className="opacity-20" />
          
          {/* Active ticket */}
          <rect x="140" y="80" width="120" height="40" rx="4" fill="currentColor" className="opacity-10" />
          <rect x="140" y="80" width="4" height="40" fill="currentColor" className="opacity-80" />
          
          {/* Incoming request */}
          <circle cx="80" cy="100" r="15" stroke="currentColor" strokeWidth="2" className="opacity-40" />
          <path d="M100 100 L130 100" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="opacity-60" />
          <polygon points="130,95 140,100 130,105" fill="currentColor" className="opacity-60" />
          
          {/* Outgoing resolution */}
          <path d="M260 100 L290 100" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="opacity-60" />
          <polygon points="290,95 300,100 290,105" fill="currentColor" className="opacity-60" />
          <circle cx="320" cy="100" r="15" fill="currentColor" className="opacity-80" />
        </svg>
      </ArchitectureHero>

      <LifecycleSteps 
        title="Incident Resolution Flow"
        description="How the AI Service Desk processes and resolves an IT ticket autonomously."
        steps={lifecycleSteps}
      />

      <IntegrationGrid 
        title="ITSM & Infrastructure Integrations"
        description="The AI Service Desk acts on your existing platforms."
        systems={systems}
      />
    </div>
  );
}
