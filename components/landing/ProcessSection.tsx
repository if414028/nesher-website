"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDownRight, Braces, ClipboardCheck, Compass, PenTool, Rocket, Route } from "lucide-react";
import { useRef } from "react";

import { processSteps } from "@/lib/landing-data";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const stepIcons = [Compass, Route, PenTool, Braces, ClipboardCheck, Rocket];
const outcomes = [
  { title: "Satu alur, tanpa kejutan", text: "Scope, keputusan, dan progres tercatat dari awal sampai serah terima." },
  { title: "Review di setiap milestone", text: "Anda melihat hasilnya bertahap, bukan menunggu sampai project selesai." },
  { title: "Siap tumbuh setelah live", text: "Fondasi teknis dan dokumentasi disiapkan untuk pengembangan berikutnya." },
];

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const media = gsap.matchMedia();

    media.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      const cards = gsap.utils.toArray<HTMLElement>(".process-card");
      const offscreenY = () => Math.max(window.innerHeight - 112, 640);
      gsap.set(cards.slice(1), { y: offscreenY, visibility: "hidden" });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".process-stage",
          start: "top top+=112",
          end: () => `+=${(cards.length - 1) * window.innerHeight * 0.72}`,
          pin: true,
          pinType: "fixed",
          pinSpacing: true,
          scrub: 1.25,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      cards.slice(1).forEach((card, index) => {
        const label = `stage-${index + 2}`;

        timeline
          .addLabel(label)
          .set(card, { visibility: "visible" }, label)
          .to(card, {
            y: 0,
            force3D: false,
            ease: "none",
            duration: 1,
          }, label);
      });
    });

    return () => media.revert();
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="process" className="relative isolate overflow-clip bg-[#17111F] py-32 text-white sm:py-40 lg:py-48">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_12%_15%,rgba(109,40,217,0.35),transparent_30%),radial-gradient(circle_at_88%_82%,rgba(196,181,253,0.16),transparent_26%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.13] [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="process-intro text-center">
            <p className="mx-auto max-w-2xl text-sm font-semibold leading-6 text-[#C4B5FD]">Dari percakapan pertama sampai produk digunakan tim Anda.</p>
            <h2 className="mx-auto mt-7 max-w-6xl text-balance text-[clamp(3rem,6vw,6.5rem)] font-semibold leading-[0.94] tracking-[-0.065em]">
              Proses yang bisa
              <span
                aria-hidden="true"
                className="mx-[0.16em] inline-block h-[0.62em] w-[1.25em] rounded-full bg-[url('/images/custom-workflow-automation.jpg')] bg-cover bg-center align-[0.02em] opacity-85 grayscale transition-transform duration-700 ease-out hover:scale-105"
              />
              Anda lihat, bukan sekadar janji.
            </h2>
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/65 sm:text-xl">
              Setiap tahap punya tujuan, hasil, dan titik persetujuan yang jelas. Anda selalu tahu apa yang sedang dikerjakan dan apa yang terjadi berikutnya.
            </p>

            <div className="mx-auto mt-12 max-w-5xl overflow-hidden border-y border-white/10 py-4">
              <div className="process-marquee flex w-max items-center gap-8 whitespace-nowrap text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
                {["Brief tervalidasi", "Milestone terukur", "Review terjadwal", "Dokumentasi rapi", "Brief tervalidasi", "Milestone terukur", "Review terjadwal", "Dokumentasi rapi"].map((item, index) => (
                  <span key={`${item}-${index}`} className="flex items-center gap-8">{item}<span className="size-1 rounded-full bg-[#8B5CF6]" /></span>
                ))}
              </div>
            </div>
        </div>

          <div className="process-pin-shell mx-auto mt-24 max-w-5xl sm:mt-32 lg:mt-40">
          <div className="process-stage process-stack relative motion-safe:lg:h-[28rem] motion-safe:lg:overflow-visible">
            {processSteps.map((step, index) => {
              const Icon = stepIcons[index];
              return (
                <article
                  key={step.title}
                  className={`process-card group relative mb-8 overflow-hidden rounded-[2rem] border border-white/10 bg-[#21172C] p-6 shadow-[0_38px_110px_rgba(0,0,0,0.4)] sm:p-8 lg:min-h-[28rem] lg:p-10 lg:will-change-transform motion-safe:lg:absolute motion-safe:lg:inset-0 motion-safe:lg:mb-0 ${index > 0 ? "motion-safe:lg:invisible" : ""}`}
                  style={{ zIndex: index + 1 }}
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C4B5FD]/70 to-transparent" />
                  <div className="absolute -right-24 -top-24 size-64 rounded-full bg-[#6D28D9]/20 blur-3xl transition-transform duration-700 ease-out group-hover:scale-125" />
                  <div className="relative flex h-full flex-col justify-between gap-12">
                    <div className="flex items-start justify-between gap-6">
                      <span className="flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-[#C4B5FD] transition-transform duration-700 ease-out group-hover:scale-105"><Icon className="size-5" aria-hidden="true" /></span>
                      <span className="font-mono text-sm text-white/35">{String(index + 1).padStart(2, "0")} / 06</span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#A78BFA]">{step.duration}</p>
                      <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">{step.title}</h3>
                      <p className="mt-5 max-w-xl text-base leading-7 text-white/62 sm:text-lg sm:leading-8">{step.description}</p>
                      <div className="mt-8 flex flex-wrap gap-2.5">
                        {step.deliverables.map((deliverable) => <span key={deliverable} className="rounded-full border border-white/10 bg-white/[0.055] px-3.5 py-2 text-xs font-medium text-white/78">{deliverable}</span>)}
                      </div>
                    </div>
                    <div className="flex items-center justify-between border-t border-white/10 pt-5 text-sm">
                      <span className="text-white/45">Output utama</span>
                      <span className="flex items-center gap-2 font-semibold text-white">{step.output}<ArrowDownRight className="size-4 text-[#A78BFA]" /></span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          </div>

        <div className="relative z-20 mt-12 flex flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-[#21172C] lg:mt-16 lg:flex-row">
          {outcomes.map((outcome) => (
            <div key={outcome.title} className="group min-h-52 flex-1 border-b border-white/10 p-7 transition-[flex,background-color] duration-700 ease-out hover:flex-[1.35] hover:bg-white/[0.06] sm:p-9 lg:border-b-0 lg:border-r lg:last:border-r-0">
              <h3 className="text-xl font-semibold tracking-[-0.025em]">{outcome.title}</h3>
              <p className="mt-4 max-w-sm text-sm leading-7 text-white/55 transition-colors duration-500 group-hover:text-white/75">{outcome.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
