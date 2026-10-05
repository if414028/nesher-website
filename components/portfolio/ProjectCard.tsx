"use client";

import { useTranslations } from "@/components/i18n/LocaleProvider";
import { LocaleLink as Link } from "@/components/i18n/LocaleLink";
import { ArrowUpRight } from "lucide-react";
import type { PortfolioProject } from "@/data/portfolio";
import { ProductVisual } from "@/components/portfolio/ProductVisual";

export function ProjectCard({ project }: { project: PortfolioProject }) {
  const { t } = useTranslations();

  return (
    <article data-work-reveal className="work-project-card">
      <Link
        href={`/portfolio/${project.slug}`}
        className="group block h-full"
        aria-label={`${project.title}: ${t(project.category)}`}
      >
        <div className="work-card-visual">
          <ProductVisual image={project.thumbnail} title={t(project.client)} />
        </div>
        <div className="work-card-copy">
          <p className="work-card-category">{t(project.category)}</p>
          <div className="mt-3 flex items-start justify-between gap-4">
            <h3 className="text-2xl font-semibold tracking-tight">
              {t(project.title)}
            </h3>
            <ArrowUpRight
              aria-hidden="true"
              className="mt-1 size-5 shrink-0 text-primary motion-safe:transition-transform motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5"
            />
          </div>
          <p className="mt-3 text-sm text-[var(--nesher-body)]">
            {project.platforms.map(t).join(" / ")}
          </p>
        </div>
      </Link>
    </article>
  );
}
