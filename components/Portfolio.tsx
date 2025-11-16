"use client";

import ProjectCard from "@/components/card/ProjectCard";
import Link from "next/link";

const projects = [
  {
    title: "Restaurant Website Redesign",
    category: "Web Development",
    result: "2x Online Orders",
   image:
      "/data/res.jpg",
    description:
      "Modern, mobile-friendly restaurant website with menu management and online ordering for a Colombo-based client.",
    tags: ["Next.js", "UI/UX", "SEO"],
  },
  {
    title: "School Management System",
    category: "Web App",
    result: "Improved Efficiency by 80%",
    image:
      "/Attendance.png",
    description:
      "Built a web-based system for managing attendance, grades, and communications for local schools.",
    tags: ["React", "Node.js", "Database"],
  },
  {
    title: "Social Media Campaign – Local Cafe",
    category: "Graphic Design",
    result: "Tripled Engagement in 2 Weeks",
    image:
      "/data/social-bg.jpg",
    description:
      "Created eye-catching Facebook and Instagram post designs with daily engagement content.",
    tags: ["Facebook Ads", "Canva", "Brand Design", "Figma"],
  }
];

export default function PortfolioPage() {
  return (
    <main className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden" id="portfolio">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* --- Header --- */}
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-24">
          <div className="w-full flex items-center justify-center gap-6">
            <h2
              className="big-header mb-6 leading-tight"
              style={{ fontFamily: "Prata" }}
            >
              Our
            </h2>
            <h2
              className="section-header mb-6 leading-tight"
              style={{ fontFamily: "Prata" }}
            >
              Work
            </h2>
          </div>
          <p
            className="text-lg sm:text-xl text-gray-700"
            style={{ fontFamily: "Poppins" }}
          >
            Real results for real businesses. See how we&apos;ve helped brands
            achieve remarkable growth.
          </p>
        </div>

        {/* --- Projects Grid --- */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <ProjectCard
              key={i}
              title={p.title}
              category={p.category}
              result={p.result}
              image={p.image}
              description={p.description}
              tags={p.tags}
            />
          ))}
        </div>

        {/* --- CTA --- */}
        <div className="text-center mt-16">
          <Link href="/portfolio/projects" className="btn-filled px-10 py-4 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
            View More Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
