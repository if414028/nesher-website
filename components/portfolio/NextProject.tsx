"use client";

import { useTranslations } from "@/components/i18n/LocaleProvider";
import { LocaleLink as Link } from "@/components/i18n/LocaleLink";
import { ArrowRight } from "lucide-react";
import type { PortfolioProject } from "@/data/portfolio";
import { ProjectVisual } from "@/components/portfolio/ProductVisual";

export function NextProject({ project }: { project: PortfolioProject }) {
  const { t } = useTranslations();

  return (
    <section
      className="work-container work-next"
      aria-labelledby="next-project-title"
    >
      <p className="work-eyebrow mb-6">{t("Next Case Study")}</p>
      <Link
        href={`/portfolio/${project.slug}`}
        className="work-next-link group"
        data-work-reveal
      >
        <div className="work-next-copy">
          <p className="work-card-category">{t(project.category)}</p>
          <h2 id="next-project-title" className="work-heading mt-4">
            {t(project.title)}
          </h2>
          <span className="work-text-link mt-8">
            {t("Explore the Project")}{" "}
            <ArrowRight aria-hidden="true" className="size-5" />
          </span>
        </div>
        <ProjectVisual project={project} />
      </Link>
    </section>
  );
}
