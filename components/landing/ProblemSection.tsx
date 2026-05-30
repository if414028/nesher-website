"use client";

import { AlertCircle } from "lucide-react";

import { MotionDiv, Reveal } from "@/components/landing/Motion";
import { SectionHeader } from "@/components/landing/SectionHeader";
import { Card } from "@/components/ui/card";
import { problems } from "@/lib/landing-data";

export function ProblemSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            title="Bisnis Anda Sudah Berkembang, Tapi Sistem Digitalnya Belum Mengikuti?"
            subtitle="Banyak bisnis sebenarnya sudah bagus, tapi website dan sistem digitalnya belum mencerminkan kualitas bisnis tersebut."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, index) => (
            <MotionDiv
              key={problem}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
            >
              <Card className="relative h-full min-h-40 overflow-hidden rounded-[1.75rem] border border-[#E9DFFF] bg-white p-6 shadow-[0_18px_55px_rgba(59,7,100,0.07)] ring-0">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(rgba(109,40,217,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(109,40,217,0.08)_1px,transparent_1px)] bg-[size:34px_34px] opacity-55"
                />
                <div
                  aria-hidden="true"
                  className="absolute -left-16 -top-20 size-48 rounded-full bg-[#E9DFFF] blur-2xl"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-br from-[#F6F1FF]/90 via-white/90 to-white"
                />

                <div className="relative mb-9 flex size-14 items-center justify-center rounded-full bg-white text-[#6D28D9] shadow-[0_12px_35px_rgba(109,40,217,0.16)] ring-1 ring-[#E9DFFF]">
                  <AlertCircle className="size-6" />
                </div>
                <h3 className="relative text-lg font-semibold leading-snug text-[#111827]">
                  {problem}
                </h3>
              </Card>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
