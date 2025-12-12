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
  href?: string;
}

const ProjectCard: FC<ProjectCardProps> = ({
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
      className="group block overflow-hidden rounded-3xl bg-white shadow-md border border-gray-100 transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-(--color-primary)"
      role="article"
      aria-label={`View project: ${title}`}
    >
      {/* Image Section */}
      <div className="relative w-full aspect-video bg-gray-100 overflow-hidden rounded-t-3xl">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold text-white bg-(--color-primary)">
          {category}
        </span>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col gap-3">
        <h3 className="text-xl font-bold text-gray-900 line-clamp-2">{title}</h3>
        <p className="text-gray-600 text-sm line-clamp-3">{description}</p>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.slice(0, 3).map((tag, i) => (
              <span
                key={i}
                className="text-xs px-2 py-1 rounded-full border border-(--color-primary) bg-(--color-primary)/10 text-(--color-primary) font-medium"
              >
                {tag}
              </span>
            ))}
            {tags.length > 3 && (
              <span className="text-xs text-gray-500 font-medium">+{tags.length - 3} more</span>
            )}
          </div>
        )}

        {/* Footer */}
        <div className="mt-4 flex justify-between items-center border-t border-gray-100 pt-3">
          <div>
            <p className="text-xs text-gray-500 font-medium">Result</p>
            <p className="text-base font-bold text-gray-900">{result}</p>
          </div>

          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-(--color-primary) text-white hover:bg-(--color-primary)/90 transition-colors">
            <ArrowUpRight size={18} />
          </span>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
