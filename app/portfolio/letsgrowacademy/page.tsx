import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  BarChart3,
  CheckCircle2,
  Database,
  Network,
  Trophy,
} from "lucide-react";

import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { Button } from "@/components/ui/button";
import { letsGrowAcademyDetail, whatsappUrl } from "@/lib/landing-data";
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

const stats = [
  { label: "Platform", value: "Dashboard Web" },
  { label: "Focus", value: "Sales Performance" },
  { label: "Database", value: "MariaDB" },
  { label: "Stack", value: "Laravel" },
];

const featureIcons = [Network, BarChart3, Database, Trophy, CheckCircle2];

export default function LetsGrowAcademyPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main>
        <section className="bg-gradient-to-b from-[#FAF7FF] via-white to-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Button
              asChild
              variant="outline"
              className="mb-10 h-10 rounded-full border-[#E9DFFF] bg-white text-[#3B0764] hover:bg-[#6D28D9] hover:text-white"
            >
              <Link href="/#portfolio">
                <ArrowLeft className="mr-2 size-4" />
                Kembali ke Portfolio
              </Link>
            </Button>

            <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <span className="inline-flex rounded-full border border-[#E9DFFF] bg-white px-4 py-2 text-sm font-semibold text-[#6D28D9] shadow-sm">
                  {letsGrowAcademyDetail.category}
                </span>
                <h1 className="mt-6 text-balance text-4xl font-bold leading-tight text-[#111827] sm:text-5xl lg:text-6xl">
                  {letsGrowAcademyDetail.title}
                </h1>
                <p className="mt-6 text-pretty text-lg leading-8 text-[#6B7280]">
                  {letsGrowAcademyDetail.subtitle}
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {stats.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-3xl border border-[#E9DFFF] bg-white p-5 shadow-[0_14px_45px_rgba(59,7,100,0.05)]"
                    >
                      <p className="text-sm font-medium text-[#6B7280]">
                        {item.label}
                      </p>
                      <p className="mt-2 text-xl font-bold text-[#111827]">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-[2rem] border border-[#E9DFFF] bg-white p-3 shadow-[0_24px_80px_rgba(59,7,100,0.12)]">
                <Image
                  src="/portfolio/letsgrowacademy/overview-dashboard.png"
                  alt="LetsGrowAcademy overview dashboard"
                  width={2048}
                  height={1280}
                  priority
                  className="rounded-[1.5rem] object-cover object-top"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold text-[#6D28D9]">
                Project Overview
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-[#111827] sm:text-4xl">
                Dashboard untuk membaca kinerja sales dengan lebih jelas.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#6B7280]">
                {letsGrowAcademyDetail.overview}
              </p>
            </div>

            <div className="grid gap-4">
              {letsGrowAcademyDetail.highlights.map((item, index) => {
                const Icon = featureIcons[index % featureIcons.length];

                return (
                  <div
                    key={item}
                    className="flex gap-4 rounded-[1.5rem] border border-[#E9DFFF] bg-white p-5 shadow-[0_12px_38px_rgba(59,7,100,0.05)]"
                  >
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[#F6F1FF] text-[#6D28D9]">
                      <Icon className="size-5" />
                    </div>
                    <p className="leading-7 text-[#111827]">{item}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#FAF7FF] px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold text-[#6D28D9]">
                Technology
              </p>
              <h2 className="mt-4 text-3xl font-bold text-[#111827] sm:text-4xl">
                Dibangun dengan stack yang stabil untuk kebutuhan operasional.
              </h2>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {letsGrowAcademyDetail.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#E9DFFF] bg-white px-5 py-3 text-sm font-semibold text-[#3B0764] shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm font-semibold text-[#6D28D9]">
                  Product Screens
                </p>
                <h2 className="mt-4 text-3xl font-bold text-[#111827] sm:text-4xl">
                  Tampilan utama dashboard LetsGrowAcademy
                </h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-[#6B7280]">
                Screenshot berikut memperlihatkan modul login, overview,
                partner tree, performance, reports, sales order, dan kontes.
              </p>
            </div>

            <div className="grid gap-6">
              {letsGrowAcademyDetail.gallery.map((item, index) => (
                <article
                  key={item.src}
                  className="overflow-hidden rounded-[2rem] border border-[#E9DFFF] bg-white shadow-[0_18px_55px_rgba(59,7,100,0.08)]"
                >
                  <div className="grid gap-0 lg:grid-cols-[0.32fr_0.68fr]">
                    <div className="border-b border-[#E9DFFF] p-6 lg:border-b-0 lg:border-r">
                      <span className="text-sm font-semibold text-[#6D28D9]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-4 text-2xl font-bold text-[#111827]">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-base leading-7 text-[#6B7280]">
                        {item.description}
                      </p>
                    </div>
                    <div className="bg-[#FAF7FF] p-3">
                      <Image
                        src={item.src}
                        alt={`${item.title} screenshot`}
                        width={2048}
                        height={1280}
                        className="rounded-[1.5rem] border border-[#E9DFFF] object-cover object-top"
                      />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-gradient-to-br from-[#6D28D9] to-[#3B0764] px-6 py-14 text-center text-white sm:px-10">
            <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">
              Butuh dashboard operasional seperti LetsGrowAcademy?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/80">
              Nesher Tech bisa membantu merancang dashboard sesuai workflow,
              data, dan target performance bisnis Anda.
            </p>
            <Button
              asChild
              className="mt-8 h-12 rounded-full bg-white px-7 text-base text-[#3B0764] hover:bg-[#5B21B6] hover:text-white"
            >
              <a href={whatsappUrl} rel="noreferrer" target="_blank">
                Diskusikan Project
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
