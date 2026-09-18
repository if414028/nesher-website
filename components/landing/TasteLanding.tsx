"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { portfolioItems, services, whatsappUrl } from "@/lib/landing-data";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const clientNames = [
  "Institut Teknologi Del",
  "JuangGroup",
  "JKI Hananeel Cinta",
  "Zoe Everblossom",
  "Ada Mata Indonesia",
  "LetsGrowAcademy",
];

const principles = [
  {
    title: "Mudah digunakan",
    body: "Alur yang jelas, antarmuka yang terasa natural, dan keputusan desain yang selalu berpihak pada pengguna.",
    className: "lg:col-span-8",
    tone: "bg-[#c4b5fd] text-[#17131f]",
  },
  {
    title: "Siap bertumbuh",
    body: "Fondasi teknis yang sehat untuk kebutuhan bisnis hari ini dan ekspansi berikutnya.",
    className: "lg:col-span-4",
    tone: "bg-[#e8e1ff] text-[#17131f]",
  },
  {
    title: "Dibangun khusus",
    body: "Bukan template yang memaksa bisnis beradaptasi. Sistem mengikuti workflow, tim, dan tujuan Anda.",
    className: "lg:col-span-4",
    tone: "bg-[#f1eee8] text-[#171512]",
  },
  {
    title: "Terukur sejak awal",
    body: "Scope, milestone, dan progres dibuat transparan agar setiap keputusan tetap terarah.",
    className: "lg:col-span-8",
    tone: "bg-[#211936] text-white",
  },
];

const revealCopy =
  "Kami mengubah proses bisnis yang rumit menjadi produk digital yang terasa sederhana, cepat, dan siap dipakai setiap hari.";

