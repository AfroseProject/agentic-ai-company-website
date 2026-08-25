import React from 'react';
import Link from 'next/link';

const steps = [
  { id: '01', name: 'DISCOVER', desc: 'Workflow analysis and ROI mapping.', className: '' },
  { id: '02', name: 'DESIGN', desc: 'Architecture and policy definition.', className: '' },
  { id: '03', name: 'BUILD', desc: 'System, tool, and prompt engineering.', className: '' },
  { id: '04', name: 'INTEGRATE', desc: 'Enterprise systems connection.', className: '' },
  { id: '05', name: 'SECURE', desc: 'Identity, guardrails, and compliance.', className: 'lg:col-start-4 lg:row-start-2' },
  { id: '06', name: 'DEPLOY', desc: 'Staging and production rollout.', className: 'lg:col-start-3 lg:row-start-2' },
  { id: '07', name: 'OPERATE', desc: 'Managed execution and telemetry.', className: 'lg:col-start-2 lg:row-start-2' },
  { id: '08', name: 'OPTIMIZE', desc: 'Continuous evaluation and tuning.', className: 'lg:col-start-1 lg:row-start-2' },
];

export function AgentAsAService() {
  return (
    <section className="w-full py-24 lg:py-32 bg-background border-t border-border/50 relative overflow-hidden">
      {/* Subtle ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[600px] bg-primary/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="container px-4 md:px-6 mx-auto max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <div className="inline-flex items-center rounded-full border border-border/50 bg-surface/50 px-3 py-1 text-[10px] sm:text-xs font-mono font-medium tracking-widest uppercase text-primary mb-6 shadow-sm">
            Agent-As-A-Service
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight">
            Your AI Agent.<br className="hidden sm:block" /> Our Engineering. Continuously Operated.
          </h2>
          <p className="text-base md:text-lg text-muted leading-relaxed">
            Deploy specialized agents without building an internal AI engineering team. We manage the entire lifecycle from initial architecture through continuous optimization and governance.
          </p>
        </div>

        {/* 8-Step Loop Visualization */}
        <div className="relative w-full">
          
          {/* Mobile/Tablet Timeline Line (Hidden on Desktop) */}
          <div className="absolute left-[27px] top-4 bottom-4 w-[1px] bg-border/40 lg:hidden z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-8 relative z-10">
            {steps.map((step, index) => {
              return (
                <div key={step.id} className={`relative flex lg:block items-stretch gap-6 lg:gap-0 ${step.className}`}>
                  
                  {/* Mobile Timeline Node */}
                  <div className="lg:hidden shrink-0 mt-6 relative z-10">
                    <div className="w-6 h-6 rounded-full bg-surface border border-primary/40 ring-4 ring-background flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/80"></div>
                    </div>
                  </div>

                  {/* Card Node */}
                  <div className="bg-surface border border-border/40 p-6 rounded-xl w-full h-full flex flex-col justify-between relative z-10 group hover:border-primary/40 hover:bg-surface/80 transition-all duration-300 shadow-sm">
                    <div className="text-[10px] font-mono text-muted mb-8 group-hover:text-primary transition-colors tracking-widest">
                      PHASE {step.id}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground tracking-wide mb-2">{step.name}</h4>
                      <p className="text-xs text-muted leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">{step.desc}</p>
                    </div>
                  </div>

                  {/* Desktop Connectors (Hidden on Mobile/Tablet) */}
                  
                  {/* Connect 01 -> 02, 02 -> 03, 03 -> 04 */}
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-8 w-8 h-[1px] bg-primary/20 z-0">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[2px] border-y-[3px] border-l-[4px] border-y-transparent border-l-primary/40 w-0 h-0"></div>
                    </div>
                  )}

                  {/* Connect 04 -> 05 (Down) */}
                  {index === 3 && (
                    <div className="hidden lg:block absolute -bottom-8 right-1/2 w-[1px] h-8 bg-primary/20 z-0">
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[2px] border-x-[3px] border-t-[4px] border-x-transparent border-t-primary/40 w-0 h-0"></div>
                    </div>
                  )}

                  {/* Connect 05 -> 06, 06 -> 07, 07 -> 08 (Leftwards, noting DOM order vs visual order) */}
                  {/* Wait: DOM 05 is visual right. DOM 06 is visual mid-right. DOM 07 is visual mid-left. DOM 08 is visual left. */}
                  {/* 05 connects to 06, so out of 05's LEFT side into 06's RIGHT side. */}
                  {/* Since this connector is attached to 05, we draw it extending LEFT. */}
                  {(index === 4 || index === 5 || index === 6) && (
                    <div className="hidden lg:block absolute top-1/2 -left-8 w-8 h-[1px] bg-primary/20 z-0">
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[2px] border-y-[3px] border-r-[4px] border-y-transparent border-r-primary/40 w-0 h-0"></div>
                    </div>
                  )}

                  {/* Connect 08 -> 01 (Up) */}
                  {index === 7 && (
                    <div className="hidden lg:block absolute -top-8 left-1/2 w-[1px] h-8 bg-primary/20 z-0">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[2px] border-x-[3px] border-b-[4px] border-x-transparent border-b-primary/40 w-0 h-0"></div>
                    </div>
                  )}
                  
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 flex justify-center relative z-10">
          <Link 
            href="/contact" 
            className="inline-flex h-11 items-center justify-center rounded-md bg-foreground px-8 text-sm font-semibold text-background shadow transition-colors hover:bg-foreground/90"
          >
            TALK TO AN AI EXPERT
          </Link>
        </div>

      </div>
    </section>
  );
}
