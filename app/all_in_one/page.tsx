"use client";

import Link from "next/link";
import Image from "next/image";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, ArrowRight, Zap, Layout,
  Smartphone, PenTool, BarChart3, Globe,
  CheckCircle, Code, Mail, Phone, MapPin, Send, Clock
} from "lucide-react";
import * as Lucide from 'lucide-react';
import { ButtonHTMLAttributes, ReactNode } from 'react';

const navigation = [
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Work", href: "#work" },
  { name: "Reviews", href: "#testimonials" },
];

const processSteps = [
  { id: "01", title: "Discovery", desc: "We dive deep into your business goals, audience, and competitors to build a solid foundation." },
  { id: "02", title: "Strategy", desc: "We craft a tailored roadmap and digital strategy to ensure every step aligns with your objectives." },
  { id: "03", title: "Execution", desc: "Our expert team designs, builds, and implements solutions using cutting-edge technologies." },
  { id: "04", title: "Growth", desc: "We launch, monitor, and optimize continuously to scale your results and ROI." }
];

const projects = [
  { title: "Fintech Dashboard", category: "Web App", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop", result: "+140% User Retention" },
  { title: "Modern E-Commerce", category: "Development", image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2000&auto=format&fit=crop", result: "2.5x Conversion Rate" },
  { title: "Health & Wellness", category: "Branding", image: "https://images.unsplash.com/photo-1544367563-12123d8966cd?q=80&w=2000&auto=format&fit=crop", result: "Award Winning Design" }
];

const faqs = [
  { q: "How long does a typical project take?", a: "Timelines vary by scope. A standard website takes 4-6 weeks, while complex applications may take 3-6 months. We provide detailed schedules during the proposal phase." },
  { q: "Do you offer post-launch support?", a: "Absolutely. We offer various maintenance packages to ensure your digital products remain secure, up-to-date, and performant after launch." },
  { q: "What is your pricing structure?", a: "We work on a project-based pricing model. This ensures transparency with no hidden costs. For ongoing marketing, we offer monthly retainer packages." }
];

interface IconProps {
  name: keyof typeof Lucide;
  size?: number;
  className?: string;
  key: string;
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "link";
  className?: string;
}

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}

const Icon = ({ name, size = 20, className, ...props }: IconProps) => {
  const LucideIcon = Lucide[name] as LucideIcon;
  if (!LucideIcon) return null;
  return <LucideIcon size={size} className={className} {...props} />;
};

function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
  const base = "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-all duration-300 active:scale-[0.98] h-10 px-7";
  const variants = {
    primary: "bg-linear-to-r from-(--color-primary) to-red-800 text-white hover:bg-red-700 shadow-xl shadow-[var(--color-primary)]/20",
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

function SectionHeading({ badge, title, subtitle, align = "center" }: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${align === "center" ? "text-center mx-auto" : "text-left"}`}>
      {badge && (
        <span className="inline-block py-1.5 px-4 rounded-full bg-red-50 border border-red-200 text-xs font-semibold text-(--color-primary) uppercase tracking-wider mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-zinc-900 mb-6">{title}</h2>
      {subtitle && <p className="text-xl text-zinc-500 font-normal leading-relaxed max-w-3xl mx-auto">{subtitle}</p>}
    </div>
  );
}

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-0 border-zinc-50/0 ${isScrolled ? "bg-white/95 glass border-b border-zinc-100 py-2" : "bg-transparent border-0 py-3"}`}>
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
            <Button variant="primary" className="h-3 text-xs uppercase tracking-wide rounded-none bg-black">
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

function Hero() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-32 lg:pb-32 overflow-hidden bg-grid">
      <div className="absolute inset-0 bg-grid -z-10 h-[600px]"></div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-300/20 text-xs font-medium text-green-600 ">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          Accepting New Clients for Q4
        </div>

        <h1 className="max-w-4xl mx-auto text-5xl md:text-7xl font-display font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
          Scale your digital revenue
          <span className="text-transparent border-2 border-amber-600/20 p-2 bg-clip-text bg-linear-to-r from-red-500 to-red-300">with precision engineering.</span>
        </h1>

        <p className="max-w-xl mx-auto text-lg text-slate-500 mb-10 leading-relaxed">
          We combine technical SEO architecture, high-performance development, and data-driven content strategies to dominate search results.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#projects" className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 font-medium text-white transition-colors bg-black rounded-lg hover:bg-(--color-primary) shadow-xl shadow-slate-900/10">
            View Case Studies
          </a>
          <a href="#services" className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 font-medium text-slate-700 transition-colors bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300">
            Our Services
          </a>
        </div>

        <div className="absolute mt-8 blur-3xl bg-linear-to-b from-white/60 to-white w-full h-100"></div>

        <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-lg text-black/40">DM Feeds</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-lg text-black/40">Sarasaviya</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-lg text-black/40">Japaneese Cafe</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-lg text-black/40">Yes Foods</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Methodology() {
  return (
    <section id="methodology" className="py-24 bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-1">
            <h2 className="text-4xl font-extrabold tracking-tighter text-zinc-900 mb-6">Our Methodology</h2>
            <p className="text-lg text-zinc-500 leading-relaxed mb-8">
              We don&apos;t rely on guesswork. Every decision is backed by live data, ensuring your growth infrastructure is built on solid ground.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm font-semibold text-(--color-primary)">
                <CheckCircle className="text-(--color-icons-and-text) w-4 h-4 shrink-0" />
                Technical SEO Audits
              </li>
              <li className="flex items-center gap-3 text-sm font-semibold text-(--color-primary)">
                <CheckCircle className="text-(--color-icons-and-text) w-4 h-4 shrink-0" />
                Next.js Development
              </li>
              <li className="flex items-center gap-3 text-sm font-semibold text-(--color-primary)">
                <CheckCircle className="text-(--color-icons-and-text) w-4 h-4 shrink-0" />
                Conversion Rate Optimization
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 grid sm:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl border border-zinc-200 bg-zinc-50 hover:bg-white hover:border-(--color-text) hover:shadow-xl hover:shadow-red-100/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-(--color-primary) mb-4 shadow-sm">
                <BarChart3 data-width="20" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">SEO Strategy</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">Comprehensive keyword mapping, backlink acquisition, and on-page optimization designed to rank.</p>
            </div>

            <div className="p-8 rounded-2xl border border-zinc-200 bg-zinc-50 hover:bg-white hover:border-(--color-text) hover:shadow-xl hover:shadow-red-100/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-(--color-primary) mb-4 shadow-sm">
                <Layout data-width="20" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">UI/UX Design</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">Interfaces built for conversion. We design systems that guide users seamlessly from landing to checkout.</p>
            </div>

            <div className="p-8 rounded-2xl border border-zinc-200 bg-zinc-50 hover:bg-white hover:border-(--color-text) hover:shadow-xl hover:shadow-red-100/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-(--color-primary) mb-4 shadow-sm">
                <Code data-width="20" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">Web Development</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">Performance-obsessed code. Headless CMS implementations, React applications, and API integrations.</p>
            </div>

            <div className="p-8 rounded-2xl border border-zinc-200 bg-zinc-50 hover:bg-white hover:border-(--color-text) hover:shadow-xl hover:shadow-red-100/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-(--color-primary) mb-4 shadow-sm">
                <Zap data-width="20" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">Performance Marketing</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">Paid acquisition channels that scale. We manage Google Ads and Social spend with ROI focus.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="portfolio" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          badge="Portfolio"
          title="Featured Case Studies"
          subtitle="Explore our results-driven work for ambitious brands."
        />

        <div className="space-y-24 mt-16">
          {/* Project 1 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center group">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-zinc-300/50 transition-transform duration-500 group-hover:scale-[1.01]">
              <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10"></div>
              <Image
                src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2700&amp;auto=format&amp;fit=crop"
                alt="Real Estate Project"
                width={1000}
                height={450}
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute bottom-8 left-8 right-8 p-6 rounded-xl z-20 backdrop-blur-md bg-white/70 border border-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-zinc-600 uppercase tracking-widest mb-1">NovaNest Realty</p>
                    <h3 className="text-xl font-bold text-zinc-900">Luxury Brand Rebuild</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-extrabold text-(--color-primary)">+150%</p>
                    <p className="text-[10px] text-zinc-500 uppercase font-semibold">Inquiries</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:pl-10">
              <h3 className="text-4xl font-extrabold text-zinc-900 mb-6 tracking-tighter">Redefining luxury digital presence.</h3>
              <p className="text-lg text-zinc-500 leading-relaxed mb-8">We transformed NovaNest from a local agency into a premier luxury brand. By rebuilding their web infrastructure and implementing a targeted SEO strategy, we captured the high-net-worth market.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-base text-zinc-600">
                  <CheckCircle className="text-(--color-primary) w-4 h-4 mr-3" />
                  Complete Next.js Site Overhaul
                </li>
                <li className="flex items-center text-base text-zinc-600">
                  <CheckCircle className="text-(--color-primary) w-4 h-4 mr-3" />
                  Automated Lead Nurturing System
                </li>
                <li className="flex items-center text-base text-zinc-600">
                  <CheckCircle className="text-(--color-primary) w-4 h-4 mr-3" />
                  4x ROI on Ad Spend within 60 days
                </li>
              </ul>
              <Button variant="link">
                Read Case Study
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>

          {/* Project 2 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center group">
            <div className="lg:order-2 relative rounded-3xl overflow-hidden shadow-2xl shadow-zinc-300/50 transition-transform duration-500 group-hover:scale-[1.01]">
              <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10"></div>
              <Image
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&amp;w=2832&amp;auto=format&amp;fit=crop"
                alt="SaaS Dashboard"
                width={1000}
                height={450}
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute bottom-8 left-8 right-8 p-6 rounded-xl z-20 backdrop-blur-md bg-white/70 border border-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-zinc-600 uppercase tracking-widest mb-1">Forma SaaS</p>
                    <h3 className="text-xl font-bold text-zinc-900">User Acquisition Scale</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-extrabold text-(--color-primary)">3.2x</p>
                    <p className="text-[10px] text-zinc-500 uppercase font-semibold">Growth Rate</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:order-1 lg:pr-10">
              <h3 className="text-4xl font-extrabold text-zinc-900 mb-6 tracking-tighter">Scaling SaaS from seed to Series A.</h3>
              <p className="text-lg text-zinc-500 leading-relaxed mb-8">Forma needed users, fast. We deployed a multi-channel performance marketing strategy combined with conversion rate optimization (CRO) on landing pages.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-base text-zinc-600">
                  <CheckCircle className="text-(--color-primary) w-4 h-4 mr-3" />
                  LinkedIn &amp; Google Ads Strategy
                </li>
                <li className="flex items-center text-base text-zinc-600">
                  <CheckCircle className="text-(--color-primary) w-4 h-4 mr-3" />
                  Dynamic Landing Page Personalization
                </li>
                <li className="flex items-center text-base text-zinc-600">
                  <CheckCircle className="text-(--color-primary) w-4 h-4 mr-3" />
                  Cost Per Acquisition Reduced by 40%
                </li>
              </ul>
              <Button variant="link">
                Read Case Study
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NewServices() {
  return (
    <section id="services" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          badge="Services"
          title="What we do"
          subtitle="Our expertise spans digital products, branding, marketing, and analytics."
        />

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">

          <a href="#contact" className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 group">
            Get a proposal <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right"></span>
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="group bg-white rounded-2xl p-2 border border-slate-200 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300">
            <div className="aspect-video overflow-hidden rounded-xl bg-slate-100 relative mb-4">
              <Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" height={1000} width={400} className="object-cover" alt="Web Development" />
            </div>
            <div className="px-4 pb-4">
              <h3 className="text-xl font-display font-bold text-slate-900 mb-2">Web Development</h3>
              <p className="text-sm text-slate-500 mb-4 line-clamp-2">Responsive, scalable, and SEO-optimized websites tailored to your brand and goals.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                  <span className="iconify text-indigo-600" data-icon="lucide:check-circle" data-width="14"></span> Responsive design
                </li>
                <li className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                  <span className="iconify text-indigo-600" data-icon="lucide:check-circle" data-width="14"></span> SEO optimized
                </li>
                <li className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                  <span className="iconify text-indigo-600" data-icon="lucide:check-circle" data-width="14"></span> Scalable architecture
                </li>
              </ul>
              <div className="flex items-center w-full justify-center">
                <Button variant="upsideghost">
                  <Link href="/services/web-development" className="w-full btn-secondary py-2 text-xs font-bold">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>


          <div className="group bg-white rounded-2xl p-2 border border-slate-200 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300">
            <div className="aspect-video overflow-hidden rounded-xl bg-slate-100 relative mb-4">
              <Image src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;q=80&amp;w=1080" alt="Mobile Apps" width={400} height={1000} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" ></Image>
            </div>
            <div className="px-4 pb-4">
              <h3 className="text-xl font-display font-bold text-slate-900 mb-2">Mobile Apps</h3>
              <p className="text-sm text-slate-500 mb-4 line-clamp-2">Native and cross-platform mobile apps with seamless performance and user experience.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                  <span className="iconify text-indigo-600" data-icon="lucide:smartphone" data-width="14"></span> iOS &amp; Android
                </li>
                <li className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                  <span className="iconify text-indigo-600" data-icon="lucide:layers" data-width="14"></span> Cross-platform
                </li>
                <li className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                  <span className="iconify text-indigo-600" data-icon="lucide:zap" data-width="14"></span> High Performance
                </li>
              </ul>
              <div className="flex items-center w-full justify-center">
                <Button variant="upsideghost">
                  <Link href="/services/mobile-apps" className="w-full btn-secondary py-2 text-xs font-bold">Explore Apps</Link>
                </Button>
              </div>
            </div>
          </div>


          <div className="group bg-white rounded-2xl p-2 border border-slate-200 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300">
            <div className="aspect-video overflow-hidden rounded-xl bg-slate-100 relative mb-4">
              <Image src="https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&amp;w=1080&amp;auto=format&amp;fit=crop" alt="Brand Identity" width={400} height={10000} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"></Image>
            </div>
            <div className="px-4 pb-4">
              <h3 className="text-xl font-display font-bold text-slate-900 mb-2">Brand Identity</h3>
              <p className="text-sm text-slate-500 mb-4 line-clamp-2">Crafting memorable visual identities that make your brand stand out across platforms.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                  <span className="iconify text-indigo-600" data-icon="lucide:pen-tool" data-width="14"></span> Logo &amp; Mark
                </li>
                <li className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                  <span className="iconify text-indigo-600" data-icon="lucide:book" data-width="14"></span> Brand Guidelines
                </li>
                <li className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                  <span className="iconify text-indigo-600" data-icon="lucide:image" data-width="14"></span> Visual Assets
                </li>
              </ul>
              <div className="flex items-center w-full justify-center">
                <Button variant="upsideghost">
                  <Link href="/services/mobile-apps" className="w-full btn-secondary py-2 text-xs font-bold">Discover Identity</Link>
                </Button>
              </div>
            </div>
          </div>


          <div className="group bg-white rounded-2xl p-2 border border-slate-200 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300">
            <div className="aspect-video overflow-hidden rounded-xl bg-slate-100 relative mb-4">
              <Image src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&amp;w=1080&amp;auto=format&amp;fit=crop" alt="Creative Posters" width={400} height={1000} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"></Image>
            </div>
            <div className="px-4 pb-4">
              <h3 className="text-xl font-display font-bold text-slate-900 mb-2">Creative Posters</h3>
              <p className="text-sm text-slate-500 mb-4 line-clamp-2">Eye-catching poster and social designs to amplify your campaigns’ visual impact.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                  <span className="iconify text-indigo-600" data-icon="lucide:layout" data-width="14"></span> Campaign visuals
                </li>
                <li className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                  <span className="iconify text-indigo-600" data-icon="lucide:share-2" data-width="14"></span> Social Ready
                </li>
                <li className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                  <span className="iconify text-indigo-600" data-icon="lucide:printer" data-width="14"></span> Print Ready
                </li>
              </ul>
              <div className="flex items-center w-full justify-center">
                <Button variant="upsideghost">
                  <Link href="/services/creative-posters" className="w-full btn-secondary py-2 text-xs font-bold">View Examples</Link>
                </Button>
              </div>
            </div>
          </div>


          <div className="group bg-white rounded-2xl p-2 border border-slate-200 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 md:col-span-2 lg:col-span-2">
            <div className="flex flex-col md:flex-row h-full">
              <div className="md:w-1/2 aspect-video md:aspect-auto overflow-hidden rounded-xl bg-slate-100 relative mb-4 md:mb-0 md:mr-4">
                <Image src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&amp;w=1080&amp;auto=format&amp;fit=crop" alt="Social Media" width={400} height={1000} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"></Image>
              </div>
              <div className="md:w-1/2 px-2 pb-2 flex flex-col justify-center">
                <h3 className="text-xl font-display font-bold text-slate-900 mb-2">Social Media Management</h3>
                <p className="text-sm text-slate-500 mb-6">We build and manage your brand’s social presence to drive engagement and growth. Full stack community handling.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                    <span className="iconify text-indigo-600" data-icon="lucide:calendar" data-width="16"></span> Content Calendar Strategy
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                    <span className="iconify text-indigo-600" data-icon="lucide:users" data-width="16"></span> Community Engagement
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                    <span className="iconify text-indigo-600" data-icon="lucide:bar-chart" data-width="16"></span> Analytics &amp; Reporting
                  </li>
                </ul>
                <div className="flex items-center w-full justify-center">
                  <Button variant="upsideghost">
                    <Link href="/services/social-media-management" className="w-full btn-secondary py-2 text-xs font-bold">Manage Accounts</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          badge="Process"
          title="Our Structured Workflow"
          subtitle="We follow a structured, four-step approach to ensure success at every stage."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mt-16 relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-zinc-200 hidden lg:block"></div>
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="p-8 bg-black rounded-2xl border border-zinc-200 shadow-lg hover:shadow-xl hover:border-(--color-text) transition-all duration-300 relative pt-16"
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-(--color-primary) text-white flex items-center justify-center text-xl font-bold border-4 border-white shadow-xl">
                {step.id}
              </div>
              <h4 className="text-2xl font-bold mb-3 text-gray-400">{step.title}</h4>
              <p className="text-zinc-100 leading-relaxed text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkList() {
  return (
    <section id="work" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          badge="Work"
          title="Selected Projects"
          subtitle="A glimpse into the diverse range of digital experiences we've crafted."
        />

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer hover:shadow-2xl hover:scale-[1.01] transition-all duration-300"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-zinc-900/80 via-zinc-900/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-xs uppercase tracking-widest font-semibold text-(--color-text) mb-1">{project.category}</p>
                <h4 className="text-xl font-bold mb-1">{project.title}</h4>
                <div className="inline-block py-1 px-3 rounded-full bg-(--color-primary) text-xs font-bold mt-2">{project.result}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InteractiveFAQs() {
  const [openIndex, setOpenIndex] = useState(null);
  const combinedFaqs = [
    { q: "What technologies do you specialize in for web development?", a: "We primarily use the **MERN stack** (MongoDB, Express, React, Node.js) for full-stack development, alongside popular frameworks like Next.js for high-performance applications." },
    { q: "Can you develop native or cross-platform mobile apps?", a: "We specialize in **cross-platform development** using **React Native**, which allows us to efficiently build a single codebase that runs natively on Android." },
    { q: "Do you provide post-launch maintenance and support?", a: "Yes, we offer flexible maintenance packages that cover bug fixes, security updates, feature enhancements, and technical support to ensure your application runs smoothly." },
    { q: "Do I need to provide the images and copy for the poster?", a: "We encourage clients to provide their branding guidelines and key messages. We can handle image sourcing using **royalty-free stock libraries** and offer basic copy editing as part of the package." },
    { q: "Which social media platforms do you manage?", a: "We manage all major platforms, including **Instagram, Facebook, Twitter (X), LinkedIn, and TikTok**, tailoring content and strategy specifically to each platform's audience and best practices." },
    { q: "How do you measure the success of a social media campaign?", a: "We track key performance indicators (**KPIs**) such as **engagement rate, reach, follower growth, website traffic**, and, most importantly, **conversion rates** relevant to your business goals." }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white border-t border-zinc-100">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeading
          badge="Questions"
          title="Advanced FAQs"
          subtitle="In-depth answers to common and technical queries."
        />
        <div className="space-y-2 mt-12">
          {combinedFaqs.map((faq, i) => (
            <div key={i} className="border border-zinc-200 rounded-xl overflow-hidden transition-all duration-300 ">
              <button
                className="w-full py-5 px-6 flex items-center justify-between text-left text-zinc-900 hover:bg-zinc-50 transition-colors"
                onClick={() => toggleFAQ(i)}
              >
                <span className="font-semibold text-lg pr-8">{faq.q}</span>
                <Icon name={openIndex === i ? "Minus" : "Plus"} size={18} className="shrink-0 text-(--color-primary) transition-transform duration-300" />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-zinc-500 text-sm leading-relaxed px-6 pb-6 pt-2 bg-zinc-50 border-t border-zinc-200">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }, 700);
  };

  return (
    <section id="contact" className="py-24 bg-grid">
      <div className="max-w-5xl mx-auto text-center">
        <SectionHeading
          badge="Contact"
          title="Start Your Project"
          subtitle="Let's create something amazing together. Fill out the form and we'll be in touch within 24 hours."
        />

        <div className="grid md:grid-cols-2 gap-8 w-full bg-white p-4 border border-black/10 rounded-2xl">
          {/* Left - Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-slate-900 mb-6">Contact Information</h3>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-(--color-primary)/10 rounded-lg flex items-center justify-center shrink-0 mt-1">
                <Mail className="text-(--color-primary)" size={18} />
              </div>
              <div className="flex flex-col items-baseline">
                <p className="text-sm text-slate-500">Email</p>
                <a href="mailto:emarketingparadice@gmail.com" className="text-red-900 hover:(--color-primary) transition-colors">emarketingparadice@gmail.com</a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-(--color-primary)/10 rounded-lg flex items-center justify-center shrink-0 mt-1">
                <Phone className="text-(--color-primary)" size={18} />
              </div>
              <div className="flex flex-col items-baseline">
                <p className="text-sm text-slate-500">Phone</p>
                <a href="tel:+947123456789" className="text-red-900 hover:(--color-primary) transition-colors">+94 712 345 6789</a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-(--color-primary)/10 rounded-lg flex items-center justify-center shrink-0 mt-1">
                <MapPin className="text-(--color-primary)" size={18} />
              </div>
              <div className="flex flex-col items-baseline">
                <p className="text-sm text-slate-500">Location</p>
                <p className="text-red-900">Kuliyapitiya, Sri Lanka</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-(--color-primary)/10 rounded-lg flex items-center justify-center shrink-0 mt-1">
                <Clock className="text-(--color-primary)" size={18} />
              </div>
              <div className="flex flex-col items-baseline">
                <p className="text-sm text-slate-500">Hours</p>
                <p className="text-red-900">Mon - Sat: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-slate-50 rounded-xl p-8 border border-slate-100">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col items-baseline">
                <label htmlFor="name" className="block text-sm font-medium text-slate-900 mb-1.5">Your Name *</label>
                <input
                  id="name"
                  type="text"
                  required
                  aria-required="true"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:border-(--color-primary) focus:ring-1 focus:ring-(--color-primary)/30 outline-none transition-all text-sm"
                  placeholder="John Doe"
                />
              </div>

              <div className="flex flex-col items-baseline">
                <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-1.5">Email *</label>
                <input
                  id="email"
                  type="email"
                  required
                  aria-required="true"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:border-(--color-primary) focus:ring-1 focus:ring-(--color-primary)/30 outline-none transition-all text-sm"
                  placeholder="john@company.com"
                />
              </div>

              <div className="flex flex-col items-baseline">
                <label htmlFor="message" className="block text-sm font-medium text-slate-900 mb-1.5">Message *</label>
                <textarea
                  id="message"
                  required
                  aria-required="true"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:border-(--color-primary) focus:ring-1 focus:ring-(--color-primary)/30 outline-none resize-none transition-all text-sm"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button
                type="submit"
                disabled={submitting}
                className=" w-full px-4 py-2.5 text-sm font-medium rounded-lg flex items-center justify-center gap-2 transition-all duration-300"
                aria-busy={submitting}
              >
                {submitting ? 'Sending...' : 'Send Message'}
                {!submitting && <Send size={16} />}
              </Button>

              {submitted && (
                <div className="text-center text-sm text-green-600 bg-green-50 p-2 rounded-lg">Thanks! We&apos;ll reply soon.</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function BlogSection() {
  return (
    <section id="blog" className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl font-display font-bold tracking-tight text-slate-900 mb-4">Insights &amp; Engineering</h2>
          <p className="text-lg text-slate-500">
            Deep dives into the mechanics of growth. We write about what works in modern SEO, design systems, and conversion optimization.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Article placeholders - keep simple, use existing styles from template */}
          <article className="flex flex-col group h-full">
            <a href="#" className="block overflow-hidden rounded-xl bg-slate-100 mb-6 border border-slate-100 relative aspect-[1.6]">
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors z-10"></div>
              <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&amp;w=800&amp;auto=format&amp;fit=crop" alt="SEO Analysis Graph" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </a>
            <div className="flex items-center gap-3 text-xs font-medium text-slate-500 mb-3">
              <span className="text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">Technical SEO</span>
              <time dateTime="2023-10-12">Oct 12, 2023</time>
              <span>•</span>
              <span>5 min read</span>
            </div>
            <h3 className="text-xl font-display font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
              <a href="#">The Death of Keywords: Why Topic Clusters Win</a>
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">
              Search engines have evolved. We break down how to structure your content architecture to establish topical authority rather than chasing volume.
            </p>
            <a href="#" className="text-sm font-semibold text-slate-900 group-hover:text-indigo-600 inline-flex items-center mt-auto">
              Read Article
            </a>
          </article>

          <article className="flex flex-col group h-full">
            <a href="#" className="block overflow-hidden rounded-xl bg-slate-100 mb-6 border border-slate-100 relative aspect-[1.6]">
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors z-10"></div>
              <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=800&amp;auto=format&amp;fit=crop" alt="Code on Screen" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </a>
            <div className="flex items-center gap-3 text-xs font-medium text-slate-500 mb-3">
              <span className="text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">Development</span>
              <time dateTime="2023-09-28">Sep 28, 2023</time>
              <span>•</span>
              <span>8 min read</span>
            </div>
            <h3 className="text-xl font-display font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
              <a href="#">Optimizing Core Web Vitals in Next.js 14</a>
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">
              Speed is a ranking factor. A technical guide to reducing LCP and CLS scores using the latest features in the Next.js app router.
            </p>
            <a href="#" className="text-sm font-semibold text-slate-900 group-hover:text-indigo-600 inline-flex items-center mt-auto">
              Read Article
            </a>
          </article>

          <article className="flex flex-col group h-full">
            <a href="#" className="block overflow-hidden rounded-xl bg-slate-100 mb-6 border border-slate-100 relative aspect-[1.6]">
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors z-10"></div>
              <img src="https://images.unsplash.com/photo-1616469829941-c7200edec809?q=80&amp;w=800&amp;auto=format&amp;fit=crop" alt="Minimalist Design" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </a>
            <div className="flex items-center gap-3 text-xs font-medium text-slate-500 mb-3">
              <span className="text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">Design Strategy</span>
              <time dateTime="2023-09-15">Sep 15, 2023</time>
              <span>•</span>
              <span>4 min read</span>
            </div>
            <h3 className="text-xl font-display font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
              <a href="#">The ROI of Micro-Interactions</a>
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">
              Why small animations matter for trust. How we used Framer Motion to increase session duration for our SaaS clients.
            </p>
            <a href="#" className="text-sm font-semibold text-slate-900 group-hover:text-indigo-600 inline-flex items-center mt-auto">
              Read Article
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-16 bg-zinc-900 text-zinc-300">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-2.5 mb-4 md:mb-0">
          <div className="w-9 h-9 bg-(--color-primary) rounded-lg flex items-center justify-center text-white shadow-lg">
            <span className="font-serif italic font-bold text-xl leading-none pt-1 pr-0.5">E</span>
          </div>
          <span className="font-semibold tracking-tight text-white">Marketing Paradice</span>
        </div>

        <div className="flex gap-6 text-sm font-medium">
          <Link href="#" className="hover:text-white transition">About Us</Link>
          <Link href="#" className="hover:text-white transition">Portfolio</Link>
          <Link href="#" className="hover:text-white transition">Contact</Link>
        </div>

        <div className="flex flex-col">
          <span className="text-sm font-light order-3 md:border-none mt-6 md:mt-0">&copy; 2025 Marketing Paradice. All rights reserved.</span>
          <span className="text-[10px] font-light order-3 md:border-none mt-6 md:mt-0">Developed by E Marketing Paradice</span>
        </div>
      </div>
    </footer>
  );
}

export default function LandingPage() {
  return (
    <div className="bg-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <NewServices />
        <Projects />
        <WorkList />
        <Methodology />
        <Process />
        <InteractiveFAQs />
        <BlogSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}