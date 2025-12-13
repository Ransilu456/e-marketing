"use client";

import { projects, Project } from "@/components/data/data";
import { useState } from "react";
import { ArrowRight, X, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "@/components/error/ImageWithFallback";

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
                  className={`relative rounded-3xl overflow-hidden shadow-2xl shadow-zinc-300/40 ${
                    reverse ? "lg:order-2" : ""
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
                    {project.description}
                  </h3>

                  <p className="text-lg text-zinc-500 leading-relaxed mb-8">
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
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white max-w-4xl w-full rounded-3xl p-10 relative"
          >
            <button
              onClick={() => setExpandedProject(null)}
              className="absolute top-6 right-6 text-zinc-500 hover:text-zinc-900"
            >
              <X />
            </button>

            <h2 className="text-4xl font-extrabold text-zinc-900 mb-6">
              {expandedProject.title}
            </h2>

            <ImageWithFallback
              src={expandedProject.image}
              alt={expandedProject.title}
              className="w-full h-[400px] object-cover rounded-2xl mb-8"
            />

            <p className="text-lg text-zinc-600">
              {expandedProject.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
