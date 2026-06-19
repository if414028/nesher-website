"use client";

import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { HeroFlowBackground } from "@/components/landing/HeroFlowBackground";
import { MotionDiv, Reveal } from "@/components/landing/Motion";
import { whatsappUrl } from "@/lib/landing-data";

function DashboardMockup() {
  const bars = ["h-24", "h-32", "h-20", "h-36", "h-28", "h-40", "h-24"];

  return (
    <div className="relative mx-auto mt-10 max-w-6xl px-3 sm:px-6">
      <MotionDiv
        className="absolute -left-1 top-16 z-20 hidden rounded-3xl border border-[#E9DFFF] bg-white px-5 py-4 shadow-[0_18px_50px_rgba(59,7,100,0.12)] md:block"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <p className="text-sm font-semibold text-[#111827]">SEO Ready</p>
        <p className="mt-1 text-xs text-[#6B7280]">Struktur cepat ditemukan</p>
      </MotionDiv>

      <MotionDiv
        className="absolute -right-2 top-24 z-20 hidden rounded-3xl border border-[#E9DFFF] bg-white px-5 py-4 shadow-[0_18px_50px_rgba(59,7,100,0.12)] lg:block"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <p className="text-sm font-semibold text-[#111827]">Responsive Design</p>
        <p className="mt-1 text-xs text-[#6B7280]">Rapi di semua layar</p>
      </MotionDiv>

      <MotionDiv
        className="absolute bottom-12 left-8 z-20 hidden rounded-3xl border border-[#E9DFFF] bg-white px-5 py-4 shadow-[0_18px_50px_rgba(59,7,100,0.12)] lg:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <p className="text-sm font-semibold text-[#111827]">Custom System</p>
        <p className="mt-1 text-xs text-[#6B7280]">Sesuai workflow bisnis</p>
      </MotionDiv>

      <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white p-3 shadow-[0_30px_90px_rgba(59,7,100,0.16)] sm:rounded-[2.5rem] sm:p-4">
        <div className="rounded-[1.5rem] border border-[#E9DFFF] bg-[#FAF7FF] sm:rounded-[2rem]">
          <div className="flex items-center gap-2 border-b border-[#E9DFFF] px-5 py-4">
            <span className="size-3 rounded-full bg-[#F87171]" />
            <span className="size-3 rounded-full bg-[#FBBF24]" />
            <span className="size-3 rounded-full bg-[#34D399]" />
            <div className="ml-4 hidden h-8 flex-1 rounded-full bg-white px-4 text-left text-xs leading-8 text-[#6B7280] sm:block">
              app.neshertechnology.com/dashboard
            </div>
          </div>

          <div className="grid gap-4 p-4 lg:grid-cols-[180px_1fr_190px] lg:p-5">
            <aside className="hidden rounded-[1.5rem] bg-white p-4 lg:block">
              <div className="mb-7 h-8 w-24 rounded-full bg-[#6D28D9]" />
              {["Overview", "Projects", "Clients", "Reports", "Settings"].map(
                (item, index) => (
                  <div
                    key={item}
                    className={`mb-3 h-9 rounded-full ${
                      index === 0 ? "bg-[#F6F1FF]" : "bg-[#F9FAFB]"
                    }`}
                  />
                )
              )}
            </aside>

            <main className="space-y-4">
              <div className="grid gap-3 sm:grid-cols-3">
                {["Revenue", "Projects", "Leads"].map((item, index) => (
                  <div key={item} className="rounded-3xl bg-white p-4">
                    <p className="text-xs font-medium text-[#6B7280]">{item}</p>
                    <p className="mt-2 text-2xl font-bold text-[#111827]">
                      {index === 0 ? "128%" : index === 1 ? "42" : "316"}
                    </p>
                    <div className="mt-4 h-2 rounded-full bg-[#F6F1FF]">
                      <div
                        className="h-full rounded-full bg-[#6D28D9]"
                        style={{ width: `${68 + index * 8}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid gap-4 lg:grid-cols-[1fr_220px]">
                <div className="rounded-[1.5rem] bg-white p-5">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <div className="h-4 w-32 rounded-full bg-[#111827]" />
                      <div className="mt-2 h-3 w-44 rounded-full bg-[#E9DFFF]" />
                    </div>
                    <div className="h-9 w-24 rounded-full bg-[#F6F1FF]" />
                  </div>
                  <div className="flex h-44 items-end gap-3 rounded-3xl bg-[#FAF7FF] p-4">
                    {bars.map((height, index) => (
                      <div
                        key={`${height}-${index}`}
                        className={`${height} flex-1 rounded-t-2xl bg-gradient-to-t from-[#6D28D9] to-[#C4B5FD]`}
                      />
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.5rem] bg-white p-5">
                  <div className="mb-5 h-4 w-28 rounded-full bg-[#111827]" />
                  {[82, 64, 48, 72].map((width, index) => (
                    <div key={width} className="mb-4">
                      <div className="mb-2 flex justify-between">
                        <span className="h-3 w-16 rounded-full bg-[#E9DFFF]" />
                        <span className="h-3 w-8 rounded-full bg-[#E9DFFF]" />
                      </div>
                      <div className="h-2 rounded-full bg-[#F6F1FF]">
                        <div
                          className="h-full rounded-full bg-[#6D28D9]"
                          style={{ width: `${width - index * 4}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.5rem] bg-white p-4">
                {[1, 2, 3].map((row) => (
                  <div
                    key={row}
                    className="grid grid-cols-[1fr_80px_70px] items-center gap-3 border-b border-[#F3ECFF] py-3 last:border-0"
                  >
                    <div className="h-3 rounded-full bg-[#E9DFFF]" />
                    <div className="h-3 rounded-full bg-[#F6F1FF]" />
                    <div className="h-7 rounded-full bg-[#F6F1FF]" />
                  </div>
                ))}
              </div>
            </main>

            <aside className="hidden items-center justify-center lg:flex">
              <div className="h-[420px] w-[170px] rounded-[2rem] border-[10px] border-[#111827] bg-white p-3 shadow-2xl">
                <div className="mx-auto mb-4 h-1.5 w-14 rounded-full bg-[#E9DFFF]" />
                <div className="rounded-3xl bg-[#F6F1FF] p-3">
                  <div className="h-20 rounded-2xl bg-white" />
                  <div className="mt-3 h-3 w-20 rounded-full bg-[#6D28D9]" />
                  <div className="mt-2 h-3 w-24 rounded-full bg-[#E9DFFF]" />
                </div>
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="mt-3 h-14 rounded-2xl bg-[#FAF7FF]" />
                ))}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#FBFAFE] pb-20 pt-14 sm:pt-16 lg:pb-28"
    >
      <HeroFlowBackground />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-64 bg-gradient-to-b from-transparent to-white" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E9DFFF] bg-white px-4 py-2 text-sm font-semibold text-[#3B0764] shadow-sm">
            <Sparkles className="size-4 text-[#6D28D9]" />
            Digital Partner for Growing Businesses
          </div>
          <h1 className="mx-auto mt-6 max-w-5xl text-balance text-4xl font-bold leading-tight text-[#111827] sm:text-6xl">
            Software House untuk Website, Aplikasi, dan Dashboard Bisnis Anda
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-pretty text-lg leading-8 text-[#6B7280] sm:text-xl">
            Nesher Teknologi Nusantara membantu bisnis membangun website company
            profile, web application, dashboard, dan aplikasi custom yang
            modern, cepat, scalable, dan mudah digunakan.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              className="h-12 rounded-full bg-[#6D28D9] px-7 text-base text-white shadow-[0_18px_40px_rgba(109,40,217,0.25)] hover:bg-[#5B21B6] hover:text-white"
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
              className="h-12 rounded-full border-[#E9DFFF] bg-white px-7 text-base text-[#3B0764] hover:bg-[#6D28D9] hover:text-white"
            >
              <Link href="/portfolio">Lihat Portofolio</Link>
            </Button>
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-sm text-[#6B7280]">
            {["Modern UI", "Scalable System", "Clear Process"].map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <CheckCircle2 className="size-4 text-[#6D28D9]" />
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
      <div className="relative z-10">
        <DashboardMockup />
      </div>
    </section>
  );
}
