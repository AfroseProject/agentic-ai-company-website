"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { NavLink } from "./nav-link";
import { MobileMenu } from "./mobile-menu";
import { buttonVariants } from "@/components/ui/button";

const navItems = [
  { href: "/solutions/agent-as-a-service", label: "Solutions" },
  { href: "/services/ai-security", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/technology", label: "Technology" },
  { href: "/resources", label: "Resources" },
  { href: "/blog", label: "Blog" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    // Initialize state
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-background border-b border-border" : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
            aria-label="Home"
          >
            <span className="text-xl font-bold tracking-tight text-foreground">
              KANINI<span className="text-primary">AI</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8" aria-label="Main Navigation">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/contact" className={buttonVariants({ variant: "ghost" })}>
              TALK TO AN AI EXPERT
            </Link>
            <Link href="/contact" className={buttonVariants({ variant: "primary" })}>
              BUILD YOUR AI AGENT
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 -mr-2 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Open main menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
        navItems={navItems}
      />
    </header>
  );
}
