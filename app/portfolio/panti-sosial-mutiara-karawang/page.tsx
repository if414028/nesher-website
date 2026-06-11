import type { Metadata } from "next";

import { PortfolioCaseStudyPage } from "@/components/portfolio/PortfolioCaseStudyPage";
import { pantiSosialMutiaraKarawangDetail } from "@/lib/landing-data";

export const metadata: Metadata = {
  title: "Panti Sosial Mutiara Karawang Portfolio | Nesher Tech",
  description:
    "Detail portfolio website Panti Sosial Mutiara Karawang, website publikasi panti sosial yang dibuat dengan Next.js.",
};

export default function PantiSosialMutiaraKarawangPage() {
  return (
    <PortfolioCaseStudyPage
      category={pantiSosialMutiaraKarawangDetail.category}
      title={pantiSosialMutiaraKarawangDetail.title}
      subtitle={pantiSosialMutiaraKarawangDetail.subtitle}
      overview={pantiSosialMutiaraKarawangDetail.overview}
      overviewTitle="Website publikasi yang membantu panti sosial dikenal publik."
      liveUrl={pantiSosialMutiaraKarawangDetail.url}
      liveUrlLabel="Lihat Website Panti"
      heroImage={{
        src: "/portfolio/panti-sosial-mutiara-karawang/home.png",
        alt: "Panti Sosial Mutiara Karawang homepage screenshot",
        width: 4032,
        height: 2458,
      }}
      meta={[
        { label: "Klien", value: pantiSosialMutiaraKarawangDetail.client },
        { label: "Platform", value: pantiSosialMutiaraKarawangDetail.platform },
        { label: "Tipe", value: "Company Profile" },
        {
          label: "Link",
          value: pantiSosialMutiaraKarawangDetail.domain,
          href: pantiSosialMutiaraKarawangDetail.url,
        },
      ]}
      responsibilities={pantiSosialMutiaraKarawangDetail.highlights}
      stack={pantiSosialMutiaraKarawangDetail.stack}
      gallerySections={[
        {
          eyebrow: "Gallery",
          title: "Tampilan utama website Panti Sosial Mutiara Karawang",
          description:
            "Screenshot berikut memperlihatkan halaman beranda, tentang, layanan, galeri kegiatan, dan kontak.",
          items: pantiSosialMutiaraKarawangDetail.gallery,
        },
      ]}
      ctaTitle="Ingin membuat website publikasi untuk lembaga atau organisasi?"
      ctaDescription="Nesher Tech bisa membantu membangun website company profile yang rapi, mudah diakses, dan siap menjadi media publikasi resmi."
    />
  );
}
