"use client";

import { useState } from "react";
import ProjectCard from "@/components/card/ProjectCard";
import { projects, Project, Category } from "@/components/data/data";

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
    <main className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* --- Header --- */}
        <header className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-red-600 mb-4" style={{ fontFamily: "Prata" }}>
            Our Works
          </h1>
          <p className="text-lg sm:text-xl text-gray-700" style={{ fontFamily: "Poppins" }}>
            Real results for real businesses. Browse by category to explore our projects.
          </p>
        </header>

        {/* --- Sticky Category Filter --- */}
        <div className="relative">
          <div className=" top-24 z-30 bg-white py-4 flex flex-wrap justify-center gap-4 border-b border-gray-200 mb-12 ">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-5 py-2 rounded-full font-medium border transition-all
                  ${
                    selectedCategory === cat
                      ? "bg-(--color-primary) text-white border-(--color-primary) shadow-lg"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-(--color-primary)/10 hover:border-(--color-primary)"
                  }
                `}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* --- Projects Grid --- */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedProjects.map((project: Project, index) => (
              <div key={index} className="h-full">
                <ProjectCard
                  title={project.title}
                  category={project.categories[0]}
                  result={project.result}
                  image={project.image}
                  description={project.description}
                  tags={project.tags}
                />
              </div>
            ))}
          </div>
        </div>

        {/* --- Pagination --- */}
        {totalPages > 1 && (
          <div className="mt-16 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-full border border-gray-400 text-gray-900 disabled:text-gray-400 disabled:border-gray-300 hover:bg-(--color-primary)/10 transition-colors"
            >
              Prev
            </button>

            {[...Array(totalPages)].map((_, i) => {
              const page = i + 1;
              return (
                <button
                  key={i}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 flex items-center justify-center rounded-full border transition-colors
                    ${currentPage === page
                      ? "bg-(--color-primary) text-white border-(--color-primary)"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-(--color-primary)/10 hover:border-(--color-primary)"
                    }`}
                >
                  {page}
                </button>
              );
            })}

            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-full border border-gray-400 text-gray-900 disabled:text-gray-400 disabled:border-gray-300 hover:bg-(--color-primary)/10 transition-colors"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
