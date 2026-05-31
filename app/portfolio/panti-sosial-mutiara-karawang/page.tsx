import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  GalleryHorizontalEnd,
  Globe2,
  HeartHandshake,
  MapPin,
  Megaphone,
  PanelsTopLeft,
} from "lucide-react";

import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { Button } from "@/components/ui/button";
import {
  pantiSosialMutiaraKarawangDetail,
  whatsappUrl,
} from "@/lib/landing-data";

export const metadata: Metadata = {
  title: "Panti Sosial Mutiara Karawang Portfolio | Nesher Tech",
  description:
    "Detail portfolio website Panti Sosial Mutiara Karawang, website publikasi panti sosial yang dibuat dengan Next.js.",
};

const stats = [
  { label: "Platform", value: pantiSosialMutiaraKarawangDetail.platform },
  { label: "Client", value: "Panti Sosial" },
  { label: "Category", value: "Company Profile" },
  { label: "Stack", value: "Next.js" },
];

const featureIcons = [
  PanelsTopLeft,
  HeartHandshake,
  Megaphone,
  GalleryHorizontalEnd,
  MapPin,
  Globe2,
];

export default function PantiSosialMutiaraKarawangPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main>
        <section className="bg-gradient-to-b from-[#F7FAFF] via-white to-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Button
              asChild
              variant="outline"
              className="mb-10 h-10 rounded-full border-[#DDE8F6] bg-white text-[#1F3A5F] hover:bg-[#1F3A5F] hover:text-white"
            >
              <Link href="/#portfolio">
                <ArrowLeft className="mr-2 size-4" />
                Kembali ke Portfolio
              </Link>
            </Button>

            <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <span className="inline-flex rounded-full border border-[#DDE8F6] bg-white px-4 py-2 text-sm font-semibold text-[#1F3A5F] shadow-sm">
                  {pantiSosialMutiaraKarawangDetail.category}
                </span>
                <h1 className="mt-6 text-balance text-4xl font-bold leading-tight text-[#111827] sm:text-5xl lg:text-6xl">
                  {pantiSosialMutiaraKarawangDetail.title}
                </h1>
                <p className="mt-6 text-pretty text-lg leading-8 text-[#6B7280]">
                  {pantiSosialMutiaraKarawangDetail.subtitle}
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {stats.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-3xl border border-[#DDE8F6] bg-white p-5 shadow-[0_14px_45px_rgba(31,58,95,0.06)]"
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

              <div className="overflow-hidden rounded-[2rem] border border-[#DDE8F6] bg-white p-3 shadow-[0_24px_80px_rgba(31,58,95,0.12)]">
                <Image
                  src="/portfolio/panti-sosial-mutiara-karawang/home.png"
                  alt="Panti Sosial Mutiara Karawang homepage screenshot"
                  width={4032}
                  height={2458}
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
              <p className="text-sm font-semibold text-[#1F3A5F]">
                Project Overview
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-[#111827] sm:text-4xl">
                Website publikasi yang membantu panti sosial dikenal publik.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#6B7280]">
                {pantiSosialMutiaraKarawangDetail.overview}
              </p>
            </div>

            <div className="grid gap-4">
              {pantiSosialMutiaraKarawangDetail.highlights.map(
                (item, index) => {
                  const Icon = featureIcons[index % featureIcons.length];

                  return (
                    <div
                      key={item}
                      className="flex gap-4 rounded-[1.5rem] border border-[#DDE8F6] bg-white p-5 shadow-[0_12px_38px_rgba(31,58,95,0.06)]"
                    >
                      <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[#EEF5FF] text-[#1F3A5F]">
                        <Icon className="size-5" />
                      </div>
                      <p className="leading-7 text-[#111827]">{item}</p>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </section>

        <section className="bg-[#F7FAFF] px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold text-[#1F3A5F]">
                Technology
              </p>
              <h2 className="mt-4 text-3xl font-bold text-[#111827] sm:text-4xl">
                Dibangun dengan Next.js untuk website publikasi yang rapi.
              </h2>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {pantiSosialMutiaraKarawangDetail.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#DDE8F6] bg-white px-5 py-3 text-sm font-semibold text-[#1F3A5F] shadow-sm"
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
                <p className="text-sm font-semibold text-[#1F3A5F]">
                  Website Screens
                </p>
                <h2 className="mt-4 text-3xl font-bold text-[#111827] sm:text-4xl">
                  Tampilan utama website Panti Sosial Mutiara Karawang
                </h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-[#6B7280]">
                Screenshot berikut memperlihatkan halaman beranda, tentang,
                layanan, galeri kegiatan, dan kontak.
              </p>
            </div>

            <div className="grid gap-6">
              {pantiSosialMutiaraKarawangDetail.gallery.map((item, index) => (
                <article
                  key={item.src}
                  className="overflow-hidden rounded-[2rem] border border-[#DDE8F6] bg-white shadow-[0_18px_55px_rgba(31,58,95,0.08)]"
                >
                  <div className="grid gap-0 lg:grid-cols-[0.32fr_0.68fr]">
                    <div className="border-b border-[#DDE8F6] p-6 lg:border-b-0 lg:border-r">
                      <span className="text-sm font-semibold text-[#1F3A5F]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-4 text-2xl font-bold text-[#111827]">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-base leading-7 text-[#6B7280]">
                        {item.description}
                      </p>
                    </div>
                    <div className="bg-[#F7FAFF] p-3">
                      <Image
                        src={item.src}
                        alt={`${item.title} screenshot`}
                        width={4032}
                        height={2458}
                        className="rounded-[1.5rem] border border-[#DDE8F6] object-cover object-top"
                      />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-gradient-to-br from-[#1F3A5F] to-[#132238] px-6 py-14 text-center text-white sm:px-10">
            <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">
              Ingin membuat website publikasi untuk lembaga atau organisasi?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/80">
              Nesher Tech bisa membantu membangun website company profile yang
              rapi, mudah diakses, dan siap menjadi media publikasi resmi.
            </p>
            <Button
              asChild
              className="mt-8 h-12 rounded-full bg-white px-7 text-base text-[#1F3A5F] hover:bg-[#1F3A5F] hover:text-white"
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
