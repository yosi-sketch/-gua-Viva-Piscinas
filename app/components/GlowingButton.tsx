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
    | "navy"
    | "royal"
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
  variant = "gold",
}: GlowingButtonProps) {
  const sizeClasses = {
    sm: "px-4.5 py-2.5 text-[11px] tracking-[0.06em]",
    md: "px-6 py-3.5 text-xs tracking-[0.08em]",
    lg: "px-7 py-4 text-xs tracking-[0.1em]",
  }[size];

  // Visual identity based on Dr. Frank Eduardo — Odontologia Avançada
  // Deep Royal Navy, Imperial Warm Gold & Clean Clinical Slate
  const variantClasses = {
    gold:
      "border border-[#f4c22b]/80 bg-gradient-to-r from-[#b78004] via-[#dea404] to-[#f4c22b] text-[#001344] font-extrabold shadow-md shadow-[#dea404]/30 hover:-translate-y-0.5 hover:brightness-105 hover:border-white hover:shadow-[0_10px_26px_-4px_rgba(222,164,4,0.5)]",
    rosegold:
      "border border-[#f4c22b]/80 bg-gradient-to-r from-[#b78004] via-[#dea404] to-[#f4c22b] text-[#001344] font-extrabold shadow-md shadow-[#dea404]/30 hover:-translate-y-0.5 hover:brightness-105 hover:border-white hover:shadow-[0_10px_26px_-4px_rgba(222,164,4,0.5)]",
    navy:
      "border border-[#dea404]/60 bg-gradient-to-r from-[#000d2b] via-[#001a60] to-[#02298a] text-white font-bold shadow-lg shadow-[#001344]/50 hover:-translate-y-0.5 hover:border-[#f4c22b] hover:text-[#fff3c4] hover:shadow-[0_12px_30px_-4px_rgba(0,26,96,0.6)]",
    royal:
      "border border-[#dea404]/60 bg-gradient-to-r from-[#000d2b] via-[#001a60] to-[#02298a] text-white font-bold shadow-lg shadow-[#001344]/50 hover:-translate-y-0.5 hover:border-[#f4c22b] hover:text-[#fff3c4] hover:shadow-[0_12px_30px_-4px_rgba(0,26,96,0.6)]",
    onyx:
      "border border-[#dea404]/60 bg-gradient-to-r from-[#000d2b] via-[#001a60] to-[#02298a] text-white font-bold shadow-lg shadow-[#001344]/50 hover:-translate-y-0.5 hover:border-[#f4c22b] hover:text-[#fff3c4] hover:shadow-[0_12px_30px_-4px_rgba(0,26,96,0.6)]",
    espresso:
      "border border-[#dea404]/60 bg-gradient-to-r from-[#000d2b] via-[#001a60] to-[#02298a] text-white font-bold shadow-lg shadow-[#001344]/50 hover:-translate-y-0.5 hover:border-[#f4c22b] hover:text-[#fff3c4] hover:shadow-[0_12px_30px_-4px_rgba(0,26,96,0.6)]",
    outline:
      "border border-[#001a60] bg-transparent text-[#001a60] font-bold hover:-translate-y-0.5 hover:border-[#dea404] hover:bg-[#001a60]/5",
    outlineGold:
      "border border-[#dea404] bg-[#dea404]/10 text-[#8c6002] font-bold hover:-translate-y-0.5 hover:border-[#b78004] hover:bg-[#dea404]/20",
    outlineRose:
      "border border-[#dea404] bg-[#dea404]/10 text-[#8c6002] font-bold hover:-translate-y-0.5 hover:border-[#b78004] hover:bg-[#dea404]/20",
    light:
      "border border-[#e2e8f0] bg-[#f8fafc] text-[#001344] font-bold shadow-2xs hover:-translate-y-0.5 hover:bg-white hover:border-[#dea404]",
    white:
      "border border-[#e2e8f0] bg-white text-[#001344] font-bold shadow-2xs hover:-translate-y-0.5 hover:border-[#dea404] hover:text-[#001a60]",
    whatsapp:
      "border border-emerald-400/80 bg-gradient-to-r from-[#059669] via-[#10b981] to-[#34d399] text-white font-extrabold shadow-md shadow-emerald-600/30 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[0_10px_26px_-4px_rgba(16,185,129,0.5)]",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2 rounded-lg font-bold uppercase whitespace-nowrap shrink-0 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#dea404] select-none text-center cursor-pointer " +
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
