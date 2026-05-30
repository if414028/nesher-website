"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { MotionDiv, Reveal } from "@/components/landing/Motion";
import { SectionHeader } from "@/components/landing/SectionHeader";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { portfolioItems } from "@/lib/landing-data";

function PortfolioMockup({
  image,
  index,
  previewType,
  title,
}: {
  image?: string;
  index: number;
  previewType?: string;
  title: string;
}) {
  if (image) {
    if (previewType === "mobile") {
      return (
        <div className="overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#FAF7FF] to-white p-5">
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
      <div className="overflow-hidden rounded-[1.5rem] border border-[#E9DFFF] bg-[#FAF7FF]">
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
    <div className="rounded-[1.5rem] bg-[#FAF7FF] p-4">
      <div className="mb-4 flex items-center gap-2">
        <span className="size-2.5 rounded-full bg-[#F87171]" />
        <span className="size-2.5 rounded-full bg-[#FBBF24]" />
        <span className="size-2.5 rounded-full bg-[#34D399]" />
      </div>
      <div className="grid h-44 gap-3">
        <div className="rounded-2xl bg-white p-4">
          <div className="h-4 w-28 rounded-full bg-[#6D28D9]" />
          <div className="mt-5 h-7 w-44 max-w-full rounded-full bg-[#111827]" />
          <div className="mt-3 h-3 w-2/3 rounded-full bg-[#E9DFFF]" />
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className={`rounded-2xl ${
                item === index + 1 ? "bg-[#6D28D9]" : "bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function PortfolioSection() {
  return (
    <section id="portfolio" className="bg-[#FAF7FF] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            title="Portofolio Solusi Digital yang Pernah Kami Bangun"
            subtitle="Beberapa contoh solusi digital yang dirancang untuk kebutuhan bisnis, organisasi, dan komunitas."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {portfolioItems.map((item, index) => (
            <MotionDiv
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              whileHover={{ y: -6 }}
            >
              <Card className="h-full rounded-[2rem] border border-white bg-white p-5 shadow-[0_18px_55px_rgba(59,7,100,0.08)] ring-0">
                <PortfolioMockup
                  image={item.image}
                  index={index % 3}
                  previewType={item.previewType}
                  title={item.title}
                />
                <div className="px-1 pb-2 pt-4">
                  <span className="inline-flex rounded-full bg-[#F6F1FF] px-3 py-1 text-xs font-semibold text-[#6D28D9]">
                    {item.category}
                  </span>
                  <h3 className="mt-4 text-2xl font-bold text-[#111827]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[#6B7280]">
                    {item.description}
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="mt-6 h-10 rounded-full border-[#E9DFFF] bg-white text-[#3B0764] hover:bg-[#6D28D9] hover:text-white"
                  >
                    <Link
                      href={item.href}
                      rel={
                        item.href.startsWith("https://")
                          ? "noreferrer"
                          : undefined
                      }
                      target={
                        item.href.startsWith("https://") ? "_blank" : undefined
                      }
                    >
                      Lihat Detail <ArrowUpRight className="ml-2 size-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
