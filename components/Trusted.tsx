"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Trusted() {
  const logos = [
    "DMFEED.png",
    "Sarasaviya.jpg",
    "DMFEED.png",
    "Sarasaviya.jpg",
    "DMFEED.png",
    "Sarasaviya.jpg",
    "DMFEED.png",
    "Sarasaviya.jpg",
  ];

  const scrollingLogos = [...logos, ...logos];
  const controls = useAnimation();
  const containerRef = useRef(null);

  const [duration, setDuration] = useState(30);

  const updateDuration = () => {
    if (typeof window === "undefined") return;
    const width = window.innerWidth;
    if (width < 640) setDuration(40);
    else if (width < 1024) setDuration(30);
    else setDuration(25);
  };

  useEffect(() => {
    updateDuration();
    window.addEventListener("resize", updateDuration);
    return () => window.removeEventListener("resize", updateDuration);
  }, []);

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: { repeat: Infinity, duration, ease: "linear" },
    });
  }, [controls, duration]);

  const pauseScroll = () => {
    controls.stop();
  };

  const resumeScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    const transform = container.firstChild.style.transform || "translateX(0%)";
    const match = transform.match(/translateX\((-?\d+\.?\d*)%\)/);
    let currentX = match ? parseFloat(match[1]) : 0;

    controls.start({
      x: [currentX + "%", "-50%"],
      transition: { repeat: Infinity, duration, ease: "linear" },
    });
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-16 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#4AEA45] rounded-full blur-3xl opacity-10 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#4AEA45] rounded-full blur-3xl opacity-10 -z-10"></div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-8 sm:mb-10 md:mb-14"
      >
        <p className="text-xs sm:text-sm md:text-base uppercase tracking-widest text-[#4AEA45] font-semibold mb-3 sm:mb-4">
          Our Partners
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-2 sm:mb-3">
          Trusted By Industry
          <span className="relative inline-block ml-2 sm:ml-3">
            <span className="relative z-10">Leaders</span>
            <span className="absolute bottom-0 sm:bottom-1 left-0 w-full h-2 sm:h-3 bg-[#4AEA45] z-0"></span>
          </span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-3 sm:mt-4 max-w-2xl mx-auto">
          Partnering with brands that inspire excellence and innovation
        </p>
      </motion.div>

      <motion.div
        ref={containerRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="overflow-hidden w-full cursor-grab rounded-2xl"
        whileTap={{ cursor: "grabbing" }}
      >
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 bg-linear-to-r from-white via-white/50 to-transparent z-10 pointer-events-none"></div>
        
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 bg-linear-to-l from-white via-white/50 to-transparent z-10 pointer-events-none"></div>

        <motion.div
          className="flex gap-6 sm:gap-8 md:gap-10 lg:gap-12 px-4 sm:px-6"
          animate={controls}
          drag="x"
          dragConstraints={{ left: -1000, right: 0 }}
          dragElastic={0.05}
          onHoverStart={pauseScroll}
          onHoverEnd={resumeScroll}
        >
          {scrollingLogos.map((logo, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center min-w-32 sm:min-w-36 md:min-w-40 lg:min-w-52 h-24 sm:h-28 md:h-32 lg:h-40 shrink-0 cursor-pointer group"
              whileHover={{ scale: 1.08, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <Image
                src={`/logos/${logo}`}
                alt={logo.split(".")[0]}
                width={140}
                height={70}
                className="object-contain max-w-full h-auto group-hover:scale-110 transition-transform duration-300 filter group-hover:brightness-110"
                priority={index < 4}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center text-xs sm:text-sm text-gray-500 mt-6 sm:mt-8 md:mt-10"
        style={{ fontFamily: "Poppins" }}
      >
        Drag to explore more partners • Hover to pause
      </motion.p>
    </section>
  );
}
