"use client";

import AboutSection from "@/components/sections/about-section";
import FeatureSection from "@/components/sections/feature-section";
import GallerySection from "@/components/sections/gallery-section";
import HeroSection from "@/components/sections/hero-section";
import TeamSection from "@/components/sections/team-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <FeatureSection />
      <TeamSection />
      <GallerySection />
    </main>
  );
}
