import type { Metadata } from "next";

import { PortfolioCaseStudyPage } from "@/components/portfolio/PortfolioCaseStudyPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "JuangGroup Website & Business Strategy Portfolio | Nesher Tech",
  description:
    "Studi kasus JuangGroup: company profile website berbasis Next.js, business plan presentation, dan marketing strategy untuk bisnis lifestyle dan entertainment lintas Indonesia dan Afrika.",
  path: "/portfolio/juanggroup",
  image: "/portfolio/juanggroup/company-profile-home.png",
  keywords: [
    "JuangGroup",
    "company profile Next.js",
    "business plan presentation",
    "marketing strategy",
    "portfolio website company profile",
  ],
});

export default function JuangGroupPortfolioPage() {
  return (
    <PortfolioCaseStudyPage
      category="Website & Business Strategy"
      title="JuangGroup"
      subtitle="Ekosistem digital dan strategi bisnis yang menyatukan company profile website, business plan presentation, serta marketing strategy untuk membawa visi JuangGroup dari Indonesia ke Afrika."
      themeColor="#0F766E"
      overview="Nesher Tech menerjemahkan visi JuangGroup menjadi fondasi brand yang utuh. Kami membangun website company profile bilingual dengan Next.js, menyusun business plan presentation untuk memetakan model bisnis dan operasional Yeshua Cafe, serta merancang marketing strategy yang berangkat dari komunitas, inklusivitas, dan pertumbuhan jangka panjang."
      overviewTitle="Satu narasi yang menghubungkan brand, bisnis, dan pertumbuhan."
      heroImage={{
        src: "/portfolio/juanggroup/company-profile-home.png",
        alt: "Homepage company profile JuangGroup",
        width: 4064,
        height: 2458,
      }}
      liveUrl="https://juanggroup.com"
      liveUrlLabel="Kunjungi JuangGroup"
      meta={[
        { label: "Klien", value: "JuangGroup" },
        { label: "Deliverables", value: "Website, Business Plan & Marketing Strategy" },
        { label: "Platform", value: "Responsive Web" },
        { label: "Technology", value: "Next.js" },
      ]}
      responsibilities={[
        "Merancang dan membangun company profile website yang responsive, bilingual, serta mewakili identitas JuangGroup.",
        "Menyusun arsitektur informasi untuk profil grup dan unit bisnis seperti Yeshua Cafe, Juang Ice Cream, serta Juang Books.",
        "Menyusun business plan presentation yang mencakup konsep menu, inclusive employment, target market, dan connected operations.",
        "Merancang marketing strategy berbasis digital, kampus, komunitas, partnership, dan founder storytelling.",
        "Mengembangkan pengalaman website menggunakan Next.js agar cepat, scalable, dan mudah dikembangkan.",
      ]}
      responsibilityTitle="Dari positioning brand hingga strategi go-to-market."
      stack={[
        "Next.js",
        "TypeScript",
        "Responsive Web Design",
        "Bilingual Experience",
        "Business Planning",
        "Marketing Strategy",
      ]}
      gallerySections={[
        {
          eyebrow: "Company Profile Website",
          title: "Identitas grup dan bisnis dalam satu pengalaman digital.",
          description:
            "Website memperkenalkan visi lintas budaya JuangGroup dan memberi ruang yang jelas bagi setiap unit bisnis untuk menyampaikan cerita, positioning, serta peluang kolaborasinya.",
          items: [
            {
              title: "JuangGroup Homepage",
              description:
                "Hero editorial yang mengangkat positioning JuangGroup sebagai lifestyle and entertainment group yang dibangun lintas budaya.",
              src: "/portfolio/juanggroup/company-profile-home.png",
            },
            {
              title: "Yeshua Cafe",
              description:
                "Halaman unit bisnis dengan narasi inclusive hospitality, visual brand yang kuat, dan CTA untuk calon pelanggan maupun partner.",
              src: "/portfolio/juanggroup/yeshua-cafe-home.png",
            },
          ],
        },
        {
          eyebrow: "Business Plan Presentation",
          title: "Visi bisnis diterjemahkan menjadi rencana yang konkret.",
          description:
            "Presentasi bisnis memetakan produk, dampak sosial, dan alur operasional agar konsep Yeshua Cafe dapat dipahami oleh stakeholder serta calon partner.",
          items: [
            {
              title: "Menu Concept",
              description:
                "Konsep menu yang menyatukan signature food, coffee, beverages, dessert, dan ice cream dalam karakter brand yang konsisten.",
              src: "/portfolio/juanggroup/business-plan-menu-concept.png",
            },
            {
              title: "Signature Beverages",
              description:
                "Visual merchandising untuk memperjelas diferensiasi produk dan daya tarik enam minuman signature.",
              src: "/portfolio/juanggroup/business-plan-signature-beverages.png",
            },
            {
              title: "Inclusive Employment",
              description:
                "Kerangka kesempatan kerja yang suportif dan bermakna bagi penyandang Down syndrome sebagai komitmen operasional brand.",
              src: "/portfolio/juanggroup/business-plan-inclusive-employment.png",
            },
            {
              title: "Connected Operations",
              description:
                "Rancangan workflow digital dari pemesanan, kasir, dapur, inventory, hingga management dashboard.",
              src: "/portfolio/juanggroup/business-plan-connected-operations.png",
            },
          ],
        },
        {
          eyebrow: "Marketing Strategy",
          title: "Community before campaign.",
          description:
            "Strategi pemasaran dibangun dari pemahaman audiens dan relasi komunitas, kemudian diperluas melalui kanal digital, kampus, partnership, serta program yang relevan.",
          items: [
            {
              title: "Target Market",
              description:
                "Pemetaan mahasiswa, profesional, dan komunitas sebagai tiga kelompok utama yang dipertemukan dalam satu welcoming space.",
              src: "/portfolio/juanggroup/marketing-strategy-target-market.png",
            },
            {
              title: "Go-to-Market",
              description:
                "Strategi pertumbuhan melalui digital content, campus activation, community events, dan partnership dengan institusi.",
              src: "/portfolio/juanggroup/marketing-strategy-go-to-market.png",
            },
          ],
        },
      ]}
      ctaTitle="Punya visi bisnis yang perlu diterjemahkan menjadi brand dan produk digital?"
      ctaDescription="Nesher Tech membantu menyatukan strategi, presentasi bisnis, dan website menjadi pengalaman yang siap diperkenalkan kepada market maupun partner."
    />
  );
}
