"use client";

import Link from "next/link";
import Image from "next/image";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Zap, Layout, BarChart3, CheckCircle, Code, Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import * as Lucide from 'lucide-react';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import Hero from "@/components/Hero";
import { LandingProjects } from "@/components/data/LandingData";

const processSteps = [
    { id: "01", title: "Discovery", desc: "We dive deep into your business goals, audience, and competitors to build a solid foundation." },
    { id: "02", title: "Strategy", desc: "We craft a tailored roadmap and digital strategy to ensure every step aligns with your objectives." },
    { id: "03", title: "Execution", desc: "Our expert team designs, builds, and implements solutions using cutting-edge technologies." },
    { id: "04", title: "Growth", desc: "We launch, monitor, and optimize continuously to scale your results and ROI." }
];

const projects = [
    {
        title: "Fintech Dashboard",
        category: "Web App",
        image:
            "https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg?auto=compress&cs=tinysrgb&w=800",
        result: "+140% User Retention",
    },
    {
        title: "Modern E-Commerce",
        category: "Development",
        image:
            "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
        result: "2.5x Conversion Rate",
    },
    {
        title: "Health & Wellness",
        category: "Branding",
        image:
            "https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=800",
        result: "Award Winning Design",
    },
];

const services = [
    {
        title: "Web Development",
        image:
            "https://images.pexels.com/photos/326502/pexels-photo-326502.jpeg?auto=compress&cs=tinysrgb&w=800",
        description:
            "Responsive, scalable, and SEO-optimized websites tailored to your brand and goals.",
        features: [
            { label: "Responsive design", icon: "MonitorSmartphone" },
            { label: "SEO optimized", icon: "Search" },
            { label: "Scalable architecture", icon: "Layers" },
        ],
        link: "/services/web-development",
    },
    {
        title: "Mobile Apps",
        image:
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080",
        description:
            "Native and cross-platform mobile apps with seamless performance and user experience.",
        features: [
            { label: "iOS & Android", icon: "Smartphone" },
            { label: "Cross-platform", icon: "PanelsTopLeft" },
            { label: "High Performance", icon: "Rocket" },
        ],
        link: "/services/mobile-apps",
    },
    {
        title: "Brand Identity",
        image:
            "https://images.pexels.com/photos/3243090/pexels-photo-3243090.jpeg?auto=compress&cs=tinysrgb&w=800",
        description:
            "Crafting memorable visual identities that make your brand stand out across platforms.",
        features: [
            { label: "Logo & Mark", icon: "Brush" },
            { label: "Brand Guidelines", icon: "NotepadText" },
            { label: "Visual Assets", icon: "Palette" },
        ],
        link: "/#contact",
    },
    {
        title: "Creative Posters",
        image:
            "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1080&auto=format&fit=crop",
        description:
            "Eye-catching poster and social designs to amplify your campaigns' visual impact.",
        features: [
            { label: "Campaign visuals", icon: "Megaphone" },
            { label: "Social Ready", icon: "Share2" },
            { label: "Print Ready", icon: "Printer" },
        ],
        link: "/services/creative-posters",
    },
    {
        title: "Social Media Management",
        image:
            "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1080&auto=format&fit=crop",
        description:
            "We build and manage your brand's social presence to drive engagement and growth.",
        features: [
            { label: "Content Calendar Strategy", icon: "Calendar" },
            { label: "Community Engagement", icon: "Users" },
            { label: "Analytics & Reporting", icon: "BarChart3" },
        ],
        featured: true,
        link: "/services/social-media-management",
    },
];

type LucideIconComponent = React.ComponentType<{
    size?: number;
    color?: string;
    strokeWidth?: number;
    className?: string;
}>;

interface IconProps {
    name: keyof typeof Lucide;
    size?: number;
    className?: string;
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
    const LucideIcon = Lucide[name] as LucideIconComponent;

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

                {/* Section Heading */}
                <SectionHeading
                    badge="Our Services"
                    title="What We Offer"
                    subtitle="Explore our range of web, mobile, branding, and social media services designed to grow your business."
                    align="center"
                />

