"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Smartphone,
  Layers,
  Shield,
  Code,
  Rocket,
  ChartBar,
  ArrowUpRight,
  Zap,
} from "lucide-react";
import { mobileProjects } from "./projects";
import CTA from "@/components/ui/CTA";

const features = [
  {
    icon: <Smartphone size={22} />,
    title: "Cross-Platform Excellence",
    desc: "Single codebase efficiency with React Native and Flutter without compromising the native feel.",
  },
  {
    icon: <Layers size={22} />,
    title: "Modern UI/UX Design",
    desc: "Scalable UI component libraries ensuring consistency across iOS, Android, and Web.",
  },
  {
    icon: <Shield size={22} />,
    title: "Enterprise Security",
    desc: "Biometric auth, encrypted local storage, and secure API communication standards.",
  },
  {
    icon: <Code size={22} />,
    title: "Clean, Efficient Code",
    desc: "Optimized rendering engines, 60fps animations, and sub-second load times.",
  },
  {
    icon: <Rocket size={22} />,
    title: "Offline First",
    desc: "Robust data synchronization allowing full app functionality even without internet connection.",
  },
  {
    icon: <ChartBar size={22} />,
    title: "Analytics & Growth",
    desc: "Integrated tracking and attribution tools to measure user engagement and ROI.",
  }

];


function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-grid mask-[linear-gradient(to_bottom,white,transparent)]"></div>
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-red-100/40 rounded-full blur-[100px] opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          <div className="flex-1 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs font-medium mb-8 animate-fade-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              Accepting new enterprise projects
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tighter-custom text-gray-900 leading-[1.1] mb-8 animate-fade-up delay-100">
              Crafting world-className <br />
              <span className="text-gradient">mobile experiences.</span>
            </h1>

            <p className="text-xl text-gray-500 leading-relaxed mb-10 max-w-lg animate-fade-up delay-200">
              We build high-performance iOS and Android applications for fast-growing startups and visionary enterprises.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-fade-up delay-300">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white transition-all bg-red-600 rounded-full hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/20 active:scale-95">
                Start Project
                <i data-lucide="arrow-right" className="w-4 h-4 ml-2"></i>
              </Link>
              <Link href="/case-studies" className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-gray-600 transition-all bg-white border border-gray-200 rounded-full hover:bg-gray-50 hover:border-gray-300">
                View Case Studies
              </Link>
            </div>
          </div>

          <div className="flex-1 w-full flex justify-center lg:justify-end animate-fade-up delay-200">
            <div className="relative w-[300px] h-[600px] bg-gray-900 rounded-[3rem] border-8 border-gray-900 shadow-2xl overflow-hidden ring-1 ring-gray-900/10">
              <div className="absolute inset-0 bg-white flex flex-col">
                <div className="h-14 bg-white border-b border-gray-100 flex items-center justify-between px-6 pt-2">
                  <div className="w-4 h-4 rounded-full bg-gray-100"></div>
                  <div className="w-20 h-2 rounded-full bg-gray-100"></div>
                </div>
                <div className="p-6 space-y-6 flex-1 bg-gray-50/50">
                  <div className="w-full aspect-video rounded-2xl bg-linear-to-br from-red-500 to-red-600 shadow-lg shadow-red-500/20"></div>
                  <div className="space-y-3">
                    <div className="h-4 w-3/4 rounded bg-gray-200"></div>
                    <div className="h-4 w-1/2 rounded bg-gray-200"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="aspect-square rounded-2xl bg-white border border-gray-100 shadow-sm"></div>
                    <div className="aspect-square rounded-2xl bg-white border border-gray-100 shadow-sm"></div>
                  </div>
                </div>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[90%] bg-white/90 backdrop-blur-md border border-gray-200/50 p-4 rounded-2xl shadow-xl flex items-center justify-between">
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center">
                      <Zap className="w-5 h-5"/>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-900">Performance</div>
                      <div className="text-[10px] text-gray-500">99.9% uptime</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
            Engineering precision meets <br />
            <span className="text-gray-400">user-centric design.</span>
          </h2>
          <p className="text-lg text-gray-500">We don&apos;t just write code; we architect scalable mobile ecosystems tailored to your business goals.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, i) => (
            <div key={i} className="group p-8 rounded-2xl border border-gray-200 bg-white hover:border-red-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-red-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="work" className="py-24 max-w-7xl mx-auto px-6">
      <div className="container mx-auto px-4 py-12">
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-gray-900 mb-14 border-b-4 border-red-600 inline-block pr-8 pb-2">
          Mobile Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {mobileProjects.map((project, i) => (
            <div
              key={i}
              className="group rounded-2xl overflow-hidden bg-white border border-gray-100
              shadow-md hover:shadow-2xl hover:shadow-red-500/10
              transition-all duration-500 hover:-translate-y-2"
            >
              <Link href={project.link} className="block">
                {/* Image Container */}
                <div className="relative aspect-9/16 w-full bg-gray-100">
                  {/* Mobile Frame */}
                  <div className="absolute inset-0 p-3">
                    <div className="relative h-full w-full rounded-xl overflow-hidden bg-black">
                      <Image
                        src={project.image}
                        width={504}
                        height={1104}
                        alt={project.description}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        priority={i < 3}
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-linear-to-t from-black/25 to-transparent" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 leading-tight mb-3 group-hover:text-red-600 transition-colors">
                        {project.title}
                      </h3>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech, j) => (
                          <span
                            key={j}
                            className="text-[11px] font-semibold text-red-700 bg-red-50 border border-red-100 px-3 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}

                        {project.technologies.length > 3 && (
                          <span className="text-[11px] font-semibold text-gray-500 bg-gray-100 border border-gray-200 px-3 py-1 rounded-full">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* CTA Icon */}
                    <div className="shrink-0">
                      <div
                        className="w-11 h-11 rounded-full bg-white shadow-sm
                        flex items-center justify-center text-red-600
                        transition-all duration-300
                        group-hover:bg-red-600 group-hover:text-white"
                      >
                        <ArrowUpRight className="w-5 h-5 transform group-hover:rotate-45 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default function page() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Projects />

      <CTA/>
    </main>
  );
}
