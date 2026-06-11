import type { Metadata } from "next";

import { PortfolioCaseStudyPage } from "@/components/portfolio/PortfolioCaseStudyPage";
import { myHananeelCintaDetail } from "@/lib/landing-data";

export const metadata: Metadata = {
  title: "MyHananeelCinta Portfolio | Nesher Tech",
  description:
    "Detail portfolio MyHananeelCinta, aplikasi official Gereja JKI Hananeel Cinta untuk Android dan iOS.",
};

export default function MyHananeelCintaPage() {
  return (
    <PortfolioCaseStudyPage
      category={myHananeelCintaDetail.category}
      title={myHananeelCintaDetail.title}
      subtitle={myHananeelCintaDetail.subtitle}
      overview={myHananeelCintaDetail.overview}
      overviewTitle="Aplikasi mobile untuk menghubungkan gereja dan jemaat."
      heroImage={{
        src: "/portfolio/myhananeelcinta/home.webp",
        alt: "MyHananeelCinta home screen",
        width: 1362,
        height: 2880,
        variant: "mobile",
      }}
      meta={[
        { label: "Klien", value: myHananeelCintaDetail.client },
        { label: "Platform", value: myHananeelCintaDetail.platform },
        { label: "Tipe", value: myHananeelCintaDetail.category },
        { label: "Focus", value: "Jemaat & Informasi" },
      ]}
      responsibilities={myHananeelCintaDetail.highlights}
      stack={myHananeelCintaDetail.stack}
      gallerySections={[
        {
          eyebrow: "Gallery",
          title: "Tampilan utama aplikasi MyHananeelCinta",
          description:
            "Screenshot berikut memperlihatkan login, home, renungan, informasi ibadah, persembahan, dan form permintaan doa.",
          items: myHananeelCintaDetail.gallery,
          variant: "mobile",
        },
      ]}
      ctaTitle="Ingin membuat aplikasi mobile untuk komunitas atau organisasi?"
      ctaDescription="Nesher Tech bisa membantu membangun aplikasi Android dan iOS dengan fitur yang sesuai kebutuhan pengguna Anda."
    />
  );
}
