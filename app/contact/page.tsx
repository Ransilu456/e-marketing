"use client";

import { Mail, Phone, Send } from "lucide-react";
import { useState } from "react";

export default function Page() {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({ email: "", phone: "", message: "" });
    }, 700);
  };

  return (
    <main className="w-full min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-slate-900">Get in touch</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Have questions or ready to start your project? We&apos;d love to hear from you. Send us a message and we&apos;ll respond within 24 hours.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center mb-4">
              <Mail className="text-white" size={20} />
            </div>
            <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
            <a href="mailto:emarketingparadice@gmail.com" className="text-sm text-slate-600 hover:accent transition-colors">emarketingparadice@gmail.com</a>
          </div>

          <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center mb-4">
              <Phone className="text-white" size={20} />
            </div>
            <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
            <a href="tel:+947123456789" className="text-sm text-slate-600 hover:accent transition-colors">+94 712 345 6789</a>
          </div>

          <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center mb-4">
              <Send className="text-white" size={20} />
            </div>
            <h3 className="font-semibold text-slate-900 mb-1">Response time</h3>
            <p className="text-sm text-slate-600">Usually within 24 hours</p>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-slate-100 max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-2">Email Address *</label>
              <input
                id="email"
                type="email"
                required
                aria-required="true"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm"
                placeholder="you@company.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-900 mb-2">Phone Number *</label>
              <input
                id="phone"
                type="tel"
                required
                aria-required="true"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-900 mb-2">Message *</label>
              <textarea
                id="message"
                required
                aria-required="true"
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none resize-none transition-all text-sm"
                placeholder="Tell us about your project, goals, or any questions you have..."
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="btn btn-accent w-full px-6 py-3 text-base font-medium rounded-lg flex items-center justify-center gap-2 shadow-md transition-all duration-300"
              aria-busy={submitting}
            >
              <span>{submitting ? 'Sending...' : 'Send Message'}</span>
              {!submitting && <Send size={18} />}
            </button>

            {submitted && (
              <div className="text-center p-4 bg-green-50 border border-green-200 rounded-lg text-sm text-green-700">
                Thanks for reaching out! We&apos;ll get back to you soon.
              </div>
            )}
          </form>

          <p className="text-center text-xs text-slate-500 mt-6"> Your privacy is protected  we never share your information.</p>
        </div>
      </div>
    </main>
  );
}
