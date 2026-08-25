import React from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { AgenticVisualization } from "@/components/hero/agentic-visualization";

export function Hero() {
  return (
    <section 
      className="relative w-full overflow-hidden bg-background pt-12 pb-16 md:pt-20 md:pb-24 lg:pt-24 lg:pb-32"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Content */}
          <div className="flex flex-col space-y-8 animate-slide-up">
            <div className="space-y-4">
              <p className="text-eyebrow text-primary">
                ENTERPRISE AGENTIC AI
              </p>
              <h1 id="hero-heading" className="text-display text-foreground tracking-tight">
                BUILD YOUR AI WORKFORCE.
              </h1>
              <p className="text-body-lg text-muted max-w-lg">
                Deploy intelligent agents that reason, act, and seamlessly integrate with your enterprise systems. We design, secure, and operate autonomous AI workforces that execute complex operations under strict human oversight.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/build" className={buttonVariants({ variant: "primary", size: "lg" })}>
                BUILD YOUR AI AGENT
              </Link>
              <Link href="/contact" className={buttonVariants({ variant: "secondary", size: "lg" })}>
                TALK TO AN AI EXPERT
              </Link>
            </div>
          </div>

          {/* Right Column: Agentic Architecture Visualization */}
          <div 
            className="relative w-full bg-surface border border-border rounded-lg shadow-sm animate-fade-in overflow-hidden"
            style={{ animationDelay: '200ms' }}
          >
            <AgenticVisualization />
          </div>

        </div>
      </div>
    </section>
  );
}
