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

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {LandingProjects.map((project, index) => (
            <Link href={project.page_link} key={project.title}>
              <motion.article
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                  delay: index * 0.06,
                }}
                className="group relative h-72 overflow-hidden rounded-2xl
                shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="absolute inset-0 bg-linear-to-t
                  from-blue-100/80 via-blue-50/30 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <span className="mb-2 w-fit rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-zinc-900">
                    {project.category}
                  </span>

                  <h3 className="text-lg font-semibold text-white leading-tight">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-red-800/80
                    opacity-0 translate-y-2
                    group-hover:opacity-100 group-hover:translate-y-0
                    transition-all duration-300"
                  >
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
