import Link from "next/link";
import type { Metadata } from "next";
import { CheckCircle, Home, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Thank You",
  description:
    "Thank you for contacting us. Your message has been received and we’ll respond as soon as possible.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function ThankYouPage() {
  return (
    <div
      id="view-thank-you"
      className="w-full min-h-screen flex items-center justify-center relative overflow-hidden bg-white"
    >
      {/* Radial background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-emerald-100 via-white to-white" />

      {/* Soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] blur-[100px] rounded-full pointer-events-none opacity-40 bg-emerald-500/10" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Icon */}
        <div className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-2xl border shadow-xl relative bg-white border-neutral-200">
          <CheckCircle className="w-9 h-9 text-emerald-600" />
          <div className="absolute inset-0 border rounded-2xl animate-ping opacity-20 border-emerald-300" />
        </div>

        {/* Heading */}
        <h1 className="text-6xl sm:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-neutral-900 to-neutral-600 mb-3">
          Thank You
        </h1>

        <h2 className="text-2xl font-medium mb-4 tracking-tight text-neutral-900">
          Message received successfully
        </h2>

        <p className="max-w-md mx-auto mb-10 leading-relaxed text-neutral-600">
          We’ve received your message and appreciate you reaching out.
          Our team will review it and get back to you shortly.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="h-10 px-6 rounded-full text-sm font-medium transition-colors flex items-center gap-2 bg-emerald-600 text-white hover:bg-emerald-700 shadow-md"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>

          <Link
            href="/contact"
            className="h-10 px-6 rounded-full border text-sm font-medium transition-colors flex items-center gap-2 border-neutral-300 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 shadow-sm"
          >
            <Mail className="w-4 h-4" />
            Send Another Message
          </Link>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 w-full h-32 bg-linear-to-t z-20 from-white to-transparent" />

      {/* Grid effect */}
      <div className="absolute bottom-0 w-full h-full opacity-10 pointer-events-none transform perspective-[1000px] rotate-x-60 scale-150 origin-bottom bg-[linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)] bg-size-[25px_25px]" />
    </div>
  );
}
