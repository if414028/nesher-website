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
    <section id="services" className="bg-[#F5F5F7] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            title="Satu Partner untuk Semua Kebutuhan Digital Bisnis Anda"
            subtitle="Dari website company profile hingga sistem custom, Nesher membantu membangun solusi digital yang sesuai dengan kebutuhan nyata bisnis Anda."
          />
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[index];

            return (
              <MotionDiv
                key={service.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                whileHover={{ y: -4 }}
              >
                <Card className="h-full rounded-[2rem] border-0 bg-white p-8 shadow-none ring-0 sm:p-9">
                  <div className="mb-9 flex size-14 items-center justify-center rounded-2xl bg-[#F3EEFF] text-[#6D28D9]">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="text-2xl font-semibold tracking-[-0.025em] text-[#1D1D1F]">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-[#6E6E73]">
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
