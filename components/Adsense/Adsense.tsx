"use client";

import Script from "next/script";

export default function Adsense() {
  return (
    <Script
      id="adsense-script"
      strategy="afterInteractive"
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8436656924210802"
      crossOrigin="anonymous"
      data-ad-client="ca-pub-8436656924210802"
    />
  );
}
