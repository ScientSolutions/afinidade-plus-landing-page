import React from "react";

import PricingSection from "../components/Pricing";
import Testimonial from "../components/Testimonial";
import Screenshots from "../components/Screenshots";
import DownloadSection from "../components/Download";
import FeatureSection from "../components/Features";
import PromoSection from "../components/PromoSection";
import HeroSection from "../components/Section6";
import TeamMember from "../components/TeamMember";
import ContactSection from "../components/Contact";
import TrustedCompany from "../components/TrustedCompany";

const Theme: React.FC = () => {
  return (
    <main className="main">
      <HeroSection />
      <PromoSection />
      <PricingSection hideFaq={true} theme="four" bgColor="gray" />
      <FeatureSection />
      {/* <Testimonial /> */}
      <Screenshots />
      <TeamMember />
      <DownloadSection />
      <ContactSection />
      {/* <TrustedCompany /> */}
    </main>
  );
};

export default Theme;
