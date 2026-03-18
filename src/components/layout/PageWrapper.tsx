"use client";

import { cn } from "@/lib/utils";

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export function PageWrapper({ children, className }: PageWrapperProps) {
  return (
    <main
      className={cn(
        "min-h-screen bg-surface-dark pt-16 pb-20 md:pb-8 px-4 md:px-6",
        className
      )}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </main>
  );
}
