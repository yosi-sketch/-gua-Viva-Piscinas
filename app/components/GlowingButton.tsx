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
    | "gold"
    | "dark"
    | "outline"
    | "outlineTeal"
    | "outlineGold"
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
  size = "sm",
  variant = "primary",
}: GlowingButtonProps) {
  const sizeClasses = {
    sm: "px-3.5 py-2 text-[12.5px] font-semibold tracking-wide",
    md: "px-5 py-2.5 text-[13px] font-semibold tracking-wide",
    lg: "px-6 py-3.5 text-[14px] font-bold tracking-wide",
  }[size];

  // Refined medical palette: Deep Pine Teal, Warm Ochre Gold, Dark Pine Slate, and friendly WhatsApp green
  const variantClasses = {
    primary:
      "bg-[#066e69] hover:bg-[#055955] text-white shadow-sm hover:shadow transition-all border border-[#066e69] hover:-translate-y-0.5 active:translate-y-0",
    gold:
      "bg-[#b3844e] hover:bg-[#996d3c] text-white shadow-sm hover:shadow transition-all border border-[#b3844e] hover:-translate-y-0.5 active:translate-y-0",
    dark:
      "bg-[#0c201e] hover:bg-[#132c2a] text-white shadow-sm hover:shadow transition-all border border-[#1e3e3b] hover:-translate-y-0.5 active:translate-y-0",
    whatsapp:
      "bg-[#16a34a] hover:bg-[#15803d] text-white shadow-sm hover:shadow transition-all border border-[#16a34a] hover:-translate-y-0.5 active:translate-y-0",
    outline:
      "border border-slate-300 bg-white text-slate-800 hover:text-[#066e69] hover:border-[#066e69] hover:bg-[#f0f8f7] shadow-2xs hover:-translate-y-0.5 active:translate-y-0",
    outlineTeal:
      "border border-[#066e69] bg-transparent text-[#066e69] hover:bg-[#066e69] hover:text-white shadow-2xs hover:-translate-y-0.5 active:translate-y-0",
    outlineGold:
      "border border-[#b3844e] bg-transparent text-[#b3844e] hover:bg-[#b3844e] hover:text-white shadow-2xs hover:-translate-y-0.5 active:translate-y-0",
    light:
      "border border-[#cde6e4] bg-[#f0f8f7] text-[#066e69] hover:bg-[#e2f1f0] shadow-2xs hover:-translate-y-0.5 active:translate-y-0",
    white:
      "border border-slate-200 bg-white text-slate-900 hover:bg-[#f8faf9] shadow-2xs hover:-translate-y-0.5 active:translate-y-0",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#066e69] select-none text-center cursor-pointer whitespace-nowrap " +
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
