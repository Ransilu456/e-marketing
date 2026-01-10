"use client";

import Script from "next/script";

export default function Adsense() {
  return (
    <Script
      id="adsense-script"
      strategy="afterInteractive"
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8254653836295264"
      crossOrigin="anonymous"
      data-ad-client="ca-pub-8254653836295264"
    />
  );
}
