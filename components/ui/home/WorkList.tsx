"use client";

import { LandingProjects } from "@/components/data/LandingData";
import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "../tools/SectionHeading";
import Image from "next/image";

export default function WorkList() {
  return (
    <section id="work" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          badge="Work"
          title="Selected Projects"
          subtitle="A glimpse into the diverse range of digital experiences we've crafted."
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-14">
          {LandingProjects.map((project, index) => (
            <Link href={project.page_link} key={project.title}>
              <motion.article
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative h-72 overflow-hidden rounded-2xl
        bg-zinc-900 shadow-lg hover:shadow-2xl
        transition-all duration-300"
              >
                <Image
                  src={project.image}
                  alt={`Project showcase: ${project.title} - ${project.category}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700
          group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t
          from-black/80 via-black/40 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <span className="mb-2 w-fit rounded-full
            bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                    {project.category}
                  </span>

                  <h3 className="text-xl font-semibold text-white leading-tight">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-white/80
            flex items-center gap-1
            transition-all duration-300 underline underline-offset-4
            group-hover:gap-2 group-hover:text-white">
                    View project →
                  </p>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
