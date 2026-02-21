"use client";

import Link from "next/link";
import {
  Target,
  Rocket,
  Users,
  ArrowRight,
  Code,
  Palette,
  BarChart3,
  ShieldCheck,
  Workflow,
  Award,
} from "lucide-react";
import Process from "@/components/ui/home/Proccess";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_top,var(--tw-gradient-stops))] from-neutral-100 via-white to-white"
        />
        <div
          className="absolute top-40 left-1/2 -translate-x-1/2 w-[900px] h-[400px] blur-[120px] rounded-full bg-(--color-primary)/10 pointer-events-none"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div>
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-b from-neutral-900 to-neutral-600 mb-6">
              About <br />
              <span className="text-neutral-900">E Marketing Paradice</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-neutral-600 leading-relaxed font-light">
              We are a digital-first creative agency focused on building modern,
              scalable, and conversion-driven online experiences for ambitious brands.
            </p>
          </div>
        </div>
      </section>

      {/* Mission/Vision/Values Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Our Mission",
              icon: Target,
              color: "bg-rose-50 text-rose-600",
              text: "To help businesses grow online through clean design, modern technology, and performance-focused strategies.",
            },
            {
              title: "Our Vision",
              icon: Rocket,
              color: "bg-amber-50 text-amber-600",
              text: "To become a trusted digital partner for brands worldwide by delivering impactful and future-ready solutions.",
            },
            {
              title: "Our Values",
              icon: Users,
              color: "bg-indigo-50 text-indigo-600",
              text: "Transparency, quality, innovation, and long-term partnerships guide everything we do.",
            },
          ].map(({ title, icon: Icon, text, color }, index) => (
            <div
              key={title}
              className="rounded-3xl border border-neutral-100 bg-white p-10 shadow-sm hover:shadow-xl hover:shadow-neutral-200/50 transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-neutral-900">
                {title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Story Section */}
      <section className="relative z-10 py-24 bg-neutral-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-neutral-900 mb-8"> Our Story </h2>
            <div className="space-y-6 text-neutral-600 text-lg leading-relaxed">
              <p>
                E Marketing Paradice was founded with a specific mission in the digital landscape: to create
                brand ecosystems and digital products that actually perform beyond just looking good. In an industry
                cluttered with generic templates and superficial metrics, we decided to combine rigorous strategy,
                cutting-edge design, and robust development to build websites and campaigns that are fast, universally secure,
                and inherently optimized for real-world, measurable results.
              </p>
              <p>
                Our journey began when we noticed a distinct gap in the Sri Lankan market: businesses were either receiving
                beautiful but incredibly slow websites that couldn't rank on Google, or highly functional systems that completely
                lacked brand identity and user experience refinement. We assembled a team of specialists—from technical SEO engineers
                and Next.js developers to creative directors and conversion rate optimization experts—to bridge this gap.
                Our approach ensures that technical performance and creative intuition work in perfect harmony.
              </p>
              <p>
                Whether you’re launching a disruptive startup requiring a scalable digital infrastructure or scaling an established
                legacy brand trying to modernize its online presence, our focus remains rigidly fixed on long-term value, absolute clarity
                in our processes, and sustainable growth. We don't just build sites; we build strategic business tools designed to generate leads,
                automate sales funnels, and establish unquestionable topical authority in your respective niche. Our methodology is rooted in data,
                tested through continuous A/B iteration, and proven by the compounding success of our portfolio clients.
              </p>
            </div>
          </div>

          <div
            className="relative"
          >
            <div className="aspect-square bg-white rounded-3xl shadow-2xl overflow-hidden border border-neutral-100 p-4">
              <div className="w-full h-full bg-neutral-50 rounded-2xl flex items-center justify-center p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                <div className="relative z-10">
                  <div className="text-6xl font-bold text-neutral-900 mb-4 tracking-tighter"> 2024 </div>
                  <div className="text-neutral-500 font-medium uppercase tracking-widest text-sm"> Founded in Sri Lanka </div>
                </div>
              </div>
            </div>
            {/* Abstract blobs */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-(--color-primary)/5 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-500/5 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4"> What We Do </h2>
          <p className="text-neutral-500 max-w-2xl mx-auto"> We specialize in high-end digital craftsmanship across multiple disciplines. </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Web Design & Development",
              icon: Code,
              text: "High-performance, scalable websites built with modern frameworks and best practices.",
            },
            {
              title: "Branding & UI/UX",
              icon: Palette,
              text: "Visual identities and user experiences designed to engage, convert, and build trust.",
            },
            {
              title: "SEO & Digital Strategy",
              icon: BarChart3,
              text: "Search-optimized strategies that drive traffic, visibility, and long-term growth.",
            },
          ].map(({ title, icon: Icon, text }, index) => (
            <div
              key={title}
              className="rounded-3xl border border-neutral-200 bg-white p-8 hover:border-(--color-primary)/20 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-(--color-primary)/5 flex items-center justify-center mb-6">
                <Icon className="w-6 h-6 text-(--color-primary)" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3"> {title} </h3>
              <p className="text-neutral-600 leading-relaxed"> {text} </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="bg-neutral-900 rounded-[3rem] p-12 md:p-20 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-(--color-primary)/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />

          <div className="text-center mb-16 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6"> Why Choose Marketing Paradice </h2>
          </div>

          <div className="grid gap-12 md:grid-cols-3 text-center relative z-10">
            {[
              {
                title: "Performance First",
                icon: ShieldCheck,
                text: "Speed, SEO, security, and conversions are always our priority.",
              },
              {
                title: "Clear Process",
                icon: Workflow,
                text: "Transparent communication and structured workflows from start to finish.",
              },
              {
                title: "Quality & Trust",
                icon: Award,
                text: "We treat every project with attention to detail and long-term value.",
              },
            ].map(({ title, icon: Icon, text }, index) => (
              <div
                key={title}
              >
                <div className="mx-auto mb-6 w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-white">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4"> {title} </h3>
                <p className="text-neutral-400 leading-relaxed"> {text} </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Process />

      {/* Stats Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="grid gap-12 md:grid-cols-4 text-center">
          {[
            { value: "10+", label: "Projects Completed" },
            { value: "100%", label: "Client Satisfaction" },
            { value: "1+", label: "Years Experience" },
            { value: "24/7", label: "Client Support" },
          ].map(({ value, label }, index) => (
            <div
              key={label}
            >
              <div className="text-5xl font-bold text-neutral-900 mb-2 truncate"> {value} </div>
              <div className="text-neutral-500 font-medium h-10"> {label} </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
        <div
          className="rounded-[3rem] border border-neutral-100 bg-neutral-50 p-12 md:p-20 relative overflow-hidden"
        >
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-(--color-primary)/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl" />

          <h3 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Ready to Grow Your Brand?
          </h3>
          <p className="mt-4 text-neutral-600 max-w-xl mx-auto text-lg leading-relaxed">
            Whether you need a high-performance website, a stronger brand,
            or a complete digital strategy — we’re here to help.
          </p>

          <div className="mt-10 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-neutral-900 px-10 py-4 text-lg font-medium text-white hover:bg-neutral-800 transition shadow-2xl hover:scale-105"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
