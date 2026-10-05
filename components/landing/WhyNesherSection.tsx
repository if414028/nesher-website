"use client";

import { useTranslations } from "@/components/i18n/LocaleProvider";

import { CheckCircle2, MessageCircle } from "lucide-react";

import { Reveal } from "@/components/landing/Motion";
import { SectionHeader } from "@/components/landing/SectionHeader";
import { Card } from "@/components/ui/card";
import { whyNesher } from "@/lib/landing-data";

export function WhyNesherSection() {
  const { t } = useTranslations();

  return (
    <section className="bg-[var(--nesher-surface-muted)] py-24 sm:py-32">
      <div className="mx-auto grid grid-cols-1 max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <Reveal className="min-w-0">
          <SectionHeader
            align="left"
            title={t("Kenapa Memilih Nesher Tech?")}
            subtitle={t(
              "Kami memadukan desain yang rapi, komunikasi yang jelas, dan implementasi teknologi yang bisa tumbuh bersama bisnis Anda.",
            )}
          />
          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {whyNesher.map((item) => (
              <div key={item} className="flex gap-3">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
                <p className="font-medium leading-7 text-[var(--nesher-carbon)]">
                  {t(item)}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="min-w-0">
          <Card className="nesher-liquid rounded-[2.5rem] p-6 sm:p-8">
            <div className="rounded-[2rem] border border-primary/10 bg-[var(--nesher-surface-muted)] p-5 sm:p-7">
              <div className="flex items-center gap-4">
                <div className="flex size-14 items-center justify-center rounded-3xl bg-primary text-white">
                  <MessageCircle className="size-6" />
                </div>
                <div className="min-w-0">
                  <p className="text-lg font-bold text-[var(--nesher-carbon)]">
                    {t("Project clarity")}
                  </p>
                  <p className="text-sm text-[var(--nesher-body)]">
                    {t("Scope, progress, dan feedback dibuat transparan.")}
                  </p>
                </div>
              </div>
              <div className="mt-7 grid gap-4">
                {[
                  "Discovery selesai",
                  "UI design approved",
                  "Development sprint",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="nesher-hover-lift rounded-3xl border border-[var(--nesher-purple-border)] bg-white p-4"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-semibold text-[var(--nesher-carbon)]">
                        {t(item)}
                      </span>
                      <span className="rounded-full bg-[var(--nesher-purple-75)] px-3 py-1 text-xs font-semibold text-primary">
                        {t(index === 2 ? "In progress" : "Done")}
                      </span>
                    </div>
                    <div className="mt-4 h-2 rounded-full bg-[var(--nesher-purple-75)]">
                      <div
                        className="h-full rounded-full bg-primary"
                        style={{ width: `${index === 2 ? 68 : 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
