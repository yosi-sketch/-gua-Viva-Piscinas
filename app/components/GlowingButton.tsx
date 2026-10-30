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

  // Visual identity based on Dra. Nayara Medina — Advogada Previdenciária
  // Polished Metallic Amber Gold, Radiant Champagne & Architectural Deep Obsidian
  const variantClasses = {
    gold:
      "border border-[#fedaa8]/90 bg-gradient-to-r from-[#c25b0e] via-[#e5862b] to-[#d87215] text-[#0a0704] font-extrabold shadow-md shadow-[#df7418]/25 hover:-translate-y-0.5 hover:brightness-105 hover:border-white hover:shadow-[0_10px_26px_-4px_rgba(223,116,24,0.5)]",
    onyx:
      "border border-[#df7418]/50 bg-gradient-to-r from-[#0a0704] via-[#130e09] to-[#1a140e] text-[#f7dfb8] font-bold shadow-lg shadow-[#0a0704]/50 hover:-translate-y-0.5 hover:border-[#f7dfb8] hover:text-white hover:shadow-[0_12px_30px_-4px_rgba(19,14,9,0.7)]",
    outline:
      "border border-[#1a140e] bg-transparent text-[#140f0b] font-bold hover:-translate-y-0.5 hover:border-[#df7418] hover:bg-[#1a140e]/5",
    outlineGold:
      "border border-[#df7418]/80 bg-[#df7418]/10 text-[#f7dfb8] font-bold hover:-translate-y-0.5 hover:border-[#fedaa8] hover:bg-[#df7418]/20 hover:text-white",
    light:
      "border border-[#ebe3d7] bg-[#fdfbf7] text-[#140f0b] font-bold shadow-xs hover:-translate-y-0.5 hover:bg-white hover:border-[#df7418]",
    white:
      "border border-[#ebe3d7] bg-white text-[#140f0b] font-bold shadow-xs hover:-translate-y-0.5 hover:border-[#df7418] hover:text-[#0a0704]",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2 rounded-lg font-bold uppercase transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#df7418] select-none text-center cursor-pointer " +
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
