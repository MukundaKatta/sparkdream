"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TabItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  badge?: string;
}

interface TabsProps {
  items: TabItem[];
  activeId: string;
  onChange: (id: string) => void;
  className?: string;
}

export function Tabs({ items, activeId, onChange, className }: TabsProps) {
  return (
    <div
      className={cn(
        "flex gap-1 p-1 bg-surface-elevated rounded-2xl overflow-x-auto",
        className
      )}
    >
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => onChange(item.id)}
          className={cn(
            "relative flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl whitespace-nowrap transition-colors",
            activeId === item.id
              ? "text-white"
              : "text-white/50 hover:text-white/70"
          )}
        >
          {activeId === item.id && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-gradient-to-r from-spark-pink/20 to-spark-purple/20 border border-spark-purple/30 rounded-xl"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10 flex items-center gap-2">
            {item.icon}
            {item.label}
            {item.badge && (
              <span className="px-1.5 py-0.5 text-[10px] font-bold bg-spark-pink rounded-full text-white">
                {item.badge}
              </span>
            )}
          </span>
        </button>
      ))}
    </div>
  );
}
