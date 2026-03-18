"use client";

import { useCallback } from "react";
import { motion } from "framer-motion";
import { Upload, X, Image as ImageIcon, Camera } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageUploaderProps {
  preview: string | null;
  onUpload: (file: File) => void;
  onRemove: () => void;
  label?: string;
  description?: string;
}

export function ImageUploader({
  preview,
  onUpload,
  onRemove,
  label = "Upload Image",
  description = "Drop a photo to animate or use as reference",
}: ImageUploaderProps) {
  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      if (file && file.type.startsWith("image/")) {
        onUpload(file);
      }
    },
    [onUpload]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        onUpload(file);
      }
    },
    [onUpload]
  );

  if (preview) {
    return (
      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-white/80 flex items-center gap-2">
          <Camera size={14} />
          {label}
        </h3>
        <div className="relative rounded-2xl overflow-hidden border border-surface-border">
          <img
            src={preview}
            alt="Uploaded"
            className="w-full h-48 object-cover"
          />
          <button
            onClick={onRemove}
            className="absolute top-2 right-2 p-1.5 rounded-xl bg-black/60 hover:bg-black/80 text-white transition-colors"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <h3 className="text-sm font-semibold text-white/80 flex items-center gap-2">
        <Camera size={14} />
        {label}
      </h3>
      <label
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="flex flex-col items-center gap-3 p-6 rounded-2xl border-2 border-dashed border-surface-border bg-surface-elevated hover:border-spark-purple/50 hover:bg-spark-purple/5 transition-all cursor-pointer"
      >
        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
          <Upload size={24} className="text-white/40" />
        </div>
        <div className="text-center">
          <p className="text-sm font-medium text-white/60">
            {description}
          </p>
          <p className="text-xs text-white/30 mt-1">
            PNG, JPG up to 10MB
          </p>
        </div>
        <input
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="hidden"
        />
      </label>
    </div>
  );
}
