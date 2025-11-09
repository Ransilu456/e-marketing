"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function SocialMediaPage() {
  return (
    <main className="min-h-screen bg-white text-black py-24 px-6 md:px-16" style={{ fontFamily: "Poppins, sans-serif" }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Social Media <span className="text-[#4AEA45]">Management</span>
        </h1>
        <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">
          Build your brand, engage followers, and grow your presence across all major social media platforms.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-4xl mx-auto space-y-8 text-gray-700 leading-relaxed text-base md:text-lg"
      >
        <p>
          We manage and optimize your social accounts to build brand awareness, drive engagement, and generate measurable results.
        </p>

        <ul className="list-disc list-inside space-y-2">
          <li>Content creation & scheduling</li>
          <li>Ad campaigns & analytics</li>
          <li>Audience growth strategies</li>
          <li>Brand voice consistency</li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mt-16 flex justify-center"
      >
        <Link
          href="/#contact"
          className="px-8 py-3 text-lg font-semibold text-white bg-[#4AEA45] rounded-full hover:bg-[#3ec93b] transition-all duration-300 shadow-md"
        >
          Let’s Grow Together
        </Link>
      </motion.div>
    </main>
  );
}
