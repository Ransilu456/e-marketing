import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "link";
  className?: string;
}

export default function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
  const base = "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-all duration-300 active:scale-[0.98] h-10 px-7";
  const variants = {
    primary: "bg-linear-to-r from-(--color-primary) to-red-800 text-white hover:bg-red-700 shadow-xl shadow-[var(--color-primary)]/20",
    secondary: "bg-white text-zinc-900 border border-zinc-300 hover:bg-red-50 hover:border-(--color-text) shadow-sm transition-all",
    ghost: "text-white hover:text-white/50 hover:bg-zinc-800 px-4 py-2",
    upsideghost: "text-zinc-600 hover:text-(--color-primary) bg-zinc-100 px-4 py-2",
    link: "text-(--color-primary) hover:text-red-700 underline-offset-4 hover:underline p-0 h-auto px-0"
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}