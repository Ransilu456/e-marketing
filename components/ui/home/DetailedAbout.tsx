"use client";

import { motion } from "framer-motion";

export default function DetailedAbout() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">
                            A Strategic Extension of Your Internal <span className="text-red-600">Marketing Team</span>
                        </h2>
                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                            <p>
                                At E Marketing Paradice, we don't view ourselves as a traditional outsourced agency. Instead, we function as a high-performance, strategic extension of your internal marketing and development teams. Our philosophy is rooted in the belief that digital success is not accidental; it is the result of meticulous planning, execution, and continuous optimization based on real-world data and user feedback loops.
                            </p>
                            <p>
                                The modern digital landscape is increasingly complex, with search engine algorithms, social media trends, and user behavioral patterns shifting at an unprecedented pace. To navigate this volatility, businesses require a partner who possesses both the technical depth to build robust infrastructures and the creative intuition to craft compelling brand narratives. We bridge this gap by integrating data-driven SEO strategies with premium UI/UX design and scalable full-stack development.
                            </p>
                            <p>
                                Our methodology begins with an exhaustive discovery phase, where we analyze your current market position, identify untapped opportunities, and define clear, measurable KPIs. We then move into a strategic planning phase, building comprehensive digital roadmaps that align your technical assets with your overall business objectives. Whether you are a local SME in Sri Lanka looking to establish a stronghold or a global enterprise seeking to modernize your digital footprint, our solutions are tailored to deliver sustainable, long-term ROI.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Topical Authority & Content Excellence</h3>
                            <p className="text-gray-600 leading-relaxed">
                                In the era of AI-driven search, topical authority has become the primary currency of SEO. We help our clients dominate their niches by producing high-quality, long-form content that demonstrates expertise, experience, authoritativeness, and trustworthiness (E-E-A-T). Our content strategy is built around topic clusters, ensuring that every piece of information we publish reinforces your brand's position as an industry leader.
                            </p>
                        </div>
                        <div className="bg-slate-900 p-8 rounded-3xl border border-zinc-800 shadow-xl text-white">
                            <h3 className="text-2xl font-bold mb-4">Technical Performance & Core Web Vitals</h3>
                            <p className="text-zinc-400 leading-relaxed italic">
                                "Speed is no longer an option; it's a requirement for survival in the digital economy."
                            </p>
                            <p className="mt-4 text-zinc-300 leading-relaxed">
                                Every website we build is optimized for Google's Core Web Vitals from day one. By utilizing Next.js, we leverage server-side rendering (SSR), static site generation (SSG), and aggressive image optimization to ensure lightning-fast load times. This technical excellence not only provides a superior user experience but also serves as a critical ranking factor in organic search results. We don't settle for 'good enough'—we aim for peak performance in every line of code we write.
                            </p>
                        </div>
                    </motion.div>
                </div>

                <div className="mt-20 pt-20 border-t border-gray-100">
                    <div className="prose prose-lg max-w-none text-gray-600">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Commitment to Innovation and Transparency</h3>
                        <p>
                            Innovation is at the heart of everything we do at E Marketing Paradice. We are constantly experimenting with emerging technologies—from generative AI for content automation to advanced data visualization for marketing attribution—to give our clients a competitive edge. However, innovation without transparency is meaningless. That's why we pride ourselves on our clear communication, detailed reporting, and honest advice.
                        </p>
                        <p>
                            When you partner with us, you gain access to a team of dedicated professionals who are genuinely invested in your success. We don't just report on vanity metrics like 'likes' or 'impressions'; we focus on the numbers that actually move the needle for your business: conversion rates, cost per acquisition, and lifetime customer value. Our goal is to empower you with the tools, knowledge, and infrastructure you need to thrive in a digital-first world, ensuring that your marketing budget is always an investment, never just an expense.
                        </p>
                        <p>
                            From the final pixel of a branding project to the last line of a complex API integration, our attention to detail is unwavering. We believe that the difference between a good digital presence and a great one lies in the subtle nuances—the micro-interactions on a landing page, the semantic structure of a blog post, or the security headers on a server. By perfecting these details, we create digital experiences that don't just work; they inspire, engage, and convert.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
