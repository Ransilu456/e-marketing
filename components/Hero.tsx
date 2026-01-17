"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Sparkles } from "lucide-react";
import Button from "@/components/ui/tools/Button";
import Link from "next/link";
import Trusted from "@/components/ui/home/Trusted";

const Hero = () => {
    return (
        <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
            {/* Background Atmosphere & Gradients */}
            <div
                className="absolute top-0 inset-x-0 h-[800px] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,228,230,0.6),rgba(255,255,255,0))]"
            />
            <div
                className="absolute top-0 right-0 w-[800px] h-[800px] bg-rose-100/40 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2"
            />

            {/* Dual-Layer Background Pattern */}
            <div
                className="absolute inset-0 z-0 pointer-events-none opacity-[0.15]"
            >
                {/* 1. Base Grid (Large) */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

                {/* 2. Micro Dot Pattern (Small) */}
                <div className="absolute inset-0 bg-[radial-gradient(#0000001a_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

                    {/* Copy Content */}
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <motion.div
                            initial={{ y: 10 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-200 text-zinc-600 text-[11px] font-medium uppercase tracking-wide mb-8 shadow-sm"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                            </span>
                            Sri Lanka&apos;s Elite Digital Partner
                        </motion.div>

                        <motion.h1
                            initial={{ y: 20 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="text-5xl lg:text-7xl font-semibold tracking-tight text-zinc-900 leading-[1.05] mb-6 font-display"
                        >
                            Crafting Premium <br />
                            <span className="relative inline-block">
                                <span className="relative z-10 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-500 bg-clip-text text-transparent pb-2">Digital Solutions</span>
                                <span className="absolute bottom-4 left-0 w-full h-3 bg-rose-100/50 -z-0 rotate-1 rounded-full"></span>
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ y: 15 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="text-lg text-zinc-500 font-light leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10"
                        >
                            We help ambitious brands scale with high-performance web development, strategic marketing, and state-of-the-art mobile experiences.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-16"
                        >
                            <Button href="#contact" className="w-full sm:w-auto">
                                Start Your Project
                            </Button>
                            <Link href="#portfolio" className="w-full sm:w-auto">
                                <button className="w-full h-12 px-8 rounded-full bg-white border border-zinc-200 hover:bg-zinc-50 text-zinc-600 font-medium text-sm transition-all hover:border-zinc-300 flex items-center justify-center gap-2">
                                    View Portfolio
                                </button>
                            </Link>
                        </motion.div>

                        <div className="pt-10 border-t border-zinc-100 hidden sm:block">
                            <Trusted />
                        </div>
                    </div>

                    {/* Interactive Abstract Visual */}
                    <div className="lg:w-1/2 w-full relative h-[400px] lg:h-[600px] flex items-center justify-center" style={{ perspective: "1200px" }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="relative w-full max-w-lg aspect-square scale-75 md:scale-90 lg:scale-100"
                        >
                            {/* Background Glow */}
                            <div
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-rose-200/20 to-amber-200/20 rounded-full blur-3xl -z-10"
                            ></div>

                            {/* Main Card: Dashboard UI */}
                            <motion.div
                                className="absolute top-[10%] left-[10%] w-[80%] bg-white rounded-2xl shadow-2xl border border-zinc-100 p-6 z-20"
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="flex gap-4 mb-6">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-zinc-100"></div>
                                    <div className="space-y-2 flex-1">
                                        <div className="h-2 w-1/3 bg-zinc-100 rounded-full"></div>
                                        <div className="h-2 w-2/3 bg-zinc-50 rounded-full"></div>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-1 h-24 md:h-32 bg-zinc-50 rounded-xl border border-zinc-100 flex items-center justify-center">
                                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-[3px] border-rose-500/20 border-t-rose-500 animate-spin" style={{ animationDuration: '3s' }}></div>
                                    </div>
                                    <div className="flex-1 h-24 md:h-32 bg-zinc-900 rounded-xl border border-zinc-800 p-4 relative overflow-hidden flex items-end justify-end">
                                        <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900"></div>
                                        <Sparkles className="text-amber-400 relative z-10" size={16} />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Floating Card: Mobile */}
                            <motion.div
                                className="absolute bottom-[5%] right-0 w-36 md:w-48 bg-white/90 backdrop-blur-md rounded-[1.5rem] md:rounded-[2rem] p-3 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-zinc-200 z-30"
                                animate={{ y: [0, 12, 0] }}
                                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            >
                                <div className="bg-zinc-50 rounded-[1.2rem] md:rounded-[1.5rem] h-44 md:h-56 border border-zinc-100 p-4 flex flex-col items-center justify-center text-center">
                                    <div className="w-8 h-8 md:w-10 md:h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 mb-3">
                                        <Zap size={16} fill="currentColor" />
                                    </div>
                                    <div className="text-[10px] md:text-xs font-semibold text-zinc-900">Conversion</div>
                                    <div className="text-xl md:text-2xl font-bold text-zinc-900 mt-1">+124%</div>
                                    <div className="mt-4 w-full h-1 bg-zinc-200 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: "66%" }}
                                            transition={{ duration: 1.5, delay: 0.5 }}
                                            className="h-full bg-amber-500"
                                        />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Floating Badge */}
                            <motion.div
                                className="absolute top-[30%] -left-4 bg-zinc-900 text-white px-3 py-2 md:px-4 md:py-3 rounded-lg md:rounded-xl shadow-xl flex items-center gap-2 md:gap-3 z-30"
                                animate={{ x: [0, 5, 0], rotate: [0, -2, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            >
                                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500 animate-pulse"></div>
                                <span className="text-[10px] md:text-xs font-mono font-medium tracking-tight">System Optimal</span>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                <div className="mt-12 sm:hidden pt-10 border-t border-zinc-100">
                    <Trusted />
                </div>
            </div>
        </section>
    );
};

export default Hero;
