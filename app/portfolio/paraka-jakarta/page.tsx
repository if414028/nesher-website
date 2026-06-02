import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  BarChart3,
  Camera,
  ClipboardList,
  LayoutDashboard,
  MapPinned,
  UsersRound,
} from "lucide-react";

import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { Button } from "@/components/ui/button";
import { parakaJakartaDetail, whatsappUrl } from "@/lib/landing-data";

export const metadata: Metadata = {
  title: "Paraka Jakarta Portfolio | Nesher Tech",
  description:
    "Detail portfolio Paraka Jakarta, aplikasi Android dan dashboard Laravel 11 untuk pemetaan pendukung Pilgub DKI Jakarta 2024.",
};

const stats = [
  { label: "Platform", value: "Android + Dashboard" },
  { label: "Client", value: parakaJakartaDetail.client },
  { label: "Focus", value: "Supporter Mapping" },
  { label: "Stack", value: "Laravel 11" },
];

const featureIcons = [
  UsersRound,
  MapPinned,
  ClipboardList,
  Camera,
  BarChart3,
  LayoutDashboard,
];

function AppScreen({
  alt,
  className,
  priority,
  src,
}: {
  alt: string;
  className?: string;
  priority?: boolean;
  src: string;
}) {
  return (
    <div className={className}>
      <Image
        src={src}
        alt={alt}
        width={720}
        height={1600}
        priority={priority}
        className="mx-auto aspect-[9/20] w-full max-w-[310px] object-contain object-top"
      />
    </div>
  );
}

export default function ParakaJakartaPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main>
        <section className="overflow-hidden bg-gradient-to-b from-[#FFF7F2] via-white to-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Button
              asChild
              variant="outline"
              className="mb-10 h-10 rounded-full border-[#F7D7C6] bg-white text-[#A84417] hover:bg-[#D65A1F] hover:text-white"
            >
              <Link href="/#portfolio">
                <ArrowLeft className="mr-2 size-4" />
                Kembali ke Portfolio
              </Link>
            </Button>

            <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <span className="inline-flex rounded-full border border-[#F7D7C6] bg-white px-4 py-2 text-sm font-semibold text-[#A84417] shadow-sm">
                  {parakaJakartaDetail.category}
                </span>
                <h1 className="mt-6 text-balance text-4xl font-bold leading-tight text-[#111827] sm:text-5xl lg:text-6xl">
                  {parakaJakartaDetail.title}
                </h1>
                <p className="mt-6 text-pretty text-lg leading-8 text-[#6B7280]">
                  {parakaJakartaDetail.subtitle}
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {stats.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-3xl border border-[#F7D7C6] bg-white p-5 shadow-[0_14px_45px_rgba(214,90,31,0.07)]"
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

              <div className="relative min-h-[560px]">
                <div
                  aria-hidden="true"
                  className="absolute left-1/2 top-10 size-80 -translate-x-1/2 rounded-full bg-[#FFD9C2] blur-3xl"
                />
                <div className="absolute right-8 top-16 hidden rounded-[1.5rem] border border-[#F7D7C6] bg-white/90 p-4 shadow-[0_18px_55px_rgba(214,90,31,0.13)] backdrop-blur md:block">
                  <p className="text-sm font-semibold text-[#A84417]">
                    588 Surveyor
                  </p>
                  <p className="mt-1 text-xs text-[#6B7280]">
                    Dashboard monitoring
                  </p>
                </div>
                <AppScreen
                  src="/portfolio/paraka-jakarta/map-survey.jpeg"
                  alt="Paraka Jakarta map survey screen"
                  priority
                  className="relative z-10"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold text-[#A84417]">
                Project Overview
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-[#111827] sm:text-4xl">
                Sistem survey lapangan untuk memetakan dukungan berbasis
                lokasi.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#6B7280]">
                {parakaJakartaDetail.overview}
              </p>
            </div>

            <div className="grid gap-4">
              {parakaJakartaDetail.highlights.map((item, index) => {
                const Icon = featureIcons[index % featureIcons.length];

                return (
                  <div
                    key={item}
                    className="flex gap-4 rounded-[1.5rem] border border-[#F7D7C6] bg-white p-5 shadow-[0_12px_38px_rgba(214,90,31,0.07)]"
                  >
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[#FFF0E8] text-[#D65A1F]">
                      <Icon className="size-5" />
                    </div>
                    <p className="leading-7 text-[#111827]">{item}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#FFF7F2] px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold text-[#A84417]">
                Technology
              </p>
              <h2 className="mt-4 text-3xl font-bold text-[#111827] sm:text-4xl">
                Dibangun untuk survey mobile dan monitoring dashboard.
              </h2>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {parakaJakartaDetail.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#F7D7C6] bg-white px-5 py-3 text-sm font-semibold text-[#A84417] shadow-sm"
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
                <p className="text-sm font-semibold text-[#A84417]">
                  Android Screens
                </p>
                <h2 className="mt-4 text-3xl font-bold text-[#111827] sm:text-4xl">
                  Tampilan aplikasi lapangan Paraka Jakarta
                </h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-[#6B7280]">
                Screenshot berikut memperlihatkan login, survey, kamera, map,
                review data, dan rekap laporan di aplikasi Android.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {parakaJakartaDetail.mobileGallery.map((item) => (
                <article
                  key={item.src}
                  className="rounded-[2rem] border border-[#F7D7C6] bg-[#FFF7F2] p-5 shadow-[0_18px_55px_rgba(214,90,31,0.08)]"
                >
                  <AppScreen
                    src={item.src}
                    alt={`${item.title} screen`}
                    className="mx-auto"
                  />
                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-[#111827]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-[#6B7280]">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#FFF7F2] px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm font-semibold text-[#A84417]">
                  Dashboard Screens
                </p>
                <h2 className="mt-4 text-3xl font-bold text-[#111827] sm:text-4xl">
                  Dashboard admin untuk monitoring data survey
                </h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-[#6B7280]">
                Dashboard membantu admin memantau overview, sebaran marker, dan
                data surveyor dari satu tempat.
              </p>
            </div>

            <div className="grid gap-6">
              {parakaJakartaDetail.dashboardGallery.map((item, index) => (
                <article
                  key={item.src}
                  className="overflow-hidden rounded-[2rem] border border-[#F7D7C6] bg-white shadow-[0_18px_55px_rgba(214,90,31,0.08)]"
                >
                  <div className="grid gap-0 lg:grid-cols-[0.32fr_0.68fr]">
                    <div className="border-b border-[#F7D7C6] p-6 lg:border-b-0 lg:border-r">
                      <span className="text-sm font-semibold text-[#A84417]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-4 text-2xl font-bold text-[#111827]">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-base leading-7 text-[#6B7280]">
                        {item.description}
                      </p>
                    </div>
                    <div className="bg-white p-3">
                      <Image
                        src={item.src}
                        alt={`${item.title} screenshot`}
                        width={1024}
                        height={529}
                        className="rounded-[1.5rem] border border-[#F7D7C6] object-cover object-top"
                      />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-gradient-to-br from-[#D65A1F] to-[#231F20] px-6 py-14 text-center text-white sm:px-10">
            <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">
              Butuh aplikasi survey dan dashboard monitoring untuk tim lapangan?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/85">
              Nesher Tech bisa membantu membangun aplikasi mobile dan dashboard
              yang sesuai dengan kebutuhan operasional, reporting, dan
              monitoring bisnis Anda.
            </p>
            <Button
              asChild
              className="mt-8 h-12 rounded-full bg-white px-7 text-base text-[#A84417] hover:bg-[#231F20] hover:text-white"
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
