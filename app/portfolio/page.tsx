import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { PortfolioGrid } from "@/components/landing/PortfolioSection";
import { Button } from "@/components/ui/button";
import { portfolioItems } from "@/lib/landing-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Portfolio Solusi Digital | Nesher Teknologi Nusantara",
  description:
    "Lihat portfolio Nesher Teknologi Nusantara: mobile application, dashboard system, website company profile, web application, dan sistem custom untuk bisnis dan organisasi.",
  path: "/portfolio",
  image: "/portfolio/letsgrowacademy/overview-dashboard.png",
  keywords: [
    "portfolio software house",
    "portfolio aplikasi mobile",
    "portfolio dashboard",
    "portfolio website company profile",
  ],
});

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-[#F5F5F7] px-4 pb-24 pt-36 sm:px-6 sm:pb-32 sm:pt-44 lg:px-8 lg:pt-48">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 -top-48 h-[56rem] w-[78rem] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(109,40,217,0.11)_0%,rgba(109,40,217,0.045)_38%,transparent_72%)] blur-[70px]"
          />
          <div className="relative mx-auto max-w-7xl">
            <Button
              asChild
              variant="outline"
              className="mb-12 h-10 rounded-full border-black/10 bg-white/60 text-[#1D1D1F] backdrop-blur-xl hover:bg-white hover:text-[#6D28D9]"
            >
              <Link href="/#portfolio">
                <ArrowLeft className="mr-2 size-4" />
                Kembali ke Homepage
              </Link>
            </Button>

            <div className="mx-auto max-w-5xl text-center">
              <span className="inline-flex rounded-full border border-white/80 bg-white/65 px-4 py-2 text-sm font-semibold text-[#6D28D9] shadow-sm backdrop-blur-xl">
                Portfolio
              </span>
              <h1 className="mt-7 text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#1D1D1F] sm:text-7xl lg:text-[5.25rem]">
                Produk digital yang dirancang untuk bekerja.
              </h1>
              <p className="mx-auto mt-7 max-w-3xl text-pretty text-lg leading-8 tracking-[-0.015em] text-[#6E6E73] sm:text-2xl sm:leading-9">
                Website, dashboard, aplikasi, dan sistem custom yang mengubah
                kebutuhan nyata menjadi pengalaman digital yang jernih.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#F5F5F7] px-4 pb-24 sm:px-6 sm:pb-32 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <PortfolioGrid items={portfolioItems} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
