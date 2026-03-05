"use client";

import React from "react";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/components/data/data";
import SectionHeading from "../tools/SectionHeading";

import Image from "next/image";

const WorkCard = ({
  title,
  category,
  image,
  className,
  link
}: {
  title: string,
  category: string,
  image: string,
  className?: string,
  link: string
}) => (
  <Link href={link} className={`block h-full ${className}`}>
    <div
      className="group relative rounded-3xl overflow-hidden bg-zinc-100 cursor-pointer h-full min-h-[320px] md:min-h-[400px]"
    >
      <Image
        src={image}
        alt={`Project showcase: ${title} - ${category}`}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

      <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full z-10">
        <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
          <p className="text-xs font-medium text-white/80 uppercase tracking-widest mb-2 font-display">{category}</p>
          <div className="flex items-center justify-between">
            <h3 className="text-xl md:text-2xl font-medium text-white font-display tracking-tight">{title}</h3>
            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
              <ArrowUpRight size={18} />
            </div>
          </div>
        </div>

        {/* Default state title (fades out on hover) */}
        <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 right-8 group-hover:opacity-0 transition-opacity duration-300">
          <h3 className="text-xl md:text-2xl font-medium text-white font-display tracking-tight">{title}</h3>
        </div>
      </div>
    </div>
  </Link>
);

const Projects = () => {
  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-zinc-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 md:mb-20">
          <div className="max-w-xl">
            <SectionHeading
              badge="Portfolio"
              title="Selected Case Studies"
              subtitle="Explore our results-driven work for ambitious brands."
              dark
              align="left"
            />
          </div>
          <div className="mt-4 md:mt-0">
            <Link href="/portfolio/projects">
              <button className="px-6 py-3 rounded-full border border-zinc-700 text-sm font-medium hover:bg-white hover:text-black transition-all group flex items-center gap-2">
                <span>View Full Portfolio</span>
                <ArrowUpRight size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />
              </button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[320px] md:auto-rows-[400px]">
          {projects.map((project, idx) => {
            const isLarge = idx === 0 || idx === 3;

            return (
              <div
                key={project.id}
                className={isLarge ? "lg:col-span-2" : ""}
              >
                <WorkCard
                  title={project.title}
                  category={project.categories[0]}
                  image={project.image}
                  link={project.page_link}
                  className="h-full w-full"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;