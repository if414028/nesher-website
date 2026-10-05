"use client";

import { useTranslations } from "@/components/i18n/LocaleProvider";
export function TechnologyStack({
  technologies,
  compact = false,
}: {
  technologies: string[];
  compact?: boolean;
}) {
  const { t } = useTranslations();

  const list = (
    <ul className="work-tech-list" aria-label={t("Technology stack")}>
      {technologies.map((technology) => (
        <li key={technology}>{t(technology)}</li>
      ))}
    </ul>
  );

  if (compact) return list;

  return (
    <section
      data-work-reveal
      className="work-container work-technology"
      aria-labelledby="technology-title"
    >
      <div>
        <p className="work-eyebrow">{t("Technology")}</p>
        <h2 id="technology-title" className="work-heading mt-4">
          {t("Built with the right tools.")}
        </h2>
      </div>
      <div>
        <p className="work-copy mb-6">
          {t(
            "The technology behind the product, chosen around its workflow and platform.",
          )}
        </p>
        {list}
      </div>
    </section>
  );
}
