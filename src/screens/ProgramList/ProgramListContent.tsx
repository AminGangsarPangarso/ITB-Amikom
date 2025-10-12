import { MainContentSection } from "./sections/MainContentSection";
import { PrivacyPolicySection } from "./sections/PrivacyPolicySection";

export const ProgramListContent = (): JSX.Element => {
  return (
    <>
      <PrivacyPolicySection />
      <MainContentSection />
    </>
  );
};