export function TasteLanding() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduceMotion) return;

      gsap.from("[data-hero-copy] > *", {
        y: 64,
        opacity: 0,
        duration: 1.1,
        stagger: 0.12,
        ease: "power4.out",
      });

      gsap.from("[data-hero-visual]", {
        scale: 0.82,
        rotate: 3,
        opacity: 0,
        duration: 1.4,
        ease: "power4.out",
      });

      gsap.to("[data-reveal-word]", {
        opacity: 1,
        stagger: 0.08,
        ease: "none",
        scrollTrigger: {
          trigger: "[data-reveal-copy]",
          start: "top 78%",
          end: "bottom 42%",
          scrub: 1,
        },
      });

      gsap.utils.toArray<HTMLElement>("[data-work-card]").forEach((card) => {
        const visual = card.querySelector("[data-work-visual]");
        gsap.fromTo(
          visual,
          { scale: 0.82, opacity: 0.25 },
          {
            scale: 1,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              end: "center 55%",
              scrub: 1,
            },
          },
        );
      });

      ScrollTrigger.matchMedia({
        "(min-width: 1024px)": () => {
          ScrollTrigger.create({
            trigger: "[data-work-grid]",
            start: "top 112px",
            end: "bottom 55%",
            pin: "[data-work-title]",
            pinSpacing: false,
          });
        },
      });
    },
    { scope: root },
  );

  return (
    <div ref={root} className="bg-[#0b0b0d] text-white">
      <Navbar />

      <main id="main-content" className="w-full max-w-full overflow-x-hidden">
        <section id="home" className="relative min-h-[960px] overflow-hidden px-4 pb-28 pt-36 sm:px-6 lg:min-h-screen lg:pb-20 lg:pt-44">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(111,70,191,0.38),transparent_32%),radial-gradient(circle_at_10%_80%,rgba(223,255,94,0.12),transparent_25%)]" />
          <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:72px_72px]" />
          <div className="relative mx-auto max-w-[1440px]">
            <div data-hero-copy className="relative z-20">
              <p className="mb-8 max-w-sm text-sm leading-6 text-white/58 sm:text-base">
                Studio teknologi Jakarta untuk website, aplikasi, dan sistem custom yang bekerja sebaik tampilannya.
              </p>
              <h1 className="w-full max-w-6xl text-[clamp(3.25rem,7.4vw,7.4rem)] font-semibold leading-[0.88] tracking-[-0.075em] text-white">
                Produk digital yang membuat bisnis bergerak.
              </h1>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-gtag-conversion
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#c4b5fd] px-7 py-4 font-semibold text-[#17131f] transition-transform duration-300 hover:scale-[1.03]"
                >
                  Ceritakan kebutuhan Anda
                  <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/#work"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-black"
                >
                  Lihat karya kami
                </Link>
              </div>
            </div>

            <div data-hero-visual className="relative z-10 ml-auto mt-[-1rem] w-[92%] max-w-[780px] lg:mt-[-10rem] lg:w-[58%]">
              <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-[#17131f] shadow-[0_50px_120px_rgba(0,0,0,.6)] sm:rounded-[3rem]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/portfolio/letsgrowacademy/overview-dashboard.png"
                    alt="Dashboard bisnis buatan Nesher Tech"
                    fill
                    priority
                    sizes="(min-width: 1024px) 58vw, 92vw"
                    className="object-cover object-left-top contrast-125 transition-transform duration-1000 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0d]/70 via-transparent to-transparent" />
                </div>
              </div>
              <div className="absolute -bottom-12 -left-8 hidden w-56 overflow-hidden rounded-[2rem] border border-white/15 bg-[#241a39] shadow-2xl md:block">
                <Image
                  src="/portfolio/myhananeelcinta/home.webp"
                  width={320}
                  height={650}
                  alt="Aplikasi mobile MyHananeelCinta"
                  className="h-72 w-full object-cover object-top transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        <section aria-label="Klien pilihan" className="border-y border-white/10 bg-[#111114] py-7">
          <div className="marquee-track flex w-max items-center gap-14 whitespace-nowrap text-sm font-medium uppercase tracking-[0.18em] text-white/48">
            {[...clientNames, ...clientNames].map((name, index) => (
              <span key={`${name}-${index}`} className="flex items-center gap-14">
                {name}<span className="size-1.5 rounded-full bg-[#c4b5fd]" />
              </span>
            ))}
          </div>
        </section>

        <section id="services" className="bg-[#f4f1eb] px-4 py-32 text-[#14130f] sm:px-6 md:py-48">
          <div className="mx-auto max-w-[1440px]">
            <h2 className="max-w-6xl text-[clamp(2.8rem,6.2vw,6rem)] font-semibold leading-[0.98] tracking-[-0.065em]">
              Kami merancang <span className="inline-block h-[0.65em] w-[1.5em] overflow-hidden rounded-full align-baseline">
                <Image src="/images/custom-workflow-automation.jpg" alt="" width={180} height={90} className="h-full w-full object-cover" />
              </span> sistem yang jelas, relevan, dan tahan lama.
            </h2>
            <div className="mt-20 grid grid-flow-dense grid-cols-1 gap-3 lg:grid-cols-12 lg:grid-rows-2">
              {principles.map((item) => (
                <article key={item.title} className={`group min-h-72 overflow-hidden rounded-[2rem] p-8 sm:p-10 ${item.className} ${item.tone}`}>
                  <div className="flex h-full flex-col justify-between gap-16 transition-transform duration-700 ease-out group-hover:scale-[1.02]">
                    <ArrowDownRight className="size-8 opacity-55 transition-transform duration-500 group-hover:rotate-[-10deg]" />
                    <div>
                      <h3 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">{item.title}</h3>
                      <p className="mt-4 max-w-xl text-base leading-7 opacity-65 sm:text-lg">{item.body}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-32 sm:px-6 md:py-48">
          <div className="mx-auto max-w-[1440px]">
            <p data-reveal-copy className="max-w-6xl text-[clamp(2.5rem,5.7vw,5.5rem)] font-medium leading-[1.02] tracking-[-0.06em]">
              {revealCopy.split(" ").map((word, index) => (
                <span key={`${word}-${index}`} data-reveal-word className="mr-[0.22em] inline-block opacity-10">{word}</span>
              ))}
            </p>
          </div>
        </section>

        <section id="work" className="bg-[#e8e1ff] px-4 py-32 text-[#17131f] sm:px-6 md:py-48">
          <div data-work-grid className="mx-auto grid max-w-[1440px] gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div data-work-title className="h-fit">
              <h2 className="text-[clamp(3rem,6vw,6.5rem)] font-semibold leading-[0.9] tracking-[-0.07em]">Karya yang hidup di dunia nyata.</h2>
              <p className="mt-8 max-w-sm text-lg leading-8 text-[#17131f]/60">Dari dashboard operasional sampai ekosistem mobile, setiap produk lahir dari masalah bisnis yang nyata.</p>
              <Link href="/portfolio" className="mt-10 inline-flex items-center gap-3 border-b border-[#17131f] pb-2 font-semibold">Jelajahi semua karya <ArrowRight className="size-4" /></Link>
            </div>
            <div className="space-y-28 lg:pt-12">
              {portfolioItems.slice(0, 3).map((item, index) => (
                <Link key={item.title} href={item.href} data-work-card className="group block">
                  <div data-work-visual className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-[#211936] shadow-[0_30px_80px_rgba(39,25,69,.18)] sm:rounded-[3rem]">
                    <Image src={item.image} alt={item.title} fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                    <span className="absolute bottom-6 right-6 grid size-14 place-items-center rounded-full bg-[#c4b5fd] text-[#17131f] transition-transform duration-500 group-hover:rotate-[-12deg] group-hover:scale-110"><ArrowDownRight className="size-6" /></span>
                  </div>
                  <div className="mt-7 flex items-start justify-between gap-8">
                    <div><h3 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">{item.title}</h3><p className="mt-2 text-[#17131f]/55">{item.category}</p></div>
                    <span className="pt-2 font-mono text-sm text-[#17131f]/40">0{index + 1}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f4f1eb] px-4 py-32 text-[#14130f] sm:px-6 md:py-48">
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <h2 className="max-w-4xl text-[clamp(3rem,6vw,6rem)] font-semibold leading-[0.95] tracking-[-0.065em]">Satu partner, dari ide sampai produk berjalan.</h2>
              <p className="max-w-sm text-lg leading-8 text-black/55">Pilih fokus yang paling mendesak. Kami bantu menyusun langkah berikutnya.</p>
            </div>
            <div className="flex min-h-[620px] flex-col gap-2 lg:flex-row">
              {services.slice(0, 4).map((service, index) => (
                <article key={service.title} className="service-slice group relative flex min-h-56 flex-1 overflow-hidden rounded-[1.75rem] bg-[#17131f] p-7 text-white transition-[flex] duration-700 ease-[cubic-bezier(.16,1,.3,1)] hover:flex-[2.6] lg:min-h-[620px]">
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 bg-[radial-gradient(circle_at_70%_20%,rgba(111,70,191,.65),transparent_42%)]" />
                  <div className="relative flex w-full flex-col justify-between">
                    <span className="font-mono text-sm text-white/35">0{index + 1}</span>
                    <div>
                      <h3 className="max-w-sm text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">{service.title}</h3>
                      <p className="mt-5 max-w-md text-base leading-7 text-white/60 opacity-100 transition-opacity duration-500 lg:opacity-0 lg:group-hover:opacity-100">{service.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#c4b5fd] px-4 py-28 text-[#17131f] sm:px-6 md:py-40">
          <div className="absolute -right-16 -top-24 size-96 rounded-full border border-black/10" />
          <div className="absolute -right-3 -top-8 size-64 rounded-full border border-black/10" />
          <div className="relative mx-auto max-w-[1440px]">
            <h2 className="max-w-6xl text-[clamp(3.3rem,7.5vw,8rem)] font-semibold leading-[0.88] tracking-[-0.075em]">Punya masalah yang layak diselesaikan?</h2>
            <div className="mt-14 flex flex-col justify-between gap-8 border-t border-black/20 pt-8 sm:flex-row sm:items-center">
              <p className="max-w-lg text-lg leading-8 text-black/60">Mari ubah kebutuhan bisnis Anda menjadi produk digital yang jelas, terukur, dan siap bertumbuh.</p>
              <Link href={whatsappUrl} target="_blank" rel="noreferrer" data-gtag-conversion className="group inline-flex w-fit items-center gap-4 rounded-full bg-[#11130e] px-7 py-4 font-semibold text-white transition-transform hover:scale-[1.03]">Mulai percakapan <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" /></Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
