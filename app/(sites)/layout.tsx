import type { Metadata } from "next";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {

  metadataBase: new URL("https://emarketingparadice.lk"),

  verification: {
    google: "r2bIazJ_HQ68MrlNjsq1pO6AkmYIcafOy4ZE5gGe_D8",
  },

  title: {
    default: "E Marketing Paradice",
    template: "%s | Digital Marketing Agency in Sri Lanka",
  },
  description:
    "E Marketing Paradice is a digital marketing agency offering branding, web development, SEO, and growth solutions.",
  keywords: [
    "digital marketing",
    "web development",
    "SEO services",
    "branding",
    "marketing agency",
    "sri lanka marketing",
    "poster design",
    "facebook marketing"
  ],
  authors: [{ name: "E Marketing Paradice" }],
  creator: "E Marketing Paradice",

  metadataBase: new URL("https://emarketingparadice.lk"),

  openGraph: {
    title: "E Marketing Paradice",
    description:
      "We help brands grow with modern digital marketing, design, and development solutions.",
    url: "https://emarketingparadice.lk",
    siteName: "E Marketing Paradice",
    images: [
      {
        url: "/Logo 128x128s.ico",
        width: 1200,
        height: 630,
        alt: "E Marketing Paradice",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "E Marketing Paradice",
    description:
      "Modern digital marketing & web solutions to scale your business.",
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

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="w-full sticky top-0 z-50">
        <Navbar />
      </header>

      <main className="transition-opacity duration-500">
        {children}
      </main>

      <Footer />
    </>
  );
}
