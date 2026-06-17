import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Building2,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Send,
} from "lucide-react";

import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { Button } from "@/components/ui/button";
import {
  emailAddress,
  officeAddress,
  officeMapEmbedUrl,
  officeMapUrl,
  whatsappUrl,
} from "@/lib/landing-data";

export const metadata: Metadata = {
  title: "Contact | Nesher Tech",
  description:
    "Hubungi Nesher Tech untuk konsultasi website, web application, dashboard, mobile app, dan solusi digital custom.",
};

const contactCards = [
  {
    title: "WhatsApp",
    description: "Diskusi kebutuhan project dan estimasi awal.",
    icon: MessageCircle,
    href: whatsappUrl,
    label: "Chat WhatsApp",
  },
  {
    title: "Email",
    description: "Kirim brief, dokumen, atau pertanyaan detail.",
    icon: Mail,
    href: `mailto:${emailAddress}`,
    label: emailAddress,
  },
  {
    title: "Office",
    description: "Estubizi Business Center, Setiabudi, Jakarta.",
    icon: Building2,
    href: officeMapUrl,
    label: "Buka Maps",
  },
];

const projectTypes = [
  "Company Profile Website",
  "Web Application",
  "Dashboard System",
  "Mobile Application",
  "UI/UX Design",
  "Maintenance",
];

