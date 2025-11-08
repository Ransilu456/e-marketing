"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <header className="fixed top-20 left-0 w-full z-10 bg-transparent">
      <nav className="container mx-auto flex items-center justify-end px-6 py-2">
        <button
          className="text-primary-text focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center gap-4 py-6 bg-white/95 backdrop-blur-lg text-primary-text font-(--font-small-header) text-lg"
        >
          <li className="hover:bg-black/10 p-4"><Link href="#about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li className="hover:bg-black/10 p-4"><Link href="#contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </motion.ul>
      )}
    </header>
  );
}
