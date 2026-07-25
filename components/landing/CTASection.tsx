"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/landing/Motion";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/landing-data";

export function CTASection() {
  return (
    <section id="contact" className="bg-white px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <Reveal>
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.75rem] bg-[#1D1D1F] px-6 py-20 text-center shadow-[0_30px_90px_rgba(29,29,31,0.18)] sm:px-10 sm:py-24 lg:px-20">
          <div className="pointer-events-none absolute inset-x-0 -top-48 mx-auto h-96 max-w-3xl rounded-full bg-primary/50 blur-[100px]" />
          <h2 className="relative mx-auto max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-white sm:text-6xl">
            Ide yang bagus layak diwujudkan dengan sangat baik.
          </h2>
          <p className="relative mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
            Diskusikan kebutuhan website, web application, dashboard, atau
            aplikasi mobile Anda bersama Nesher Tech.
          </p>
          <div className="relative mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              className="h-12 bg-white px-7 text-base text-[var(--nesher-purple-900)] shadow-none hover:bg-[var(--nesher-purple-700)] hover:text-white"
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
              className="h-12 border-white/30 bg-transparent px-7 text-base text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/portfolio">Lihat Portofolio</Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
