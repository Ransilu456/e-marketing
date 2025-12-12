"use client";

import Link from "next/link";
import { Menu, X, Home, Briefcase, Users, Lightbulb, Send } from "lucide-react";
import { useState } from "react";

export function CustomNavbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    return (
        <nav className="fixed top-0 w-full z-50 glass transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group" aria-label="Home">
                    <div className="w-8 h-8 bg-slate-900 flex items-center justify-center text-white group-hover:bg-indigo-600 transition-colors duration-300 shadow-lg shadow-slate-900/20">
                        <span className="font-serif text-lg leading-none mt-1 italic">E</span>
                    </div>
                    <span className="font-serif text-xl tracking-tight font-medium text-slate-900">Marketing Paradice</span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <Link href="#services" className="flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
                        Services
                    </Link>
                    <Link href="#work" className="flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
                        Work
                    </Link>
                    <Link href="#studio" className="flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
                        Studio
                    </Link>
                    <Link href="#insights" className="flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
                        Insights
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    <Link href="#contact" className="hidden md:flex bg-stone-900 text-white px-4 py-2 text-sm font-medium hover:bg-red-600 transition-colors duration-300 items-center gap-2">
                        <Send size={16} className="mr-1" /> Start Project
                    </Link>
                    <button
                        className="md:hidden text-slate-900 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                        aria-label={mobileOpen ? "Close menu" : "Open menu"}
                        onClick={() => setMobileOpen((v) => !v)}
                    >
                        {mobileOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-white/95 backdrop-blur-lg border-b border-glass-border shadow-lg animate-fade-up">
                    <div className="flex flex-col items-center gap-6 py-8">
                        <Link href="#services" className="flex items-center gap-2 text-lg font-medium text-slate-700 hover:text-accent transition-colors" onClick={() => setMobileOpen(false)}>
                            <Briefcase size={20} className="text-accent" /> Services
                        </Link>
                        <Link href="#work" className="flex items-center gap-2 text-lg font-medium text-slate-700 hover:text-accent transition-colors" onClick={() => setMobileOpen(false)}>
                            <Home size={20} className="text-accent" /> Work
                        </Link>
                        <Link href="#studio" className="flex items-center gap-2 text-lg font-medium text-slate-700 hover:text-accent transition-colors" onClick={() => setMobileOpen(false)}>
                            <Users size={20} className="text-accent" /> Studio
                        </Link>
                        <Link href="#insights" className="flex items-center gap-2 text-lg font-medium text-slate-700 hover:text-accent transition-colors" onClick={() => setMobileOpen(false)}>
                            <Lightbulb size={20} className="text-accent" /> Insights
                        </Link>
                        <Link href="#contact" className="flex items-center gap-2 bg-slate-900 text-white text-lg font-medium px-6 py-3 rounded-full hover:bg-indigo-600 transition-all duration-300 shadow-lg shadow-indigo-500/20" onClick={() => setMobileOpen(false)}>
                            <Send size={18} className="mr-1" /> Start Project
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default CustomNavbar;
