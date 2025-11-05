import Hero from "@/components/Hero";
import Navbar from "@/components/Nav";
import Services from "@/components/Service";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Hero />
      <Services />
    </div>
  );
}
