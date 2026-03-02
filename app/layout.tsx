import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";

import CookieConsent from "@/components/ui/CookieConsent";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://emarketingparadice.lk"),

  applicationName: "E Marketing Paradice",

  verification: {
    google: "r2bIazJ_HQ68MrlNjsq1pO6AkmYIcafOy4ZE5gGe_D8",
  },

  other: {
    "google-adsense-account": "ca-pub-4444198189403985",
  },

  title: {
    default: "E Marketing Paradice",
    template: "%s | Digital Marketing Agency in Sri Lanka",
  },

  description:
    "E Marketing Paradice is a leading digital marketing agency in Sri Lanka offering web development, SEO, branding, and social media marketing.",

  keywords: [
    "digital marketing sri lanka",
    "digital marketing agency in sri lanka",
    "web development sri lanka",
    "SEO services sri lanka",
    "branding sri lanka",
    "social media marketing",
    "E Marketing Paradice",
    "emarketingparadice.lk",
  ],

  authors: [{ name: "E Marketing Paradice", url: "https://emarketingparadice.lk" }],
  creator: "E Marketing Paradice",
  publisher: "E Marketing Paradice",

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48", type: "image/x-icon" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },

  openGraph: {
    title: "E Marketing Paradice",
    description:
      "We design & develop modern digital solutions for businesses in Sri Lanka and beyond.",
    url: "https://emarketingparadice.lk",
    siteName: "E Marketing Paradice",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "E Marketing Paradice",
      },
    ],
    locale: "en_LK",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "E Marketing Paradice",
    description:
      "We design & develop modern digital solutions for growing brands.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          id="adsense-init"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4444198189403985"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Script id="adsense-consent" strategy="afterInteractive">
          {`
            (function() {
              try {
                var consent = localStorage.getItem("cookie_consent");
                window.adsbygoogle = window.adsbygoogle || [];
                if (consent === "declined") {
                  window.adsbygoogle.requestNonPersonalizedAds = 1;
                }
              } catch(e) {}
            })();
          `}
        </Script>
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <CookieConsent />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4NBZ6YMCRK"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4NBZ6YMCRK');
          `}
        </Script>
      </body>
    </html>
  );
}
