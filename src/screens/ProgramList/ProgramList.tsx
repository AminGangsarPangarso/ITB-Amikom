import React from "react";
import { FooterSection } from "./sections/FooterSection";
import { MainContentSection } from "./sections/MainContentSection";
import { PrivacyPolicySection } from "./sections/PrivacyPolicySection";
import { PublicNavbarSection } from "./sections/PublicNavbarSection";

export const ProgramList = (): JSX.Element => {
  return (
    <div className="bg-white w-full min-w-[1366px] relative">
      <PublicNavbarSection />
      <PrivacyPolicySection />
      <MainContentSection />
      <FooterSection />
    </div>
  );
};
