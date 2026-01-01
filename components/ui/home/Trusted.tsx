"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  "DMFEED.png",
  "Sarasaviya.jpg",
  "Cafe.jpg",
  "Kevin's.jpg",
  "Yesfood.jpg",
  "Opp.jpg",
];

export default function Trusted() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="
        mt-12
        w-full
        max-w-4xl
        mx-auto lg:mx-0
      "
    >
      <p className="text-xs uppercase tracking-wider text-slate-400 mb-4 text-center lg:text-left">
        Trusted by forward-thinking teams
      </p>

      {/* LOGO ROW */}
      <div
        className="
          flex items-center
          gap-8
          overflow-x-auto lg:overflow-visible
          flex-wrap lg:flex-nowrap
          justify-center lg:justify-start
          scrollbar-hide
        "
      >
        {logos.map((logo, i) => (
          <div
            key={i}
            className="
              shrink-0
              opacity-60 grayscale
              hover:grayscale-0 hover:opacity-100
              transition-all duration-300
            "
          >
            <Image
              src={`/logos/${logo}`}
              alt={logo.replace(/\.(png|jpg|jpeg)$/i, "")}
              width={120}
              height={48}
              className="object-contain h-10 w-auto"
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
}
