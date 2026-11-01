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
    | "primary"
    | "teal"
    | "emerald"
    | "outline"
    | "outlineTeal"
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
  variant = "primary",
}: GlowingButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-[12px] font-semibold tracking-wide",
    md: "px-5 py-2.5 text-[13px] font-semibold tracking-wide",
    lg: "px-6 py-3.5 text-[14px] font-bold tracking-wide",
  }[size];

  // Refined, sober medical styling — elegant, trustworthy, without loud multi-color gradients
  const variantClasses = {
    primary:
      "bg-[#0d766e] hover:bg-[#0f5f59] text-white shadow-sm hover:shadow transition-all border border-[#0d766e] hover:-translate-y-0.5",
    teal:
      "bg-[#0a3833] hover:bg-[#072a26] text-white shadow-sm hover:shadow transition-all border border-[#0a3833] hover:-translate-y-0.5",
    emerald:
      "bg-[#15803d] hover:bg-[#166534] text-white shadow-sm hover:shadow transition-all border border-[#15803d] hover:-translate-y-0.5",
    whatsapp:
      "bg-[#16a34a] hover:bg-[#15803d] text-white shadow-sm hover:shadow transition-all border border-[#16a34a] hover:-translate-y-0.5",
    outline:
      "border border-slate-300 bg-white text-slate-700 hover:text-[#0d766e] hover:border-[#0d766e] hover:bg-teal-50/50 shadow-2xs hover:-translate-y-0.5",
    outlineTeal:
      "border border-[#0d766e] bg-transparent text-[#0d766e] hover:bg-[#0d766e] hover:text-white shadow-2xs hover:-translate-y-0.5",
    light:
      "border border-teal-100 bg-teal-50/80 text-[#0d766e] hover:bg-teal-100/80 shadow-2xs hover:-translate-y-0.5",
    white:
      "border border-slate-200 bg-white text-[#0a3833] hover:bg-slate-50 shadow-2xs hover:-translate-y-0.5",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0d766e] select-none text-center cursor-pointer " +
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
