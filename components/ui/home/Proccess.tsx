"use client"

import { motion } from "framer-motion";
import SectionHeading from "../tools/SectionHeading";

const processSteps = [
  { id: "01", title: "Discovery", desc: "We dive deep into your business goals, audience, and competitors to build a solid foundation." },
  { id: "02", title: "Strategy", desc: "We craft a tailored roadmap and digital strategy to ensure every step aligns with your objectives." },
  { id: "03", title: "Execution", desc: "Our expert team designs, builds, and implements solutions using cutting-edge technologies." },
  { id: "04", title: "Growth", desc: "We launch, monitor, and optimize continuously to scale your results and ROI." }
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          badge="Process"
          title="Our Structured Workflow"
          subtitle="We follow a structured, four-step approach to ensure success at every stage."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mt-16 relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-zinc-200 hidden lg:block"></div>
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="p-8 bg-black rounded-2xl border border-zinc-200 shadow-lg hover:shadow-xl hover:border-(--color-text) transition-all duration-300 relative pt-16"
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-(--color-primary) text-white flex items-center justify-center text-xl font-bold border-4 border-white shadow-xl">
                {step.id}
              </div>
              <h4 className="text-2xl font-bold mb-3 text-gray-400">{step.title}</h4>
              <p className="text-zinc-100 leading-relaxed text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}