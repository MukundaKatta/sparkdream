"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ProgressBarProps {
  value: number;
  max?: number;
  label?: string;
  showValue?: boolean;
  className?: string;
  variant?: "spark" | "rainbow" | "single";
  color?: string;
}

export function ProgressBar({
  value,
  max = 100,
  label,
  showValue = true,
  className,
  variant = "spark",
}: ProgressBarProps) {
  const percentage = Math.min((value / max) * 100, 100);

  const gradients = {
    spark: "bg-gradient-to-r from-spark-pink via-spark-purple to-spark-blue",
    rainbow:
      "bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500",
    single: "bg-spark-purple",
  };

  return (
    <div className={cn("w-full", className)}>
      {(label || showValue) && (
        <div className="flex justify-between items-center mb-1.5">
          {label && (
            <span className="text-sm font-medium text-white/70">{label}</span>
          )}
          {showValue && (
            <span className="text-sm font-bold text-white">
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}
      <div className="w-full h-3 bg-surface-elevated rounded-full overflow-hidden">
        <motion.div
          className={cn("h-full rounded-full", gradients[variant])}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
