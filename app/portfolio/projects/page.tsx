"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/card/ProjectCard";
import { projects, Project, Category } from "@/components/data/data";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState<Category | "All">("All");
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 6;

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.categories.includes(selectedCategory));

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const categories: (Category | "All")[] = ["All", ...Object.values(Category)];

  const handleCategoryChange = (cat: Category | "All") => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  return (
    <main className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- Header --- */}
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-24">
          <div className="flex items-center justify-center gap-6 mb-6">
            <h2
              className="leading-tight text-4xl sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "Prata" }}
            >
              Our
            </h2>
            <h2
              className="leading-tight text-4xl sm:text-5xl lg:text-6xl text-green-500"
              style={{ fontFamily: "Prata" }}
            >
              Work
            </h2>
          </div>

          <p
            className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto"
            style={{ fontFamily: "Poppins" }}
          >
            Real results for real businesses. See how we&apos;ve helped brands achieve remarkable growth.
          </p>
        </div>

        {/* --- Category Filter --- */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className={`px-5 py-2 rounded-full border transition-all duration-300 font-medium
                ${
                  selectedCategory === cat
                    ? "bg-green-500 text-white border-green-500 shadow-lg"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-green-50 hover:border-green-300"
                }
              `}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* --- Projects Grid --- */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {paginatedProjects.map((project: Project, index) => (
            <motion.div
              key={index}
              className="group"
              variants={{
                hidden: { opacity: 0, y: 25 },
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

        {/* --- Pagination Controls --- */}
        {totalPages > 1 && (
          <div className="mt-16 flex items-center justify-center gap-3 sm:gap-4">
            
            {/* Prev Button */}
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm sm:text-base transition-all duration-300
                ${
                  currentPage === 1
                    ? "text-gray-400 border-gray-300 cursor-not-allowed"
                    : "text-gray-900 border-gray-400 hover:bg-green-50 hover:border-green-400"
                }
              `}
            >
              <ChevronLeft size={18} />
              Prev
            </button>

            {/* Page Numbers */}
            {[...Array(totalPages)].map((_, i) => {
              const page = i + 1;
              return (
                <motion.button
                  key={i}
                  onClick={() => setCurrentPage(page)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 flex items-center justify-center rounded-full border transition-all duration-300
                    ${
                      currentPage === page
                        ? "bg-green-500 text-white border-green-500 shadow-md"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-green-50"
                    }
                  `}
                >
                  {page}
                </motion.button>
              );
            })}

            {/* Next Button */}
            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm sm:text-base transition-all duration-300
                ${
                  currentPage === totalPages
                    ? "text-gray-400 border-gray-300 cursor-not-allowed"
                    : "text-gray-900 border-gray-400 hover:bg-green-50 hover:border-green-400"
                }
              `}
            >
              Next
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
