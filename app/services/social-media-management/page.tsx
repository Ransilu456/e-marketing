"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { portfolioProjects, Project } from "./projects";

export default function SocialMediaManagementPage() {
  return (
    <main className="bg-zinc-50 text-zinc-900">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-28">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-widest text-red-600 mb-5">
            Social Media Management
          </p>

          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-8">
            Social media campaigns that{" "}
            <span className="text-red-600">drive real growth</span>
          </h1>

          <p className="text-xl text-zinc-600 leading-relaxed mb-10">
            We help brands grow audiences, engagement, and revenue through
            strategic content, consistent execution, and performance-driven
            social campaigns.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-red-600 text-red-600 font-semibold hover:bg-red-600 hover:text-white transition-all"
          >
            Start a project
            <ArrowRight />
          </Link>
        </div>
      </section>

      {/* IMAGE SECTION */}
      <section className="relative max-w-7xl mx-auto px-6 mb-32">
        <div className="relative h-[520px] rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="/data/social-bg.jpg"
            alt="Social Media Management"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white py-32 mb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-20">
            {[
              {
                title: "Content Strategy",
                desc: "We plan content around your business goals — not vanity metrics.",
              },
              {
                title: "Platform Management",
                desc: "Consistent posting, engagement, and optimization across all platforms.",
              },
              {
                title: "Analytics & Growth",
                desc: "We track what matters and double down on what converts.",
              },
            ].map((item, i) => (
              <div key={i}>
                <h3 className="text-2xl font-bold mb-5">
                  {item.title}
                </h3>
                <p className="text-zinc-600 text-lg leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="mb-20 max-w-2xl">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">
            Selected campaigns
          </h2>
          <p className="text-xl text-zinc-600">
            A snapshot of recent social media work delivering measurable results.
          </p>
        </div>

        <div className="space-y-28">
          {portfolioProjects.map((project: Project, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h3 className="text-3xl font-bold mb-6">
                  {project.title}
                </h3>
                <p className="text-lg text-zinc-600 leading-relaxed mb-8">
                  {project.description}
                </p>

                <Link
                  href={`/services/social-media-management/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 text-red-600 font-semibold text-lg hover:underline"
                >
                  View case study
                  <ArrowRight />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t bg-white py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-8">
            Ready to grow your social presence?
          </h2>
          <p className="text-xl text-zinc-600 mb-12">
            Let’s talk about a campaign built for results.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-red-600 text-red-600 font-semibold hover:bg-red-600 hover:text-white transition-all"
          >
            Contact us
            <ArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
}
