"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: { href: string; label: string }[];
}

export function MobileMenu({ isOpen, onClose, navItems }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Trap focus / body lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Auto-focus first link when opened for accessibility
      setTimeout(() => {
        const firstFocusable = menuRef.current?.querySelector('button, [href]') as HTMLElement;
        if (firstFocusable) firstFocusable.focus();
      }, 50);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] lg:hidden">
      {/* Overlay - solid color, no glassmorphism per requirements */}
      <div 
        className="fixed inset-0 bg-background/95 animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Menu Panel */}
      <div 
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
        className="fixed inset-y-0 right-0 w-full max-w-sm bg-surface border-l border-border p-6 shadow-2xl flex flex-col animate-slide-up"
      >
        <div className="flex items-center justify-between mb-8">
          <span className="text-xl font-bold tracking-tight text-foreground">
            AGENTIC<span className="text-primary">AI</span>
          </span>
          <button
            className="p-2 -mr-2 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
            onClick={onClose}
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col space-y-4 mb-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg font-medium text-foreground py-2 border-b border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm transition-colors"
              onClick={onClose}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col space-y-4 mt-auto pt-8">
          <Link 
            href="/contact" 
            className={buttonVariants({ variant: "ghost", className: "w-full" })}
            onClick={onClose}
          >
            TALK TO AN AI EXPERT
          </Link>
          <Link 
            href="/contact" 
            className={buttonVariants({ variant: "primary", className: "w-full" })}
            onClick={onClose}
          >
            BUILD YOUR AI AGENT
          </Link>
        </div>
      </div>
    </div>
  );
}
