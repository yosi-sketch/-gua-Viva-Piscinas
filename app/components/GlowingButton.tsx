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
    | "dark"
    | "bronze"
    | "outline"
    | "outlineRed"
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

  // Refined medical palette: Sober ruby crimson, deep slate, architectural bronze, and friendly WhatsApp green
  const variantClasses = {
    primary:
      "bg-[#991b1b] hover:bg-[#7f1d1d] text-white shadow-sm hover:shadow transition-all border border-[#991b1b] hover:-translate-y-0.5 active:translate-y-0",
    dark:
      "bg-[#121318] hover:bg-[#1f2129] text-white shadow-sm hover:shadow transition-all border border-[#272a38] hover:-translate-y-0.5 active:translate-y-0",
    bronze:
      "bg-[#785b46] hover:bg-[#624734] text-white shadow-sm hover:shadow transition-all border border-[#785b46] hover:-translate-y-0.5 active:translate-y-0",
    whatsapp:
      "bg-[#16a34a] hover:bg-[#15803d] text-white shadow-sm hover:shadow transition-all border border-[#16a34a] hover:-translate-y-0.5 active:translate-y-0",
    outline:
      "border border-slate-300 bg-white text-slate-800 hover:text-[#991b1b] hover:border-[#991b1b] hover:bg-slate-50 shadow-2xs hover:-translate-y-0.5 active:translate-y-0",
    outlineRed:
      "border border-[#991b1b] bg-transparent text-[#991b1b] hover:bg-[#991b1b] hover:text-white shadow-2xs hover:-translate-y-0.5 active:translate-y-0",
    light:
      "border border-red-100 bg-[#fdf8f8] text-[#991b1b] hover:bg-red-50 shadow-2xs hover:-translate-y-0.5 active:translate-y-0",
    white:
      "border border-slate-200 bg-white text-slate-900 hover:bg-slate-50 shadow-2xs hover:-translate-y-0.5 active:translate-y-0",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#991b1b] select-none text-center cursor-pointer whitespace-nowrap " +
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
