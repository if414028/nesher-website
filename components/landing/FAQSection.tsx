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
    <section className="bg-[#FAF7FF] py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader title="Pertanyaan yang Sering Ditanyakan" />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 rounded-[2rem] border border-white bg-white p-4 shadow-[0_18px_55px_rgba(59,7,100,0.08)]">
            <Accordion type="single" collapsible className="gap-2">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={item.question}
                  value={`item-${index}`}
                  className="rounded-3xl border border-[#E9DFFF] px-5 py-2"
                >
                  <AccordionTrigger className="text-base font-semibold text-[#111827] hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-7 text-[#6B7280]">
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
