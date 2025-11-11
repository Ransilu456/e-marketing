"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Smartphone,
  Layers,
  Cloud,
  Shield,
  Code,
  Rocket,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { mobileProjects } from "./projects";

const PRIMARY_COLOR = "#10b981";
const SECONDARY_COLOR = "#14b8a6";
const HEADING_COLOR = "#0f172a";
const TEXT_COLOR = "#374151";

export default function MobileAppsPage() {
  const features = [
    {
      icon: <Smartphone style={{ color: PRIMARY_COLOR }} size={32} />,
      title: "Cross-Platform Excellence",
      desc: "Seamless apps for Android and iOS built with Flutter and React Native.",
    },
    {
      icon: <Layers style={{ color: PRIMARY_COLOR }} size={32} />,
      title: "Modern UI/UX Design",
      desc: "Elegant and functional designs that captivate users and drive engagement.",
    },
    {
      icon: <Cloud style={{ color: PRIMARY_COLOR }} size={32} />,
      title: "Cloud Integration",
      desc: "Real-time syncing, scalable APIs, and seamless cloud data connections.",
    },
    {
      icon: <Shield style={{ color: PRIMARY_COLOR }} size={32} />,
      title: "Enterprise Security",
      desc: "Data encryption, secure authentication, and compliance-ready apps.",
    },
    {
      icon: <Code style={{ color: PRIMARY_COLOR }} size={32} />,
      title: "Clean, Efficient Code",
      desc: "Fast, maintainable, and scalable code for future-ready applications.",
    },
    {
      icon: <Rocket style={{ color: PRIMARY_COLOR }} size={32} />,
      title: "Launch & Maintenance",
      desc: "We handle deployment, updates, and post-launch optimization.",
    },
  ];

  return (
    <main
      className="min-h-screen"
      style={{
        background: `linear-gradient(to bottom right, #f9fafb, white, ${PRIMARY_COLOR}10)`,
        color: TEXT_COLOR,
      }}
    >
      {/* HERO SECTION */}
      <section className="relative px-6 md:px-16 pt-32 pb-24 max-w-7xl mx-auto">
        {/* Decorative Glow */}
        <div
          className="absolute top-20 right-10 w-80 h-80 rounded-full blur-3xl pointer-events-none"
          style={{ background: `${PRIMARY_COLOR}25` }}
        />
        <div
          className="absolute bottom-20 left-10 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{ background: `${SECONDARY_COLOR}20` }}
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
              <span>Mobile Development Experts</span>
            </div>

            <h1
              className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
              style={{ color: HEADING_COLOR }}
            >
              Building{" "}
              <span
                style={{
                  background: `linear-gradient(to right, ${PRIMARY_COLOR}, ${SECONDARY_COLOR})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Mobile Apps
              </span>{" "}
              That Define Categories
            </h1>

            <p className="text-gray-600 text-xl mb-10 max-w-xl mx-auto lg:mx-0">
              We transform ambitious ideas into high-performing mobile
              experiences that inspire users and scale businesses.
            </p>

            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 px-8 py-4 text-white rounded-full font-medium transition-all duration-300 hover:scale-105 group"
              style={{
                background: `linear-gradient(to right, ${PRIMARY_COLOR}, ${SECONDARY_COLOR})`,
                boxShadow: `0 8px 25px ${PRIMARY_COLOR}40`,
              }}
            >
              Start Your Project
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
                  background: `linear-gradient(to top right, ${PRIMARY_COLOR}40, ${SECONDARY_COLOR}30)`,
                }}
              />
              <div className="relative w-72 h-[580px] bg-white/30 backdrop-blur-2xl rounded-[3rem] border border-white/50 shadow-2xl flex items-center justify-center">
                <Smartphone size={120} className="text-emerald-500/30" />
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
              className="text-4xl lg:text-5xl mb-4 font-semibold"
              style={{ color: HEADING_COLOR }}
            >
              Our Mobile Development Advantage
            </h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              Cutting-edge technology meets exceptional design
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((item, i) => (
              <div
                key={i}
                className="group p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2"
                style={{
                  background: "rgba(255,255,255,0.7)",
                  border: `1px solid ${PRIMARY_COLOR}25`,
                  boxShadow: "0 8px 25px rgba(0,0,0,0.05)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                  style={{
                    background: `${PRIMARY_COLOR}15`,
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
            Featured Mobile Projects
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Real-world apps designed for performance and user delight
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {mobileProjects.map((app, i) => (
            <div
              key={i}
              className="group relative rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
              style={{
                background: "rgba(255,255,255,0.3)",
                border: "1px solid rgba(255,255,255,0.4)",
                boxShadow: "0 8px 40px rgba(0,0,0,0.06)",
                backdropFilter: "blur(16px) saturate(180%)",
              }}
            >
              {/* IMAGE */}
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={app.image}
                  alt={app.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-linear-to-t from-white/50 via-white/20 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-7 relative z-10">
                <h3 className="text-2xl font-semibold mb-3 text-gray-900 group-hover:text-emerald-600 transition-colors">
                  {app.title}
                </h3>
                <p className="text-gray-700/90 mb-6 leading-relaxed line-clamp-2">
                  {app.description}
                </p>

                <Link
                  href={`/services/mobile-apps/projects/${app.slug}`}
                  className="relative inline-flex items-center gap-2 font-semibold text-emerald-600 group transition-all duration-300"
                >
                  <span className="relative after:absolute after:-bottom-0.5 after:left-0 after:w-0 after:h-0.5 after:bg-emerald-500 after:transition-all after:duration-300 group-hover:after:w-full">
                    View Project
                  </span>
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </Link>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none bg-linear-to-br from-emerald-300/20 via-transparent to-teal-300/20 blur-md" />
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        className="relative overflow-hidden py-24 px-6 md:px-16 text-white"
        style={{
          background: `linear-gradient(to bottom right, ${PRIMARY_COLOR}, ${SECONDARY_COLOR})`,
        }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl lg:text-6xl mb-6 font-bold">
            Ready to Launch Your Vision?
          </h2>
          <p className="text-xl lg:text-2xl mb-12 opacity-90">
            Let’s build a stunning, feature-rich mobile app tailored to your
            business goals.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-emerald-600 rounded-full hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-xl group"
          >
            Request a Free Quote
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
