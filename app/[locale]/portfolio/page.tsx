import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n/routing";
import { createPageMetadata } from "@/lib/seo";
import { PortfolioPageContent } from "@/components/portfolio/PortfolioPageContent";
export default function Page() {
  return <PortfolioPageContent />;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return createPageMetadata({
    locale,
    title: "Our Work | Nesher Technology",
    description:
      "Explore digital products, web applications, mobile apps, and business platforms built by Nesher Technology.",
    path: "/portfolio",
  });
}
