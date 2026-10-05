"use client";

import { useTranslations } from "@/components/i18n/LocaleProvider";
import { LocaleLink as Link } from "@/components/i18n/LocaleLink";
import { ArrowUpRight } from "lucide-react";
import type { PortfolioProject } from "@/data/portfolio";
import { ProjectVisual } from "@/components/portfolio/ProductVisual";
import { TechnologyStack } from "@/components/portfolio/TechnologyStack";
import { cn } from "@/lib/utils";

export function FeaturedCaseStudy({
  project,
  reverse = false,
}: {
  project: PortfolioProject;
  reverse?: boolean;
}) {
  const { t } = useTranslations();

  return (
    <article
      data-work-reveal
      className={cn("work-featured group", reverse && "work-featured--reverse")}
    >
      <div className="work-featured-copy">
        <p className="work-eyebrow">{t(project.category)}</p>
        <h3 className="work-project-title">{t(project.title)}</h3>
        <p className="work-copy mt-5">{t(project.shortDescription)}</p>
        <dl className="work-project-summary">
          <div>
            <dt>{t("The problem")}</dt>
            <dd>{t(project.problemStatement)}</dd>
          </div>
          <div>
            <dt>{t("What we built")}</dt>
            <dd>{t(project.solutionStatement)}</dd>
          </div>
        </dl>
        <TechnologyStack technologies={project.technologies} compact />
        <Link
          className="work-text-link mt-7"
          href={`/portfolio/${project.slug}`}
          aria-label={`${t("View Case Study")}: ${project.title}`}
        >
          {t("View Case Study")}{" "}
          <ArrowUpRight aria-hidden="true" className="size-5" />
        </Link>
      </div>
      <Link
        href={`/portfolio/${project.slug}`}
        className="work-featured-visual"
        aria-label={`${t("Explore case study")}: ${project.title}`}
        tabIndex={-1}
      >
        <ProjectVisual project={project} />
        <div className="work-visual-caption">
          <span>{project.platforms.map(t).join(" / ")}</span>
          <ArrowUpRight aria-hidden="true" className="size-5" />
        </div>
      </Link>
    </article>
  );
}
