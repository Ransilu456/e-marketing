import Link from "next/link";
import Image from "next/image";

import { Mail, Phone, MapPin, Clock } from "lucide-react";
import InteractiveFAQs from "@/components/ui/home/InteractiveFAQs";
import BlogSection from "@/components/ui/home/BlogSection";

import Hero from "@/components/Hero";
import ContactForm from "@/components/ui/home/Contact";
import SectionHeading from "@/components/ui/tools/SectionHeading";
import Process from "@/components/ui/home/Proccess";
import Methodology from "@/components/ui/home/Methodology";
import WorkList from "@/components/ui/home/WorkList";
import Projects from "@/components/ui/home/Projects";
import Services from "@/components/ui/home/Services";

function Contact() {

  const contactInfo = [
    { icon: Mail, label: "Email", value: "emarketingparadice@gmail.com", link: "mailto:emarketingparadice@gmail.com" },
    { icon: Phone, label: "Phone", value: "+94 76 346 0514", link: "tel:+947123456789" },
    { icon: MapPin, label: "Location", value: "Kuliyapitiya, Sri Lanka" },
    { icon: Clock, label: "Hours", value: "Mon - Sat: 9:00 AM - 6:00 PM" },
  ];

  return (
    <section id="contact" className="py-24 bg-grid">
      <div className="max-w-5xl mx-auto text-center">
        <SectionHeading
          badge="Contact"
          title="Start Your Project"
          subtitle="Let's create something amazing together. Fill out the form and we'll be in touch within 24 hours."
        />

        <div className="grid md:grid-cols-2 gap-8 w-full bg-white p-4 border border-black/10 rounded-2xl">

          {/* LEFT */}
          <div className="space-y-4 text-left">
            <h3 className="font-semibold text-slate-900 mb-6">Contact Information</h3>
            {contactInfo.map((item, i) => (
              <div key={i} className="flex gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mt-1"
                  style={{ backgroundColor: "var(--color-primary-10)" }}
                >
                  <item.icon style={{ color: "var(--color-primary)" }} size={18} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">{item.label}</p>
                  {item.link ? (
                    <a href={item.link} className="text-red-900 hover:text-(--color-primary)">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-red-900">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT FORM */}
          <div className="bg-slate-50 rounded-xl p-8 border border-slate-100">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}


export default function Page() {
  return (
    <main className="bg-white antialiased w-full min-h-screen overflow-x-hidden">
      <Hero />
      <Services />
      <Projects />
      <WorkList />
      <Methodology />
      <Process />
      <InteractiveFAQs />
      <BlogSection limit={3} />
      <Contact />
    </main>
  );
}