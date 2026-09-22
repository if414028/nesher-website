"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { type CSSProperties, useRef } from "react";

import { Reveal } from "@/components/landing/Motion";
import { SectionHeader } from "@/components/landing/SectionHeader";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { portfolioItems } from "@/lib/landing-data";

type PortfolioItem = (typeof portfolioItems)[number];

gsap.registerPlugin(useGSAP, ScrollTrigger);

type PortfolioCardStyle = CSSProperties & {
  "--portfolio-tone": string;
};

function PortfolioMockup({
  image,
  index,
  previewType,
  secondaryImage,
  title,
}: {
  image?: string;
  index: number;
  previewType?: string;
  secondaryImage?: string;
  title: string;
}) {
  if (image) {
    if (previewType === "hybrid" && secondaryImage) {
      return (
        <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] border border-[color-mix(in_srgb,var(--portfolio-tone)_22%,white)] bg-[linear-gradient(145deg,#fff_0%,color-mix(in_srgb,var(--portfolio-tone)_8%,white)_100%)] p-4 sm:p-5">
          <div
            aria-hidden="true"
            className="absolute -right-12 -top-16 size-56 rounded-full bg-[var(--portfolio-tone)] opacity-15 blur-3xl"
          />
          <div className="absolute inset-x-[5%] top-[13%] drop-shadow-[0_18px_28px_rgba(29,29,31,0.16)]">
            <Image
              src={image}
              alt={`${title} admin dashboard preview`}
              width={2400}
              height={1452}
              className="aspect-[4064/2458] w-full object-contain object-top"
            />
          </div>
          <div className="absolute bottom-[5%] right-[8%] w-[22%] min-w-[72px] rotate-[2deg] drop-shadow-[0_22px_28px_rgba(29,29,31,0.28)]">
            <Image
              src={secondaryImage}
              alt={`${title} mobile application preview`}
              width={1362}
              height={2880}
              className="aspect-[9/19] w-full object-contain object-top"
            />
          </div>
          <span className="absolute bottom-[8%] left-[7%] rounded-full border border-white/70 bg-white/90 px-3 py-1.5 text-xs font-semibold text-[var(--portfolio-tone)] shadow-sm">
            Mobile + Admin Dashboard
          </span>
        </div>
      );
    }

    if (previewType === "mobile") {
      return (
        <div className="overflow-hidden rounded-[1.5rem] border border-[color-mix(in_srgb,var(--portfolio-tone)_18%,white)] bg-[linear-gradient(145deg,color-mix(in_srgb,var(--portfolio-tone)_10%,white),white)] p-5">
          <Image
            src={image}
            alt={`${title} preview`}
            width={1362}
            height={2880}
            className="mx-auto aspect-[9/16] w-full max-w-[220px] object-contain object-top"
          />
        </div>
      );
    }

    return (
      <div className="overflow-hidden rounded-[1.5rem] border border-[color-mix(in_srgb,var(--portfolio-tone)_20%,white)] bg-[color-mix(in_srgb,var(--portfolio-tone)_8%,white)]">
        <Image
          src={image}
          alt={`${title} preview`}
          width={2048}
          height={1280}
          className="aspect-[16/10] h-full w-full object-cover object-top"
        />
      </div>
    );
  }

  return (
    <div className="rounded-[1.5rem] bg-[color-mix(in_srgb,var(--portfolio-tone)_8%,white)] p-4">
      <div className="mb-4 flex items-center gap-2">
        <span className="size-2.5 rounded-full bg-[#F87171]" />
        <span className="size-2.5 rounded-full bg-[#FBBF24]" />
        <span className="size-2.5 rounded-full bg-[#34D399]" />
      </div>
      <div className="grid h-44 gap-3">
        <div className="rounded-2xl bg-white p-4">
          <div className="h-4 w-28 rounded-full bg-primary" />
          <div className="mt-5 h-7 w-44 max-w-full rounded-full bg-[var(--nesher-carbon)]" />
          <div className="mt-3 h-3 w-2/3 rounded-full bg-[var(--nesher-purple-border)]" />
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className={`rounded-2xl ${
                item === index + 1 ? "bg-primary" : "bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function PortfolioGrid({
  items,
  startIndex = 0,
}: {
  items: PortfolioItem[];
  startIndex?: number;
}) {
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const cards = gsap.utils.toArray<HTMLElement>("[data-portfolio-card]");

      cards.forEach((card, index) => {
        const media = card.querySelector("[data-portfolio-media]");

        gsap.fromTo(
          card,
          { opacity: 0, y: 44 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay: (index % 2) * 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );

        if (media) {
          gsap.fromTo(
            media,
            { scale: 0.94 },
            {
              scale: 1,
              duration: 0.9,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      });
    },
    { scope: gridRef, dependencies: [items.length] }
  );

  return (
    <div ref={gridRef} className="grid grid-flow-dense gap-6 md:grid-cols-2">
      {items.map((item, index) => (
        <div
          key={item.title}
          data-portfolio-card
          style={{ "--portfolio-tone": item.toneColor } as PortfolioCardStyle}
          className="group/card h-full transition-transform duration-500 ease-out hover:-translate-y-1.5"
        >
          <Card className="relative isolate h-full overflow-hidden rounded-[2.25rem] border border-[color-mix(in_srgb,var(--portfolio-tone)_16%,white)] bg-white/95 p-4 shadow-[0_18px_60px_rgba(24,18,33,0.08)] transition-[box-shadow,border-color] duration-500 group-hover/card:border-[color-mix(in_srgb,var(--portfolio-tone)_34%,white)] group-hover/card:shadow-[0_28px_80px_rgba(24,18,33,0.13)] sm:p-5">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-72 bg-[linear-gradient(145deg,color-mix(in_srgb,var(--portfolio-tone)_13%,white),transparent_72%)]"
            />
            <div
              aria-hidden="true"
              className="absolute -right-24 -top-28 size-72 rounded-full border-[44px] border-[color-mix(in_srgb,var(--portfolio-tone)_11%,transparent)] transition-transform duration-700 ease-out group-hover/card:scale-110"
            />
            <div
              aria-hidden="true"
              className="absolute -left-16 top-56 h-52 w-32 -rotate-12 rounded-[100%] bg-[var(--portfolio-tone)] opacity-[0.08] blur-2xl"
            />

            <div
              data-portfolio-media
              className="relative z-10 overflow-hidden rounded-[1.5rem] transition-transform duration-700 ease-out group-hover/card:scale-[1.015]"
            >
              <PortfolioMockup
                image={item.image}
                index={(startIndex + index) % 3}
                previewType={item.previewType}
                secondaryImage={
                  "secondaryImage" in item ? item.secondaryImage : undefined
                }
                title={item.title}
              />
            </div>
            <div className="relative z-10 px-1 pb-2 pt-5">
              <span className="inline-flex rounded-full bg-[color-mix(in_srgb,var(--portfolio-tone)_10%,white)] px-3 py-1 text-xs font-semibold text-[var(--portfolio-tone)]">
                {item.category}
              </span>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.025em] text-[var(--nesher-ink)]">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-[var(--nesher-body)]">
                {item.description}
              </p>
              <Button
                asChild
                variant="outline"
                className="mt-6 h-11 border-[color-mix(in_srgb,var(--portfolio-tone)_22%,white)] px-5 text-[var(--portfolio-tone)] hover:border-[var(--portfolio-tone)] hover:bg-[var(--portfolio-tone)] hover:text-white"
              >
                <Link
                  href={item.href}
                  rel={
                    item.href.startsWith("https://") ? "noreferrer" : undefined
                  }
                  target={item.href.startsWith("https://") ? "_blank" : undefined}
                >
                  Lihat Detail <ArrowUpRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
}

export function PortfolioSection() {
  const featuredPortfolios = portfolioItems.slice(0, 4);

  return (
    <section id="portfolio" className="nesher-section py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            title="Portofolio Solusi Digital yang Pernah Kami Bangun"
            subtitle="Beberapa contoh solusi digital yang dirancang untuk kebutuhan bisnis, organisasi, dan komunitas."
          />
        </Reveal>

        <div className="mt-16">
          <PortfolioGrid items={featuredPortfolios} />
        </div>

        <div className="mt-10 flex justify-center">
          <Button
            asChild
            className="h-12 px-7 text-base"
          >
            <Link href="/portfolio">
              Lihat Semua Portofolio <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
