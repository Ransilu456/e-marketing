import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Smartphone,
  Zap,
  Code,
  Layers,
  CheckCircle2,
  ArrowRight,
  Code2,
  Database,
  Server,
  Cpu,
  Map,
  Cpu as CpuAlt,
} from "lucide-react";

import { mobileProjects } from "../../projects";
import RevealInitClient from "./RevealInitClient";

export async function generateStaticParams() {
  return mobileProjects.map((p) => ({ slug: p.slug }));
}

const getTechIcon = (tech: string) => {
  const t = tech.toLowerCase();
  if (t.includes("flutter")) return <Smartphone className="w-4 h-4" />;
  if (t.includes("react")) return <Code className="w-4 h-4" />;
  if (t.includes("react native")) return <Code className="w-4 h-4" />;
  if (t.includes("firebase")) return <Database className="w-4 h-4" />;
  if (t.includes("node")) return <Server className="w-4 h-4" />;
  if (t.includes("express")) return <Server className="w-4 h-4" />;
  if (t.includes("stripe")) return <Zap className="w-4 h-4" />;
  if (t.includes("mongo") || t.includes("mongodb")) return <Database className="w-4 h-4" />;
  if (t.includes("google maps") || t.includes("maps")) return <Map className="w-4 h-4" />;
  if (t.includes("tensorflow") || t.includes("tflite")) return <CpuAlt className="w-4 h-4" />;
  if (t.includes("github") || t.includes("tflite")) return <CpuAlt className="w-4 h-4" />;
  return <Code2 className="w-4 h-4" />;
};

