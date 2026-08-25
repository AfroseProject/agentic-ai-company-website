import React from 'react';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';

export const metadata = {
  alternates: {
    canonical: '/solutions/agent-as-a-service',
  },
  title: 'Agent-as-a-Service | Enterprise AI Workforce',
  description: 'Deploy specialized agents without building an entire internal AI engineering team. Continuously operated, secure, and integrated AI workforce.'
};

export default function AgentAsAServicePage() {
  const lifecycleSteps = [
    { title: "Discover", desc: "Deep analysis of existing business workflows, enterprise data sources, and automation feasibility." },
    { title: "Design", desc: "Architecting agent responsibilities, reasoning boundaries, security guardrails, and necessary tool access." },
    { title: "Build", desc: "Engineering the orchestrator, prompts, deterministic tools, and specialized agent collaboration models." },
    { title: "Integrate", desc: "Establishing secure, authenticated API connections to your existing enterprise systems and databases." },
    { title: "Operate", desc: "Deploying into production with continuous observability, logging, and human-in-the-loop escalation paths." },
    { title: "Optimize", desc: "Continuous performance evaluation, prompt refinement, and expansion of agentic capabilities over time." }
  ];

  const services = [
    "Agent deployment",
    "Integration",
    "Knowledge configuration",
    "Security",
    "Monitoring",
    "Evaluation",
    "Optimization",
    "Maintenance",
    "Governance",
    "Continuous improvement"
  ];

  return (
    <div className="w-full bg-[#05070B] min-h-screen">
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 md:pt-48 md:pb-32 px-4 md:px-6 relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#1C2633_1px,transparent_1px),linear-gradient(to_bottom,#1C2633_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_0%_at_50%_0%,#000_10%,transparent_100%)] opacity-20"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="container mx-auto max-w-5xl relative z-10 text-center flex flex-col items-center">
          <div className="inline-flex items-center rounded border border-primary/20 bg-primary/5 px-3 py-1.5 text-[10px] md:text-xs font-mono font-medium tracking-widest uppercase text-primary mb-8 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse mr-2"></span>
            Managed AI Platform
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight mb-8">
            YOUR AI AGENT.<br />
            OUR ENGINEERING.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted">CONTINUOUSLY OPERATED.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed mb-12">
            Deploy specialized agents without building an entire internal AI engineering team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link 
              href="/contact" 
              className={buttonVariants({ variant: "primary", size: "lg", className: "w-full sm:w-auto px-10" })}
            >
              TALK TO AN AI EXPERT
            </Link>
          </div>
        </div>
      </section>

      {/* Lifecycle Timeline */}
      <section className="py-24 md:py-32 bg-surface/10 border-b border-border/40 relative">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
           <div className="mb-16 text-center max-w-3xl mx-auto">
             <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">Managed Execution Lifecycle</h2>
             <p className="text-muted md:text-lg">The engineering framework that brings agents safely into production.</p>
           </div>
           
           <div className="relative mt-20">
              {/* Vertical line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border/50 md:-translate-x-1/2"></div>
              
              {lifecycleSteps.map((step, idx) => (
                <div key={step.title} className={`relative flex items-center justify-between mb-12 md:mb-16 last:mb-0 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                   
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
                           <p className="text-muted text-sm leading-relaxed">{step.desc}</p>
                         </div>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 md:py-32">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
           <div className="mb-16 max-w-3xl">
             <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-tight">Continuous Operations</h2>
             <p className="text-lg text-muted">Building the agent is only day one. Enterprise production requires continuous engineering, monitoring, and governance.</p>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6">
             {services.map((service) => (
               <div key={service} className="flex items-center gap-4 p-5 rounded-lg border border-border/30 bg-surface/20 transition-colors hover:bg-surface/40 hover:border-border/50">
                 <div className="w-1.5 h-1.5 rounded-full bg-secondary/80 flex-shrink-0"></div>
                 <span className="text-sm md:text-base font-medium text-foreground/90">{service}</span>
               </div>
             ))}
           </div>
        </div>
      </section>

    </div>
  );
}
