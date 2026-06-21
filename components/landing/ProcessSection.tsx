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
              <Card className="h-full rounded-none border-0 border-t border-black/10 bg-transparent px-0 py-7 shadow-none ring-0">
                <div className="mb-10 text-sm font-semibold text-[#6D28D9]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-2xl font-semibold tracking-[-0.025em] text-[#1D1D1F]">
                  {step.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[#6E6E73]">
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
