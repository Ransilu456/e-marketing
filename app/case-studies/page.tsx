"use client";

import { projects, Project } from "@/components/data/data";
import { useState } from "react";
import { ArrowRight, X, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "@/components/error/ImageWithFallback";
import Link from "next/link";

export default function CaseStudiesPage() {
  const [expandedProject, setExpandedProject] = useState<Project | null>(null);

  return (
    <section className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20">
          <p className="text-sm font-semibold tracking-widest uppercase text-red-600 mb-3">
            Portfolio
          </p>
          <h1 className="text-5xl font-extrabold tracking-tight text-zinc-900 mb-4">
            Featured Case Studies
          </h1>
          <p className="text-lg text-zinc-500 max-w-2xl">
            Explore our results-driven work for ambitious brands.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-28">
          {projects.map((project, index) => {
            const reverse = index % 2 !== 0;

            return (
              <div
                key={index}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                {/* Image */}
                <div
                  className={`relative rounded-3xl overflow-hidden shadow-2xl shadow-zinc-300/40 ${reverse ? "lg:order-2" : ""
                    }`}
                >
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[450px] object-cover"
                  />

                  {/* Image Caption */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-md border border-white rounded-xl p-5">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-xs uppercase tracking-widest text-zinc-500 mb-1">
                          {project.categories[0]}
                        </p>
                        <h3 className="text-lg font-bold text-zinc-900">
                          {project.title}
                        </h3>
                      </div>
                      <p className="text-2xl font-extrabold text-red-600">
                        ✓
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={reverse ? "lg:order-1 lg:pr-10" : "lg:pl-10"}>
                  <h3 className="text-4xl font-extrabold tracking-tight text-zinc-900 mb-6">
                    {project.title}
                  </h3>


                  <p className="text-lg text-zinc-500 leading-relaxed mb-8 ">
                    {project.description}
                  </p>
                  <p className="text-lg text-zinc-500 leading-relaxed mb-8 font-bold">
                    {project.result}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <li
                        key={i}
                        className="flex items-center text-zinc-600"
                      >
                        <CheckCircle2 className="w-4 h-4 text-red-600 mr-3" />
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setExpandedProject(project)}
                    className="inline-flex items-center gap-2 text-red-600 font-semibold hover:underline"
                  >
                    Read Case Study
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {expandedProject && (
        <div
          onClick={() => setExpandedProject(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="
        relative w-full max-w-5xl max-h-[90vh] overflow-y-auto
        bg-white rounded-3xl shadow-2xl
        animate-in fade-in zoom-in duration-300
      "
          >
            {/* Close Button */}
            <button
              onClick={() => setExpandedProject(null)}
              className="
          absolute top-6 right-6 z-10
          w-10 h-10 rounded-full
          flex items-center justify-center
          bg-white shadow-md
          text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100
          transition
        "
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-8 sm:p-12">
              {/* Image Section */}
              <div className="flex justify-center">
                <div className="relative aspect-9/16 w-full max-w-xs sm:max-w-sm bg-zinc-900 rounded-3xl p-3 shadow-inner">
                  <div className="relative h-full w-full overflow-hidden rounded-2xl">
                    <ImageWithFallback
                      src={expandedProject.image}
                      alt={expandedProject.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/25 to-transparent" />
                  </div>
                </div>
              </div>

              {/* Text Section */}
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 mb-5 leading-tight">
                  {expandedProject.title}
                </h2>

                <p className="text-base sm:text-lg text-zinc-600 leading-relaxed mb-6">
                  {expandedProject.description}
                </p>

                {/* Tech Stack */}
                {expandedProject.technologies && (
                  <div className="flex flex-wrap gap-2 mb-8">
                    {expandedProject.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs font-semibold text-red-700 bg-red-50 border border-red-100 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* CTA */}
                <div className="flex flex-wrap gap-4">
                  <Link
                    href={expandedProject.link}
                    target="_blank"
                    className="
                inline-flex items-center justify-center
                px-8 py-3 rounded-full
                font-semibold text-white
                bg-black hover:bg-red-600
                transition-all shadow-lg shadow-black/20
              "
                  >
                    View Live Project
                  </Link>

                  <button
                    onClick={() => setExpandedProject(null)}
                    className="
                inline-flex items-center justify-center
                px-8 py-3 rounded-full
                font-semibold text-zinc-700
                border border-zinc-300 hover:bg-zinc-100
                transition
              "
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
