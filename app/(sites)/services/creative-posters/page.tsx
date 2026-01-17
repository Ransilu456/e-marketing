"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useMemo } from "react";
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
  Target,
  Search,
  Filter,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { posterProjects, Project } from "./projects";
import CTA from "@/components/ui/home/CTA";

export default function PosterDesignServicePage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const categories = ["All", "Social", "Corporate", "Product", "Infographic", "Commercial"];

  const filteredProjects = useMemo(() => {
    return posterProjects.filter((project) => {
      const matchesCategory =
        activeCategory === "All" ||
        project.title.toLowerCase().includes(activeCategory.toLowerCase()) ||
        project.technologies.some(t => t.toLowerCase().includes(activeCategory.toLowerCase()));

      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const currentProjects = filteredProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Smooth scroll to portfolio section
    const portfolioElement = document.getElementById("portfolio");
    if (portfolioElement) {
      portfolioElement.scrollIntoView({ behavior: "smooth" });
    }
  };

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
      {/* Premium Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-20 px-6 overflow-hidden bg-white">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#ffefef_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] blend-multiply" />

          {/* Animated Grid Lines */}
          <div className="absolute inset-0 overflow-hidden opacity-[0.05]">
            <div className="absolute top-0 left-1/4 w-[1px] h-full bg-zinc-900" />
            <div className="absolute top-0 left-2/4 w-[1px] h-full bg-zinc-900" />
            <div className="absolute top-0 left-3/4 w-[1px] h-full bg-zinc-900" />
            <div className="absolute top-1/4 left-0 w-full h-[1px] bg-zinc-900" />
            <div className="absolute top-2/4 left-0 w-full h-[1px] bg-zinc-900" />
            <div className="absolute top-3/4 left-0 w-full h-[1px] bg-zinc-900" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left Column: Content */}
            <div className="lg:col-span-6 xl:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/5 border border-red-600/10 text-red-600 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                  </span>
                  Elite Creative Studio
                </div>

                <h1 className="text-6xl md:text-7xl xl:text-8xl font-serif font-bold tracking-tight mb-8 leading-[0.95] text-zinc-900">
                  Posters <br />
                  <span className="text-red-600 italic">Redefined</span> for <br />
                  The <span className="underline underline-offset-8 decoration-red-600/30">Next Era</span>.
                </h1>

                <p className="text-xl text-zinc-500 max-w-xl mb-12 leading-relaxed font-medium">
                  We don&apos;t just design flyers; we architect visual statements. High-fidelity prints and digital assets engineered to command 100% attention in a world of 1% focus.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 mt-16">
                  <Link
                    href="/contact"
                    className="relative group inline-flex items-center justify-center gap-3 rounded-2xl px-12 py-6 bg-zinc-900 text-white font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="relative z-10">Launch Your Vision</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                  </Link>

                  <div className="flex items-center gap-6 px-4">
                    <div className="flex -space-x-3">
                      {[1, 2, 3, 4].map(i => (
                        <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-zinc-100 overflow-hidden shadow-lg">
                          <img src={`https://i.pravatar.cc/100?img=${i + 40}`} alt="Client" className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-black text-zinc-900">Loved by 150+ Brands</span>
                      <div className="flex text-amber-500">
                        {"★★★★★".split("").map((s, i) => <span key={i} className="text-xs">{s}</span>)}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="mt-20 pt-10 border-t border-zinc-100 flex items-center gap-12 grayscale opacity-40">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Trusted By</span>
                  <div className="flex gap-8">
                    {/* Placeholder logos or icons */}
                    <div className="font-serif font-bold text-lg tracking-tighter">NIKE</div>
                    <div className="font-serif font-bold text-lg tracking-tighter">RED BULL</div>
                    <div className="font-serif font-bold text-lg tracking-tighter">ADIDAS</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Visual Showcase */}
            <div className="lg:col-span-6 xl:col-span-5 relative h-[600px] lg:h-[800px]">
              <div className="relative w-full h-full">
                {/* Visual Stack of Posters */}
                <motion.div
                  initial={{ opacity: 0, x: 100, rotate: 10 }}
                  animate={{ opacity: 1, x: 0, rotate: -5 }}
                  transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-20 right-0 w-[400px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white z-30"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800"
                    alt="E-sports Gaming Poster"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-10 left-10 text-white">
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-2 opacity-60">Featured Work</p>
                    <h3 className="text-2xl font-serif font-extrabold leading-none">Neon Nights <br /> E-Sports</h3>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 100, rotate: 20 }}
                  animate={{ opacity: 1, x: -60, y: 100, rotate: 5 }}
                  transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-40 right-10 w-[350px] aspect-[4/5] rounded-[2.2rem] overflow-hidden shadow-2xl border-2 border-white/20 z-20 brightness-75 blur-[1px]"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800"
                    alt="Luxury Watch Ad"
                    fill
                    className="object-cover"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1, x: -150, y: -50, rotate: -15 }}
                  transition={{ duration: 1.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-1/2 left-0 w-[300px] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white/10 z-10 opacity-40 blur-[2px]"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800"
                    alt="Music Festival Poster"
                    fill
                    className="object-cover"
                  />
                </motion.div>

                {/* Floating Meta Info */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-20 right-20 z-40 bg-white/10 backdrop-blur-2xl p-6 rounded-[2rem] border border-white/20 shadow-2xl text-zinc-900 hidden xl:block"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-red-600 text-white flex items-center justify-center">
                      <Layers className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Total Variations</p>
                      <p className="text-lg font-black leading-none">5,000+ Assets</p>
                    </div>
                  </div>
                </motion.div>

                {/* Decorative Shapes */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-600/10 blur-[80px] rounded-full" />
                <div className="absolute top-1/2 -left-20 w-80 h-80 bg-red-600/5 blur-[100px] rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Approach Features */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
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

      {/* Portfolio Showcase with Pagination & Filtering */}
      <section id="portfolio" className="py-32 px-6 bg-[#FCFCFD]">
        <div className="max-w-7xl mx-auto">
          {/* Header Area */}
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-[10px] font-bold uppercase tracking-widest mb-4 border border-red-100">
                Design Portfolio
              </div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-zinc-900 mb-6 tracking-tight">
                Architecting <span className="text-red-600 italic">Influence</span>.
              </h2>
              <p className="text-xl text-zinc-500 leading-relaxed font-medium">
                Browse our engine of visual communication, filtered by your strategic needs.
              </p>
            </div>
          </div>

          {/* Controls Bar */}
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between mb-12 p-6 bg-white rounded-3xl border border-zinc-100 shadow-sm">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setCurrentPage(1);
                  }}
                  className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all ${activeCategory === cat
                    ? "bg-zinc-900 text-white shadow-lg"
                    : "bg-zinc-50 text-zinc-500 hover:bg-zinc-100"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full lg:w-96 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 group-focus-within:text-red-600 transition-colors" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full bg-zinc-50 border-none rounded-2xl py-3 pl-12 pr-4 text-sm focus:ring-2 focus:ring-red-600/10 transition-all placeholder:text-zinc-400 font-medium"
              />
            </div>
          </div>

          {/* Grid Area */}
          <AnimatePresence mode="wait">
            {currentProjects.length > 0 ? (
              <motion.div
                key={`${activeCategory}-${currentPage}-${searchQuery}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12"
              >
                {currentProjects.map((project: Project, i: number) => (
                  <motion.div
                    key={project.slug}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease: [0.21, 1, 0.36, 1] }}
                    className="group flex flex-col"
                  >
                    <Link
                      href={`/services/creative-posters/${project.slug}`}
                      className="relative block aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-zinc-100 border border-zinc-200/50 shadow-sm group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] group-hover:-translate-y-2 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      />

                      {/* Glass Overlay */}
                      <div className="absolute inset-x-4 bottom-4 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[1.5rem] opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 z-10">
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.slice(0, 2).map((tech, idx) => (
                              <span key={idx} className="text-[9px] font-bold uppercase tracking-widest px-2 py-1 bg-white text-zinc-900 rounded-md">
                                {tech}
                              </span>
                            ))}
                          </div>
                          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-zinc-900 shadow-lg">
                            <ArrowRight className="w-5 h-5" />
                          </div>
                        </div>
                      </div>

                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </Link>

                    <div className="mt-8 px-2">
                      <div className="flex items-center gap-3 text-red-600 mb-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">{project.slug.replace("-", " ")}</span>
                      </div>
                      <h3 className="text-xl font-serif font-bold text-zinc-900 mb-2 group-hover:text-red-600 transition-colors line-clamp-1">
                        <Link href={`/services/creative-posters/${project.slug}`}>
                          {project.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-zinc-500 line-clamp-2 leading-relaxed font-medium">
                        {project.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-24 text-center"
              >
                <div className="w-20 h-20 bg-zinc-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Filter className="w-8 h-8 text-zinc-300" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-2">No projects found</h3>
                <p className="text-zinc-500">Try adjusting your filters or search query.</p>
                <button
                  onClick={() => {
                    setActiveCategory("All");
                    setSearchQuery("");
                  }}
                  className="mt-6 text-red-600 font-bold text-sm hover:underline"
                >
                  Clear all filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-20 flex flex-col items-center gap-6">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="w-12 h-12 rounded-2xl bg-white border border-zinc-100 flex items-center justify-center text-zinc-400 hover:text-zinc-900 hover:border-zinc-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-2 mx-4">
                  {[...Array(totalPages)].map((_, i) => {
                    const page = i + 1;
                    // Show first, last, and pages around current
                    if (
                      page === 1 ||
                      page === totalPages ||
                      (page >= currentPage - 1 && page <= currentPage + 1)
                    ) {
                      return (
                        <button
                          key={page}
                          onClick={() => handlePageChange(page)}
                          className={`w-12 h-12 rounded-2xl flex items-center justify-center text-sm font-bold transition-all ${currentPage === page
                            ? "bg-zinc-900 text-white shadow-lg scale-110"
                            : "bg-white border border-zinc-100 text-zinc-500 hover:bg-zinc-50 shadow-sm"
                            }`}
                        >
                          {page}
                        </button>
                      );
                    } else if (
                      page === currentPage - 2 ||
                      page === currentPage + 2
                    ) {
                      return <span key={page} className="text-zinc-300 px-1">...</span>;
                    }
                    return null;
                  })}
                </div>

                <button
                  onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="w-12 h-12 rounded-2xl bg-white border border-zinc-100 flex items-center justify-center text-zinc-400 hover:text-zinc-900 hover:border-zinc-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                Showing {Math.min(filteredProjects.length, itemsPerPage)} of {filteredProjects.length} Projects
              </p>
            </div>
          )}
        </div>
      </section>

      <CTA />
    </main>
  );
}
