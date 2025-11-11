"use client";
import { motion } from "framer-motion";
import { CheckCircle2, Target, Users, Zap } from "lucide-react";
import { ImageWithFallback } from "./error/ImageWithFallback";

const values = [
  {
    icon: Target,
    title: "Result-Driven",
    description:
      "We focus on delivering measurable results that drive your business forward",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description:
      "Your success is our success. We work closely with you every step of the way",
  },
  {
    icon: Zap,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and marketing strategies",
  },
];

const PRIMARY_COLOR = "#4AEA45";
const HEADING_COLOR = "#0f172a";
const TEXT_COLOR = "#1f2937";

export default function About() {
  return (
    <section className="relative py-24 bg-white text-black" id="about">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* --- Header --- */}
        <div className="flex flex-col items-center mb-16 text-center space-y-3">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold"
            style={{ fontFamily: 'Prata, serif', color: HEADING_COLOR }}
          >
            About Us
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 100 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 rounded"
            style={{ background: PRIMARY_COLOR }}
          />
        </div>

        {/* --- Image + Description --- */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="absolute -top-12 -left-12 w-52 h-52 bg-green-400/20 rounded-full blur-3xl lg:-top-16 lg:-left-16"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Web Development"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 space-y-6 text-center lg:text-left"
          >
            <p
              className="text-lg sm:text-xl leading-relaxed text-gray-700"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              E Marketing Paradice is a creative digital agency specializing in
              web design, mobile app development, and business marketing across
              major platforms like Facebook, TikTok, and YouTube. We help brands
              grow by combining technology, creativity, and strategy to build
              powerful digital experiences that drive real results.
            </p>
          </motion.div>
        </div>

        {/* --- Features --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Expert Team",
              desc: "Our professionals are highly skilled across all digital domains.",
            },
            {
              title: "Proven Track Record",
              desc: "Over 100+ successful projects delivered with top client satisfaction.",
            },
            {
              title: "24/7 Support",
              desc: "We’re always available to assist and ensure your success.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="p-8 rounded-3xl backdrop-blur-md border border-white/20 bg-white/10 shadow-lg hover:shadow-2xl transition-all text-center"
            >
              <CheckCircle2 className="w-10 h-10 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2" style={{ color: HEADING_COLOR }}>
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* --- Values --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="p-8 rounded-3xl backdrop-blur-md border border-white/20 bg-white/10 shadow-lg hover:shadow-2xl transition-all text-center"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-green-400/15 mb-4">
                  <Icon className="w-7 h-7 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: HEADING_COLOR }}>
                  {value.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* --- Quote --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center lg:text-left mt-12 border-l-4 border-green-400 pl-4"
        >
          <p className="text-lg sm:text-xl md:text-2xl font-semibold italic" style={{ color: HEADING_COLOR }}>
            &quot;Creative Minds. Digital Excellence.&quot;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
