"use client";

import { useEffect } from "react";
import {
  Sparkles,
  ArrowRight,
  Zap,
  Monitor,
  Rocket,
  Twitter,
  Github,
  Linkedin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { portfolioProjects } from "./projects";

export default function Home() {
  useEffect(() => {

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          obs.unobserve(entry.target);
        }
      });
    });

    document.querySelectorAll(".reveal-up").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative min-h-screen pt-10">
      {/* Ambient Background */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-50 rounded-full blur-[120px] pointer-events-none -z-10 opacity-60"></div>
      <div className="absolute top-0 inset-x-0 h-[600px] bg-grid pointer-events-none -z-10"></div>

      {/* HERO SECTION */}
      <section className="relative px-6 md:px-16 pt-20 pb-24 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
          {/* Left Text */}
          <div className="flex-1 text-center lg:text-left reveal-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-8 border border-indigo-200 bg-indigo-50 text-indigo-700 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span className="text-xs font-semibold uppercase tracking-wide">
                Web Development Experts
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-semibold mb-6 tracking-tight leading-[1.1] text-neutral-900">
              Crafting{" "}
              <span className="relative inline-block px-2">
                <span className="relative z-10 text-transparent bg-clip-text bg-linear-to-r from-indigo-600 via-purple-600 to-indigo-600 animate-gradient">
                  Websites
                </span>
                <span className="absolute inset-0 bg-indigo-100/50 -skew-y-2 rounded-lg z-0 blur-sm mix-blend-multiply"></span>
              </span>
              <br className="hidden lg:block" />
              That Drive Growth
            </h1>

            <p className="text-lg mb-10 max-w-xl mx-auto lg:mx-0 text-neutral-500 leading-relaxed">
              At <span className="text-neutral-900 font-medium">E Marketing Paradice</span>,
              we fuse engineering precision with aesthetic excellence to build
              high-performance web experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="group h-11 px-8 rounded-full bg-neutral-900 text-white text-sm font-medium flex items-center justify-center gap-2 hover:bg-neutral-800 transition shadow-lg"
              >
                Start Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </a>

              <a
                href="#work"
                className="h-11 px-8 rounded-full border border-neutral-200 bg-white text-neutral-700 text-sm font-medium flex items-center justify-center hover:bg-neutral-50 shadow-sm transition"
              >
                View Portfolio
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 w-full flex justify-center lg:justify-end reveal-up delay-200">
            <div className="relative w-full max-w-lg aspect-4/3 group perspective-1000">
              <div className="absolute -inset-4 bg-linear-to-tr from-indigo-200 via-purple-200 to-transparent rounded-4xl blur-3xl opacity-60 group-hover:opacity-80 transition duration-700"></div>

              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-neutral-200 shadow-2xl bg-white group-hover:rotate-y-2 group-hover:rotate-x-2 transition duration-700 ease-out transform-style-3d">
                {/* Window Bar */}
                <div className="absolute top-0 inset-x-0 h-8 bg-white/80 backdrop-blur-md border-b border-neutral-100 flex items-center px-4 gap-1.5 z-20">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>

                <Image
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
                  alt="Code and Design"
                  width={400}
                  height={1000}
                  className="object-cover w-full h-full opacity-90 group-hover:scale-105 transition duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-32 border-t border-neutral-100 bg-neutral-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-20 reveal-up">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-neutral-900 mb-4">
              Why Choose Our <br />
              <span className="text-neutral-400">Development Stack.</span>
            </h2>
            <p className="text-lg text-neutral-500">
              Excellence in every line of code. We engineer digital assets that scale.
            </p>
          </div>

          {/* 3 Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Zap className="w-6 h-6" />}
              color="indigo"
              title="Performance First"
              desc="Optimized architecture using Next.js and static generation for top-tier Core Web Vitals."
              delay="delay-100"
            />

            <FeatureCard
              icon={<Monitor className="w-6 h-6" />}
              color="purple"
              title="Responsive by Design"
              desc="Fluid Tailwind layouts that look flawless on all devices."
              delay="delay-200"
            />

            <FeatureCard
              icon={<Rocket className="w-6 h-6" />}
              color="emerald"
              title="SEO-Optimized"
              desc="Semantic HTML, proper meta tags & full accessibility compliance."
              delay="delay-300"
            />
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <ProjectsSection />

      {/* CTA */}
      <section
        id="contact"
        className="py-32 relative overflow-hidden border-t border-neutral-200 bg-neutral-50"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-linear-to-r from-indigo-200/40 via-purple-200/40 to-indigo-200/40 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center reveal-up">
          <h2 className="text-4xl md:text-6xl font-semibold text-neutral-900 mb-8">
            Ready to craft your vision?
          </h2>
          <p className="text-lg text-neutral-500 mb-10 max-w-xl mx-auto">
            Transform your digital presence with a website that converts.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#"
              className="h-12 px-10 rounded-full bg-neutral-900 text-white text-sm font-medium hover:scale-105 transition shadow-xl flex items-center justify-center"
            >
              Get Started
            </a>
            <a
              href="#"
              className="h-12 px-10 rounded-full border border-neutral-200 bg-white text-neutral-900 text-sm font-medium hover:bg-neutral-50 shadow-sm flex items-center justify-center"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-400">
            © 2024 E Marketing Paradice. All rights reserved.
          </p>

          <div className="flex gap-6">
            <FooterIcon icon={<Twitter className="w-4 h-4" />} />
            <FooterIcon icon={<Github className="w-4 h-4" />} />
            <FooterIcon icon={<Linkedin className="w-4 h-4" />} />
          </div>
        </div>
      </footer>
    </main>
  );
}

