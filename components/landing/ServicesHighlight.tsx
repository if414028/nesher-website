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
        <div className="nesher-liquid mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-3 rounded-[2rem] p-4">
          {highlightServices.map((service, index) => {
            const Icon = icons[index];

            return (
              <div
                key={service}
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[var(--nesher-purple-border)] bg-white/80 px-4 py-3 text-sm font-semibold text-[var(--nesher-purple-900)]"
              >
                <Icon className="size-4 text-primary" />
                {service}
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
