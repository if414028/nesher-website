"use client";

import { ArrowRight } from "lucide-react";

import { MotionDiv, Reveal } from "@/components/landing/Motion";
import { Button } from "@/components/ui/button";
import { showcaseFeatures, whatsappUrl } from "@/lib/landing-data";

function WebsiteMockup() {
  return (
    <div className="rounded-[2rem] border border-[#E9DFFF] bg-white p-4 shadow-[0_18px_55px_rgba(59,7,100,0.08)]">
      <div className="mb-4 flex gap-2">
        <span className="size-3 rounded-full bg-[#F87171]" />
        <span className="size-3 rounded-full bg-[#FBBF24]" />
        <span className="size-3 rounded-full bg-[#34D399]" />
      </div>
      <div className="rounded-[1.5rem] bg-[#FAF7FF] p-6">
        <div className="h-4 w-28 rounded-full bg-[#6D28D9]" />
        <div className="mt-8 h-10 max-w-xs rounded-full bg-[#111827]" />
        <div className="mt-4 h-4 max-w-md rounded-full bg-[#D8C7FF]" />
        <div className="mt-2 h-4 max-w-sm rounded-full bg-[#E9DFFF]" />
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div key={item} className="h-28 rounded-3xl bg-white" />
          ))}
        </div>
      </div>
    </div>
  );
}

function DashboardMockup() {
  return (
    <div className="rounded-[2rem] border border-[#E9DFFF] bg-white p-5 shadow-[0_18px_55px_rgba(59,7,100,0.08)]">
      <div className="grid gap-3 sm:grid-cols-3">
        {[1, 2, 3].map((item) => (
          <div key={item} className="rounded-3xl bg-[#FAF7FF] p-4">
            <div className="h-3 w-16 rounded-full bg-[#D8C7FF]" />
            <div className="mt-4 h-7 w-20 rounded-full bg-[#111827]" />
          </div>
        ))}
      </div>
      <div className="mt-4 flex h-56 items-end gap-3 rounded-[1.5rem] bg-[#FAF7FF] p-5">
        {[48, 70, 56, 88, 64, 96, 76].map((height) => (
          <div
            key={height}
            className="flex-1 rounded-t-2xl bg-gradient-to-t from-[#6D28D9] to-[#C4B5FD]"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
    </div>
  );
}

function WorkflowMockup() {
  return (
    <div className="rounded-[2rem] border border-[#E9DFFF] bg-white p-5 shadow-[0_18px_55px_rgba(59,7,100,0.08)]">
      <div className="grid gap-4 md:grid-cols-3">
        {["Request", "Design", "Develop"].map((column, index) => (
          <div key={column} className="rounded-[1.5rem] bg-[#FAF7FF] p-4">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-semibold text-[#3B0764]">
                {column}
              </span>
              <span className="rounded-full bg-white px-2 py-1 text-xs text-[#6B7280]">
                {index + 2}
              </span>
            </div>
            {[1, 2, 3].map((item) => (
              <div key={item} className="mb-3 rounded-2xl bg-white p-3">
                <div className="h-3 rounded-full bg-[#D8C7FF]" />
                <div className="mt-2 h-3 w-2/3 rounded-full bg-[#E9DFFF]" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function ShowcaseVisual({ type }: { type: string }) {
  if (type === "dashboard") return <DashboardMockup />;
  if (type === "workflow") return <WorkflowMockup />;
  return <WebsiteMockup />;
}

export function FeatureShowcase() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl space-y-20 px-4 sm:px-6 lg:px-8">
        {showcaseFeatures.map((feature, index) => (
          <div
            key={feature.title}
            className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
          >
            <Reveal className={index % 2 === 1 ? "lg:order-2" : undefined}>
              <p className="text-sm font-semibold text-[#6D28D9]">
                {feature.eyebrow}
              </p>
              <h2 className="mt-4 text-balance text-3xl font-bold leading-tight text-[#111827] sm:text-4xl">
                {feature.title}
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#6B7280]">
                {feature.text}
              </p>
              <Button
                asChild
                className="mt-8 h-11 rounded-full bg-[#6D28D9] px-6 text-white hover:bg-[#5B21B6] hover:text-white"
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
            </Reveal>

            <MotionDiv
              className={index % 2 === 1 ? "lg:order-1" : undefined}
              initial={{ opacity: 0, scale: 0.96, y: 24 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <div className="rounded-[2.25rem] bg-gradient-to-br from-[#FAF7FF] to-white p-4">
                <ShowcaseVisual type={feature.type} />
              </div>
            </MotionDiv>
          </div>
        ))}
      </div>
    </section>
  );
}
