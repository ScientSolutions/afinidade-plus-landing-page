import React from "react";

import HeroSection from "../components/SectionTeam";
import TeamSection from "../components/TeamMember/team";
import ContactSection from "../components/Contact";
import TrustedCompany from "../components/TrustedCompany";

const Theme: React.FC = () => {
  return (
    <main className="main">
      <HeroSection />
      <TeamSection />
      <ContactSection />
      <TrustedCompany />
    </main>
  );
};

export default Theme;
