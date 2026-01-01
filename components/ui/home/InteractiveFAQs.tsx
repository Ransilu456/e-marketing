"use client"

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import SectionHeading from "../tools/SectionHeading";
import { Icon } from "../tools/Icon";

export default function InteractiveFAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const combinedFaqs: { q: string; a: string }[] = [
    { q: "What technologies do you specialize in for web development?", a: "We primarily use the MERN stack (MongoDB, Express, React, Node.js) for full-stack development, alongside popular frameworks like Next.js for high-performance applications." },
    { q: "Can you develop native or cross-platform mobile apps?", a: "We specialize in cross-platform development using React Native, which allows us to efficiently build a single codebase that runs natively on Android." },
    { q: "Do you provide post-launch maintenance and support?", a: "Yes, we offer flexible maintenance packages that cover bug fixes, security updates, feature enhancements, and technical support to ensure your application runs smoothly." },
    { q: "Do I need to provide the images and copy for the poster?", a: "We encourage clients to provide their branding guidelines and key messages. We can handle image sourcing using royalty-free stock libraries and offer basic copy editing as part of the package." },
    { q: "Which social media platforms do you manage?", a: "We manage all major platforms, including Facebook, TikTok, and Youtube, tailoring content and strategy specifically to each platform's audience and best practices." },
    { q: "How do you measure the success of a social media campaign?", a: "We track key performance indicators (KPIs) such as engagement rate, reach, follower growth, website traffic, and, most importantly, conversion rates relevant to your business goals." }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white border-t border-zinc-100">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeading
          badge="Questions"
          title="Advanced FAQs"
          subtitle="In-depth answers to common and technical queries."
        />

        <div className="space-y-2 mt-12">
          {combinedFaqs.map((faq, i: number) => (
            <div
              key={i}
              className="border border-zinc-200 rounded-xl overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full py-5 px-6 flex items-center justify-between text-left text-zinc-900 hover:bg-zinc-50 transition-colors"
                onClick={() => toggleFAQ(i)}
              >
                <span className="font-semibold text-lg pr-8">{faq.q}</span>
                <Icon
                  name={openIndex === i ? "Minus" : "Plus"}
                  size={18}
                  className="shrink-0 text-(--color-primary) transition-transform duration-300"
                />
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-zinc-500 text-sm leading-relaxed px-6 pb-6 pt-2 bg-zinc-50 border-t border-zinc-200">
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