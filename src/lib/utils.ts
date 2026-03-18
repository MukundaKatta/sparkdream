import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(num: number): string {
  if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(1)}M`;
  if (num >= 1_000) return `${(num / 1_000).toFixed(1)}K`;
  return num.toString();
}

export function formatDuration(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}

export function getEffectEmoji(effect: string): string {
  const map: Record<string, string> = {
    explode: "💥",
    melt: "🫠",
    inflate: "🎈",
    freeze: "🧊",
    dissolve: "✨",
    transform: "🦋",
    glitch: "📺",
    rainbow: "🌈",
    pixelate: "👾",
    neon: "💡",
  };
  return map[effect] || "🎬";
}

export function getEffectColor(effect: string): string {
  const map: Record<string, string> = {
    explode: "from-orange-500 to-red-500",
    melt: "from-pink-500 to-purple-500",
    inflate: "from-blue-400 to-cyan-400",
    freeze: "from-cyan-300 to-blue-500",
    dissolve: "from-purple-400 to-pink-400",
    transform: "from-green-400 to-emerald-500",
    glitch: "from-red-500 to-green-500",
    rainbow: "from-red-500 via-yellow-500 to-blue-500",
    pixelate: "from-indigo-500 to-purple-600",
    neon: "from-yellow-400 to-pink-500",
  };
  return map[effect] || "from-gray-500 to-gray-600";
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength - 3) + "...";
}

export function getTimeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffSecs = Math.floor(diffMs / 1000);
  const diffMins = Math.floor(diffSecs / 60);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffSecs < 60) return "just now";
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)}w ago`;
  return `${Math.floor(diffDays / 30)}mo ago`;
}
