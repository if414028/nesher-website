import type { Metadata } from "next";

import { PortfolioCaseStudyPage } from "@/components/portfolio/PortfolioCaseStudyPage";
import { zoeEverblossomDetail } from "@/lib/landing-data";

export const metadata: Metadata = {
  title: "Zoe Everblossom Portfolio | Nesher Tech",
  description:
    "Detail portfolio website resmi Zoe Everblossom, brand lilin aromaterapi, rangkaian bunga, hadiah, dan hampers yang dibangun dengan Next.js dan Tailwind CSS.",
};

export default function ZoeEverblossomPage() {
  return (
    <PortfolioCaseStudyPage
      category={zoeEverblossomDetail.category}
      title={zoeEverblossomDetail.title}
      subtitle={zoeEverblossomDetail.subtitle}
      themeColor="#A56F5B"
      overview={zoeEverblossomDetail.overview}
      overviewTitle="Website resmi untuk brand lilin, bunga, hadiah, dan hampers."
      liveUrl={zoeEverblossomDetail.url}
      liveUrlLabel="Lihat Website Zoe"
      heroImage={{
        src: "/portfolio/zoe-everblossom/home.png",
        alt: "Zoe Everblossom homepage screenshot",
        width: 3840,
        height: 2400,
      }}
      meta={[
        { label: "Klien", value: zoeEverblossomDetail.client },
        { label: "Platform", value: zoeEverblossomDetail.platform },
        { label: "Tipe", value: "Brand Website" },
        {
          label: "Link",
          value: zoeEverblossomDetail.domain,
          href: zoeEverblossomDetail.url,
        },
      ]}
      responsibilities={zoeEverblossomDetail.highlights}
      stack={zoeEverblossomDetail.stack}
      gallerySections={[
        {
          eyebrow: "Gallery",
          title: "Tampilan utama website Zoe Everblossom",
          description:
            "Screenshot berikut memperlihatkan halaman beranda, katalog, hadiah, tentang brand, kolaborasi, dan kontak.",
          items: zoeEverblossomDetail.gallery,
        },
      ]}
      ctaTitle="Ingin membuat website brand atau katalog produk seperti Zoe?"
      ctaDescription="Nesher Tech bisa membantu membangun website official yang menampilkan karakter brand, katalog produk, dan CTA pemesanan dengan jelas."
    />
  );
}
