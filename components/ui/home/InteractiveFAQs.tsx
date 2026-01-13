"use client"

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import SectionHeading from "../tools/SectionHeading";
import { Plus } from "lucide-react";

export default function InteractiveFAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const combinedFaqs: { q: string; a: string }[] = [
    { q: "What technologies do you specialize in for web development?", a: "We primarily use the MERN stack (MongoDB, Express, React, Node.js) for full-stack development, alongside popular frameworks like Next.js for high-performance applications." },
    { q: "Can you develop native or cross-platform mobile apps?", a: "We specialize in cross-platform development using React Native, which allows us to efficiently build a single codebase that runs natively on Android and iOS." },
    { q: "Do you provide post-launch maintenance and support?", a: "Yes, we offer flexible maintenance packages that cover bug fixes, security updates, feature enhancements, and technical support to ensure your application runs smoothly." },
    { q: "Do I need to provide the images and copy for the poster?", a: "We encourage clients to provide their branding guidelines and key messages. We can handle image sourcing using royalty-free stock libraries and offer basic copy editing as part of the package." },
    { q: "Which social media platforms do you manage?", a: "We manage all major platforms, including Facebook, TikTok, and Youtube, tailoring content and strategy specifically to each platform's audience and best practices." },
    { q: "How do you measure the success of a social media campaign?", a: "We track key performance indicators (KPIs) such as engagement rate, reach, follower growth, website traffic, and, most importantly, conversion rates relevant to your business goals." }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading
          badge="Common Questions"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our services and process."
        />

        <div className="mt-16 divide-y divide-zinc-100">
          {combinedFaqs.map((faq, i) => (
            <div key={i} className="group">
              <button
                className="w-full py-6 md:py-8 flex items-start justify-between text-left focus:outline-none cursor-pointer"
                onClick={() => toggleFAQ(i)}
                aria-expanded={openIndex === i}
              >
                <span className={`text-lg md:text-xl font-medium transition-colors duration-300 pr-8 ${openIndex === i ? 'text-(--color-primary)' : 'text-zinc-900 group-hover:text-(--color-primary)'}`}>
                  {faq.q}
                </span>
                <span className="shrink-0 mt-1">
                  <motion.div
                    animate={{ rotate: openIndex === i ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: "circOut" }}
                  >
                    <Plus className={`w-6 h-6 transition-colors duration-300 ${openIndex === i ? 'text-(--color-primary)' : 'text-zinc-400 group-hover:text-(--color-primary)'}`} />
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
                    <p className="pb-8 text-zinc-500 text-base md:text-lg leading-relaxed max-w-3xl">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}