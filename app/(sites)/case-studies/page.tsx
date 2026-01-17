"use client";

import { projects, Project } from "@/components/data/data";
import { useState } from "react";
import { ArrowRight, X, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "@/components/error/ImageWithFallback";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function CaseStudiesPage() {
  const [expandedProject, setExpandedProject] = useState<Project | null>(null);

  return (
    <section className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
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

        <div className="space-y-28">
          {projects.map((project, index) => {
            const reverse = index % 2 !== 0;

            return (
              <div
                key={index}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div id={project.id}
                  className={`relative rounded-3xl overflow-hidden shadow-2xl shadow-zinc-300/40 ${reverse ? "lg:order-2" : ""
                    }`}
                >
                  <ImageWithFallback
                    src={project.intro_image}
                    alt={project.title}
                    className="w-full h-[450px] object-cover rounded-3xl"
                  />

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

      <AnimatePresence>
        {expandedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExpandedProject(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/90 backdrop-blur-md p-4 sm:p-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
              className="relative w-full max-w-6xl max-h-[90vh] overflow-hidden bg-white rounded-[2.5rem] shadow-[0_0_100px_rgba(0,0,0,0.5)] flex flex-col"
            >
              {/* Close Button - Sticky/Fixed relative to modal */}
              <button
                onClick={() => setExpandedProject(null)}
                className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-xl border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 shadow-xl"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex-1 overflow-y-auto scroll-smooth custom-scrollbar">
                {/* Immersive Header Image */}
                <div className="relative h-[400px] w-full overflow-hidden">
                  <ImageWithFallback
                    src={expandedProject.intro_image || expandedProject.image}
                    alt={expandedProject.title}
                    className="w-full h-full object-cover transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

                  <div className="absolute bottom-12 left-10 right-10">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="flex flex-wrap gap-2 mb-6"
                    >
                      {expandedProject.categories.map((cat, i) => (
                        <span key={i} className="px-4 py-1.5 rounded-full bg-red-600/90 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-[0.2em]">
                          {cat}
                        </span>
                      ))}
                    </motion.div>
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-4xl sm:text-6xl font-serif font-bold text-white leading-[1.1] tracking-tight"
                    >
                      {expandedProject.title}
                    </motion.h2>
                  </div>
                </div>

                {/* Content Grid */}
                <div className="p-10 lg:p-16">
                  <div className="grid lg:grid-cols-12 gap-16">
                    {/* Left Column: Description & Details */}
                    <div className="lg:col-span-7 space-y-12">
                      <section>
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-8 h-[2px] bg-red-600" />
                          <h4 className="text-xs font-black uppercase tracking-[0.3em] text-red-600">The Overview</h4>
                        </div>
                        <p className="text-xl text-zinc-600 leading-relaxed font-medium">
                          {expandedProject.description}
                        </p>
                      </section>

                      {expandedProject.technologies && (
                        <section>
                          <h4 className="text-sm font-bold text-zinc-900 mb-6 font-serif">Solutions & Tooling</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {expandedProject.technologies.map((tech, i) => (
                              <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-50 border border-zinc-100/50 group hover:bg-white hover:border-red-100 hover:shadow-xl hover:shadow-red-500/5 transition-all duration-300">
                                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-red-600 shadow-sm group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                                  <CheckCircle2 className="w-5 h-5" />
                                </div>
                                <span className="font-bold text-zinc-900">{tech}</span>
                              </div>
                            ))}
                          </div>
                        </section>
                      )}
                    </div>

                    {/* Right Column: Key Results & Action */}
                    <div className="lg:col-span-5">
                      <div className="sticky top-0 space-y-8">
                        {/* Result Card */}
                        <div className="p-8 rounded-[2rem] bg-zinc-900 text-white relative overflow-hidden group">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-red-500 mb-4">Core Metric</h4>
                          <p className="text-3xl font-serif font-bold leading-tight mb-8">
                            {expandedProject.result}
                          </p>

                          <div className="flex flex-wrap gap-2 pt-8 border-t border-white/10">
                            {expandedProject.tags.map((tag, i) => (
                              <span key={i} className="text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 bg-white/10 text-zinc-400 rounded-md border border-white/5">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col gap-3">
                          <Link
                            href={expandedProject.link}
                            target="_blank"
                            className="group relative flex items-center justify-center w-full px-8 py-5 bg-red-600 text-white rounded-2xl font-bold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-red-600/20 overflow-hidden"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 transition-opacity" />
                            <span className="relative z-10">Launch Project</span>
                            <ArrowRight className="w-5 h-5 ml-2 relative z-10 group-hover:translate-x-1 transition-transform" />
                          </Link>

                          <button
                            onClick={() => setExpandedProject(null)}
                            className="w-full px-8 py-5 text-zinc-400 font-bold hover:text-zinc-900 transition-colors"
                          >
                            Close Case Study
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
