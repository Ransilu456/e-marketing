import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Users, Workflow, Award, Megaphone, ArrowRight, Scale, FileText, Lock, Globe, MessageCircle } from "lucide-react";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import BeautiyCTA from "@/components/ui/home/BeautiyCTA";

export const metadata: Metadata = {
  title: "Terms & Conditions | E Marketing Paradice Sri Lanka",
  description: "Official terms and conditions for using E Marketing Paradice Sri Lanka digital marketing services.",
  keywords: ["digital marketing sri lanka", "SEO services", "terms and conditions", "E Marketing Paradice"],
};

export default function TermsPage() {
  const sections = [
    {
      title: "Use of Website",
      text: "You agree to use this website for lawful purposes only and not in a way that violates any applicable laws or regulations.",
      icon: Globe,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Intellectual Property",
      text: "All content, designs, logos, and materials on this website are the intellectual property of E Marketing Paradice. Unauthorized use is prohibited.",
      icon: Scale,
      color: "bg-purple-50 text-purple-600",
    },
    {
      title: "Services",
      text: "We reserve the right to modify or discontinue any service without notice. Service descriptions do not constitute a binding contract.",
      icon: Workflow,
      color: "bg-orange-50 text-orange-600",
    },
    {
      title: "User Obligations",
      text: "Users must provide accurate information when using our contact forms and must not attempt to breach our infrastructure.",
      icon: Users,
      color: "bg-green-50 text-green-600",
    },
    {
      title: "Limitation of Liability",
      text: "E Marketing Paradice is not liable for any indirect, incidental, or consequential damages arising from the use of this website.",
      icon: ShieldCheck,
      color: "bg-red-50 text-red-600",
    },
    {
      title: "Governing Law",
      text: "These terms are governed by the laws of Sri Lanka. Any disputes will be resolved within the jurisdiction of Sri Lankan courts.",
      icon: Award,
      color: "bg-indigo-50 text-indigo-600",
    },
    {
      title: "Advertising & Third-Party Services",
      text: "This website may display advertisements provided by third-party advertising networks, including Google AdSense. These third-party services may use cookies or similar technologies to collect information about users’ interactions with ads displayed on this site. E Marketing Paradice does not control these cookies or the data collected by third-party advertisers.",
      icon: Megaphone,
      color: "bg-yellow-50 text-yellow-600",
    },
  ];

  return (
    <main className="bg-[#FAFAFA] min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/5 border border-slate-900/10 text-slate-600 text-xs font-bold uppercase tracking-widest mb-6">
              <FileText className="w-3.5 h-3.5" />
              Legal Framework
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 tracking-tight mb-8">
              Terms & <span className="text-(--color-primary)">Conditions</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed mb-10">
              These terms govern your access to and use of E Marketing Paradice's website and services.
              By interacting with our platform, you agree to comply with these professional standards.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                  </div>
                ))}
              </div>
              <p className="text-sm font-medium text-slate-900">Trusted by over 50+ businesses</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Bento Grid Layout */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((item, idx) => (
            <div key={idx} className="group bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 flex flex-col items-start text-left">
              <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-inner`}>
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-(--color-primary) transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-500 leading-relaxed text-lg">
                {item.text}
              </p>
            </div>
          ))}

          {/* Special Contact Bento Card */}
          <div className="md:col-span-2 lg:col-span-1 bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-(--color-primary) opacity-20 blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-8 text-white">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Any Questions?</h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                If you have any doubts regarding our terms, feel free to reach out to our legal support team.
              </p>
            </div>
            <a href="mailto:emarketingparadice@gmail.com" className="inline-flex items-center gap-2 text-(--color-primary) font-bold hover:gap-4 transition-all group">
              Email Support
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Structured Legal Content Section */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Detailed Service Agreement</h2>
            <p className="mb-6">
              At <strong>E Marketing Paradice</strong>, we strive to deliver the highest quality of digital marketing,
              web development, and branding services. However, please be aware that the specifics of each project
              may vary and are subject to the individual Service Agreement signed at the commencement of work.
            </p>
            <p className="mb-6">
              Our website provides information about our services and a gateway for communication. While we aim for
              100% accuracy, we do not warrant that service descriptions or other content are error-free.
            </p>
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 my-12 italic">
              "We reserve the right to refuse service to anyone for any reason at any time."
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Termination of Use</h3>
            <p>
              We may terminate your access to the website or services immediately, without prior notice or liability,
              for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
          </div>

          <div className="mt-20 pt-10 border-t border-slate-100 flex flex-wrap gap-4 items-center justify-between text-sm text-slate-400">
            <p>Last Updated: {new Date().toLocaleDateString('en-GB')}</p>
            <Link href="/privacy-policy" className="text-slate-900 font-bold hover:text-(--color-primary) transition-colors">View Privacy Policy</Link>
          </div>
        </div>
      </section>

         <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-slate-600 leading-relaxed">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Advertising Disclaimer
          </h2>
          <p className="mb-6">
            E Marketing Paradice does not guarantee the availability, accuracy,
            or relevance of advertisements displayed through third-party
            advertising services. All advertisements are managed and served by
            external advertising providers.
          </p>

          <p className="mb-6">
            This website complies with Google AdSense program policies.
          </p>

          <div className="mt-20 pt-10 border-t border-slate-100 flex justify-between text-sm text-slate-400">
            <p>Last Updated: {new Date().toLocaleDateString("en-GB")}</p>
            <Link
              href="/privacy-policy"
              className="font-bold text-slate-900 hover:text-(--color-primary)"
            >
              View Privacy Policy
            </Link>
          </div>
        </div>
      </section>

      <BeautiyCTA />
      <Footer />
    </main>
  );
}