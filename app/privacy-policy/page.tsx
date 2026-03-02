import { Metadata } from "next";
import Link from "next/link";
import { Shield, Eye, Cookie, Share2, Lock, Clock, User, Baby, RefreshCw, Mail, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | E Marketing Paradice",
  description:
    "Read the Privacy Policy of E Marketing Paradice. We are committed to protecting your personal information and your right to privacy.",
};

const sections = [
  { id: "information-we-collect", icon: Eye, title: "Information We Collect", number: "01" },
  { id: "how-we-use", icon: User, title: "How We Use Your Information", number: "02" },
  { id: "cookies", icon: Cookie, title: "Cookies & Tracking", number: "03" },
  { id: "google-adsense", icon: Shield, title: "Google AdSense & Ads", number: "04" },
  { id: "sharing", icon: Share2, title: "Sharing of Information", number: "05" },
  { id: "security", icon: Lock, title: "Data Security", number: "06" },
  { id: "retention", icon: Clock, title: "Data Retention", number: "07" },
  { id: "rights", icon: User, title: "Your Rights (GDPR/CCPA)", number: "08" },
  { id: "children", icon: Baby, title: "Children's Privacy", number: "09" },
  { id: "changes", icon: RefreshCw, title: "Policy Changes", number: "10" },
  { id: "contact", icon: Mail, title: "Contact Us", number: "11" },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#f8f8f6]">
      {/* Hero Header */}
      <div className="bg-zinc-900 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-white/80 mb-6">
            <Shield size={14} />
            <span>Last Updated: March 2, 2026</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
            We believe privacy is a fundamental right. This policy explains exactly
            what data we collect, why we collect it, and how we protect it — in plain language.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-[260px_1fr] gap-12">

          {/* Sticky Sidebar Navigation */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-4">Contents</p>
              <nav className="space-y-1">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-all group"
                  >
                    <span className="text-xs font-mono text-zinc-300 group-hover:text-zinc-500">{s.number}</span>
                    <span>{s.title}</span>
                  </a>
                ))}
              </nav>
              <div className="mt-8 p-4 bg-zinc-900 rounded-xl text-white">
                <p className="text-xs font-semibold mb-1">Questions?</p>
                <p className="text-xs text-white/60 mb-3">Contact our Data Privacy Officer</p>
                <a href="mailto:emarketingparadice@gmail.com" className="text-xs text-white/80 underline break-all">
                  emarketingparadice@gmail.com
                </a>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="space-y-12">

            {/* Section 1 */}
            <section id="information-we-collect" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                  <Eye size={18} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 font-mono">01</p>
                  <h2 className="text-xl font-bold text-zinc-900">Information We Collect</h2>
                </div>
              </div>
              <div className="pl-[52px] space-y-4 text-zinc-600 leading-relaxed">
                <p>
                  When you engage with E Marketing Paradice, we collect information to provide you with the best possible service.
                  This falls into two categories:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white border border-zinc-100 rounded-xl p-5">
                    <h3 className="font-semibold text-zinc-900 mb-2 text-sm">📋 Directly Provided</h3>
                    <p className="text-sm text-zinc-500">Name, email, phone, company name, and address — provided when you fill out forms, request quotes, or subscribe to our newsletter.</p>
                  </div>
                  <div className="bg-white border border-zinc-100 rounded-xl p-5">
                    <h3 className="font-semibold text-zinc-900 mb-2 text-sm">🔍 Automatically Collected</h3>
                    <p className="text-sm text-zinc-500">IP address, browser type, device info, page views, and visit timestamps — collected via cookies and analytics tools.</p>
                  </div>
                </div>
              </div>
            </section>

            <hr className="border-zinc-100" />

            {/* Section 2 */}
            <section id="how-we-use" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center">
                  <User size={18} className="text-purple-600" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 font-mono">02</p>
                  <h2 className="text-xl font-bold text-zinc-900">How We Use Your Information</h2>
                </div>
              </div>
              <div className="pl-[52px]">
                <p className="text-zinc-600 leading-relaxed mb-4">We use your information strictly to operate our business and improve your experience:</p>
                <ul className="space-y-2">
                  {[
                    "Provide, operate, and maintain our website and digital services",
                    "Process transactions and send confirmations and invoices",
                    "Respond to your enquiries with dedicated customer support",
                    "Send technical notices, security alerts, and updates",
                    "Communicate promotions, events, and service updates",
                    "Monitor and analyse usage trends to improve our site",
                    "Detect and prevent fraudulent or illegal activities",
                    "Personalise content and ads based on your preferences (with consent)",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-zinc-600 text-sm">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <hr className="border-zinc-100" />

            {/* Section 3 */}
            <section id="cookies" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center">
                  <Cookie size={18} className="text-amber-600" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 font-mono">03</p>
                  <h2 className="text-xl font-bold text-zinc-900">Cookies &amp; Tracking Technologies</h2>
                </div>
              </div>
              <div className="pl-[52px] space-y-4 text-zinc-600 leading-relaxed">
                <p>
                  We use cookies, web beacons, and similar technologies to collect browsing data and improve our services.
                  When you first visit, a consent banner lets you choose what you are comfortable with.
                </p>
                <div className="grid sm:grid-cols-3 gap-3">
                  {[
                    { label: "Essential", desc: "Always active. Required for site functionality.", color: "bg-green-50 border-green-100 text-green-700" },
                    { label: "Analytics", desc: "Google Analytics — helps us understand traffic patterns.", color: "bg-blue-50 border-blue-100 text-blue-700" },
                    { label: "Advertising", desc: "Google AdSense — shows relevant ads based on interests.", color: "bg-orange-50 border-orange-100 text-orange-700" },
                  ].map((c) => (
                    <div key={c.label} className={`border rounded-xl p-4 ${c.color}`}>
                      <p className="font-semibold text-sm mb-1">{c.label}</p>
                      <p className="text-xs opacity-80">{c.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm">
                  You can control cookies through your browser settings or by clicking &quot;Decline&quot; on our cookie banner.
                  Declining will not block the site but will disable personalised advertising.
                </p>
              </div>
            </section>

            <hr className="border-zinc-100" />

            {/* Section 4 - AdSense */}
            <section id="google-adsense" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
                  <Shield size={18} className="text-red-600" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 font-mono">04</p>
                  <h2 className="text-xl font-bold text-zinc-900">Google AdSense &amp; Third-Party Advertising</h2>
                </div>
              </div>
              <div className="pl-[52px] space-y-4 text-zinc-600 leading-relaxed">
                <div className="bg-red-50 border border-red-100 rounded-xl p-5">
                  <p className="text-sm font-semibold text-red-800 mb-1">⚠️ Important Advertising Disclosure</p>
                  <p className="text-sm text-red-700">
                    This website uses <strong>Google AdSense</strong> (Publisher ID: <code className="bg-red-100 px-1 rounded">pub-4444198189403985</code>).
                    Google and its partners may use cookies to show you personalised ads based on your browsing history.
                  </p>
                </div>
                <p>
                  <strong className="text-zinc-900">How it works:</strong> If you accepted our cookie consent, Google&apos;s advertising cookies may track
                  your browsing across sites to show relevant ads. If you declined, only non-personalised, context-based ads are served — these do not track you.
                </p>
                <div className="bg-white border border-zinc-100 rounded-xl p-5 space-y-3">
                  <p className="font-semibold text-zinc-900 text-sm">Opt Out of Personalised Ads</p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://www.google.com/settings/ads"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 text-white rounded-lg text-sm hover:bg-zinc-700 transition-colors"
                    >
                      Google Ads Settings <ExternalLink size={12} />
                    </a>
                    <a
                      href="https://www.aboutads.info/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 border border-zinc-200 text-zinc-700 rounded-lg text-sm hover:bg-zinc-50 transition-colors"
                    >
                      About Ads Info <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
                <p className="text-sm">
                  For more on Google&apos;s data practices, visit{" "}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                    policies.google.com/privacy
                  </a>.
                </p>
              </div>
            </section>

            <hr className="border-zinc-100" />

            {/* Section 5 */}
            <section id="sharing" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center">
                  <Share2 size={18} className="text-teal-600" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 font-mono">05</p>
                  <h2 className="text-xl font-bold text-zinc-900">Sharing of Information</h2>
                </div>
              </div>
              <div className="pl-[52px] space-y-4 text-zinc-600">
                <p className="leading-relaxed">
                  <strong className="text-zinc-900">We never sell or rent your data.</strong> We may share it only in these specific circumstances:
                </p>
                <div className="space-y-3">
                  {[
                    { title: "Service Providers", desc: "Trusted vendors who help operate our business (hosting, payments, analytics)." },
                    { title: "Legal Requirements", desc: "When required by law, regulation, or governmental request." },
                    { title: "Business Transfers", desc: "During mergers, acquisitions, or asset sales — you will be notified." },
                    { title: "With Your Consent", desc: "Only when you have explicitly authorised us to share your information." },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4 bg-white border border-zinc-100 rounded-xl p-4">
                      <div className="w-1.5 bg-teal-400 rounded-full shrink-0" />
                      <div>
                        <p className="font-semibold text-zinc-900 text-sm">{item.title}</p>
                        <p className="text-sm text-zinc-500 mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <hr className="border-zinc-100" />

            {/* Sections 6-11 condensed */}
            <section id="security" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
                  <Lock size={18} className="text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 font-mono">06</p>
                  <h2 className="text-xl font-bold text-zinc-900">Data Security</h2>
                </div>
              </div>
              <p className="pl-[52px] text-zinc-600 leading-relaxed">
                We implement industry-standard security measures including SSL/TLS encryption for all data in transit and
                secure server environments. No internet transmission is 100% secure, and we cannot guarantee absolute security,
                but we take every reasonable precaution to protect your information.
              </p>
            </section>

            <hr className="border-zinc-100" />

            <section id="retention" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center">
                  <Clock size={18} className="text-indigo-600" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 font-mono">07</p>
                  <h2 className="text-xl font-bold text-zinc-900">Data Retention</h2>
                </div>
              </div>
              <p className="pl-[52px] text-zinc-600 leading-relaxed">
                We retain your personal information only as long as necessary for the purposes outlined in this policy,
                or as required by applicable law. When data is no longer needed, we securely delete or anonymise it.
              </p>
            </section>

            <hr className="border-zinc-100" />

            <section id="rights" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center">
                  <User size={18} className="text-violet-600" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 font-mono">08</p>
                  <h2 className="text-xl font-bold text-zinc-900">Your Rights (GDPR &amp; CCPA)</h2>
                </div>
              </div>
              <div className="pl-[52px]">
                <p className="text-zinc-600 leading-relaxed mb-4">Depending on your location, you may have the right to:</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Access the personal data we hold about you",
                    "Request correction of inaccurate data",
                    "Request erasure of your data",
                    "Object to or restrict processing",
                    "Request data portability",
                    "Withdraw consent at any time",
                  ].map((right) => (
                    <div key={right} className="flex items-center gap-2 bg-white border border-zinc-100 rounded-lg px-4 py-3">
                      <span className="text-violet-500 text-sm">✓</span>
                      <span className="text-sm text-zinc-700">{right}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <hr className="border-zinc-100" />

            <section id="children" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center">
                  <Baby size={18} className="text-pink-600" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 font-mono">09</p>
                  <h2 className="text-xl font-bold text-zinc-900">Children&apos;s Privacy</h2>
                </div>
              </div>
              <p className="pl-[52px] text-zinc-600 leading-relaxed">
                Our services are not directed to individuals under 18. We do not knowingly collect personal information from children.
                If you believe your child has provided us with information, please contact us immediately and we will delete it.
              </p>
            </section>

            <hr className="border-zinc-100" />

            <section id="changes" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center">
                  <RefreshCw size={18} className="text-orange-600" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 font-mono">10</p>
                  <h2 className="text-xl font-bold text-zinc-900">Policy Changes</h2>
                </div>
              </div>
              <p className="pl-[52px] text-zinc-600 leading-relaxed">
                We may update this policy periodically. We will notify you of material changes by posting the new policy
                on this page and updating the &quot;Last Updated&quot; date. We encourage you to review this page regularly.
              </p>
            </section>

            <hr className="border-zinc-100" />

            {/* Contact Section */}
            <section id="contact" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center">
                  <Mail size={18} className="text-zinc-700" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 font-mono">11</p>
                  <h2 className="text-xl font-bold text-zinc-900">Contact Us</h2>
                </div>
              </div>
              <div className="pl-[52px]">
                <div className="bg-zinc-900 text-white rounded-2xl p-8">
                  <p className="text-white/70 mb-6">
                    Questions about this Privacy Policy or your data? Reach our Data Privacy Officer:
                  </p>
                  <div className="space-y-3">
                    <a href="mailto:emarketingparadice@gmail.com" className="flex items-center gap-3 text-white/90 hover:text-white transition-colors">
                      <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                        <Mail size={14} />
                      </div>
                      <span>emarketingparadice@gmail.com</span>
                    </a>
                    <div className="flex items-center gap-3 text-white/90">
                      <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                        <span className="text-xs">📞</span>
                      </div>
                      <span>+94 76 346 0514</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/90">
                      <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                        <span className="text-xs">📍</span>
                      </div>
                      <span>Kuliyapitiya, Sri Lanka</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Back to top */}
            <div className="pt-4 flex items-center justify-between text-sm text-zinc-400">
              <span>E Marketing Paradice · Privacy Policy · March 2026</span>
              <Link href="/terms" className="text-zinc-500 hover:text-zinc-900 underline transition-colors">
                Terms of Service →
              </Link>
            </div>

          </main>
        </div>
      </div>
    </div>
  );
}
