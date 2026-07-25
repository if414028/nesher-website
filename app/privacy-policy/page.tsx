import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail, MapPin, ShieldCheck } from "lucide-react";

import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { Button } from "@/components/ui/button";
import { emailAddress, officeAddress } from "@/lib/landing-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy | Nesher Teknologi Nusantara",
  description:
    "Kebijakan privasi Nesher Teknologi Nusantara tentang pengumpulan, penggunaan, penyimpanan, dan perlindungan data pribadi pengunjung website.",
  path: "/privacy-policy",
  keywords: [
    "privacy policy Nesher Tech",
    "kebijakan privasi Nesher Teknologi Nusantara",
    "perlindungan data pribadi",
  ],
});

const policySections = [
  {
    title: "1. Informasi yang Kami Kumpulkan",
    body: [
      "Kami dapat mengumpulkan informasi yang Anda berikan secara langsung melalui form, email, WhatsApp, atau kanal komunikasi lain, seperti nama, alamat email, nomor telepon, nama perusahaan, dan detail kebutuhan proyek.",
      "Kami juga dapat menerima data teknis dasar dari penggunaan website, seperti halaman yang dikunjungi, jenis perangkat, browser, alamat IP, referral, serta interaksi dengan tombol atau tautan tertentu untuk kebutuhan analitik dan pengukuran performa iklan.",
    ],
  },
  {
    title: "2. Cara Kami Menggunakan Informasi",
    body: [
      "Informasi digunakan untuk menanggapi pertanyaan, memberikan konsultasi, menyiapkan estimasi, menyusun proposal, mengelola komunikasi proyek, dan meningkatkan kualitas layanan Nesher Tech.",
      "Data analitik dan konversi dapat digunakan untuk memahami efektivitas website, mengukur performa kampanye digital, dan memperbaiki pengalaman pengguna.",
    ],
  },
  {
    title: "3. Penggunaan Cookies dan Teknologi Analitik",
    body: [
      "Website ini dapat menggunakan cookies, Google tag, Google Ads conversion tracking, dan teknologi serupa untuk membantu analisis trafik, pengukuran konversi, serta optimasi kampanye.",
      "Anda dapat mengatur preferensi cookies melalui pengaturan browser. Menonaktifkan cookies tertentu dapat memengaruhi sebagian fungsi atau akurasi pengukuran website.",
    ],
  },
  {
    title: "4. Berbagi Informasi dengan Pihak Ketiga",
    body: [
      "Kami tidak menjual data pribadi Anda. Informasi dapat diproses oleh penyedia layanan yang membantu operasional kami, seperti email, hosting, analitik, iklan, penyimpanan data, atau tools komunikasi.",
      "Kami dapat mengungkapkan informasi apabila diperlukan untuk memenuhi kewajiban hukum, menegakkan ketentuan layanan, atau melindungi hak, keamanan, dan kepentingan Nesher Tech maupun pengguna.",
    ],
  },
  {
    title: "5. Penyimpanan dan Keamanan Data",
    body: [
      "Kami menyimpan data selama diperlukan untuk tujuan komunikasi, administrasi, layanan, kepatuhan hukum, atau kebutuhan bisnis yang wajar.",
      "Kami menerapkan langkah perlindungan yang wajar untuk menjaga data dari akses, perubahan, pengungkapan, atau penghapusan yang tidak sah. Namun, tidak ada metode transmisi atau penyimpanan elektronik yang sepenuhnya bebas risiko.",
    ],
  },
  {
    title: "6. Hak dan Pilihan Anda",
    body: [
      "Anda dapat menghubungi kami untuk meminta akses, koreksi, pembaruan, atau penghapusan data pribadi yang Anda berikan, sejauh permintaan tersebut dapat dipenuhi berdasarkan kewajiban hukum dan kepentingan bisnis yang sah.",
      "Anda juga dapat meminta kami menghentikan komunikasi pemasaran langsung apabila suatu saat kami mengirimkannya.",
    ],
  },
  {
    title: "7. Tautan ke Website Lain",
    body: [
      "Website Nesher Tech dapat memuat tautan ke layanan pihak ketiga, seperti WhatsApp, Google Maps, atau website portfolio. Kami tidak bertanggung jawab atas praktik privasi, konten, atau keamanan website pihak ketiga tersebut.",
    ],
  },
  {
    title: "8. Perubahan Kebijakan Privasi",
    body: [
      "Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan akan ditampilkan pada halaman ini dengan tanggal pembaruan terbaru.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[var(--nesher-canvas)] font-sans">
      <Navbar />
      <main>
        <section className="bg-gradient-to-b from-[var(--nesher-purple-50)] via-white to-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Button
              asChild
              variant="outline"
              className="mb-10 h-11 px-5 hover:bg-primary hover:text-white"
            >
              <Link href="/#home">
                <ArrowLeft className="mr-2 size-4" />
                Kembali ke Home
              </Link>
            </Button>

            <div className="grid gap-10 lg:grid-cols-[0.66fr_0.34fr] lg:items-end">
              <div>
                <div className="nesher-chip inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold shadow-sm">
                  <ShieldCheck className="size-4" />
                  Privacy Policy
                </div>
                <h1 className="mt-6 text-balance text-4xl font-semibold leading-tight tracking-[-0.04em] text-[var(--nesher-ink)] sm:text-5xl lg:text-6xl">
                  Kebijakan Privasi Nesher Teknologi Nusantara
                </h1>
                <p className="mt-6 max-w-3xl text-pretty text-lg leading-8 text-[var(--nesher-body)]">
                  Halaman ini menjelaskan bagaimana Nesher Tech mengumpulkan,
                  menggunakan, menyimpan, dan melindungi informasi pribadi yang
                  Anda berikan saat menggunakan website atau menghubungi kami.
                </p>
                <p className="mt-5 text-sm font-semibold text-[var(--nesher-purple-900)]">
                  Terakhir diperbarui: 17 Juni 2026
                </p>
              </div>

              <div className="nesher-card-raised rounded-[2rem] p-6">
                <h2 className="text-xl font-semibold text-[var(--nesher-ink)]">
                  Kontak Privasi
                </h2>
                <div className="mt-5 grid gap-4 text-sm leading-6 text-[var(--nesher-body)]">
                  <a
                    href={`mailto:${emailAddress}`}
                    className="flex items-start gap-3 transition hover:text-primary"
                  >
                    <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
                    {emailAddress}
                  </a>
                  <p className="flex items-start gap-3">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                    {officeAddress}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.28fr_0.72fr]">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-sm font-semibold text-primary">
                Ringkasan
              </p>
              <p className="mt-4 text-base leading-7 text-[var(--nesher-body)]">
                Kebijakan ini berlaku untuk penggunaan website
                neshertechnology.id dan komunikasi awal terkait layanan
                software house, website, dashboard, mobile app, serta sistem
                custom.
              </p>
            </aside>

            <div className="grid gap-5">
              {policySections.map((section) => (
                <article
                  key={section.title}
                  className="nesher-card rounded-[1.75rem] p-6"
                >
                  <h2 className="text-xl font-semibold text-[var(--nesher-ink)]">
                    {section.title}
                  </h2>
                  <div className="mt-4 grid gap-4">
                    {section.body.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-base leading-8 text-[var(--nesher-body)]"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </article>
              ))}

              <article className="rounded-[1.75rem] border border-[var(--nesher-purple-border)] bg-[var(--nesher-purple-50)] p-6">
                <h2 className="text-xl font-semibold text-[var(--nesher-ink)]">
                  9. Hubungi Kami
                </h2>
                <p className="mt-4 text-base leading-8 text-[var(--nesher-body)]">
                  Untuk pertanyaan, permintaan, atau klarifikasi terkait
                  kebijakan privasi ini, silakan hubungi Nesher Tech melalui{" "}
                  <a
                    href={`mailto:${emailAddress}`}
                    className="font-semibold text-primary hover:text-[var(--nesher-purple-900)]"
                  >
                    {emailAddress}
                  </a>
                  .
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
