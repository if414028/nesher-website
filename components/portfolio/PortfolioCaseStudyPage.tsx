import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Layers3,
  MonitorSmartphone,
  Sparkles,
} from "lucide-react";

import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { Button } from "@/components/ui/button";
import { portfolioItems, whatsappUrl } from "@/lib/landing-data";

type GalleryItem = {
  title: string;
  description: string;
  src: string;
};

type MetaItem = {
  label: string;
  value: string;
  href?: string;
};

type GallerySection = {
  eyebrow: string;
  title: string;
  description: string;
  items: GalleryItem[];
  variant?: "desktop" | "mobile";
};

type PortfolioCaseStudyPageProps = {
  category: string;
  title: string;
  subtitle: string;
  overview: string;
  heroImage: {
    alt: string;
    src: string;
    height: number;
    width: number;
    variant?: "desktop" | "mobile";
  };
  meta: MetaItem[];
  responsibilities: string[];
  stack: string[];
  overviewTitle: string;
  responsibilityTitle?: string;
  gallerySections: GallerySection[];
  ctaTitle: string;
  ctaDescription: string;
  liveUrl?: string;
  liveUrlLabel?: string;
  themeColor?: string;
};

const responsibilityIcons = [
  MonitorSmartphone,
  Layers3,
  Code2,
  CheckCircle2,
  Sparkles,
];

