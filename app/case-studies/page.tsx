"use client";

import { projects, Project } from "@/components/data/data";
import { motion } from "framer-motion";
import { useState } from "react";

export default function CaseStudiesPage() {
  const [expandedProject, setExpandedProject] = useState<Project | null>(null);

  return (
    <main className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* --- Page Header --- */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4" style={{ fontFamily: "Prata" }}>
            Case Studies
          </h1>
          <p className="text-lg sm:text-xl text-gray-600" style={{ fontFamily: "Poppins" }}>
            Explore our projects in detail and see how we deliver measurable results for real clients.
          </p>
        </div>

        {/* --- Projects Grid --- */}
        <div className="space-y-20">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <div className={`lg:flex ${isEven ? "" : "lg:flex-row-reverse"} items-center`}>
                  <div className="lg:w-1/2">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 object-cover rounded-t-3xl lg:rounded-l-3xl lg:rounded-r-none transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="lg:w-1/2 p-8 lg:p-12">
                    <h2 className="text-2xl lg:text-3xl font-bold mb-3" style={{ fontFamily: "Prata" }}>
                      {project.title}
                    </h2>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.categories.map((cat, i) => (
                        <span
                          key={i}
                          className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4" style={{ fontFamily: "Poppins" }}>
                      {project.description}
                    </p>
                    <p className="text-gray-500 text-sm mb-4 font-medium">Result: {project.result}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button
                      className="px-6 py-3 bg-green-500 text-black rounded-full hover:bg-green-600 transition-all duration-300 font-medium"
                      onClick={() => setExpandedProject(project)}
                    >
                      View Full Case Study
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* --- Expanded Modal / Full Case Study --- */}
        {expandedProject && (
          <div className="fixed inset-0 bg-black/50 flex items-start justify-center z-50 p-4 pt-32">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[85vh] overflow-y-auto p-8 shadow-2xl relative"
            >
              <button
                onClick={() => setExpandedProject(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 text-3xl font-bold"
              >
                ×
              </button>

              <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "Prata" }}>
                {expandedProject.title}
              </h2>
              <div className="flex flex-wrap gap-2 mb-4">
                {expandedProject.categories.map((cat, i) => (
                  <span
                    key={i}
                    className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold"
                  >
                    {cat}
                  </span>
                ))}
              </div>
              <img
                src={expandedProject.image}
                alt={expandedProject.title}
                className="w-full h-80 object-cover rounded-lg mb-6"
              />

              {/* Detailed Sections */}
              <div className="space-y-8 text-gray-700" style={{ fontFamily: "Poppins" }}>
                {["The Problem", "The Solution", "Process", "Results"].map((section, idx) => (
                  <div key={idx}>
                    <h3 className="text-xl font-semibold mb-2">{section}</h3>
                    {section === "Process" ? (
                      <ul className="list-disc list-inside text-gray-600">
                        <li>Planning & Research</li>
                        <li>Wireframing & Design</li>
                        <li>Development & Implementation</li>
                        <li>Testing & Launch</li>
                      </ul>
                    ) : (
                      <p className="text-gray-600">
                        {section === "The Problem" && "Describe the client's challenge here."}
                        {section === "The Solution" && "Explain how your solution solved the problem."}
                        {section === "Results" && "Highlight measurable outcomes, growth, or impact."}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="mt-8 text-center">
                <button className="px-8 py-4 bg-green-500 text-black rounded-full hover:bg-green-600 transition-all duration-300 font-medium">
                  Get Your Free Consultation
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </main>
  );
}
