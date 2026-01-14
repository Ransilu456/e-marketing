"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Trusted from "@/components/ui/home/Trusted";
import { ArrowRight } from "lucide-react";
import Button from "./ui/tools/Button";

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9, filter: "blur(10px)" },
    show: { opacity: 1, scale: 1, filter: "blur(0px)" },
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] pt-32 pb-20 lg:pt-40 lg:pb-24
                 flex flex-col items-center justify-start
                 overflow-hidden bg-white bg-grid"
    >
      {/* Background Elements - Layered for depth */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_-20%,#000_70%,transparent_100%)] -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px] opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] -z-10" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent" />
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-(--color-primary)/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-5xl w-full mx-auto px-6 flex flex-col items-center text-center z-10">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                     bg-white border border-slate-200 shadow-[0_0_20px_-5px_rgba(220,38,38,0.1)] text-xs font-semibold
                     text-slate-600 mb-8 hover:border-red-100 transition-colors"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          Accepting Projects for Q1
        </motion.div>

        {/* Headline with Staggered Blur Reveal */}
        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="text-5xl sm:text-6xl lg:text-7xl
                     leading-[1.1] font-bold tracking-tight
                     text-slate-900 mb-8 max-w-4xl mx-auto"
        >
          {["Engineering", "digital", "excellence", "that", "scales."].map((word, i) => (
            <motion.span
              key={i}
              variants={item}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-block mr-3 last:mr-0"
            >
              {word === "digital" || word === "excellence" ? (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-(--color-primary) to-rose-600 inline-block">
                  {word}
                </span>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg text-slate-500 leading-relaxed mb-10
                      max-w-xl mx-auto font-medium"
        >
          We blend high-performance code with world-class design to help ambitious brands dominate their market.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4
                        justify-center w-full mb-16"
        >
          <Button
            href="/contact"
            className="h-auto px-8 py-4 rounded-xl font-bold text-lg
                       shadow-xl shadow-(--color-primary)/20
                       hover:shadow-2xl hover:shadow-(--color-primary)/30
                       hover:-translate-y-0.5 group"
          >
            Start Project
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>

          <Button
            href="/portfolio/projects"
            variant="secondary"
            className="h-auto px-8 py-4 rounded-xl font-bold text-lg
                       bg-white text-slate-900 border-slate-200
                       hover:text-(--color-primary) hover:border-slate-300
                       shadow-md shadow-slate-100 hover:shadow-lg group"
          >
            View Portfolio
          </Button>
        </motion.div>

        {/* Trusted Section - Compact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mb-20 w-full flex justify-center scale-90"
        >
          <Trusted />
        </motion.div>

        {/* Success Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          className="relative w-full max-w-4xl mx-auto perspective-1000"
        >
          <div className="relative rounded-2xl bg-white/50 backdrop-blur-sm border border-slate-200/60 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.12)] p-1 overflow-hidden group hover:shadow-[0_40px_100px_-25px_rgba(220,38,38,0.15)] transition-shadow duration-700">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-(--color-primary) to-transparent opacity-30" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-100/50 rounded-xl overflow-hidden">
              {/* Card 1: Revenue Growth */}
              <div className="bg-white p-6 md:p-8 flex flex-col justify-between h-48 sm:h-56 group cursor-default relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-green-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="p-1.5 rounded-lg bg-green-50 text-green-600 ring-1 ring-green-100">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" /></svg>
                    </span>
                    <span className="text-sm font-semibold text-slate-500">Revenue Growth</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-slate-900 tracking-tight">+127%</span>
                    <span className="text-xs font-semibold text-green-600 bg-green-50 px-1.5 py-0.5 rounded border border-green-100">+12.5%</span>
                  </div>
                </div>
                <div className="w-full h-16 relative mt-4">
                  {/* Abstract Chart */}
                  <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
                    <path d="M0 64 C 20 60, 40 40, 80 45 C 120 50, 160 20, 240 10 L 240 64 Z" fill="url(#gradientGreen)" opacity="0.1" />
                    <path d="M0 64 C 20 60, 40 40, 80 45 C 120 50, 160 20, 240 10" stroke="#16a34a" strokeWidth="3" fill="none" vectorEffect="non-scaling-stroke" />
                    <defs>
                      <linearGradient id="gradientGreen" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#16a34a" />
                        <stop offset="100%" stopColor="#ffff" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* Card 2: Active Users */}
              <div className="bg-white p-6 md:p-8 flex flex-col justify-between h-48 sm:h-56 group cursor-default relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="p-1.5 rounded-lg bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><line x1="20" x2="20" y1="8" y2="14" /><line x1="23" x2="17" y1="11" y2="11" /></svg>
                    </span>
                    <span className="text-sm font-semibold text-slate-500">Active Users</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-slate-900 tracking-tight">42.8k</span>
                    <span className="text-xs font-semibold text-slate-400">Total</span>
                  </div>
                </div>
                <div className="flex -space-x-3 mt-4">
                  {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-400 relative z-10 transition-transform hover:-translate-y-1 hover:z-20 shadow-sm">
                      <Image src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="U" fill className="object-cover rounded-full" />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-50 flex items-center justify-center text-xs font-bold text-slate-500 relative z-10">
                    +2k
                  </div>
                </div>
              </div>

              {/* Card 3: System Health */}
              <div className="bg-white p-6 md:p-8 flex flex-col justify-between h-48 sm:h-56 group cursor-default relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-red-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="p-1.5 rounded-lg bg-(--color-primary)/10 text-(--color-primary) ring-1 ring-red-100">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                    </span>
                    <span className="text-sm font-semibold text-slate-500">Uptime</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-slate-900 tracking-tight">99.99%</span>
                  </div>
                </div>
                <div className="space-y-2 mt-4 relative z-10">
                  <div className="flex justify-between text-xs font-medium text-slate-500">
                    <span>System Status</span>
                    <span className="text-emerald-600">Operational</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "99%" }}
                      transition={{ duration: 1.5, delay: 0.8 }}
                      className="h-full bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.3)]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
