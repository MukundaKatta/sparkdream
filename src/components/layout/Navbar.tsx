"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Sparkles,
  Wand2,
  Grid3X3,
  TrendingUp,
  Laugh,
  User,
} from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: Sparkles },
  { href: "/create", label: "Create", icon: Wand2 },
  { href: "/gallery", label: "Gallery", icon: Grid3X3 },
  { href: "/trending", label: "Trending", icon: TrendingUp },
  { href: "/memes", label: "Memes", icon: Laugh },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop top nav */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 z-50 bg-surface-dark/80 backdrop-blur-xl border-b border-surface-border">
        <div className="max-w-7xl mx-auto w-full px-6 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-spark flex items-center justify-center group-hover:animate-wiggle transition-transform">
              <Sparkles size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-spark-pink via-spark-purple to-spark-blue bg-clip-text text-transparent">
              SparkDream
            </span>
          </Link>

          <div className="flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all",
                    isActive
                      ? "bg-gradient-to-r from-spark-pink/20 to-spark-purple/20 text-white border border-spark-purple/30"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  )}
                >
                  <Icon size={16} />
                  {item.label}
                </Link>
              );
            })}
          </div>

          <Link
            href="/profile"
            className="flex items-center gap-2 px-3 py-2 rounded-xl text-white/60 hover:text-white hover:bg-white/5 transition-all"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-spark-cyan to-spark-blue flex items-center justify-center">
              <User size={14} className="text-white" />
            </div>
          </Link>
        </div>
      </nav>

      {/* Mobile bottom nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-surface-dark/90 backdrop-blur-xl border-t border-surface-border safe-bottom">
        <div className="flex items-center justify-around px-2 py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-all min-w-[56px]",
                  isActive ? "text-spark-pink" : "text-white/40"
                )}
              >
                <div
                  className={cn(
                    "p-1.5 rounded-xl transition-all",
                    isActive &&
                      "bg-gradient-to-r from-spark-pink/20 to-spark-purple/20"
                  )}
                >
                  <Icon size={20} />
                </div>
                <span className="text-[10px] font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
