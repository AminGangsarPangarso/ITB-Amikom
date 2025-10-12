import { AltSubsection } from "./sections/AltSubsection";
import { ExternalProgramSubsection } from "./sections/ExternalProgramSubsection";
import { FrameSubsection } from "./sections/FrameSubsection";
import { FrameWrapperSubsection } from "./sections/FrameWrapperSubsection";
import { HeroUtamaSubsection } from "./sections/HeroUtamaSubsection";
import { InternalSubsection } from "./sections/InternalSubsection";
import { KmSubsection } from "./sections/KmSubsection";
import { QuickLinksSubsection } from "./sections/QuickLinksSubsection";

export const HomeContent = (): JSX.Element => {
  return (
    <>
      <HeroUtamaSubsection />
      <FrameSubsection />
      <AltSubsection />
      <InternalSubsection />
      <ExternalProgramSubsection />
      <FrameWrapperSubsection />
      <KmSubsection />
      <QuickLinksSubsection />
    </>
  );
};