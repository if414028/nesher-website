"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, type CSSProperties } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
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

gsap.registerPlugin(ScrollTrigger, useGSAP);

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
    secondarySrc?: string;
    height: number;
    width: number;
    variant?: "desktop" | "mobile" | "hybrid";
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
      className="rounded-[2rem] border border-white/15 bg-white/5 p-7 text-white backdrop-blur-xl sm:p-8"
      data-apple-reveal-delay="140ms"
      data-apple-reveal-item
    >
      <div className="divide-y divide-white/10">
        {items.map((item) => (
          <div key={item.label} className="py-5 first:pt-0 last:pb-0">
            <p className="text-xs font-semibold text-white/35">
              {item.label}
            </p>
            {item.href ? (
              <a
                href={item.href}
                rel="noreferrer"
                target="_blank"
                className="mt-2 inline-flex text-lg font-semibold tracking-[-0.02em] text-white hover:text-[#c4b5fd]"
              >
                {item.value}
              </a>
            ) : (
              <p className="mt-2 text-lg font-semibold tracking-[-0.02em] text-white">
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
  if (image.variant === "hybrid" && image.secondarySrc) {
    return (
      <div className="relative aspect-[16/10] overflow-hidden rounded-[2.75rem] border border-[var(--nesher-purple-border)] bg-[linear-gradient(145deg,#fff_0%,color-mix(in_srgb,var(--portfolio-accent)_5%,white)_100%)] p-5 shadow-[var(--nesher-raised-shadow)] sm:p-8 lg:p-12">
        <div
          aria-hidden="true"
          className="absolute -right-32 -top-40 size-[34rem] rounded-full bg-[color-mix(in_srgb,var(--portfolio-accent)_14%,transparent)] blur-[80px]"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-32 left-10 size-80 rounded-full bg-[var(--nesher-purple-100)]/70 blur-[70px]"
        />
        <div className="absolute inset-x-[6%] top-[11%] drop-shadow-[0_32px_48px_rgba(29,29,31,0.18)]">
          <Image
            src={image.src}
            alt={`${image.alt} admin dashboard`}
            width={image.width}
            height={image.height}
            priority
            className="aspect-[4064/2458] w-full object-contain object-top"
          />
        </div>
        <div className="absolute bottom-[4%] right-[8%] w-[20%] min-w-[96px] rotate-[2deg] drop-shadow-[0_34px_38px_rgba(29,29,31,0.3)]">
          <Image
            src={image.secondarySrc}
            alt={`${image.alt} mobile application`}
            width={1362}
            height={2880}
            priority
            className="aspect-[9/19] w-full object-contain object-top"
          />
        </div>
        <div className="absolute bottom-[7%] left-[8%] hidden rounded-full border border-white/70 bg-white/85 px-5 py-2.5 text-sm font-semibold text-[var(--portfolio-accent)] shadow-sm backdrop-blur-xl sm:block">
          Mobile App + Laravel Admin Dashboard
        </div>
      </div>
    );
  }

  if (image.variant === "mobile") {
    return (
      <div className="relative overflow-hidden rounded-[2.75rem] border border-[var(--nesher-purple-border)] bg-white/80 px-8 py-14 shadow-[var(--nesher-raised-shadow)] backdrop-blur-xl sm:py-20">
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
    <div className="overflow-hidden rounded-[2.75rem] border border-[var(--nesher-purple-border)] bg-white p-2 shadow-[var(--nesher-raised-shadow)] sm:p-3">
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
      <div className="overflow-hidden rounded-[2rem] bg-[#e8e1ff] p-6">
        <Image
          src={item.src}
          alt={`${item.title} screen`}
          width={1440}
          height={3120}
          className="mx-auto aspect-[9/16] w-full max-w-[260px] object-contain object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
    );
  }

  return (
    <div className="overflow-hidden bg-[#e8e1ff] p-3 sm:p-5">
      <Image
        src={item.src}
        alt={`${item.title} screenshot`}
        width={3840}
        height={2400}
        className="rounded-[1.75rem] object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
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
    <section className="bg-[#f4f1eb] px-4 py-32 sm:px-6 md:py-48 lg:px-8">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-16 grid gap-7 lg:grid-cols-[0.58fr_0.42fr] lg:items-end">
          <div>
            <h2 className="text-[clamp(2.8rem,5vw,5.5rem)] font-semibold leading-[.96] tracking-[-0.06em] text-[#17131f]">
              {section.title}
            </h2>
          </div>
          <p className="text-lg leading-8 tracking-[-0.01em] text-[var(--nesher-body)]">
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
            data-case-image
            className="group overflow-hidden rounded-[2.5rem] border border-black/8 bg-white"
            >
              {isMobileGallery ? (
                <div className="p-5">
                  <GalleryImage item={item} variant="mobile" />
                  <div className="mt-6">
                    <span className="text-sm font-semibold text-[var(--portfolio-accent)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 text-xl font-semibold tracking-[-0.02em] text-[var(--nesher-ink)]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-[var(--nesher-body)]">
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
                    <h3 className="mt-4 text-2xl font-semibold tracking-[-0.025em] text-[var(--nesher-ink)]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-[var(--nesher-body)]">
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
    <section className="bg-[#f4f1eb] px-4 pb-32 sm:px-6 sm:pb-48 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2">
        {previous ? (
          <Link
            href={previous.href}
            className="group rounded-[2rem] border border-black/10 bg-white p-7 transition duration-500 hover:-translate-y-1 hover:bg-[#e8e1ff]"
          >
            <p className="text-sm font-semibold text-[var(--portfolio-accent)]">
              Sebelumnya
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-[var(--nesher-ink)]">
              {previous.title}
            </h3>
          </Link>
        ) : (
          <div />
        )}

        {next ? (
          <Link
            href={next.href}
            className="group rounded-[2rem] border border-black/10 bg-white p-7 text-left transition duration-500 hover:-translate-y-1 hover:bg-[#e8e1ff] md:text-right"
          >
            <p className="text-sm font-semibold text-[var(--portfolio-accent)]">
              Selanjutnya
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-[var(--nesher-ink)]">
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
  const root = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.from("[data-case-hero] > *", { y: 56, opacity: 0, duration: 1, stagger: 0.12, ease: "power4.out" });
    gsap.utils.toArray<HTMLElement>("[data-case-image]").forEach((card) => {
      gsap.fromTo(card, { scale: 0.86, opacity: 0.25 }, { scale: 1, opacity: 1, ease: "none", scrollTrigger: { trigger: card, start: "top 92%", end: "center 58%", scrub: 1 } });
    });
  }, { scope: root });

  const themeStyle = {
    "--portfolio-accent": themeColor,
  } as CSSProperties;

  return (
    <div ref={root} className="min-h-screen bg-[#0b0b0d] font-sans" style={themeStyle}>
      <Navbar />
      <main id="main-content" className="w-full max-w-full overflow-x-hidden">
        <section className="relative overflow-hidden px-4 pb-28 pt-40 text-white sm:px-6 md:pb-44 md:pt-52 lg:px-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 -top-56 h-[64rem] w-[88rem] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--portfolio-accent)_15%,transparent)_0%,color-mix(in_srgb,var(--portfolio-accent)_5%,transparent)_40%,transparent_72%)] blur-[75px]"
          />
          <div
            data-case-hero
            className="relative mx-auto max-w-[1440px]"
            data-apple-reveal="off"
          >
            <div data-apple-reveal-delay="0ms" data-apple-reveal-item>
              <Button
                asChild
                variant="outline"
                className="mb-12 h-11 rounded-full border-white/15 bg-white/5 px-5 text-white backdrop-blur-xl hover:bg-white hover:text-black"
              >
                <Link href="/#portfolio">
                  <ArrowLeft className="mr-2 size-4" />
                  Kembali
                </Link>
              </Button>
            </div>

            <div className="grid gap-14 lg:grid-cols-[0.68fr_0.32fr] lg:items-end">
              <div data-apple-reveal-delay="70ms" data-apple-reveal-item>
                <p className="text-sm font-semibold text-[#c4b5fd]">
                  {category}
                </p>
                <h1 className="mt-5 w-full max-w-5xl text-[clamp(3.4rem,7vw,7.5rem)] font-semibold leading-[.9] tracking-[-.07em] text-white">
                  {title}
                </h1>
                <p className="mt-7 max-w-3xl text-pretty text-lg leading-8 tracking-[-0.015em] text-white/55 sm:text-xl">
                  {subtitle}
                </p>
                {liveUrl ? (
                  <Button
                    asChild
                    className="mt-8 h-12 rounded-full bg-[#c4b5fd] px-7 text-base text-[#17131f] hover:bg-white"
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

        <section className="bg-[#f4f1eb] px-4 py-32 sm:px-6 md:py-48 lg:px-8">
          <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.38fr_0.62fr] lg:gap-20">
            <div>
              <h2 className="text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#17131f] sm:text-5xl">
                {overviewTitle}
              </h2>
            </div>
            <p className="text-xl leading-9 tracking-[-0.015em] text-[var(--nesher-body)] sm:text-2xl sm:leading-10">
              {overview}
            </p>
          </div>
        </section>

        <section className="bg-[#e8e1ff] px-4 py-32 sm:px-6 md:py-48 lg:px-8">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid gap-10 lg:grid-cols-[0.34fr_0.66fr]">
              <div>
                <h2 className="text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#17131f] sm:text-5xl">
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
                      className="rounded-[2rem] border border-black/8 bg-white/65 p-6 transition-transform duration-500 hover:-translate-y-1"
                    >
                      <div className="flex size-11 items-center justify-center rounded-2xl bg-[color-mix(in_srgb,var(--portfolio-accent)_10%,white)] text-[var(--portfolio-accent)]">
                        <Icon className="size-5" />
                      </div>
                      <p className="mt-5 font-medium leading-7 text-[var(--nesher-ink)]">
                        {item}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f4f1eb] px-4 py-32 sm:px-6 md:py-48 lg:px-8">
          <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.34fr_0.66fr]">
            <div>
              <h2 className="text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#17131f] sm:text-5xl">
                Stack yang dipilih sesuai kebutuhan project.
              </h2>
            </div>

            <div className="flex flex-wrap content-start items-start gap-3 self-start">
              {stack.map((item) => (
                <span
                  key={item}
                  className="inline-flex h-10 items-center whitespace-nowrap rounded-full border border-[var(--nesher-purple-border)] bg-white px-5 text-sm font-medium leading-none text-[var(--nesher-ink)] shadow-[0_10px_30px_rgba(59,7,100,0.04)]"
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

        <section className="bg-[#f4f1eb] px-4 pb-32 sm:px-6 sm:pb-48 lg:px-8">
          <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[2.75rem] bg-[#c4b5fd] px-6 py-20 text-center text-[#17131f] sm:px-10 sm:py-28">
            <div className="pointer-events-none absolute inset-x-0 -top-64 mx-auto h-[32rem] max-w-5xl bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--portfolio-accent)_62%,transparent)_0%,color-mix(in_srgb,var(--portfolio-accent)_18%,transparent)_42%,transparent_72%)] blur-[65px]" />
            <h2 className="relative mx-auto max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-6xl">
              {ctaTitle}
            </h2>
            <p className="relative mx-auto mt-6 max-w-2xl text-lg leading-8 text-black/55 sm:text-xl">
              {ctaDescription}
            </p>
            <Button
              asChild
              className="relative mt-10 h-12 rounded-full bg-[#17131f] px-7 text-base text-white hover:bg-white hover:text-[#17131f]"
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
