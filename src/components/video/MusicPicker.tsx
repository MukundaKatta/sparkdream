"use client";

import { motion } from "framer-motion";
import { cn, formatDuration } from "@/lib/utils";
import { SAMPLE_MUSIC_TRACKS } from "@/lib/constants";
import { Music, Play, TrendingUp, X } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { MusicTrack } from "@/types";

interface MusicPickerProps {
  selected: MusicTrack | null;
  onSelect: (track: MusicTrack | null) => void;
}

export function MusicPicker({ selected, onSelect }: MusicPickerProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-white/80 flex items-center gap-2">
          <Music size={14} />
          Music Sync
        </h3>
        {selected && (
          <button
            onClick={() => onSelect(null)}
            className="text-xs text-spark-pink hover:text-spark-pink/80 flex items-center gap-1 transition-colors"
          >
            <X size={12} />
            Remove
          </button>
        )}
      </div>
      <div className="space-y-2 max-h-[240px] overflow-y-auto pr-1 custom-scrollbar">
        {SAMPLE_MUSIC_TRACKS.map((track) => {
          const isSelected = selected?.id === track.id;
          return (
            <motion.button
              key={track.id}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelect(isSelected ? null : track)}
              className={cn(
                "w-full flex items-center gap-3 p-3 rounded-xl border text-left transition-all",
                isSelected
                  ? "border-spark-purple bg-spark-purple/10"
                  : "border-surface-border bg-surface-elevated hover:border-white/20"
              )}
            >
              <div
                className={cn(
                  "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0",
                  isSelected
                    ? "bg-spark-purple/30"
                    : "bg-white/5"
                )}
              >
                {isSelected ? (
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  >
                    <Music size={18} className="text-spark-purple" />
                  </motion.div>
                ) : (
                  <Play size={18} className="text-white/40 ml-0.5" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p
                    className={cn(
                      "text-sm font-medium truncate",
                      isSelected ? "text-white" : "text-white/70"
                    )}
                  >
                    {track.title}
                  </p>
                  {track.isTrending && (
                    <Badge variant="trending" size="sm">
                      <TrendingUp size={10} />
                      Hot
                    </Badge>
                  )}
                </div>
                <p className="text-xs text-white/40 truncate">
                  {track.artist} · {track.genre} · {track.bpm} BPM
                </p>
              </div>
              <span className="text-xs text-white/30 flex-shrink-0">
                {formatDuration(track.duration)}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
