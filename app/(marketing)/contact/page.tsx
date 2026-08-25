import React from 'react';
import { ContactForm } from './contact-form';

export const metadata = {
  alternates: {
    canonical: '/contact',
  },
  title: 'Contact Sales | Enterprise AI Workforce',
  description: 'Start the conversation. Build your enterprise AI workforce with our AI engineering experts.'
};

export default function ContactPage() {
  return (
    <div className="w-full bg-[#05070B] min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Copy */}
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase mb-6 font-mono">
              Contact Sales
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5F7FA] tracking-tight mb-8">
              LET&apos;S BUILD YOUR <span className="text-primary">AI WORKFORCE.</span>
            </h1>
            
            <p className="text-lg text-[#9AA6B2] leading-relaxed mb-12 max-w-xl">
              We design, build, secure, and operate autonomous AI agents for global enterprises. Tell us about your automation goals, and an AI engineering specialist will reach out.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-[#1C2633] border border-[#2A3645] flex items-center justify-center mr-4">
                  <svg aria-hidden="true" className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#F5F7FA] mb-1">Enterprise Ready</h3>
                  <p className="text-sm text-[#9AA6B2]">Deployment architecture designed for security, governance, and scale.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-[#1C2633] border border-[#2A3645] flex items-center justify-center mr-4">
                  <svg aria-hidden="true" className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#F5F7FA] mb-1">Deterministic Control</h3>
                  <p className="text-sm text-[#9AA6B2]">Rigid state machines and strictly typed routing to prevent excessive agency.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-[#1C2633] border border-[#2A3645] flex items-center justify-center mr-4">
                  <svg aria-hidden="true" className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#F5F7FA] mb-1">Expert Engineering</h3>
                  <p className="text-sm text-[#9AA6B2]">Dedicated teams of AI engineers, security architects, and UX designers.</p>
                </div>
              </div>
            </div>
            
          </div>

          {/* Right Column: Form */}
          <div className="relative">
            {/* Background decorative glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/20 to-transparent rounded-xl blur opacity-30"></div>
            
            <div className="relative bg-[#05070B] border border-[#1C2633] rounded-xl p-8 md:p-10 shadow-2xl">
              <ContactForm />
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  );
}
