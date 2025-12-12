"use client";

import { FC } from "react";
import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "../error/ImageWithFallback";

interface ProjectCardProps {
  title: string;
  category: string;
  result: string;
  image: string;
  description: string;
  tags?: string[];
}

const ProjectCard: FC<ProjectCardProps & { href?: string }> = ({
  title,
  category,
  result,
  image,
  description,
  tags = [],
  href = "#",
}) => {
  return (
    <a
      href={href}
      tabIndex={0}
      className="group relative block overflow-hidden rounded-3xl shadow-xl  bg-white/80 backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl focus-visible:ring-4 focus-visible:ring-accent/40 focus-visible:outline-none cursor-pointer hover-card"
      role="article"
      aria-label={`View project: ${title}`}
      style={{ boxShadow: '0 8px 32px 0 rgba(60, 80, 180, 0.10), 0 1.5px 8px 0 rgba(80, 120, 255, 0.08)' }}
    >
      {/* Image Section */}
      <div className="relative overflow-hidden aspect-video bg-slate-100">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700"
        />
        {/* Overlay Badge */}
        <div className="absolute top-3 left-3 px-3 py-1 bg-accent text-white text-xs font-bold rounded-full shadow-md drop-shadow-sm tracking-wide glass animate-fade-up">
          {category}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-accent transition-colors mb-1 line-clamp-1 animate-fade-up delay-100">{title}</h3>
          <p className="text-base text-slate-600 line-clamp-2 leading-relaxed animate-fade-up delay-200">{description}</p>
        </div>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 max-w-full overflow-hidden animate-fade-up delay-300">
            {tags.slice(0, 3).map((tag, i) => (
              <span key={i} className="text-xs px-2 py-1 bg-accent/10 text-accent font-semibold rounded-full truncate max-w-[7rem] border border-accent/10 animate-scaleIn">{tag}</span>
            ))}
            {tags.length > 3 && (
              <span className="text-xs text-accent/60 font-semibold animate-fade-up">+{tags.length - 3} more</span>
            )}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-2">
          <div>
            <p className="text-xs text-muted font-medium">Result</p>
            <p className="text-base font-bold text-slate-900">{result}</p>
          </div>
          <span
            className="relative group/cta"
            tabIndex={-1}
          >
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 group-hover/cta:scale-100 group-focus/cta:scale-100 transition-transform bg-accent text-white text-xs rounded px-3 py-1 pointer-events-none z-20 shadow-lg animate-fade-up" role="tooltip">
              View project
            </span>
            <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-accent text-white hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all group-hover/cta:scale-110 group-hover/cta:shadow-lg animate-scaleIn">
              <ArrowUpRight size={20} className="group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-transform" />
            </span>
          </span>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;

