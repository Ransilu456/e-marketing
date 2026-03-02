"use client";

import { motion } from "framer-motion";
import { TrendingUp, Code2, Search, Megaphone, CheckCircle2, ArrowRight } from "lucide-react";

const stats = [
    { value: "54+", label: "Brands Designed" },
    { value: "90+", label: "Lighthouse Score" },
    { value: "3×", label: "Average Traffic Lift" },
    { value: "24h", label: "Response Commitment" },
];

const pillars = [
    {
        icon: Search,
        title: "Topical Authority & Content Excellence",
        body: "In the era of AI-driven search, topical authority is the primary SEO currency. We build topic-cluster architectures that signal deep expertise to Google — turning your site into the go-to resource in your niche. Every article we produce is mapped to E-E-A-T principles, long-tail intent, and conversion funnels — not vanity traffic.",
        accent: "bg-blue-50 border-blue-100",
        iconColor: "text-blue-600 bg-blue-100",
    },
    {
        icon: Code2,
        title: "Technical Performance & Core Web Vitals",
        body: "\"Speed is not optional — it's a survival requirement.\" Every website we build targets 90+ Lighthouse scores from day one using Next.js SSR, ISR, and edge caching. We treat sub-2-second LCP and zero layout shift not as nice-to-haves but as hard deliverables — because slow pages lose rankings and customers simultaneously.",
        accent: "bg-zinc-900 border-zinc-800 text-white",
        iconColor: "text-white bg-white/10",
        dark: true,
    },
    {
        icon: Megaphone,
        title: "Creative Execution at Scale",
        body: "From a single Facebook poster to a complete brand identity system, we design visuals that stop the scroll and build lasting recognition. Our Figma-first workflow produces consistent, scalable design systems — not one-off graphics — so your brand stays coherent across every touchpoint: print, social, web, and mobile.",
        accent: "bg-rose-50 border-rose-100",
        iconColor: "text-rose-600 bg-rose-100",
    },
    {
        icon: TrendingUp,
        title: "Paid Media & Conversion Strategy",
        body: "We run Google Ads and Facebook campaigns with a single obsession: measurable ROI. We build conversion-tracked funnels, write ad copy that competes with the best in your category, and optimise campaigns weekly — not monthly. If it doesn't move cost-per-acquisition, it's cut. No budget is wasted on vanity clicks.",
        accent: "bg-amber-50 border-amber-100",
        iconColor: "text-amber-600 bg-amber-100",
    },
];

const commitments = [
    "KPI-first discovery — we define what success looks like before any work begins",
    "Transparent reporting on conversion rates, CAC, and real revenue impact — never vanity metrics",
    "Weekly check-ins and a dedicated Slack channel for every active project",
    "Code you own — no lock-in, no proprietary CMS, no hostage situations",
    "Micro-optimisations that compound: semantic HTML, server headers, image formats, and schema markup",
    "Honest advice — we'll tell you when a strategy won't work before you spend money on it",
];

