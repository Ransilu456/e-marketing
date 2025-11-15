"use client";

import { FC } from "react";
import { ExternalLink } from "lucide-react";
import { ImageWithFallback } from "../error/ImageWithFallback";

// --- Define Props Interface ---
interface ProjectCardProps {
  title: string;
  category: string;
  result: string;
  image: string;
  description: string;
  tags?: string[];
}

// --- Functional Component ---
const ProjectCard: FC<ProjectCardProps> = ({
  title,
  category,
  result,
  image,
  description,
  tags = [],
}) => {
  return (
    <div className="group relative overflow-hidden bg-black cursor-pointer rounded-2xl transform hover:-translate-y-2 transition-all duration-500">
      {/* --- Image --- */}
      <div className="relative overflow-hidden aspect-4/5">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/70 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300"></div>
      </div>

      {/* --- Content --- */}
      <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 text-white">
        {/* Category Badge */}
        <div
          className="inline-block px-4 py-1 bg-[#4AEA45] text-black text-sm mb-4 rounded-full"
          style={{ fontFamily: "Poppins" }}
        >
          {category}
        </div>

        <h3
          className="text-2xl lg:text-3xl mb-3 group-hover:text-[#4AEA45] transition-colors duration-300"
          style={{ fontFamily: "Poppins" }}
        >
          {title}
        </h3>

        <p
          className="text-gray-300 text-sm mb-4"
          style={{ fontFamily: "Poppins" }}
        >
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 bg-white/10 border border-white/20 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Result */}
        <div className="flex items-center justify-between p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
          <div>
            <div className="text-xs text-gray-400 mb-1">Result</div>
            <div className="text-lg" style={{ fontFamily: "Poppins" }}>
              {result}
            </div>
          </div>
          <div className="w-12 h-12 bg-[#4AEA45] flex items-center justify-center rounded-full group-hover:rotate-45 transition-transform duration-500">
            <ExternalLink className="text-black" size={20} />
          </div>
        </div>
      </div>

      {/* Hover border overlay */}
      <div className="absolute inset-0 border-4 border-[#4AEA45] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
    </div>
  );
};

export default ProjectCard;
