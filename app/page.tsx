'use client'

import { useState } from "react";
import Intro from "@/components/LoadHandling/Intro";
import { CustomNavbar } from "@/components/NewNav";
import { NewHero } from "@/components/NewHero";
import Trusted from "@/components/Trusted";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUS from "@/components/Why";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      {showSplash ? (
        <div className="w-full h-screen flex items-center justify-center">
          <Intro key="splash" onComplete={handleSplashComplete} />
        </div>
      ) : (
        <main className="w-full">
          <header className="w-full sticky top-0 z-50">
            <CustomNavbar />
          </header>
          <NewHero animateOnLoad={!showSplash} />
          <Trusted />
          <About />
          <Services />
          <Portfolio />
          <WhyChooseUS />
          <Testimonials />
          <Contact />
        </main>
      )}
    </div>
  );
}
