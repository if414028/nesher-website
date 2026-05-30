import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { PortfolioGrid } from "@/components/landing/PortfolioSection";
import { Button } from "@/components/ui/button";
import { portfolioItems } from "@/lib/landing-data";

export const metadata: Metadata = {
  title: "Portfolio | Nesher Tech",
  description:
    "Daftar portfolio solusi digital Nesher Tech, mulai dari mobile application, dashboard system, web application, dan sistem custom.",
};

export default function PortfolioPage() {
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
                Kembali ke Homepage
              </Link>
            </Button>

            <div className="max-w-4xl">
              <span className="inline-flex rounded-full border border-[#E9DFFF] bg-white px-4 py-2 text-sm font-semibold text-[#6D28D9] shadow-sm">
                Portfolio
              </span>
              <h1 className="mt-6 text-balance text-4xl font-bold leading-tight text-[#111827] sm:text-5xl lg:text-6xl">
                Semua solusi digital yang pernah kami bangun
              </h1>
              <p className="mt-6 text-pretty text-lg leading-8 text-[#6B7280]">
                Kumpulan project website, dashboard, mobile application, dan
                sistem custom yang dibuat untuk kebutuhan bisnis, organisasi,
                dan operasional lapangan.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#FAF7FF] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <PortfolioGrid items={portfolioItems} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
