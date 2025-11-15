"use client";
import { motion } from "framer-motion";
import { Target, Users, Zap, Sparkles, Award, Rocket } from "lucide-react";
import { ImageWithFallback } from "./error/ImageWithFallback";

const values = [
  {
    icon: Target,
    title: "Result-Driven",
    description: "We focus on delivering measurable results that drive your business forward",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your success is our success. We work closely with you every step of the way",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Staying ahead with the latest technologies and marketing strategies",
    color: "from-orange-500 to-orange-600",
  },
];

const features = [
  {
    icon: Award,
    title: "Expert Team",
    desc: "Our professionals are highly skilled across all digital domains.",
  },
  {
    icon: Rocket,
    title: "Proven Track Record",
    desc: "Over 100+ successful projects delivered with top client satisfaction.",
  },
  {
    icon: Sparkles,
    title: "24/7 Support",
    desc: "We're always available to assist and ensure your success.",
  },
];

const PRIMARY_COLOR = "#4AEA45";
const HEADING_COLOR = "#0f172a";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function About() {
  return (
    <section className="relative py-32 bg-linear-to-b from-white via-white to-gray-50 text-black" id="about">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* --- Header --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-20 text-center space-y-6"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-green-400/10 border border-green-400/30">
            <p className="text-sm font-semibold text-green-600">About Our Agency</p>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-6xl lg:text-7xl  tracking-tight"
            style={{ color: HEADING_COLOR, fontFamily: "Prata" }}
          >
            We Create Digital
            <span className="block mt-2" style={{ color: PRIMARY_COLOR }}>Excellence</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl"
          >
            Transforming businesses through innovative digital solutions and strategic marketing expertise
          </motion.p>
        </motion.div>

        {/* --- Image + Description Section --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-28"
        >
          {/* Image */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-green-400/15 rounded-full blur-3xl"></div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-2xl overflow-hidden border border-green-400/20"
            >
              <div className="absolute inset-0 bg-linear-to-br from-green-400/20 to-transparent pointer-events-none"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Professional Team Collaboration"
                className="w-full h-96 object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl lg:text-4xl mb-4" style={{ color: HEADING_COLOR, fontFamily: "Poppins" }}>
                Who We Are
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                E Marketing Paradice is a creative digital agency specializing in web design, mobile app development, and business marketing across major platforms like Facebook, TikTok, and YouTube.
              </p>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              We help brands grow by combining technology, creativity, and strategy to build powerful digital experiences that drive real results.
            </p>
            <div className="pt-4 flex gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-400/20 flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full" style={{ background: PRIMARY_COLOR }}></div>
                </div>
                <span className="text-gray-700 font-medium">Innovative Solutions</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-400/20 flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full" style={{ background: PRIMARY_COLOR }}></div>
                </div>
                <span className="text-gray-700 font-medium">Proven Results</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* --- Features Section --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-28"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-center mb-16"
            style={{ color: HEADING_COLOR }}
          >
            Why Choose Us
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-linear-to-br from-green-400/10 to-blue-400/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-green-400/30 transition-all duration-300">
                    <div className="w-14 h-14 rounded-xl bg-linear-to-br from-green-400/20 to-blue-400/20 flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow">
                      <Icon className="w-7 h-7" style={{ color: PRIMARY_COLOR }} />
                    </div>
                    <h3 className="text-xl font-bold mb-3" style={{ color: HEADING_COLOR }}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* --- Values Section --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-28"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-center mb-16"
            style={{ color: HEADING_COLOR }}
          >
            Our Core Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  {/* Background glow effect */}
                  <div className={`absolute inset-0 bg-linear-to-br ${value.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>

                  {/* Card */}
                  <div className="relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-green-400/30 transition-all duration-300 h-full">
                    {/* Top accent bar */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r ${value.color} rounded-t-2xl`}></div>

                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-xl bg-linear-to-br ${value.color} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold mb-3" style={{ color: HEADING_COLOR }}>
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>

                    {/* Hover effect indicator */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-green-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* --- Quote Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center py-16 px-8 rounded-3xl bg-linear-to-r from-green-400/10 via-blue-400/10 to-green-400/10 border border-green-400/20 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-linear-to-r from-green-400/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <p className="text-3xl md:text-4xl font-bold italic relative z-10" style={{ color: HEADING_COLOR }}>
            &quot;Creative Minds.<br />
            <span style={{ color: PRIMARY_COLOR }}>Digital Excellence.</span>&quot;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
