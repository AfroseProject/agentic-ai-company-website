import React from 'react';
import { notFound } from 'next/navigation';
import { industries, getIndustryBySlug } from '@/content/industries';
import { ArchitectureHero } from '@/components/solutions';

export function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return { title: 'Industry Not Found' };

  return {
    title: `${industry.name} AI Solutions | Enterprise Agentic AI`,
    description: industry.description,
    alternates: {
      canonical: `/industries/${slug}`,
    },
  };
}

export default async function IndustryPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  
  if (!industry) {
    notFound();
  }

  return (
    <div className="w-full bg-[#05070B] min-h-screen">
      <ArchitectureHero 
        label="Industry Solutions"
        headline={`AGENTIC AI FOR ${industry.name.toUpperCase()}.`}
        description={industry.description}
      >
        {/* Generic Industry Architecture SVG */}
        <svg aria-hidden="true" viewBox="0 0 400 300" className="w-full h-full text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="150" r="100" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" className="opacity-30 animate-spin-slow" />
          
          {/* Hexagon Grid Pattern representing Industry Nodes */}
          {[
            [200, 50], [286, 100], [286, 200], [200, 250], [114, 200], [114, 100], [200, 150]
          ].map((point, i) => (
            <g key={i}>
              <polygon 
                points={`${point[0]},${point[1]-20} ${point[0]+17.32},${point[1]-10} ${point[0]+17.32},${point[1]+10} ${point[0]},${point[1]+20} ${point[0]-17.32},${point[1]+10} ${point[0]-17.32},${point[1]-10}`}
                stroke="currentColor" 
                strokeWidth="1" 
                className="opacity-50"
              />
              <circle cx={point[0]} cy={point[1]} r="3" fill="currentColor" className="opacity-80" />
            </g>
          ))}

          {/* Connection Lines */}
          <path d="M200 150 L200 50 M200 150 L286 100 M200 150 L286 200 M200 150 L200 250 M200 150 L114 200 M200 150 L114 100" stroke="currentColor" strokeWidth="1" className="opacity-30" />
        </svg>
      </ArchitectureHero>

      {/* Content Section */}
      <section className="py-24 border-t border-[#1C2633]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            {/* Challenges */}
            <div>
              <h2 className="text-sm font-bold tracking-widest text-primary mb-8 uppercase">Industry Challenges</h2>
              <ul className="space-y-6">
                {industry.challenges.map((challenge, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-[#9AA6B2] mr-4 block mt-1">0{idx + 1}</span>
                    <p className="text-[#F5F7FA] text-lg">{challenge}</p>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Opportunities */}
            <div>
              <h2 className="text-sm font-bold tracking-widest text-secondary mb-8 uppercase">Agentic Opportunities</h2>
              <ul className="space-y-6">
                {industry.opportunities.map((opp, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-[#1C2633] mr-4 block mt-1">
                       <svg aria-hidden="true" className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                       </svg>
                    </span>
                    <p className="text-[#F5F7FA] text-lg">{opp}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
            {/* Example Agents */}
            <div className="lg:col-span-1 border border-[#1C2633] rounded-lg p-8 bg-[#0B0F16]">
              <h2 className="text-sm font-bold tracking-widest text-[#F5F7FA] mb-8 uppercase">Example Agents</h2>
              <div className="space-y-8">
                {industry.exampleAgents.map((agent, idx) => (
                  <div key={idx}>
                    <h3 className="text-primary font-medium mb-2">{agent.name}</h3>
                    <p className="text-[#9AA6B2] text-sm leading-relaxed">{agent.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Example Workflows */}
            <div className="lg:col-span-2 border border-[#1C2633] rounded-lg p-8 bg-[#0B0F16]">
              <h2 className="text-sm font-bold tracking-widest text-[#F5F7FA] mb-8 uppercase">Automated Workflows</h2>
              <div className="space-y-8">
                {industry.exampleWorkflows.map((workflow, idx) => (
                  <div key={idx} className="bg-[#05070B] p-4 rounded border border-[#1C2633]">
                    <div className="text-xs text-[#9AA6B2] mb-3 uppercase tracking-wider">Workflow Path {idx + 1}</div>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-[#F5F7FA]">
                      {workflow.split('→').map((step, stepIdx, arr) => (
                        <React.Fragment key={stepIdx}>
                          <span className="bg-[#1C2633]/50 px-3 py-1.5 rounded text-primary">{step.trim()}</span>
                          {stepIdx < arr.length - 1 && (
                            <span className="text-[#9AA6B2]">→</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Security Considerations */}
          <div>
            <h2 className="text-sm font-bold tracking-widest text-[#F5F7FA] mb-8 uppercase">Security & Compliance Constraints</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {industry.securityConsiderations.map((security, idx) => (
                <div key={idx} className="border border-[#1C2633] p-6 rounded-lg bg-[#05070B]">
                  <p className="text-[#9AA6B2] text-sm leading-relaxed">{security}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 border-t border-[#1C2633] bg-[#0B0F16]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-medium text-[#F5F7FA] mb-6">READY TO AUTOMATE {industry.name.toUpperCase()}?</h2>
          <p className="text-[#9AA6B2] mb-10 max-w-2xl mx-auto">
            Discuss a specific reference architecture with our engineering team.
          </p>
          <a href="/contact" className="inline-block bg-primary text-[#05070B] px-8 py-4 text-sm font-bold tracking-wider hover:bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070B] rounded-sm">
            BUILD YOUR AI AGENT
          </a>
        </div>
      </section>

    </div>
  );
}
