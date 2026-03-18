"use client";

import { cn } from "@/lib/utils";
import { type HTMLAttributes, forwardRef } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glow" | "interactive";
  padding?: "none" | "sm" | "md" | "lg";
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    { className, variant = "default", padding = "md", children, ...props },
    ref
  ) => {
    const variants = {
      default: "bg-surface-card border border-surface-border",
      glow: "bg-surface-card border border-surface-border shadow-lg shadow-spark-purple/10",
      interactive:
        "bg-surface-card border border-surface-border hover:border-spark-purple/50 hover:shadow-lg hover:shadow-spark-purple/10 transition-all duration-300 cursor-pointer active:scale-[0.98]",
    };

    const paddings = {
      none: "",
      sm: "p-3",
      md: "p-4 md:p-5",
      lg: "p-6 md:p-8",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl",
          variants[variant],
          paddings[padding],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
