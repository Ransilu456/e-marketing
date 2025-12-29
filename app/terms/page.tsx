import type { Metadata } from "next";

import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Terms & Conditions | E Marketing Paradice Sri Lanka – Digital Marketing Services",
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
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://emarketingparadice.lk/terms",
  },
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
    card: "summary",
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
    <main className="bg-white min-h-screen">
      <section className="py-24 bg-grid border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-900 mb-6">
            Terms & Conditions
          </h1>
          <p className="text-lg text-zinc-500">
            Please read these terms carefully before using our website.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-10 text-zinc-700">

          <p>
            These Terms & Conditions govern your use of the website operated by
            <strong> E Marketing Paradice</strong>. By accessing this website,
            you agree to be bound by these terms.
          </p>

          <div>
            <h2 className="text-2xl font-bold text-zinc-900 mb-3">
              1. Use of Website
            </h2>
            <p>
              You agree to use this website for lawful purposes only and not in a
              way that violates any applicable laws or regulations.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-zinc-900 mb-3">
              2. Intellectual Property
            </h2>
            <p>
              All content, designs, logos, and materials on this website are the
              intellectual property of E Marketing Paradice unless otherwise stated.
              Unauthorized use is prohibited.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-zinc-900 mb-3">
              3. Services
            </h2>
            <p>
              We reserve the right to modify or discontinue any service without
              notice. Service descriptions do not constitute a binding contract.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-zinc-900 mb-3">
              4. Limitation of Liability
            </h2>
            <p>
              We are not liable for any indirect, incidental, or consequential
              damages arising from the use of this website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-zinc-900 mb-3">
              5. Changes to Terms
            </h2>
            <p>
              These terms may be updated at any time. Continued use of the site
              constitutes acceptance of the updated terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-zinc-900 mb-3">
              6. Contact
            </h2>
            <p>
              Email:{" "}
              <a
                href="mailto:emarketingparadice@gmail.com"
                className="text-red-600 hover:underline"
              >
                emarketingparadice@gmail.com
              </a>
            </p>
          </div>

          <div className="pt-8 border-t text-sm text-zinc-500">
            <Link href="/" className="text-red-600 hover:underline">
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
