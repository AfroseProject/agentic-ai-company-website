import React from 'react';

export function ValueProposition() {
  return (
    <section className="w-full py-24 lg:py-32 bg-background border-t border-border/50 relative overflow-hidden">
      <style>{`
        @keyframes pulse-flow-horizontal {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        @keyframes pulse-flow-vertical {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        .animate-flow-h {
          animation: pulse-flow-horizontal 2s ease-in-out infinite;
        }
        .animate-flow-v {
          animation: pulse-flow-vertical 2s ease-in-out infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-flow-h, .animate-flow-v {
            animation: none !important;
            display: none !important;
          }
        }
      `}</style>

      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Content Column */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-border/50 bg-surface/50 px-3 py-1 text-[10px] sm:text-xs font-mono font-medium tracking-widest uppercase text-muted backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-primary/80 mr-2 motion-safe:animate-pulse"></span>
                The Agentic Shift
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
                AI that does more than answer.
              </h2>
              
              <p className="text-base md:text-lg text-muted max-w-lg leading-relaxed">
                We are moving beyond conversational AI. True enterprise automation requires an AI workforce that can understand objectives, execute tasks across connected systems, and validate outcomes—all governed by strict policies and human oversight.
              </p>
            </div>

            <div className="space-y-4 pt-8 border-t border-border/30">
              <div className="flex flex-col gap-3">
                <h3 className="text-xs font-mono font-semibold tracking-wider text-foreground uppercase">One Architecture. Specialized Domains.</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Deploy multiple specialized agents under a single enterprise orchestration layer. IT, Security, Operations, and Service Desk agents execute complex workflows natively integrated into your environment.
                </p>
              </div>
            </div>
          </div>

          {/* Visual Column */}
          <div className="lg:col-span-7 relative w-full">
            <div className="flex flex-col gap-6 md:gap-8 w-full justify-center">
               
               {/* Legacy Flow (Muted) */}
               <div className="w-full rounded-xl border border-border/30 bg-surface/10 p-6 md:p-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                 <div className="text-[10px] font-mono tracking-widest text-muted uppercase mb-8">Legacy Paradigm</div>
                 
                 {/* Desktop Legacy Flow */}
                 <div className="hidden md:flex items-center justify-between gap-3 text-[11px] font-semibold tracking-wider text-muted">
                   <div className="px-4 py-2.5 rounded bg-surface border border-border/50">HUMAN</div>
                   <div className="flex-1 h-[1px] bg-border/40 relative">
                     <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 border-y-4 border-l-4 border-y-transparent border-l-border/40 w-0 h-0"></div>
                   </div>
                   <div className="px-4 py-2.5 rounded bg-surface border border-border/50">APPLICATION</div>
                   <div className="flex-1 h-[1px] bg-border/40 relative">
                     <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 border-y-4 border-l-4 border-y-transparent border-l-border/40 w-0 h-0"></div>
                   </div>
                   <div className="px-4 py-2.5 rounded bg-surface border border-border/50">TASK</div>
                   <div className="flex-1 h-[1px] bg-border/40 relative">
                     <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 border-y-4 border-l-4 border-y-transparent border-l-border/40 w-0 h-0"></div>
                   </div>
                   <div className="px-4 py-2.5 rounded bg-surface border border-border/50">HUMAN</div>
                 </div>

                 {/* Mobile Legacy Flow */}
                 <div className="flex md:hidden flex-col items-center gap-3 text-[10px] font-semibold tracking-wider text-muted">
                   <div className="px-4 py-2.5 rounded bg-surface border border-border/50 w-full text-center">HUMAN</div>
                   <div className="h-6 w-[1px] bg-border/40 relative">
                     <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 border-x-4 border-t-4 border-x-transparent border-t-border/40 w-0 h-0"></div>
                   </div>
                   <div className="px-4 py-2.5 rounded bg-surface border border-border/50 w-full text-center">APPLICATION</div>
                   <div className="h-6 w-[1px] bg-border/40 relative">
                     <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 border-x-4 border-t-4 border-x-transparent border-t-border/40 w-0 h-0"></div>
                   </div>
                   <div className="px-4 py-2.5 rounded bg-surface border border-border/50 w-full text-center">TASK</div>
                 </div>
               </div>

               {/* Agentic Flow (Active) */}
               <div className="w-full rounded-xl border border-border/80 bg-surface/40 p-6 md:p-8 relative overflow-hidden group">
                 {/* Ambient background glow */}
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-full bg-primary/5 blur-[80px] pointer-events-none rounded-full" />
                 
                 <div className="text-[10px] font-mono tracking-widest text-primary uppercase mb-8 flex items-center relative z-10">
                   <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2 motion-safe:animate-pulse shadow-[0_0_8px_var(--color-primary)]"></span>
                   Agentic Paradigm
                 </div>
                 
                 {/* Desktop Agentic Flow */}
                 <div className="hidden md:flex flex-col gap-8 relative z-10">
                   <div className="flex items-center justify-between gap-3 text-[11px] font-bold tracking-wider text-foreground">
                     <div className="px-4 py-3 rounded bg-surface border border-border shadow-md">HUMAN</div>
                     
                     {/* Connector 1 */}
                     <div className="flex-1 h-[1px] bg-primary/30 relative overflow-hidden">
                       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/80 to-transparent w-full animate-flow-h"></div>
                       <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 border-y-4 border-l-4 border-y-transparent border-l-primary/60 w-0 h-0"></div>
                     </div>
                     
                     <div className="px-6 py-4 rounded bg-background border border-primary/50 text-primary shadow-[0_0_20px_rgba(79,140,255,0.15)] ring-1 ring-primary/20">
                       AI WORKFORCE
                     </div>
                     
                     {/* Connector 2 */}
                     <div className="flex-1 h-[1px] bg-primary/30 relative overflow-hidden">
                       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/80 to-transparent w-full animate-flow-h delay-1000"></div>
                       <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 border-y-4 border-l-4 border-y-transparent border-l-primary/60 w-0 h-0"></div>
                     </div>
                     
                     <div className="px-4 py-3 rounded bg-surface border border-border shadow-md text-center leading-tight">
                       ENTERPRISE<br/>SYSTEMS
                     </div>
                   </div>

                   {/* Desktop Validation Feedback Loop */}
                   <div className="relative h-10 w-full">
                     <div className="absolute right-[15%] top-0 w-[70%] h-full border-b border-l border-primary/40 rounded-bl-xl border-dashed">
                       <div className="absolute bottom-[-11px] left-1/2 -translate-x-1/2 bg-surface px-3 py-1 text-[9px] font-mono tracking-widest text-primary/80 border border-primary/30 rounded uppercase shadow-sm">
                         Validation & Audit
                       </div>
                       <div className="absolute left-0 top-0 -translate-x-[5px] -translate-y-1 border-x-4 border-b-4 border-x-transparent border-b-primary/60 w-0 h-0"></div>
                     </div>
                   </div>
                 </div>

                 {/* Mobile Agentic Flow */}
                 <div className="flex md:hidden flex-col items-center gap-4 relative z-10 text-[11px] font-bold tracking-wider text-foreground">
                   <div className="px-4 py-3 rounded bg-surface border border-border shadow-md w-full text-center">HUMAN</div>
                   
                   {/* Mobile Connector 1 */}
                   <div className="h-8 w-[1px] bg-primary/30 relative overflow-hidden">
                     <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/80 to-transparent h-full animate-flow-v"></div>
                     <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 border-x-4 border-t-4 border-x-transparent border-t-primary/60 w-0 h-0"></div>
                   </div>
                   
                   <div className="px-4 py-4 rounded bg-background border border-primary/50 text-primary shadow-[0_0_20px_rgba(79,140,255,0.15)] ring-1 ring-primary/20 w-full text-center">
                     AI WORKFORCE
                   </div>
                   
                   {/* Mobile Connector 2 */}
                   <div className="h-8 w-[1px] bg-primary/30 relative overflow-hidden">
                     <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/80 to-transparent h-full animate-flow-v delay-1000"></div>
                     <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 border-x-4 border-t-4 border-x-transparent border-t-primary/60 w-0 h-0"></div>
                   </div>
                   
                   <div className="px-4 py-3 rounded bg-surface border border-border shadow-md w-full text-center">
                     ENTERPRISE SYSTEMS
                   </div>

                   {/* Mobile Validation Loop */}
                   <div className="w-full pt-6 mt-2 border-t border-dashed border-primary/30 relative">
                      <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 bg-surface px-3 py-1 text-[9px] font-mono tracking-widest text-primary/80 border border-primary/30 rounded uppercase shadow-sm">
                        Validation & Audit
                      </div>
                      <div className="text-[10px] text-muted text-center font-normal mt-2 leading-relaxed">
                        Continuous feedback loop maintaining strict human oversight and policy governance.
                      </div>
                   </div>
                 </div>

                 {/* Specialized Agents Sub-layer */}
                 <div className="mt-10 pt-6 border-t border-border/30 relative z-10">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                      {['Security Agent', 'IT Agent', 'Service Desk', 'Operations'].map((agent) => (
                        <div key={agent} className="flex flex-col items-center justify-center py-3 px-2 rounded-md bg-background border border-border/40 text-[10px] font-mono uppercase tracking-wider text-muted hover:text-foreground hover:border-primary/40 hover:bg-surface transition-all duration-300 shadow-sm cursor-default">
                           {agent}
                        </div>
                      ))}
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
