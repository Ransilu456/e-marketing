
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | eMarketing Paradice",
  description:
    "Learn how eMarketing Paradice collects, uses, and protects your personal data.",
  openGraph: {
    title: "Privacy Policy | eMarketing Paradice",
    description:
      "Your privacy matters. Read how we handle user data responsibly.",
    url: "https://emarketingparadice.lk/privacy-policy",
    siteName: "eMarketing Paradice",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Header */}
      <section className="py-24 bg-grid border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-zinc-500">
            Your privacy is important to us. This policy explains how we collect,
            use, and protect your information.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-12 text-zinc-700 leading-relaxed">
          
          {/* Intro */}
          <div>
            <p>
              This Privacy Policy describes how <strong>E Marketing Paradice</strong> we
              collect, use, and safeguards your information when you visit our website.
              By using our site, you agree to the terms of this Privacy Policy.
            </p>
          </div>

          {/* Information We Collect */}
          <div>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">
              1. Information We Collect
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Personal information such as name, email address, phone number (when you submit forms).</li>
              <li>Usage data including pages visited, browser type, and device information.</li>
              <li>Any information you voluntarily provide through contact or inquiry forms.</li>
            </ul>
          </div>

          {/* How We Use Information */}
          <div>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To respond to inquiries and provide requested services.</li>
              <li>To improve website performance, content, and user experience.</li>
              <li>To communicate updates, offers, or service-related information.</li>
              <li>To ensure security and prevent fraud or misuse.</li>
            </ul>
          </div>

          {/* Cookies */}
          <div>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">
              3. Cookies & Tracking Technologies
            </h2>
            <p>
              We may use cookies and similar technologies to enhance your browsing experience,
              analyze traffic, and understand user behavior. You can disable cookies through
              your browser settings at any time.
            </p>
          </div>

          {/* Data Sharing */}
          <div>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">
              4. Data Sharing & Third Parties
            </h2>
            <p>
              We do not sell or rent your personal data. Your information may only be shared
              with trusted third-party services when necessary to operate our website
              or comply with legal obligations.
            </p>
          </div>

          {/* Data Security */}
          <div>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">
              5. Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational measures to protect
              your data. However, no online transmission is 100% secure, and we cannot
              guarantee absolute security.
            </p>
          </div>

          {/* User Rights */}
          <div>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">
              6. Your Rights
            </h2>
            <p>
              You have the right to request access, correction, or deletion of your
              personal data. To exercise these rights, please contact us using the
              details below.
            </p>
          </div>

          {/* Updates */}
          <div>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">
              7. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will
              be posted on this page with an updated effective date.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">
              8. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="mt-3 space-y-1">
              <li>Email: <a href="mailto:emarketingparadice@gmail.com" className="text-red-600 hover:underline">
                emarketingparadice@gmail.com
              </a></li>
              <li>Location: Kuliyapitiya, Sri Lanka</li>
            </ul>
          </div>

          {/* Footer Link */}
          <div className="pt-10 border-t border-zinc-200 text-sm text-zinc-500">
            <p>
              Last updated: <strong>{new Date().toLocaleDateString()}</strong>
            </p>
            <Link href="/" className="text-red-600 hover:underline">
              ← Back to Home
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
