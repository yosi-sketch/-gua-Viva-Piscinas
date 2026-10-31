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
    | "rosegold"
    | "onyx"
    | "espresso"
    | "outline"
    | "outlineGold"
    | "outlineRose"
    | "light"
    | "white"
    | "whatsapp";
}

export default function GlowingButton({
  children,
  href,
  target,
  onClick,
  className = "",
  size = "md",
  variant = "rosegold",
}: GlowingButtonProps) {
  const sizeClasses = {
    sm: "px-4.5 py-2.5 text-[11px] tracking-[0.1em]",
    md: "px-6 py-3.5 text-xs tracking-[0.12em]",
    lg: "px-7 py-4 text-xs tracking-[0.14em]",
  }[size];

  // Visual identity based on Clínica Dra. Kamilla
  // Metallic Rose Gold, Champagne Pearl & Deep Warm Espresso Noir
  const variantClasses = {
    gold:
      "border border-[#faece4]/90 bg-gradient-to-r from-[#944e31] via-[#c88d6f] to-[#b87755] text-white font-extrabold shadow-md shadow-[#b87755]/25 hover:-translate-y-0.5 hover:brightness-105 hover:border-white hover:shadow-[0_10px_26px_-4px_rgba(184,119,85,0.5)]",
    rosegold:
      "border border-[#faece4]/90 bg-gradient-to-r from-[#944e31] via-[#c88d6f] to-[#b87755] text-white font-extrabold shadow-md shadow-[#b87755]/25 hover:-translate-y-0.5 hover:brightness-105 hover:border-white hover:shadow-[0_10px_26px_-4px_rgba(184,119,85,0.5)]",
    onyx:
      "border border-[#c88d6f]/50 bg-gradient-to-r from-[#161110] via-[#201918] to-[#2a2220] text-[#faece4] font-bold shadow-lg shadow-[#161110]/50 hover:-translate-y-0.5 hover:border-[#faece4] hover:text-white hover:shadow-[0_12px_30px_-4px_rgba(22,17,16,0.7)]",
    espresso:
      "border border-[#c88d6f]/50 bg-gradient-to-r from-[#161110] via-[#201918] to-[#2a2220] text-[#faece4] font-bold shadow-lg shadow-[#161110]/50 hover:-translate-y-0.5 hover:border-[#faece4] hover:text-white hover:shadow-[0_12px_30px_-4px_rgba(22,17,16,0.7)]",
    outline:
      "border border-[#2a2220] bg-transparent text-[#1e1815] font-bold hover:-translate-y-0.5 hover:border-[#b87755] hover:bg-[#2a2220]/5",
    outlineGold:
      "border border-[#c88d6f]/80 bg-[#c88d6f]/10 text-[#944e31] font-bold hover:-translate-y-0.5 hover:border-[#944e31] hover:bg-[#c88d6f]/20",
    outlineRose:
      "border border-[#c88d6f]/80 bg-[#c88d6f]/10 text-[#944e31] font-bold hover:-translate-y-0.5 hover:border-[#944e31] hover:bg-[#c88d6f]/20",
    light:
      "border border-[#ede4dc] bg-[#fdfbf9] text-[#1e1815] font-bold shadow-2xs hover:-translate-y-0.5 hover:bg-white hover:border-[#b87755]",
    white:
      "border border-[#ede4dc] bg-white text-[#1e1815] font-bold shadow-2xs hover:-translate-y-0.5 hover:border-[#b87755] hover:text-[#161110]",
    whatsapp:
      "border border-emerald-400/80 bg-gradient-to-r from-[#0d9488] via-[#059669] to-[#10b981] text-white font-extrabold shadow-md shadow-emerald-600/30 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[0_10px_26px_-4px_rgba(16,185,129,0.5)]",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2 rounded-lg font-bold uppercase transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#b87755] select-none text-center cursor-pointer " +
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
