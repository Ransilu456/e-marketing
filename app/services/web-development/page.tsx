"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Zap,
  Monitor,
  Rocket,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { portfolioProjects } from "./projects";

export default function WebDevelopmentPage() {
  const features = [
    {
      icon: <Zap className="text-emerald-500" size={32} />,
      title: "Performance First",
      desc: "Optimized architecture and code for industry-leading speed scores and lightning-fast load times.",
    },
    {
      icon: <Monitor className="text-emerald-500" size={32} />,
      title: "Responsive by Design",
      desc: "Fluid layouts and adaptive visuals ensure perfect rendering across all screens and devices.",
    },
    {
      icon: <Rocket className="text-emerald-500" size={32} />,
      title: "SEO-Optimized",
      desc: "Built with the best on-page SEO and accessibility practices for high visibility and discoverability.",
    },
  ];

  return (
    <main className="min-h-screen bg-linear-to-br from-slate-50 via-white to-emerald-50/30 text-gray-800">
      {/* HERO SECTION */}
      <section className="relative px-6 md:px-16 pt-32 pb-24 max-w-7xl mx-auto">
        {/* Background Glows */}
        <div className="absolute top-20 right-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
          {/* --- LEFT CONTENT --- */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 rounded-full mb-6">
              <Sparkles className="text-emerald-600" size={18} />
              <span className="text-emerald-700">Web Development Experts</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Crafting{" "}
              <span className="bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Websites
              </span>{" "}
              That Drive Growth
            </h1>

            <p className="text-gray-600 text-xl mb-10 max-w-xl mx-auto lg:mx-0">
              At <span className="font-bold text-emerald-600">E Marketing Paradice</span>,
              we build high-performance, conversion-driven web experiences tailored to your business goals.
            </p>

            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-emerald-500 to-teal-500 text-white rounded-full hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105 group"
            >
              Get a Free Quote
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* --- RIGHT IMAGE --- */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-tr from-emerald-500/20 to-teal-500/20 rounded-3xl blur-2xl" />
              <div className="relative w-96 h-72 rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                <Image
                  src="https://images.unsplash.com/photo-1559028012-481c04fa702d?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080"
                  alt="Web Development"
                  fill
                  className="object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 px-6 md:px-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-4 font-semibold">
              Why Choose Our Development
            </h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              Excellence in every line of code, from concept to completion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((item, i) => (
              <div
                key={i}
                className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-emerald-500/30 hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl mb-3 font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4 font-semibold">
            Featured Projects
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Real websites built for performance, aesthetics, and scalability
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {portfolioProjects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
              className="group relative rounded-3xl overflow-hidden bg-white/30 backdrop-blur-xl border border-white/60 shadow-[0_8px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_10px_50px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-500"
            >
              {/* --- IMAGE --- */}
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-90 group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Soft white overlay for glass effect */}
                <div className="absolute inset-0 bg-linear-to-t from-white/80 via-white/20 to-transparent group-hover:opacity-100 transition-opacity" />

                {/* Floating Tag */}
                <div className="absolute top-4 left-4 bg-emerald-500/40 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md backdrop-blur-sm">
                  Project
                </div>
              </div>

              {/* --- CONTENT --- */}
              <div className="relative z-10 p-7">
                <h3 className="text-2xl font-semibold mb-3 text-gray-900 group-hover:text-emerald-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-700/90 mb-6 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                <Link
                  href={`/services/web-development/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 text-emerald-600 font-semibold group-hover:gap-3 transition-all duration-300"
                >
                  View Project
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>

              {/* --- Glass Glow Border --- */}
              <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-emerald-400/5 via-transparent to-emerald-300/10 opacity-0 group-hover:opacity-100 blur-md transition duration-500 pointer-events-none" />

              {/* --- Top Highlight --- */}
              <div className="absolute inset-x-0 top-0 h-[40%] bg-linear-to-b from-white/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-linear-to-br from-emerald-600 via-emerald-500 to-teal-500 text-white py-24 px-6 md:px-16">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6TTI0IDM0YzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6bTAtMTBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00ek0xMiAzNGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6bTAtMTBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-10" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl lg:text-6xl mb-6 font-bold">
            Ready to Build Something Exceptional?
          </h2>
          <p className="text-xl lg:text-2xl mb-12 text-emerald-50">
            Let’s collaborate to create a high-performance website that converts visitors into customers.
          </p>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-emerald-600 rounded-full hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-2xl group"
          >
            Start Your Project
            <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </main>
  );
}
