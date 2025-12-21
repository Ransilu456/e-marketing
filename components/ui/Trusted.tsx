"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = ["DMFEED.png", "Sarasaviya.jpg", "Cafe.jpg", "Kevin's.jpg", "Yesfood.jpg", "Opp.jpg"];

export default function Trusted() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="mt-14 w-[1200px]"
    >
      <p className="text-xs uppercase tracking-wider text-slate-400 mb-4">
        Trusted by forward-thinking teams
      </p>

      <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-10 gap-y-6">
        {logos.map((logo, i) => (
          <div
            key={i}
            className="opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          >
            <Image
              src={`/logos/${logo}`}
              alt={logo.replace(/\.(png|jpg|jpeg)$/i, "")}
              width={120}
              height={48}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
}
