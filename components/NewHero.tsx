"use client"

import { motion } from "framer-motion";
import Image from "next/image";

export default function NewHero() {
  return (
    <motion.section
      className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute inset-0 bg-grid -z-10 h-[600px]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-100 rounded-full blur-[100px] opacity-50 -z-10 translate-x-1/2 -translate-y-1/4 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-[80px] opacity-60 -z-10 -translate-x-1/4 translate-y-1/4" />

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Hero Text, Description, Buttons */}
          <div className="max-w-xl animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-500 mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Accepting New Clients for Q4
            </div>
            <h1 className="text-5xl lg:text-7xl leading-[1.05] font-medium tracking-tight text-slate-900 mb-6">
              Engineering <span className="text-slate-400 italic">digital experiences</span> that scale.
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-md">
              We blend high-performance code with world-class aesthetics to build brands that dominate their market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex justify-center items-center px-8 py-3.5 bg-red-600 text-white rounded-full font-medium hover:bg-black transition-all shadow-xl shadow-slate-900/20">
                Book Consultation
              </a>
              <a href="#work" className="inline-flex justify-center items-center px-8 py-3.5 bg-white text-slate-900 border border-slate-200 rounded-full font-medium hover:bg-slate-50 transition-all">
                View Portfolio
              </a>
            </div>
          </div>
          {/* Right Column: Hero Image and Floating Cards */}
          <div className="relative h-[600px] w-full hidden lg:block animate-fade-up delay-200">
            <div className="absolute inset-0 bg-slate-100 rounded-4xl overflow-hidden shadow-2xl border border-slate-200/50">
              <Image src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2940&auto=format&fit=crop" alt="Digital Engineering" width={2940} height={2940} className="w-full h-full object-cover opacity-90 scale-105 hover:scale-100 transition-transform duration-[2s]" />
            </div>
            <div className="absolute top-12 -left-12 glass p-5 rounded-2xl shadow-xl animate-[bounce_6s_infinite] w-64">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                  <span className="iconify" data-icon="lucide:code-2" data-width="20" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">System Status</p>
                  <p className="text-slate-900 font-serif font-medium">All Operational</p>
                </div>
              </div>
              <div className="flex gap-1.5 mt-2">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <div className="h-1.5 w-8 rounded-full bg-slate-200" />
                <div className="h-1.5 w-12 rounded-full bg-slate-200" />
              </div>
            </div>
            <div className="absolute bottom-20 -right-8 glass p-6 rounded-2xl shadow-xl animate-[bounce_8s_infinite] delay-300 w-56 backdrop-blur-xl bg-white/80">
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
        </div>
      </div>
    </motion.section>
  );
}