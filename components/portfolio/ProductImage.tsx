"use client";

import { useTranslations } from "@/components/i18n/LocaleProvider";

import Image from "next/image";
import { ImageOff } from "lucide-react";
import { useState } from "react";

export function ProductImage({
  src,
  alt,
  sizes,
  preload = false,
}: {
  src: string;
  alt: string;
  sizes: string;
  preload?: boolean;
}) {
  const { t } = useTranslations();

  const [failedSrc, setFailedSrc] = useState<string>();

  if (!src || failedSrc === src) {
    return (
      <div
        className="work-image-fallback"
        role="img"
        aria-label={`${t(alt)}. ${t("Preview unavailable.")}`}
      >
        <ImageOff aria-hidden="true" className="size-7" />
        <span>{t("Product preview unavailable")}</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={t(alt)}
      fill
      sizes={sizes}
      preload={preload}
      onError={() => setFailedSrc(src)}
      className="work-product-image"
    />
  );
}
