'use client';

import { NewHero } from "@/components/NewHero";
import Trusted from "@/components/Trusted";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUS from "@/components/Why";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import Portfolio from "@/components/Portfolio";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <NewHero />
      <Trusted />
      <About />
      <Services />
      <Portfolio />
      <WhyChooseUS />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
