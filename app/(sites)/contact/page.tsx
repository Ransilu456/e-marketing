"use client";

import { Mail, Phone, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [sending, setSending] = useState(false);

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

        <div className="max-w-3xl mx-auto">
          <div className="rounded-3xl border border-gray-400/20 bg-white/80 backdrop-blur-xl shadow-xl p-8 md:p-12">

            <form
              name="contact"
              method="POST"
              action="/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={() => setSending(true)}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-gray-400/20 px-4 py-3 focus:ring-2 focus:ring-(--color-primary)/40 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@company.com"
                    className="w-full rounded-xl border border-gray-400/20 px-4 py-3 focus:ring-2 focus:ring-(--color-primary)/40 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={6}
                  required
                  placeholder="Tell us about your project or idea..."
                  className="w-full rounded-xl border border-gray-400/20 px-4 py-3 resize-none focus:ring-2 focus:ring-(--color-primary)/40 outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full rounded-xl bg-(--color-primary) text-white py-4 font-medium flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98]"
              >
                {sending ? "Sending..." : "Send Message"}
                {!sending && <Send size={18} />}
              </button>

              <p className="text-center text-xs text-slate-500">
                We respect your privacy. Your information is never shared.
              </p>
            </form>

          </div>
        </div>
      </div>
    </main>
  );
}
