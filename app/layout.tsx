import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/ui/CookieConsent";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://emarketingparadice.lk"),

  title: {
    default: "E Marketing Paradice",
    template: "%s | E Marketing Paradice",
  },

  description: "We design & develop modern digital solutions for growing brands.",

  keywords: [
    "digital marketing sri lanka",
    "web development sri lanka",
    "branding",
    "SEO services",
    "E Marketing Paradice",
  ],

  authors: [{ name: "E Marketing Paradice" }],
  creator: "E Marketing Paradice",

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

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
