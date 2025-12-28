import { Button } from "@/app/(sites)/page";
import { Send } from "lucide-react";

export default function ContactForm() {
  return (
    <form
      name="contact"
      method="POST"
      action="/contact/thank-you"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="space-y-4 text-left"
    >
      <input type="hidden" name="form-name" value="contact" />

      <p className="hidden">
        <label>
          Don’t fill this out if you’re human: <input name="bot-field" />
        </label>
      </p>

      <div>
        <label className="block text-sm font-medium mb-1.5">
          Your Name *
        </label>
        <input
          name="name"
          type="text"
          required
          placeholder="John Doe"
          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-1 focus:ring-[var(--color-primary)/30]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1.5">
          Email *
        </label>
        <input
          name="email"
          type="email"
          required
          placeholder="john@company.com"
          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-1 focus:ring-[var(--color-primary)/30]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1.5">
          Message *
        </label>
        <textarea
          name="message"
          rows={4}
          required
          placeholder="Tell us about your project..."
          className="w-full px-3 py-2 border border-gray-200 rounded-lg resize-none focus:ring-1 focus:ring-[var(--color-primary)/30]"
        />
      </div>

      <Button type="submit" className="w-full flex items-center justify-center gap-2">
        Send Message <Send size={16} />
      </Button>

      <p className="text-xs text-slate-500 text-center">
        We respect your privacy. Your data is never shared.
      </p>
    </form>
  );
}
