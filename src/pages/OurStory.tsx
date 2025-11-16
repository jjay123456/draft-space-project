import PublicNavbar from "@/components/layout/PublicNavbar";
import { HeroSection } from "@/components/our-story/HeroSection";
import { OriginPurposeSection } from "@/components/our-story/OriginPurposeSection";
import { ProgramFeaturesSection } from "@/components/our-story/ProgramFeaturesSection";
import { ProgramHighlightsSection } from "@/components/our-story/ProgramHighlightsSection";
import { WhoWeServeSection } from "@/components/our-story/WhoWeServeSection";
import { ProgramOutcomesSection } from "@/components/our-story/ProgramOutcomesSection";
import { JourneyTimelineSection } from "@/components/our-story/JourneyTimelineSection";
import { FinalCtaSection } from "@/components/our-story/FinalCtaSection";

const OurStory = () => {
  return (
    <div className="min-h-screen bg-background">
      <PublicNavbar />
      <HeroSection />
      <OriginPurposeSection />
      <ProgramFeaturesSection />
      <ProgramHighlightsSection />
      <WhoWeServeSection />
      <ProgramOutcomesSection />
      <JourneyTimelineSection />
      <FinalCtaSection />
    </div>
  );
};

export default OurStory;
