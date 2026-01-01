"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Layers,
  Code,
  Cloud,
  Shield,
  Sparkles,
  Rocket,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { posterProjects, Project } from "./projects";
import CTA from "@/components/ui/home/CTA";

export default function PosterDesignServicePage() {
  const serviceFeatures = [
    {
      icon: Layers,
      title: "Strategic Visual Direction",
      desc: "Poster concepts aligned with campaign goals, audience context, and brand positioning.",
    },
    {
      icon: Code,
      title: "Print & Digital Precision",
      desc: "Production-ready artwork optimized for large-format print and digital distribution.",
    },
    {
      icon: Cloud,
      title: "Brand Consistency",
      desc: "Design systems that preserve tone, color, and typography across all campaign assets.",
    },
    {
      icon: Shield,
      title: "Reliable Delivery",
      desc: "Structured timelines, clear milestones, and predictable production cycles.",
    },
    {
      icon: Sparkles,
      title: "Source Ownership",
      desc: "Fully editable vector and source files delivered for long-term use.",
    },
    {
      icon: Rocket,
      title: "Refinement Process",
      desc: "Focused revision cycles designed to improve clarity—not endless iteration.",
    },
  ];

  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="pt-32 pb-28 px-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-sm font-semibold tracking-wide text-red-600 mb-4 uppercase">
              Poster Design Services
            </p>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-semibold tracking-tight mb-6 leading-tight">
              Poster Campaigns Designed for
              <span className="block text-red-600 font-sans font-thin">
                Attention, Clarity & Impact
              </span>
            </h1>

            <p className="text-lg text-slate-600 max-w-xl mb-10">
              We design high-quality posters and campaign visuals that communicate
              clearly, align with your brand, and perform across print and digital
              environments.
            </p>

            <div className="flex gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 bg-black text-white font-medium hover:bg-red-700 transition"
              >
                Request Consultation
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="border border-slate-200 shadow-xl">
              <Image
                src="/data/creative-poster.jpg"
                alt="Poster campaign example"
                width={620}
                height={620}
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>



      {/* PORTFOLIO */}
      <section id="portfolio" className="py-28 px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-20">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Selected Campaign Work
            </h2>
            <p className="text-lg text-slate-600">
              Posters created for events, product launches, and brand activations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {posterProjects.map((project: Project, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="border border-slate-200 bg-white rounded-2xl overflow-hidden"
              >
                <div className="relative h-56">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-medium mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 rounded-2xl">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 border border-red-200 text-red-600 rounded-2xl"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
    
    <CTA/>
    </main>
  );
}
