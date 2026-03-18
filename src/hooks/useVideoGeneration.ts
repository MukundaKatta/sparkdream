"use client";

import { useState, useCallback } from "react";
import { useCreationStore } from "@/lib/store";
import type { GenerationRequest, VideoProject, VideoStatus } from "@/types";
import { generateId } from "@/lib/utils";

export function useVideoGeneration() {
  const [error, setError] = useState<string | null>(null);
  const store = useCreationStore();

  const simulateGeneration = useCallback(
    async (request: GenerationRequest): Promise<VideoProject> => {
      return new Promise((resolve) => {
        store.setIsGenerating(true);
        store.setGenerationProgress(0);
        setError(null);

        const totalSteps = 20;
        let currentStep = 0;

        const interval = setInterval(() => {
          currentStep++;
          const progress = Math.min((currentStep / totalSteps) * 100, 100);
          store.setGenerationProgress(progress);

          if (currentStep >= totalSteps) {
            clearInterval(interval);

            const project: VideoProject = {
              id: generateId(),
              userId: "demo-user",
              title:
                request.prompt.substring(0, 50) ||
                `${request.mode} creation`,
              prompt: request.prompt,
              mode: request.mode,
              effect: request.effect,
              aspectRatio: request.aspectRatio,
              duration: request.duration,
              status: "ready" as VideoStatus,
              videoUrl: null,
              thumbnailUrl: null,
              musicTrackId: request.musicTrackId,
              isPublic: false,
              likes: 0,
              remixes: 0,
              views: 0,
              templateId: request.templateId,
              sourceImageUrl: request.sourceImageUrl,
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
            };

            store.setIsGenerating(false);
            store.setCurrentProject(project);
            resolve(project);
          }
        }, 200);
      });
    },
    [store]
  );

  const generate = useCallback(async () => {
    const request: GenerationRequest = {
      prompt: store.prompt,
      mode: store.mode,
      effect: store.effect,
      aspectRatio: store.aspectRatio,
      duration: store.duration,
      musicTrackId: store.selectedMusic?.id || null,
      sourceImageUrl: store.sourceImagePreview,
      templateId: null,
      memeTopText: store.memeTopText,
      memeBottomText: store.memeBottomText,
    };

    try {
      const project = await simulateGeneration(request);
      return project;
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Generation failed";
      setError(message);
      store.setIsGenerating(false);
      return null;
    }
  }, [store, simulateGeneration]);

  return {
    generate,
    error,
    isGenerating: store.isGenerating,
    progress: store.generationProgress,
  };
}
