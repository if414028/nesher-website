"use client";

import { Reveal } from "@/components/landing/Motion";
import { SectionHeader } from "@/components/landing/SectionHeader";
import { techStack } from "@/lib/landing-data";

export function TechnologySection() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            title="Dibangun dengan Teknologi Modern"
            subtitle="Kami menggunakan teknologi yang cepat, scalable, dan siap dikembangkan untuk kebutuhan jangka panjang."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-14 flex max-w-5xl flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-black/8 bg-[#F5F5F7] px-5 py-3 text-sm font-medium text-[#1D1D1F] transition hover:-translate-y-0.5 hover:border-[#6D28D9]/25 hover:text-[#6D28D9]"
              >
                {tech}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
