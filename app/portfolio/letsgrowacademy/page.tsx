import type { Metadata } from "next";

import { PortfolioCaseStudyPage } from "@/components/portfolio/PortfolioCaseStudyPage";
import { letsGrowAcademyDetail } from "@/lib/landing-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "LetsGrowAcademy Dashboard Portfolio | Nesher Teknologi Nusantara",
  description:
    "Detail portfolio LetsGrowAcademy, dashboard monitoring sales Coway untuk network sales, performance, reports, sales orders, kontes, dan evaluasi produktivitas tim.",
  path: "/portfolio/letsgrowacademy",
  image: "/portfolio/letsgrowacademy/overview-dashboard.png",
  keywords: [
    "portfolio dashboard sales",
    "dashboard monitoring sales",
    "LetsGrowAcademy",
  ],
});

export default function LetsGrowAcademyPage() {
  return (
    <PortfolioCaseStudyPage
      category={letsGrowAcademyDetail.category}
      title={letsGrowAcademyDetail.title}
      subtitle={letsGrowAcademyDetail.subtitle}
      themeColor="#2563EB"
      overview={letsGrowAcademyDetail.overview}
      overviewTitle="Dashboard untuk membaca kinerja sales dengan lebih jelas."
      heroImage={{
        src: "/portfolio/letsgrowacademy/overview-dashboard.png",
        alt: "LetsGrowAcademy overview dashboard",
        width: 2048,
        height: 1280,
      }}
      meta={[
        { label: "Klien", value: letsGrowAcademyDetail.client },
        { label: "Platform", value: "Dashboard Web" },
        { label: "Tipe", value: letsGrowAcademyDetail.category },
        { label: "Tahun", value: letsGrowAcademyDetail.year },
      ]}
      responsibilities={letsGrowAcademyDetail.highlights}
      stack={letsGrowAcademyDetail.stack}
      gallerySections={[
        {
          eyebrow: "Gallery",
          title: "Tampilan utama dashboard LetsGrowAcademy",
          description:
            "Screenshot berikut memperlihatkan modul login, overview, partner tree, performance, reports, sales order, dan kontes.",
          items: letsGrowAcademyDetail.gallery,
        },
      ]}
      ctaTitle="Butuh dashboard operasional seperti LetsGrowAcademy?"
      ctaDescription="Nesher Tech bisa membantu merancang dashboard sesuai workflow, data, dan target performance bisnis Anda."
    />
  );
}
