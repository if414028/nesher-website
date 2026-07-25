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
                className="nesher-hover-lift rounded-full border border-[var(--nesher-purple-border)] bg-white px-5 py-3 text-sm font-medium text-[var(--nesher-ink)] shadow-[0_10px_30px_rgba(59,7,100,0.04)] transition hover:border-primary/25 hover:text-primary"
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
