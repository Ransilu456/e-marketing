import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: {
    absolute: "About Us | E Marketing Paradice",
  },
  description:
    "Learn about E Marketing Paradice, a leading digital agency in Sri Lanka specializing in web design, development, branding, SEO, and UI/UX solutions to help businesses grow online.",
  keywords: [
    "E Marketing Paradice",
    "digital agency Sri Lanka",
    "web design Sri Lanka",
    "web development Sri Lanka",
    "branding services",
    "SEO services",
    "UI UX design",
    "digital marketing company",
    "About Us"
  ],
  authors: [{ name: "E Marketing Paradice" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://emarketingparadice.lk/about",
  },
  openGraph: {
    title: "About Us | E Marketing Paradice",
    description:
      "Discover how E Marketing Paradice creates modern, scalable, and performance-driven digital experiences for growing brands in Sri Lanka.",
    url: "https://emarketingparadice.lk/about",
    siteName: "E Marketing Paradice",
    type: "website",
    locale: "en_LK",
    images: [
      {
        url: "https://emarketingparadice.lk/og-image.png",
        width: 1200,
        height: 630,
        alt: "E Marketing Paradice Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | E Marketing Paradice",
    description:
      "E Marketing Paradice is a Sri Lankan digital agency delivering web design, branding, SEO, and UI/UX solutions for businesses to thrive online.",
    images: ["https://emarketingparadice.lk/og-image.png"],
  },
  other: {
    "geo.region": "LK",
    "geo.placename": "Sri Lanka",
    "geo.position": "7.8731;80.7718",
    ICBM: "7.8731, 80.7718",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,var(--tw-gradient-stops))] from-neutral-100 via-white to-white" />
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[900px] h-[400px] blur-[120px] rounded-full bg-(--color-primary)/10 pointer-events-none" />

      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 text-center">
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-b from-neutral-900 to-neutral-600">
          About E Marketing Paradice
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-neutral-600 leading-relaxed">
          We are a digital-first creative agency focused on building modern,
          scalable, and conversion-driven online experiences for ambitious brands.
        </p>
      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid gap-12 md:grid-cols-3">
        {[
          {
            title: "Our Mission",
            icon: Target,
            text:
              "To help businesses grow online through clean design, modern technology, and performance-focused strategies.",
          },
          {
            title: "Our Vision",
            icon: Rocket,
            text:
              "To become a trusted digital partner for brands worldwide by delivering impactful and future-ready solutions.",
          },
          {
            title: "Our Values",
            icon: Users,
            text:
              "Transparency, quality, innovation, and long-term partnerships guide everything we do.",
          },
        ].map(({ title, icon: Icon, text }) => (
          <div
            key={title}
            className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm hover:shadow-md transition"
          >
            <div className="w-12 h-12 rounded-xl bg-(--color-primary)/10 flex items-center justify-center mb-5">
              <Icon className="w-6 h-6 text-(--color-primary)" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-neutral-900">
              {title}
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              {text}
            </p>
          </div>
        ))}
      </section>

      <section className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold text-neutral-900 mb-6">
          Our Story
        </h2>
        <p className="text-neutral-600 leading-relaxed max-w-3xl mx-auto">
          Marketing Paradice was founded with a simple idea: create digital
          products that actually perform. We combine strategy, design, and
          development to build websites that are fast, secure, and optimized
          for real-world results.
          <br />
          <br />
          Whether you’re launching a startup or scaling an established brand,
          our focus is on long-term value, clarity, and growth.
        </p>
      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold text-center text-neutral-900 mb-12">
          What We Do
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Web Design & Development",
              icon: Code,
              text:
                "High-performance, scalable websites built with modern frameworks and best practices.",
            },
            {
              title: "Branding & UI/UX",
              icon: Palette,
              text:
                "Visual identities and user experiences designed to engage, convert, and build trust.",
            },
            {
              title: "SEO & Digital Strategy",
              icon: BarChart3,
              text:
                "Search-optimized strategies that drive traffic, visibility, and long-term growth.",
            },
          ].map(({ title, icon: Icon, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm hover:shadow-md transition"
            >
              <div className="w-12 h-12 rounded-xl bg-(--color-primary)/10 flex items-center justify-center mb-5">
                <Icon className="w-6 h-6 text-(--color-primary)" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                {title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 bg-neutral-50 rounded-3xl">
        <h2 className="text-3xl font-semibold text-center text-neutral-900 mb-12">
          Why Choose Marketing Paradice
        </h2>

        <div className="grid gap-10 md:grid-cols-3 text-center">
          {[
            {
              title: "Performance First",
              icon: ShieldCheck,
              text:
                "Speed, SEO, security, and conversions are always our priority.",
            },
            {
              title: "Clear Process",
              icon: Workflow,
              text:
                "Transparent communication and structured workflows from start to finish.",
            },
            {
              title: "Quality & Trust",
              icon: Award,
              text:
                "We treat every project with attention to detail and long-term value.",
            },
          ].map(({ title, icon: Icon, text }) => (
            <div key={title}>
              <div className="mx-auto mb-4 w-12 h-12 rounded-xl bg-(--color-primary)/10 flex items-center justify-center">
                <Icon className="w-6 h-6 text-(--color-primary)" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                {title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Process />

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid gap-8 md:grid-cols-4 text-center">
          {[
            { value: "10+", label: "Projects Completed" },
            { value: "100%", label: "Client Satisfaction" },
            { value: "1+", label: "Years Experience" },
            { value: "24/7", label: "Client Support" },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="text-4xl font-bold text-neutral-900">{value}</div>
              <div className="mt-2 text-sm text-neutral-600">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
        <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-12">
          <h3 className="text-3xl font-semibold text-neutral-900">
            Ready to Grow Your Brand?
          </h3>
          <p className="mt-4 text-neutral-600 max-w-xl mx-auto">
            Whether you need a high-performance website, a stronger brand,
            or a complete digital strategy — we’re here to help.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-(--color-primary) px-6 py-3 text-sm font-medium text-white hover:opacity-90 transition shadow-md"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer/>
    </main>
  );
}
