"use client";

import { useTranslations } from "@/components/i18n/LocaleProvider";
import {
  AppWindow,
  Smartphone,
  Workflow,
  Wrench,
  Globe,
  Braces,
  ChartNoAxesCombined,
  PanelsTopLeft,
} from "lucide-react";

const capabilities = [
  { title: "Web Applications", icon: AppWindow },
  { title: "Mobile Applications", icon: Smartphone },
  { title: "Business Management Systems", icon: Workflow },
  { title: "Internal Tools", icon: Wrench },
  { title: "Company Websites", icon: Globe },
  { title: "API & Backend Systems", icon: Braces },
  { title: "Dashboard & Analytics", icon: ChartNoAxesCombined },
  { title: "UI/UX Implementation", icon: PanelsTopLeft },
];

export function PortfolioCapabilities() {
  const { t } = useTranslations();

  return (
    <section
      className="work-capabilities work-section"
      aria-labelledby="capabilities-title"
    >
      <div className="work-container" data-work-reveal>
        <div className="work-section-header">
          <div>
            <p className="work-eyebrow">{t("From idea to operation")}</p>
            <h2 id="capabilities-title" className="work-heading mt-4">
              {t("What we help")}
              <br className="hidden sm:block" /> {t("businesses build")}
            </h2>
          </div>
          <p className="work-copy max-w-md">
            {t(
              "The right product starts with understanding how your business works. We bring the interface, logic, and data together.",
            )}
          </p>
        </div>
        <ul className="work-capability-list">
          {capabilities.map(({ title, icon: Icon }) => (
            <li key={title}>
              <Icon
                className="size-5 shrink-0 text-primary"
                aria-hidden="true"
                strokeWidth={1.5}
              />
              <span>{t(title)}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
