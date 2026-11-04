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
    | "orange"
    | "amber"
    | "dark"
    | "outline"
    | "outlineAqua"
    | "outlineOrange"
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
    sm: "px-3.5 py-2 text-[13px] font-semibold tracking-wide",
    md: "px-5 py-2.5 text-[14px] font-semibold tracking-wide",
    lg: "px-6 py-3.5 text-[15px] font-bold tracking-wide",
  }[size];

  // Palette: Vibrant Ocean Azure (#0077b6), Solar Warm Orange (#ea580c), Sun Amber (#f59e0b), Deep Abyssal Navy (#071e3d), Official WhatsApp (#16a34a)
  const variantClasses = {
    primary:
      "bg-[#0077b6] hover:bg-[#005f94] text-white shadow-sm hover:shadow-md hover:shadow-sky-500/25 transition-all border border-[#0077b6] hover:-translate-y-0.5 active:translate-y-0",
    orange:
      "bg-[#ea580c] hover:bg-[#c2410c] text-white shadow-sm hover:shadow-md hover:shadow-orange-500/25 transition-all border border-[#ea580c] hover:-translate-y-0.5 active:translate-y-0",
    amber:
      "bg-[#f59e0b] hover:bg-[#d97706] text-slate-900 shadow-sm hover:shadow-md hover:shadow-amber-500/25 transition-all border border-[#f59e0b] hover:-translate-y-0.5 active:translate-y-0",
    dark:
      "bg-[#071e3d] hover:bg-[#0c2b56] text-white shadow-sm hover:shadow transition-all border border-[#163f73] hover:-translate-y-0.5 active:translate-y-0",
    whatsapp:
      "bg-[#16a34a] hover:bg-[#15803d] text-white shadow-sm hover:shadow-md hover:shadow-green-600/25 transition-all border border-[#16a34a] hover:-translate-y-0.5 active:translate-y-0",
    outline:
      "border border-slate-300 bg-white text-slate-800 hover:text-[#0077b6] hover:border-[#0077b6] hover:bg-[#f0f9ff] shadow-xs hover:-translate-y-0.5 active:translate-y-0",
    outlineAqua:
      "border border-[#0077b6] bg-transparent text-[#0077b6] hover:bg-[#0077b6] hover:text-white shadow-xs hover:-translate-y-0.5 active:translate-y-0",
    outlineOrange:
      "border border-[#ea580c] bg-transparent text-[#ea580c] hover:bg-[#ea580c] hover:text-white shadow-xs hover:-translate-y-0.5 active:translate-y-0",
    light:
      "border border-[#bae6fd] bg-[#f0f9ff] text-[#0077b6] hover:bg-[#e0f2fe] shadow-xs hover:-translate-y-0.5 active:translate-y-0",
    white:
      "border border-slate-200 bg-white text-slate-900 hover:bg-slate-50 shadow-xs hover:-translate-y-0.5 active:translate-y-0",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0077b6] select-none text-center cursor-pointer whitespace-nowrap " +
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
