import React from 'react';

export interface Step {
  title: string;
  description: string;
}

export interface LifecycleStepsProps {
  title?: string;
  description?: string;
  steps: Step[];
}

export function LifecycleSteps({ 
  title = "Execution Lifecycle", 
  description = "The engineering framework that brings agents safely into production.",
  steps
}: LifecycleStepsProps) {
  if (!steps || steps.length === 0) return null;

  return (
    <section className="py-24 md:py-32 bg-surface/10 border-b border-border/40 relative">
      <div className="container px-4 md:px-6 mx-auto max-w-5xl">
         <div className="mb-16 text-center max-w-3xl mx-auto">
           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">{title}</h2>
           {description && <p className="text-muted md:text-lg">{description}</p>}
         </div>
         
         <div className="relative mt-20">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border/50 md:-translate-x-1/2"></div>
            
            {steps.map((step, idx) => (
              <div key={idx} className={`relative flex items-center justify-between mb-12 md:mb-16 last:mb-0 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                 
                 {/* Center Dot */}
                 <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-background border-2 border-primary -translate-x-[5px] md:-translate-x-1/2 z-10 shadow-[0_0_10px_rgba(79,140,255,0.4)]"></div>
                 
                 {/* Empty space for alternating layout on desktop */}
                 <div className="hidden md:block w-5/12"></div>
                 
                 {/* Content Card */}
                 <div className="w-full md:w-5/12 pl-12 md:pl-0">
                    <div className="bg-surface border border-border/50 p-6 md:p-8 rounded-xl shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-primary/5 group relative overflow-hidden">
                       <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                       <div className="relative z-10">
                         <div className="text-[10px] font-mono text-primary uppercase tracking-widest mb-3">Phase 0{idx + 1}</div>
                         <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                         <p className="text-muted text-sm leading-relaxed">{step.description}</p>
                       </div>
                    </div>
                 </div>
              </div>
            ))}
         </div>
      </div>
    </section>
  );
}
