"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Zap, Monitor, Rocket, ArrowRight, Sparkles } from "lucide-react";
import { portfolioProjects } from "./projects"; 

const PRIMARY_COLOR = "#4AEA45";
const SECONDARY_BG = "#f7f9fc";
const TEXT_COLOR = "#1f2937";
const HEADING_COLOR = "#0f172a";

export default function WebDevelopmentPage() {
  const features = [
    {
      icon: <Zap style={{ color: PRIMARY_COLOR }} size={32} />,
      title: "Performance First",
      desc: "Optimized architecture and code for industry-leading speed scores and lightning-fast load times.",
    },
    {
      icon: <Monitor style={{ color: PRIMARY_COLOR }} size={32} />,
      title: "Responsive by Design",
      desc: "Fluid layouts and adaptive visuals ensure perfect rendering across all screens and devices.",
    },
    {
      icon: <Rocket style={{ color: PRIMARY_COLOR }} size={32} />,
      title: "SEO-Optimized",
      desc: "Built with the best on-page SEO and accessibility practices for high visibility and discoverability.",
    },
  ];

  return (
    <main
      className="min-h-screen"
      style={{
        background: `linear-gradient(to bottom right, ${SECONDARY_BG}, white, ${PRIMARY_COLOR}15)`,
        color: TEXT_COLOR,
      }}
    >
      {/* HERO SECTION */}
      <section className="relative px-6 md:px-16 pt-32 pb-24 max-w-7xl mx-auto">
        {/* Glows */}
        <div
          className="absolute top-20 right-10 w-80 h-80 rounded-full blur-3xl pointer-events-none"
          style={{ background: `${PRIMARY_COLOR}25` }}
        />
        <div
          className="absolute bottom-20 left-10 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{ background: "#6ee7b725" }}
        />

        <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
          {/* --- LEFT --- */}
          <div className="flex-1 text-center lg:text-left">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                backgroundColor: `${PRIMARY_COLOR}15`,
                color: PRIMARY_COLOR,
              }}
            >
              <Sparkles size={18} />
              <span>Web Development Experts</span>
            </div>

            <h1
              className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
              style={{ color: HEADING_COLOR }}
            >
              Crafting{" "}
              <span
                style={{
                  background: `linear-gradient(to right, ${PRIMARY_COLOR}, #10b981)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Websites
              </span>{" "}
              That Drive Growth
            </h1>

            <p className="text-lg mb-10 max-w-xl mx-auto lg:mx-0 text-gray-600">
              At{" "}
              <span className="font-bold" style={{ color: PRIMARY_COLOR }}>
                E Marketing Paradice
              </span>
              , we build high-performance, conversion-driven web experiences
              tailored to your business goals.
            </p>

            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 px-8 py-4 text-white rounded-full font-medium transition-all duration-300 hover:scale-105 group"
              style={{
                background: `linear-gradient(to right, ${PRIMARY_COLOR}, #10b981)`,
                boxShadow: `0 8px 25px ${PRIMARY_COLOR}40`,
              }}
            >
              Get a Free Quote
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>

          {/* --- RIGHT --- */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div
                className="absolute inset-0 rounded-3xl blur-2xl"
                style={{
                  background: `linear-gradient(to top right, ${PRIMARY_COLOR}40, #10b98130)`,
                }}
              />
              <div className="relative w-96 h-72 rounded-3xl overflow-hidden shadow-2xl border border-white/30">
                <Image
                  src="https://images.unsplash.com/photo-1559028012-481c04fa702d?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080"
                  alt="Web Development"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 px-6 md:px-16" style={{ background: SECONDARY_BG }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-4xl lg:text-5xl mb-4 font-semibold"
              style={{ color: HEADING_COLOR }}
            >
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
                className="group p-8 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2 border backdrop-blur-sm"
                style={{
                  background: "rgba(255,255,255,0.8)",
                  borderColor: `${PRIMARY_COLOR}30`,
                  boxShadow: "0 8px 25px rgba(0,0,0,0.05)",
                }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                  style={{
                    background: `${PRIMARY_COLOR}20`,
                  }}
                >
                  {item.icon}
                </div>
                <h3
                  className="text-xl mb-3 font-semibold"
                  style={{ color: HEADING_COLOR }}
                >
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
          <h2
            className="text-4xl lg:text-5xl mb-4 font-semibold"
            style={{ color: HEADING_COLOR }}
          >
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
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
              style={{
                background: "rgba(255, 255, 255, 0.3)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                boxShadow: "0 8px 40px rgba(0, 0, 0, 0.06)",
                backdropFilter: "blur(16px) saturate(180%)",
                WebkitBackdropFilter: "blur(16px) saturate(180%)",
              }}
            >
              {/* --- IMAGE --- */}
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-linear-to-t from-white/40 via-white/20 to-transparent" />
              </div>

              {/* --- CONTENT --- */}
              <div className="relative z-10 p-7">
                <h3
                  className={`text-2xl font-semibold mb-3 text-gray-900 group-hover:text-[${PRIMARY_COLOR}] transition-colors`}
                >
                  {project.title}
                </h3>
                <p className="text-gray-700/90 mb-6 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                <Link
                  href={`/services/web-development/projects/${project.slug}`}
                  className={`relative inline-flex items-center gap-2 font-semibold text-[${PRIMARY_COLOR}] group transition-all duration-300`}
                >
                  <span
                    className={`relative after:absolute after:-bottom-0.5 after:left-0 after:w-0 after:h-0.5 after:bg-[${PRIMARY_COLOR}] after:transition-all after:duration-300 group-hover:after:w-full`}
                  >
                    View Project
                  </span>
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </Link>
              </div>

              {/* --- GLASS HIGHLIGHT BORDER --- */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none bg-linear-to-br from-emerald-300/20 via-transparent to-emerald-400/20 blur-md" />

              {/* --- SUBTLE TOP LIGHT --- */}
              <div className="absolute inset-x-0 top-0 h-[35%] bg-linear-to-b from-white/60 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative overflow-hidden py-24 px-6 md:px-16 text-white"
        style={{
          background: `linear-gradient(to bottom right, ${PRIMARY_COLOR}, #10b981)`,
        }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl lg:text-6xl mb-6 font-bold">
            Ready to Build Something Exceptional?
          </h2>
          <p className="text-xl lg:text-2xl mb-12 opacity-90">
            Let’s collaborate to create a high-performance website that converts
            visitors into customers.
          </p>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white rounded-full hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-xl group"
            style={{ color: PRIMARY_COLOR }}
          >
            Start Your Project
            <ArrowRight
              size={22}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}