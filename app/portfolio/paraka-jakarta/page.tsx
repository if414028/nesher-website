import type { Metadata } from "next";

import { PortfolioCaseStudyPage } from "@/components/portfolio/PortfolioCaseStudyPage";
import { parakaJakartaDetail } from "@/lib/landing-data";

export const metadata: Metadata = {
  title: "Paraka Jakarta Portfolio | Nesher Tech",
  description:
    "Detail portfolio Paraka Jakarta, aplikasi Android dan dashboard Laravel 11 untuk pemetaan pendukung Pilgub DKI Jakarta 2024.",
};

export default function ParakaJakartaPage() {
  return (
    <PortfolioCaseStudyPage
      category={parakaJakartaDetail.category}
      title={parakaJakartaDetail.title}
      subtitle={parakaJakartaDetail.subtitle}
      overview={parakaJakartaDetail.overview}
      overviewTitle="Sistem survey lapangan untuk memetakan dukungan berbasis lokasi."
      heroImage={{
        src: "/portfolio/paraka-jakarta/map-survey.jpeg",
        alt: "Paraka Jakarta map survey screen",
        width: 720,
        height: 1600,
        variant: "mobile",
      }}
      meta={[
        { label: "Klien", value: parakaJakartaDetail.client },
        { label: "Platform", value: parakaJakartaDetail.platform },
        { label: "Tipe", value: parakaJakartaDetail.category },
        { label: "Stack", value: "Laravel 11" },
      ]}
      responsibilities={parakaJakartaDetail.highlights}
      stack={parakaJakartaDetail.stack}
      gallerySections={[
        {
          eyebrow: "Android Gallery",
          title: "Tampilan aplikasi lapangan Paraka Jakarta",
          description:
            "Screenshot berikut memperlihatkan login, survey, kamera, map, review data, dan rekap laporan di aplikasi Android.",
          items: parakaJakartaDetail.mobileGallery,
          variant: "mobile",
        },
        {
          eyebrow: "Dashboard Gallery",
          title: "Dashboard admin untuk monitoring data survey",
          description:
            "Dashboard membantu admin memantau overview, sebaran marker, dan data surveyor dari satu tempat.",
          items: parakaJakartaDetail.dashboardGallery,
        },
      ]}
      ctaTitle="Butuh aplikasi survey dan dashboard monitoring untuk tim lapangan?"
      ctaDescription="Nesher Tech bisa membantu membangun aplikasi mobile dan dashboard yang sesuai dengan kebutuhan operasional, reporting, dan monitoring bisnis Anda."
    />
  );
}
