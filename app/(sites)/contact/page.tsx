"use client";

import ContactForm from "@/components/ui/home/Contact";
import { Mail, Phone, Send } from "lucide-react";

export default function ContactPage() {

  return (
    <main className="min-h-screen bg-linear-to-b from-slate-50 to-white pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Let’s talk 👋
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Have an idea or a project in mind? Fill out the form and we’ll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: <Mail size={20} />,
              title: "Email",
              value: "emarketingparadice@gmail.com",
              link: "mailto:emarketingparadice@gmail.com",
            },
            {
              icon: <Phone size={20} />,
              title: "Phone",
              value: "+94 76 346 0514",
              link: "tel:+94763460514",
            },
            {
              icon: <Send size={20} />,
              title: "Response time",
              value: "Within 24 hours",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-400/20 bg-white/70 backdrop-blur p-6 shadow-sm"
            >
              <div className="w-11 h-11 rounded-xl bg-(--color-primary) text-white flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
              {item.link ? (
                <a href={item.link} className="text-sm text-slate-600 hover:underline">
                  {item.value}
                </a>
              ) : (
                <p className="text-sm text-slate-600">{item.value}</p>
              )}
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl
    bg-white  border border-zinc-200
    p-8 md:p-12 overflow-hidden">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
