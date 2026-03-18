"use client";

import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "spark" | "success" | "warning" | "trending";
  size?: "sm" | "md";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  size = "sm",
  className,
}: BadgeProps) {
  const variants = {
    default: "bg-surface-elevated text-white/70 border border-surface-border",
    spark:
      "bg-gradient-to-r from-spark-pink/20 to-spark-purple/20 text-spark-pink border border-spark-pink/30",
    success:
      "bg-green-500/20 text-green-400 border border-green-500/30",
    warning:
      "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30",
    trending:
      "bg-gradient-to-r from-spark-orange/20 to-spark-red/20 text-spark-orange border border-spark-orange/30",
  };

  const sizes = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full font-medium",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </span>
  );
}
