"use client";

import {
  Gauge,
  LayoutTemplate,
  MonitorCog,
  Palette,
  Smartphone,
  Wrench,
} from "lucide-react";

import { MotionDiv, Reveal } from "@/components/landing/Motion";
import { SectionHeader } from "@/components/landing/SectionHeader";
import { Card } from "@/components/ui/card";
import { services } from "@/lib/landing-data";

const icons = [LayoutTemplate, MonitorCog, Gauge, Smartphone, Palette, Wrench];

export function ServicesSection() {
  return (
    <section id="services" className="bg-[#FAF7FF] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            title="Satu Partner untuk Semua Kebutuhan Digital Bisnis Anda"
            subtitle="Dari website company profile hingga sistem custom, Nesher membantu membangun solusi digital yang sesuai dengan kebutuhan nyata bisnis Anda."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[index];

            return (
              <MotionDiv
                key={service.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                whileHover={{ y: -8 }}
              >
                <Card className="h-full rounded-[2rem] border border-white bg-white p-7 shadow-[0_18px_55px_rgba(59,7,100,0.08)] ring-0">
                  <div className="mb-7 flex size-14 items-center justify-center rounded-3xl bg-[#F6F1FF] text-[#6D28D9]">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#111827]">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-[#6B7280]">
                    {service.description}
                  </p>
                </Card>
              </MotionDiv>
            );
          })}
        </div>
      </div>
    </section>
  );
}
