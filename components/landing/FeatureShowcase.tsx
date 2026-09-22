"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

import { Reveal } from "@/components/landing/Motion";
import { Button } from "@/components/ui/button";
import { showcaseFeatures, whatsappUrl } from "@/lib/landing-data";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const showcaseArtwork = {
  website: {
    src: "/images/services/eagle-company-profile.png",
    alt: "Maskot elang Nesher mempresentasikan website profesional untuk pertumbuhan brand",
  },
  dashboard: {
    src: "/images/services/eagle-dashboard.png",
    alt: "Maskot elang Nesher menjelaskan dashboard dan laporan bisnis",
  },
  workflow: {
    src: "/images/services/eagle-web-application.png",
    alt: "Maskot elang Nesher merangkai web application sesuai workflow bisnis",
  },
} as const;

function ShowcaseVisual({ type }: { type: keyof typeof showcaseArtwork }) {
  const artwork = showcaseArtwork[type];

  return (
    <div className="group relative isolate flex aspect-[4/3] items-end justify-center overflow-hidden rounded-[2.25rem] border border-black/[0.06] bg-[linear-gradient(145deg,#ffffff_0%,#f3ecff_52%,#e8dcfa_100%)] shadow-[var(--nesher-raised-shadow)]">
      <div
        aria-hidden="true"
        className="absolute -right-20 -top-24 size-80 rounded-full border border-primary/10"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-20 size-96 rounded-full bg-primary/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-16 bottom-7 h-16 rounded-[100%] bg-[var(--nesher-purple-900)]/15 blur-2xl"
      />
      <Image
        data-showcase-artwork
        src={artwork.src}
        alt={artwork.alt}
        width={1199}
        height={1312}
        sizes="(min-width: 1024px) 560px, calc(100vw - 48px)"
        className="relative z-10 h-[92%] w-auto object-contain object-bottom transition-transform duration-700 ease-out group-hover:scale-105"
      />
    </div>
  );
}

export function FeatureShowcase() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const rows = gsap.utils.toArray<HTMLElement>("[data-showcase-row]");

      rows.forEach((row) => {
        const visual = row.querySelector("[data-showcase-visual]");
        const artwork = row.querySelector("[data-showcase-artwork]");

        gsap.fromTo(
          visual,
          { scale: 0.86, opacity: 0.35, y: 60 },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: row,
              start: "top 90%",
              end: "center 55%",
              scrub: 0.8,
            },
          }
        );

        gsap.fromTo(
          artwork,
          { scale: 0.82, y: 38 },
          {
            scale: 1,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: row,
              start: "top 92%",
              end: "center 50%",
              scrub: 0.8,
            },
          }
        );
      });

    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="overflow-hidden bg-white py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl space-y-20 px-4 sm:space-y-24 sm:px-6 lg:space-y-28 lg:px-8">
        {showcaseFeatures.map((feature, index) => (
          <div
            key={feature.title}
            data-showcase-row
            className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
          >
            <Reveal
              className={index % 2 === 1 ? "lg:order-2" : undefined}
            >
              <div data-showcase-copy>
                <p className="text-sm font-semibold text-primary">
                  {feature.eyebrow}
                </p>
                <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-[var(--nesher-ink)] sm:text-5xl lg:text-6xl">
                  {feature.title}
                </h2>
                <p className="mt-6 text-lg leading-8 tracking-[-0.01em] text-[var(--nesher-body)] sm:text-xl">
                  {feature.text}
                </p>
                <Button
                  asChild
                  className="mt-8 h-11 rounded-full bg-primary px-6 text-white hover:bg-[var(--nesher-purple-700)] hover:text-white"
                >
                  <a
                    data-gtag-conversion
                    href={whatsappUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Diskusikan Kebutuhan <ArrowRight className="ml-2 size-4" />
                  </a>
                </Button>
              </div>
            </Reveal>

            <div
              data-showcase-visual
              className={cn(index % 2 === 1 && "lg:order-1")}
            >
              <div className="rounded-[2.75rem] border border-black/[0.05] bg-[var(--nesher-purple-50)] p-4 shadow-[var(--nesher-soft-shadow)] sm:p-6">
                <ShowcaseVisual
                  type={feature.type as keyof typeof showcaseArtwork}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
