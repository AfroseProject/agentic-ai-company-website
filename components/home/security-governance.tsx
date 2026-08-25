import React from 'react';
import Link from 'next/link';

export function SecurityGovernance() {
  return (
    <section className="w-full py-24 lg:py-32 bg-surface/10 border-t border-border/50 relative overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Column */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center rounded-full border border-border/50 bg-background/50 px-3 py-1 text-[10px] sm:text-xs font-mono font-medium tracking-widest uppercase text-muted shadow-sm w-fit mb-4">
              Security & Governance
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight mb-4">
              Autonomy does not mean absence of control.
            </h2>
            <p className="text-base md:text-lg text-muted leading-relaxed mb-4">
              Enterprise agents are not simply released into production. We engineer strict security boundaries, continuous observability, and explicit human oversight into every AI deployment.
            </p>

            <div className="flex flex-col gap-8 mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                <div className="flex flex-col gap-3">
                  <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/80"></span>
                    AI Security
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    Identity, least privilege, prompt injection protection, tool authentication, and guardrails at the architectural level.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/80"></span>
                    Governance
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    Strict definitions and active controls over agent behavior, permissions, policies, and enterprise integration boundaries.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/80"></span>
                    Observability
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    Continuous visibility, audit trails, and telemetry into agent reasoning, system events, actions, and performance outcomes.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/80"></span>
                    Human Oversight
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    Built-in human-in-the-loop escalation paths, validation gates, and approvals for highly sensitive enterprise workflows.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link 
                href="/services/ai-security" 
                className="inline-flex h-10 items-center justify-center rounded-md border border-border/50 bg-surface px-8 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-background hover:text-primary"
              >
                EXPLORE AI SECURITY
              </Link>
            </div>
          </div>

          {/* Visual Column - The Control Boundary Diagram */}
          <div className="w-full relative flex items-center justify-center min-h-[400px]">
            {/* The Outer Box - Enterprise Perimeter */}
            <div className="w-full relative flex items-center justify-center border border-border/30 rounded-xl bg-background/30 p-5 sm:p-8 md:p-10 shadow-sm transition-all duration-500 hover:border-border/50">
              <div className="absolute top-3 left-4 text-[9px] sm:text-[10px] font-mono tracking-widest text-muted uppercase">1. Enterprise Perimeter</div>
              
              {/* Governance & Security */}
              <div className="w-full relative flex items-center justify-center border border-primary/20 bg-primary/5 rounded-lg p-5 sm:p-8 md:p-10 mt-6 sm:mt-4">
                <div className="absolute top-3 left-4 text-[9px] sm:text-[10px] font-mono tracking-widest text-primary/70 uppercase">2. Security & Governance</div>
                <div className="absolute top-3 right-4 text-[9px] sm:text-[10px] font-mono tracking-widest text-primary/70 uppercase hidden sm:flex items-center gap-2">
                   <span className="w-1.5 h-1.5 rounded-full bg-primary/50 animate-pulse"></span>
                   Telemetry
                </div>
                
                {/* Human Oversight & Validation */}
                <div className="w-full relative flex items-center justify-center border border-dashed border-secondary/40 bg-secondary/5 rounded-lg p-5 sm:p-8 md:p-10 mt-6 sm:mt-4">
                  <div className="absolute top-3 left-4 text-[9px] sm:text-[10px] font-mono tracking-widest text-secondary/80 uppercase">3. Human Validation Gates</div>
                  
                  {/* Core - AI Workforce */}
                  <div className="w-full relative flex items-center justify-center bg-surface border border-border/50 rounded-lg p-8 sm:p-12 shadow-md group overflow-hidden mt-6 sm:mt-4 transition-all duration-300 hover:border-primary/40 hover:shadow-primary/5">
                    {/* Subtle scanner effect or glow */}
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="flex flex-col items-center gap-4 relative z-10">
                      <div className="relative flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-primary/30 bg-background shadow-inner">
                         <div className="absolute inset-0 rounded-full border border-primary/20 animate-[spin_4s_linear_infinite]"></div>
                         <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-primary animate-pulse shadow-[0_0_15px_rgba(79,140,255,0.6)]"></div>
                      </div>
                      <div className="text-xs sm:text-sm font-bold tracking-widest text-foreground text-center uppercase">AI Workforce</div>
                      <div className="text-[9px] sm:text-[10px] font-mono text-muted uppercase text-center bg-background/50 px-2 sm:px-3 py-1 rounded border border-border/50 transition-colors group-hover:border-primary/30 group-hover:text-primary/80">
                        Protected Execution
                      </div>
                    </div>
                  </div>
                  
                  {/* Gate Indicators */}
                  <div className="hidden sm:flex absolute -bottom-3 left-1/2 -translate-x-1/2 bg-surface border border-dashed border-secondary/40 px-2 py-0.5 rounded text-[8px] font-mono text-secondary/60 uppercase">
                    Audit Log
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
