import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

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
