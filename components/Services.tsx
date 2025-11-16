"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import ServiceCard from "./card/ServiceCard";

const services = [
  {
    title: "Web Development",
    description:
      "Responsive, scalable, and SEO-optimized websites tailored to your brand and goals.",
    buttonText: "Learn More",
    link: "/services/web-development",
    image:
      "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080",
    features: ["Responsive design", "SEO optimized", "Scalable architecture"],
  },
  {
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile apps with seamless performance and user experience.",
    buttonText: "Explore Apps",
    link: "/services/mobile-apps",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080",
    features: ["iOS & Android", "Cross-platform frameworks", "Performance focused"],
  },
  {
    title: "Brand Identity",
    description:
      "Crafting memorable visual identities that make your brand stand out across platforms.",
    buttonText: "Discover Identity",
    link: "#contact",
    image:
      "/data/brand.jpg",
    features: ["Logo & mark design", "Brand guidelines", "Visual assets library"],
  }
  ,
  {
    title: "Creative Posters",
    description:
      "Eye-catching poster and social designs to amplify your campaigns’ visual impact.",
    buttonText: "View Examples",
    link: "/services/creative-posters",
    image:
      "/data/creative-poster.jpg",
    features: [
      "Campaign posters",
      "Social media visuals",
      "Print-ready deliverables",
    ],
  }
  ,
  {
    title: "Social Media Management",
    description:
      "We build and manage your brand’s social presence to drive engagement and growth.",
    buttonText: "Manage Accounts",
    link: "/services/social-media-management",
    image:
      "/data/social-media.jpg",
    features: ["Content calendar", "Community engagement", "Analytics & reporting"],
  },
];


export default function Services() {
  const [showAll, setShowAll] = useState(false);
  const visibleServices = showAll ? services : services.slice(0, 3);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
  };

  return (
    <section
      id="services"
      className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
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
              Services
            </h2>
          </div>
          <p className="text-lg sm:text-xl text-gray-700" style={{ fontFamily: "Poppins" }}>
            At{" "}
            <span className="font-semibold text-[#4AEA45]">
              E Marketing Paradice
            </span>
            , we deliver cutting-edge digital services — from web & mobile development
            to creative branding and marketing solutions.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {visibleServices.map((service) => (
              <motion.div
                key={service.title}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                className="flex justify-center"
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="btn-filled px-10 py-4 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
          >
            {showAll ? "View Less" : "View More"}
            {showAll ? (
              <ChevronUp className="inline ml-2" />
            ) : (
              <ChevronDown className="inline ml-2" />
            )}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
