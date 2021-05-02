import React from "react";

import SectionTeam from "../components/SectionTeam";
import TeamSection from "../components/TeamMember/singleTeam";
import VideoSection from "../components/Video";
import TrustedCompany from "../components/TrustedCompany";

const Theme: React.FC = () => {
  return (
    <main className="main">
      <SectionTeam />
      <TeamSection />
      <VideoSection />
      <TrustedCompany />
    </main>
  );
};

export default Theme;
