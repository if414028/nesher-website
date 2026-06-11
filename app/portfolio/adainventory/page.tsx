import type { Metadata } from "next";

import { PortfolioCaseStudyPage } from "@/components/portfolio/PortfolioCaseStudyPage";
import { adaInventoryDetail } from "@/lib/landing-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "AdaInventory RFID App Portfolio | Nesher Teknologi Nusantara",
  description:
    "Detail portfolio AdaInventory, aplikasi Android RFID untuk PT Adamata yang terintegrasi dengan handheld UHF-RH03, thermal Bluetooth printer, backend Flask, dan PostgreSQL.",
  path: "/portfolio/adainventory",
  image: "/portfolio/adainventory/home.png",
  keywords: [
    "portfolio aplikasi Android RFID",
    "aplikasi inventory RFID",
    "AdaInventory",
  ],
});

export default function AdaInventoryPage() {
  return (
    <PortfolioCaseStudyPage
      category={adaInventoryDetail.category}
      title={adaInventoryDetail.title}
      subtitle={adaInventoryDetail.subtitle}
      overview={adaInventoryDetail.overview}
      overviewTitle="Aplikasi Android untuk tagging sampah dengan RFID dan printer thermal."
      heroImage={{
        src: "/portfolio/adainventory/home.png",
        alt: "AdaInventory home screen",
        width: 1440,
        height: 3120,
        variant: "mobile",
      }}
      meta={[
        { label: "Klien", value: adaInventoryDetail.client },
        { label: "Platform", value: adaInventoryDetail.platform },
        { label: "Device", value: "RFID UHF-RH03" },
        { label: "Backend", value: "Flask + PostgreSQL" },
      ]}
      responsibilities={adaInventoryDetail.highlights}
      stack={adaInventoryDetail.stack}
      gallerySections={[
        {
          eyebrow: "Gallery",
          title: "Tampilan utama aplikasi AdaInventory",
          description:
            "Screenshot berikut memperlihatkan koneksi perangkat, labelling, rincian label, konfigurasi RFID, write tag, stock opname, dan print label.",
          items: adaInventoryDetail.gallery,
          variant: "mobile",
        },
      ]}
      ctaTitle="Butuh aplikasi Android yang terintegrasi dengan hardware?"
      ctaDescription="Nesher Tech bisa membantu membangun aplikasi operasional yang terhubung dengan device, printer, API, dan database bisnis Anda."
    />
  );
}
