import { CTASection } from "@/components/landing/CTASection";
import { FAQSection } from "@/components/landing/FAQSection";
import { FeatureShowcase } from "@/components/landing/FeatureShowcase";
import { Footer } from "@/components/landing/Footer";
import { HeroSection } from "@/components/landing/HeroSection";
import { Navbar } from "@/components/landing/Navbar";
import { PortfolioSection } from "@/components/landing/PortfolioSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { ProcessSection } from "@/components/landing/ProcessSection";
import { ServicesHighlight } from "@/components/landing/ServicesHighlight";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { TechnologySection } from "@/components/landing/TechnologySection";
import { WhyNesherSection } from "@/components/landing/WhyNesherSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesHighlight />
        <ProblemSection />
        <ServicesSection />
        <FeatureShowcase />
        <PortfolioSection />
        <ProcessSection />
        <WhyNesherSection />
        <TechnologySection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
