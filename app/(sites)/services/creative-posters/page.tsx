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
  CheckCircle2,
  Trophy,
  Zap,
  Target
} from "lucide-react";
import { motion } from "framer-motion";
import { posterProjects, Project } from "./projects";
import CTA from "@/components/ui/home/CTA";

export default function PosterDesignServicePage() {
  const serviceFeatures = [
    {
      icon: Target,
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
      icon: Trophy,
      title: "Source Ownership",
      desc: "Fully editable vector and source files delivered for long-term use.",
    },
    {
      icon: Zap,
      title: "Fast-Track Revision",
      desc: "Focused revision cycles designed to improve clarity—not endless iteration.",
    },
  ];

  return (
    <main className="bg-[#FCFCFD] text-slate-900">
      {/* Dynamic Hero Section */}
      <section className="relative pt-40 pb-32 px-6 overflow-hidden">
        {/* Abstract Background Decoration */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-(--color-primary) opacity-[0.03] blur-[150px] -translate-y-1/2 translate-x-1/2 rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600 opacity-[0.02] blur-[120px] translate-y-1/2 -translate-x-1/2 rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-(--color-primary)/10 border border-(--color-primary)/20 text-(--color-primary) text-xs font-bold uppercase tracking-widest mb-8">
                <Sparkles className="w-4 h-4" />
                Premium Design Service
              </div>

              <h1 className="text-5xl md:text-6xl xl:text-7xl font-display font-bold tracking-tight mb-8 leading-[1.05]">
                Visual Impact <br />
                <span className="text-(--color-primary)">Engineered</span> for <br />
                Conversions.
              </h1>

              <p className="text-xl text-slate-500 max-w-xl mb-12 leading-relaxed">
                Stop the scroll with high-impact poster designs. From physical large-format
                prints to viral social media flyers, we craft campaign visuals that command
                attention and drive action.
              </p>

              <div className="flex flex-col sm:flex-row gap-5">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 rounded-full px-10 py-5 bg-slate-900 text-white font-bold hover:bg-(--color-primary) hover:scale-[1.02] transition-all group shadow-xl shadow-slate-200"
                >
                  Start Your Campaign
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <div className="flex items-center gap-4 px-6 py-4 rounded-full bg-white border border-slate-100 shadow-sm">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="User" />
                      </div>
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-slate-600">50+ Projects Delivered</span>
                </div>
              </div>

              <div className="mt-16 grid grid-cols-2 gap-8 border-t border-slate-100 pt-10">
                <div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-1">98%</h4>
                  <p className="text-sm text-slate-500 font-medium">Customer Satisfaction</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-1">2+ Days</h4>
                  <p className="text-sm text-slate-500 font-medium">Average Delivery Time</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "circOut" }}
              className="relative"
            >
              {/* Main Visual */}
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] border-8 border-white group">
                <Image
                  src="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1200"
                  alt="Poster campaign showcase"
                  width={800}
                  height={1000}
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60 pointer-events-none" />
              </div>

              {/* Floating Element 1 */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 z-20 bg-white p-6 rounded-3xl shadow-2xl border border-slate-50 hidden md:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Status</p>
                    <p className="text-sm font-bold text-slate-900">Print Optimized</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Element 2 */}
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-8 -left-8 z-20 bg-slate-900 p-6 rounded-3xl shadow-2xl text-white hidden md:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-(--color-primary)/20 flex items-center justify-center text-(--color-primary)">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Fast Track</p>
                    <p className="text-sm font-bold text-white">48h Turnaround</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strategic Approach Features */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">
              Our Design Strategy
            </h2>
            <p className="text-lg text-slate-500">
              We don't just "make things look pretty." We combine cognitive psychology
              with modern design principles to ensure your posters achieve their mission.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceFeatures.map((feature, idx) => (
              <div key={idx} className="group p-10 rounded-[2.5rem] bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 border border-transparent hover:border-slate-100 transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:bg-(--color-primary) group-hover:text-white transition-all duration-500">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section id="portfolio" className="py-32 px-6 bg-[#FCFCFD]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <div className="text-xs font-bold text-(--color-primary) uppercase tracking-[0.2em] mb-4">Portfolio</div>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-4 tracking-tight">
                Selected Works
              </h2>
              <p className="text-xl text-slate-500">
                A showcase of our recent high-impact campaign visuals.
              </p>
            </div>
            <Link href="/contact" className="text-slate-900 font-bold flex items-center gap-2 group hover:text-(--color-primary) transition-colors">
              View Full Case Studies
              <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-(--color-primary) group-hover:bg-(--color-primary) group-hover:text-white transition-all">
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posterProjects.map((project: Project, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="absolute bottom-8 left-8 right-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-10">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 2).map((tech, idx) => (
                        <span key={idx} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-white/20 backdrop-blur-md text-white rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Link href={`#`} className="text-white font-bold flex items-center gap-2">
                      View Details <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-(--color-primary) transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex items-center flex-wrap gap-4">
                    {project.features.slice(0, 1).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-bold text-slate-400">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
