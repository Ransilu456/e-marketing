import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CustomNavbar } from "@/components/NewNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E Marketing Paradice",
  description: "We Design & Develop Digital Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <header className="w-full sticky top-0 z-50">
          <CustomNavbar />
        </header>
        <main className="opacity-100 transition-opacity duration-500">
          {children}
        </main>
      </body>
    </html>
  );
}
