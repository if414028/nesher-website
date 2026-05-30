"use client";

import { Reveal } from "@/components/landing/Motion";
import { SectionHeader } from "@/components/landing/SectionHeader";
import { techStack } from "@/lib/landing-data";

export function TechnologySection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            title="Dibangun dengan Teknologi Modern"
            subtitle="Kami menggunakan teknologi yang cepat, scalable, dan siap dikembangkan untuk kebutuhan jangka panjang."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-12 flex max-w-5xl flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[#E9DFFF] bg-white px-5 py-3 text-sm font-semibold text-[#3B0764] shadow-sm transition hover:-translate-y-1 hover:bg-[#FAF7FF]"
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
