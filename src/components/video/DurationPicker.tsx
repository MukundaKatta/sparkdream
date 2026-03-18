"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DURATION_OPTIONS } from "@/lib/constants";
import { Clock } from "lucide-react";

interface DurationPickerProps {
  selected: number;
  onSelect: (duration: number) => void;
}

export function DurationPicker({ selected, onSelect }: DurationPickerProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-white/80 flex items-center gap-2">
        <Clock size={14} />
        Duration
      </h3>
      <div className="flex gap-2 flex-wrap">
        {DURATION_OPTIONS.map((duration) => {
          const isSelected = selected === duration;
          return (
            <motion.button
              key={duration}
              whileTap={{ scale: 0.95 }}
              onClick={() => onSelect(duration)}
              className={cn(
                "px-4 py-2 rounded-xl border text-sm font-medium transition-all",
                isSelected
                  ? "border-spark-green bg-spark-green/10 text-spark-green"
                  : "border-surface-border bg-surface-elevated text-white/50 hover:border-white/20"
              )}
            >
              {duration}s
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
