"use client"

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  Menu, X, ArrowRight, Facebook, Linkedin, Github, Mail, Phone
} from "lucide-react";
import Button from "./tools/Button";

const navigation = [
  { name: "Services", href: "/#services" },
  { name: "About Us", href: "/about" },
  { name: "Work", href: "/#portfolio" },
  { name: "Blogs", href: "/blog" },
  { name: "Case Studies", href: "/case-studies" },
];

const socialLinks = [
  { href: "https://www.facebook.com/emarketingparadice", Icon: Facebook },
  { href: "https://www.linkedin.com/in/keshan-samarasekara-6a9137399", Icon: Linkedin },
  { href: "https://github.com/ransilu456", Icon: Github },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileOpen]);

  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        when: "afterChildren",
      } as const
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        when: "beforeChildren",
        staggerChildren: 0.1
      } as const
    }
  };

  const itemVariants: Variants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <>
      <nav className={`fixed top-0 inset-x-0 z-[60] transition-background duration-300 ${isScrolled || mobileOpen ? "bg-white/80 backdrop-blur-xl  py-3" : "bg-transparent py-5"
        }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group relative z-50">
            <div className={`transition-all duration-300 rounded-lg flex items-center justify-center text-white shadow-xl ${mobileOpen ? 'bg-rose-500 shadow-rose-500/20' : 'bg-black shadow-black/20'
              }`}>
              <span className="font-serif italic font-bold text-xl leading-none px-3 py-2">E</span>
            </div>
            <span className={`font-serif text-xl tracking-tight transition-colors duration-300 ${mobileOpen ? 'text-zinc-900' : 'text-zinc-900 md:text-zinc-900 group-hover:text-rose-500'
              }`}>
              Marketing Paradice
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors relative group">
                {item.name}
                <span className="absolute bottom-[-5px] left-0 w-full h-0.5 bg-rose-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/contact">
              <Button variant="primary" className="uppercase text-xs tracking-widest font-bold">
                Let&apos;s Talk
                <ArrowRight size={14} />
              </Button>
            </Link>
          </div>

          <button
            className="md:hidden relative z-50 p-2 text-zinc-900 hover:bg-zinc-100 rounded-full transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-[55] bg-white pt-32 pb-12 px-8 md:hidden overflow-y-auto"
          >
            {/* Background pattern in menu */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex flex-col gap-8 mb-12">
                {navigation.map((item) => (
                  <motion.div key={item.name} variants={itemVariants}>
                    <Link
                      href={item.href}
                      className="text-4xl font-bold text-zinc-900 hover:text-rose-500 transition-colors font-display"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={itemVariants} className="mt-auto space-y-8">
                <Link href="/contact" onClick={() => setMobileOpen(false)} className="block">
                  <Button className="w-full h-16 text-lg tracking-widest uppercase font-bold justify-center">
                    Start Growing Now
                    <ArrowRight size={20} />
                  </Button>
                </Link>

                <div className="grid grid-cols-1 gap-6 pt-8 border-t border-zinc-100">
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400">Get in touch</span>
                    <a href="mailto:emarketingparadice@gmail.com" className="text-zinc-600 flex items-center gap-3 text-sm hover:text-rose-500 transition-colors">
                      <Mail size={16} />
                      emarketingparadice@gmail.com
                    </a>
                    <a href="tel:+94763460514" className="text-zinc-600 flex items-center gap-3 text-sm hover:text-rose-500 transition-colors">
                      <Phone size={16} />
                      +94 76 346 0514
                    </a>
                  </div>

                  <div className="flex flex-col gap-3">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400">Follow us</span>
                    <div className="flex gap-4">
                      {socialLinks.map(({ href, Icon }, i) => (
                        <a
                          key={i}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-500 hover:bg-rose-500 hover:text-white hover:border-rose-500 transition-all"
                        >
                          <Icon size={18} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}