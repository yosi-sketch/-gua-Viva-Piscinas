"use client";

import type { ReactNode } from "react";

interface GlowingButtonProps {
  children: ReactNode;
  href?: string;
  target?: string;
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?:
    | "gold"
    | "onyx"
    | "outline"
    | "outlineGold"
    | "light"
    | "white";
}

export default function GlowingButton({
  children,
  href,
  target,
  onClick,
  className = "",
  size = "md",
  variant = "gold",
}: GlowingButtonProps) {
  const sizeClasses = {
    sm: "px-4.5 py-2.5 text-[11px] tracking-[0.1em]",
    md: "px-6 py-3.5 text-xs tracking-[0.12em]",
    lg: "px-7 py-4 text-xs tracking-[0.14em]",
  }[size];

  // Visual identity based on Advocacia Dr. Geovane Martins
  // Polished Metallic Gold, Architectural Deep Onyx & Obsidian
  const variantClasses = {
    gold:
      "border border-[#fdeea6]/90 bg-gradient-to-r from-[#b88628] via-[#e5bc54] to-[#c89832] text-[#080a0e] font-extrabold shadow-md shadow-[#d4a843]/25 hover:-translate-y-0.5 hover:brightness-105 hover:border-white hover:shadow-[0_10px_26px_-4px_rgba(212,168,67,0.5)]",
    onyx:
      "border border-[#d4a843]/50 bg-gradient-to-r from-[#080a0e] via-[#0f131a] to-[#151922] text-[#f3d893] font-bold shadow-lg shadow-[#080a0e]/50 hover:-translate-y-0.5 hover:border-[#f3d893] hover:text-white hover:shadow-[0_12px_30px_-4px_rgba(15,19,26,0.7)]",
    outline:
      "border border-[#151922] bg-transparent text-[#0f131a] font-bold hover:-translate-y-0.5 hover:border-[#d4a843] hover:bg-[#151922]/5",
    outlineGold:
      "border border-[#d4a843]/80 bg-[#d4a843]/10 text-[#f3d893] font-bold hover:-translate-y-0.5 hover:border-[#fdeea6] hover:bg-[#d4a843]/20 hover:text-white",
    light:
      "border border-[#e5dfd2] bg-[#faf8f3] text-[#0f131a] font-bold shadow-xs hover:-translate-y-0.5 hover:bg-white hover:border-[#d4a843]",
    white:
      "border border-[#e5dfd2] bg-white text-[#0f131a] font-bold shadow-xs hover:-translate-y-0.5 hover:border-[#d4a843] hover:text-[#080a0e]",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2 rounded-lg font-bold uppercase transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#d4a843] select-none text-center cursor-pointer " +
    sizeClasses +
    " " +
    variantClasses +
    " " +
    className;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
