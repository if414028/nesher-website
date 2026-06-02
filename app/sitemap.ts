import type { MetadataRoute } from "next";

import { portfolioItems } from "@/lib/landing-data";
import { absoluteUrl } from "@/lib/seo";

const lastModified = new Date("2026-06-02");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/portfolio"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  const portfolioRoutes: MetadataRoute.Sitemap = portfolioItems.map((item) => ({
    url: absoluteUrl(item.href),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.75,
    images: item.image ? [absoluteUrl(item.image)] : undefined,
  }));

  return [...staticRoutes, ...portfolioRoutes];
}
