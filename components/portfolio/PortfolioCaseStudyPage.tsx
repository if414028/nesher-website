"use client";

import { useTranslations } from "@/components/i18n/LocaleProvider";
import type { PortfolioProject } from "@/data/portfolio";
import { getNextProject } from "@/data/portfolio";
import { CaseStudyHero } from "@/components/portfolio/CaseStudyHero";
import {
  CaseStudyChallenge,
  CaseStudySolution,
  CaseStudyFeatures,
  CaseStudyImpact,
} from "@/components/portfolio/CaseStudySections";
import { ProjectGallery } from "@/components/portfolio/ProjectGallery";
import { TechnologyStack } from "@/components/portfolio/TechnologyStack";
import { NextProject } from "@/components/portfolio/NextProject";
import { PortfolioCTA } from "@/components/portfolio/PortfolioCTA";
import { PortfolioMotion } from "@/components/portfolio/PortfolioMotion";

export function PortfolioCaseStudyPage({
  project,
}: {
  project: PortfolioProject;
}) {
  const { t } = useTranslations();

  return (
    <main id="main-content" className="work" data-apple-reveal="off">
      <PortfolioMotion>
        <CaseStudyHero project={project} />
        <CaseStudyChallenge project={project} />
        <CaseStudySolution project={project} />
        <CaseStudyFeatures project={project} />
        <ProjectGallery images={project.gallery} title={t(project.title)} />
        <TechnologyStack technologies={project.technologies} />
        <CaseStudyImpact project={project} />
        <NextProject project={getNextProject(project.slug)} />
        <PortfolioCTA />
      </PortfolioMotion>
    </main>
  );
}
