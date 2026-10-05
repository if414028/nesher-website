"use client";

import { useTranslations } from "@/components/i18n/LocaleProvider";
import { LocaleLink as Link } from "@/components/i18n/LocaleLink";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/landing-data";

export function PortfolioCTA() {
  const { t } = useTranslations();

  return (
    <section
      className="work-container work-cta-section"
      aria-labelledby="project-cta-title"
    >
      <div data-work-reveal className="work-cta">
        <div>
          <p className="work-eyebrow">{t("Let’s build something useful")}</p>
          <h2 id="project-cta-title" className="work-heading mt-5">
            {t("Have a problem")}
            <br className="hidden sm:block" /> {t("worth solving?")}
          </h2>
          <p className="work-copy mt-6 max-w-xl">
            {t(
              "Tell us what you’re trying to build. We’ll help turn the idea into a digital product that works.",
            )}
          </p>
        </div>
        <div className="flex flex-wrap gap-3 lg:flex-col lg:items-start">
          <Button asChild size="lg">
            <Link href="/contact">
              {t("Start a Project")}{" "}
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              data-gtag-conversion
            >
              {t("Talk to Us")}{" "}
              <MessageCircle aria-hidden="true" className="size-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