export default function DetailedAbout() {
    return (
        <section className="py-28 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Top Grid: Headline + Stats */}
                <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-red-600 mb-4">
                            Who We Are
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-[1.1]">
                            A Strategic Extension of Your{" "}
                            <span className="text-red-600">Marketing Team</span>
                        </h2>
                        <div className="space-y-5 text-gray-600 leading-relaxed">
                            <p className="text-lg">
                                We don't run campaigns and disappear. E Marketing Paradice functions as an
                                embedded strategic partner — one that understands your business, speaks the
                                language of your market, and builds digital infrastructure that works for
                                years, not just the next quarter.
                            </p>
                            <p>
                                The modern digital landscape demands a partner with both
                                <strong className="text-gray-900"> technical depth</strong> — to architect
                                high-performance web applications and SEO systems — and
                                <strong className="text-gray-900"> creative precision</strong> — to design
                                visuals and narratives that build genuine brand equity. We bridge that gap.
                                Every project we take on starts with a discovery phase that defines your
                                market position, your untapped opportunities, and the exact KPIs we&apos;ll be
                                accountable to.
                            </p>
                            <p>
                                Whether you&apos;re a local SME in Kuliyapitiya establishing your digital presence,
                                or a regional brand scaling across Sri Lanka — our solutions are engineered
                                for sustainable, compounding ROI, not short-term spikes.
                            </p>
                        </div>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        className="flex flex-col gap-6"
                    >
                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((s, i) => (
                                <motion.div
                                    key={s.label}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.1 * i }}
                                    className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center"
                                >
                                    <div className="text-4xl font-extrabold text-gray-900 tracking-tight">
                                        {s.value}
                                    </div>
                                    <div className="text-sm text-gray-500 mt-1 font-medium">{s.label}</div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Callout card */}
                        <div className="bg-zinc-900 text-white rounded-2xl p-6">
                            <p className="text-sm font-semibold text-zinc-400 uppercase tracking-widest mb-3">Our Philosophy</p>
                            <p className="text-white text-lg font-medium leading-snug">
                                &ldquo;Digital success is not accidental. It is the result of meticulous planning,
                                disciplined execution, and relentless optimisation — built on real data, not
                                instinct.&rdquo;
                            </p>
                            <div className="mt-4 w-10 h-0.5 bg-red-500" />
                            <p className="mt-3 text-sm text-zinc-400">Dasun Sankalpa, Founder — E Marketing Paradice</p>
                        </div>
                    </motion.div>
                </div>

                {/* Four Pillars */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-24"
                >
                    <div className="text-center mb-12">
                        <span className="text-xs font-semibold uppercase tracking-widest text-red-600">
                            What We Actually Do
                        </span>
                        <h3 className="text-3xl font-bold text-gray-900 mt-2">
                            Four Pillars of Digital Excellence
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                        {pillars.map((p, i) => (
                            <motion.div
                                key={p.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 * i }}
                                className={`border rounded-2xl p-8 ${p.accent}`}
                            >
                                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${p.iconColor}`}>
                                    <p.icon size={20} />
                                </div>
                                <h4 className={`text-xl font-bold mb-3 ${p.dark ? "text-white" : "text-gray-900"}`}>
                                    {p.title}
                                </h4>
                                <p className={`leading-relaxed text-sm ${p.dark ? "text-zinc-300" : "text-gray-600"}`}>
                                    {p.body}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Commitment Section */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="border-t border-gray-100 pt-20"
                >
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <span className="text-xs font-semibold uppercase tracking-widest text-red-600">
                                Our Standards
                            </span>
                            <h3 className="text-3xl font-bold text-gray-900 mt-2 mb-5">
                                Innovation &amp; Transparency —{" "}
                                <span className="text-red-600">Not Just Buzzwords</span>
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                We experiment constantly — generative AI for content, advanced data
                                visualisation for attribution, edge caching for performance. But innovation
                                without transparency is theatre. Every partner gets honest reporting, clear
                                communication, and advice that prioritises their results over our margins.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                We don&apos;t build dependency. The code is yours. The strategy is documented.
                                The data stays in your Google Analytics. Our relationship ends when it&apos;s no
                                longer adding value — and we&apos;d rather earn your loyalty than trap you in a contract.
                            </p>
                        </div>

                        <div className="space-y-3">
                            {commitments.map((c, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.06 * i }}
                                    className="flex items-start gap-3 bg-gray-50 border border-gray-100 rounded-xl px-5 py-4"
                                >
                                    <CheckCircle2 size={18} className="text-red-500 mt-0.5 shrink-0" />
                                    <p className="text-sm text-gray-700 leading-relaxed">{c}</p>
                                </motion.div>
                            ))}

                            <motion.a
                                href="#contact"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="flex items-center gap-2 mt-4 px-6 py-3 bg-zinc-900 text-white rounded-xl text-sm font-semibold hover:bg-red-600 transition-colors w-fit"
                            >
                                Start a conversation <ArrowRight size={15} />
                            </motion.a>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
