"use client";

import { motion } from "framer-motion";
import { Heart, Eye, Repeat2, Play, Share2 } from "lucide-react";
import { cn, formatNumber, getEffectEmoji, getTimeAgo } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import type { VideoProject } from "@/types";

interface VideoCardProps {
  video: VideoProject;
  onPlay?: () => void;
  onLike?: () => void;
  onRemix?: () => void;
  onShare?: () => void;
  size?: "sm" | "md" | "lg";
}

export function VideoCard({
  video,
  onPlay,
  onLike,
  onRemix,
  onShare,
  size = "md",
}: VideoCardProps) {
  const aspectClasses = {
    "9:16": "aspect-[9/16]",
    "1:1": "aspect-square",
    "16:9": "aspect-video",
    "4:5": "aspect-[4/5]",
  };

  const sizeClasses = {
    sm: "max-w-[200px]",
    md: "max-w-[300px]",
    lg: "max-w-[400px]",
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={cn(
        "group relative rounded-2xl overflow-hidden bg-surface-card border border-surface-border",
        sizeClasses[size]
      )}
    >
      {/* Thumbnail */}
      <div
        className={cn(
          "relative bg-gradient-to-br from-surface-elevated to-surface-dark overflow-hidden",
          aspectClasses[video.aspectRatio]
        )}
      >
        {/* Placeholder gradient for thumbnail */}
        <div className="absolute inset-0 bg-gradient-to-br from-spark-purple/30 via-spark-pink/20 to-spark-blue/30" />

        {/* Play overlay */}
        <div
          onClick={onPlay}
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer bg-black/30"
        >
          <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <Play size={24} className="text-white ml-1" fill="white" />
          </div>
        </div>

        {/* Effect badge */}
        {video.effect && (
          <div className="absolute top-2 left-2">
            <Badge variant="spark" size="sm">
              {getEffectEmoji(video.effect)} {video.effect}
            </Badge>
          </div>
        )}

        {/* Duration */}
        <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/60 rounded-lg text-xs text-white font-medium">
          {video.duration}s
        </div>
      </div>

      {/* Info */}
      <div className="p-3 space-y-2">
        <h3 className="text-sm font-semibold text-white truncate">
          {video.title}
        </h3>
        <p className="text-xs text-white/40 truncate">{video.prompt}</p>

        {/* Stats */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-3">
            <button
              onClick={onLike}
              className="flex items-center gap-1 text-white/40 hover:text-spark-pink transition-colors"
            >
              <Heart size={14} />
              <span className="text-xs">{formatNumber(video.likes)}</span>
            </button>
            <div className="flex items-center gap-1 text-white/40">
              <Eye size={14} />
              <span className="text-xs">{formatNumber(video.views)}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onRemix}
              className="text-white/40 hover:text-spark-cyan transition-colors"
              title="Remix"
            >
              <Repeat2 size={14} />
            </button>
            <button
              onClick={onShare}
              className="text-white/40 hover:text-spark-purple transition-colors"
              title="Share"
            >
              <Share2 size={14} />
            </button>
          </div>
        </div>

        <p className="text-[10px] text-white/30">
          {getTimeAgo(video.createdAt)}
        </p>
      </div>
    </motion.div>
  );
}
