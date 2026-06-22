import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Cpu,
  Layers3,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/landing-data";

function ProjectShowcase() {
  return (
    <div className="relative mx-auto w-full max-w-[44rem] lg:mx-0">
      <div className="absolute -inset-10 -z-10 rounded-full bg-[#6D28D9]/10 blur-3xl" />

      <div className="absolute -left-2 -top-5 z-10 -rotate-3 rounded-xl bg-[#6D28D9] px-4 py-2.5 text-white shadow-[0_14px_28px_rgba(109,40,217,0.28)] sm:-left-5 sm:px-5">
        <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] sm:text-xs">
          <Code2 className="size-4" />
          Dibangun sesuai kebutuhan
        </span>
      </div>

      <div className="overflow-hidden rounded-[1.6rem] border-2 border-[#3B0764] bg-white shadow-[12px_14px_0_rgba(59,7,100,0.09)]">
        <div className="flex h-12 items-center justify-between bg-[#3B0764] px-5 text-white">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-[#C4B5FD]" />
            <span className="text-[9px] font-bold uppercase tracking-[0.22em] sm:text-[10px]">
              Project spec · Draft
            </span>
          </div>
          <span className="text-[9px] font-semibold tracking-[0.18em] text-white/65">
            V0.1
          </span>
        </div>

        <div
          role="img"
          aria-label="Ilustrasi spesifikasi proyek sistem digital custom"
          className="bg-white px-5 py-5 sm:px-7 sm:py-7"
        >
          <div className="flex items-center gap-4 border-b border-dashed border-[#D8CDEA] pb-5">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#6D28D9]/15 bg-[#F2EAFF] text-[#6D28D9]">
              <Layers3 className="size-5" />
            </span>
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#86868B]">
                Modul
              </p>
              <p className="mt-1 text-sm font-bold text-[#2F1457] sm:text-lg">
                Dashboard + API + Admin Panel
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 border-b border-dashed border-[#D8CDEA] py-5">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#4C919B]/20 bg-[#EBF7F8] text-[#4C919B]">
              <Cpu className="size-5" />
            </span>
            <div className="min-w-0">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#86868B]">
                Technology stack
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {["Next.js", "Laravel", "PostgreSQL", "AWS"].map((stack) => (
                  <span
                    key={stack}
                    className="rounded-md border border-[#D8CDEA] bg-[#F8F5FC] px-2.5 py-1 text-[9px] font-semibold text-[#3B0764] sm:text-[10px]"
                  >
                    {stack}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-5">
            <div className="flex items-center justify-between">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#86868B]">
                Timeline
              </p>
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#6D28D9]">
                ± 12 minggu
              </p>
            </div>
            <div className="mt-3 grid grid-cols-4 gap-1">
              {["Brief", "Design", "Build", "Live"].map((phase, index) => (
                <div key={phase}>
                  <div
                    className={`h-2 rounded-full ${
                      index === 0
                        ? "bg-[#6D28D9]"
                        : index === 1
                          ? "bg-[#8B5CF6]"
                          : index === 2
                            ? "bg-[#A78BFA]"
                            : "bg-[#C4B5FD]"
                    }`}
                  />
                  <p
                    className={`mt-2 text-[8px] font-semibold ${
                      index === 3 ? "text-right" : "text-[#6E6E73]"
                    }`}
                  >
                    {phase}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-[#D8CDEA] bg-[#FBFAFE] px-5 py-3.5 sm:px-7">
          <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#6E6E73]">
            Prepared by Nesher Technology
          </p>
          <span className="inline-flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-[#4C919B]">
            <span className="size-1.5 rounded-full bg-[#4C919B]" />
            Scope aktif
          </span>
        </div>
      </div>

    </div>
  );
}

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#FBFAFE] px-4 pb-20 pt-32 sm:px-6 sm:pb-24 sm:pt-36 lg:min-h-[47rem] lg:px-8 lg:pb-24"
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
        <div className="text-center lg:text-left">
          <h1 className="text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-[#1D1D1F] sm:text-6xl lg:text-[4rem]">
            Bukan sekadar dibuat.{" "}
            <span className="relative whitespace-nowrap text-[#6D28D9]">
              Siap dipakai
              <span className="absolute inset-x-0 -bottom-1 -z-10 h-3 -rotate-1 rounded-full bg-[#C4B5FD]/55" />
            </span>{" "}
            untuk bertumbuh.
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-pretty text-lg leading-8 text-[#6E6E73] sm:text-xl lg:mx-0">
            Kami merancang website, aplikasi, dan dashboard custom yang rapi,
            cepat, dan benar-benar mengikuti cara kerja bisnis Anda.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
            <Button
              asChild
              className="h-13 rounded-full bg-[#6D28D9] px-7 text-base font-semibold text-white shadow-[0_14px_35px_rgba(109,40,217,0.24)] hover:bg-[#5B21B6] hover:text-white"
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
              className="h-13 rounded-full border-[#6D28D9]/25 bg-white px-7 text-base font-semibold text-[#3B0764] hover:bg-[#F6F1FF] hover:text-[#6D28D9]"
            >
              <Link href="/portfolio">Lihat Hasil Kerja</Link>
            </Button>
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-xs font-semibold text-[#6E6E73] lg:justify-start">
            {[
              "Desain sesuai brand",
              "Mobile responsive",
              "Support setelah live",
            ].map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <CheckCircle2 className="size-4 text-[#6D28D9]" />
                {item}
              </span>
            ))}
          </div>

          <div className="mx-auto mt-8 flex max-w-xl items-center gap-3 rounded-2xl border border-black/6 bg-white/80 px-4 py-3 text-left shadow-sm lg:mx-0">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#F2EAFF] text-[#6D28D9]">
              <ShieldCheck className="size-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-[#1D1D1F]">
                Proses jelas dari awal sampai live
              </p>
              <p className="mt-0.5 text-xs leading-5 text-[#86868B]">
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
