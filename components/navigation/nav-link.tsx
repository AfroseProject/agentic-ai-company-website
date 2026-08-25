"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname?.startsWith(href + "/");

  return (
    <Link
      href={href}
      className={`text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm py-1 ${
        isActive ? "text-foreground" : "text-muted hover:text-foreground"
      }`}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </Link>
  );
}
