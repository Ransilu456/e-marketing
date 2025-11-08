"use client";
import { motion } from "framer-motion";

export default function WhyChooseUS() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-24 px-6 bg-white text-black">
      {/* --- SECTION TITLE --- */}

      <div className="flex items-center">
        <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="section-header-main mb-6 mr-4"
      >
        Why
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="section-header text-secondary-text mb-6 mr-4"
      >
         Choose us
      </motion.h1>
        <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="section-header-main text-secondary-text mb-6"
      >
         ?
      </motion.h1>
      </div>

      {/* --- UNDERLINE / DECORATIVE ELEMENT --- */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100px" }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="h-[3px] bg-secondary-text mb-8"
      ></motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-3xl text-lg md:text-xl text-primary-text font-light mb-6  leading-relaxed"
      >
       At E-Marketing Paradice, we believe great results come from passion, precision, and trust. From concept to completion, we’ve successfully delivered every single project — on time, on budget, and beyond expectations. Here’s why our clients choose us again and again.
      </motion.p>

      {/* --- QUAOTE TEXT --- */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-3xl text-lg md:text-xl text-primary-text font-(--font-small-header) italic leading-relaxed"
      >
       &quot; We don’t just build projects — we build quality, reliability, and long-term
        trust.&quot;
      </motion.p>
    </section>
  );
}
