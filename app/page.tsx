'use client';

import { useState, useEffect } from "react";
import Intro from "@/components/LoadHandling/Intro";
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

  useEffect(() => {
    const splashShown = sessionStorage.getItem("splashShown");

    if (splashShown === "true") {
      setShowSplash(false);
    }
  }, []);

  const handleSplashComplete = () => {
    sessionStorage.setItem("splashShown", "true");
    setShowSplash(false);
  };

  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      {showSplash ? (
        <div className="w-full h-screen flex items-center justify-center">
          <Intro key="splash" onComplete={handleSplashComplete} />
        </div>
      ) : (
        <>
          <NewHero animateOnLoad={!showSplash} />
          <Trusted />
          <About />
          <Services />
          <Portfolio />
          <WhyChooseUS />
          <Testimonials />
          <Contact />
        </>
      )}
    </div>
  );
}
