import { create } from "zustand";
import type {
  EffectPreset,
  GenerationMode,
  VideoAspectRatio,
  VideoProject,
  MusicTrack,
} from "@/types";

interface CreationState {
  prompt: string;
  mode: GenerationMode;
  effect: EffectPreset | null;
  aspectRatio: VideoAspectRatio;
  duration: number;
  selectedMusic: MusicTrack | null;
  sourceImage: File | null;
  sourceImagePreview: string | null;
  memeTopText: string;
  memeBottomText: string;
  isGenerating: boolean;
  generationProgress: number;
  currentProject: VideoProject | null;

  setPrompt: (prompt: string) => void;
  setMode: (mode: GenerationMode) => void;
  setEffect: (effect: EffectPreset | null) => void;
  setAspectRatio: (ratio: VideoAspectRatio) => void;
  setDuration: (duration: number) => void;
  setSelectedMusic: (track: MusicTrack | null) => void;
  setSourceImage: (file: File | null) => void;
  setSourceImagePreview: (url: string | null) => void;
  setMemeTopText: (text: string) => void;
  setMemeBottomText: (text: string) => void;
  setIsGenerating: (generating: boolean) => void;
  setGenerationProgress: (progress: number) => void;
  setCurrentProject: (project: VideoProject | null) => void;
  reset: () => void;
}

const initialState = {
  prompt: "",
  mode: "prompt" as GenerationMode,
  effect: null as EffectPreset | null,
  aspectRatio: "9:16" as VideoAspectRatio,
  duration: 5,
  selectedMusic: null as MusicTrack | null,
  sourceImage: null as File | null,
  sourceImagePreview: null as string | null,
  memeTopText: "",
  memeBottomText: "",
  isGenerating: false,
  generationProgress: 0,
  currentProject: null as VideoProject | null,
};

export const useCreationStore = create<CreationState>((set) => ({
  ...initialState,
  setPrompt: (prompt) => set({ prompt }),
  setMode: (mode) => set({ mode }),
  setEffect: (effect) => set({ effect }),
  setAspectRatio: (aspectRatio) => set({ aspectRatio }),
  setDuration: (duration) => set({ duration }),
  setSelectedMusic: (selectedMusic) => set({ selectedMusic }),
  setSourceImage: (sourceImage) => set({ sourceImage }),
  setSourceImagePreview: (sourceImagePreview) => set({ sourceImagePreview }),
  setMemeTopText: (memeTopText) => set({ memeTopText }),
  setMemeBottomText: (memeBottomText) => set({ memeBottomText }),
  setIsGenerating: (isGenerating) => set({ isGenerating }),
  setGenerationProgress: (generationProgress) => set({ generationProgress }),
  setCurrentProject: (currentProject) => set({ currentProject }),
  reset: () => set(initialState),
}));

interface GalleryState {
  videos: VideoProject[];
  filter: "all" | "trending" | "recent" | "my-videos";
  searchQuery: string;
  setVideos: (videos: VideoProject[]) => void;
  addVideo: (video: VideoProject) => void;
  setFilter: (filter: "all" | "trending" | "recent" | "my-videos") => void;
  setSearchQuery: (query: string) => void;
  likeVideo: (videoId: string) => void;
}

export const useGalleryStore = create<GalleryState>((set) => ({
  videos: [],
  filter: "all",
  searchQuery: "",
  setVideos: (videos) => set({ videos }),
  addVideo: (video) => set((state) => ({ videos: [video, ...state.videos] })),
  setFilter: (filter) => set({ filter }),
  setSearchQuery: (searchQuery) => set({ searchQuery }),
  likeVideo: (videoId) =>
    set((state) => ({
      videos: state.videos.map((v) =>
        v.id === videoId ? { ...v, likes: v.likes + 1 } : v
      ),
    })),
}));
