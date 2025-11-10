"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const portfolioProjects = [
  {
    title: "E‑Commerce Store",
    description: "A fast and responsive online store with payment integration.",
    image: "https://images.unsplash.com/photo-1605902711622-cfb43c443d31?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080",
    link: "#contact",
  },
  {
    title: "Portfolio Website",
    description: "A sleek portfolio for creative professionals.",
    image: "https://images.unsplash.com/photo-1581091215362-273c6b4e0f3e?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080",
    link: "#contact",
  },
  {
    title: "Business Landing Page",
    description: "High‑converting landing page with modern UI/UX.",
    image: "https://images.unsplash.com/photo-1590608897129-79d3b2c4b0d1?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080",
    link: "#contact",
  },
];

export default function WebDevelopmentPage() {
  return (
    <main className="min-h-screen bg-white text-black relative overflow-hidden font-poppins">
      
      {/* Hero Section */}
      <section className="relative px-6 md:px-16 py-24 lg:py-32 flex flex-col-reverse md:flex-row items-center gap-12 max-w-7xl mx-auto">
        {/* Decorative Background */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#4AEA45]/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#4AEA45]/20 rounded-full blur-3xl pointer-events-none"></div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Web Development <br />
            <span className="text-[#4AEA45]">that scales with your business</span>
          </h1>
          <p className="text-gray-700 text-lg md:text-xl mb-8 leading-relaxed">
            At <span className="font-semibold text-[#4AEA45]">E Marketing Paradice</span>, 
            we craft responsive, high-performance websites that are fast, SEO-friendly, and conversion-oriented.
            From e-commerce stores to personal portfolios, we build sites that impress and perform.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-3 px-6 py-3 bg-[#4AEA45] text-white rounded-full font-medium text-lg hover:bg-[#3ec93b] transition-all duration-300"
          >
            Get a Free Quote
            <ArrowRight size={20} />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 flex justify-center"
        >
          <Image
            src="https://images.unsplash.com/photo-1559028012-481c04fa702d?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080"
            alt="Web Development Illustration"
            width={500}
            height={500}
            className="w-full max-w-md rounded-xl shadow-lg"
          />
        </motion.div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-[#f0f4f8] px-6 md:px-16 overflow-hidden relative">
        <div className="max-w-6xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Recent Projects
          </h2>
          <p className="text-gray-700 text-lg md:text-xl">
            We create web solutions that are visually stunning and high-performing. Take a look at our work.
          </p>
        </div>

        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-4 scrollbar-hide">
          {portfolioProjects.map((project, index) => (
            <motion.div
              key={index}
              className="flex-none w-[300px] md:w-[360px] lg:w-[420px] snap-center bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              <div className="relative h-56 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col gap-3">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                <Link
                  href={project.link}
                  className="mt-2 inline-flex items-center gap-2 text-[#4AEA45] font-medium hover:underline"
                >
                  View Project
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Our Web Development Services
          </h2>
          <p className="text-gray-700 text-lg md:text-xl">
            We deliver performance, scalability, and beautiful design for every client.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Responsive Design",
              desc: "Websites that look perfect on all devices, from mobile to desktop.",
            },
            {
              title: "SEO Optimized",
              desc: "Built with SEO best practices to rank higher on search engines.",
            },
            {
              title: "Fast & Scalable",
              desc: "Optimized code and architecture to grow with your business.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-lg flex flex-col items-start gap-4 hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-[#4AEA45] text-white py-24 px-6 md:px-16 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Your Website?
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Let’s create a high-performance website that represents your brand and drives results.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#4AEA45] rounded-full font-medium text-lg hover:bg-gray-100 transition-all duration-300"
          >
            Get Started
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}
