import React from 'react';
import Link from 'next/link';
import { industries } from '@/content/industries';

export const metadata = {
  alternates: {
    canonical: '/industries',
  },
  title: 'Industries | Enterprise AI Workforce',
  description: 'Agentic AI solutions tailored for Enterprise industries.'
};

export default function IndustriesIndexPage() {
  return (
    <div className="w-full bg-[#05070B] min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-[#F5F7FA] mb-6">
            INDUSTRIES
          </h1>
          <p className="text-xl text-[#9AA6B2] leading-relaxed">
            Enterprise AI agents engineered to solve complex, domain-specific challenges across major global industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => (
            <Link 
              key={industry.id} 
              href={`/industries/${industry.slug}`}
              className="group block p-8 border border-[#1C2633] rounded-lg bg-[#0B0F16] hover:border-primary/50 transition-colors duration-300"
            >
              <h2 className="text-2xl font-medium text-[#F5F7FA] mb-4 group-hover:text-primary transition-colors">
                {industry.name}
              </h2>
              <p className="text-[#9AA6B2] mb-8 line-clamp-3">
                {industry.description}
              </p>
              
              <div className="flex items-center text-primary text-sm font-medium">
                EXPLORE SOLUTIONS
                <svg aria-hidden="true" className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
