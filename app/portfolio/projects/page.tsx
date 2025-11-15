"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/card/ProjectCard";
import { projects, Project, Category } from "@/components/data/data";

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState<Category | "All">("All");

  // Updated filter to work with multiple categories
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.categories.includes(selectedCategory));

  const categories: (Category | "All")[] = ["All", ...Object.values(Category)];

  return (
    <main className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* --- Header --- */}
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-24">
          <div className="flex items-center justify-center gap-6 mb-6">
            <h2
              className="big-header leading-tight text-4xl sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "Prata" }}
            >
              Our
            </h2>
            <h2
              className="section-header leading-tight text-4xl sm:text-5xl lg:text-6xl text-green-500"
              style={{ fontFamily: "Prata" }}
            >
              Work
            </h2>
          </div>
          <p
            className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto"
            style={{ fontFamily: "Poppins" }}
          >
            Real results for real businesses. See how we&apos;ve helped brands
            achieve remarkable growth.
          </p>
        </div>

        {/* --- Category Filter --- */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full border transition-colors duration-300 ${
                selectedCategory === cat
                  ? "bg-green-500 text-white border-green-500"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-green-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* --- Projects Grid --- */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {filteredProjects.map((project: Project, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard
                title={project.title}
                categories={project.categories}
                result={project.result}
                image={project.image}
                description={project.description}
                tags={project.tags}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
