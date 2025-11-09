import React from "react";
import { CallToActionSection } from "./sections/CallToActionSection";
import { ClientTestimonialsSection } from "./sections/ClientTestimonialsSection";
import { FAQSection } from "./sections/FAQSection";
import { FeaturedPropertiesSection } from "./sections/FeaturedPropertiesSection";
import { HeaderSection } from "./sections/HeaderSection";
import { HeroSection } from "./sections/HeroSection";

export const HomePageDesktop = (): JSX.Element => {
  return (
    <div className="bg-grey-08 w-full min-w-[1920px] relative">
      <HeaderSection />
      <HeroSection />
      <FeaturedPropertiesSection />
      <ClientTestimonialsSection />
      <CallToActionSection />
      <FAQSection />
    </div>
  );
};
