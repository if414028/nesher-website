"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/landing/Motion";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/landing-data";

export function CTASection() {
  return (
    <section id="contact" className="bg-white px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <Reveal>
        <div className="group relative mx-auto max-w-7xl overflow-hidden rounded-[2.75rem] bg-[#1D1D1F] px-6 pb-0 pt-16 shadow-[0_30px_90px_rgba(29,29,31,0.18)] sm:px-10 sm:pt-20 lg:px-16 lg:py-8">
          <div className="pointer-events-none absolute inset-x-0 -top-48 mx-auto h-96 max-w-3xl rounded-full bg-primary/50 blur-[100px]" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-40 right-0 size-[34rem] rounded-full bg-primary/25 blur-[110px]"
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-4">
            <div className="text-center lg:py-16 lg:text-left">
              <h2 className="max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-white sm:text-5xl lg:text-[3.4rem]">
                Ide yang bagus layak diwujudkan dengan sangat baik.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
                Diskusikan kebutuhan website, web application, dashboard, atau
                aplikasi mobile Anda bersama Nesher Tech.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
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

            <div className="relative mx-auto flex w-full max-w-[31rem] items-end justify-center self-end lg:min-h-[32rem] lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute bottom-5 left-1/2 h-20 w-3/4 -translate-x-1/2 rounded-[100%] bg-primary/35 blur-3xl"
              />
              <Image
                src="/images/cta/eagle-idea-consultation.png"
                alt="Maskot elang Nesher membawa ide dan solusi digital untuk didiskusikan"
                width={1199}
                height={1312}
                sizes="(min-width: 1024px) 520px, 88vw"
                className="relative z-10 h-auto max-h-[34rem] w-auto object-contain object-bottom drop-shadow-[0_30px_40px_rgba(0,0,0,0.28)] transition-transform duration-700 ease-out group-hover:scale-[1.025]"
              />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
