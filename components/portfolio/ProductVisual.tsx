"use client";

import { useTranslations } from "@/components/i18n/LocaleProvider";
import type { PortfolioProject, ProjectImage } from "@/data/portfolio";
import { ProductImage } from "@/components/portfolio/ProductImage";
import { cn } from "@/lib/utils";

export function ProductVisual({
  image,
  secondaryImage,
  title,
  large = false,
  preload = false,
}: {
  image: ProjectImage;
  secondaryImage?: ProjectImage;
  title: string;
  large?: boolean;
  preload?: boolean;
}) {
  const { t } = useTranslations();

  const mobile = image.variant === "mobile";

  return (
    <div
      className={cn(
        "work-preview",
        large && "work-preview--large",
        mobile && "work-preview--mobile",
        secondaryImage && "work-preview--hybrid",
      )}
    >
      <div data-work-media className="work-preview-device">
        {!mobile && (
          <div className="work-browser-bar" aria-hidden="true">
            <span />
            <span />
            <span />
            <span className="work-browser-title">{t(title)}</span>
          </div>
        )}
        <div className="work-preview-screen">
          <ProductImage
            src={image.src}
            alt={t(image.alt)}
            preload={preload}
            sizes={
              mobile
                ? "(min-width: 640px) 300px, 220px"
                : large
                  ? "(min-width: 1280px) 1120px, 90vw"
                  : "(min-width: 1024px) 650px, 90vw"
            }
          />
        </div>
      </div>
      {secondaryImage && (
        <div className="work-preview-phone">
          <ProductImage
            src={secondaryImage.src}
            alt={t(secondaryImage.alt)}
            sizes={
              large
                ? "(min-width: 640px) 220px, 110px"
                : "(min-width: 640px) 150px, 100px"
            }
          />
        </div>
      )}
    </div>
  );
}

export function ProjectVisual({
  project,
  large,
  preload,
}: {
  project: PortfolioProject;
  large?: boolean;
  preload?: boolean;
}) {
  const { t } = useTranslations();

  return (
    <ProductVisual
      image={project.heroImage}
      secondaryImage={project.secondaryImage}
      title={t(project.client)}
      large={large}
      preload={preload}
    />
  );
}
