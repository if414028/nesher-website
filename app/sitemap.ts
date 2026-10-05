import type { MetadataRoute } from "next";
import { portfolioProjects } from "@/data/portfolio";
import { absoluteUrl } from "@/lib/seo";
import { locales, localePath } from "@/lib/i18n/routing";
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/portfolio",
    "/contact",
    "/privacy-policy",
    ...portfolioProjects.map((project) => `/portfolio/${project.slug}`),
  ];
  return routes.flatMap((path) =>
    locales.map((locale) => ({
      url: absoluteUrl(localePath(path, locale)),
      lastModified: new Date("2026-10-05"),
      changeFrequency:
        path === "/" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "/" ? 1 : 0.75,
      alternates: {
        languages: {
          "id-ID": absoluteUrl(localePath(path, "id")),
          "en-US": absoluteUrl(localePath(path, "en")),
        },
      },
      ...(portfolioProjects.find(
        (project) => path === `/portfolio/${project.slug}`,
      )
        ? {
            images: [
              absoluteUrl(
                portfolioProjects.find(
                  (project) => path === `/portfolio/${project.slug}`,
                )!.heroImage.src,
              ),
            ],
          }
        : {}),
    })),
  );
}
