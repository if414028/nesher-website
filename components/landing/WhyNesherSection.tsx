"use client";

import { CheckCircle2, MessageCircle } from "lucide-react";

import { Reveal } from "@/components/landing/Motion";
import { SectionHeader } from "@/components/landing/SectionHeader";
import { Card } from "@/components/ui/card";
import { whyNesher } from "@/lib/landing-data";

export function WhyNesherSection() {
  return (
    <section className="bg-[#F5F5F7] py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <Reveal>
          <SectionHeader
            align="left"
            title="Kenapa Memilih Nesher Tech?"
            subtitle="Kami memadukan desain yang rapi, komunikasi yang jelas, dan implementasi teknologi yang bisa tumbuh bersama bisnis Anda."
          />
          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {whyNesher.map((item) => (
              <div key={item} className="flex gap-3">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-[#6D28D9]" />
                <p className="font-medium leading-7 text-[#111827]">{item}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Card className="rounded-[2.5rem] border-0 bg-white p-6 shadow-none ring-0 sm:p-8">
            <div className="rounded-[2rem] bg-[#F5F5F7] p-5 sm:p-7">
              <div className="flex items-center gap-4">
                <div className="flex size-14 items-center justify-center rounded-3xl bg-[#6D28D9] text-white">
                  <MessageCircle className="size-6" />
                </div>
                <div>
                  <p className="text-lg font-bold text-[#111827]">
                    Project clarity
                  </p>
                  <p className="text-sm text-[#6B7280]">
                    Scope, progress, dan feedback dibuat transparan.
                  </p>
                </div>
              </div>
              <div className="mt-7 grid gap-4">
                {["Discovery selesai", "UI design approved", "Development sprint"].map(
                  (item, index) => (
                    <div key={item} className="rounded-3xl bg-white p-4">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-[#111827]">
                          {item}
                        </span>
                        <span className="rounded-full bg-[#F6F1FF] px-3 py-1 text-xs font-semibold text-[#6D28D9]">
                          {index === 2 ? "In progress" : "Done"}
                        </span>
                      </div>
                      <div className="mt-4 h-2 rounded-full bg-[#F6F1FF]">
                        <div
                          className="h-full rounded-full bg-[#6D28D9]"
                          style={{ width: `${index === 2 ? 68 : 100}%` }}
                        />
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
