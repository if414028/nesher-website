import type { Metadata } from "next";

import { PortfolioCaseStudyPage } from "@/components/portfolio/PortfolioCaseStudyPage";
import { myHananeelCintaDetail } from "@/lib/landing-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "MyHananeelCinta Portfolio | Nesher Teknologi Nusantara",
  description:
    "Studi kasus MyHananeelCinta: aplikasi Android dan iOS, website publik, admin dashboard Laravel, serta REST API Laravel untuk pelayanan digital JKI Hananeel Cinta.",
  path: "/portfolio/myhananeelcinta",
  image: "/portfolio/myhananeelcinta/home.webp",
  keywords: [
    "portfolio mobile app gereja",
    "admin dashboard Laravel",
    "REST API Laravel",
    "website gereja",
    "aplikasi gereja Android iOS",
    "MyHananeelCinta",
  ],
});

export default function MyHananeelCintaPage() {
  return (
    <PortfolioCaseStudyPage
      category={myHananeelCintaDetail.category}
      title={myHananeelCintaDetail.title}
      subtitle={myHananeelCintaDetail.subtitle}
      themeColor="#8F1538"
      overview={myHananeelCintaDetail.overview}
      overviewTitle="Satu ekosistem untuk pelayanan, konten, dan komunikasi jemaat."
      heroImage={{
        src: "/portfolio/myhananeelcinta/admin-dashboard.png",
        secondarySrc: "/portfolio/myhananeelcinta/home.webp",
        alt: "MyHananeelCinta digital ecosystem",
        width: 2400,
        height: 1452,
        variant: "hybrid",
      }}
      meta={[
        { label: "Klien", value: myHananeelCintaDetail.client },
        { label: "Platform", value: myHananeelCintaDetail.platform },
        { label: "Tipe", value: myHananeelCintaDetail.category },
        { label: "Backend", value: "Laravel & REST API" },
      ]}
      responsibilities={myHananeelCintaDetail.highlights}
      stack={myHananeelCintaDetail.stack}
      gallerySections={[
        {
          eyebrow: "Mobile Application",
          title: "Aplikasi jemaat untuk Android dan iOS",
          description:
            "Screenshot berikut memperlihatkan login, home, renungan, informasi ibadah, persembahan, dan form permintaan doa.",
          items: myHananeelCintaDetail.gallery,
          variant: "mobile",
        },
        {
          eyebrow: "Admin Dashboard",
          title: "CMS Laravel untuk operasional dan pelayanan gereja",
          description:
            "Dashboard admin menyatukan pengelolaan jemaat, prayer request, Mezbah Keluarga, konten, role dan permission, website settings, serta audit logs dalam satu workspace.",
          items: [
            {
              title: "Admin Login",
              description:
                "Authentication workspace khusus admin untuk menjaga akses pengelolaan konten dan data gereja.",
              src: "/portfolio/myhananeelcinta/admin-login.png",
            },
            {
              title: "Dashboard Admin",
              description:
                "Ringkasan jumlah jemaat, pengumuman, prayer request, Pastor Message, dan aktivitas operasional terbaru.",
              src: "/portfolio/myhananeelcinta/admin-dashboard.png",
            },
            {
              title: "Prayer Request Management",
              description:
                "Daftar permintaan doa dengan pencarian, filter kategori dan status, bulk action, serta penanda confidential.",
              src: "/portfolio/myhananeelcinta/admin-prayer-request.png",
            },
            {
              title: "Mezbah Keluarga",
              description:
                "Pengelolaan lokasi, jadwal, PIC, dan status aktif komunitas Mezbah Keluarga.",
              src: "/portfolio/myhananeelcinta/admin-mezbah-keluarga.png",
            },
          ],
        },
        {
          eyebrow: "Public Website",
          title: "Website publik yang terhubung dengan konten gereja",
          description:
            "Website responsive memberi jemaat akses ke profil gereja, pengumuman, Pastor Message, jadwal ibadah, komunitas Mezbah Keluarga, dan prayer request.",
          items: [
            {
              title: "Homepage",
              description:
                "Halaman utama dengan positioning gereja, navigasi layanan, dan akses langsung menuju prayer request.",
              src: "/portfolio/myhananeelcinta/website-home.png",
            },
            {
              title: "Pengumuman Gereja",
              description:
                "Daftar pengumuman terbaru yang dikelola melalui CMS dan ditampilkan dalam kartu yang mudah dipindai.",
              src: "/portfolio/myhananeelcinta/website-announcements.png",
            },
            {
              title: "Pastor Message Terbaru",
              description:
                "Highlight renungan terbaru yang membantu jemaat menemukan pesan pastoral dengan cepat.",
              src: "/portfolio/myhananeelcinta/website-pastor-message-home.png",
            },
            {
              title: "Jadwal & Komunitas",
              description:
                "Informasi jadwal ibadah serta lokasi Mezbah Keluarga yang tersinkron dengan pengelolaan admin.",
              src: "/portfolio/myhananeelcinta/website-schedule-and-community.png",
            },
            {
              title: "Pastor Message",
              description:
                "Katalog pesan pastoral dengan fitur pencarian berdasarkan pesan atau penulis.",
              src: "/portfolio/myhananeelcinta/website-pastor-message.png",
            },
            {
              title: "Prayer Request",
              description:
                "Form permohonan doa dengan pilihan anonim dan confidential untuk melindungi privasi jemaat.",
              src: "/portfolio/myhananeelcinta/website-prayer-request.png",
            },
          ],
        },
      ]}
      ctaTitle="Butuh ekosistem digital terintegrasi untuk organisasi atau komunitas?"
      ctaDescription="Nesher Tech dapat membangun aplikasi mobile, website, admin dashboard, dan REST API yang bekerja sebagai satu sistem."
    />
  );
}
