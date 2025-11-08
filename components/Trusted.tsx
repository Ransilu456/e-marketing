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
    <section className="py-16 px-6 md:px-16 bg-white">
      <h3 className="text-center text-gray-700 text-sm md:text-base uppercase tracking-wider mb-8">
        Trusted By
      </h3>

      <motion.div
        ref={containerRef}
        className="overflow-hidden w-full cursor-grab"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="flex gap-6"
          animate={controls}
          drag="x"
          dragConstraints={{ left: -1000, right: 0 }}
          dragElastic={0.05}
          onHoverStart={pauseScroll} 
          onHoverEnd={resumeScroll} 
        >
          {scrollingLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[150px] h-[150px] shrink-0 cursor-pointer"
            >
              <Image
                src={`/logos/${logo}`}
                alt={logo.split(".")[0]}
                width={150}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
