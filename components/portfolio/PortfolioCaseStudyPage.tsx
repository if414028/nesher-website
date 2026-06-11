import Image from "next/image";
import Link from "next/link";
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
    <aside className="rounded-[1.75rem] border border-[#E9DFFF] bg-white p-6 shadow-[0_18px_55px_rgba(59,7,100,0.08)]">
      <p className="text-xs font-bold uppercase tracking-[0.26em] text-[#6D28D9]">
        Project Info
      </p>
      <div className="mt-6 divide-y divide-[#E9DFFF]">
        {items.map((item) => (
          <div key={item.label} className="py-5 first:pt-0 last:pb-0">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8B5CF6]">
              {item.label}
            </p>
            {item.href ? (
              <a
                href={item.href}
                rel="noreferrer"
                target="_blank"
                className="mt-2 inline-flex text-lg font-bold text-[#111827] hover:text-[#6D28D9]"
              >
                {item.value}
              </a>
            ) : (
              <p className="mt-2 text-lg font-bold text-[#111827]">
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
      <div className="relative overflow-hidden rounded-[2rem] border border-[#E9DFFF] bg-gradient-to-br from-[#FAF7FF] to-white px-8 py-12 shadow-[0_24px_80px_rgba(59,7,100,0.12)]">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-10 size-72 -translate-x-1/2 rounded-full bg-[#E9D5FF] blur-3xl"
        />
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          priority
          className="relative z-10 mx-auto aspect-[9/16] w-full max-w-[300px] object-contain object-top"
        />
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-[2rem] border border-[#E9DFFF] bg-white p-3 shadow-[0_24px_80px_rgba(59,7,100,0.12)]">
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        priority
        className="rounded-[1.5rem] object-cover object-top"
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
      <div className="rounded-[1.5rem] bg-[#FAF7FF] p-5">
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
    <div className="bg-[#FAF7FF] p-3">
      <Image
        src={item.src}
        alt={`${item.title} screenshot`}
        width={3840}
        height={2400}
        className="rounded-[1.5rem] border border-[#E9DFFF] object-cover object-top"
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
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.55fr_0.45fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#6D28D9]">
              {section.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#111827] sm:text-4xl">
              {section.title}
            </h2>
          </div>
          <p className="text-base leading-7 text-[#6B7280]">
            {section.description}
          </p>
        </div>

        <div
          className={
            isMobileGallery
              ? "grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              : "grid gap-6"
          }
        >
          {section.items.map((item, index) => (
            <article
              key={item.src}
              className="overflow-hidden rounded-[2rem] border border-[#E9DFFF] bg-white shadow-[0_18px_55px_rgba(59,7,100,0.08)]"
            >
              {isMobileGallery ? (
                <div className="p-5">
                  <GalleryImage item={item} variant="mobile" />
                  <div className="mt-6">
                    <span className="text-sm font-semibold text-[#6D28D9]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 text-xl font-bold text-[#111827]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-[#6B7280]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="grid gap-0 lg:grid-cols-[0.3fr_0.7fr]">
                  <div className="border-b border-[#E9DFFF] p-6 lg:border-b-0 lg:border-r">
                    <span className="text-sm font-semibold text-[#6D28D9]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-4 text-2xl font-bold text-[#111827]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-[#6B7280]">
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
    <section className="bg-white px-4 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2">
        {previous ? (
          <Link
            href={previous.href}
            className="rounded-[1.5rem] border border-[#E9DFFF] bg-[#FAF7FF] p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_55px_rgba(59,7,100,0.08)]"
          >
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#6D28D9]">
              Sebelumnya
            </p>
            <h3 className="mt-3 text-2xl font-bold text-[#111827]">
              {previous.title}
            </h3>
          </Link>
        ) : (
          <div />
        )}

        {next ? (
          <Link
            href={next.href}
            className="rounded-[1.5rem] border border-[#E9DFFF] bg-[#FAF7FF] p-6 text-left transition hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_55px_rgba(59,7,100,0.08)] md:text-right"
          >
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#6D28D9]">
              Selanjutnya
            </p>
            <h3 className="mt-3 text-2xl font-bold text-[#111827]">
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
  title,
}: PortfolioCaseStudyPageProps) {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main>
        <section className="bg-gradient-to-b from-[#FAF7FF] via-white to-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Button
              asChild
              variant="outline"
              className="mb-10 h-10 rounded-full border-[#E9DFFF] bg-white text-[#3B0764] hover:bg-[#6D28D9] hover:text-white"
            >
              <Link href="/#portfolio">
                <ArrowLeft className="mr-2 size-4" />
                Kembali
              </Link>
            </Button>

            <div className="grid gap-10 lg:grid-cols-[0.68fr_0.32fr] lg:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.26em] text-[#6D28D9]">
                  {category}
                </p>
                <h1 className="mt-5 text-balance text-5xl font-bold leading-tight text-[#111827] sm:text-6xl lg:text-7xl">
                  {title}
                </h1>
                <p className="mt-6 max-w-3xl text-pretty text-lg leading-8 text-[#6B7280]">
                  {subtitle}
                </p>
                {liveUrl ? (
                  <Button
                    asChild
                    className="mt-8 h-12 rounded-full bg-[#6D28D9] px-7 text-base text-white shadow-[0_18px_40px_rgba(109,40,217,0.2)] hover:bg-[#5B21B6] hover:text-white"
                  >
                    <a href={liveUrl} rel="noreferrer" target="_blank">
                      {liveUrlLabel} <ArrowUpRight className="ml-2 size-4" />
                    </a>
                  </Button>
                ) : null}
              </div>
              <ProjectMeta items={meta} />
            </div>

            <div className="mt-12">
              <HeroImage image={heroImage} />
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.34fr_0.66fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#6D28D9]">
                What We Do
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-[#111827] sm:text-4xl">
                {overviewTitle}
              </h2>
            </div>
            <p className="text-lg leading-9 text-[#4B5563]">{overview}</p>
          </div>
        </section>

        <section className="bg-[#FAF7FF] px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.34fr_0.66fr]">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#6D28D9]">
                  Our Responsibility
                </p>
                <h2 className="mt-4 text-3xl font-bold leading-tight text-[#111827] sm:text-4xl">
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
                      className="rounded-[1.5rem] border border-[#E9DFFF] bg-white p-5 shadow-[0_12px_38px_rgba(59,7,100,0.06)]"
                    >
                      <div className="flex size-11 items-center justify-center rounded-2xl bg-[#F6F1FF] text-[#6D28D9]">
                        <Icon className="size-5" />
                      </div>
                      <p className="mt-5 leading-7 text-[#111827]">{item}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.34fr_0.66fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#6D28D9]">
                Technology Stack
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-[#111827] sm:text-4xl">
                Stack yang dipilih sesuai kebutuhan project.
              </h2>
            </div>

            <div className="flex flex-wrap content-start items-start gap-3 self-start">
              {stack.map((item) => (
                <span
                  key={item}
                  className="inline-flex h-10 items-center whitespace-nowrap rounded-full border border-[#E9DFFF] bg-[#FAF7FF] px-5 text-sm font-semibold leading-none text-[#3B0764]"
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

        <section className="bg-white px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#6D28D9] to-[#3B0764] px-6 py-14 text-center text-white shadow-[0_24px_80px_rgba(59,7,100,0.18)] sm:px-10">
            <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">
              {ctaTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/80">
              {ctaDescription}
            </p>
            <Button
              asChild
              className="mt-8 h-12 rounded-full bg-white px-7 text-base text-[#3B0764] hover:bg-[#5B21B6] hover:text-white"
            >
              <a href={whatsappUrl} rel="noreferrer" target="_blank">
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
