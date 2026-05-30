"use client";

import { MotionDiv, Reveal } from "@/components/landing/Motion";
import { SectionHeader } from "@/components/landing/SectionHeader";
import { Card } from "@/components/ui/card";
import { processSteps } from "@/lib/landing-data";

export function ProcessSection() {
  return (
    <section id="process" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader title="Proses Kerja yang Jelas, Rapi, dan Transparan" />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <MotionDiv
              key={step.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.48, delay: index * 0.05 }}
            >
              <Card className="h-full rounded-[2rem] border border-[#E9DFFF] bg-white p-7 shadow-[0_14px_45px_rgba(59,7,100,0.06)] ring-0">
                <div className="mb-8 text-5xl font-bold text-[#E9DFFF]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-bold text-[#111827]">
                  {step.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[#6B7280]">
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
