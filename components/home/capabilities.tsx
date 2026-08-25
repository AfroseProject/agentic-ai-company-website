import React from 'react';
import Link from 'next/link';

export function Capabilities() {
  return (
    <section className="w-full py-24 lg:py-32 bg-surface/20 border-t border-border/50 relative">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
          
          {/* Section Header (Left Column on Desktop) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="sticky top-32">
              <div className="inline-flex items-center rounded-full border border-border/50 bg-surface/50 px-3 py-1 text-[10px] sm:text-xs font-mono font-medium tracking-widest uppercase text-muted mb-6">
                End-to-End Capabilities
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight mb-6">
                Engineered for enterprise execution.
              </h2>
              
              <p className="text-base md:text-lg text-muted leading-relaxed mb-10 max-w-md">
                We provide the complete technical lifecycle required to transition from traditional software to autonomous AI workforces. From initial architecture to continuous managed operations, we ensure your agents execute securely and reliably.
              </p>
              
              <div className="hidden lg:block">
                <Link 
                  href="/solutions/custom-ai-agents" 
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                >
                  EXPLORE AGENTIC AI
                </Link>
              </div>
            </div>
          </div>

          {/* Capabilities Timeline (Right Column on Desktop) */}
          <div className="lg:col-span-7">
            <div className="relative pl-6 md:pl-10 border-l border-border/30 pb-4">
              
              {/* 1. Architecture & Build */}
              <div className="relative mb-20 md:mb-24 group">
                <div className="absolute -left-[29px] md:-left-[45px] top-1.5 w-2.5 h-2.5 rounded-full bg-surface border border-primary/50 ring-4 ring-background group-hover:bg-primary transition-colors duration-300"></div>
                
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-mono tracking-widest text-primary uppercase">Phase 01</span>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight">Architecture & Build</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-2">
                    <div className="flex flex-col gap-2">
                      <h4 className="text-sm font-semibold tracking-wide text-foreground">AI Engineering</h4>
                      <p className="text-sm text-muted leading-relaxed">
                        Architecture, models, RAG, knowledge systems, APIs, tools, memory, orchestration, observability, and deployment infrastructure.
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h4 className="text-sm font-semibold tracking-wide text-foreground">Custom AI Agents</h4>
                      <p className="text-sm text-muted leading-relaxed">
                        Organization-specific AI agents designed exactly around your unique business processes, enterprise data, policies, and systems.
                      </p>
                    </div>
                  </div>
                  
                  <div className="w-full mt-4 bg-background/40 border border-border/40 rounded-md p-4 flex flex-wrap gap-4 text-[10px] font-mono text-muted uppercase">
                    <span className="flex items-center gap-2"><span className="w-1 h-1 bg-primary/60 rounded-full"></span> Understand</span>
                    <span className="flex items-center gap-2"><span className="w-1 h-1 bg-primary/60 rounded-full"></span> Design</span>
                    <span className="flex items-center gap-2"><span className="w-1 h-1 bg-primary/60 rounded-full"></span> Build</span>
                  </div>
                </div>
              </div>

              {/* 2. Orchestration & Integration */}
              <div className="relative mb-20 md:mb-24 group">
                <div className="absolute -left-[29px] md:-left-[45px] top-1.5 w-2.5 h-2.5 rounded-full bg-surface border border-primary/50 ring-4 ring-background group-hover:bg-primary transition-colors duration-300"></div>
                
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-mono tracking-widest text-primary uppercase">Phase 02</span>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight">Orchestration & Integration</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-2">
                    <div className="flex flex-col gap-2">
                      <h4 className="text-sm font-semibold tracking-wide text-foreground">Multi-Agent Systems</h4>
                      <p className="text-sm text-muted leading-relaxed">
                        Multiple specialized AI agents working together through advanced orchestration, sharing context, and delegating sub-tasks.
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h4 className="text-sm font-semibold tracking-wide text-foreground">Agentic Automation</h4>
                      <p className="text-sm text-muted leading-relaxed">
                        Transformation of complex, multi-step business workflows into intelligent automated operations integrated deeply via API.
                      </p>
                    </div>
                  </div>

                  <div className="w-full mt-4 bg-background/40 border border-border/40 rounded-md p-4 flex flex-wrap gap-4 text-[10px] font-mono text-muted uppercase">
                    <span className="flex items-center gap-2"><span className="w-1 h-1 bg-primary/60 rounded-full"></span> Integrate</span>
                  </div>
                </div>
              </div>

              {/* 3. Security & Governance */}
              <div className="relative mb-20 md:mb-24 group">
                <div className="absolute -left-[29px] md:-left-[45px] top-1.5 w-2.5 h-2.5 rounded-full bg-surface border border-primary/50 ring-4 ring-background group-hover:bg-primary transition-colors duration-300"></div>
                
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-mono tracking-widest text-primary uppercase">Phase 03</span>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight">Security & Governance</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-2">
                    <div className="flex flex-col gap-2">
                      <h4 className="text-sm font-semibold tracking-wide text-foreground">AI Security</h4>
                      <p className="text-sm text-muted leading-relaxed">
                        Identity, authorization, least privilege, guardrails, agent security, prompt injection protection, and AI risk management.
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h4 className="text-sm font-semibold tracking-wide text-foreground">Human Oversight</h4>
                      <p className="text-sm text-muted leading-relaxed">
                        Strict policy enforcement, action validation, and built-in human-in-the-loop escalation paths for sensitive enterprise workflows.
                      </p>
                    </div>
                  </div>

                  <div className="w-full mt-4 bg-background/40 border border-border/40 rounded-md p-4 flex flex-wrap gap-4 text-[10px] font-mono text-muted uppercase">
                    <span className="flex items-center gap-2"><span className="w-1 h-1 bg-primary/60 rounded-full"></span> Secure</span>
                  </div>
                </div>
              </div>

              {/* 4. Managed Operations */}
              <div className="relative group">
                <div className="absolute -left-[29px] md:-left-[45px] top-1.5 w-2.5 h-2.5 rounded-full bg-surface border border-primary/50 ring-4 ring-background group-hover:bg-primary transition-colors duration-300"></div>
                
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-mono tracking-widest text-primary uppercase">Phase 04</span>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight">Managed Operations</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-2">
                    <div className="flex flex-col gap-2">
                      <h4 className="text-sm font-semibold tracking-wide text-foreground">Agent-as-a-Service</h4>
                      <p className="text-sm text-muted leading-relaxed">
                        Ready-to-deploy specialized AI agents operated as a managed service without requiring an internal AI engineering team.
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h4 className="text-sm font-semibold tracking-wide text-foreground">Managed AI Workforce</h4>
                      <p className="text-sm text-muted leading-relaxed">
                        Continuous monitoring, optimization, evaluation, integration maintenance, and full lifecycle management of deployed AI agents.
                      </p>
                    </div>
                  </div>

                  <div className="w-full mt-4 bg-background/40 border border-border/40 rounded-md p-4 flex flex-wrap gap-4 text-[10px] font-mono text-muted uppercase">
                    <span className="flex items-center gap-2"><span className="w-1 h-1 bg-primary/60 rounded-full"></span> Deploy</span>
                    <span className="flex items-center gap-2"><span className="w-1 h-1 bg-primary/60 rounded-full"></span> Operate</span>
                    <span className="flex items-center gap-2"><span className="w-1 h-1 bg-primary/60 rounded-full"></span> Optimize</span>
                  </div>
                </div>
              </div>
              
            </div>
            
            {/* Mobile CTA */}
            <div className="mt-12 block lg:hidden">
              <Link 
                href="/solutions/custom-ai-agents" 
                className="inline-flex h-10 w-full sm:w-auto items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                EXPLORE AGENTIC AI
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
