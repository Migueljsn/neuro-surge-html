import { useState, useCallback } from "react";
import HeroSection from "@/components/landing/HeroSection";
import VSLSection from "@/components/landing/VSLSection";
import ProofSection from "@/components/landing/ProofSection";
import ThesisSection from "@/components/landing/ThesisSection";
import MechanismSection from "@/components/landing/MechanismSection";
import StorySection from "@/components/landing/StorySection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import OfferSection from "@/components/landing/OfferSection";
import TrustSection from "@/components/landing/TrustSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import StickyCTA from "@/components/landing/StickyCTA";

// Em desenvolvimento o player converteai não envia postMessage para localhost,
// então liberamos o conteúdo automaticamente para poder testar.
const IS_DEV = import.meta.env.DEV;

const Index = () => {
  const [contentVisible, setContentVisible] = useState(IS_DEV);

  const handleVideoTimeReached = useCallback(() => {
    setContentVisible(true);
  }, []);

  return (
    <>
      <HeroSection />
      <VSLSection onVideoTimeReached={handleVideoTimeReached} />
      {contentVisible && (
        <>
          <ProofSection />
          <ThesisSection />
          <MechanismSection />
          <StorySection />
          <BenefitsSection />
          <OfferSection />
          <TrustSection />
          <FAQSection />
          <FinalCTASection />
          <StickyCTA />
        </>
      )}
    </>
  );
};

export default Index;
