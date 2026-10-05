"use client";

import { useTranslations } from "@/components/i18n/LocaleProvider";
import { LocaleLink as Link } from "@/components/i18n/LocaleLink";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PortfolioHero() {
  const { t } = useTranslations();

  return (
    <section className="work-hero" aria-labelledby="portfolio-title">
      <div aria-hidden="true" className="work-hero-grid" />
      <div className="work-container relative">
        <p className="work-eyebrow">{t("Selected work")}</p>
        <h1 id="portfolio-title" className="work-hero-title mx-auto max-w-6xl">
          <span className="block">{t("We build digital products")}</span>{" "}
          <span className="block">
            {t("that")}{" "}
            <span className="text-primary">{t("solve real problems.")}</span>
          </span>
        </h1>
        <p className="work-hero-description">
          {t(
            "From internal business platforms to customer-facing applications, we design and build digital products around real business needs.",
          )}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg">
            <Link href="#selected-work">
              {t("Explore Our Work")}{" "}
              <ArrowDown aria-hidden="true" className="size-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">
              {t("Start a Project")}{" "}
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
