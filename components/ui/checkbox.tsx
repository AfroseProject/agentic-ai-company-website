import * as React from "react";
import { cn } from "@/lib/utils";

export type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        type="checkbox"
        ref={ref}
        className={cn(
          "peer h-4 w-4 shrink-0 rounded-sm border border-border bg-surface text-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 checked:bg-primary checked:border-primary transition-colors",
          className
        )}
        {...props}
      />
    );
  }
);
Checkbox.displayName = "Checkbox";
