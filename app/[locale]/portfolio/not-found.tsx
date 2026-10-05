"use client";

import { useTranslations } from "@/components/i18n/LocaleProvider";
import { LocaleLink as Link } from "@/components/i18n/LocaleLink";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PortfolioNotFound() {
  const { t } = useTranslations();

  return (
    <main id="main-content" className="work work-not-found">
      <div className="work-container">
        <p className="work-eyebrow">{t("Project not found")}</p>
        <h1 className="work-heading mt-5">{t("Let’s find the right work.")}</h1>
        <p className="work-copy mx-auto mt-6 max-w-lg">
          {t(
            "This case study isn’t available. Explore our selected work to see the products we’ve built.",
          )}
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link href="/portfolio">
            <ArrowLeft className="size-4" aria-hidden="true" />{" "}
            {t("Back to Selected Work")}
          </Link>
        </Button>
      </div>
    </main>
  );
}
