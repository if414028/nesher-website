"use client";

import { useTranslations } from "@/components/i18n/LocaleProvider";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeaderProps) {
  const { t } = useTranslations();

  return (
    <div
      className={cn(
        "mx-auto max-w-4xl",
        align === "center" ? "text-center" : "mx-0 text-left",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-4 text-sm font-semibold tracking-tight text-primary">
          {t(eyebrow)}
        </p>
      ) : null}
      <h2 className="text-balance text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-[var(--nesher-ink)] sm:text-5xl lg:text-6xl">
        {t(title)}
      </h2>
      {subtitle ? (
        <p className="mt-6 text-pretty text-lg leading-8 tracking-[-0.01em] text-[var(--nesher-body)] sm:text-xl">
          {t(subtitle)}
        </p>
      ) : null}
    </div>
  );
}
