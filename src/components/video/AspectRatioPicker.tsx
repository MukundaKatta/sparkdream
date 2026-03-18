"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ASPECT_RATIOS } from "@/lib/constants";
import type { VideoAspectRatio } from "@/types";

interface AspectRatioPickerProps {
  selected: VideoAspectRatio;
  onSelect: (ratio: VideoAspectRatio) => void;
}

export function AspectRatioPicker({
  selected,
  onSelect,
}: AspectRatioPickerProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-white/80">Aspect Ratio</h3>
      <div className="flex gap-2">
        {ASPECT_RATIOS.map((ratio) => {
          const isSelected = selected === ratio.value;
          return (
            <motion.button
              key={ratio.value}
              whileTap={{ scale: 0.95 }}
              onClick={() => onSelect(ratio.value)}
              className={cn(
                "flex flex-col items-center gap-1.5 px-4 py-3 rounded-xl border transition-all flex-1",
                isSelected
                  ? "border-spark-cyan bg-spark-cyan/10 text-white"
                  : "border-surface-border bg-surface-elevated text-white/50 hover:border-white/20"
              )}
            >
              <span className="text-lg">{ratio.icon}</span>
              <span className="text-xs font-medium">{ratio.label}</span>
              <span className="text-[10px] text-white/40">{ratio.value}</span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
