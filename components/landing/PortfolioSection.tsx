"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { MotionDiv, Reveal } from "@/components/landing/Motion";
import { SectionHeader } from "@/components/landing/SectionHeader";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { portfolioItems } from "@/lib/landing-data";

type PortfolioItem = (typeof portfolioItems)[number];

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
        <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] border border-[var(--nesher-purple-border)] bg-[linear-gradient(145deg,#fff_0%,var(--nesher-purple-50)_100%)] p-4 sm:p-5">
          <div
            aria-hidden="true"
            className="absolute -right-12 -top-16 size-56 rounded-full bg-[#8F1538]/10 blur-3xl"
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
          <span className="absolute bottom-[8%] left-[7%] rounded-full border border-white/70 bg-white/85 px-3 py-1.5 text-[10px] font-semibold text-[#8F1538] shadow-sm backdrop-blur-md sm:text-xs">
            Mobile + Admin Dashboard
          </span>
        </div>
      );
    }

    if (previewType === "mobile") {
      return (
        <div className="overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[var(--nesher-purple-50)] to-white p-5">
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
      <div className="overflow-hidden rounded-[1.5rem] border border-[var(--nesher-purple-border)] bg-[var(--nesher-purple-50)]">
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
    <div className="rounded-[1.5rem] bg-[var(--nesher-purple-50)] p-4">
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
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {items.map((item, index) => (
        <MotionDiv
          key={item.title}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: index * 0.06 }}
          whileHover={{ y: -6 }}
        >
          <Card className="nesher-liquid nesher-hover-lift h-full rounded-[2rem] p-4 sm:p-5">
            <PortfolioMockup
              image={item.image}
              index={(startIndex + index) % 3}
              previewType={item.previewType}
              secondaryImage={
                "secondaryImage" in item ? item.secondaryImage : undefined
              }
              title={item.title}
            />
            <div className="px-1 pb-2 pt-4">
              <span className="inline-flex rounded-full bg-[var(--nesher-purple-75)] px-3 py-1 text-xs font-semibold text-primary">
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
                className="mt-6 h-11 px-5 hover:bg-primary hover:text-white"
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
        </MotionDiv>
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
