"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ServiceCard from "./card/ServiceCard";
import { ChevronDown, ChevronUp } from "lucide-react"; 


const services = [
  {
    title: "Web Development",
    description:
      "We create responsive, fast-loading websites tailored to your brand. Our websites are built with modern technologies ensuring scalability, SEO optimization, and cross-browser compatibility.",
    buttonText: "Learn More",
    link: "/services/web-development",
  },
  {
    title: "Mobile Apps",
    description:
      "From iOS to Android, we build intuitive mobile applications that enhance user experience and business integration.",
    buttonText: "Explore Apps",
    link: "/services/mobile-apps",
  },
  {
    title: "UI/UX Design",
    description:
      "We craft visually stunning interfaces focused on usability and user engagement for delightful experiences.",
    buttonText: "Contact US",
    link: "#contact",
  },
  {
    title: "Brand Identity",
    description:
      "We help businesses establish strong, recognizable brand identities with logos, colors, and consistent visuals.",
    buttonText: "Discover Identity",
    link: "#contact",
  },
  {
    title: "Creative Posters",
    description:
      "We design eye-catching posters and social media graphics that help your campaigns stand out.",
    buttonText: "View Examples",
    link: "/services/creative-posters",
  },
  {
    title: "Social Media Management",
    description:
      "We manage your social media presence, creating content and campaigns to grow engagement and loyalty.",
    buttonText: "Manage Accounts",
    link: "/services/social-media-management",
  },
];


export default function Services() {
  const [showAll, setShowAll] = useState(false);

  const visibleServices = showAll ? services : services.slice(0, 3);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
  };

  return (
    <section
      id="services"
      className="relative flex flex-col items-center justify-center text-center py-28 px-6 lg:px-12 bg-white overflow-hidden"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* --- Section Header --- */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-end justify-center gap-3"
        >
          <h2 className="section-header-main leading-none">Our</h2>
          <h2 className="section-header text-secondary-text leading-none">
            Services
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mx-auto mt-6 text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed"
        >
          At{" "}
          <span className="font-semibold text-[#4AEA45]">
            E Marketing Paradice
          </span>
          , we craft digital excellence — from{" "}
          <span className="font-medium text-black">custom websites</span> and{" "}
          <span className="font-medium text-black">mobile apps</span> to{" "}
          <span className="font-medium text-black">creative poster designs</span>
          . We build experiences that inspire and perform.
        </motion.p>
      </div>

      {/* --- Cards Grid --- */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl"
      >
        <AnimatePresence>
          {visibleServices.map((service) => (
            <motion.div
              key={service.title}
              initial="hidden"
              animate="visible"
              exit="exit"
              layout
              className="flex justify-center"
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                buttonText={service.buttonText}
                link={service.link}
              />

            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

{/* --- View More Button --- */}
<motion.div
  initial={{ opacity: 0, y: 10 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="mt-12"
>
  <button
    onClick={() => setShowAll(!showAll)}
    className="group flex items-center gap-2 px-6 py-3 text-lg font-medium text-[#4AEA45] border border-[#4AEA45] rounded-full transition-all duration-300 hover:bg-[#4AEA45] hover:text-white shadow-sm hover:shadow-lg"
  >
    {showAll ? (
      <>
        View Less
        <ChevronUp
          size={20}
          className="transition-transform duration-300 group-hover:-translate-y-1"
        />
      </>
    ) : (
      <>
        View More
        <ChevronDown
          size={20}
          className="transition-transform duration-300 group-hover:translate-y-1"
        />
      </>
    )}
  </button>
</motion.div>


      {/* --- Tagline --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-16 text-gray-800 italic text-lg sm:text-xl max-w-2xl"
      >
        “Your all-in-one partner for{" "}
        <span className="text-[#4AEA45] font-semibold">web</span>,{" "}
        <span className="text-[#4AEA45] font-semibold">mobile</span>, and{" "}
        <span className="text-[#4AEA45] font-semibold">creative</span> solutions.”
      </motion.div>
    </section>
  );
}
