"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Layers,
  Cloud,
  Shield,
  Code,
  Rocket,
  ArrowRight,
  Sparkles,
  Zap,
} from "lucide-react";

import { motion } from "framer-motion";
import { posterProjects, Project } from "./projects";

export default function MobileAppsPage() {
  const serviceFeatures = [
    {
      icon: <Layers size={32} />,
      title: "High-Impact Concepts",
      desc: "Creative concept generation that grabs attention and delivers your core message instantly.",
    },
    {
      icon: <Code size={32} />,
      title: "Print & Digital Ready",
      desc: "Perfectly optimized files for both high-resolution print (CMYK) and digital campaigns (RGB).",
    },
    {
      icon: <Cloud size={32} />,
      title: "Brand Consistency",
      desc: "Designs are meticulously aligned with your existing brand guidelines, colors, and typography.",
    },
    {
      icon: <Shield size={32} />,
      title: "Fast Turnaround",
      desc: "Efficient workflow ensuring quick delivery without compromising on creative quality or detail.",
    },
    {
      icon: <Sparkles size={32} />,
      title: "Vector & Source Files",
      desc: "Receive fully scalable vector files (AI, EPS) and layered source files (PSD) for future use.",
    },
    {
      icon: <Rocket size={32} />,
      title: "Unlimited Revisions",
      desc: "We work with you until the design perfectly captures your vision and marketing goal.",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* HERO */}
      <section className="relative px-6 md:px-16 pt-32 pb-24 max-w-7xl mx-auto">
        <div className="absolute top-20 right-10 w-80 h-80 rounded-full blur-3xl bg-red-600/10 pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full blur-3xl bg-red-600/5 pointer-events-none" />

        <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-red-50 text-red-600 font-semibold">
              <Zap size={18} />
              <span>Poster Design & Print Specialists</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight text-gray-900">
              Building <span className="text-red-600">Visual Campaigns</span> That Demand Attention
            </h1>

            <p className="text-gray-700 text-xl mb-10 max-w-xl mx-auto lg:mx-0">
              We transform ambitious ideas into high-impact posters and campaign materials that inspire audiences and drive engagement.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 text-lg text-white bg-red-600 rounded-full font-bold transition-all duration-300 hover:bg-red-700 hover:scale-[1.05] group shadow-lg shadow-red-600/20"
            >
              Get a Design Consultation
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>

          <div className="flex-1 flex justify-center pt-10 lg:pt-0">
            <div className="relative w-96 h-96">
              <div className="absolute inset-0 bg-white/30 backdrop-blur-2xl rounded-2xl border border-gray-200 shadow-2xl flex items-center justify-center p-3">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-gray-100">
                  <Image
                    src="/data/creative-poster.jpg"
                    alt="Poster design mockup"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="absolute -top-10 -right-10 w-[200px] h-24 rounded-3xl bg-red-50 p-4 shadow-xl rotate-6 group-hover:rotate-0 transition-transform duration-500 flex flex-row items-center justify-between">
                <Sparkles size={36} className="mb-2 text-red-600" />
                <div className="w-full flex flex-col ml-2">
                  <p className="text-sm font-bold text-red-600">Vector Quality</p>
                  <p className="text-xs text-red-400">Scalable designs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-4 font-extrabold text-red-600">
              The Creative Design Advantage
            </h2>
            <p className="text-gray-700 text-xl max-w-2xl mx-auto">
              Cutting-edge design thinking meets actionable marketing strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {serviceFeatures.map((item, i) => (
              <div
                key={i}
                className="group p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-200 bg-white"
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 text-red-600">
                  {item.icon}
                </div>
                <h3 className="text-xl mb-3 font-bold text-red-600">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-16 px-6 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center border-y border-gray-200 py-10">
          <blockquote className="max-w-4xl mx-auto">
            <p className="text-2xl font-medium italic text-gray-800">
              “The poster campaign they designed for us was a massive success. The visuals were stunning, and our event attendance increased by 45% over the previous year.”
            </p>
            <footer className="mt-6 text-lg font-semibold text-red-600">
              — Sarah Chen, Marketing Director at Urban Rhythms Festival
            </footer>
          </blockquote>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4 font-extrabold text-red-600">
            Featured Creative Portfolio
          </h2>
          <p className="text-gray-700 text-xl max-w-2xl mx-auto">
            Diverse projects crafted for maximum visual impact across various industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posterProjects.map((project: Project, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-60 overflow-hidden rounded-xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              <div className="relative z-10 p-7">
                <h3 className="text-2xl font-semibold mb-3 text-red-600">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium px-3 py-1 rounded-full border border-red-200 text-red-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden relative bg-gray-900 text-white shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative z-10 px-8 py-16 md:p-20 text-center">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-6">
              Ready to build something <span className="text-red-500">iconic?</span>
            </h2>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
              From MVP to enterprise scaling, our mobile experts are ready to turn your concept into a market-leading application.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href="#" className="w-full sm:w-auto px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold transition-all shadow-md hover:-translate-y-1">
                Book a Free Strategy Call
              </a>
              <a href="mailto:hello@mobidev.com" className="w-full sm:w-auto px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 rounded-full font-semibold transition-all">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
