"use client";
import { motion } from "framer-motion";
import { CheckCircle2, Target, Users, Zap } from "lucide-react";
import { ImageWithFallback } from "./error/ImageWithFallback";

const values = [
    { icon: Target, title: "Result-Driven", description: "We focus on delivering measurable results that drive your business forward" },
    { icon: Users, title: "Client-Centric", description: "Your success is our success. We work closely with you every step of the way" },
    { icon: Zap, title: "Innovation", description: "Staying ahead with the latest technologies and marketing strategies" }
];

export default function About() {
    return (
        <section className="relative py-16 lg:py-24 bg-white text-black" id="about">
            <div className="container mx-auto px-6 lg:px-8">
                
                {/* --- Centered Header --- */}
                <div className="flex flex-col items-center mb-12 space-y-2 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900"
                        style={{ fontFamily: 'Prata, serif' }}
                    >
                        About Us
                    </motion.h1>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: 100 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="h-1 bg-secondary-text rounded"
                    />
                </div>

                {/* --- Image + Main Description --- */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center mb-12">
                    
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="absolute -top-12 -left-12 w-48 h-48 bg-secondary-text/20 rounded-full blur-3xl lg:-top-16 lg:-left-16"></div>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NjI1MjAzODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                alt="Web Development"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Main Description next to Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 space-y-6 text-center lg:text-left"
                    >
                        <p
                            className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed"
                            style={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                            E Marketing Paradice is a creative digital agency specializing in web design, mobile app development,
                            and business marketing across major platforms like Facebook, TikTok, and YouTube. We help brands grow
                            by combining technology, creativity, and strategy to build powerful digital experiences that drive real results.
                        </p>
                    </motion.div>
                </div>

              <div className="w-full max-w-7xl mx-auto px-6 py-16 lg:py-24">
      {/* --- FEATURES --- */}
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
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="p-8 rounded-2xl backdrop-blur-md border border-white/20 bg-white/5 shadow-lg hover:shadow-2xl hover:bg-white/10 transition-all text-center"
          >
            <div className="flex flex-col items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-[#4AEA45] mb-4" />
              <h3
                className="text-xl font-semibold mb-2 text-black"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {item.title}
              </h3>
              <p
                className="text-black text-sm leading-relaxed"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* --- VALUES --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {values.map((value, index) => {
          const Icon = value.icon;
          return (
            <motion.div
              key={index}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="p-8 rounded-2xl backdrop-blur-md border border-white/20 bg-white/5 shadow-lg hover:shadow-2xl hover:bg-white/10 transition-all text-center"
            >
              <div className="flex flex-col items-center justify-center">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#4AEA45]/15 mb-4">
                  <Icon className="w-7 h-7 text-[#4AEA45]" />
                </div>
                <h3
                  className="text-xl font-semibold mb-2 text-black"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {value.title}
                </h3>
                <p
                  className="text-black text-sm leading-relaxed"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {value.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>

                {/* --- Quote --- */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-base sm:text-lg md:text-xl text-gray-800 font-semibold italic mt-12 border-l-4 border-primary pl-4"
                    style={{ fontFamily: 'Prata, serif' }}
                >
                    &quot;Creative Minds. Digital Excellence.&quot;
                </motion.p>

            </div>
        </section>
    );
}
