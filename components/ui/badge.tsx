import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "success" | "warning" | "error";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background",
        variant === "default" && "border-transparent bg-primary text-background",
        variant === "secondary" && "border-transparent bg-surface-elevated text-secondary",
        variant === "outline" && "border-border text-foreground",
        variant === "success" && "border-transparent bg-success/20 text-success",
        variant === "warning" && "border-transparent bg-warning/20 text-warning",
        variant === "error" && "border-transparent bg-error/20 text-error",
        className
      )}
      {...props}
    />
  );
}
