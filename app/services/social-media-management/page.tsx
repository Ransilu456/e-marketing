"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Zap, Monitor, Rocket, ArrowRight, Sparkles } from "lucide-react";
import { portfolioProjects, Project } from "./projects";

const PRIMARY_COLOR = "#4AEA45"; 
const SECONDARY_BG = "#f7f9fc"; 
const TEXT_COLOR = "#1f2937";
const HEADING_COLOR = "#0f172a";

export default function SocialMediaManagementPage() {
  const features = [
    {
      icon: <Zap style={{ color: PRIMARY_COLOR }} size={32} />,
      title: "Content Strategy",
      desc: "Tailored content plans that resonate with your audience and boost engagement.",
    },
    {
      icon: <Monitor style={{ color: PRIMARY_COLOR }} size={32} />,
      title: "Multi-Platform Management",
      desc: "Seamless posting and engagement across Instagram, Facebook, LinkedIn, TikTok, and more.",
    },
    {
      icon: <Rocket style={{ color: PRIMARY_COLOR }} size={32} />,
      title: "Analytics & Growth",
      desc: "Data-driven insights and campaigns to grow followers, clicks, and conversions.",
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
        <div
          className="absolute top-20 right-10 w-80 h-80 rounded-full blur-3xl pointer-events-none"
          style={{ background: `${PRIMARY_COLOR}25` }}
        />
        <div
          className="absolute bottom-20 left-10 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{ background: "#6ee7b725" }}
        />

        <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
          {/* LEFT */}
          <div className="flex-1 text-center lg:text-left">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ backgroundColor: `${PRIMARY_COLOR}15`, color: PRIMARY_COLOR }}
            >
              <Sparkles size={18} />
              <span>Social Media Experts</span>
            </div>

            <h1
              className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
              style={{ color: HEADING_COLOR }}
            >
              Driving Engagement with{" "}
              <span
                style={{
                  background: `linear-gradient(to right, ${PRIMARY_COLOR}, #10b981)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Social Media
              </span>{" "}
              That Converts
            </h1>

            <p className="text-lg mb-10 max-w-xl mx-auto lg:mx-0 text-gray-600">
              At{" "}
              <span className="font-bold" style={{ color: PRIMARY_COLOR }}>
                E Marketing Paradice
              </span>
              , we craft content and campaigns that grow your brand’s online presence
              and engagement across all platforms.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 text-white rounded-full font-medium transition-all duration-300 hover:scale-105 group"
              style={{
                background: `linear-gradient(to right, ${PRIMARY_COLOR}, #10b981)`,
                boxShadow: `0 8px 25px ${PRIMARY_COLOR}40`,
              }}
            >
              Get a Free Quote
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* RIGHT HERO IMAGE */}
          <div className="flex-1 flex justify-center -mt-24">
            <div className="relative w-[700px] h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-white/30">
              <Image
                src="/data/social-bg.jpg"
                alt="Social Media Management"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <hr className="border-gray-100/50 max-w-7xl mx-auto" />

      {/* FEATURES */}
      <section className="py-24 px-6 md:px-16" style={{ background: SECONDARY_BG }}>
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4 font-semibold" style={{ color: HEADING_COLOR }}>
            Why Choose Our Social Media Management
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Excellence in strategy, content, and growth for your social platforms
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
                style={{ background: `${PRIMARY_COLOR}20` }}
              >
                {item.icon}
              </div>
              <h3 className="text-xl mb-3 font-semibold" style={{ color: HEADING_COLOR }}>
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4 font-semibold" style={{ color: HEADING_COLOR }}>
            Featured Campaigns
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Real social media campaigns that grew engagement and conversions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {portfolioProjects.map((project: Project, i: number) => (
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
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>

              <div className="relative z-10 p-7">
                <h3 className="text-2xl font-semibold mb-3 text-gray-900 transition-colors" style={{ color: HEADING_COLOR }}>
                  {project.title}
                </h3>
                <p className="text-gray-700/90 mb-6 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                <Link
                  href={`/services/social-media-management/projects/${project.slug}`}
                  className={`relative inline-flex items-center gap-2 font-semibold group transition-all duration-300`}
                  style={{ color: PRIMARY_COLOR }}
                >
                  <span
                    className="relative after:absolute after:-bottom-0.5 after:left-0 after:w-0 after:h-0.5 after:transition-all after:duration-300 group-hover:after:w-full"
                  >
                    View Project
                  </span>
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative overflow-hidden py-24 px-6 md:px-16 text-white"
        style={{ background: `linear-gradient(to bottom right, ${PRIMARY_COLOR}, #10b981)` }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl lg:text-6xl mb-6 font-bold">
            Ready to Amplify Your Social Presence?
          </h2>
          <p className="text-xl lg:text-2xl mb-12 opacity-90">
            Let’s create engaging campaigns that grow your brand and connect with your audience.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white rounded-full hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-xl group"
            style={{ color: PRIMARY_COLOR }}
          >
            Start Your Campaign
            <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </main>
  );
}
