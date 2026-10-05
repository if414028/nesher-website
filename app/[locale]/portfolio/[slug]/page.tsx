import type { Metadata } from "next";
import { getTranslator } from "@/lib/i18n/translations";
import { isLocale } from "@/lib/i18n/routing";
import { notFound } from "next/navigation";
import { PortfolioCaseStudyPage } from "@/components/portfolio/PortfolioCaseStudyPage";
import { getProject, portfolioProjects } from "@/data/portfolio";
import { createPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string; locale: string }> };

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  if (!isLocale(locale)) notFound();
  const project = getProject(slug);
  if (!project) notFound();
  const t = getTranslator(locale);
  return createPageMetadata({
    locale,
    title: `${project.title} — ${t("Case Study")} | Nesher Technology`,
    description: project.shortDescription,
    path: `/portfolio/${project.slug}`,
    image: project.heroImage.src,
    keywords: [project.title, project.category, ...project.technologies],
  });
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug, locale } = await params;
  if (!isLocale(locale)) notFound();
  const project = getProject(slug);
  if (!project) notFound();
  return <PortfolioCaseStudyPage project={project} />;
}
