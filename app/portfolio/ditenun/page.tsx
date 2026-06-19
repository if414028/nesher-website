import type { Metadata } from "next";

import { PortfolioCaseStudyPage } from "@/components/portfolio/PortfolioCaseStudyPage";
import { diTenunDetail } from "@/lib/landing-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "DiTenun AI Android App Portfolio | Nesher Teknologi Nusantara",
  description:
    "Detail portfolio DiTenun, aplikasi Android untuk Institut Teknologi Del yang memanfaatkan AI untuk menghasilkan motif tenun digital terinspirasi dari motif Nusantara.",
  path: "/portfolio/ditenun",
  image: "/portfolio/ditenun/home.png",
  keywords: [
    "portfolio aplikasi Android AI",
    "aplikasi generator motif tenun",
    "Institut Teknologi Del",
    "DiTenun",
  ],
});

export default function DiTenunPage() {
  return (
    <PortfolioCaseStudyPage
      category={diTenunDetail.category}
      title={diTenunDetail.title}
      subtitle={diTenunDetail.subtitle}
      overview={diTenunDetail.overview}
      overviewTitle="Eksplorasi motif tenun Nusantara melalui teknologi AI."
      heroImage={{
        src: "/portfolio/ditenun/home.png",
        alt: "DiTenun Android application home screen",
        width: 348,
        height: 610,
        variant: "mobile",
      }}
      meta={[
        { label: "Klien", value: diTenunDetail.client },
        { label: "Platform", value: diTenunDetail.platform },
        { label: "Tipe", value: diTenunDetail.category },
        { label: "Fokus", value: "AI Motif Generation" },
      ]}
      responsibilities={diTenunDetail.highlights}
      stack={diTenunDetail.stack}
      gallerySections={[
        {
          eyebrow: "Android Gallery",
          title: "Tampilan aplikasi DiTenun",
          description:
            "Screenshot berikut memperlihatkan beranda aplikasi, tahapan pembuatan motif, dan galeri motif tenun Nusantara.",
          items: diTenunDetail.gallery,
          variant: "mobile",
        },
      ]}
      ctaTitle="Punya ide aplikasi AI untuk pendidikan, budaya, atau industri kreatif?"
      ctaDescription="Nesher Tech bisa membantu membangun aplikasi mobile yang menggabungkan kebutuhan pengguna, data, dan teknologi AI menjadi pengalaman digital yang mudah digunakan."
    />
  );
}
