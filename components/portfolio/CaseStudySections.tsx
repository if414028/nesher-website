"use client";

import { useTranslations } from "@/components/i18n/LocaleProvider";
import {
  ShoppingBag,
  Network,
  ChartNoAxesCombined,
  Trophy,
  FileChartColumn,
  KeyRound,
  Download,
  Users,
  BookOpen,
  HeartHandshake,
  Bell,
  Globe,
  Smartphone,
  Braces,
  Check,
} from "lucide-react";
import type { FeatureIcon, PortfolioProject } from "@/data/portfolio";

const featureIcons = {
  orders: ShoppingBag,
  hierarchy: Network,
  chart: ChartNoAxesCombined,
  contest: Trophy,
  report: FileChartColumn,
  access: KeyRound,
  export: Download,
  members: Users,
  content: BookOpen,
  prayer: HeartHandshake,
  notification: Bell,
  website: Globe,
  device: Smartphone,
  code: Braces,
} satisfies Record<FeatureIcon, typeof ShoppingBag>;

export function CaseStudyChallenge({ project }: { project: PortfolioProject }) {
  const { t } = useTranslations();

  return (
    <section
      className="work-container work-story-section"
      aria-labelledby="challenge-title"
      data-work-reveal
    >
      <div>
        <p className="work-eyebrow">{t("Understanding the need")}</p>
        <h2 id="challenge-title" className="work-heading mt-4">
          {t("The Challenge")}
        </h2>
      </div>
      <div className="work-story-copy">
        {project.challenge.map((paragraph) => (
          <p key={paragraph}>{t(paragraph)}</p>
        ))}
      </div>
    </section>
  );
}

export function CaseStudySolution({ project }: { project: PortfolioProject }) {
  const { t } = useTranslations();

  return (
    <section
      className="work-solution work-section"
      aria-labelledby="solution-title"
    >
      <div className="work-container" data-work-reveal>
        <div className="work-story-section !py-0">
          <div>
            <p className="work-eyebrow">{t("Our approach")}</p>
            <h2 id="solution-title" className="work-heading mt-4">
              {t("The Solution")}
            </h2>
          </div>
          <p className="work-story-copy">{t(project.solution.description)}</p>
        </div>
        <div className="work-principles">
          {project.solution.principles.map((principle) => (
            <div key={principle.title}>
              <h3>{t(principle.title)}</h3>
              <p className="work-copy mt-3">{t(principle.description)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CaseStudyFeatures({ project }: { project: PortfolioProject }) {
  const { t } = useTranslations();

  return (
    <section
      className="work-container work-section"
      aria-labelledby="features-title"
    >
      <div className="work-section-header" data-work-reveal>
        <div>
          <p className="work-eyebrow">{t("Inside the product")}</p>
          <h2 id="features-title" className="work-heading mt-4">
            {t("Key Features")}
          </h2>
        </div>
        <p className="work-copy max-w-md">
          {t(
            "Purposeful tools built around the people who use the product every day.",
          )}
        </p>
      </div>
      <ul className="work-feature-list">
        {project.features.map((feature) => {
          const Icon = featureIcons[feature.icon];
          return (
            <li key={feature.title} data-work-reveal>
              <Icon
                className="size-6 text-primary"
                aria-hidden="true"
                strokeWidth={1.5}
              />
              <div>
                <h3>{t(feature.title)}</h3>
                <p className="work-copy mt-2">{t(feature.description)}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export function CaseStudyImpact({ project }: { project: PortfolioProject }) {
  const { t } = useTranslations();

  return (
    <section
      className="work-impact work-section"
      aria-labelledby="impact-title"
    >
      <div className="work-container" data-work-reveal>
        <div className="work-section-header">
          <div>
            <p className="work-eyebrow">{t("What the product enables")}</p>
            <h2 id="impact-title" className="work-heading mt-4">
              {t("Impact")}
            </h2>
          </div>
          <p className="work-copy max-w-md">
            {t(
              "Practical outcomes supported by the delivered product and its workflows.",
            )}
          </p>
        </div>
        <ul className="work-impact-list">
          {project.impact.map((item) => (
            <li key={item.title}>
              <Check
                aria-hidden="true"
                className="mt-1 size-5 shrink-0 text-primary"
              />
              <div>
                {item.value && (
                  <p className="work-impact-value">{t(item.value)}</p>
                )}
                <h3>{t(item.title)}</h3>
                <p className="work-copy mt-3">{t(item.description)}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
