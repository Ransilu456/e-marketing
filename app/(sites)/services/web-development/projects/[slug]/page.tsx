"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { portfolioProjects, features } from "../../projects";

const ProjectPage = () => {
  const { slug } = useParams();
  const router = useRouter();

  const projectIndex = portfolioProjects.findIndex((p) => p.slug === slug);
  const project = portfolioProjects[projectIndex];

  const prevProject = projectIndex > 0 ? portfolioProjects[projectIndex - 1] : null;
  const nextProject = projectIndex < portfolioProjects.length - 1 ? portfolioProjects[projectIndex + 1] : null;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal-up").forEach((el) => observer.observe(el));
  }, []);

  if (!project) return <p className="p-8 text-center text-red-600 font-medium">Project not found</p>;

  return (
    <main className="min-h-screen relative bg-white antialiased selection:bg-red-600 selection:text-white text-neutral-900">
      <div className="fixed inset-0 bg-grid pointer-events-none -z-10 h-screen"></div>

      <section className="px-6 md:px-16 pt-32 pb-16 max-w-7xl mx-auto">
        <div className="max-w-6xl mx-auto flex flex-col gap-12">

          {/* Navigation */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 reveal-up">
            <button
              onClick={() => router.push("/services/web-development")}
              className="group inline-flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-red-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Web Development
            </button>

            <div className="flex gap-3">
              <button
                onClick={() =>
                  prevProject && router.push(`/services/web-development/projects/${prevProject.slug}`)
                }
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-300 shadow-sm ${prevProject
                    ? "border-neutral-200 bg-white text-neutral-600 hover:border-red-600 hover:text-red-600 hover:shadow-md"
                    : "border-neutral-100 bg-neutral-100 text-neutral-400 cursor-not-allowed"
                  }`}
                disabled={!prevProject}
              >
                <ChevronLeft className="w-4 h-4" />
                Prev
              </button>
              <button
                onClick={() =>
                  nextProject && router.push(`/services/web-development/projects/${nextProject.slug}`)
                }
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-300 shadow-sm ${nextProject
                    ? "border-neutral-200 bg-white text-neutral-600 hover:border-red-600 hover:text-red-600 hover:shadow-md"
                    : "border-neutral-100 bg-neutral-100 text-neutral-400 cursor-not-allowed"
                  }`}
                disabled={!nextProject}
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Header */}
          <div className="reveal-up delay-100 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-600/30 bg-red-50 text-red-600 text-xs font-semibold uppercase tracking-wide w-max">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
              Case Study
            </div>

            <p className="text-sm text-neutral-500 uppercase tracking-wide">Web Development Project</p>

            {/* Title */}
            <h1 className="text-2xl md:text-4xl font-extrabold text-neutral-900 leading-tight">
              {project.title}
            </h1>

            {/* Description */}
            <p className="text-base md:text-md text-neutral-700 max-w-3xl leading-relaxed">
              {project.description}{" "}
              <strong className="text-neutral-900">
                Discover the features, technology stack, and insights behind this project.
              </strong>
            </p>
          </div>


          {/* Project Image */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-50 shadow-lg reveal-up delay-200 group">
            <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={800}
              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>


      {/* FEATURES */}
      <section className="px-6 md:px-16 py-24 bg-neutral-50 border-t border-neutral-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-12 text-center">Key Features & Highlights</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group p-6 rounded-2xl border border-neutral-200 bg-white hover:bg-red-50 transition-all duration-300  reveal-up"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-red-100 rounded-lg mb-4 text-red-600">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-16 py-24 max-w-7xl mx-auto">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
          {/* Summary */}
          <div className="lg:col-span-2 reveal-up">
            <h2 className="text-3xl font-semibold mb-8">Project Summary & Impact</h2>
            <div className="prose prose-neutral prose-lg text-neutral-600 leading-relaxed">
              <p className="mb-6">{project.longDescription || project.description}</p>
              <p className="mb-6">
                Designed for <strong className="text-neutral-900 font-medium">performance, scalability, and user engagement</strong>, this project leverages modern frameworks and clean architecture.
              </p>
              <p>
                By combining intuitive design, responsive layouts, and secure backend systems, it ensures <strong className="text-neutral-900 font-medium">an effortless experience</strong> for end-users and administrators alike.
              </p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="lg:col-span-1 reveal-up delay-200">
            <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-100 sticky top-24">
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">Technology Stack</h3>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg border border-neutral-200 bg-white text-sm font-medium text-neutral-700 shadow-sm hover:shadow-md transition-all ${tech.color}`}
                  >
                    <span className="font-bold">{tech.name[0]}</span>
                    {tech.name}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                className="mt-6 inline-flex items-center justify-center w-full gap-2 px-4 py-3 rounded-lg bg-red-600 text-white font-bold text-sm hover:bg-red-700 transition-colors"
              >
                Visit Live Project
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectPage;
