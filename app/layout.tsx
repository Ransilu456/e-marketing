import type { Metadata } from "next";
import { CustomNavbar } from "@/components/NewNav";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300","400","500","600","700","800"],
});

export const metadata: Metadata = {
  title: "E Marketing Paradice",
  description: "We Design & Develop Digital Solutions",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased relative`}>
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
