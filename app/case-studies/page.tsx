"use client";

import { projects, Project } from "@/components/data/data";
import { motion } from "framer-motion";
import { useState } from "react";
import { X, ArrowRight, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "@/components/error/ImageWithFallback";

export default function CaseStudiesPage() {
  const [expandedProject, setExpandedProject] = useState<Project | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProjects = projects.slice(startIndex, endIndex);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <main className="py-32 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white via-white to-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* --- Page Header --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-28"
        >
          <div className="inline-block px-5 py-2.5 rounded-full bg-green-400/10 border border-green-400/30 mb-8">
            <p className="text-sm font-semibold text-green-600 uppercase tracking-wide">Our Success Stories</p>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight" style={{ fontFamily: "Prata", color: "#0f172a" }}>
            Case Studies &<br />
            <span style={{ color: "#4AEA45" }}>Success Stories</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: "Poppins" }}>
            Explore real-world projects showcasing how we deliver measurable results and transform businesses through innovative digital solutions.
          </p>
        </motion.div>

        {/* --- Projects Grid --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-20 mb-16"
        >
          {currentProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-linear-to-br from-green-400/20 to-blue-400/20 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                
                <div className={`lg:flex ${isEven ? "" : "lg:flex-row-reverse"} items-center gap-0 relative bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-green-400/40 transition-all duration-300 shadow-lg hover:shadow-2xl`}>
                  {/* Image Section */}
                  <div className="lg:w-1/2 overflow-hidden h-80 lg:h-96">
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.4 }}
                      className="relative w-full h-full"
                    >
                      <div className="absolute inset-0 bg-linear-to-br from-green-400/20 to-transparent pointer-events-none z-10"></div>
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </div>

                  {/* Content Section */}
                  <div className="lg:w-1/2 space-y-6 p-8 lg:p-12">
                    <div className="space-y-3">
                      <h2 className="text-3xl lg:text-4xl font-bold" style={{ fontFamily: "Prata", color: "#0f172a" }}>
                        {project.title}
                      </h2>
                      <p className="text-gray-600 text-lg leading-relaxed" style={{ fontFamily: "Poppins" }}>
                        {project.description}
                      </p>
                    </div>

                    {/* Categories */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.categories.map((cat, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ scale: 1.05 }}
                          className="bg-green-400/20 text-green-700 px-4 py-2 rounded-full text-sm font-semibold border border-green-400/40 hover:bg-green-400/30 transition-all cursor-pointer"
                        >
                          {cat}
                        </motion.span>
                      ))}
                    </div>

                    {/* Result Highlight */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-linear-to-r from-green-400/15 to-blue-400/15 border border-green-400/30 rounded-2xl p-5 hover:border-green-400/50 transition-all"
                    >
                      <p className="text-gray-700 font-medium text-lg">
                        <span className="text-green-600 font-bold text-xl">✓ </span>
                        {project.result}
                      </p>
                    </motion.div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="bg-gray-200/60 text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-gray-300/40 hover:bg-gray-300/60 transition-colors"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <motion.div
                      className="pt-4"
                    >
                      <motion.button
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setExpandedProject(project)}
                        className="inline-flex items-center gap-2 px-8 py-3 bg-linear-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl group/btn"
                      >
                        View Full Case Study
                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                      </motion.button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* --- Pagination --- */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 py-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                if (currentPage > 1) setCurrentPage(currentPage - 1);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              disabled={currentPage === 1}
              className="p-2 rounded-full border border-emerald-300 text-emerald-600 hover:bg-emerald-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <motion.button
                  key={page}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setCurrentPage(page);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`w-10 h-10 rounded-full font-semibold transition-all ${
                    currentPage === page
                      ? "bg-linear-to-r from-emerald-500 to-emerald-600 text-white shadow-lg"
                      : "border border-emerald-300 text-emerald-600 hover:bg-emerald-50"
                  }`}
                  style={currentPage === page ? { fontFamily: "Poppins" } : {}}
                >
                  {page}
                </motion.button>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              disabled={currentPage === totalPages}
              className="p-2 rounded-full border border-emerald-300 text-emerald-600 hover:bg-emerald-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </motion.div>
        )}

        {/* --- Expanded Modal / Full Case Study --- */}
        {expandedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExpandedProject(null)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-start justify-center z-50 p-4 pt-8 overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-5xl w-full shadow-2xl relative my-8 overflow-hidden"
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setExpandedProject(null)}
                className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors z-20 bg-white/80 backdrop-blur"
              >
                <X className="w-6 h-6 text-gray-600 hover:text-gray-900" />
              </motion.button>

              {/* Modal Content */}
              <div className="p-8 lg:p-16 space-y-8">
                {/* Header Section */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="space-y-6"
                >
                  <div className="inline-block px-5 py-2.5 rounded-full bg-emerald-50 border border-emerald-300">
                    <p className="text-sm font-semibold text-emerald-700 uppercase tracking-wide" style={{ fontFamily: "Poppins" }}>Case Study</p>
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold leading-tight" style={{ fontFamily: "Prata", color: "#0f172a" }}>
                    {expandedProject.title}
                  </h2>
                  <div className="flex flex-wrap gap-3 pt-2">
                    {expandedProject.categories.map((cat, i) => (
                      <span
                        key={i}
                        className="bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold border border-emerald-300"
                        style={{ fontFamily: "Poppins" }}
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Featured Image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="rounded-2xl overflow-hidden shadow-xl"
                >
                  <div className="relative bg-gray-100">
                    <div className="absolute inset-0 bg-linear-to-br from-green-400/20 to-transparent pointer-events-none z-10"></div>
                    <ImageWithFallback
                      src={expandedProject.image}
                      alt={expandedProject.title}
                      className="w-full h-96 lg:h-[450px] object-cover"
                    />
                  </div>
                </motion.div>

                {/* Detailed Sections */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
                  {["The Problem", "The Solution"].map((section, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                      className="bg-linear-to-br from-gray-50 to-white border border-emerald-200 rounded-2xl p-8 hover:border-emerald-400 transition-all hover:shadow-lg"
                    >
                      <h3 className="text-2xl font-bold mb-4" style={{ color: "#0f172a" }}>
                        {section}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg" style={{ fontFamily: "Poppins" }}>
                        {section === "The Problem" && "Describe the client's challenge here. Focus on the pain points and business impact."}
                        {section === "The Solution" && "Explain how your solution solved the problem. Highlight the approach and strategy used."}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Process Section */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mb-10 bg-linear-to-r from-emerald-50 via-cyan-50 to-emerald-50 border border-emerald-300 rounded-2xl p-8 hover:border-emerald-400 transition-all" style={{ fontFamily: "Poppins" }}
                >
                  <h3 className="text-2xl font-bold mb-8" style={{ color: "#0f172a", fontFamily: "Poppins" }}>
                    Our Proven Process
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {["Planning & Research", "Wireframing & Design", "Development & Implementation", "Testing & Launch"].map((step, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        className="flex flex-col items-center text-center space-y-3 p-4 rounded-xl hover:bg-white/50 transition-all"
                      >
                        <div className="w-12 h-12 bg-linear-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                          {idx + 1}
                        </div>
                        <p className="font-semibold text-gray-800" style={{ fontFamily: "Poppins" }}>{step}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Results Section */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mb-10 bg-linear-to-br from-emerald-50/90 to-cyan-50/90 border border-emerald-300 rounded-2xl p-8 hover:border-emerald-400 transition-all" style={{ fontFamily: "Poppins" }}
                >
                  <h3 className="text-2xl font-bold mb-8" style={{ color: "#0f172a", fontFamily: "Poppins" }}>
                    Measurable Results
                  </h3>
                  <div className="space-y-4">
                    {[
                      expandedProject.result,
                      "Improved user engagement and satisfaction",
                      "Streamlined operations and reduced costs"
                    ].map((result, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ x: 4 }}
                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/60 transition-all"
                      >
                        <CheckCircle2 className="w-7 h-7 text-emerald-600 shrink-0 mt-1" />
                        <p className="text-gray-700 font-medium text-lg" style={{ fontFamily: "Poppins" }}>{result}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Technologies Used */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="mb-10"
                >
                  <h3 className="text-2xl font-bold mb-5" style={{ color: "#0f172a", fontFamily: "Poppins" }}>
                    Technologies & Tools
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {expandedProject.tags.map((tag, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.08 }}
                        className="bg-linear-to-r from-emerald-100 to-cyan-100 text-emerald-800 px-5 py-2.5 rounded-full text-sm font-semibold border border-emerald-300 hover:border-emerald-400 transition-all cursor-default" style={{ fontFamily: "Poppins" }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="text-center border-t border-gray-300 pt-10"
                >
                  <p className="text-gray-600 mb-8 text-lg font-medium" style={{ fontFamily: "Poppins" }}>
                    Ready to achieve similar transformative results for your business?
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-3 px-10 py-4 bg-linear-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl group/cta" style={{ fontFamily: "Poppins" }}
                  >
                    Get Your Free Consultation
                    <ArrowRight className="w-6 h-6 group-hover/cta:translate-x-1 transition-transform" />
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </main>
  );
}