/* ---------------- COMPONENTS ---------------- */

const FeatureCard = ({
  icon,
  title,
  desc,
  color,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  color: "indigo" | "purple" | "emerald";
  delay?: string;
}) => (
  <div
    className={`group relative p-8 rounded-2xl border border-neutral-200 bg-white hover:border-${color}-200 hover:shadow-xl 5 transition-all duration-300 overflow-hidden reveal-up ${delay}`}
  >
    <div
      className={`w-12 h-12 rounded-lg bg-${color}-50 border border-${color}-100 flex items-center justify-center text-${color}-600 group-hover:scale-110 group-hover:bg-${color}-100 transition-all`}
    >
      {icon}
    </div>

    <h3 className="text-lg font-semibold text-neutral-900 mb-3">{title}</h3>
    <p className="text-sm text-neutral-500 leading-relaxed">{desc}</p>
  </div>
);

const FooterIcon = ({ icon }: { icon: React.ReactNode }) => (
  <a className="text-neutral-400 hover:text-neutral-900 transition-colors">{icon}</a>
);

const ProjectsSection = () => (
  <section id="work" className="py-32 px-6 md:px-16 max-w-7xl mx-auto">
    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal-up">
      <div>
        <h2 className="text-3xl md:text-5xl font-medium text-neutral-900 mb-4">
          Featured Projects
        </h2>
        <p className="text-lg text-neutral-500 max-w-xl">
          Real-world applications built for scalability and aesthetics.
        </p>
      </div>

      <a className="text-sm font-medium text-neutral-900 border-b border-neutral-200 pb-1 hover:border-neutral-900 transition">
        View All Work
      </a>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {portfolioProjects.map((item, i) => (
        <ProjectCard
          key={i}
          tag="SaaS"
          tagColor="indigo"
          title={item.title}
          desc={item.description}
          img={item.image}
          page_links={item.page_link}
          delay="delay-100"
        />
      ))}
    </div>
  </section>
);

const ProjectCard = ({
  tag,
  tagColor,
  title,
  desc,
  img,
  delay,
  page_links,
}: {
  tag: string;
  tagColor: "indigo" | "emerald" | "amber";
  title: string;
  desc: string;
  img: string;
  delay?: string;
  page_links: string;
}) => (
  <div
    className={`group relative rounded-2xl border border-neutral-200 bg-white overflow-hidden hover:-translate-y-2 transition-all duration-500  reveal-up ${delay}`}
  >
    <div className="relative h-56 overflow-hidden bg-neutral-100">
      <Image
        src={img}
        alt={title}
        width={400}
        height={10000}
        className="object-cover w-full h-full group-hover:scale-105 transition duration-700"
      />
    </div>

    <div className="p-6">
      <span
        className={`text-[10px] uppercase tracking-wider font-semibold text-${tagColor}-700 border border-${tagColor}-200 px-2 py-0.5 rounded-full bg-${tagColor}-50`}
      >
        {tag}
      </span>

      <h3 className="text-xl font-semibold text-neutral-900 mt-3">{title}</h3>
      <p className="text-sm text-neutral-500 mb-6 line-clamp-2">{desc}</p>

      <Link href={page_links} className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:text-indigo-600">
        View Case Study <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  </div>
);

