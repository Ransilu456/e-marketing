"use client";

import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) setVisible(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50">
      <div className="bg-white border border-zinc-200 rounded-xl shadow-xl p-5">
        <p className="text-sm text-zinc-600 mb-4">
          We use cookies to improve user experience, analyze traffic, and serve
          personalized ads in compliance with Google AdSense policies.
        </p>
        <div className="flex gap-3">
          <button
            onClick={acceptCookies}
            className="px-4 py-2 rounded-lg bg-red-600 text-white text-sm font-semibold hover:bg-red-700"
          >
            Accept
          </button>
          <a
            href="/privacy-policy"
            className="px-4 py-2 rounded-lg text-sm font-semibold text-zinc-700 hover:underline"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}
