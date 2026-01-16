"use client";

import { CheckCircle, BarChart3, Code, Zap, Layout } from "lucide-react";


export default function Methodology() {
  return (
    <section id="methodology" className="py-24 bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div
            className="md:col-span-1"
          >
            <h2 className="text-4xl font-extrabold tracking-tighter text-zinc-900 mb-6">Our Methodology</h2>
            <p className="text-lg text-zinc-500 leading-relaxed mb-8">
              We don&apos;t rely on guesswork. Every decision is backed by live data, ensuring your growth infrastructure is built on solid ground.
            </p>
            <ul className="space-y-4">
              {[
                { label: "Technical SEO Audits", id: 1 },
                { label: "Next.js Development", id: 2 },
                { label: "Conversion Rate Optimization", id: 3 },
              ].map((item, i) => (
                <li
                  key={item.id}
                  className="flex items-center gap-3 text-sm font-semibold text-(--color-primary)"
                >
                  <CheckCircle className="text-(--color-icons-and-text) w-4 h-4 shrink-0" />
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 grid sm:grid-cols-2 gap-8">
            {[
              { title: "SEO Strategy", icon: BarChart3, text: "Comprehensive keyword mapping, backlink acquisition, and on-page optimization designed to rank." },
              { title: "UI/UX Design", icon: Layout, text: "Interfaces built for conversion. We design systems that guide users seamlessly from landing to checkout." },
              { title: "Web Development", icon: Code, text: "Performance-obsessed code. Headless CMS implementations, React applications, and API integrations." },
              { title: "Performance Marketing", icon: Zap, text: "Paid acquisition channels that scale. We manage Google Ads and Social spend with ROI focus." },
            ].map((item, i) => (
              <div
                key={item.title}
                className="p-8 rounded-2xl border border-zinc-200 bg-zinc-50 hover:bg-white hover:border-(--color-text) hover:shadow-xl hover:shadow-red-100/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-(--color-primary) mb-4 shadow-sm">
                  <item.icon size={20} />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}