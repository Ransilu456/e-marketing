"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const consent = localStorage.getItem("cookie_consent");
      if (!consent) setVisible(true);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie_consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-sm z-[9999]">
      <div className="bg-white border border-zinc-200 rounded-2xl shadow-2xl p-5">
        <div className="flex items-start gap-3 mb-3">
          
          <div>
            <p className="text-sm font-semibold text-zinc-900 mb-1">Cookie Preferences</p>
            <p className="text-xs text-zinc-500 leading-relaxed">
              We and our partners (including Google) use cookies to personalize
              content and ads, provide social media features, and analyze our
              traffic. By clicking <strong>Accept</strong>, you consent to
              our use of cookies for these purposes.{" "}
              {!showDetails && (
                <button
                  onClick={() => setShowDetails(true)}
                  className="text-zinc-700 underline hover:text-zinc-900"
                >
                  Learn more
                </button>
              )}
            </p>
          </div>
        </div>

        {showDetails && (
          <div className="mb-3 p-3 bg-zinc-50 rounded-xl text-xs text-zinc-600 leading-relaxed space-y-1.5">
            <p>
              <strong>Essential Cookies:</strong> Always active. Required for
              the site to function.
            </p>
            <p>
              <strong>Analytics Cookies:</strong> Help us understand how
              visitors use the site (Google Analytics).
            </p>
            <p>
              <strong>Advertising Cookies:</strong> Used by Google AdSense to
              show relevant ads based on your interests.
            </p>
            <p>
              Declining will disable personalized ads but you may still see
              non-personalized ads. View our{" "}
              <Link href="/privacy-policy" className="underline text-zinc-800">
                Privacy Policy
              </Link>{" "}
              for full details.
            </p>
          </div>
        )}

        <div className="flex gap-2 flex-wrap mt-3">
          <button
            id="cookie-accept-btn"
            onClick={handleAccept}
            className="flex-1 px-4 py-2 rounded-xl bg-zinc-900 text-white text-xs font-semibold hover:bg-zinc-700 transition-colors"
          >
            Accept All
          </button>
          <button
            id="cookie-decline-btn"
            onClick={handleDecline}
            className="flex-1 px-4 py-2 rounded-xl bg-zinc-100 text-zinc-700 text-xs font-semibold hover:bg-zinc-200 transition-colors"
          >
            Decline
          </button>
          {!showDetails && (
            <button
              id="cookie-manage-btn"
              onClick={() => setShowDetails(true)}
              className="w-full px-4 py-1.5 rounded-xl border border-zinc-200 text-zinc-500 text-xs hover:text-zinc-900 transition-colors"
            >
              Manage Options
            </button>
          )}
        </div>

        <p className="text-[10px] text-zinc-400 mt-3 text-center">
          By using this site, you agree to our{" "}
          <Link href="/privacy-policy" className="underline hover:text-zinc-600">
            Privacy Policy
          </Link>{" "}
          &amp;{" "}
          <Link href="/terms" className="underline hover:text-zinc-600">
            Terms of Service
          </Link>
        </p>
      </div>
    </div>
  );
}

