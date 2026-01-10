import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/ui/CookieConsent";
import Adsense from "@/components/Adsense/Adsense";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://emarketingparadice.lk"),

  applicationName: "E Marketing Paradice",

  verification: {
    google: "r2bIazJ_HQ68MrlNjsq1pO6AkmYIcafOy4ZE5gGe_D8",
  },

  other: {
    "google-adsense-account": "ca-pub-8254653836295264",
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
        <Adsense />
      </head>
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
