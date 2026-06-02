import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ClipboardCheck,
  Database,
  Printer,
  Radio,
  Settings2,
  Tag,
} from "lucide-react";

import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { Button } from "@/components/ui/button";
import { adaInventoryDetail, whatsappUrl } from "@/lib/landing-data";
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

const stats = [
  { label: "Platform", value: adaInventoryDetail.platform },
  { label: "Client", value: adaInventoryDetail.client },
  { label: "Device", value: "RFID UHF-RH03" },
  { label: "Backend", value: "Flask + PostgreSQL" },
];

const featureIcons = [
  Radio,
  Tag,
  Printer,
  ClipboardCheck,
  Settings2,
  Database,
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
        width={1440}
        height={3120}
        priority={priority}
        className="mx-auto aspect-[6/13] w-full max-w-[310px] object-contain object-top"
      />
    </div>
  );
}

export default function AdaInventoryPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main>
        <section className="overflow-hidden bg-gradient-to-b from-[#F2FDFF] via-white to-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Button
              asChild
              variant="outline"
              className="mb-10 h-10 rounded-full border-[#CFEFF2] bg-white text-[#1C7E86] hover:bg-[#5EC9CF] hover:text-white"
            >
              <Link href="/#portfolio">
                <ArrowLeft className="mr-2 size-4" />
                Kembali ke Portfolio
              </Link>
            </Button>

            <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <span className="inline-flex rounded-full border border-[#CFEFF2] bg-white px-4 py-2 text-sm font-semibold text-[#1C7E86] shadow-sm">
                  {adaInventoryDetail.category}
                </span>
                <h1 className="mt-6 text-balance text-4xl font-bold leading-tight text-[#111827] sm:text-5xl lg:text-6xl">
                  {adaInventoryDetail.title}
                </h1>
                <p className="mt-6 text-pretty text-lg leading-8 text-[#6B7280]">
                  {adaInventoryDetail.subtitle}
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {stats.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-3xl border border-[#CFEFF2] bg-white p-5 shadow-[0_14px_45px_rgba(28,126,134,0.06)]"
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
                  className="absolute left-1/2 top-10 size-80 -translate-x-1/2 rounded-full bg-[#C9F5F7] blur-3xl"
                />
                <AppScreen
                  src="/portfolio/adainventory/home.png"
                  alt="AdaInventory home screen"
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
              <p className="text-sm font-semibold text-[#1C7E86]">
                Project Overview
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-[#111827] sm:text-4xl">
                Aplikasi Android untuk tagging sampah dengan RFID dan printer
                thermal.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#6B7280]">
                {adaInventoryDetail.overview}
              </p>
            </div>

            <div className="grid gap-4">
              {adaInventoryDetail.highlights.map((item, index) => {
                const Icon = featureIcons[index % featureIcons.length];

                return (
                  <div
                    key={item}
                    className="flex gap-4 rounded-[1.5rem] border border-[#CFEFF2] bg-white p-5 shadow-[0_12px_38px_rgba(28,126,134,0.06)]"
                  >
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[#E9FBFC] text-[#1C7E86]">
                      <Icon className="size-5" />
                    </div>
                    <p className="leading-7 text-[#111827]">{item}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#F2FDFF] px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold text-[#1C7E86]">
                Technology
              </p>
              <h2 className="mt-4 text-3xl font-bold text-[#111827] sm:text-4xl">
                Dibangun untuk integrasi hardware dan workflow operasional.
              </h2>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {adaInventoryDetail.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#CFEFF2] bg-white px-5 py-3 text-sm font-semibold text-[#1C7E86] shadow-sm"
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
                <p className="text-sm font-semibold text-[#1C7E86]">
                  App Screens
                </p>
                <h2 className="mt-4 text-3xl font-bold text-[#111827] sm:text-4xl">
                  Tampilan utama aplikasi AdaInventory
                </h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-[#6B7280]">
                Screenshot berikut memperlihatkan koneksi perangkat, labelling,
                rincian label, konfigurasi RFID, write tag, stock opname, dan
                print label.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {adaInventoryDetail.gallery.map((item) => (
                <article
                  key={item.src}
                  className="rounded-[2rem] border border-[#CFEFF2] bg-[#F2FDFF] p-5 shadow-[0_18px_55px_rgba(28,126,134,0.08)]"
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

        <section className="bg-white px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-gradient-to-br from-[#5EC9CF] to-[#1C7E86] px-6 py-14 text-center text-white sm:px-10">
            <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">
              Butuh aplikasi Android yang terintegrasi dengan hardware?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/85">
              Nesher Tech bisa membantu membangun aplikasi operasional yang
              terhubung dengan device, printer, API, dan database bisnis Anda.
            </p>
            <Button
              asChild
              className="mt-8 h-12 rounded-full bg-white px-7 text-base text-[#1C7E86] hover:bg-[#1C7E86] hover:text-white"
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
