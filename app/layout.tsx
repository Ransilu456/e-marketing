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
    default: "E Marketing Paradice | Digital Marketing Agency Sri Lanka",
    template: "%s | E Marketing Paradice",
  },

  description:
    "E Marketing Paradice is a premium digital marketing agency in Sri Lanka. We specialize in high-performance web development, SEO, branding, and results-driven social media strategies.",

  keywords: [
    "digital marketing agency sri lanka",
    "web development services sri lanka",
    "best SEO agency sri lanka",
    "social media marketing sri lanka",
    "branding and design agency",
    "E Marketing Paradice",
    "ecommerce web development sri lanka",
    "pay per click advertising sri lanka",
    "e marketing",
    "sri lanka marketing",
    "online marketing",
    "sri lanka web development"
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
    title: "E Marketing Paradice | Digital Marketing Agency Sri Lanka",
    description:
      "Transforming brands with high-performance digital solutions. Web development, SEO, and strategic marketing tailored for growth.",
    url: "https://emarketingparadice.lk",
    siteName: "E Marketing Paradice",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "E Marketing Paradice - Digital Marketing Agency",
      },
    ],
    locale: "en_LK",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "E Marketing Paradice | Digital Marketing Agency Sri Lanka",
    description:
      "Premium web development and digital marketing solutions for growing brands.",
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
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "E Marketing Paradice",
    "url": "https://emarketingparadice.lk",
    "logo": "https://emarketingparadice.lk/og-image.png",
    "sameAs": [
      "https://www.facebook.com/emarketingparadice",
      "https://www.linkedin.com/in/keshan-samarasekara-6a9137399",
      "https://github.com/ransilu456"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kuliyapitiya",
      "addressCountry": "LK"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+94-76-346-0514",
      "contactType": "customer service"
    }
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "E Marketing Paradice",
    "url": "https://emarketingparadice.lk",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://emarketingparadice.lk/blog?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
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
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased text-zinc-900`}>
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
