import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "link" | "upsideghost";
  className?: string;
  href?: string;
}

export default function Button({ children, variant = "primary", className = "", href, ...props }: ButtonProps) {
  const base = "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-all duration-300 active:scale-[0.98] px-7";
  const variants = {
    primary:
      "rounded-xl px-6 py-3 text-white bg-gradient-to-br from-(--color-primary) to-red-700 shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 hover:-translate-y-0.5 relative overflow-hidden group",

    secondary:
      "rounded-xl px-6 py-3 bg-white/80 backdrop-blur text-zinc-900 border border-zinc-200 shadow-sm hover:bg-white hover:border-zinc-300 hover:-translate-y-0.5",

    ghost:
      "rounded-lg px-4 py-2 text-zinc-100 hover:bg-white/10 hover:text-white",

    upsideghost:
      "rounded-lg px-4 py-2 bg-zinc-100 text-zinc-700 hover:bg-zinc-200 hover:text-(--color-primary)",

    link:
      "p-0 h-auto text-(--color-primary) underline-offset-4 hover:underline font-medium",
  };


  if (href) {
    return (
      <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
        {variant === 'primary' && (
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shine_1.5s_infinite] z-20" />
        )}
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </Link>
    );
  }

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {variant === 'primary' && (
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shine_1.5s_infinite] z-20" />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
}