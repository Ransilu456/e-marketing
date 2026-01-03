"use client";

import { motion } from "framer-motion";
import SectionHeading from "../tools/SectionHeading";

const processSteps = [
  {
    id: "01",
    title: "Discovery",
    desc: "We understand your goals, audience, and challenges to define a strong foundation."
  },
  {
    id: "02",
    title: "Strategy",
    desc: "We create a clear roadmap and technical plan aligned with your business objectives."
  },
  {
    id: "03",
    title: "Execution",
    desc: "Our team designs and builds high-quality solutions using modern technologies."
  },
  {
    id: "04",
    title: "Growth",
    desc: "We launch, analyze performance, and continuously optimize for better results."
  }
];

export default function Process() {
  return (
    <section id="process" className="py-28 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          badge="Process"
          title="How We Work"
          subtitle="A clear and proven workflow designed to deliver consistent results."
        />

        <div className="relative mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Timeline line */}
          <div className="absolute top-8 left-0 right-0 h-px bg-zinc-200 hidden lg:block" />

          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative bg-white rounded-2xl p-6 pt-14
              shadow-md hover:shadow-xl
              border border-zinc-200 transition-all duration-300"
            >
              {/* Step number */}
              <div className="absolute -top-6 left-6 w-12 h-12 rounded-xl
                bg-(--color-primary) text-white
                flex items-center justify-center
                text-lg font-bold shadow-lg">
                {step.id}
              </div>

              <h4 className="text-lg font-semibold text-zinc-900 mb-2">
                {step.title}
              </h4>

              <p className="text-sm text-zinc-600 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
