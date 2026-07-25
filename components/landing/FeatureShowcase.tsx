"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

import { MotionDiv, Reveal } from "@/components/landing/Motion";
import { Button } from "@/components/ui/button";
import { showcaseFeatures, whatsappUrl } from "@/lib/landing-data";

function WebsiteMockup() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-[var(--nesher-purple-border)] bg-white p-2 shadow-[var(--nesher-raised-shadow)]">
      <Image
        src="/images/business-growth-handshake.jpg"
        alt="Ilustrasi konsultasi bisnis dengan grafik pertumbuhan"
        width={736}
        height={736}
        className="aspect-[4/3] w-full rounded-[1.5rem] object-cover"
        sizes="(min-width: 1024px) 560px, calc(100vw - 48px)"
      />
    </div>
  );
}

function DashboardMockup() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-[var(--nesher-purple-border)] bg-white p-2 shadow-[var(--nesher-raised-shadow)]">
      <Image
        src="/images/business-dashboard-interface.webp"
        alt="Ilustrasi dashboard digital dengan visualisasi data bisnis"
        width={736}
        height={913}
        className="aspect-[4/3] w-full rounded-[1.5rem] object-cover"
        sizes="(min-width: 1024px) 560px, calc(100vw - 48px)"
      />
    </div>
  );
}

function WorkflowMockup() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-[var(--nesher-purple-border)] bg-white p-2 shadow-[var(--nesher-raised-shadow)]">
      <Image
        src="/images/custom-workflow-automation.jpg"
        alt="Ilustrasi sistem workflow digital dengan checklist otomatis"
        width={735}
        height={490}
        className="aspect-[4/3] w-full rounded-[1.5rem] object-cover"
        sizes="(min-width: 1024px) 560px, calc(100vw - 48px)"
      />
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
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl space-y-28 px-4 sm:px-6 lg:space-y-36 lg:px-8">
        {showcaseFeatures.map((feature, index) => (
          <div
            key={feature.title}
            className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20"
          >
            <Reveal className={index % 2 === 1 ? "lg:order-2" : undefined}>
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
            </Reveal>

            <MotionDiv
              className={index % 2 === 1 ? "lg:order-1" : undefined}
              initial={{ opacity: 0, scale: 0.96, y: 24 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <div className="nesher-liquid rounded-[2.5rem] p-5 sm:p-7">
                <ShowcaseVisual type={feature.type} />
              </div>
            </MotionDiv>
          </div>
        ))}
      </div>
    </section>
  );
}