<RevealInitClient />

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = mobileProjects.find((p) => p.slug === slug);

  if (!project) return notFound();


  const currentIndex = mobileProjects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? mobileProjects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < mobileProjects.length - 1
      ? mobileProjects[currentIndex + 1]
      : null;

  const projectDetails = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Cross-Platform",
      description: "Built for seamless native performance on both iOS and Android.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-Time Sync",
      description: "Implemented instant data syncing using cloud technologies.",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Secure Architecture",
      description: "Robust data protection and authentication protocols applied.",
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Intuitive UI/UX",
      description: "Designed following mobile design guidelines for ease of use.",
    },
  ];

  return (
    <>
      <RevealInitClient />

      <main className="min-h-screen bg-white antialiased selection:bg-red-600 selection:text-white ">

        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-100/40 rounded-full blur-[100px] -z-10 pointer-events-none "></div>
        <main className="pt-24 relative bg-grid overflow-hidden ">
          <section className="px-6 md:px-16 pb-16 max-w-7xl mx-auto">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4 reveal-up">
                <Link
                  href="/services/mobile-apps"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-red-600 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Mobile Apps
                </Link>

                <div className="flex items-center gap-3">
                  {prevProject && (
                    <Link
                      href={`/services/mobile-apps/projects/${prevProject.slug}`}
                      className="group flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200 bg-white text-xs font-medium text-neutral-600 hover:border-red-600 hover:text-red-600 transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Prev
                    </Link>
                  )}

                  {nextProject && (
                    <Link
                      href={`/services/mobile-apps/projects/${nextProject.slug}`}
                      className="group flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200 bg-white text-xs font-medium text-neutral-600 hover:border-red-600 hover:text-red-600 transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                      Next
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>

              <div className="mb-14 reveal-up delay-100">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-200 bg-red-50 text-red-600 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Mobile App Case Study</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold text-neutral-900 mb-6 tracking-tight leading-[1.05]">
                  {project.title}
                </h1>

                <p className="text-xl text-neutral-500 leading-relaxed max-w-2xl font-normal">
                  {project.description}
                </p>
              </div>
              <div className="relative w-full aspect-video rounded-3xl overflow-hidden bg-white/50 border border-neutral-300/40 reveal-up">
                <div className="absolute inset-0 flex items-center justify-center">

                  {/* Phone */}
                  <div
                    className="
        relative
        aspect-1/2
        w-[40%]
        max-w-[280px]
        min-w-[140px]
        rounded-[42px]
        overflow-hidden
        shadow-[0_20px_60px_-10px_rgba(0,0,0,0.25)]
        border-[6px]
        border-neutral-900
        bg-neutral-900
        transition-all
        duration-700
        ease-out
        sm:hover:scale-105
        sm:hover:-rotate-1
      "
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="
          (min-width: 1280px) 280px,
          (min-width: 768px) 220px,
          160px
        "
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="px-6 md:px-16 py-20 bg-white border-y border-neutral-100">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-semibold mb-12 text-neutral-900 tracking-tight text-center md:text-left">
                Mobile App Highlights
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {projectDetails.map((detail, i) => (
                  <div
                    key={i}
                    className="group p-6 rounded-2xl border border-neutral-200 bg-neutral-50/50 hover:bg-white hover:border-red-200 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/5 reveal-up"
                  >
                    <div className="mb-5 w-12 h-12 flex items-center justify-center rounded-xl bg-linear-to-br from-red-500 to-red-600 text-white shadow-lg shadow-red-500/20 group-hover:scale-110 transition-transform duration-300">
                      {detail.icon}
                    </div>
                    <h3 className="text-base font-semibold mb-2 text-neutral-900">{detail.title}</h3>
                    <p className="text-sm text-neutral-500 leading-relaxed">{detail.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="px-6 md:px-16 py-24 max-w-7xl mx-auto bg-white ">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
              {/* Features */}
              <div className="lg:col-span-2 reveal-up">
                <h2 className="text-3xl font-semibold mb-8 text-neutral-900 tracking-tight">Key Mobile App Features</h2>

                <div className="flex flex-col gap-6">
                  {project.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 p-4 rounded-xl bg-red-200/5 border border-red-700/10 hover:bg-red-400/10 hover:border-red-700/50"
                    >
                      <CheckCircle2 className="w-6 h-6 text-red-600 mt-0.5 shrink-0" />
                      <div>
                        <h4 className="text-lg font-medium text-neutral-900 mb-1">{feature.split("\n")[0]}</h4>
                        <p className="text-neutral-500 leading-relaxed">{feature}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech stack card */}
              <div className="lg:col-span-1 reveal-up delay-200">
                <div className="bg-white rounded-2xl p-8 border border-neutral-200 hover:shadow-[0_10px_30px_rgba(250,38,38,0.05),0_4px_10px_rgba(220,38,38,0.05)] sticky top-24">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-900 mb-6 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-red-600" />
                    Technology Used
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold ${tech.toLowerCase().includes("flutter") || tech.toLowerCase().includes("react") ? "bg-red-50 text-red-700 border border-red-100" : "bg-neutral-100 text-neutral-700 border border-neutral-200"
                          }`}
                      >
                        {getTechIcon(tech)}
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-neutral-100">
                    <h4 className="text-xs font-semibold text-neutral-500 uppercase mb-3">Deliverables</h4>
                    <ul className="space-y-2 text-sm text-neutral-700">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-600" />
                        iOS App Store Build
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-600" />
                        Android Play Store Build
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-600" />
                        Admin Dashboard
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-24 px-6 relative overflow-hidden bg-neutral-50 border-t border-neutral-200">
            <div className="max-w-4xl mx-auto text-center relative z-10 reveal-up">
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-6">Ready to Build Your App?</h3>
              <p className="text-lg text-neutral-500 mb-10 max-w-2xl mx-auto font-normal leading-relaxed">
                Let&apos;s discuss how we can bring features like those in <b>FitPulse</b>—or an entirely new mobile vision—to life for your business.
              </p>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 h-14 px-10 rounded-full bg-red-600 text-white text-base font-semibold hover:bg-red-700 transition-all duration-300 hover:scale-105 shadow-xl shadow-red-600/20"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </section>
        </main>
      </main>
    </>
  );
}
