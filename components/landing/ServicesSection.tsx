"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

import { Reveal } from "@/components/landing/Motion";
import { SectionHeader } from "@/components/landing/SectionHeader";
import { services } from "@/lib/landing-data";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const serviceArtwork = [
  ["/images/services/eagle-company-profile.png", "Maskot elang Nesher mempresentasikan rancangan company profile website", 1199, 1312],
  ["/images/services/eagle-web-application.png", "Maskot elang Nesher menghubungkan modul dalam sebuah web application", 1199, 1312],
  ["/images/services/eagle-dashboard.png", "Maskot elang Nesher menjelaskan dashboard dan visualisasi laporan", 1199, 1312],
  ["/images/services/eagle-mobile-app.png", "Maskot elang Nesher menunjukkan rancangan mobile application", 1199, 1312],
  ["/images/services/eagle-ui-ux.png", "Maskot elang Nesher menyusun komponen antarmuka dan pengalaman pengguna", 1145, 1374],
  ["/images/services/eagle-maintenance.png", "Maskot elang Nesher menjaga performa, keamanan, dan maintenance sistem", 1199, 1312],
] as const;

const desktopSpans = [
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-6",
];

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const cards = gsap.utils.toArray<HTMLElement>("[data-service-card]");

      cards.forEach((card, index) => {
        const artwork = card.querySelector("[data-service-artwork]");
        gsap.set(card, { zIndex: index + 1, transformOrigin: "center top" });
        gsap.fromTo(
          card,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.55,
            ease: "power1.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );

        if (artwork) {
          gsap.fromTo(
            artwork,
            { scale: 0.82, y: 30 },
            {
              scale: 1,
              y: 0,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top 92%",
                end: "center 52%",
                scrub: 0.8,
              },
            }
          );
        }
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="services"
      className="nesher-section relative overflow-hidden py-32 sm:py-40 lg:py-48"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-[48rem] w-[70rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(110,53,183,0.12),transparent_68%)] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            title="Satu Partner untuk Semua Kebutuhan Digital Bisnis Anda"
            subtitle="Dari website company profile hingga sistem custom, Nesher membantu membangun solusi digital yang sesuai dengan kebutuhan nyata bisnis Anda."
          />
        </Reveal>

        <div className="mt-20 grid grid-flow-dense grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-6 lg:gap-6">
          {services.map((service, index) => {
            const [src, alt, width, height] = serviceArtwork[index];
            const isWide = index === services.length - 1;
            const isCompact = index >= 2 && index <= 4;

            return (
              <article
                key={service.title}
                data-service-card
                className={cn(
                  "group relative min-h-[31rem] overflow-hidden rounded-[2.5rem] border border-black/[0.07] bg-white shadow-[var(--nesher-soft-shadow)] max-md:sticky max-md:top-24 md:col-span-1",
                  desktopSpans[index],
                  isWide && "lg:min-h-[26rem]"
                )}
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(170,125,235,0.2),transparent_42%)] opacity-80"
                />
                <div
                  className={cn(
                    "relative z-10 flex h-full flex-col p-7 sm:p-9",
                    isWide && "lg:grid lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-10 lg:p-12"
                  )}
                >
                  <div className={cn(isWide && "lg:max-w-xl")}>
                    <h3
                      className={cn(
                        "max-w-md text-3xl font-semibold leading-[1.02] tracking-[-0.04em] text-[var(--nesher-ink)]",
                        isCompact ? "lg:text-[1.7rem]" : "sm:text-4xl",
                        isWide && "lg:text-5xl"
                      )}
                    >
                      {service.title}
                    </h3>
                    <p className="mt-5 max-w-xl text-base leading-7 text-[var(--nesher-body)] sm:text-lg sm:leading-8">
                      {service.description}
                    </p>
                  </div>

                  <div
                    className={cn(
                      "relative mt-auto flex min-h-64 items-end justify-center pt-8",
                      isCompact && "lg:min-h-60",
                      isWide && "lg:mt-0 lg:min-h-[22rem] lg:pt-0"
                    )}
                  >
                    <div
                      aria-hidden="true"
                      className="absolute bottom-4 left-1/2 h-20 w-4/5 -translate-x-1/2 rounded-[100%] bg-primary/15 blur-2xl"
                    />
                    <Image
                      data-service-artwork
                      src={src}
                      alt={alt}
                      width={width}
                      height={height}
                      sizes={isWide ? "(min-width: 1024px) 560px, 88vw" : "(min-width: 1024px) 380px, 88vw"}
                      className={cn(
                        "relative z-10 max-h-[20rem] w-auto object-contain transition-transform duration-700 ease-out group-hover:scale-105",
                        isCompact && "lg:max-h-[17rem]",
                        isWide && "lg:max-h-[24rem]"
                      )}
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
