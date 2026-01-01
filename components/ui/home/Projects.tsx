"use client"

import { projects } from "@/components/data/data";
import { ImageWithFallback } from "@/components/error/ImageWithFallback";
import { CheckCircle2, ArrowRight } from "lucide-react";
import SectionHeading from "../tools/SectionHeading";
import Link from "next/link"; 

export default function Projects() {
  return (
    <section id="portfolio" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          badge="Portfolio"
          title="Featured Case Studies"
          subtitle="Explore our results-driven work for ambitious brands."
        />

        <div className="space-y-24 mt-16">
          <div className="space-y-28">
            {projects.slice(0, 2).map((project, index) => {
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

                    <Link href={project.page_link}
                      className="inline-flex items-center gap-2 text-red-600 font-semibold hover:underline"
                    >
                      Read Case Study
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}