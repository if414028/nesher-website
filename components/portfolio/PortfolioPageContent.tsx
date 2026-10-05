"use client";

import { useTranslations } from "@/components/i18n/LocaleProvider";
import { PortfolioHero } from "@/components/portfolio/PortfolioHero";
import { FeaturedCaseStudy } from "@/components/portfolio/FeaturedCaseStudy";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { PortfolioCapabilities } from "@/components/portfolio/PortfolioCapabilities";
import { PortfolioCTA } from "@/components/portfolio/PortfolioCTA";
import { PortfolioMotion } from "@/components/portfolio/PortfolioMotion";
import { featuredProjects, otherProjects } from "@/data/portfolio";

export function PortfolioPageContent() {
  const { t } = useTranslations();

  return (
    <main id="main-content" className="work" data-apple-reveal="off">
      <PortfolioMotion>
        <PortfolioHero />
        <section
          className="work-container work-intro"
          aria-labelledby="intro-title"
          data-work-reveal
        >
          <h2 id="intro-title" className="work-heading">
            {t("More than")}
            <br className="hidden sm:block" /> {t("just screens.")}
          </h2>
          <p className="work-story-copy">
            {t(
              "Every project starts with a problem worth solving. We work with businesses to understand their workflow, identify opportunities, and turn them into reliable digital products.",
            )}
          </p>
        </section>
        <section
          id="selected-work"
          className="work-container work-selected"
          aria-labelledby="selected-title"
        >
          <div className="work-section-header" data-work-reveal>
            <div>
              <p className="work-eyebrow">
                {t("Problems, solved through products")}
              </p>
              <h2 id="selected-title" className="work-heading mt-4">
                {t("Featured case studies")}
              </h2>
            </div>
            <p className="work-copy max-w-sm">
              {t(
                "A look at what we built, why it matters, and the work behind it.",
              )}
            </p>
          </div>
          <div className="work-featured-list">
            {featuredProjects.map((project, index) => (
              <FeaturedCaseStudy
                key={project.slug}
                project={project}
                reverse={index % 2 === 1}
              />
            ))}
          </div>
        </section>
        {otherProjects.length > 0 && (
          <section
            className="work-container work-section"
            aria-labelledby="other-projects-title"
          >
            <div className="work-section-header" data-work-reveal>
              <div>
                <p className="work-eyebrow">
                  {t("Different needs. Thoughtful solutions.")}
                </p>
                <h2 id="other-projects-title" className="work-heading mt-4">
                  {t("More things we’ve built")}
                </h2>
              </div>
              <p className="work-copy max-w-sm">
                {t(
                  "From field tools to brand websites, every product has a purpose.",
                )}
              </p>
            </div>
            <div className="work-other-grid grid-flow-dense">
              {otherProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </section>
        )}
        <PortfolioCapabilities />
        <PortfolioCTA />
      </PortfolioMotion>
    </main>
  );
}