export default function ContactPage() {
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
              <Link href="/#home">
                <ArrowLeft className="mr-2 size-4" />
                Kembali ke Home
              </Link>
            </Button>

            <div className="grid gap-10 lg:grid-cols-[0.58fr_0.42fr] lg:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.26em] text-[#6D28D9]">
                  Contact
                </p>
                <h1 className="mt-5 text-balance text-5xl font-bold leading-tight text-[#111827] sm:text-6xl lg:text-7xl">
                  Konsultasikan kebutuhan digital Anda.
                </h1>
                <p className="mt-6 max-w-3xl text-pretty text-lg leading-8 text-[#6B7280]">
                  Ceritakan kebutuhan website, aplikasi, dashboard, atau sistem
                  custom Anda. Tim Nesher akan membantu memetakan solusi,
                  prioritas fitur, dan estimasi pengerjaan yang realistis.
                </p>
              </div>

              <div className="rounded-[2rem] border border-[#E9DFFF] bg-white p-6 shadow-[0_18px_55px_rgba(59,7,100,0.08)]">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-[#F6F1FF] text-[#6D28D9]">
                  <MapPin className="size-6" />
                </div>
                <p className="mt-6 text-sm font-bold uppercase tracking-[0.24em] text-[#6D28D9]">
                  Kantor Kami
                </p>
                <h2 className="mt-3 text-2xl font-bold text-[#111827]">
                  Nesher Tech
                </h2>
                <p className="mt-4 text-base leading-7 text-[#6B7280]">
                  {officeAddress}
                </p>
                <Button
                  asChild
                  className="mt-6 h-11 rounded-full bg-[#6D28D9] px-6 text-white hover:bg-[#5B21B6] hover:text-white"
                >
                  <a href={officeMapUrl} rel="noreferrer" target="_blank">
                    Buka di Google Maps <Navigation className="ml-2 size-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
            {contactCards.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  data-gtag-conversion={
                    item.title === "Office" ? undefined : true
                  }
                  key={item.title}
                  href={item.href}
                  rel="noreferrer"
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  className="rounded-[1.75rem] border border-[#E9DFFF] bg-white p-6 shadow-[0_14px_45px_rgba(59,7,100,0.06)] transition hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(59,7,100,0.1)]"
                >
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-[#F6F1FF] text-[#6D28D9]">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-[#111827]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[#6B7280]">
                    {item.description}
                  </p>
                  <p className="mt-5 text-sm font-semibold text-[#6D28D9]">
                    {item.label}
                  </p>
                </a>
              );
            })}
          </div>
        </section>

        <section className="bg-[#FAF7FF] px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.42fr_0.58fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#6D28D9]">
                Konsultasi Gratis
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-[#111827] sm:text-4xl">
                Mulai dari brief singkat, kami bantu rapikan arahnya.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#6B7280]">
                Isi detail kebutuhan Anda atau langsung hubungi kami via
                WhatsApp. Untuk pengiriman dokumen, proposal, atau brief yang
                lebih lengkap, email juga tersedia.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {projectTypes.map((item) => (
                  <span
                    key={item}
                    className="inline-flex h-10 items-center rounded-full border border-[#E9DFFF] bg-white px-4 text-sm font-semibold text-[#3B0764]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#E9DFFF] bg-white p-6 shadow-[0_18px_55px_rgba(59,7,100,0.08)]">
              <form
                action={`mailto:${emailAddress}`}
                className="grid gap-5"
                data-gtag-conversion
                encType="text/plain"
                method="post"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-semibold text-[#111827]">
                    Nama
                    <input
                      name="Nama"
                      placeholder="Nama lengkap"
                      className="h-12 rounded-2xl border border-[#E9DFFF] bg-white px-4 text-sm font-normal text-[#111827] outline-none transition placeholder:text-[#9CA3AF] focus:border-[#6D28D9] focus:ring-4 focus:ring-[#E9DFFF]"
                    />
                  </label>
                  <label className="grid gap-2 text-sm font-semibold text-[#111827]">
                    Email Kerja
                    <input
                      name="Email"
                      placeholder="nama@perusahaan.com"
                      type="email"
                      className="h-12 rounded-2xl border border-[#E9DFFF] bg-white px-4 text-sm font-normal text-[#111827] outline-none transition placeholder:text-[#9CA3AF] focus:border-[#6D28D9] focus:ring-4 focus:ring-[#E9DFFF]"
                    />
                  </label>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-semibold text-[#111827]">
                    Telepon
                    <input
                      name="Telepon"
                      placeholder="+62"
                      className="h-12 rounded-2xl border border-[#E9DFFF] bg-white px-4 text-sm font-normal text-[#111827] outline-none transition placeholder:text-[#9CA3AF] focus:border-[#6D28D9] focus:ring-4 focus:ring-[#E9DFFF]"
                    />
                  </label>
                  <label className="grid gap-2 text-sm font-semibold text-[#111827]">
                    Perusahaan
                    <input
                      name="Perusahaan"
                      placeholder="Nama perusahaan"
                      className="h-12 rounded-2xl border border-[#E9DFFF] bg-white px-4 text-sm font-normal text-[#111827] outline-none transition placeholder:text-[#9CA3AF] focus:border-[#6D28D9] focus:ring-4 focus:ring-[#E9DFFF]"
                    />
                  </label>
                </div>

                <label className="grid gap-2 text-sm font-semibold text-[#111827]">
                  Pesan
                  <textarea
                    name="Pesan"
                    placeholder="Ceritakan kebutuhan project, target, fitur utama, atau timeline yang diharapkan."
                    rows={6}
                    className="resize-none rounded-2xl border border-[#E9DFFF] bg-white px-4 py-3 text-sm font-normal leading-6 text-[#111827] outline-none transition placeholder:text-[#9CA3AF] focus:border-[#6D28D9] focus:ring-4 focus:ring-[#E9DFFF]"
                  />
                </label>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button
                    type="submit"
                    className="h-12 rounded-full bg-[#6D28D9] px-7 text-base text-white hover:bg-[#5B21B6] hover:text-white"
                  >
                    Kirim via Email <Send className="ml-2 size-4" />
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="h-12 rounded-full border-[#E9DFFF] bg-white px-7 text-base text-[#3B0764] hover:bg-[#6D28D9] hover:text-white"
                  >
                    <a
                      data-gtag-conversion
                      href={whatsappUrl}
                      rel="noreferrer"
                      target="_blank"
                    >
                      Chat WhatsApp <Phone className="ml-2 size-4" />
                    </a>
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <section className="relative bg-white pt-4">
          <div className="relative h-[520px] overflow-hidden border-y border-[#E9DFFF] sm:h-[560px]">
            <iframe
              src={officeMapEmbedUrl}
              title="Lokasi kantor Nesher Tech di Google Maps"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white to-transparent" />

            <div className="absolute left-4 top-4 max-w-sm rounded-[1.25rem] border border-[#E9DFFF] bg-white p-5 shadow-[0_18px_55px_rgba(59,7,100,0.14)] sm:left-8 sm:top-8">
              <div className="flex items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[#F6F1FF] text-[#6D28D9]">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <p className="text-base font-bold text-[#111827]">
                    Nesher Tech
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#6B7280]">
                    {officeAddress}
                  </p>
                  <a
                    href={officeMapUrl}
                    rel="noreferrer"
                    target="_blank"
                    className="mt-4 inline-flex text-sm font-semibold text-[#6D28D9] hover:text-[#3B0764]"
                  >
                    Buka di Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="h-16 bg-white [clip-path:ellipse(70%_100%_at_50%_100%)]"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}
