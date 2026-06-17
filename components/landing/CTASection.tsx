"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/landing/Motion";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/landing-data";

export function CTASection() {
  return (
    <section id="contact" className="bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <Reveal>
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#6D28D9] via-[#5B21B6] to-[#3B0764] px-6 py-16 text-center shadow-[0_26px_80px_rgba(59,7,100,0.2)] sm:px-10 lg:px-20">
          <h2 className="mx-auto max-w-4xl text-balance text-3xl font-bold leading-tight text-white sm:text-5xl">
            Siap Membuat Bisnis Anda Tampil Lebih Profesional Secara Digital?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/80">
            Diskusikan kebutuhan website, web application, dashboard, atau
            aplikasi mobile Anda bersama Nesher Tech.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              className="h-12 rounded-full bg-white px-7 text-base text-[#3B0764] hover:bg-[#5B21B6] hover:text-white"
            >
              <a
                data-gtag-conversion
                href={whatsappUrl}
                rel="noreferrer"
                target="_blank"
              >
                Mulai Konsultasi <ArrowRight className="ml-2 size-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-full border-white/30 bg-transparent px-7 text-base text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/portfolio">Lihat Portofolio</Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
