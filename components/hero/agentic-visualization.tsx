import React from 'react';

export function AgenticVisualization() {
  return (
    <div className="w-full h-full flex items-center justify-center relative p-4 lg:p-8">
      <style>{`
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes flow-forward {
          from { stroke-dashoffset: 24; }
          to { stroke-dashoffset: 0; }
        }
        .animate-orbit-desktop {
          animation: orbit 20s linear infinite;
          transform-origin: 400px 260px;
        }
        .animate-orbit-mobile {
          animation: orbit 20s linear infinite;
          transform-origin: 200px 180px;
        }
        .animate-flow {
          animation: flow-forward 1.5s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-orbit-desktop,
          .animate-orbit-mobile,
          .animate-flow { 
            animation: none !important; 
          }
        }
      `}</style>
      
      {/* DESKTOP SVG (Hidden on Mobile/Tablet) */}
      <svg 
        viewBox="0 0 800 700" 
        className="hidden md:block w-full h-full max-h-[700px] text-foreground"
        aria-label="Agentic AI Architecture Diagram"
        role="img"
      >
        <title>Desktop Agentic AI Architecture</title>
        <desc>
          A diagram showing the Agentic AI lifecycle: Human oversight directs an AI Orchestrator, which manages specialized IT, Security, and Service Desk agents. These agents integrate with Enterprise Systems, surrounded by a continuous loop of Observe, Reason, Plan, Act, Validate, and Optimize.
        </desc>

        <defs>
          <linearGradient id="primary-glow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#63D8FF" stopOpacity="0.8" />
          </linearGradient>
          
          <filter id="glow-blur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Lifecycle Ring */}
        <g className="opacity-80">
          <circle cx="400" cy="260" r="160" fill="none" stroke="var(--color-border)" strokeWidth="1" strokeDasharray="4 6" />
          
          {/* Orbital Dot */}
          <g className="animate-orbit-desktop">
            <circle cx="400" cy="100" r="4" fill="var(--color-primary)" />
            <circle cx="400" cy="100" r="12" fill="var(--color-primary)" className="opacity-20" />
          </g>

          {/* Lifecycle Text Nodes */}
          <g className="font-mono tracking-widest fill-muted uppercase" textAnchor="middle">
            <rect x="350" y="90" width="100" height="24" fill="var(--color-background)" rx="4" />
            <text x="400" y="106" className="text-[12px]">OBSERVE</text>

            <rect x="489" y="170" width="100" height="24" fill="var(--color-background)" rx="4" />
            <text x="539" y="186" className="text-[12px]">REASON</text>

            <rect x="489" y="330" width="100" height="24" fill="var(--color-background)" rx="4" />
            <text x="539" y="346" className="text-[12px]">PLAN</text>

            <rect x="350" y="410" width="100" height="24" fill="var(--color-background)" rx="4" />
            <text x="400" y="426" className="text-[12px]">ACT</text>

            <rect x="211" y="330" width="100" height="24" fill="var(--color-background)" rx="4" />
            <text x="261" y="346" className="text-[12px]">VALIDATE</text>

            <rect x="211" y="170" width="100" height="24" fill="var(--color-background)" rx="4" />
            <text x="261" y="186" className="text-[12px]">OPTIMIZE</text>
          </g>
        </g>

        {/* Connectors (Static Background) */}
        <g stroke="var(--color-border)" strokeWidth="1" fill="none">
          <path d="M 400 100 L 400 220" />
          <path d="M 400 300 L 400 480" />
          <path d="M 400 300 L 400 380 Q 400 390 390 390 L 210 390 Q 200 390 200 400 L 200 480" />
          <path d="M 400 300 L 400 380 Q 400 390 410 390 L 590 390 Q 600 390 600 400 L 600 480" />
          
          <path d="M 400 520 L 400 600" />
          <path d="M 200 520 L 200 550 Q 200 560 210 560 L 390 560 Q 400 560 400 570 L 400 600" />
          <path d="M 600 520 L 600 550 Q 600 560 590 560 L 410 560 Q 400 560 400 570 L 400 600" />
        </g>

        {/* Animated Flow Connectors */}
        <g stroke="var(--color-primary)" strokeWidth="1.5" fill="none" strokeDasharray="4 20" className="animate-flow opacity-70">
          <path d="M 400 100 L 400 220" />
          <path d="M 400 300 L 400 480" />
          <path d="M 400 300 L 400 380 Q 400 390 390 390 L 210 390 Q 200 390 200 400 L 200 480" />
          <path d="M 400 300 L 400 380 Q 400 390 410 390 L 590 390 Q 600 390 600 400 L 600 480" />
          <path d="M 400 520 L 400 600" />
          <path d="M 200 520 L 200 550 Q 200 560 210 560 L 390 560 Q 400 560 400 570 L 400 600" />
          <path d="M 600 520 L 600 550 Q 600 560 590 560 L 410 560 Q 400 560 400 570 L 400 600" />
        </g>

        {/* Nodes */}
        <g transform="translate(330, 60)">
          <rect width="140" height="40" rx="4" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="1" />
          <text x="70" y="25" className="text-[14px] font-semibold fill-foreground tracking-widest" textAnchor="middle">HUMAN</text>
        </g>

        <g transform="translate(280, 220)">
          <rect x="-2" y="-2" width="244" height="84" rx="8" fill="none" stroke="url(#primary-glow)" strokeWidth="1" filter="url(#glow-blur)" className="opacity-30" />
          <rect width="240" height="80" rx="6" fill="var(--color-background)" stroke="var(--color-border)" strokeWidth="1" />
          <rect x="0" y="0" width="240" height="80" rx="6" fill="url(#primary-glow)" className="opacity-5" />
          <text x="120" y="46" className="text-[18px] font-bold fill-foreground tracking-widest" textAnchor="middle">AI ORCHESTRATOR</text>
          <circle cx="20" cy="40" r="4" fill="var(--color-primary)" className="motion-safe:animate-pulse" />
        </g>

        <g transform="translate(125, 480)">
          <rect width="150" height="40" rx="4" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="1" />
          <text x="75" y="25" className="text-[12px] font-medium fill-muted tracking-wider uppercase" textAnchor="middle">IT Agent</text>
        </g>
        
        <g transform="translate(325, 480)">
          <rect width="150" height="40" rx="4" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="1" />
          <text x="75" y="25" className="text-[12px] font-medium fill-muted tracking-wider uppercase" textAnchor="middle">Security Agent</text>
        </g>
        
        <g transform="translate(525, 480)">
          <rect width="150" height="40" rx="4" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="1" />
          <text x="75" y="25" className="text-[12px] font-medium fill-muted tracking-wider uppercase" textAnchor="middle">Service Desk</text>
        </g>

        <g transform="translate(280, 600)">
          <rect width="240" height="40" rx="4" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="1" />
          <text x="120" y="25" className="text-[14px] font-semibold fill-foreground tracking-widest" textAnchor="middle">ENTERPRISE SYSTEMS</text>
        </g>
      </svg>

      {/* MOBILE SVG (Hidden on Desktop) */}
      <svg 
        viewBox="0 0 400 800" 
        className="md:hidden w-full h-full text-foreground"
        aria-label="Agentic AI Architecture Diagram"
        role="img"
      >
        <title>Mobile Agentic AI Architecture</title>
        <defs>
          <linearGradient id="primary-glow-mobile" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#63D8FF" stopOpacity="0.8" />
          </linearGradient>
          <filter id="glow-blur-mobile" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Lifecycle Ring */}
        <g className="opacity-80">
          <circle cx="200" cy="180" r="110" fill="none" stroke="var(--color-border)" strokeWidth="1" strokeDasharray="4 6" />
          
          <g className="animate-orbit-mobile">
            <circle cx="200" cy="70" r="4" fill="var(--color-primary)" />
            <circle cx="200" cy="70" r="12" fill="var(--color-primary)" className="opacity-20" />
          </g>

          <g className="font-mono tracking-widest fill-muted uppercase" textAnchor="middle">
            <rect x="155" y="55" width="90" height="18" fill="var(--color-background)" rx="4" />
            <text x="200" y="68" className="text-[10px]">OBSERVE</text>

            <rect x="250" y="117" width="90" height="18" fill="var(--color-background)" rx="4" />
            <text x="295" y="130" className="text-[10px]">REASON</text>

            <rect x="250" y="227" width="90" height="18" fill="var(--color-background)" rx="4" />
            <text x="295" y="240" className="text-[10px]">PLAN</text>

            <rect x="155" y="283" width="90" height="18" fill="var(--color-background)" rx="4" />
            <text x="200" y="296" className="text-[10px]">ACT</text>

            <rect x="60" y="227" width="90" height="18" fill="var(--color-background)" rx="4" />
            <text x="105" y="240" className="text-[10px]">VALIDATE</text>

            <rect x="60" y="117" width="90" height="18" fill="var(--color-background)" rx="4" />
            <text x="105" y="130" className="text-[10px]">OPTIMIZE</text>
          </g>
        </g>

        {/* Connectors (Static) */}
        <g stroke="var(--color-border)" strokeWidth="1" fill="none">
          <path d="M 200 60 L 200 140" />
          
          {/* Main Trunk Down */}
          <path d="M 200 220 L 200 330 Q 200 340 190 340 L 90 340 Q 80 340 80 350 L 80 600" />
          
          {/* Trunk to Agents */}
          <path d="M 80 400 L 120 400" />
          <path d="M 80 500 L 120 500" />
          <path d="M 80 600 L 120 600" />

          {/* Agents to Systems Trunk */}
          <path d="M 300 400 L 330 400 Q 340 400 340 410 L 340 660 Q 340 670 330 670 L 200 670 L 200 700" />
          <path d="M 300 500 L 340 500" />
          <path d="M 300 600 L 340 600" />
        </g>

        {/* Animated Connectors */}
        <g stroke="var(--color-primary)" strokeWidth="1.5" fill="none" strokeDasharray="4 20" className="animate-flow opacity-70">
          <path d="M 200 60 L 200 140" />
          <path d="M 200 220 L 200 330 Q 200 340 190 340 L 90 340 Q 80 340 80 350 L 80 600" />
          <path d="M 80 400 L 120 400" />
          <path d="M 80 500 L 120 500" />
          <path d="M 80 600 L 120 600" />
          <path d="M 300 400 L 330 400 Q 340 400 340 410 L 340 660 Q 340 670 330 670 L 200 670 L 200 700" />
          <path d="M 300 500 L 340 500" />
          <path d="M 300 600 L 340 600" />
        </g>

        {/* Nodes */}
        <g transform="translate(130, 20)">
          <rect width="140" height="40" rx="4" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="1" />
          <text x="70" y="25" className="text-[14px] font-semibold fill-foreground tracking-widest" textAnchor="middle">HUMAN</text>
        </g>

        <g transform="translate(80, 140)">
          <rect x="-2" y="-2" width="244" height="84" rx="8" fill="none" stroke="url(#primary-glow-mobile)" strokeWidth="1" filter="url(#glow-blur-mobile)" className="opacity-30" />
          <rect width="240" height="80" rx="6" fill="var(--color-background)" stroke="var(--color-border)" strokeWidth="1" />
          <rect x="0" y="0" width="240" height="80" rx="6" fill="url(#primary-glow-mobile)" className="opacity-5" />
          <text x="120" y="45" className="text-[16px] font-bold fill-foreground tracking-widest" textAnchor="middle">AI ORCHESTRATOR</text>
          <circle cx="16" cy="40" r="4" fill="var(--color-primary)" className="motion-safe:animate-pulse" />
        </g>

        <g transform="translate(120, 380)">
          <rect width="180" height="40" rx="4" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="1" />
          <text x="90" y="25" className="text-[13px] font-medium fill-muted tracking-wider uppercase" textAnchor="middle">IT Agent</text>
        </g>
        
        <g transform="translate(120, 480)">
          <rect width="180" height="40" rx="4" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="1" />
          <text x="90" y="25" className="text-[13px] font-medium fill-muted tracking-wider uppercase" textAnchor="middle">Security Agent</text>
        </g>
        
        <g transform="translate(120, 580)">
          <rect width="180" height="40" rx="4" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="1" />
          <text x="90" y="25" className="text-[13px] font-medium fill-muted tracking-wider uppercase" textAnchor="middle">Service Desk</text>
        </g>

        <g transform="translate(80, 700)">
          <rect width="240" height="40" rx="4" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="1" />
          <text x="120" y="25" className="text-[14px] font-semibold fill-foreground tracking-widest" textAnchor="middle">ENTERPRISE SYSTEMS</text>
        </g>
      </svg>
    </div>
  );
}
