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
    <main className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* --- Header --- */}
        <header className="text-center max-w-4xl mx-auto mb-14 px-2">

          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight mb-5"
            style={{ fontFamily: "Prata" }}
          >
            Crafting Digital
            <span className="block text-(--color-primary)"> Experiences</span>
          </h1>

          <p
            className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed"
            style={{ fontFamily: "Poppins" }}
          >
            We design and build impactful digital products that help businesses grow,
            scale, and stand out in the real world.
          </p>
        </header>


        <div className="relative mb-12">
          <div className="flex gap-3 overflow-x-auto scrollbar-hide py-3 px-1 justify-start sm:justify-center border-b border-gray-200">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`whitespace-nowrap px-5 py-2 rounded-full text-sm sm:text-base font-medium border transition-all
                  ${selectedCategory === cat
                    ? "bg-(--color-primary) text-white border-(--color-primary) shadow-md"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-(--color-primary)/10 hover:border-(--color-primary)"
                  }
                `}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* --- Projects Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {paginatedProjects.map((project: Project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              category={project.categories[0]}
              result={project.result}
              image={project.image}
              description={project.description}
              tags={project.tags}
            />
          ))}
        </div>

        {/* --- Pagination --- */}
        {totalPages > 1 && (
          <div className="mt-14 flex flex-wrap justify-center gap-2 sm:gap-3">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 text-sm sm:text-base rounded-full border border-gray-400 disabled:opacity-40 hover:bg-(--color-primary)/10 transition"
            >
              Prev
            </button>

            {[...Array(totalPages)].map((_, i) => {
              const page = i + 1;
              return (
                <button
                  key={i}
                  onClick={() => setCurrentPage(page)}
                  className={`w-9 h-9 sm:w-10 sm:h-10 text-sm sm:text-base flex items-center justify-center rounded-full border transition
                    ${currentPage === page
                      ? "bg-(--color-primary) text-white border-(--color-primary)"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-(--color-primary)/10"
                    }
                  `}
                >
                  {page}
                </button>
              );
            })}

            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 text-sm sm:text-base rounded-full border border-gray-400 disabled:opacity-40 hover:bg-(--color-primary)/10 transition"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
