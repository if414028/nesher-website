import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, localePath, type Locale } from "@/lib/i18n/routing";
import { getTranslator } from "@/lib/i18n/translations";

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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return createPageMetadata({
    locale,
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
}

function homeJsonLd(locale: Locale) {
  const t = getTranslator(locale);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        alternateName: siteConfig.shortName,
        url: absoluteUrl(localePath("/", locale)),
        logo: absoluteUrl("/brand/nesher-logo.png"),
        email: siteConfig.email,
        sameAs: [siteConfig.whatsapp],
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: absoluteUrl(localePath("/", locale)),
        name: siteConfig.name,
        description: t(siteConfig.description),
        inLanguage: locale === "id" ? "id-ID" : "en-US",
        publisher: {
          "@id": `${siteConfig.url}/#organization`,
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.url}/#service`,
        name: siteConfig.name,
        url: absoluteUrl(localePath("/", locale)),
        image: absoluteUrl("/brand/nesher-logo.png"),
        description: t(siteConfig.description),
        email: siteConfig.email,
        areaServed: {
          "@type": "Country",
          name: "Indonesia",
        },
        serviceType: services.map((service) => t(service.title)),
        provider: {
          "@id": `${siteConfig.url}/#organization`,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.url}/#faq`,
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: t(item.question),
          acceptedAnswer: {
            "@type": "Answer",
            text: t(item.answer),
          },
        })),
      },
    ],
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <div className="min-h-screen bg-[var(--nesher-canvas)] font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(homeJsonLd(locale)) }}
      />
      <Navbar />
      <main id="main-content">
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
