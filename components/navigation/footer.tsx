import React from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const footerNavigation = {
  solutions: [
    { name: "Agent-as-a-Service", href: "/solutions/agent-as-a-service" },
    { name: "Custom AI Agents", href: "/solutions/custom-ai-agents" },
    { name: "Agentic Automation", href: "/solutions/agentic-automation" },
    { name: "AI Service Desk", href: "/solutions/ai-service-desk" },
    { name: "Multi-Agent Systems", href: "/solutions/multi-agent-systems" },
  ],
  services: [
    { name: "AI Engineering", href: "/services/ai-engineering" },
    { name: "AI Security", href: "/services/ai-security" },
    { name: "AI Governance", href: "/services/ai-governance" },
  ],
  company: [
    { name: "How It Works", href: "/how-it-works" },
    { name: "Contact", href: "/contact" },
  ],
  explore: [
    { name: "Industries", href: "/industries" },
    { name: "Technology", href: "/technology" },
    { name: "Resources", href: "/resources" },
    { name: "Blog", href: "/blog" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-background border-t border-border mt-auto" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm" aria-label="Home">
              <span className="text-2xl font-bold tracking-tight text-foreground">
                KANINI<span className="text-primary">AI</span>
              </span>
            </Link>
            <p className="text-sm leading-6 text-muted max-w-xs">
              Building and operating AI workforces for enterprises. We design, build, secure, and operate intelligent agents.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 pt-4">
              <Link href="/contact" className={buttonVariants({ variant: "primary" })}>
                BUILD YOUR AI AGENT
              </Link>
              <Link href="/contact" className={buttonVariants({ variant: "secondary" })}>
                TALK TO AN EXPERT
              </Link>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground tracking-wider uppercase">Solutions</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.solutions.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-muted hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm py-1">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-foreground tracking-wider uppercase">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.services.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-muted hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm py-1">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground tracking-wider uppercase">Explore</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.explore.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-muted hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm py-1">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-foreground tracking-wider uppercase">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.company.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-muted hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm py-1">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-border pt-8 sm:mt-20 lg:mt-24 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs leading-5 text-muted">
            &copy; {new Date().getFullYear()} Kanini AI, Inc. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {footerNavigation.legal.map((item) => (
              <Link key={item.name} href={item.href} className="text-xs leading-5 text-muted hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
