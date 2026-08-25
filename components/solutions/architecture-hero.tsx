import React from 'react';

export interface ArchitectureHeroProps {
  label: string;
  headline: string;
  description: string;
  children?: React.ReactNode;
}

export function ArchitectureHero({ label, headline, description, children }: ArchitectureHeroProps) {
  return (
    <section className="pt-32 pb-24 md:pt-48 md:pb-32 px-4 md:px-6 relative overflow-hidden border-b border-border/40">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#1C2633_1px,transparent_1px),linear-gradient(to_bottom,#1C2633_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_0%_at_50%_0%,#000_10%,transparent_100%)] opacity-20"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center rounded border border-primary/20 bg-primary/5 px-3 py-1.5 text-[10px] md:text-xs font-mono font-medium tracking-widest uppercase text-primary mb-8 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse mr-2"></span>
            {label}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight mb-6">
            {headline}
          </h1>
          <p className="text-lg md:text-xl text-muted leading-relaxed">
            {description}
          </p>
        </div>
        
        {children && (
          <div className="relative flex justify-center lg:justify-end">
            <div className="w-full max-w-lg aspect-square lg:aspect-auto lg:h-[400px] border border-border/30 rounded-2xl bg-surface/30 p-8 shadow-2xl relative overflow-hidden flex items-center justify-center">
               <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(79,140,255,0.1)_0%,transparent_70%)]"></div>
               <div className="relative z-10 w-full h-full flex items-center justify-center" aria-hidden="true">
                 {children}
               </div>
               <span className="sr-only">Visual architecture diagram for {label}</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
