"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function NewHero() {
  return (
    <motion.section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 flex flex-col lg:flex-row items-center justify-center overflow-hidden bg-grid"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background blobs */}
      <div className="absolute inset-0 bg-grid -z-10 h-[600px]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-100 rounded-full blur-[100px] opacity-50 -z-10 translate-x-1/2 -translate-y-1/4 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-[80px] opacity-60 -z-10 -translate-x-1/4 translate-y-1/4" />

      {/* Left Column: Hero Text */}
      <div className="max-w-xl px-6 text-center lg:text-left animate-fade-up">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-500 mb-6 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          Accepting New Clients for Q4
        </span>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl leading-tight font-bold tracking-tight text-slate-900 mb-6">
          Engineering <span className="text-slate-400 italic">digital experiences</span> that scale
        </h1>

        <p className="text-lg sm:text-xl text-slate-500 leading-relaxed mb-10 max-w-lg">
          High-performance code meets world-class design to help your brand dominate its market.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Link
            href="/contact"
            className="inline-flex justify-center items-center px-8 py-3.5 bg-red-600 text-white rounded-full font-semibold hover:bg-black transition-all shadow-xl shadow-slate-900/20"
            aria-label="Book a consultation"
          >
            Book Consultation
          </Link>
          <Link
            href="/portfolio/projects"
            className="inline-flex justify-center items-center px-8 py-3.5 bg-white text-slate-900 border border-slate-200 rounded-full font-semibold hover:bg-slate-50 transition-all"
            aria-label="View portfolio"
          >
            View Portfolio
          </Link>
        </div>

         <div className="mt-12 flex items-center gap-4 text-sm text-gray-400 animate-fade-up delay-300">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
              </div>
              <p>Trusted by 5+ innovative founders</p>
            </div>
      </div>

      <div className="relative h-[500px] w-full mt-16 lg:mt-0 lg:w-1/2 animate-fade-up delay-200">
        <div className="absolute inset-0 bg-slate-100 rounded-4xl overflow-hidden shadow-2xl border border-slate-200/50">
          <Image
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2940&auto=format&fit=crop"
            alt="Digital engineering workspace"
            width={2940}
            height={2940}
            className="w-full h-full object-cover opacity-95 scale-105 hover:scale-100 transition-transform duration-2000"
          />
        </div>

        <div className="absolute top-12 -left-12 glass p-5 rounded-2xl shadow-xl animate-bounce w-64 backdrop-blur-md bg-white/70">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
              <span className="iconify" data-icon="lucide:code-2" data-width="20" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">System Status</p>
              <p className="text-slate-900 font-semibold">All Operational</p>
            </div>
          </div>
          <div className="flex gap-1.5 mt-2">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <div className="h-1.5 w-8 rounded-full bg-slate-200" />
            <div className="h-1.5 w-12 rounded-full bg-slate-200" />
          </div>
        </div>

        <div className="absolute bottom-20 -right-8 glass p-6 rounded-2xl shadow-xl animate-bounce delay-300 w-56 backdrop-blur-md bg-white/70">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
              <span className="iconify" data-icon="lucide:trending-up" data-width="20" />
            </div>
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">+127%</span>
          </div>
          <p className="text-2xl font-serif text-slate-900 font-medium">24.5k</p>
          <p className="text-xs text-slate-500">Monthly Active Users</p>
        </div>
      </div>
    </motion.section>
  );
}
