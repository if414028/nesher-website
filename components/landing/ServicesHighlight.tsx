"use client";

import {
  AppWindow,
  ChartNoAxesCombined,
  Code2,
  LayoutDashboard,
  Palette,
  Smartphone,
} from "lucide-react";

import { Reveal } from "@/components/landing/Motion";
import { highlightServices } from "@/lib/landing-data";

const icons = [
  LayoutDashboard,
  Code2,
  ChartNoAxesCombined,
  Smartphone,
  Palette,
  AppWindow,
];

export function ServicesHighlight() {
  return (
    <section className="-mt-8 bg-white px-4 sm:px-6 lg:px-8">
      <Reveal>
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-3 rounded-[2rem] border border-[#E9DFFF] bg-white p-4 shadow-[0_18px_60px_rgba(59,7,100,0.08)]">
          {highlightServices.map((service, index) => {
            const Icon = icons[index];

            return (
              <div
                key={service}
                className="inline-flex items-center gap-2 rounded-full bg-[#FAF7FF] px-4 py-3 text-sm font-semibold text-[#3B0764]"
              >
                <Icon className="size-4 text-[#6D28D9]" />
                {service}
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