function ProjectMeta({ items }: { items: MetaItem[] }) {
  return (
    <aside
      className="rounded-[2.5rem] bg-white p-7 sm:p-8"
      data-apple-reveal-delay="140ms"
      data-apple-reveal-item
    >
      <p className="text-sm font-semibold text-[var(--portfolio-accent)]">
        Project Info
      </p>
      <div className="mt-7 divide-y divide-black/8">
        {items.map((item) => (
          <div key={item.label} className="py-5 first:pt-0 last:pb-0">
            <p className="text-xs font-semibold text-[#86868B]">
              {item.label}
            </p>
            {item.href ? (
              <a
                href={item.href}
                rel="noreferrer"
                target="_blank"
                className="mt-2 inline-flex text-lg font-semibold tracking-[-0.02em] text-[#1D1D1F] hover:text-[var(--portfolio-accent)]"
              >
                {item.value}
              </a>
            ) : (
              <p className="mt-2 text-lg font-semibold tracking-[-0.02em] text-[#1D1D1F]">
                {item.value}
              </p>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
}

function HeroImage({
  image,
}: {
  image: PortfolioCaseStudyPageProps["heroImage"];
}) {
  if (image.variant === "mobile") {
    return (
      <div className="relative overflow-hidden rounded-[2.75rem] bg-white/75 px-8 py-14 shadow-[0_35px_100px_rgba(29,29,31,0.1)] backdrop-blur-xl sm:py-20">
        <div
          aria-hidden="true"
          className="absolute left-1/2 -top-16 h-[34rem] w-[42rem] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--portfolio-accent)_22%,transparent)_0%,color-mix(in_srgb,var(--portfolio-accent)_7%,transparent)_42%,transparent_72%)] blur-[55px]"
        />
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          priority
          className="relative z-10 mx-auto aspect-[9/16] w-full max-w-[320px] object-contain object-top drop-shadow-[0_30px_45px_rgba(29,29,31,0.18)]"
        />
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-[2.75rem] bg-white p-2 shadow-[0_35px_100px_rgba(29,29,31,0.12)] sm:p-3">
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        priority
        className="w-full rounded-[2.1rem] object-cover object-top"
      />
    </div>
  );
}

function GalleryImage({
  item,
  variant = "desktop",
}: {
  item: GalleryItem;
  variant?: "desktop" | "mobile";
}) {
  if (variant === "mobile") {
    return (
      <div className="rounded-[2rem] bg-[#F5F5F7] p-6">
        <Image
          src={item.src}
          alt={`${item.title} screen`}
          width={1440}
          height={3120}
          className="mx-auto aspect-[9/16] w-full max-w-[260px] object-contain object-top"
        />
      </div>
    );
  }

  return (
    <div className="bg-[#F5F5F7] p-3 sm:p-5">
      <Image
        src={item.src}
        alt={`${item.title} screenshot`}
        width={3840}
        height={2400}
        className="rounded-[1.75rem] object-cover object-top"
      />
    </div>
  );
}

function GallerySection({
  section,
}: {
  section: GallerySection;
}) {
  const isMobileGallery = section.variant === "mobile";

  return (
    <section className="bg-white px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 grid gap-7 lg:grid-cols-[0.58fr_0.42fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold text-[var(--portfolio-accent)]">
              {section.eyebrow}
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#1D1D1F] sm:text-5xl lg:text-6xl">
              {section.title}
            </h2>
          </div>
          <p className="text-lg leading-8 tracking-[-0.01em] text-[#6E6E73]">
            {section.description}
          </p>
        </div>

        <div
          className={
            isMobileGallery
              ? "grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              : "grid gap-8"
          }
        >
          {section.items.map((item, index) => (
            <article
              key={item.src}
              className="overflow-hidden rounded-[2.5rem] bg-[#F5F5F7]"
            >
              {isMobileGallery ? (
                <div className="p-5">
                  <GalleryImage item={item} variant="mobile" />
                  <div className="mt-6">
                    <span className="text-sm font-semibold text-[var(--portfolio-accent)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 text-xl font-semibold tracking-[-0.02em] text-[#1D1D1F]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-[#6E6E73]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="grid gap-0 lg:grid-cols-[0.3fr_0.7fr]">
                  <div className="p-7 sm:p-9">
                    <span className="text-sm font-semibold text-[var(--portfolio-accent)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-4 text-2xl font-semibold tracking-[-0.025em] text-[#1D1D1F]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-[#6E6E73]">
                      {item.description}
                    </p>
                  </div>
                  <GalleryImage item={item} />
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectNavigation({ title }: { title: string }) {
  const index = portfolioItems.findIndex((item) => item.title === title);
  const previous = index > 0 ? portfolioItems[index - 1] : null;
  const next =
    index >= 0 && index < portfolioItems.length - 1
      ? portfolioItems[index + 1]
      : null;

  if (!previous && !next) {
    return null;
  }

  return (
    <section className="bg-white px-4 pb-24 sm:px-6 sm:pb-32 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2">
        {previous ? (
          <Link
            href={previous.href}
            className="rounded-[2rem] bg-[#F5F5F7] p-7 transition hover:-translate-y-1"
          >
            <p className="text-sm font-semibold text-[var(--portfolio-accent)]">
              Sebelumnya
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-[#1D1D1F]">
              {previous.title}
            </h3>
          </Link>
        ) : (
          <div />
        )}

        {next ? (
          <Link
            href={next.href}
            className="rounded-[2rem] bg-[#F5F5F7] p-7 text-left transition hover:-translate-y-1 md:text-right"
          >
            <p className="text-sm font-semibold text-[var(--portfolio-accent)]">
              Selanjutnya
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-[#1D1D1F]">
              {next.title}
            </h3>
          </Link>
        ) : null}
      </div>
    </section>
  );
}

export function PortfolioCaseStudyPage({
  category,
  ctaDescription,
  ctaTitle,
  gallerySections,
  heroImage,
  liveUrl,
  liveUrlLabel = "Lihat Website",
  meta,
  overview,
  overviewTitle,
  responsibilities,
  responsibilityTitle = "Ruang lingkup pekerjaan yang kami tangani.",
  stack,
  subtitle,
  themeColor = "#6D28D9",
  title,
}: PortfolioCaseStudyPageProps) {
  const themeStyle = {
    "--portfolio-accent": themeColor,
  } as CSSProperties;

  return (
    <div className="min-h-screen bg-white font-sans" style={themeStyle}>
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-[#F5F5F7] px-4 pb-24 pt-36 sm:px-6 sm:pb-32 sm:pt-44 lg:px-8 lg:pt-48">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 -top-56 h-[64rem] w-[88rem] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--portfolio-accent)_15%,transparent)_0%,color-mix(in_srgb,var(--portfolio-accent)_5%,transparent)_40%,transparent_72%)] blur-[75px]"
          />
          <div
            className="relative mx-auto max-w-7xl"
            data-apple-reveal="off"
          >
            <div data-apple-reveal-delay="0ms" data-apple-reveal-item>
              <Button
                asChild
                variant="outline"
                className="mb-12 h-10 rounded-full border-black/10 bg-white/60 text-[#1D1D1F] backdrop-blur-xl hover:bg-white hover:text-[var(--portfolio-accent)]"
              >
                <Link href="/#portfolio">
                  <ArrowLeft className="mr-2 size-4" />
                  Kembali
                </Link>
              </Button>
            </div>

            <div className="grid gap-14 lg:grid-cols-[0.68fr_0.32fr] lg:items-end">
              <div data-apple-reveal-delay="70ms" data-apple-reveal-item>
                <p className="text-sm font-semibold text-[var(--portfolio-accent)]">
                  {category}
                </p>
                <h1 className="mt-5 text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#1D1D1F] sm:text-7xl lg:text-[5.25rem]">
                  {title}
                </h1>
                <p className="mt-7 max-w-3xl text-pretty text-lg leading-8 tracking-[-0.015em] text-[#6E6E73] sm:text-xl">
                  {subtitle}
                </p>
                {liveUrl ? (
                  <Button
                    asChild
                    className="mt-8 h-12 rounded-full bg-[var(--portfolio-accent)] px-7 text-base text-white shadow-[0_18px_40px_rgba(29,29,31,0.14)] hover:brightness-90 hover:text-white"
                  >
                    <a href={liveUrl} rel="noreferrer" target="_blank">
                      {liveUrlLabel} <ArrowUpRight className="ml-2 size-4" />
                    </a>
                  </Button>
                ) : null}
              </div>
              <ProjectMeta items={meta} />
            </div>

            <div
              className="mt-16 sm:mt-20"
              data-apple-reveal-delay="210ms"
              data-apple-reveal-item
            >
              <HeroImage image={heroImage} />
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.38fr_0.62fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold text-[var(--portfolio-accent)]">
                What We Do
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#1D1D1F] sm:text-5xl">
                {overviewTitle}
              </h2>
            </div>
            <p className="text-xl leading-9 tracking-[-0.015em] text-[#6E6E73] sm:text-2xl sm:leading-10">
              {overview}
            </p>
          </div>
        </section>

        <section className="bg-[#F5F5F7] px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.34fr_0.66fr]">
              <div>
                <p className="text-sm font-semibold text-[var(--portfolio-accent)]">
                  Our Responsibility
                </p>
                <h2 className="mt-4 text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#1D1D1F] sm:text-5xl">
                  {responsibilityTitle}
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {responsibilities.map((item, index) => {
                  const Icon =
                    responsibilityIcons[index % responsibilityIcons.length];

                  return (
                    <div
                      key={item}
                      className="rounded-[2rem] bg-white p-6"
                    >
                      <div className="flex size-11 items-center justify-center rounded-2xl bg-[color-mix(in_srgb,var(--portfolio-accent)_10%,white)] text-[var(--portfolio-accent)]">
                        <Icon className="size-5" />
                      </div>
                      <p className="mt-5 font-medium leading-7 text-[#1D1D1F]">
                        {item}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.34fr_0.66fr]">
            <div>
              <p className="text-sm font-semibold text-[var(--portfolio-accent)]">
                Technology Stack
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#1D1D1F] sm:text-5xl">
                Stack yang dipilih sesuai kebutuhan project.
              </h2>
            </div>

            <div className="flex flex-wrap content-start items-start gap-3 self-start">
              {stack.map((item) => (
                <span
                  key={item}
                  className="inline-flex h-10 items-center whitespace-nowrap rounded-full border border-black/8 bg-[#F5F5F7] px-5 text-sm font-medium leading-none text-[#1D1D1F]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {gallerySections.map((section) => (
          <GallerySection key={section.title} section={section} />
        ))}

        <ProjectNavigation title={title} />

        <section className="bg-white px-4 pb-24 sm:px-6 sm:pb-32 lg:px-8">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.75rem] bg-[#1D1D1F] px-6 py-20 text-center text-white shadow-[0_30px_90px_rgba(29,29,31,0.18)] sm:px-10 sm:py-24">
            <div className="pointer-events-none absolute inset-x-0 -top-64 mx-auto h-[32rem] max-w-5xl bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--portfolio-accent)_62%,transparent)_0%,color-mix(in_srgb,var(--portfolio-accent)_18%,transparent)_42%,transparent_72%)] blur-[65px]" />
            <h2 className="relative mx-auto max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-6xl">
              {ctaTitle}
            </h2>
            <p className="relative mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              {ctaDescription}
            </p>
            <Button
              asChild
              className="relative mt-10 h-12 rounded-full bg-white px-7 text-base text-[#1D1D1F] hover:bg-[var(--portfolio-accent)] hover:text-white"
            >
              <a
                data-gtag-conversion
                href={whatsappUrl}
                rel="noreferrer"
                target="_blank"
              >
                Diskusikan Project <ArrowRight className="ml-2 size-4" />
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
