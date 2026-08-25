import React from 'react';

export interface IntegrationGridProps {
  title?: string;
  description?: string;
  systems: string[];
}

export function IntegrationGrid({
  title = "Enterprise Integrations",
  description = "Connect your AI workforce to your existing systems, databases, and APIs.",
  systems
}: IntegrationGridProps) {
  if (!systems || systems.length === 0) return null;

  return (
    <section className="py-24 md:py-32 relative">
      <div className="container px-4 md:px-6 mx-auto max-w-5xl">
         <div className="mb-16 max-w-3xl">
           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-tight">{title}</h2>
           {description && <p className="text-lg text-muted">{description}</p>}
         </div>
         
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
           {systems.map((system, idx) => (
             <div key={idx} className="flex items-center gap-4 p-5 rounded-lg border border-border/30 bg-surface/20 transition-colors hover:bg-surface/40 hover:border-border/50">
               <div className="w-1.5 h-1.5 rounded-full bg-secondary/80 flex-shrink-0"></div>
               <span className="text-sm md:text-base font-medium text-foreground/90">{system}</span>
             </div>
           ))}
         </div>
      </div>
    </section>
  );
}
