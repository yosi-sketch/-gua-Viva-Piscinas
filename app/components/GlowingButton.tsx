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

  // Visual identity based on Mariana Leão Advocacia
  // Polished Metallic Champagne Gold, Royal Amber & Architectural Deep Obsidian
  const variantClasses = {
    gold:
      "border border-[#fcecb1]/90 bg-gradient-to-r from-[#b88440] via-[#d4af37] to-[#c89e63] text-[#0a0908] font-extrabold shadow-md shadow-[#c89e63]/25 hover:-translate-y-0.5 hover:brightness-105 hover:border-white hover:shadow-[0_10px_26px_-4px_rgba(200,158,99,0.5)]",
    onyx:
      "border border-[#c89e63]/50 bg-gradient-to-r from-[#0a0908] via-[#120f0c] to-[#1a1612] text-[#fcecb1] font-bold shadow-lg shadow-[#0a0908]/50 hover:-translate-y-0.5 hover:border-[#fcecb1] hover:text-white hover:shadow-[0_12px_30px_-4px_rgba(18,15,12,0.7)]",
    outline:
      "border border-[#1a1612] bg-transparent text-[#14110d] font-bold hover:-translate-y-0.5 hover:border-[#c89e63] hover:bg-[#1a1612]/5",
    outlineGold:
      "border border-[#c89e63]/80 bg-[#c89e63]/10 text-[#fcecb1] font-bold hover:-translate-y-0.5 hover:border-[#fdf8d4] hover:bg-[#c89e63]/20 hover:text-white",
    light:
      "border border-[#ebe4d8] bg-[#fdfbf7] text-[#14110d] font-bold shadow-xs hover:-translate-y-0.5 hover:bg-white hover:border-[#c89e63]",
    white:
      "border border-[#ebe4d8] bg-white text-[#14110d] font-bold shadow-xs hover:-translate-y-0.5 hover:border-[#c89e63] hover:text-[#0a0908]",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2 rounded-lg font-bold uppercase transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#c89e63] select-none text-center cursor-pointer " +
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
