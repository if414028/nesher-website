import type { Metadata } from "next";
import { getTranslator } from "@/lib/i18n/translations";
import { localePath, type Locale } from "@/lib/i18n/routing";

const siteUrl = "https://www.neshertechnology.id";

export const siteConfig = {
  name: "Nesher Teknologi Nusantara",
  shortName: "Nesher Tech",
  url: siteUrl,
  email: "nesherteknologinusantara@gmail.com",
  whatsapp: "https://wa.me/6285121069310",
  description:
    "Nesher Teknologi Nusantara adalah software house Indonesia untuk jasa pembuatan website, web application, dashboard bisnis, mobile app, UI/UX design, dan sistem custom.",
  keywords: [
    "Nesher Teknologi Nusantara",
    "Nesher Tech",
    "software house Indonesia",
    "jasa pembuatan website",
    "jasa pembuatan aplikasi",
    "jasa pembuatan dashboard",
    "web application",
    "mobile app development",
    "UI UX design",
    "sistem custom",
    "dashboard bisnis",
  ],
  ogImage: "/images/social/nesher-social-preview-v4.jpg",
};

type PageMetadataInput = {
  locale?: Locale;
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
};

export function absoluteUrl(path = "/") {
  if (path.startsWith("https://")) return path;
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function createPageMetadata({
  description,
  image = siteConfig.ogImage,
  keywords = [],
  path = "/",
  title,
  locale = "id",
}: PageMetadataInput): Metadata {
  const t = getTranslator(locale);
  title = t(title);
  description = t(description);
  const localizedPath = localePath(path, locale);
  const url = absoluteUrl(localizedPath);

  return {
    title,
    description,
    keywords: [...siteConfig.keywords, ...keywords].map(t),
    alternates: {
      canonical: localizedPath,
      languages: {
        "id-ID": localePath(path, "id"),
        "en-US": localePath(path, "en"),
        "x-default": localePath(path, "id"),
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: locale === "id" ? "id_ID" : "en_US",
      alternateLocale: locale === "id" ? "en_US" : "id_ID",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — ${t("jasa website, aplikasi, dan dashboard custom")}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export function jsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
