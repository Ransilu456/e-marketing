"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import SectionHeading from "../tools/SectionHeading";
import { Plus, HelpCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const combinedFaqs = [
  {
    q: "What technologies do you specialize in for web development?",
    a: "We primarily use the MERN stack (MongoDB, Express, React, Node.js) for full-stack development, alongside popular frameworks like Next.js for high-performance applications."
  },
  {
    q: "Can you develop native or cross-platform mobile apps?",
    a: "We specialize in cross-platform development using React Native, which allows us to efficiently build a single codebase that runs natively on Android and iOS."
  },
  {
    q: "Do you provide post-launch maintenance and support?",
    a: "Yes, we offer flexible maintenance packages that cover bug fixes, security updates, feature enhancements, and technical support to ensure your application runs smoothly."
  },
  {
    q: "Do I need to provide the images and copy for the poster?",
    a: "We encourage clients to provide their branding guidelines and key messages. We can handle image sourcing using royalty-free stock libraries and offer basic copy editing as part of the package."
  },
  {
    q: "Which social media platforms do you manage?",
    a: "We manage all major platforms, including Facebook, TikTok, and Youtube, tailoring content and strategy specifically to each platform's audience and best practices."
  },
  {
    q: "How do you measure the success of a social media campaign?",
    a: "We track key performance indicators (KPIs) such as engagement rate, reach, follower growth, website traffic, and, most importantly, conversion rates relevant to your business goals."
  }
];

export default function InteractiveFAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32 bg-zinc-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(244,63,94,0.05),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading
          badge="Support"
          title="Common Questions"
          subtitle="Everything you need to know about our services, process, and partnership."
        />

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {combinedFaqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`group rounded-2xl border transition-all duration-300 ${openIndex === i
                  ? "bg-white border-rose-100 shadow-xl shadow-rose-900/5 ring-1 ring-rose-50"
                  : "bg-white/50 border-zinc-200/60 hover:border-rose-200 hover:bg-white"
                }`}
            >
              <button
                className="w-full p-6 md:p-8 flex items-start justify-between text-left focus:outline-none cursor-pointer"
                onClick={() => toggleFAQ(i)}
                aria-expanded={openIndex === i}
              >
                <div className="flex gap-4">
                  <div className={`mt-1 w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${openIndex === i ? "bg-rose-500 text-white" : "bg-zinc-100 text-zinc-400"
                    }`}>
                    <HelpCircle size={18} />
                  </div>
                  <span className={`text-lg font-medium tracking-tight transition-colors duration-300 pr-4 ${openIndex === i ? 'text-zinc-900' : 'text-zinc-700 group-hover:text-rose-600'
                    }`}>
                    {faq.q}
                  </span>
                </div>

                <span className="shrink-0 mt-2">
                  <motion.div
                    animate={{ rotate: openIndex === i ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: "circOut" }}
                  >
                    <Plus className={`w-5 h-5 transition-colors duration-300 ${openIndex === i ? 'text-rose-500' : 'text-zinc-400 group-hover:text-rose-400'}`} />
                  </motion.div>
                </span>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-8 md:px-8 md:pb-10 md:pl-20">
                      <div className="h-px w-full bg-zinc-100 mb-6" />
                      <p className="text-zinc-500 text-base md:text-lg leading-relaxed max-w-2xl">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 rounded-3xl bg-zinc-900 text-white flex flex-col md:flex-row items-center justify-between gap-8 border border-white/5 shadow-2xl overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Still have questions?</h3>
            <p className="text-zinc-400 max-w-md">Can&apos;t find the answer you&apos;re looking for? Our team is here to help you guide through your digital journey.</p>
          </div>

          <Link href="#contact" className="relative z-10">
            <button className="px-8 py-4 rounded-xl bg-white text-zinc-900 font-bold hover:bg-rose-50 transition-colors flex items-center gap-2 group">
              <span>Get in Touch</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}