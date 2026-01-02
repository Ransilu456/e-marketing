import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Users, Workflow, Award, ArrowRight } from "lucide-react";
import Footer from "@/components/ui/Footer";
import Button from "@/components/ui/tools/Button";
import Navbar from "@/components/ui/Navbar";

export const metadata: Metadata = {
  title: {
    absolute: "Terms & Conditions | E Marketing Paradice Sri Lanka – Digital Marketing Services",
  },
  description:
    "Read the official Terms and Conditions of E Marketing Paradice Sri Lanka. Learn about website usage, intellectual property, services, and legal policies.",
  keywords: [
    "E Marketing Paradice Sri Lanka",
    "digital marketing Sri Lanka",
    "SEO services Sri Lanka",
    "terms and conditions Sri Lanka",
    "online marketing company LK",
  ],
  authors: [{ name: "E Marketing Paradice Sri Lanka" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://emarketingparadice.lk/terms" },
  openGraph: {
    title: "Terms & Conditions | E Marketing Paradice Sri Lanka",
    description:
      "Official terms and conditions for using E Marketing Paradice Sri Lanka digital marketing services.",
    url: "https://emarketingparadice.lk/terms",
    siteName: "E Marketing Paradice Sri Lanka",
    type: "website",
    locale: "en_LK",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | E Marketing Paradice Sri Lanka",
    description:
      "Legal terms governing E Marketing Paradice Sri Lanka digital marketing services.",
  },
  other: {
    "geo.region": "LK",
    "geo.placename": "Sri Lanka",
    "geo.position": "7.8731;80.7718",
    ICBM: "7.8731, 80.7718",
  },
};

export default function TermsPage() {
  return (
    <main className="bg-gray-50 min-h-screen relative">
      <Navbar />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,var(--tw-gradient-stops))] from-neutral-100 via-white to-white" />
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[900px] h-[400px] blur-[120px] rounded-full bg-red-500/10 pointer-events-none" />

      <section className="py-28 bg-gray-100 px-6 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight">
            Terms & Conditions
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-700 leading-relaxed">
            Please read these terms carefully before using our website. Your access and use of E Marketing Paradice services constitutes acceptance of these terms.
          </p>
          <div className="mt-6">
            <Link href="/" className="z-20">
              <Button variant="ghost" className="h-3 text-xs uppercase tracking-wide bg-black rounded-md">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="relative z-10 max-w-4xl mx-auto px-6 py-16 text-left">
        <p className="text-gray-800 text-lg leading-relaxed">
          These Terms & Conditions govern your use of the website operated by{" "}
          <strong>E Marketing Paradice</strong>. By accessing or using this website, you
          agree to comply with these terms. We strongly advise reading them thoroughly
          to understand your rights and obligations when using our services.
        </p>
      </section>


      <section className="relative z-10 max-w-5xl mx-auto px-6 py-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "Use of Website",
            text: "You agree to use this website for lawful purposes only and not in a way that violates any applicable laws or regulations.",
            icon: ShieldCheck,
          },
          {
            title: "Intellectual Property",
            text: "All content, designs, logos, and materials on this website are the intellectual property of E Marketing Paradice unless otherwise stated. Unauthorized use is prohibited.",
            icon: Users,
          },
          {
            title: "Services",
            text: "We reserve the right to modify or discontinue any service without notice. Service descriptions do not constitute a binding contract.",
            icon: Workflow,
          },
          {
            title: "Limitation of Liability",
            text: "We are not liable for any indirect, incidental, or consequential damages arising from the use of this website.",
            icon: ShieldCheck,
          },
          {
            title: "Changes to Terms",
            text: "These terms may be updated at any time. Continued use of the site constitutes acceptance of the updated terms.",
            icon: Workflow,
          },
          {
            title: "Contact",
            text: (
              <>
                Email:{" "}
                <a
                  href="mailto:emarketingparadice@gmail.com"
                  className="text-red-600 hover:underline"
                >
                  emarketingparadice@gmail.com
                </a>
              </>
            ),
            icon: Award,
          },
        ].map(({ title, text, icon: Icon }) => (
          <div
            key={title}
            className="bg-white rounded-3xl p-8 shadow-md hover:shadow-lg transition flex flex-col items-center text-center"
          >
            <div className="w-14 h-14 rounded-xl bg-red-500/10 flex items-center justify-center mb-5">
              <Icon className="w-7 h-7 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-3">{title}</h3>
            <p className="text-neutral-600 text-sm leading-relaxed">{text}</p>
          </div>
        ))}
      </section>

      <section className="relative z-10 max-w-6xl mx-auto px-6 py-20">
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

      <Footer />

    </main>
  );
}