"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers3,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/landing-data";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function ProjectShowcase() {
  return (
    <div
      data-hero-visual
      className="group relative mx-auto w-full max-w-[46rem] pb-8 pt-10 lg:mx-0 lg:pb-12"
    >
      <div className="absolute inset-x-0 bottom-0 top-14 -z-10 rounded-full bg-primary/12 blur-3xl" />

      <div
        data-project-card
        className="ml-auto w-[92%] overflow-hidden rounded-[2.5rem] border border-[var(--nesher-purple-border)] bg-white shadow-[var(--nesher-raised-shadow)] sm:w-[88%]"
      >
        <div className="flex h-12 items-center justify-between bg-[var(--nesher-purple-900)] px-5 text-white">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-[#C4B5FD]" />
            <span className="text-xs font-bold">
              Project spec · Draft
            </span>
          </div>
          <span className="text-xs font-semibold tracking-[0.12em] text-white/75">
            V0.1
          </span>
        </div>

        <div
          role="img"
          aria-label="Ilustrasi spesifikasi proyek sistem digital custom"
          className="bg-white px-5 py-5 pl-[31%] sm:px-7 sm:py-7 sm:pl-[29%]"
        >
          <div className="flex items-center gap-4 border-b border-dashed border-[#D8CDEA] pb-5">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl border border-primary/15 bg-[var(--nesher-purple-100)] text-primary">
              <Layers3 className="size-5" />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--nesher-muted)]">
                Modul
              </p>
              <p className="mt-1 text-sm font-bold text-[var(--nesher-purple-900)] sm:text-lg">
                Dashboard + API + Admin Panel
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 border-b border-dashed border-[#D8CDEA] py-5">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl border border-primary/15 bg-[var(--nesher-purple-75)] text-primary">
              <Cpu className="size-5" />
            </span>
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--nesher-muted)]">
                Technology stack
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {["Next.js", "Laravel", "PostgreSQL", "AWS"].map((stack) => (
                  <span
                    key={stack}
                    className="rounded-full border border-[var(--nesher-purple-border)] bg-[var(--nesher-purple-50)] px-2.5 py-1 text-xs font-semibold text-[var(--nesher-purple-900)]"
                  >
                    {stack}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-5">
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--nesher-muted)]">
                Timeline
              </p>
              <p className="text-xs font-bold text-primary">
                ± 12 minggu
              </p>
            </div>
            <div className="mt-3 grid grid-cols-4 gap-1">
              {["Brief", "Design", "Build", "Live"].map((phase, index) => (
                <div key={phase}>
                  <div
                    className={`h-2 rounded-full ${
                      index === 0
                        ? "bg-primary"
                        : index === 1
                          ? "bg-[#8B5CF6]"
                          : index === 2
                            ? "bg-[#A78BFA]"
                            : "bg-[#C4B5FD]"
                    }`}
                  />
                  <p
                    className={`mt-2 text-xs font-semibold ${
                      index === 3 ? "text-right" : "text-[var(--nesher-body)]"
                    }`}
                  >
                    {phase}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-[#D8CDEA] bg-[#FBFAFE] py-3.5 pl-[31%] pr-5 sm:pl-[29%] sm:pr-7">
          <p className="hidden text-xs font-bold uppercase tracking-[0.12em] text-[var(--nesher-body)] sm:block">
            Prepared by Nesher Technology
          </p>
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary">
            <span className="size-1.5 rounded-full bg-primary" />
            Scope aktif
          </span>
        </div>
      </div>

      <div
        data-hero-mascot
        className="pointer-events-none absolute -bottom-2 -left-[5%] z-20 w-[38%] min-w-[11rem] sm:-bottom-3 sm:-left-[7%] sm:w-[42%]"
      >
        <div
          aria-hidden="true"
          className="absolute bottom-4 left-1/2 h-16 w-3/4 -translate-x-1/2 rounded-full bg-primary/20 blur-2xl"
        />
        <Image
          src="/images/services/mascot-company-profile.webp"
          alt="Maskot Nesher memperkenalkan solusi digital yang dibuat sesuai kebutuhan bisnis"
          width={720}
          height={864}
          priority
          sizes="(min-width: 1024px) 300px, 42vw"
          className="relative h-auto w-full object-contain drop-shadow-[0_24px_28px_rgba(63,19,104,0.18)] transition-transform duration-700 ease-out group-hover:-translate-y-2 group-hover:scale-[1.03]"
        />
      </div>

    </div>
  );
}

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const intro = gsap.timeline({ defaults: { ease: "power1.out" } });
      intro
        .from("[data-hero-copy] > *", {
          opacity: 0,
          duration: 0.5,
          stagger: 0.05,
        })
        .from(
          "[data-project-card]",
          { x: 64, opacity: 0, scale: 0.94, duration: 0.9 },
          "-=0.55"
        )
        .from(
          "[data-hero-mascot]",
          { x: -56, y: 32, opacity: 0, scale: 0.8, duration: 0.95 },
          "-=0.72"
        );

      gsap.to("[data-hero-visual]", {
        y: 70,
        scale: 0.94,
        opacity: 0.28,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });
    },
    { scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      id="home"
      className="nesher-canvas relative isolate overflow-hidden px-4 pb-20 pt-32 sm:px-6 sm:pb-24 sm:pt-36 lg:min-h-[47rem] lg:px-8 lg:pb-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 opacity-70 [background-image:radial-gradient(rgba(109,40,217,0.11)_1px,transparent_1px)] [background-size:24px_24px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_45%,rgba(109,40,217,0.12),transparent_34%),linear-gradient(to_bottom,rgba(251,250,254,0.25),#FBFAFE_88%)]"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.96fr_1.04fr] lg:gap-9">
        <div data-hero-copy className="text-center lg:text-left">
          <h1 className="text-balance text-[clamp(3rem,5vw,4rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-[var(--nesher-ink)]">
            Bukan sekadar dibuat.{" "}
            <span className="relative whitespace-nowrap text-primary">
              Siap dipakai
              <span className="absolute inset-x-0 -bottom-1 -z-10 h-3 -rotate-1 rounded-full bg-[#C4B5FD]/55" />
            </span>{" "}
            untuk bertumbuh.
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-pretty text-lg leading-8 text-[var(--nesher-body)] sm:text-xl lg:mx-0">
            Kami merancang website, aplikasi, dan dashboard custom yang rapi,
            cepat, dan benar-benar mengikuti cara kerja bisnis Anda.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
            <Button
              asChild
              className="h-13 px-7 text-base"
            >
              <a
                data-gtag-conversion
                href={whatsappUrl}
                rel="noreferrer"
                target="_blank"
              >
                Konsultasi Gratis <ArrowRight className="ml-2 size-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-13 px-7 text-base"
            >
              <Link href="/portfolio">Lihat Hasil Kerja</Link>
            </Button>
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-xs font-semibold text-[var(--nesher-body)] lg:justify-start">
            {[
              "Desain sesuai brand",
              "Mobile responsive",
              "Support setelah live",
            ].map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <CheckCircle2 className="size-4 text-primary" />
                {item}
              </span>
            ))}
          </div>

          <div className="nesher-card mx-auto mt-8 flex max-w-xl items-center gap-3 rounded-3xl px-4 py-3 text-left lg:mx-0">
            <span className="nesher-icon-tile flex size-10 shrink-0 items-center justify-center rounded-2xl">
              <ShieldCheck className="size-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-[var(--nesher-ink)]">
                Proses jelas dari awal sampai live
              </p>
              <p className="mt-0.5 text-xs leading-5 text-[var(--nesher-muted)]">
                Anda selalu tahu apa yang sedang dikerjakan dan tahap
                berikutnya.
              </p>
            </div>
          </div>
        </div>

        <ProjectShowcase />
      </div>
    </section>
  );
}
