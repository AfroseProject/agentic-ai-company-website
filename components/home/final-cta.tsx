import React from 'react';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';

export function FinalCta() {
  return (
    <section className="w-full py-32 lg:py-48 bg-[#05070B] border-t border-border/50 relative overflow-hidden">
      
      {/* Abstract Structural Background to reinforce enterprise architecture theme */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#1C2633_1px,transparent_1px),linear-gradient(to_bottom,#1C2633_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_20%,transparent_100%)] opacity-20"></div>

      <div className="container px-4 md:px-6 max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center">
        
        {/* Technical Perimeter Frame */}
        <div className="inline-flex items-center gap-2 rounded-sm border border-primary/20 bg-primary/5 px-4 py-1.5 text-[10px] sm:text-xs font-mono tracking-widest uppercase text-primary mb-8 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
          Enterprise Deployment
        </div>

        {/* Approved Core Brand Message */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-8">
          BUILD YOUR AI WORKFORCE.
        </h2>

        {/* Approved Core Sub-Message */}
        <p className="text-lg md:text-xl text-muted leading-relaxed max-w-3xl mb-12">
          From AI strategy to production-grade agentic automation. AI agents designed around your business — connected to your systems, governed by your policies, and engineered for real-world execution.
        </p>

        {/* Approved CTA Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Link 
            href="/solutions/custom-ai-agents" 
            className={buttonVariants({ variant: "primary", size: "lg", className: "w-full sm:w-auto px-10 tracking-wide" })}
          >
            BUILD YOUR AI AGENT
          </Link>
          <Link 
            href="/contact" 
            className={buttonVariants({ variant: "outline", size: "lg", className: "w-full sm:w-auto px-10 tracking-wide" })}
          >
            TALK TO AN AI EXPERT
          </Link>
        </div>

        {/* Delivery Models Reinforcement */}
        <div className="mt-20 flex flex-col sm:flex-row items-center gap-6 text-[10px] font-mono text-muted uppercase tracking-widest border-t border-border/40 pt-8 w-full justify-center opacity-80">
           <span className="flex items-center gap-2">
             <svg aria-hidden="true" className="w-3.5 h-3.5 text-secondary/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
             </svg>
             Custom AI Agents
           </span>
           <span className="hidden sm:inline text-border/50">•</span>
           <span className="flex items-center gap-2">
             <svg aria-hidden="true" className="w-3.5 h-3.5 text-secondary/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
             </svg>
             Agent-as-a-Service
           </span>
        </div>

      </div>
    </section>
  );
}