                {/* Call-to-action */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <a
                        href="#contact"
                        className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 group"
                    >
                        Get a proposal
                        <span
                            className="iconify group-hover:translate-x-1 transition-transform"
                            data-icon="lucide:arrow-right"
                        ></span>
                    </a>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`group bg-white rounded-2xl p-2 border border-slate-200 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 ${service.featured ? "md:col-span-2 lg:col-span-2" : ""
                                }`}
                        >
                            <div className={`flex flex-col ${service.featured ? "md:flex-row" : ""} h-full`}>
                                <div
                                    className={`overflow-hidden rounded-xl bg-gray-100 relative mb-4 md:mb-0 ${service.featured ? "md:w-1/2 h-full" : "aspect-video"
                                        }`}
                                >
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        width={400}
                                        height={1000}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                <div
                                    className={`px-3 pb-3 flex flex-col ${service.featured ? "md:w-1/2 justify-center" : ""
                                        }`}
                                >
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 mt-8">{service.title}</h3>
                                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{service.description}</p>

                                    <ul className="space-y-2 mb-6">
                                        {service.features.map((feature, idx) => {
                                            const FeatureIcon =
                                                Lucide[feature.icon as keyof typeof Lucide] as React.FC<
                                                    React.SVGProps<SVGSVGElement>
                                                >;

                                            return (
                                                <li key={idx} className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                                                    {FeatureIcon && (
                                                        <FeatureIcon className="text-indigo-600 w-4 h-4 shrink-0" />
                                                    )}
                                                    {feature.label}
                                                </li>
                                            );
                                        })}
                                    </ul>

                                    <Link
                                        href={service.link}
                                        className="mt-auto inline-flex items-center justify-center px-6 py-2 text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-red-50 hover:text-red-700 rounded-lg transition-all"
                                    >
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
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
          {
                            LandingProjects.map((project, index) => (
                                <Link href={project.page_link} key={index}>
                                    <motion.div
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
                                        </div>
                                    </motion.div>
                                </Link>
                            ))
                        }
</div>
            </div>
        </section>
    );
}

function InteractiveFAQs() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const combinedFaqs: { q: string; a: string }[] = [
        { q: "What technologies do you specialize in for web development?", a: "We primarily use the **MERN stack** (MongoDB, Express, React, Node.js) for full-stack development, alongside popular frameworks like Next.js for high-performance applications." },
        { q: "Can you develop native or cross-platform mobile apps?", a: "We specialize in **cross-platform development** using **React Native**, which allows us to efficiently build a single codebase that runs natively on Android." },
        { q: "Do you provide post-launch maintenance and support?", a: "Yes, we offer flexible maintenance packages that cover bug fixes, security updates, feature enhancements, and technical support to ensure your application runs smoothly." },
        { q: "Do I need to provide the images and copy for the poster?", a: "We encourage clients to provide their branding guidelines and key messages. We can handle image sourcing using **royalty-free stock libraries** and offer basic copy editing as part of the package." },
        { q: "Which social media platforms do you manage?", a: "We manage all major platforms, including **Instagram, Facebook, Twitter (X), LinkedIn, and TikTok**, tailoring content and strategy specifically to each platform's audience and best practices." },
        { q: "How do you measure the success of a social media campaign?", a: "We track key performance indicators (**KPIs**) such as **engagement rate, reach, follower growth, website traffic**, and, most importantly, **conversion rates** relevant to your business goals." }
    ];

    const toggleFAQ = (index: number) => {
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
                    {combinedFaqs.map((faq, i: number) => (
                        <div
                            key={i}
                            className="border border-zinc-200 rounded-xl overflow-hidden transition-all duration-300"
                        >
                            <button
                                className="w-full py-5 px-6 flex items-center justify-between text-left text-zinc-900 hover:bg-zinc-50 transition-colors"
                                onClick={() => toggleFAQ(i)}
                            >
                                <span className="font-semibold text-lg pr-8">{faq.q}</span>
                                <Icon

                                    name={openIndex === i ? "Minus" : "Plus"}
                                    size={18}
                                    className="shrink-0 text-(--color-primary) transition-transform duration-300"
                                />
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
                                        <p className="text-zinc-500 text-sm leading-relaxed px-6 pb-6 pt-2 bg-zinc-50 border-t border-zinc-200">
                                            {faq.a}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

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



export default function Page() {
    return (
        <main className="bg-white antialiased w-full min-h-screen overflow-x-hidden">
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
    );