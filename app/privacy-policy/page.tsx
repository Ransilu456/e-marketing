import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Eye, Lock, Database, UserCheck, RefreshCcw, Mail, ArrowLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";

export const metadata: Metadata = {
  title: "Privacy Policy | E Marketing Paradice Sri Lanka",
  description: "Learn how E Marketing Paradice Sri Lanka collects, uses, and protects your personal data.",
};

export default function PrivacyPolicyPage() {
  const sections = [
    {
      id: "collection",
      item: "1",
      title: "Information We Collect",
      icon: Database,
      points: [
        "Name, email address, and phone number submitted via forms",
        "Usage data such as browser type, pages visited, and IP address",
        "Cookie information to improve user session persistence",
      ]
    },
    {
      id: "usage",
      item: "2",
      title: "How We Use Data",
      icon: Eye,
      points: [
        "To provide and maintain our marketing services",
        "To notify you about changes to our terms or services",
        "To provide customer support and service inquiries",
        "To monitor the usage of our platform for security",
      ]
    },
    {
      id: "security",
      item: "3",
      title: "Data Security",
      icon: Lock,
      content: "We implement industry-standard encryption and security protocols to protect your personal data. However, remember that no method of transmission over the Internet is 100% secure."
    },
    {
      id: "sharing",
      item: "4",
      title: "Third-Party Sharing",
      icon: UserCheck,
      content: "We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except to provide our core services."
    },
    {
      id: "advertising",
      item: "5",
      title: "Advertising Partners",
      icon: Database,
      content: "Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to this website or other websites. Google's use of advertising cookies enables it and its partners to serve ads to your users based on their visit to your sites and/or other sites on the Internet. Users may opt out of personalized advertising by visiting Google Ads Settings."
    },
    {
      id: "adsense",
      item: "6",
      title: "Google AdSense & Advertising Cookies",
      icon: Shield,
      content: "We use Google AdSense to display advertisements. Google AdSense uses DoubleClick cookies, which enable it and its partners to serve ads to users based on their visits to this website and/or other websites on the Internet. Users may opt out of personalized advertising by visiting Google Ads Settings. For more information on how Google manages data in advertising products, please visit https://policies.google.com/technologies/ads."
    }
  ];

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Header Sticky Progress / Breadcrumb */}
      <div className="pt-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-4 text-sm text-slate-400">
          <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-900 font-medium">Privacy Policy</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="flex flex-col lg:flex-row gap-20">

          {/* Sidebar Navigation */}
          <aside className="lg:w-1/4 hidden lg:block sticky top-32 h-fit">
            <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">On this page</h5>
            <nav className="flex flex-col gap-6">
              {sections.map(s => (
                <a key={s.id} href={`#${s.id}`} className="group flex items-center gap-4 text-slate-500 hover:text-(--color-primary) transition-all">
                  <span className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-xs font-bold group-hover:bg-(--color-primary)/10 group-hover:text-(--color-primary) transition-colors">
                    {s.item}
                  </span>
                  <span className="font-medium">{s.title}</span>
                </a>
              ))}
              <a href="#contact" className="group flex items-center gap-4 text-slate-500 hover:text-(--color-primary) transition-all">
                <span className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-xs font-bold group-hover:bg-(--color-primary)/10 group-hover:text-(--color-primary) transition-colors">
                  6
                </span>
                <span className="font-medium">Contact</span>
              </a>
            </nav>
          </aside>

          {/* Main Content */}
          <div className="lg:w-3/4 max-w-3xl">
            <div className="mb-16">
              <div className="inline-flex items-center gap-2 text-(--color-primary) bg-(--color-primary)/5 px-4 py-2 rounded-full text-sm font-bold mb-8">
                <Shield className="w-4 h-4" />
                Updated {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 tracking-tight mb-8 leading-tight">
                Your privacy is our <span className="text-(--color-primary)">top priority</span>
              </h1>
              <p className="text-xl text-slate-500 leading-relaxed">
                This Privacy Policy describes how E Marketing Paradice ("we", "us", or "our") collects,
                uses, and shares your personal information when you use our website and services.
              </p>
            </div>

            {/* Sections */}
            <div className="space-y-24">
              {sections.map(section => (
                <section key={section.id} id={section.id} className="scroll-mt-32">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-lg shadow-slate-900/10">
                      <section.icon className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900">{section.title}</h2>
                  </div>

                  {section.points ? (
                    <div className="grid gap-4">
                      {section.points.map((p, i) => (
                        <div key={i} className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                          <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                          <p className="text-slate-700 text-lg font-medium">{p}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-lg text-slate-600 leading-relaxed pl-16">
                      {section.content}
                    </p>
                  )}
                </section>
              ))}

              {/* Dedicated Contact Section */}
              <section id="contact" className="scroll-mt-32 bg-slate-900 rounded-[2.5rem] p-12 text-white relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-(--color-primary) opacity-10 blur-[100px] translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-6">Questions about your data?</h2>
                  <p className="text-slate-400 text-lg mb-10 max-w-xl">
                    If you have any questions or concerns about this Privacy Policy,
                    or if you would like to exercise any of your rights, please contact us.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a href="mailto:emarketingparadice@gmail.com" className="bg-(--color-primary) text-white font-bold py-4 px-8 rounded-full flex items-center gap-3 hover:shadow-xl hover:shadow-(--color-primary)/20 transition-all">
                      <Mail className="w-5 h-5" />
                      Email Privacy Officer
                    </a>
                    <Link href="/contact" className="bg-white/10 backdrop-blur-md text-white font-bold py-4 px-8 rounded-full hover:bg-white/20 transition-all">
                      General Inquiry
                    </Link>
                  </div>
                </div>
              </section>
            </div>

            <div className="mt-20 pt-10 border-t border-slate-100">
              <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-900 font-bold transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Back to E Marketing Paradice
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
