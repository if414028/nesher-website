"use client";

import { Reveal } from "@/components/landing/Motion";
import { SectionHeader } from "@/components/landing/SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/lib/landing-data";

export function FAQSection() {
  return (
    <section className="bg-[var(--nesher-surface-muted)] py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader title="Pertanyaan yang Sering Ditanyakan" />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="nesher-liquid mt-14 rounded-[2.25rem] p-4">
            <Accordion type="single" collapsible className="gap-2">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={item.question}
                  value={`item-${index}`}
                  className="rounded-3xl border-0 border-b border-primary/10 px-5 py-3 last:border-b-0"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold tracking-[-0.015em] text-[var(--nesher-ink)] hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-7 text-[var(--nesher-body)]">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
