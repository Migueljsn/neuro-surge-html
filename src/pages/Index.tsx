import Topbar from "@/components/neuromax/Topbar";
import HeroSection from "@/components/neuromax/HeroSection";
import ProblemSection from "@/components/neuromax/ProblemSection";
import MechanismSection from "@/components/neuromax/MechanismSection";
import ScienceSection from "@/components/neuromax/ScienceSection";
import TestimonialsSection from "@/components/neuromax/TestimonialsSection";
import OfferSection from "@/components/neuromax/OfferSection";
import FaqSection from "@/components/neuromax/FaqSection";
import FinalCtaSection from "@/components/neuromax/FinalCtaSection";
import Footer from "@/components/neuromax/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Topbar />
      <HeroSection />
      <ProblemSection />
      <MechanismSection />
      <ScienceSection />
      <TestimonialsSection />
      <OfferSection />
      <FaqSection />
      <FinalCtaSection />
      <Footer />
    </div>
  );
};

export default Index;
