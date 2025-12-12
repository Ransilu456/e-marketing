import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
      setFormData({ name: "", email: "", message: "" });
    }, 700);
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-3 text-slate-900">Quick contact</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Have a question or want to start a project? Reach out and we&apos;ll respond within 24 hours.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left - Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-slate-900 mb-6">Contact Information</h3>
            
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0 mt-1">
                <Mail className="text-accent" size={18} />
              </div>
              <div>
                <p className="text-sm text-slate-500">Email</p>
                <a href="mailto:emarketingparadice@gmail.com" className="text-slate-900 hover:accent transition-colors">emarketingparadice@gmail.com</a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0 mt-1">
                <Phone className="text-accent" size={18} />
              </div>
              <div>
                <p className="text-sm text-slate-500">Phone</p>
                <a href="tel:+947123456789" className="text-slate-900 hover:accent transition-colors">+94 712 345 6789</a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0 mt-1">
                <MapPin className="text-accent" size={18} />
              </div>
              <div>
                <p className="text-sm text-slate-500">Location</p>
                <p className="text-slate-900">Kuliyapitiya, Sri Lanka</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0 mt-1">
                <Clock className="text-accent" size={18} />
              </div>
              <div>
                <p className="text-sm text-slate-500">Hours</p>
                <p className="text-slate-900">Mon - Sat: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-slate-50 rounded-xl p-8 border border-slate-100">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-900 mb-1.5">Your Name *</label>
                <input
                  id="name"
                  type="text"
                  required
                  aria-required="true"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:border-accent focus:ring-1 focus:ring-accent/30 outline-none transition-all text-sm"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-1.5">Email *</label>
                <input
                  id="email"
                  type="email"
                  required
                  aria-required="true"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:border-accent focus:ring-1 focus:ring-accent/30 outline-none transition-all text-sm"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-900 mb-1.5">Message *</label>
                <textarea
                  id="message"
                  required
                  aria-required="true"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:border-accent focus:ring-1 focus:ring-accent/30 outline-none resize-none transition-all text-sm"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="btn btn-accent w-full px-4 py-2.5 text-sm font-medium rounded-lg flex items-center justify-center gap-2 transition-all duration-300"
                aria-busy={submitting}
              >
                {submitting ? 'Sending...' : 'Send Message'}
                {!submitting && <Send size={16} />}
              </button>

              {submitted && (
                <div className="text-center text-sm text-green-600 bg-green-50 p-2 rounded-lg">Thanks! We&apos;ll reply soon.</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}