export type EffectPreset =
  | "explode"
  | "melt"
  | "inflate"
  | "freeze"
  | "dissolve"
  | "transform"
  | "glitch"
  | "rainbow"
  | "pixelate"
  | "neon";

export type SocialPlatform = "tiktok" | "instagram" | "youtube" | "twitter";

export type VideoAspectRatio = "9:16" | "1:1" | "16:9" | "4:5";

export type VideoStatus =
  | "pending"
  | "generating"
  | "processing"
  | "ready"
  | "failed";

export type GenerationMode =
  | "prompt"
  | "scene"
  | "character"
  | "meme"
  | "remix";

export interface VideoProject {
  id: string;
  userId: string;
  title: string;
  prompt: string;
  mode: GenerationMode;
  effect: EffectPreset | null;
  aspectRatio: VideoAspectRatio;
  duration: number;
  status: VideoStatus;
  videoUrl: string | null;
  thumbnailUrl: string | null;
  musicTrackId: string | null;
  isPublic: boolean;
  likes: number;
  remixes: number;
  views: number;
  templateId: string | null;
  sourceImageUrl: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface UserProfile {
  id: string;
  email: string;
  displayName: string;
  avatarUrl: string | null;
  bio: string;
  videosCreated: number;
  totalLikes: number;
  totalViews: number;
  createdAt: string;
}

export interface MusicTrack {
  id: string;
  title: string;
  artist: string;
  duration: number;
  bpm: number;
  genre: string;
  previewUrl: string;
  fullUrl: string;
  isTrending: boolean;
}

export interface VideoTemplate {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  prompt: string;
  effect: EffectPreset;
  aspectRatio: VideoAspectRatio;
  category: string;
  usageCount: number;
  isTrending: boolean;
  createdAt: string;
}

export interface MemeTemplate {
  id: string;
  title: string;
  thumbnailUrl: string;
  topText: string;
  bottomText: string;
  effect: EffectPreset;
  category: string;
}

export interface SocialShareConfig {
  platform: SocialPlatform;
  aspectRatio: VideoAspectRatio;
  maxDuration: number;
  label: string;
  icon: string;
  color: string;
  dimensions: { width: number; height: number };
}

export interface GenerationRequest {
  prompt: string;
  mode: GenerationMode;
  effect: EffectPreset | null;
  aspectRatio: VideoAspectRatio;
  duration: number;
  musicTrackId: string | null;
  sourceImageUrl: string | null;
  templateId: string | null;
  memeTopText?: string;
  memeBottomText?: string;
}

export interface GenerationResponse {
  projectId: string;
  status: VideoStatus;
  estimatedTime: number;
  queuePosition: number;
}
