"use client"

import Link from "next/link";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, ArrowRight
} from "lucide-react";
import { ButtonHTMLAttributes, ReactNode } from 'react';


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "link";
  className?: string;
}

const navigation = [
  { name: "Services", href: "/#services" },
  { name: "Process", href: "/#process" },
  { name: "Work", href: "/#work" },
  { name: "Blogs", href: "/under_development_200" },
];

function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
  const base = "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-all duration-300 active:scale-[0.98] h-10 px-7";
  const variants = {
    primary: "bg-(-color-primary) text-white hover:bg-red-700 shadow-xl shadow-(--color-primary)/20",
    secondary: "bg-white text-zinc-900 border border-zinc-300 hover:bg-red-50 hover:border-(--color-text) shadow-sm transition-all",
    ghost: "text-zinc-600 hover:text-(--color-primary) hover:bg-zinc-100 px-4 py-2",
    upsideghost: "text-zinc-600 hover:text-(--color-primary) bg-zinc-100 px-4 py-2",
    link: "text-(--color-primary) hover:text-red-700 underline-offset-4 hover:underline p-0 h-auto px-0"
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-0 border-zinc-50/0 ${isScrolled ? "bg-white/95 glass border-b backdrop-blur-3xl border-zinc-100 py-2" : "bg-transparent border-0 py-3"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="bg-black rounded-lg flex items-center justify-center text-white shadow-xl shadow-(--color-primary)/30">
            <span className="font-serif italic font-bold text-xl leading-none px-3 py-2">E</span>
          </div>
          <span className="font-serif text-xl tracking-tightt text-md text-zinc-900">Marketing Paradice</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors relative group">
              {item.name}
              <span className="absolute bottom-[-5px] left-0 w-full h-0.5 bg-(--color-primary) scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link href="#contact">
            <Button variant="primary" className="h-3 text-xs uppercase tracking-wide bg-black rounded-md">
              Start Project <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>

        <button className="md:hidden p-2 text-zinc-900" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="absolute top-full left-0 right-0 bg-white border-b border-zinc-200 p-6 md:hidden shadow-xl">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href} className="text-lg font-medium text-zinc-900 py-2 border-b border-zinc-100 hover:text-(--color-primary) transition-colors" onClick={() => setMobileOpen(false)}>
                  {item.name}
                </Link>
              ))}
              <Link href="#contact" onClick={() => setMobileOpen(false)}>
                <Button className="w-full justify-center mt-2">Get Started</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}