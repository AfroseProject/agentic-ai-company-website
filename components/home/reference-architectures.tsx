import React from 'react';

const architectures = [
  {
    id: 'security-ops',
    title: 'Security Operations (Incident Response)',
    description: 'Autonomous threat triage, enrichment, and isolation with mandatory human-in-the-loop approval for critical containment actions.',
    systems: ['SIEM', 'EDR', 'Firewall APIs'],
    flow: [
      { step: 'TRIGGER', title: 'SIEM Alert', desc: 'High severity anomaly.' },
      { step: 'ORCHESTRATOR', title: 'Triage Engine', desc: 'Context & intent routing.' },
      { step: 'SPECIALIZED AGENTS', title: 'SOC Analyst Agent', desc: 'Delegates to Threat Intel.' },
      { step: 'ENTERPRISE SYSTEMS', title: 'Security APIs', desc: 'Queries EDR & Feeds.' },
      { step: 'GOVERNANCE', title: 'Human Approval', desc: 'Mandatory escalation.' },
      { step: 'OUTCOME', title: 'Threat Isolated', desc: 'Containment executed.' }
    ]
  },
  {
    id: 'it-ops',
    title: 'IT Operations (Service Desk)',
    description: 'End-to-end resolution of employee IT requests through cross-system diagnostic workflows and policy-validated automated remediation.',
    systems: ['ITSM', 'Active Directory', 'MDM'],
    flow: [
      { step: 'TRIGGER', title: 'Employee Ticket', desc: '"VPN Connection Failure"' },
      { step: 'ORCHESTRATOR', title: 'Service Router', desc: 'Intent classification.' },
      { step: 'SPECIALIZED AGENTS', title: 'Endpoint Agent', desc: 'Collaborates with Identity.' },
      { step: 'ENTERPRISE SYSTEMS', title: 'Enterprise APIs', desc: 'Queries MDM & Directory.' },
      { step: 'VALIDATION', title: 'Policy Adherence', desc: 'Automated compliance check.' },
      { step: 'OUTCOME', title: 'Issue Resolved', desc: 'Profile reset, ticket closed.' }
    ]
  }
];

const getNodeStyle = (step: string) => {
  switch (step) {
    case 'ORCHESTRATOR':
      return 'bg-primary/5 border-primary/30';
    case 'SPECIALIZED AGENTS':
      return 'bg-secondary/5 border-secondary/30';
    case 'GOVERNANCE':
    case 'VALIDATION':
      return 'bg-background border-dashed border-foreground/30';
    default:
      return 'bg-surface border-border/50';
  }
};

const getStepTextColor = (step: string) => {
  switch (step) {
    case 'ORCHESTRATOR':
      return 'text-primary';
    case 'SPECIALIZED AGENTS':
      return 'text-secondary/90';
    case 'GOVERNANCE':
    case 'VALIDATION':
      return 'text-foreground/80';
    default:
      return 'text-muted';
  }
};

export function ReferenceArchitectures() {
  return (
    <section className="w-full py-24 lg:py-32 bg-background border-t border-border/50 relative">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <div className="inline-flex items-center rounded-full border border-border/50 bg-surface/50 px-3 py-1 text-[10px] sm:text-xs font-mono font-medium tracking-widest uppercase text-muted mb-6 shadow-sm">
            Reference Architectures
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight">
            Enterprise Application Domains.
          </h2>
          <p className="text-base md:text-lg text-muted leading-relaxed">
            Explore how our Agentic AI engineering capabilities are applied to solve complex workflow automation challenges across critical business functions.
          </p>
        </div>

        {/* Architectures List */}
        <div className="flex flex-col gap-12 lg:gap-16">
          {architectures.map((arch) => (
            <div key={arch.id} className="w-full bg-surface/30 border border-border/40 rounded-2xl overflow-hidden shadow-sm transition-colors hover:border-border/60">
              
              {/* Architecture Header */}
              <div className="border-b border-border/40 bg-surface/50 p-6 md:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight">{arch.title}</h3>
                  <p className="text-sm text-muted max-w-2xl leading-relaxed">{arch.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {arch.systems.map(sys => (
                    <span key={sys} className="text-[10px] font-mono tracking-widest uppercase border border-border/50 bg-background px-3 py-1.5 rounded-md text-muted shadow-sm">
                      {sys}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Architecture Flow Diagram */}
              <div className="p-6 md:p-8 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-2 lg:gap-4 lg:min-w-max">
                  {arch.flow.map((node, i) => (
                    <React.Fragment key={i}>
                      
                      {/* Node Card */}
                      <div className={`flex-1 min-w-[180px] lg:w-48 border rounded-lg p-5 flex flex-col gap-3 shrink-0 shadow-sm transition-colors duration-300 ${getNodeStyle(node.step)}`}>
                        <div className={`text-[10px] font-mono tracking-widest uppercase ${getStepTextColor(node.step)}`}>
                          {node.step}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-foreground mb-1.5">{node.title}</h4>
                          <p className="text-xs text-muted leading-relaxed opacity-90">{node.desc}</p>
                        </div>
                      </div>

                      {/* Desktop Connector (Right Arrow) */}
                      {i < arch.flow.length - 1 && (
                        <div className="hidden lg:flex shrink-0 items-center justify-center text-border/80">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                      )}

                      {/* Mobile Connector (Down Arrow) */}
                      {i < arch.flow.length - 1 && (
                        <div className="flex lg:hidden shrink-0 h-6 items-center justify-start text-border/80 pl-10 my-1">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                          </svg>
                        </div>
                      )}

                    </React.Fragment>
                  ))}
                </div>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
