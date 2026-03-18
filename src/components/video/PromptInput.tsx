"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Wand2, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

interface PromptInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  isGenerating: boolean;
  placeholder?: string;
}

const PROMPT_SUGGESTIONS = [
  "A cat wearing sunglasses surfing on a rainbow wave",
  "A city made of candy melting in the sun",
  "A dragon made of flowers taking flight",
  "A pizza spinning in space surrounded by stars",
  "A sneaker transforming into a butterfly",
  "An astronaut dancing on the moon with disco lights",
  "A goldfish swimming through clouds",
  "A robot learning to paint a sunset",
];

export function PromptInput({
  value,
  onChange,
  onSubmit,
  isGenerating,
  placeholder = "Describe your dream video...",
}: PromptInputProps) {
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSuggestion = (suggestion: string) => {
    onChange(suggestion);
    setShowSuggestions(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey && value.trim()) {
      e.preventDefault();
      onSubmit();
    }
  };

  return (
    <div className="space-y-3">
      <div className="relative">
        <div className="relative bg-surface-elevated border-2 border-surface-border rounded-2xl focus-within:border-spark-purple transition-colors overflow-hidden">
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            rows={3}
            className="w-full bg-transparent px-4 pt-4 pb-14 text-white placeholder:text-white/30 resize-none focus:outline-none text-base"
          />
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowSuggestions(!showSuggestions)}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all",
                  showSuggestions
                    ? "bg-spark-purple/20 text-spark-purple"
                    : "bg-white/5 text-white/50 hover:text-white/70"
                )}
              >
                <Lightbulb size={14} />
                Ideas
              </button>
              <span className="text-xs text-white/30">
                {value.length}/500
              </span>
            </div>
            <Button
              variant="fun"
              size="md"
              onClick={onSubmit}
              isLoading={isGenerating}
              disabled={!value.trim() || isGenerating}
              leftIcon={
                isGenerating ? undefined : <Wand2 size={16} />
              }
            >
              {isGenerating ? "Creating..." : "Create"}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showSuggestions && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-3 bg-surface-elevated rounded-2xl border border-surface-border">
              <p className="col-span-full text-xs font-medium text-white/50 mb-1">
                <Sparkles size={12} className="inline mr-1" />
                Try one of these:
              </p>
              {PROMPT_SUGGESTIONS.map((suggestion, i) => (
                <motion.button
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleSuggestion(suggestion)}
                  className="text-left px-3 py-2 rounded-xl bg-white/5 hover:bg-spark-purple/10 text-sm text-white/70 hover:text-white transition-all border border-transparent hover:border-spark-purple/30"
                >
                  {suggestion}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
