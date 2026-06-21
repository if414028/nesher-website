"use client";

import { AlertCircle } from "lucide-react";

import { MotionDiv, Reveal } from "@/components/landing/Motion";
import { SectionHeader } from "@/components/landing/SectionHeader";
import { Card } from "@/components/ui/card";
import { problems } from "@/lib/landing-data";
import { cn } from "@/lib/utils";

function ProblemIllustration({ index }: { index: number }) {
  const basePanel =
    "absolute left-7 right-7 top-7 h-36 overflow-hidden rounded-2xl border border-[#E9DFFF] bg-white/80 shadow-[0_18px_45px_rgba(59,7,100,0.08)]";

  return (
    <>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_16%_24%,rgba(109,40,217,0.15),transparent_24%),radial-gradient(circle_at_86%_18%,rgba(109,40,217,0.1),transparent_20%),linear-gradient(135deg,#FBFAFF_0%,#FFFFFF_55%,#F7F2FF_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -right-10 -top-16 size-44 rounded-full border border-[#E9DFFF] bg-white/45"
      />

      {index === 0 && (
        <>
          <div aria-hidden="true" className={basePanel}>
            <div className="flex h-7 items-center gap-1.5 border-b border-[#E9DFFF] bg-[#6D28D9]/90 px-3">
              <span className="size-2 rounded-full bg-[#FB7185]" />
              <span className="size-2 rounded-full bg-[#FBBF24]" />
              <span className="size-2 rounded-full bg-[#86EFAC]" />
              <span className="ml-2 h-2 flex-1 rounded-full bg-white/45" />
            </div>
            <div className="grid grid-cols-[0.9fr_1fr] gap-3 p-3">
              <div className="relative h-16 rounded-xl border border-[#E9DFFF] bg-[#F1E9FF]">
                <div className="absolute left-4 top-4 size-6 rounded-full bg-[#C4B5FD]" />
                <div className="absolute bottom-3 left-3 h-5 w-12 rounded-md bg-[#DDD6FE]" />
                <div className="absolute bottom-3 right-3 h-8 w-10 rounded-md bg-[#C4B5FD]/70" />
                <div className="absolute left-1/2 top-0 h-full w-px rotate-12 bg-[#6D28D9]/50" />
              </div>
              <div className="space-y-2">
                <div className="h-3 w-3/5 rounded-full bg-[#6D28D9]/70" />
                <div className="h-2 rounded-full bg-[#D8CCF8]" />
                <div className="h-2 w-4/5 rounded-full bg-[#D8CCF8]" />
                <div className="h-3 w-2/5 rounded-full bg-[#6D28D9]/60" />
              </div>
            </div>
            <div className="mx-3 -mt-1 h-5 rounded-lg border border-dashed border-[#A78BFA]" />
          </div>
          <div
            aria-hidden="true"
            className="absolute left-9 top-32 flex size-8 items-center justify-center rounded-full bg-[#FBBF24] text-white shadow-[0_12px_25px_rgba(251,191,36,0.3)]"
          >
            <AlertCircle className="size-4" />
          </div>
        </>
      )}

      {index === 1 && (
        <>
          <div
            aria-hidden="true"
            className="absolute left-8 top-8 h-32 w-40 rounded-2xl border border-[#E9DFFF] bg-white/80 p-4 shadow-[0_18px_45px_rgba(59,7,100,0.08)]"
          >
            <div className="h-3 w-16 rounded-full bg-[#6D28D9]/70" />
            <div className="mt-4 grid grid-cols-2 gap-2">
              <span className="h-14 rounded-xl bg-[#EEE7FF]" />
              <span className="h-14 rounded-xl bg-[#EEE7FF]" />
            </div>
            <div className="mt-2 h-2 rounded-full bg-[#D8CCF8]" />
          </div>
          <div
            aria-hidden="true"
            className="absolute right-9 top-6 h-36 w-20 rounded-[1.5rem] border border-[#C4B5FD] bg-white/90 p-2.5 shadow-[0_18px_45px_rgba(59,7,100,0.1)]"
          >
            <div className="mx-auto h-1.5 w-6 rounded-full bg-[#D8CCF8]" />
            <div className="mt-4 h-12 rounded-xl bg-[#EEE7FF]" />
            <div className="mt-3 h-2 rounded-full bg-[#6D28D9]/70" />
            <div className="mt-2 h-2 rounded-full bg-[#D8CCF8]" />
            <div className="mt-2 h-2 w-10 rounded-full bg-[#D8CCF8]" />
          </div>
          <div
            aria-hidden="true"
            className="absolute right-24 top-32 h-8 w-24 -rotate-6 rounded-full border border-dashed border-[#A78BFA]"
          />
        </>
      )}

      {index === 2 && (
        <>
          <div aria-hidden="true" className={cn(basePanel, "p-4")}>
            <div className="grid grid-cols-[0.75fr_1fr] gap-3">
              <div className="space-y-2">
                <div className="h-5 rounded-lg bg-[#6D28D9]/70" />
                <div className="h-5 rounded-lg bg-[#DDD6FE]" />
                <div className="h-5 rounded-lg bg-[#DDD6FE]" />
              </div>
              <div className="rounded-xl border border-dashed border-[#A78BFA] p-3">
                <div className="h-2 rounded-full bg-[#D8CCF8]" />
                <div className="mt-2 h-2 rounded-full bg-[#D8CCF8]" />
                <div className="mt-2 h-2 w-2/3 rounded-full bg-[#D8CCF8]" />
                <div className="mt-3 h-6 rounded-lg bg-[#EEE7FF]" />
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute left-10 top-22 flex size-9 rotate-[-8deg] items-center justify-center rounded-xl bg-white text-[#6D28D9] shadow-[0_12px_25px_rgba(59,7,100,0.12)] ring-1 ring-[#E9DFFF]"
          >
            <span className="h-4 w-3 rounded-sm border-2 border-current" />
          </div>
        </>
      )}

      {index === 3 && (
        <div aria-hidden="true" className={cn(basePanel, "p-4")}>
          <div className="mb-3 flex items-end gap-2">
            <span className="h-10 flex-1 rounded-t-lg bg-[#DDD6FE]" />
            <span className="h-16 flex-1 rounded-t-lg bg-[#6D28D9]/70" />
            <span className="h-8 flex-1 rounded-t-lg bg-[#C4B5FD]" />
            <span className="h-12 flex-1 rounded-t-lg bg-[#DDD6FE]" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            <span className="h-6 rounded-lg bg-white ring-1 ring-[#E9DFFF]" />
            <span className="h-6 rounded-lg bg-white ring-1 ring-[#E9DFFF]" />
            <span className="h-6 rounded-lg bg-white ring-1 ring-[#E9DFFF]" />
          </div>
          <div className="absolute right-5 top-5 size-12 rounded-full border-4 border-[#E9DFFF] border-t-[#6D28D9]" />
        </div>
      )}

      {index === 4 && (
        <>
          <div aria-hidden="true" className={cn(basePanel, "p-4")}>
            <div className="mx-auto mb-3 h-8 rounded-full border border-[#E9DFFF] bg-white px-4 py-2">
              <div className="h-2 w-3/4 rounded-full bg-[#D8CCF8]" />
            </div>
            <div className="grid grid-cols-[1fr_0.8fr] gap-3">
              <div className="space-y-2">
                <div className="h-3 rounded-full bg-[#6D28D9]/65" />
                <div className="h-2 rounded-full bg-[#D8CCF8]" />
                <div className="h-2 w-4/5 rounded-full bg-[#D8CCF8]" />
              </div>
              <div className="rounded-xl bg-[#EEE7FF] p-2">
                <div className="h-2 rounded-full bg-[#C4B5FD]" />
                <div className="mt-2 h-2 w-2/3 rounded-full bg-[#C4B5FD]" />
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute right-10 top-18 size-12 rounded-full border-[5px] border-[#6D28D9]/70"
          />
          <div
            aria-hidden="true"
            className="absolute right-8 top-28 h-7 w-2 rotate-[-35deg] rounded-full bg-[#6D28D9]/70"
          />
        </>
      )}

      {index === 5 && (
        <>
          <div aria-hidden="true" className={cn(basePanel, "p-4")}>
            <div className="relative h-full">
              <div className="absolute left-2 top-5 h-px w-[72%] bg-[#C4B5FD]" />
              <div className="absolute left-12 top-5 h-12 w-px bg-[#C4B5FD]" />
              <div className="absolute left-36 top-5 h-12 w-px bg-[#C4B5FD]" />
              <span className="absolute left-0 top-0 h-10 w-20 rounded-xl bg-[#6D28D9]/70" />
              <span className="absolute left-24 top-0 h-10 w-20 rounded-xl bg-[#DDD6FE]" />
              <span className="absolute left-0 top-16 h-10 w-24 rounded-xl border border-dashed border-[#A78BFA] bg-white" />
              <span className="absolute left-30 top-16 h-10 w-24 rounded-xl bg-[#EEE7FF]" />
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute right-11 top-17 size-11 rotate-12 rounded-xl border border-[#E9DFFF] bg-white shadow-[0_12px_25px_rgba(59,7,100,0.12)]"
          >
            <div className="absolute left-1/2 top-2 h-7 w-px -translate-x-1/2 rotate-45 bg-[#6D28D9]/70" />
            <div className="absolute left-1/2 top-2 h-7 w-px -translate-x-1/2 -rotate-45 bg-[#6D28D9]/70" />
          </div>
        </>
      )}

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/90 to-transparent"
      />
    </>
  );
}

export function ProblemSection() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            title="Bisnis Anda Sudah Berkembang, Tapi Sistem Digitalnya Belum Mengikuti?"
            subtitle="Banyak bisnis sebenarnya sudah bagus, tapi website dan sistem digitalnya belum mencerminkan kualitas bisnis tersebut."
          />
        </Reveal>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, index) => (
            <MotionDiv
              key={problem}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              whileHover={{ y: -3 }}
            >
              <Card className="relative h-full min-h-72 justify-end overflow-hidden rounded-[2rem] border-0 bg-[#F5F5F7] p-6 shadow-none ring-0">
                <ProblemIllustration index={index} />
                <h3 className="relative rounded-2xl bg-white/75 p-4 text-lg font-semibold leading-snug tracking-[-0.015em] text-[#1D1D1F] shadow-sm backdrop-blur-xl">
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
