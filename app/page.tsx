import type { Metadata } from "next";

import { TasteLanding } from "@/components/landing/TasteLanding";
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
    <div className="min-h-screen font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(homeJsonLd) }}
      />
      <TasteLanding />
    </div>
  );
}
