"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function WebDevelopmentPage() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col items-center justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-secondary-text">
          Web Development
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
          At <span className="text-[#4AEA45] font-semibold">E Marketing Paradice</span>, 
          we craft responsive, high-performance websites that empower your business online. 
          From e-commerce to portfolios, we ensure speed, SEO optimization, and flawless design across all devices.
        </p>

        <motion.img
          src="/images/web-dev-illustration.svg"
          alt="Web Development Illustration"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mx-auto w-full max-w-md mb-10"
        />

        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#4AEA45] text-white rounded-full hover:bg-[#3ec93b] transition-all duration-300 text-lg font-medium"
        >
          Get a Quote
          <ArrowRight size={20} />
        </Link>
      </motion.div>
    </main>
  );
}
