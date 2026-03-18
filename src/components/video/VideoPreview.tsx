"use client";

import { motion } from "framer-motion";
import { cn, getEffectEmoji } from "@/lib/utils";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Sparkles, Download, Share2, Repeat2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { VideoProject } from "@/types";

interface VideoPreviewProps {
  project: VideoProject | null;
  isGenerating: boolean;
  progress: number;
  onDownload?: () => void;
  onShare?: () => void;
  onRemix?: () => void;
}

export function VideoPreview({
  project,
  isGenerating,
  progress,
  onDownload,
  onShare,
  onRemix,
}: VideoPreviewProps) {
  const aspectClasses: Record<string, string> = {
    "9:16": "aspect-[9/16] max-h-[500px]",
    "1:1": "aspect-square max-h-[400px]",
    "16:9": "aspect-video",
    "4:5": "aspect-[4/5] max-h-[450px]",
  };

  if (isGenerating) {
    return (
      <div className="flex flex-col items-center justify-center py-12 space-y-6">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-20 h-20 rounded-2xl bg-gradient-spark flex items-center justify-center"
        >
          <Sparkles size={32} className="text-white" />
        </motion.div>

        <div className="text-center space-y-2">
          <h3 className="text-lg font-bold text-white">
            Creating your dream...
          </h3>
          <p className="text-sm text-white/50">
            {progress < 30
              ? "Analyzing your prompt..."
              : progress < 60
              ? "Generating frames..."
              : progress < 90
              ? "Applying effects..."
              : "Finalizing your video..."}
          </p>
        </div>

        <ProgressBar
          value={progress}
          variant="rainbow"
          className="max-w-xs w-full"
        />

        <div className="flex gap-2">
          {["💥", "🫠", "🎈", "🧊", "✨", "🦋"].map((emoji, i) => (
            <motion.span
              key={i}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.1,
              }}
              className="text-2xl"
            >
              {emoji}
            </motion.span>
          ))}
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center py-16 space-y-4">
        <div className="w-24 h-24 rounded-3xl bg-surface-elevated border border-surface-border flex items-center justify-center">
          <Sparkles size={40} className="text-white/20" />
        </div>
        <p className="text-white/40 text-center max-w-xs">
          Your generated video will appear here. Write a prompt and hit create!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div
        className={cn(
          "relative mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-surface-elevated to-surface-dark border border-surface-border",
          aspectClasses[project.aspectRatio] || "aspect-video"
        )}
      >
        {/* Simulated video output */}
        <div className="absolute inset-0 bg-gradient-to-br from-spark-purple/40 via-spark-pink/30 to-spark-blue/40 flex items-center justify-center">
          <div className="text-center space-y-3">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-6xl"
            >
              {project.effect
                ? getEffectEmoji(project.effect)
                : "🎬"}
            </motion.div>
            <p className="text-white/80 text-sm font-medium px-4">
              {project.title}
            </p>
            <p className="text-white/40 text-xs">{project.duration}s video</p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-center gap-3">
        <Button
          variant="secondary"
          size="md"
          leftIcon={<Download size={16} />}
          onClick={onDownload}
        >
          Download
        </Button>
        <Button
          variant="primary"
          size="md"
          leftIcon={<Share2 size={16} />}
          onClick={onShare}
        >
          Share
        </Button>
        <Button
          variant="ghost"
          size="md"
          leftIcon={<Repeat2 size={16} />}
          onClick={onRemix}
        >
          Remix
        </Button>
      </div>
    </div>
  );
}
