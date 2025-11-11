"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Smartphone,
  Layers,
  Cloud,
  Shield,
  Code,
  Rocket,
  ArrowRight,
} from "lucide-react";
import { mobileProjects } from "./projects";

export default function MobileAppsPage() {
  const features = [
    {
      icon: <Smartphone className="text-[#4AEA45]" size={30} />,
      title: "Cross-Platform Excellence",
      desc: "Seamless apps for Android and iOS built with Flutter and React Native.",
    },
    {
      icon: <Layers className="text-[#4AEA45]" size={30} />,
      title: "Modern UI/UX Design",
      desc: "Elegant and functional designs that captivate users and drive engagement.",
    },
    {
      icon: <Cloud className="text-[#4AEA45]" size={30} />,
      title: "Cloud Integration",
      desc: "Real-time syncing, scalable APIs, and seamless cloud data connections.",
    },
    {
      icon: <Shield className="text-[#4AEA45]" size={30} />,
      title: "Enterprise Security",
      desc: "Data encryption, secure authentication, and compliance-ready apps.",
    },
    {
      icon: <Code className="text-[#4AEA45]" size={30} />,
      title: "Clean, Efficient Code",
      desc: "Fast, maintainable, and scalable code for future-ready applications.",
    },
    {
      icon: <Rocket className="text-[#4AEA45]" size={30} />,
      title: "Launch & Maintenance",
      desc: "We handle deployment, updates, and post-launch optimization.",
    },
  ];

  return (
    <main className="min-h-screen bg-linear-to-br from-white via-[#f8fff8] to-[#e6ffe6] text-[#374151] ">
      {/* HERO SECTION */}
      <section className="relative px-6 md:px-16 pt-24 pb-32 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-[#0f172a]">
            Building <span className="text-[#4AEA45]">Mobile Apps</span> That
            Define Categories
          </h1>
          <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-lg">
            We transform your ambitious ideas into high-performing mobile
            experiences that inspire users and scale businesses.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#4AEA45] text-white rounded-full font-bold text-lg hover:bg-[#38d04f] transition-transform duration-300 hover:scale-[1.05] shadow-lg"
          >
            Start Your Project
            <ArrowRight size={22} />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative w-full max-w-sm aspect-[3/4] rounded-3xl overflow-hidden border-8 border-gray-900 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <Smartphone size={100} className="text-[#4AEA45]/40" />
            </div>
            <p className="absolute bottom-4 inset-x-0 text-center text-gray-700 text-sm">
              High-Fidelity App Mockup
            </p>
          </div>
        </motion.div>
      </section>

      {/* FEATURES */}
      <section className="py-24 px-6 md:px-16 bg-[#f9fafb] border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-[#0f172a]">
            Our Mobile Development Advantage
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 hover:border-[#4AEA45]/30"
              >
                <div className="p-3 rounded-full bg-[#4AEA45]/10 mb-4 w-fit">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#0f172a]">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-[#0f172a]"
        >
          Recent Projects & Use Cases
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {mobileProjects.map((app, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl bg-white transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <Image
                src={app.image}
                alt={app.title}
                width={400}
                height={250}
                unoptimized
                className="w-full h-56 object-cover group-hover:opacity-90 transition"
              />
              <div className="p-6 text-left">
                <h3 className="text-2xl font-bold mb-2 text-[#0f172a] group-hover:text-[#4AEA45] transition">
                  {app.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {app.description}
                </p>

                {/* View Project Button */}
                <Link
                  href={`/services/mobile-apps/projects/${app.slug}`}
                  className="inline-flex items-center gap-2 text-[#4AEA45] font-semibold hover:underline hover:gap-3 transition-all"
                >
                  View Project
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-r from-[#4AEA45] to-[#38d04f] text-white py-24 px-6 md:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold mb-6"
          >
            Ready to Launch Your Vision?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl mb-12 opacity-90"
          >
            Let’s build a stunning, feature-rich mobile app tailored to your
            business goals.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 px-12 py-5 bg-white text-[#4AEA45] rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl uppercase tracking-wider"
            >
              Request a Free Quote
              <ArrowRight size={22} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
