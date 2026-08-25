import * as React from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
export type ButtonSize = "default" | "sm" | "lg";

export const buttonVariants = ({
  variant = "primary",
  size = "default",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) => {
  return cn(
    "inline-flex items-center justify-center rounded-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]",
    variant === "primary" && "bg-primary text-background hover:bg-primary/90 hover:shadow-[0_0_15px_rgba(79,140,255,0.3)]",
    variant === "secondary" && "bg-surface-elevated text-foreground border border-border hover:border-secondary hover:text-secondary",
    variant === "ghost" && "hover:bg-surface-elevated text-muted hover:text-foreground",
    variant === "outline" && "border border-border text-foreground hover:border-primary hover:text-primary",
    size === "default" && "h-10 px-4 py-2 text-sm",
    size === "sm" && "h-9 px-3 text-sm",
    size === "lg" && "h-12 px-8 text-base",
    className
  );
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={buttonVariants({ variant, size, className })}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
