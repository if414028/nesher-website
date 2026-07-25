"use client";

import { MotionDiv, Reveal } from "@/components/landing/Motion";
import { SectionHeader } from "@/components/landing/SectionHeader";
import { Card } from "@/components/ui/card";
import { processSteps } from "@/lib/landing-data";

export function ProcessSection() {
  return (
    <section id="process" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader title="Proses Kerja yang Jelas, Rapi, dan Transparan" />
        </Reveal>

        <div className="mt-16 grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <MotionDiv
              key={step.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.48, delay: index * 0.05 }}
            >
              <Card className="nesher-card nesher-hover-lift h-full rounded-[2rem] p-7 sm:p-8">
                <div className="mb-10 inline-flex size-12 items-center justify-center rounded-2xl bg-[var(--nesher-purple-75)] text-sm font-semibold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-2xl font-semibold tracking-[-0.025em] text-[var(--nesher-ink)]">
                  {step.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[var(--nesher-body)]">
                  {step.description}
                </p>
              </Card>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
