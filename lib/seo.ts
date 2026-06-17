import type { Metadata } from "next";

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
  ogImage: "/brand/nesher-logo.png",
};

type PageMetadataInput = {
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
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    alternates: {
      canonical: path,
      languages: {
        "id-ID": path,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "id_ID",
      type: "website",
      images: [
        {
          url: image,
          width: 1850,
          height: 700,
          alt: `${siteConfig.name} preview`,
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
