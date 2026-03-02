import { Metadata } from "next";
import Link from "next/link";
import { FileText, Settings, Users, Lightbulb, Link2, AlertTriangle, Shield, Handshake, XCircle, Globe, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | E Marketing Paradice",
  description:
    "Read the Terms of Service for E Marketing Paradice. These terms govern your use of our website and digital marketing services.",
};

const sections = [
  { id: "acceptance", icon: FileText, title: "General Conditions", number: "01" },
  { id: "services", icon: Settings, title: "Service Scope", number: "02" },
  { id: "responsibilities", icon: Users, title: "User Responsibilities", number: "03" },
  { id: "intellectual-property", icon: Lightbulb, title: "Intellectual Property", number: "04" },
  { id: "third-party", icon: Link2, title: "Third-Party Links", number: "05" },
  { id: "liability", icon: AlertTriangle, title: "Limitation of Liability", number: "06" },
  { id: "warranties", icon: Shield, title: "Warranties & Disclaimers", number: "07" },
  { id: "indemnification", icon: Handshake, title: "Indemnification", number: "08" },
  { id: "termination", icon: XCircle, title: "Termination", number: "09" },
  { id: "governing-law", icon: Globe, title: "Governing Law", number: "10" },
  { id: "contact", icon: Mail, title: "Contact Us", number: "11" },
];

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#f8f8f6]">
      {/* Hero Header */}
      <div className="bg-zinc-900 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-white/80 mb-6">
            <FileText size={14} />
            <span>Effective Date: February 21, 2026</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
            These terms govern your use of emarketingparadice.lk and any services
            we provide. By using our site, you agree to these terms.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-[260px_1fr] gap-12">

          {/* Sticky Sidebar */}
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
              <div className="mt-8 p-4 bg-amber-50 border border-amber-100 rounded-xl">
                <p className="text-xs font-semibold text-amber-900 mb-1">⚖️ Legal Note</p>
                <p className="text-xs text-amber-700">
                  By using this website, you agree to these terms. Please read carefully before using our services.
                </p>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="space-y-12">

            {/* Intro banner */}
            <div className="bg-white border border-zinc-100 rounded-2xl p-6">
              <p className="text-zinc-600 leading-relaxed">
                Welcome to <strong className="text-zinc-900">E Marketing Paradice</strong>. These Terms of Service constitute a legally binding agreement
                between you and E Marketing Paradice regarding your use of our website (<Link href="/" className="text-blue-600 underline">emarketingparadice.lk</Link>)
                and any digital marketing, web development, SEO, graphic design, and consultation services we provide.
              </p>
              <p className="text-zinc-600 leading-relaxed mt-3">
                Please read these Terms carefully. By accessing or using any part of the site, you agree to be bound by these Terms of Service.
              </p>
            </div>

            {/* Section 1 */}
            <section id="acceptance" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                  <FileText size={18} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 font-mono">01</p>
                  <h2 className="text-xl font-bold text-zinc-900">General Conditions &amp; Acceptance</h2>
                </div>
              </div>
              <div className="pl-[52px] space-y-3 text-zinc-600 leading-relaxed">
                <p>
                  By agreeing to these Terms, you represent that you are at least 18 years of age, or that you have given parental consent for any minor dependents to use this site.
                  You may not use our services for any illegal or unauthorized purpose.
                </p>
                <p>
                  We reserve the right to refuse service to anyone for any reason at any time. We also reserve the right to update these terms at any time, with notice provided on this page.
                </p>
              </div>
            </section>

            <hr className="border-zinc-100" />

            {/* Section 2 */}
            <section id="services" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center">
                  <Settings size={18} className="text-purple-600" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 font-mono">02</p>
                  <h2 className="text-xl font-bold text-zinc-900">Service Scope &amp; Deliverables</h2>
                </div>
              </div>
              <div className="pl-[52px] space-y-4 text-zinc-600">
                <p className="leading-relaxed">
                  E Marketing Paradice provides digital solutions including web development, mobile app design, social media management, SEO, and branding.
                  The specific details, timelines, costs, and deliverables of any project are outlined in a separate Statement of Work (SOW) or invoice agreed upon before work begins.
                </p>
                <div className="grid sm:grid-cols-3 gap-3">
                  {[
                    { label: "Modifications", desc: "We may modify or discontinue any service without notice." },
                    { label: "Pricing", desc: "Prices are subject to change. We'll notify you of changes." },
                    { label: "Revisions", desc: "Fixed-price packages include a set number of revisions. Additional revisions are billed at our standard hourly rate." },
                  ].map((item) => (
                    <div key={item.label} className="bg-white border border-zinc-100 rounded-xl p-4">
                      <p className="font-semibold text-zinc-900 text-sm mb-1">{item.label}</p>
                      <p className="text-xs text-zinc-500">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <hr className="border-zinc-100" />

            {/* Section 3 */}
            <section id="responsibilities" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center">
                  <Users size={18} className="text-teal-600" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 font-mono">03</p>
                  <h2 className="text-xl font-bold text-zinc-900">User Responsibilities &amp; Client Cooperation</h2>
                </div>
              </div>
              <div className="pl-[52px] space-y-3 text-zinc-600 leading-relaxed">
                <p>
                  Successful project delivery depends on prompt, clear communication. You agree to provide all necessary access, materials, content, and feedback in a timely manner.
                  Delays from your side may result in timeline extensions — E Marketing Paradice is not liable for missed deadlines caused by client delays.
                </p>
                <p>
                  You guarantee that any text, graphics, photos, trademarks, or other assets you provide are either owned by you or used with explicit permission.
                </p>
              </div>
            </section>

            <hr className="border-zinc-100" />

            {/* Section 4 */}
            <section id="intellectual-property" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center">
                  <Lightbulb size={18} className="text-amber-600" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 font-mono">04</p>
                  <h2 className="text-xl font-bold text-zinc-900">Intellectual Property &amp; Copyrights</h2>
                </div>
              </div>
              <div className="pl-[52px] space-y-3 text-zinc-600 leading-relaxed">
                <p>
                  All content on this website — images, text, logos, documents, and downloadable files — is the property of E Marketing Paradice and its creators.
                </p>
                <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
                  <p className="text-sm text-amber-900">
                    <strong>Client Projects:</strong> Upon full payment, intellectual property rights of final delivered assets (website code, logo designs, copywriting) are transferred to you.
                    We reserve the right to display completed work in our portfolio unless an NDA is signed prior to project commencement.
                  </p>
                </div>
              </div>
            </section>

            <hr className="border-zinc-100" />

            {/* Section 5 */}
            <section id="third-party" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                  <Link2 size={18} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 font-mono">05</p>
                  <h2 className="text-xl font-bold text-zinc-900">Third-Party Links &amp; Tools</h2>
                </div>
              </div>
              <div className="pl-[52px] text-zinc-600 leading-relaxed">
                <p>
                  We may provide access to third-party tools (e.g., Shopify, WordPress, Google Analytics, Vercel) &quot;as is&quot; without any warranties or endorsement.
                  Our website may contain links to third-party sites — we have no control over their content or privacy practices and strongly advise you to read their terms and policies.
                </p>
              </div>
            </section>

            <hr className="border-zinc-100" />

            {/* Section 6 */}
            <section id="liability" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
                  <AlertTriangle size={18} className="text-red-600" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 font-mono">06</p>
                  <h2 className="text-xl font-bold text-zinc-900">Limitation of Liability</h2>
                </div>
              </div>
              <div className="pl-[52px] space-y-3 text-zinc-600 leading-relaxed">
                <p>
                  E Marketing Paradice shall not be liable for any indirect, incidental, special, consequential, or punitive damages — including lost profits, lost revenue, or loss of data — arising from your use of our services.
                </p>
                <div className="bg-red-50 border border-red-100 rounded-xl p-4">
                  <p className="text-sm text-red-800">
                    Our total liability for any single event is strictly limited to the total amount paid by you to E Marketing Paradice in the twelve (12) months preceding the event giving rise to the claim.
                  </p>
                </div>
              </div>
            </section>

            <hr className="border-zinc-100" />

            {/* Section 7 */}
            <section id="warranties" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
                  <Shield size={18} className="text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 font-mono">07</p>
                  <h2 className="text-xl font-bold text-zinc-900">Warranties &amp; Disclaimers</h2>
                </div>
              </div>
              <div className="pl-[52px] space-y-3 text-zinc-600 leading-relaxed">
                <p>
                  We do not guarantee that our service will be uninterrupted, timely, secure, or error-free. Particularly for SEO and Digital Marketing:
                  while we employ industry best practices, we <strong className="text-zinc-900">cannot guarantee specific search rankings, traffic volumes, or conversion rates</strong>. Search engine algorithms change constantly.
                </p>
              </div>
            </section>

            <hr className="border-zinc-100" />

            {/* Sections 8-10 condensed */}
            <section id="indemnification" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center">
                  <Handshake size={18} className="text-indigo-600" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 font-mono">08</p>
                  <h2 className="text-xl font-bold text-zinc-900">Indemnification</h2>
                </div>
              </div>
              <p className="pl-[52px] text-zinc-600 leading-relaxed">
                You agree to indemnify and hold harmless E Marketing Paradice and its officers, directors, agents, and employees from any claim or demand
                — including reasonable legal fees — made by any third party due to your breach of these Terms or your violation of any law or third-party rights.
              </p>
            </section>

            <hr className="border-zinc-100" />

            <section id="termination" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center">
                  <XCircle size={18} className="text-rose-600" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 font-mono">09</p>
                  <h2 className="text-xl font-bold text-zinc-900">Termination</h2>
                </div>
              </div>
              <p className="pl-[52px] text-zinc-600 leading-relaxed">
                These Terms are effective until terminated by either party. You may terminate by ceasing to use our site. We may terminate your access immediately if we determine you have breached these Terms. All obligations accrued before termination date survive termination.
              </p>
            </section>

            <hr className="border-zinc-100" />

            <section id="governing-law" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center">
                  <Globe size={18} className="text-zinc-700" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 font-mono">10</p>
                  <h2 className="text-xl font-bold text-zinc-900">Governing Law</h2>
                </div>
              </div>
              <p className="pl-[52px] text-zinc-600 leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance with the laws of <strong className="text-zinc-900">Sri Lanka</strong>,
                without regard to its conflict of law provisions.
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
                  <h2 className="text-xl font-bold text-zinc-900">Contact Information</h2>
                </div>
              </div>
              <div className="pl-[52px]">
                <div className="bg-zinc-900 text-white rounded-2xl p-8">
                  <p className="text-white/70 mb-6">
                    Questions about these Terms of Service? We&apos;re happy to clarify anything.
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

            {/* Footer links */}
            <div className="pt-4 flex items-center justify-between text-sm text-zinc-400">
              <span>E Marketing Paradice · Terms of Service · February 2026</span>
              <Link href="/privacy-policy" className="text-zinc-500 hover:text-zinc-900 underline transition-colors">
                ← Privacy Policy
              </Link>
            </div>

          </main>
        </div>
      </div>
    </div>
  );
}