"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

import { MotionDiv, Reveal } from "@/components/landing/Motion";
import { SectionHeader } from "@/components/landing/SectionHeader";
import { Card } from "@/components/ui/card";
import { processSteps } from "@/lib/landing-data";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const processArtwork = [
  {
    src: "/images/process/discovery.png",
    alt: "Maskot Nesher menggali kebutuhan dan memahami target pengguna",
  },
  {
    src: "/images/process/planning.png",
    alt: "Maskot Nesher menyusun roadmap, timeline, dan prioritas proyek",
  },
  {
    src: "/images/process/ui-ux-design.png",
    alt: "Maskot Nesher merancang komponen UI dan pengalaman pengguna",
  },
  {
    src: "/images/process/development.png",
    alt: "Maskot Nesher membangun aplikasi dan menghubungkan modul sistem",
  },
  {
    src: "/images/process/testing-revision.png",
    alt: "Maskot Nesher melakukan pengujian, pengecekan, dan revisi",
  },
  {
    src: "/images/process/launch-maintenance.png",
    alt: "Maskot Nesher meluncurkan produk digital dan menjaga performanya",
  },
] as const;

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const artworks = gsap.utils.toArray<HTMLElement>(
        "[data-process-artwork]"
      );

      artworks.forEach((artwork) => {
        gsap.fromTo(
          artwork,
          { scale: 0.82, opacity: 0.25, y: 24 },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: artwork,
              start: "top 92%",
              end: "center 64%",
              scrub: 0.6,
            },
          }
        );
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative overflow-hidden bg-white py-32 sm:py-40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-[58rem] w-[76rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(110,53,183,0.1),transparent_68%)] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader title="Proses Kerja yang Jelas, Rapi, dan Transparan" />
        </Reveal>

        <div className="mt-16 grid grid-flow-dense gap-6 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <MotionDiv
              key={step.title}
              className="group h-full max-md:sticky"
              style={{ top: `${6 + index * 0.75}rem` }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.48, delay: index * 0.05 }}
            >
              <Card className="nesher-card nesher-hover-lift h-full overflow-hidden rounded-[2.25rem] p-0">
                <div className="relative isolate flex aspect-[4/3] items-end justify-center overflow-hidden bg-[linear-gradient(145deg,#fff_0%,#f4edff_55%,#e9ddfa_100%)]">
                  <div
                    aria-hidden="true"
                    className="absolute -right-14 -top-20 size-64 rounded-full border border-primary/10"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute -bottom-20 left-1/2 h-40 w-4/5 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl"
                  />
                  <span className="absolute left-5 top-5 z-20 inline-flex size-11 items-center justify-center rounded-2xl border border-white/80 bg-white/85 text-sm font-semibold text-primary shadow-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Image
                    data-process-artwork
                    src={processArtwork[index].src}
                    alt={processArtwork[index].alt}
                    width={900}
                    height={900}
                    sizes="(min-width: 1024px) 390px, (min-width: 768px) 46vw, 92vw"
                    className="relative z-10 h-[94%] w-auto object-contain object-bottom transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                <div className="p-7 sm:p-8">
                  <h3 className="text-2xl font-semibold tracking-[-0.025em] text-[var(--nesher-ink)]">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-[var(--nesher-body)]">
                    {step.description}
                  </p>
                </div>
              </Card>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
