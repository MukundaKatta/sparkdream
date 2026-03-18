"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { getEffectColor } from "@/lib/utils";
import { EFFECT_PRESETS } from "@/lib/constants";
import type { EffectPreset } from "@/types";

interface EffectPickerProps {
  selectedEffect: EffectPreset | null;
  onSelect: (effect: EffectPreset | null) => void;
  compact?: boolean;
}

export function EffectPicker({
  selectedEffect,
  onSelect,
  compact = false,
}: EffectPickerProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-white/80">Effect Preset</h3>
        {selectedEffect && (
          <button
            onClick={() => onSelect(null)}
            className="text-xs text-spark-pink hover:text-spark-pink/80 transition-colors"
          >
            Clear
          </button>
        )}
      </div>
      <div
        className={cn(
          "grid gap-2",
          compact ? "grid-cols-5" : "grid-cols-2 sm:grid-cols-5"
        )}
      >
        {EFFECT_PRESETS.map((effect) => {
          const isSelected = selectedEffect === effect.id;
          return (
            <motion.button
              key={effect.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onSelect(isSelected ? null : effect.id)}
              className={cn(
                "relative flex flex-col items-center gap-1 p-3 rounded-2xl border transition-all",
                isSelected
                  ? "border-spark-purple bg-gradient-to-b from-spark-purple/20 to-spark-pink/10 shadow-lg shadow-spark-purple/20"
                  : "border-surface-border bg-surface-elevated hover:border-white/20"
              )}
            >
              <span className="text-2xl">{effect.emoji}</span>
              <span
                className={cn(
                  "text-xs font-medium",
                  isSelected ? "text-white" : "text-white/60"
                )}
              >
                {effect.label}
              </span>
              {!compact && (
                <span className="text-[10px] text-white/40 text-center leading-tight hidden sm:block">
                  {effect.description}
                </span>
              )}
              {isSelected && (
                <motion.div
                  layoutId="effectSelection"
                  className="absolute inset-0 rounded-2xl border-2 border-spark-purple"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
