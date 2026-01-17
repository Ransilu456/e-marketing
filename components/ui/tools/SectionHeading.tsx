"use client";

import React from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  dark?: boolean;
}


export default function SectionHeading({ badge, title, subtitle, align = "center", dark = false }: SectionHeadingProps) {
  return (
    <div
      className={`mb-16 ${align === "center" ? "text-center mx-auto" : "text-left"}`}
    >
      {badge && (
        <span className={`inline-block py-1.5 px-4 rounded-full border text-xs font-semibold uppercase tracking-wider mb-4 ${dark
          ? "bg-zinc-800 border-zinc-700 text-zinc-300"
          : "bg-red-50 border-red-200 text-red-700"
          }`}>
          {badge}
        </span>
      )}
      <h2 className={`text-4xl md:text-5xl font-extrabold tracking-tighter mb-6 ${dark ? "text-white" : "text-zinc-900"
        }`}>{title}</h2>
      {subtitle && <p className={`text-xl font-normal leading-relaxed max-w-3xl ${align === "center" ? "mx-auto" : ""
        } ${dark ? "text-zinc-400" : "text-zinc-500"
        }`}>{subtitle}</p>}
    </div>
  );
}