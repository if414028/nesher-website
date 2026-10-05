"use client";

import { useTranslations } from "@/components/i18n/LocaleProvider";
import { LocaleLink as Link } from "@/components/i18n/LocaleLink";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { PortfolioProject } from "@/data/portfolio";
import { ProjectVisual } from "@/components/portfolio/ProductVisual";

export function CaseStudyHero({ project }: { project: PortfolioProject }) {
  const { t } = useTranslations();

  const metadata = [
    { label: "Client", values: [project.client] },
    { label: "Industry", values: [project.industry] },
    { label: "Platform", values: project.platforms },
    { label: "Services", values: project.services },
  ];
  return (
    <section
      className="work-case-hero work-container"
      aria-labelledby="case-title"
    >
      <Link href="/portfolio" className="work-back-link">
        <ArrowLeft aria-hidden="true" className="size-4" />{" "}
        {t("All Selected Work")}
      </Link>
      <div className="work-case-heading">
        <div>
          <p className="work-eyebrow">{t(project.category)}</p>
          <h1 id="case-title" className="work-case-title">
            {t(project.title)}
          </h1>
        </div>
        <p className="work-case-description">{t(project.heroDescription)}</p>
      </div>
      <dl className="work-case-meta">
        {metadata.map(({ label, values }) => (
          <div key={label}>
            <dt>{t(label)}</dt>
            <dd>
              {values.map((value) => (
                <span key={value}>{t(value)}</span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
      <ProjectVisual project={project} large preload />
      {project.liveUrl && (
        <div className="mt-5 flex justify-end">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="work-text-link"
          >
            {t("Visit Live Website")}{" "}
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        </div>
      )}
    </section>
  );
}
