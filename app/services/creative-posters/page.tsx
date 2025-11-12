"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Layers,
  Cloud,
  Shield,
  Code,
  Rocket,
  ArrowRight,
  Sparkles,
  Zap,
} from "lucide-react";

import { motion } from "framer-motion";

import { posterProjects, Project } from "./projects"; 

const PRIMARY_ACCENT_COLOR = "#4AEA45"; 
const SECONDARY_ACCENT_COLOR = "#34C930"; // Slightly darker variant
const HEADING_COLOR = "#000000"; // Black
const TEXT_COLOR = "#374151"; // Gray

export default function MobileAppsPage() {
  const serviceFeatures = [
    {
      icon: <Layers style={{ color: PRIMARY_ACCENT_COLOR }} size={32} />,
      title: "High-Impact Concepts",
      desc: "Creative concept generation that grabs attention and delivers your core message instantly.",
    },
    {
      icon: <Code style={{ color: PRIMARY_ACCENT_COLOR }} size={32} />,
      title: "Print & Digital Ready",
      desc: "Perfectly optimized files for both high-resolution print (CMYK) and digital campaigns (RGB).",
    },
    {
      icon: <Cloud style={{ color: PRIMARY_ACCENT_COLOR }} size={32} />,
      title: "Brand Consistency",
      desc: "Designs are meticulously aligned with your existing brand guidelines, colors, and typography.",
    },
    {
      icon: <Shield style={{ color: PRIMARY_ACCENT_COLOR }} size={32} />,
      title: "Fast Turnaround",
      desc: "Efficient workflow ensuring quick delivery without compromising on creative quality or detail.",
    },
    {
      icon: <Sparkles style={{ color: PRIMARY_ACCENT_COLOR }} size={32} />,
      title: "Vector & Source Files",
      desc: "Receive fully scalable vector files (AI, EPS) and layered source files (PSD) for future use.",
    },
    {
      icon: <Rocket style={{ color: PRIMARY_ACCENT_COLOR }} size={32} />,
      title: "Unlimited Revisions",
      desc: "We work with you until the design perfectly captures your vision and marketing goal.",
    },
  ];

  return (
    <main
      className="min-h-screen"
      style={{
        background: `linear-gradient(to bottom right, #f9fafb, white, ${PRIMARY_ACCENT_COLOR}10)`,
        color: TEXT_COLOR,
      }}
    >
      {/* HERO SECTION */}
      <section className="relative px-6 md:px-16 pt-32 pb-24 max-w-7xl mx-auto">
        {/* Decorative Glow */}
        <div
          className="absolute top-20 right-10 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-25"
          style={{ background: `${PRIMARY_ACCENT_COLOR}50` }}
        />
        <div
          className="absolute bottom-20 left-10 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-20"
          style={{ background: `${SECONDARY_ACCENT_COLOR}50` }}
        />

        <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
          {/* --- LEFT (Text) --- */}
          <div className="flex-1 text-center lg:text-left">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                backgroundColor: `${PRIMARY_ACCENT_COLOR}15`,
                color: PRIMARY_ACCENT_COLOR,
              }}
            >
              <Zap size={18} />
              <span>Poster Design & Print Specialists</span>
            </div>

            <h1
              className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight"
              style={{ color: HEADING_COLOR }}
            >
              Building{" "}
              <span
                style={{
                  background: `linear-gradient(to right, ${PRIMARY_ACCENT_COLOR}, ${SECONDARY_ACCENT_COLOR})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Visual Campaigns
              </span>{" "}
              That Demand Attention
            </h1>

            <p className="text-gray-600 text-xl mb-10 max-w-xl mx-auto lg:mx-0">
              We transform ambitious ideas into high-impact posters and campaign
              materials that inspire audiences and drive engagement.
            </p>

            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 px-10 py-5 text-lg text-white rounded-full font-bold transition-all duration-300 hover:scale-[1.05] group"
              style={{
                background: `linear-gradient(to right, ${PRIMARY_ACCENT_COLOR}, ${SECONDARY_ACCENT_COLOR})`,
                boxShadow: `0 12px 30px ${PRIMARY_ACCENT_COLOR}50`,
              }}
            >
              Get a Design Consultation
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>

          <div className="flex-1 flex justify-center pt-10 lg:pt-0">
            <div className="relative w-96 h-96"> 
              <div 
                className="absolute inset-0 bg-white/30 backdrop-blur-2xl rounded-2xl border border-white/50 shadow-2xl flex items-center justify-center p-3"
                style={{
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
                }}
              >
                {posterProjects[0]?.image ? (
                    <div className="relative w-full h-full rounded-xl overflow-hidden bg-gray-100">
                        <Image
                            src={posterProjects[0].image}
                            alt="Poster design mockup"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                ) : (
                    <Layers size={120} style={{ color: `${PRIMARY_ACCENT_COLOR}30` }} />
                )}
              </div>
              
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-3xl bg-white p-4 shadow-xl rotate-6 group-hover:rotate-0 transition-transform duration-500"
                   style={{ border: `1px solid ${PRIMARY_ACCENT_COLOR}30` }}>
                <Sparkles size={36} style={{ color: PRIMARY_ACCENT_COLOR }} className="mb-2" />
                <p className="text-sm font-bold text-gray-800">Vector Quality</p>
                <p className="text-xs text-gray-500">Infinitely scalable designs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 px-6 md:px-16 bg-white/60 backdrop-blur-md border-t border-white/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-4xl lg:text-5xl mb-4 font-extrabold"
              style={{ color: HEADING_COLOR }}
            >
              The Creative Design Advantage
            </h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              Cutting-edge design thinking meets actionable marketing strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {serviceFeatures.map((item, i) => (
              <div
                key={i}
                className="group p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                style={{
                  background: "rgba(255,255,255,0.7)",
                  border: `1px solid ${PRIMARY_ACCENT_COLOR}25`,
                  boxShadow: "0 4px 15px rgba(0,0,0,0.04)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform"
                  style={{
                    background: `${PRIMARY_ACCENT_COLOR}15`,
                  }}
                >
                  {item.icon}
                </div>
                <h3
                  className="text-xl mb-3 font-bold"
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
      
      <section className="py-16 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto text-center border-y border-gray-200 py-10">
          <blockquote className="max-w-4xl mx-auto">
            <p className="text-2xl font-medium italic text-gray-700">
              “The poster campaign they designed for us was a massive success. The visuals were stunning, and our event attendance increased by 45% over the previous year.”
            </p>
            <footer className="mt-6 text-lg font-semibold text-gray-800">
              — Sarah Chen, Marketing Director at Urban Rhythms Festival
            </footer>
          </blockquote>
        </div>
      </section>

      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl lg:text-5xl mb-4 font-extrabold"
            style={{ color: HEADING_COLOR }}
          >
            Featured Creative Portfolio
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Diverse projects crafted for maximum visual impact across various industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posterProjects.map((project: Project, i: number) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
              style={{
                background: "rgba(255, 255, 255, 0.3)",
                border: `1px solid ${PRIMARY_ACCENT_COLOR}30`, 
                boxShadow: "0 8px 40px rgba(0, 0, 0, 0.06)",
                backdropFilter: "blur(16px) saturate(180%)",
                WebkitBackdropFilter: "blur(16px) saturate(180%)",
              }}
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-linear-to-t from-white/40 via-white/20 to-transparent" />
              </div>

              <div className="relative z-10 p-7">
                <h3
                  className="text-2xl font-semibold mb-3 transition-colors"
                  style={{ 
                      color: HEADING_COLOR, 
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = PRIMARY_ACCENT_COLOR)}
                  onMouseOut={(e) => (e.currentTarget.style.color = HEADING_COLOR)}
                >
                  {project.title}
                </h3>
                <p className="text-gray-700/90 mb-6 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="text-xs font-medium px-3 py-1 rounded-full border"
                            style={{ 
                                backgroundColor: `transparent`,
                                color: PRIMARY_ACCENT_COLOR, 
                                borderColor: `${PRIMARY_ACCENT_COLOR}50`
                            }}>
                            {tech}
                        </span>
                    ))}
                </div>
              </div>

              <div 
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none blur-md" 
                style={{ 
                    background: `linear-gradient(to bottom right, ${PRIMARY_ACCENT_COLOR}20, transparent, ${PRIMARY_ACCENT_COLOR}20)`
                }}
              />

              <div className="absolute inset-x-0 top-0 h-[35%] bg-linear-to-b from-white/60 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </section>

      <section
        className="relative overflow-hidden py-24 px-6 md:px-16 text-white"
        style={{
          background: `linear-gradient(to bottom right, ${PRIMARY_ACCENT_COLOR}, ${SECONDARY_ACCENT_COLOR})`,
        }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl lg:text-6xl mb-6 font-extrabold">
            Ready for a Stunning Campaign?
          </h2>
          <p className="text-xl lg:text-2xl mb-12 opacity-95">
            Let’s craft a custom poster design that captures your audience and elevates your brand.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-3 px-12 py-6 bg-white text-xl rounded-full hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-2xl group font-bold"
            style={{ color: PRIMARY_ACCENT_COLOR }}
          >
            Request a Free Consultation
            <ArrowRight
              size={24}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}