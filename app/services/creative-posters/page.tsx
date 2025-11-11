"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap, Palette, Target, ImageIcon, Feather } from "lucide-react";
import { posterProjects } from "./projects";


const features = [
  {
    title: "High-Impact Visuals",
    desc: "Designs crafted to immediately capture attention in crowded feeds or on the street.",
    icon: Zap,
  },
  {
    title: "Brand Harmony",
    desc: "Posters that seamlessly integrate with your existing brand identity and messaging.",
    icon: Palette,
  },
  {
    title: "Print & Digital Ready",
    desc: "Optimized files delivered in all necessary formats (RGB/CMYK) for any platform.",
    icon: ImageIcon,
  },
  {
    title: "Conversion Focused",
    desc: "Strategic placement of CTAs and information to drive specific user actions.",
    icon: Target,
  },
];

const useCases = [
  "Event Posters",
  "Product Launches",
  "Social Media Ads",
  "Print Campaigns",
  "Infographics",
  "Flyers & Leaflets",
];

export default function CreativePostersPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800" style={{ fontFamily: "Poppins, sans-serif" }}>

      {/* --- Hero Section --- */}
      <section className="relative px-6 md:px-16 py-28 lg:py-40 text-center overflow-hidden">
        <div className="absolute -top-16 -left-16 w-60 h-60 bg-green-400/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-16 -right-16 w-60 h-60 bg-green-400/10 rounded-full blur-3xl pointer-events-none"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-[0f172a]">
            Creative Poster <br />
            <span className="text-[#4AEA45]">Designs That Get Noticed</span>
          </h1>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto mb-10">
            Transforming your message into attention-grabbing visuals perfect for events, promotions, and digital campaigns.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-3 px-10 py-4 text-lg font-bold text-white bg-[#4AEA45] rounded-full hover:bg-[#3ec93b] transition-all duration-300 shadow-xl uppercase tracking-wider"
          >
            Start Your Poster Project
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>

      {/* --- Features Section --- */}
      <section className="py-20 px-6 md:px-16 bg-[#f8fafc] border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[0f172a]">
            Why Choose Our Poster Design?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-lg flex items-start space-x-5 hover:shadow-2xl transition-all border border-gray-100"
                >
                  <div className="p-3 rounded-full bg-[#4AEA45] text-white shrink-0">
                    <Icon size={24} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[0f172a]">{feature.title}</h3>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- Project Showcase --- */}
      <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[0f172a]">
          Poster Projects We&apos;ve Designed
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posterProjects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[0f172a]">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                <div className="mb-2">
                  <h4 className="font-semibold text-gray-800 mb-1">Features:</h4>
                  <ul className="list-disc list-inside text-gray-600 text-sm">
                    {project.features.map((f, idx) => <li key={idx}>{f}</li>)}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="px-2 py-1 bg-[#4AEA45]/10 text-[#4AEA45] text-xs rounded-full font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Use Cases Section --- */}
      <section className="py-20 px-6 md:px-16 bg-[#f8fafc]">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[0f172a]">
          Posters for Every Purpose
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 bg-white rounded-xl shadow hover:shadow-2xl border border-gray-100 text-center transition-all"
            >
              <Feather size={36} className="mx-auto mb-3 text-[#4AEA45]" />
              <p className="font-semibold text-lg text-gray-700">{item}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Final CTA --- */}
      <section className="bg-[#4AEA45] text-white py-16 px-6 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Ready for a Visual Masterpiece?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl mb-8 opacity-90"
          >
            Tell us about your campaign, and we&apos;ll handle the stunning design.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 px-10 py-4 bg-white text-[#4AEA45] rounded-full font-bold text-xl hover:bg-gray-100 transition-all duration-300 shadow-xl shadow-black/20"
            >
              Request a Design
              <ArrowRight size={22} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
