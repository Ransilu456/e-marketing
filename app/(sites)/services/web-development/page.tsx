"use client";

import { useEffect } from "react";
import {
  Sparkles,
  ArrowRight,
  Zap,
  Monitor,
  Rocket
} from "lucide-react";
import Link from "next/link";

import { portfolioProjects } from "./projects";
import { ImageWithFallback } from "@/components/error/ImageWithFallback";
import BeautiyCTA from "@/components/ui/home/BeautiyCTA";

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
    <main className="relative min-h-screen pt-10 bg-white text-gray-900">
      <section className="relative px-6 md:px-16 pt-20 pb-24 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="flex-1 text-center lg:text-left reveal-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-8 border border-red-200 bg-red-50 text-red-600 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-red-600" />
              <span className="text-xs font-semibold uppercase tracking-wide">
                Web Development Experts
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-semibold mb-6 tracking-tight leading-[1.1] text-gray-900">
              Crafting{" "}
              <span className="relative inline-block px-2">
                <span className="relative z-10 text-transparent bg-clip-text bg-linear-to-r from-red-600 via-red-500 to-red-600 animate-gradient">
                  Websites
                </span>
                <span className="absolute inset-0 bg-red-100/50 -skew-y-2 rounded-lg z-0 blur-sm mix-blend-multiply"></span>
              </span>
              <br className="hidden lg:block" />
              That Drive Growth
            </h1>

            <p className="text-lg mb-10 max-w-xl mx-auto lg:mx-0 text-gray-600 leading-relaxed">
              At <span className="text-gray-900 font-medium">E Marketing Paradice</span>,
              we combine precision engineering with visual design to build
              high-performance web experiences that convert.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="group h-11 px-8 rounded-full bg-red-600 text-white text-sm font-medium flex items-center justify-center gap-2 hover:bg-red-700 transition shadow-lg"
              >
                Start Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </Link>

              <Link
                href="/portfolio/projects"
                className="h-11 px-8 rounded-full border border-red-200 bg-white text-red-600 text-sm font-medium flex items-center justify-center hover:bg-red-50 shadow-sm transition"
              >
                View Portfolio
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 w-full flex justify-center lg:justify-end reveal-up delay-200 overflow-hidden">
            <div className="relative w-full max-w-lg aspect-4/3 group perspective-1000 overflow-hidden">
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-red-200  bg-white">

                <div className="absolute top-0 inset-x-0 h-8 bg-white/80 backdrop-blur-md border-b border-red-100 flex items-center px-4 gap-1.5 z-20">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                </div>

                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
                  alt="Code and Design"
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover opacity-90 group-hover:scale-105 transition duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-32 border-t border-red-100 bg-red-50/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-20 reveal-up">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-gray-900 mb-4">
              Why Choose Our <br />
              <span className="text-red-600">Development Expertise</span>
            </h2>
            <p className="text-lg text-gray-600">
              Every project is engineered for speed, scalability, and aesthetic impact.
            </p>
          </div>

          {/* 3 Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Zap className="w-6 h-6" />}
              color="red"
              title="Performance First"
              desc="Optimized architecture using Next.js and modern web standards."
              delay="delay-100"
            />

            <FeatureCard
              icon={<Monitor className="w-6 h-6" />}
              color="red"
              title="Responsive Design"
              desc="Fluid Tailwind layouts that look flawless on any device."
              delay="delay-200"
            />

            <FeatureCard
              icon={<Rocket className="w-6 h-6" />}
              color="red"
              title="SEO & Accessibility"
              desc="Semantic HTML, meta tags, and WCAG compliance built-in."
              delay="delay-300"
            />
          </div>
        </div>
      </section>

      <ProjectsSection />

      <BeautiyCTA />
    </main>
  );
}

function FeatureCard({ icon, title, desc, color, delay, }: { icon: React.ReactNode; title: string; desc: string; color: string; delay?: string; }) {
  return (
    <div
      className={`group relative p-8 rounded-2xl border border-red-100 bg-white hover:shadow-xl transition-all duration-300 overflow-hidden reveal-up ${delay}`}
    >
      <div
        className={`w-12 h-12 rounded-lg bg-${color}-50 border border-${color}-100 flex items-center justify-center text-${color}-600 group-hover:scale-110 group-hover:bg-${color}-100 transition-all`}
      >
        {icon}
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
}

const ProjectsSection = () => (
  <section id="work" className="py-32 px-6 md:px-16 max-w-7xl mx-auto">
    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal-up">
      <div>
        <h2 className="text-3xl md:text-5xl font-medium text-gray-900 mb-4">
          Featured Projects
        </h2>
        <p className="text-lg text-gray-600 max-w-xl">
          Real-world applications built for scalability and aesthetics.
        </p>
      </div>

      <a className="text-sm font-medium text-red-600 border-b border-red-200 pb-1 hover:border-red-600 transition">
        View All Work
      </a>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {portfolioProjects.map((item, i) => (
        <ProjectCard
          key={i}
          tag="SaaS"
          tagColor="red"
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

function ProjectCard({ tag, tagColor, title, desc, img, delay, page_links, }: { tag: string; tagColor: string; title: string; desc: string; img: string; delay?: string; page_links: string; }) {
  return (
    <div
      className={`group relative rounded-2xl border border-red-100 bg-white overflow-hidden hover:-translate-y-2 transition-all duration-500  reveal-up ${delay}`}
    >
      <div className="relative h-56 overflow-hidden bg-red-50">
        <ImageWithFallback
          src={img}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
          className="object-cover group-hover:scale-105 transition duration-700" />
      </div>

      <div className="p-6">
        <span
          className={`text-[10px] uppercase tracking-wider font-semibold text-${tagColor}-700 border border-${tagColor}-200 px-2 py-0.5 rounded-full bg-${tagColor}-50`}
        >
          {tag}
        </span>

        <h3 className="text-xl font-semibold text-gray-900 mt-3">{title}</h3>
        <p className="text-sm text-gray-600 mb-6 line-clamp-2">{desc}</p>

        <Link
          href={page_links}
          className="inline-flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-700"
        >
          View Case Study <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
