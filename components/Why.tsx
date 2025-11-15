"use client";
import { motion } from "framer-motion";

export default function WhyChooseUS() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white text-black">
      {/* --- SECTION TITLE --- */}

      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4">
        <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="section-header-main text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-4 md:mb-6"
      >
        Why
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="section-header text-secondary-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-4 md:mb-6"
      >
         Choose us
      </motion.h1>
        <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="section-header-main text-secondary-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-4 md:mb-6"
      >
         ?
      </motion.h1>
      </div>

      {/* --- UNDERLINE / DECORATIVE ELEMENT --- */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "80px" }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="h-1 sm:h-[3px] bg-secondary-text mb-6 sm:mb-8"
      ></motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-2xl sm:max-w-3xl text-base sm:text-lg md:text-xl lg:text-xl text-primary-text font-light mb-4 sm:mb-6 leading-relaxed px-2"
      >
       At E-Marketing Paradice, we believe great results come from passion, precision, and trust. From concept to completion, we've successfully delivered every single project — on time, on budget, and beyond expectations. Here's why our clients choose us again and again.
      </motion.p>

      {/* --- QUOTE TEXT --- */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-2xl sm:max-w-3xl text-base sm:text-lg md:text-xl lg:text-xl text-primary-text font-light italic leading-relaxed px-2"
      >
       &quot; We don&apos;t just build projects — we build quality, reliability, and long-term trust. &quot;
      </motion.p>
    </section>
  );
}
