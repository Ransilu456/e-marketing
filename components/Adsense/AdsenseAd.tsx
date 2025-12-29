"use client";

import { useEffect } from "react";

interface AdProps {
  adClient: string; // Your AdSense publisher ID
  adSlot: string;   // Slot ID
  style?: React.CSSProperties;
  className?: string;
  format?: string;
}

declare global {
  interface Window {
    adsbygoogle?: any[];
  }
}

export default function AdsenseAd({
  adClient,
  adSlot,
  style,
  className,
  format = "auto",
}: AdProps) {
  useEffect(() => {
    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    } catch (e) {
      console.error("Adsense error:", e);
    }
  }, []);

  return (
    <ins
      className={`adsbygoogle ${className || ""}`}
      style={{ display: "block", ...style }}
      data-ad-client={adClient}
      data-ad-slot={adSlot}
      data-ad-format={format}
      data-full-width-responsive="true"
    />
  );
}
