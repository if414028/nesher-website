import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowLeft, ArrowRight } from "lucide-react";

import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { portfolioItems, whatsappUrl } from "@/lib/landing-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Portfolio Solusi Digital | Nesher Teknologi Nusantara",
  description: "Lihat portfolio website, aplikasi mobile, dashboard, dan sistem custom yang dibangun Nesher Teknologi Nusantara.",
  path: "/portfolio",
  image: "/portfolio/juanggroup/company-profile-home.png",
});

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#0b0b0d] font-sans text-white">
      <Navbar />
      <main id="main-content" className="w-full max-w-full overflow-x-hidden">
        <section className="relative overflow-hidden px-4 pb-28 pt-40 sm:px-6 md:pb-44 md:pt-52">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(109,40,217,.42),transparent_31%),radial-gradient(circle_at_5%_85%,rgba(196,181,253,.13),transparent_23%)]" />
          <div className="absolute inset-0 opacity-[.12] [background-image:linear-gradient(rgba(255,255,255,.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.14)_1px,transparent_1px)] [background-size:72px_72px]" />
          <div className="relative mx-auto max-w-[1440px]">
            <Link href="/#work" className="mb-14 inline-flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-white"><ArrowLeft className="size-4" /> Kembali ke homepage</Link>
            <h1 className="w-full max-w-6xl text-[clamp(3.6rem,8vw,8.5rem)] font-semibold leading-[.88] tracking-[-.075em]">Karya digital yang bekerja di dunia nyata.</h1>
            <div className="mt-12 flex flex-col justify-between gap-8 border-t border-white/15 pt-7 md:flex-row md:items-start">
              <p className="max-w-xl text-lg leading-8 text-white/55">Produk yang lahir dari kebutuhan operasional, pertumbuhan brand, dan pengalaman pengguna yang nyata.</p>
              <p className="font-mono text-sm text-white/35">{String(portfolioItems.length).padStart(2, "0")} proyek pilihan</p>
            </div>
          </div>
        </section>
        <section className="bg-[#f4f1eb] px-4 py-32 text-[#17131f] sm:px-6 md:py-48">
          <div className="mx-auto grid max-w-[1440px] grid-flow-dense grid-cols-1 gap-x-4 gap-y-20 lg:grid-cols-12">
            {portfolioItems.map((item, index) => {
              const wide = index % 4 === 0 || index % 4 === 3;
              return (
                <Link key={item.title} href={item.href} className={`group block ${wide ? "lg:col-span-8" : "lg:col-span-4"}`}>
                  <div className={`relative overflow-hidden rounded-[2rem] bg-[#211936] ${wide ? "aspect-[16/10]" : "aspect-[4/5]"}`}>
                    <Image src={item.image} alt={`${item.title} preview`} fill sizes={wide ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 34vw, 100vw"} className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                    <span className="absolute bottom-5 right-5 grid size-14 place-items-center rounded-full bg-[#c4b5fd] text-[#17131f] transition-transform duration-500 group-hover:rotate-[-12deg] group-hover:scale-110"><ArrowDownRight className="size-6" /></span>
                  </div>
                  <div className="mt-6 flex items-start justify-between gap-6"><div><h2 className="text-3xl font-semibold tracking-[-.045em]">{item.title}</h2><p className="mt-2 text-sm text-black/50">{item.category}</p></div><span className="font-mono text-xs text-black/35">{String(index + 1).padStart(2, "0")}</span></div>
                  <p className="mt-5 max-w-2xl text-base leading-7 text-black/55">{item.description}</p>
                </Link>
              );
            })}
          </div>
        </section>
        <section className="bg-[#c4b5fd] px-4 py-28 text-[#17131f] sm:px-6 md:py-40">
          <div className="mx-auto max-w-[1440px]"><h2 className="max-w-6xl text-[clamp(3.2rem,7vw,7.5rem)] font-semibold leading-[.9] tracking-[-.07em]">Proyek berikutnya bisa dimulai dari percakapan.</h2><Link href={whatsappUrl} target="_blank" rel="noreferrer" data-gtag-conversion className="mt-12 inline-flex items-center gap-3 rounded-full bg-[#17131f] px-7 py-4 font-semibold text-white transition-transform hover:scale-[1.03]">Diskusikan kebutuhan Anda <ArrowRight className="size-5" /></Link></div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
