"use client";

import { motion, useAnimation, AnimationControls } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Trusted() {
  const logos = ["DMFEED.png", "Sarasaviya.jpg"];
  const scrollingLogos = [...logos, ...logos, ...logos];

  const controls: AnimationControls = useAnimation();

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [duration, setDuration] = useState(30);

  const updateDuration = () => {
    if (typeof window === "undefined") return;
    const w = window.innerWidth;
    if (w < 640) setDuration(40);
    else if (w < 1024) setDuration(30);
    else setDuration(22);
  };

  useEffect(() => {
    updateDuration();
    window.addEventListener("resize", updateDuration);
    return () => window.removeEventListener("resize", updateDuration);
  }, []);

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        repeat: Infinity,
        duration,
        ease: "linear",
      },
    });
  }, [duration]);

  const pauseScroll = () => controls.stop();

  const resumeScroll = () => {
    if (!scrollRef.current) return;

    const element = scrollRef.current;
    const computed = window.getComputedStyle(element).transform;
    let currentX = 0;

    if (computed !== "none") {
      const matrix = new DOMMatrixReadOnly(computed);
      currentX = (matrix.m41 / element.offsetWidth) * 100;
    }

    controls.start({
      x: [currentX + "%", "-50%"],
      transition: {
        repeat: Infinity,
        duration,
        ease: "linear",
      },
    });
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-16 bg-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#4AEA45] rounded-full blur-3xl opacity-10 -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#4AEA45] rounded-full blur-3xl opacity-10 -z-10" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-10 md:mb-14"
      >
        <p className="text-xs sm:text-sm md:text-base uppercase tracking-widest text-[#4AEA45] font-semibold mb-4">
          Our Partners
        </p>

        <h2 className="text-3xl md:text-5xl font-bold text-black mb-3">
          Trusted By Industry{" "}
          <span className="relative inline-block ml-2">
            <span className="relative z-10">Leaders</span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-[#4AEA45] z-0"></span>
          </span>
        </h2>

        <p className="text-sm md:text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Partnering with brands that inspire excellence and innovation.
        </p>
      </motion.div>

      {/* Scrolling Logos */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="overflow-hidden w-full cursor-grab rounded-2xl relative"
        whileTap={{ cursor: "grabbing" }}
      >
        {/* Gradient edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-white via-white/70 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-white via-white/70 to-transparent z-10 pointer-events-none" />

        {/* Scroll track */}
        <motion.div
          ref={scrollRef}
          className="flex gap-8 md:gap-12 px-6"
          animate={controls}
          drag="x"
          dragElastic={0.04}
          onHoverStart={pauseScroll}
          onHoverEnd={resumeScroll}
        >
          {scrollingLogos.map((logo, i) => (
            <motion.div
              key={i}
              className="flex items-center justify-center min-w-32 md:min-w-40 lg:min-w-52 h-24 md:h-32 lg:h-40 shrink-0 group"
              whileHover={{ scale: 1.08, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <Image
                src={`/logos/${logo}`}
                alt={logo.replace(/\.(png|jpg|jpeg)$/i, "")}
                width={140}
                height={70}
                className="object-contain max-w-full h-auto group-hover:scale-110 transition-transform duration-300"
                priority={i < 4}
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
        className="text-center text-xs sm:text-sm text-gray-500 mt-8"
      >
        Drag to explore more partners • Hover to pause
      </motion.p>
    </section>
  );
}
