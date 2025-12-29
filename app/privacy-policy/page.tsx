import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | E Marketing Paradice Sri Lanka",
  description:
    "Learn how E Marketing Paradice Sri Lanka collects, uses, and protects your personal data.",
  openGraph: {
    title: "Privacy Policy | E Marketing Paradice Sri Lanka",
    description:
      "Your privacy matters. Read how we handle user data responsibly.",
    url: "https://emarketingparadice.lk/privacy-policy",
    siteName: "E Marketing Paradice Sri Lanka",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-zinc-50 min-h-screen">
      {/* Header */}
      <header className="py-24 bg-white border-b border-zinc-200">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-base md:text-lg text-zinc-600">
            How E Marketing Paradice Sri Lanka collects, uses, and protects your
            information.
          </p>
        </div>
      </header>

      {/* Document */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <article className="bg-white rounded-2xl shadow-sm border border-zinc-200 p-8 md:p-12 space-y-10 text-zinc-700 leading-relaxed">
            
            {/* Intro */}
            <p className="text-base">
              This Privacy Policy explains how <strong>E Marketing Paradice</strong>{" "}
              collects, uses, and safeguards your information when you visit our
              website or use our digital marketing services in Sri Lanka. By
              accessing our website, you agree to this policy.
            </p>

            {/* Section */}
            <section>
              <h2 className="text-xl font-semibold text-zinc-900 mb-3">
                1. Information We Collect
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name, email address, and phone number submitted via forms</li>
                <li>Usage data such as browser type, pages visited, and device information</li>
                <li>Information you voluntarily provide through contact forms</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-zinc-900 mb-3">
                2. How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To respond to inquiries and provide services</li>
                <li>To improve website functionality and user experience</li>
                <li>To send service updates or important communications</li>
                <li>To maintain security and prevent misuse</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-zinc-900 mb-3">
                3. Cookies & Tracking Technologies
              </h2>
              <p>
                We use cookies and similar technologies to analyze traffic and
                improve your experience. You may disable cookies via your
                browser settings at any time.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-zinc-900 mb-3">
                4. Data Sharing & Third Parties
              </h2>
              <p>
                We do not sell or rent your personal data. Information may be
                shared only with trusted third-party services when required to
                operate our website or comply with legal obligations.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-zinc-900 mb-3">
                5. Data Security
              </h2>
              <p>
                We apply reasonable technical and organizational measures to
                protect your data. However, no online platform can guarantee
                absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-zinc-900 mb-3">
                6. Your Rights
              </h2>
              <p>
                You may request access, correction, or deletion of your personal
                information by contacting us.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-zinc-900 mb-3">
                7. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy periodically. Any changes will
                be posted on this page with an updated revision date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-zinc-900 mb-3">
                8. Contact Information
              </h2>
              <ul className="space-y-2">
                <li>
                  Email:{" "}
                  <a
                    href="mailto:emarketingparadice@gmail.com"
                    className="text-red-600 hover:underline"
                  >
                    emarketingparadice@gmail.com
                  </a>
                </li>
                <li>Location: Kuliyapitiya, Sri Lanka 🇱🇰</li>
              </ul>
            </section>

            {/* Footer */}
            <footer className="pt-8 border-t border-zinc-200 text-sm text-zinc-500 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <span>
                Last updated:{" "}
                <strong>{new Date().toLocaleDateString()}</strong>
              </span>
              <Link href="/" className="text-red-600 hover:underline">
                ← Back to Home
              </Link>
            </footer>
          </article>
        </div>
      </section>
    </main>
  );
}
