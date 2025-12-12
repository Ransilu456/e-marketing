"use client";

import { ArrowRight } from "lucide-react";
import { Sparkles } from "lucide-react";
import Image from "next/image";

import { useState } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  features?: string[];
  buttonText?: string;
  link?: string;
  image?: string;
}

export default function ServiceCard({
  title,
  description,
  features = [],
  buttonText = "Learn More",
  link = "/services",
  image,
}: ServiceCardProps) {
  const [showAll, setShowAll] = useState(false);
  const hasExtra = features.length > 3;
  return (
    <a
      href={link}
      tabIndex={0}
      className="group relative block overflow-hidden rounded-3xl shadow-xl border border-slate-100 bg-white/70 backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl focus-visible:ring-4 focus-visible:ring-accent/40 focus-visible:outline-none cursor-pointer"
      role="article"
      aria-label={`View service: ${title}`}
      style={{ boxShadow: '0 8px 32px 0 rgba(60, 80, 180, 0.10), 0 1.5px 8px 0 rgba(80, 120, 255, 0.08)' }}
    >
      {/* Glassy Accent Border */}
      <div className="absolute inset-0 pointer-events-none rounded-3xl border-2 border-transparent group-hover:border-accent/40 group-focus-visible:border-accent/60 transition-all duration-300" style={{ zIndex: 2 }} />

      {/* Image Section */}
      <div className="relative aspect-video overflow-hidden bg-linear-to-br from-indigo-100 via-white to-slate-100">
        {image ? (
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700"
            style={{ zIndex: 1 }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-400 bg-linear-to-br from-indigo-100 via-white to-slate-200 animate-pulse">
            <div className="text-center">
              <div className="w-14 h-14 bg-white/60 rounded-xl mx-auto mb-2 flex items-center justify-center shadow-inner animate-bounce">
                <Sparkles size={28} className="opacity-40 text-accent animate-spin-slow" />
              </div>
              <p className="text-xs text-slate-400">No Image</p>
            </div>
          </div>
        )}
        {/* Floating Glassy Badge */}
        <div className="absolute top-3 left-3 px-3 py-1 bg-white/60 backdrop-blur-md text-accent text-xs font-bold rounded-full shadow-md flex items-center gap-1 animate-fade-in border border-accent/20">
          <Sparkles size={14} className="text-accent" />
          Service
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 space-y-3">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 group-hover:text-accent transition-colors mb-1 line-clamp-1">{title}</h3>
          <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">{description}</p>
        </div>

        {/* Features */}
        {features.length > 0 && (
          <div className="flex flex-wrap gap-2 max-w-full overflow-hidden">
            {(showAll ? features : features.slice(0, 3)).map((feature, i) => (
              <span key={i} className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded-md truncate max-w-24">{feature}</span>
            ))}
            {hasExtra && !showAll && (
              <button
                type="button"
                className="text-xs text-accent/70 font-semibold px-2 py-1 rounded-full bg-white/60 border border-accent/10 hover:bg-accent/10 transition-colors animate-fade-in"
                onClick={e => { e.preventDefault(); setShowAll(true); }}
                tabIndex={0}
                aria-label={`Show all features for ${title}`}
              >
                +{features.length - 3} more
              </button>
            )}
          </div>
        )}

        {/* Action Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-100 mt-2">
          <span className="relative group/cta" tabIndex={-1}>
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 scale-0 group-hover/cta:scale-100 group-focus/cta:scale-100 transition-transform bg-slate-900 text-white text-xs w-full rounded px-2 py-1 pointer-events-none z-20 shadow-lg" role="tooltip">
              Learn more
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent/80 transition-colors group/link">
              {buttonText}
              <ArrowRight size={16} className="group-hover/link:translate-x-0.5 transition-transform" />
            </span>
          </span>

          <div className="w-8 h-8 bg-accent/10 rounded-full inline-flex items-center justify-center group-hover:bg-accent/20 transition-colors">
            <div className="w-1 h-1 bg-accent rounded-full group-hover:scale-125 transition-transform"></div>
          </div>
        </div>
      </div>
    </a>
  );
}
