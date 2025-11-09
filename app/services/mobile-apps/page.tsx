"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Smartphone, Layers, Cloud, Shield, Code, Rocket } from "lucide-react";

export default function MobileAppsPage() {
  const features = [
    {
      icon: <Smartphone className="text-[#4AEA45]" size={36} />,
      title: "Cross-Platform Excellence",
      desc: "We build seamless apps for both Android and iOS using modern frameworks like Flutter and React Native.",
    },
    {
      icon: <Layers className="text-[#4AEA45]" size={36} />,
      title: "Modern UI/UX",
      desc: "Our designs are crafted for intuitive navigation, ensuring beautiful visuals and delightful user experiences.",
    },
    {
      icon: <Cloud className="text-[#4AEA45]" size={36} />,
      title: "Cloud-Connected",
      desc: "We integrate apps with real-time databases, APIs, and cloud infrastructure to ensure smooth scalability.",
    },
    {
      icon: <Shield className="text-[#4AEA45]" size={36} />,
      title: "Enterprise Security",
      desc: "Every app is protected with the latest encryption, authentication, and data security practices.",
    },
    {
      icon: <Code className="text-[#4AEA45]" size={36} />,
      title: "Clean, Efficient Code",
      desc: "We write optimized, maintainable code to ensure long-term stability and performance.",
    },
    {
      icon: <Rocket className="text-[#4AEA45]" size={36} />,
      title: "Launch & Maintenance",
      desc: "From publishing on App Store and Play Store to regular updates — we handle it all.",
    },
  ];

  const apps = [
    {
      name: "FitPulse",
      desc: "A fitness tracking app with step counting, meal planning, and AI-based health suggestions.",
      image: "/images/apps/fitpulse.jpg",
    },
    {
      name: "ShopEase",
      desc: "An e-commerce mobile app with product browsing, payment gateway integration, and order tracking.",
      image: "/images/apps/shopease.jpg",
    },
    {
      name: "Foodico",
      desc: "A food delivery platform connecting local restaurants with real-time order tracking and driver management.",
      image: "/images/apps/foodico.jpg",
    },
  ];

  return (
    <main
      className="min-h-screen bg-white text-black py-24 px-6 md:px-16"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* --- HERO --- */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto text-center mb-20"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Mobile <span className="text-[#4AEA45]">App Development</span>
        </h1>
        <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Transform your ideas into interactive, high-performing mobile apps that engage users and drive growth.  
          We craft mobile experiences that combine sleek design, smooth performance, and smart technology.
        </p>
      </motion.div>

      {/* --- FEATURES SECTION --- */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24"
      >
        {features.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="p-6 border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 bg-white flex flex-col items-center text-center"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 text-base">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* --- OUR APPS SHOWCASE --- */}
      <section className="max-w-6xl mx-auto mb-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          Our <span className="text-[#4AEA45]">Recent Apps</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {apps.map((app, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white"
            >
              <Image
                src={app.image}
                alt={app.name}
                width={400}
                height={250}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{app.name}</h3>
                <p className="text-gray-600">{app.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-center mt-12"
      >
        <h3 className="text-2xl font-semibold mb-6">
          Ready to build your next <span className="text-[#4AEA45]">mobile app</span>?
        </h3>
        <Link
          href="/#contact"
          className="inline-block px-8 py-3 text-lg font-semibold text-white bg-[#4AEA45] rounded-full hover:bg-[#3ec93b] transition-all duration-300 shadow-md"
        >
          Let’s Talk
        </Link>
      </motion.div>
    </main>
  );
}
