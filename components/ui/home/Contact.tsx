"use client";

import { Send } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import Button from "../tools/Button";

export default function ContactForm() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);
      router.push("/thank-you");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium mb-1.5">Your Name *</label>
        <input
          id="contact-name"
          name="name"
          required
          placeholder="John Doe"
          className="w-full px-3 py-2 border border-gray-200 rounded-lg resize-none focus:ring-1 focus:ring-[var(--color-primary)/30]"
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium mb-1.5">Email *</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          placeholder="john@company.com"
          className="w-full px-3 py-2 border border-gray-200 rounded-lg resize-none focus:ring-1 focus:ring-[var(--color-primary)/30]"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium mb-1.5">Message *</label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          required
          className="w-full px-3 py-2 border border-gray-200 rounded-lg resize-none focus:ring-1 focus:ring-[var(--color-primary)/30]"
        />
      </div>

      <Button type="submit" disabled={loading} className="w-full flex gap-2">
        {loading ? "Sending..." : "Send Message"}
        {!loading && <Send size={16} />}
      </Button>

      {success && (
        <p className="text-sm text-green-600 text-center">
          Message sent successfully!
        </p>
      )}
    </form>
  );
}
