"use client";

import AboutSection from "@/components/sections/about-section";
import FeatureSection from "@/components/sections/feature-section";
import HeroSection from "@/components/sections/hero-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <FeatureSection />
    </main>
  );
}
