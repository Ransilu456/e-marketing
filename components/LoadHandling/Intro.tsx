"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

interface IntroProps {
  onComplete: () => void;
}

export default function Intro({ onComplete }: IntroProps) {
  const [progress, setProgress] = useState(0);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  // ✅ Capture window size only after client mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }
  }, []);

  // ✅ Generate random particle positions ONCE (not during render)
  const particles = useMemo(() => {
    if (windowSize.width === 0 || windowSize.height === 0) return [];
    return Array.from({ length: 20 }, () => ({
      x: Math.random() * windowSize.width,
      y: Math.random() * windowSize.height,
      duration: 3 + Math.random() * 2,
    }));
  }, [windowSize]);

  // ✅ Progress bar increment
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="splash-screen overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            initial={{ x: p.x, y: p.y }}
            animate={{
              x: Math.random() * windowSize.width,
              y: Math.random() * windowSize.height,
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
            type: "spring",
            stiffness: 100,
          }}
        >
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl text-white mb-8 tracking-tight"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
            animate={{
              textShadow: [
                "0 0 20px rgba(255,255,255,0.5)",
                "0 0 40px rgba(255,255,255,0.8)",
                "0 0 20px rgba(255,255,255,0.5)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            E Marketing
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-white to-emerald-200 animate-gradient">
              Paradice
            </span>
          </motion.h1>
        </motion.div>

        <motion.p
          className="text-white/80 text-xl md:text-2xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Digital Excellence Awaits
        </motion.p>

        {/* Progress Bar */}
        <div className="max-w-md mx-auto">
          <motion.div
            className="h-1.5 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-white via-emerald-200 to-white"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          <motion.p
            className="text-white/60 text-sm mt-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            {progress}%
          </motion.p>
        </div>

        {/* Orbiting Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-1/2 left-1/2 w-96 h-96 border-2 border-white/10 rounded-full"
            style={{ x: "-50%", y: "-50%" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-80 h-80 border-2 border-white/10 rounded-full"
            style={{ x: "-50%", y: "-50%" }}
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>
    </motion.div>
  );
}
