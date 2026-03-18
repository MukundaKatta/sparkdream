"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SOCIAL_CONFIGS } from "@/lib/constants";
import type { SocialPlatform, VideoAspectRatio } from "@/types";
import { Smartphone, Instagram, Youtube, Twitter } from "lucide-react";

interface SocialFormatPickerProps {
  onSelect: (platform: SocialPlatform) => void;
  onAspectRatioChange: (ratio: VideoAspectRatio) => void;
  onDurationChange: (duration: number) => void;
}

const platformIcons: Record<SocialPlatform, React.ReactNode> = {
  tiktok: <Smartphone size={20} />,
  instagram: <Instagram size={20} />,
  youtube: <Youtube size={20} />,
  twitter: <Twitter size={20} />,
};

export function SocialFormatPicker({
  onSelect,
  onAspectRatioChange,
  onDurationChange,
}: SocialFormatPickerProps) {
  const handleSelect = (platform: SocialPlatform) => {
    const config = SOCIAL_CONFIGS[platform];
    onSelect(platform);
    onAspectRatioChange(config.aspectRatio);
    onDurationChange(Math.min(config.maxDuration, 15));
  };

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-white/80">
        Quick Format for Social
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {(Object.entries(SOCIAL_CONFIGS) as [SocialPlatform, typeof SOCIAL_CONFIGS[SocialPlatform]][]).map(
          ([platform, config]) => (
            <motion.button
              key={platform}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleSelect(platform)}
              className="flex flex-col items-center gap-2 p-4 rounded-2xl border border-surface-border bg-surface-elevated hover:border-white/20 transition-all group"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white transition-colors"
                style={{ backgroundColor: `${config.color}20` }}
              >
                {platformIcons[platform]}
              </div>
              <span className="text-xs font-medium text-white/70 group-hover:text-white transition-colors">
                {config.label}
              </span>
              <span className="text-[10px] text-white/30">
                {config.aspectRatio} · {config.maxDuration}s max
              </span>
            </motion.button>
          )
        )}
      </div>
    </div>
  );
}
