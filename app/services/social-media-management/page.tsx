"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ThumbsUp, BarChart3, Share2 } from "lucide-react";
import { portfolioProjects } from "./projects";

const PRIMARY_COLOR = "#4AEA45";
const SECONDARY_BG = "#f7f9fc";
const HEADING_COLOR = "#0f172a";
const TEXT_COLOR = "#1f2937";
const BRAND_NAME = "E Marketing Paradice";

const features = [
  {
    title: "Strategic Content Planning",
    desc: "Tailored content calendars designed to engage your audience and grow organically.",
    icon: ThumbsUp,
  },
  {
    title: "Data-Driven Campaigns",
    desc: "Ad strategies leveraging analytics to maximize ROI and track every impression.",
    icon: BarChart3,
  },
  {
    title: "Cross-Platform Presence",
    desc: "We manage your brand consistently across Facebook, TikTok, Instagram, and YouTube.",
    icon: Share2,
  },
];

export default function SocialMediaPage() {
  return (
    <main className="min-h-screen font-sans relative overflow-hidden bg-white text-[TEXT_COLOR]">

      {/* --- HERO --- */}
      <section className="relative px-6 md:px-16 pt-28 pb-36 lg:pt-36 lg:pb-48 flex flex-col-reverse md:flex-row items-center gap-16 max-w-7xl mx-auto">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-green-400/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-green-400/5 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center md:text-left z-10"
        >
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-[0f172a]">
            Social Media Management <br />
            <span className="text-[#4AEA45]">That Drives Results</span>
          </h1>
          <p className="text-gray-600 text-xl mb-10 leading-relaxed max-w-lg">
            At <span className="font-bold text-[#4AEA45]">{BRAND_NAME}</span>, we help businesses build their audience, boost engagement, and grow brand presence on every platform.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-4 px-10 py-4 bg-[#4AEA45] text-white rounded-full font-bold text-lg hover:bg-[#3ec93b] transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#4AEA45]/40 uppercase tracking-wide"
          >
            Let’s Grow Together
            <ArrowRight size={22} />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 flex justify-center mt-12 md:mt-0 relative z-10"
        >
          <div className="relative w-full max-w-lg aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1611605698335-8b1569810432?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080"
              alt="Social Media Management Illustration"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-3xl object-cover shadow-2xl border-4 border-white"
            />
          </div>
        </motion.div>
      </section>

      {/* --- FEATURES --- */}
      <section className="py-24 bg-[#f7f9fc] px-6 md:px-16">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[0f172a]">What We Deliver</h2>
          <p className="text-gray-600 text-xl">We handle everything — from strategy to execution — so your brand shines online.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-white p-10 rounded-3xl shadow-xl flex flex-col items-start gap-4 transition-all duration-300 border border-gray-100 hover:border-2 hover:border-[#4AEA45] hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="p-4 rounded-full bg-[#4AEA45]/10 text-[#4AEA45] mb-2">
                  <Icon size={30} strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-bold text-[0f172a]">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* --- PORTFOLIO / PROJECTS --- */}
      <section className="py-24 px-6 md:px-16 overflow-hidden relative max-w-7xl mx-auto">
        <div className="max-w-full mx-auto mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[0f172a]">Our Social Media Success Stories</h2>
          <p className="text-gray-600 text-xl">See how we’ve transformed brands with impactful campaigns.</p>
        </div>

        <div className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 md:-mx-16 px-6 md:px-16 scrollbar-hide">
          {portfolioProjects.map((project, i) => (
            <motion.div
              key={i}
              className="flex-none w-[320px] md:w-[380px] snap-center bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="relative h-64 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 90vw, 30vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col gap-3">
                <h3 className="text-2xl font-bold text-[0f172a]">{project.title}</h3>
                <p className="text-gray-600 leading-relaxed">{project.description}</p>
                <Link
                  href={`/services/social-media-management/projects/${project.slug}`}
                  className="mt-3 inline-flex items-center gap-2 text-[#4AEA45] font-semibold hover:gap-3 transition-all duration-300"
                >
                  View Project
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="bg-[#4AEA45] text-black py-24 px-6 md:px-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-black/10 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4 leading-snug text-white"
          >
            Ready to Take Your Brand Viral?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl mb-12 opacity-90 font-medium text-white"
          >
            Let’s create campaigns that connect, inspire, and convert.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#4AEA45] rounded-full font-bold text-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl shadow-black/20 uppercase tracking-widest"
            >
              Start the Conversation
              <ArrowRight size={22} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
