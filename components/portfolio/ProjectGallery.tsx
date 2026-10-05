"use client";

import { useTranslations } from "@/components/i18n/LocaleProvider";
import { ArrowUpRight } from "lucide-react";
import type { GalleryImage } from "@/data/portfolio";
import { ProductVisual } from "@/components/portfolio/ProductVisual";
import { cn } from "@/lib/utils";

export function ProjectGallery({
  images,
  title,
}: {
  images: GalleryImage[];
  title: string;
}) {
  const { t } = useTranslations();

  if (!images.length) return null;
  return (
    <section
      className="work-gallery work-section"
      aria-labelledby="showcase-title"
    >
      <div className="work-container">
        <div className="work-section-header" data-work-reveal>
          <div>
            <p className="work-eyebrow">{t("Product showcase")}</p>
            <h2 id="showcase-title" className="work-heading mt-4">
              {t("A closer look.")}
            </h2>
          </div>
          <p className="work-copy max-w-md">
            {t("Real screens from")} {t(title)}
            {t(". Explore the details that bring the workflow together.")}
          </p>
        </div>
        <div className="work-gallery-grid grid-flow-dense">
          {images.map((image) => (
            <figure
              key={image.src}
              className={cn(
                "work-gallery-item",
                image.wide && "work-gallery-item--wide",
              )}
              data-work-reveal
            >
              <ProductVisual
                image={image}
                title={t(title)}
                large={image.wide}
              />
              <figcaption>
                <div>
                  <h3>{t(image.title)}</h3>
                  <p className="work-copy mt-2">{t(image.description)}</p>
                </div>
                <a
                  className="work-gallery-open"
                  href={image.src}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${t("View full-size screenshot")}: ${t(image.title)}`}
                >
                  <ArrowUpRight aria-hidden="true" className="size-5" />
                </a>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
