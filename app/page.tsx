import type { Metadata } from "next";

import { CTASection } from "@/components/landing/CTASection";
import { FAQSection } from "@/components/landing/FAQSection";
import { FeatureShowcase } from "@/components/landing/FeatureShowcase";
import { Footer } from "@/components/landing/Footer";
import { HeroSection } from "@/components/landing/HeroSection";
import { ClientMarqueeSection } from "@/components/landing/ClientMarqueeSection";
import { Navbar } from "@/components/landing/Navbar";
import { PortfolioSection } from "@/components/landing/PortfolioSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { ProcessSection } from "@/components/landing/ProcessSection";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { TechnologySection } from "@/components/landing/TechnologySection";
import { WhyNesherSection } from "@/components/landing/WhyNesherSection";
import { faqItems, services } from "@/lib/landing-data";
import { absoluteUrl, createPageMetadata, jsonLd, siteConfig } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Nesher Teknologi Nusantara | Jasa Website, Aplikasi & Dashboard",
  description:
    "Nesher Teknologi Nusantara membantu bisnis membangun website company profile, web application, dashboard bisnis, mobile app, UI/UX design, dan sistem custom yang modern dan scalable.",
  path: "/",
  keywords: [
    "jasa website company profile",
    "jasa web application",
    "jasa dashboard bisnis",
    "software house Jakarta",
    "software house Indonesia",
  ],
});

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      alternateName: siteConfig.shortName,
      url: siteConfig.url,
      logo: absoluteUrl("/brand/nesher-logo.png"),
      email: siteConfig.email,
      sameAs: [siteConfig.whatsapp],
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
      inLanguage: "id-ID",
      publisher: {
        "@id": `${siteConfig.url}/#organization`,
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteConfig.url}/#service`,
      name: siteConfig.name,
      url: siteConfig.url,
      image: absoluteUrl("/brand/nesher-logo.png"),
      description: siteConfig.description,
      email: siteConfig.email,
      areaServed: {
        "@type": "Country",
        name: "Indonesia",
      },
      serviceType: services.map((service) => service.title),
      provider: {
        "@id": `${siteConfig.url}/#organization`,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/#faq`,
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--nesher-canvas)] font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(homeJsonLd) }}
      />
      <Navbar />
      <main>
        <HeroSection />
        <ClientMarqueeSection />
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
