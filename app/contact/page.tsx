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
    <div className="min-h-screen bg-[#0b0b0d] font-sans">
      <Navbar />
      <main id="main-content" className="w-full max-w-full overflow-x-hidden">
        <section className="relative overflow-hidden px-4 pb-28 pt-40 text-white sm:px-6 md:pb-44 md:pt-52 lg:px-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-96 -top-64 h-[64rem] w-[84rem] bg-[radial-gradient(ellipse_at_center,rgba(109,40,217,0.12)_0%,rgba(109,40,217,0.04)_42%,transparent_72%)] blur-[75px]"
          />
          <div className="relative mx-auto max-w-[1440px]">
            <Button
              asChild
              variant="outline"
              className="mb-12 h-11 rounded-full border-white/15 bg-white/5 px-5 text-white backdrop-blur-xl hover:bg-white hover:text-black"
            >
              <Link href="/#home">
                <ArrowLeft className="mr-2 size-4" />
                Kembali ke Home
              </Link>
            </Button>

            <div className="grid gap-14 lg:grid-cols-[0.7fr_0.3fr] lg:items-end">
              <div>
                <h1 className="w-full max-w-6xl text-[clamp(3.4rem,7vw,7.5rem)] font-semibold leading-[.9] tracking-[-.07em] text-white">
                  Mari bangun sesuatu yang bekerja indah.
                </h1>
                <p className="mt-7 max-w-3xl text-pretty text-lg leading-8 tracking-[-0.015em] text-white/55 sm:text-xl">
                  Ceritakan kebutuhan website, aplikasi, dashboard, atau sistem
                  custom Anda. Tim Nesher akan membantu memetakan solusi,
                  prioritas fitur, dan estimasi pengerjaan yang realistis.
                </p>
              </div>

              <div className="rounded-[2.5rem] border border-white/15 bg-white/5 p-7 backdrop-blur-xl sm:p-8">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-[#c4b5fd] text-[#17131f]">
                  <MapPin className="size-6" />
                </div>
                <h2 className="mt-7 text-2xl font-semibold tracking-[-0.025em] text-white">
                  Nesher Tech
                </h2>
                <p className="mt-4 text-base leading-7 text-white/55">
                  {officeAddress}
                </p>
                <Button
                  asChild
                  className="mt-6 h-11 rounded-full bg-[#c4b5fd] px-6 text-[#17131f] hover:bg-white"
                >
                  <a href={officeMapUrl} rel="noreferrer" target="_blank">
                    Buka di Google Maps <Navigation className="ml-2 size-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#e8e1ff] px-4 py-32 sm:px-6 md:py-48 lg:px-8">
          <div className="mx-auto grid max-w-[1440px] gap-4 md:grid-cols-3">
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
                  className="group rounded-[2rem] border border-black/8 bg-white/60 p-7 transition-transform duration-500 hover:-translate-y-1"
                >
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-white text-primary transition group-hover:bg-primary group-hover:text-white">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="mt-7 text-2xl font-semibold tracking-[-0.025em] text-[var(--nesher-ink)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[var(--nesher-body)]">
                    {item.description}
                  </p>
                  <p className="mt-5 text-sm font-semibold text-primary">
                    {item.label}
                  </p>
                </a>
              );
            })}
          </div>
        </section>

        <section className="bg-[#f4f1eb] px-4 py-32 sm:px-6 md:py-48 lg:px-8">
          <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[0.4fr_0.6fr] lg:gap-20">
            <div>
              <h2 className="text-[clamp(2.8rem,5vw,5.5rem)] font-semibold leading-[.96] tracking-[-.06em] text-[#17131f]">
                Mulai dari brief singkat, kami bantu rapikan arahnya.
              </h2>
              <p className="mt-6 text-lg leading-8 text-[var(--nesher-body)]">
                Isi detail kebutuhan Anda atau langsung hubungi kami via
                WhatsApp. Untuk pengiriman dokumen, proposal, atau brief yang
                lebih lengkap, email juga tersedia.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {projectTypes.map((item) => (
                  <span
                    key={item}
                    className="nesher-chip inline-flex h-10 items-center rounded-full px-4 text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-black/8 bg-white p-6 shadow-[0_30px_80px_rgba(39,25,69,.1)] sm:p-8">
              <form
                action={`mailto:${emailAddress}`}
                className="grid gap-5"
                data-gtag-conversion
                encType="text/plain"
                method="post"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-semibold text-[var(--nesher-ink)]">
                    Nama
                    <input
                      name="Nama"
                      placeholder="Nama lengkap"
                      className="nesher-input h-12 rounded-2xl px-4 text-sm font-normal transition"
                    />
                  </label>
                  <label className="grid gap-2 text-sm font-semibold text-[var(--nesher-ink)]">
                    Email Kerja
                    <input
                      name="Email"
                      placeholder="nama@perusahaan.com"
                      type="email"
                      className="nesher-input h-12 rounded-2xl px-4 text-sm font-normal transition"
                    />
                  </label>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-semibold text-[var(--nesher-ink)]">
                    Telepon
                    <input
                      name="Telepon"
                      placeholder="+62"
                      className="nesher-input h-12 rounded-2xl px-4 text-sm font-normal transition"
                    />
                  </label>
                  <label className="grid gap-2 text-sm font-semibold text-[var(--nesher-ink)]">
                    Perusahaan
                    <input
                      name="Perusahaan"
                      placeholder="Nama perusahaan"
                      className="nesher-input h-12 rounded-2xl px-4 text-sm font-normal transition"
                    />
                  </label>
                </div>

                <label className="grid gap-2 text-sm font-semibold text-[var(--nesher-ink)]">
                  Pesan
                  <textarea
                    name="Pesan"
                    placeholder="Ceritakan kebutuhan project, target, fitur utama, atau timeline yang diharapkan."
                    rows={6}
                    className="nesher-input resize-none rounded-2xl px-4 py-3 text-sm font-normal leading-6 transition"
                  />
                </label>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button
                    type="submit"
                    className="h-12 px-7 text-base"
                  >
                    Kirim via Email <Send className="ml-2 size-4" />
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="h-12 px-7 text-base"
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

        <section className="bg-[#f4f1eb] px-4 pb-32 sm:px-6 sm:pb-48 lg:px-8">
          <div className="relative mx-auto h-[520px] max-w-[1440px] overflow-hidden rounded-[2.5rem] bg-white shadow-[0_30px_80px_rgba(39,25,69,.12)] sm:h-[600px]">
            <iframe
              src={officeMapEmbedUrl}
              title="Lokasi kantor Nesher Tech di Google Maps"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/70 to-transparent" />

            <div className="absolute left-4 top-4 max-w-sm rounded-[1.75rem] border border-white/80 bg-white/85 p-5 shadow-[var(--nesher-raised-shadow)] backdrop-blur-xl sm:left-8 sm:top-8 sm:p-6">
              <div className="flex items-start gap-4">
                <div className="nesher-icon-tile flex size-11 shrink-0 items-center justify-center rounded-2xl">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <p className="text-base font-semibold text-[var(--nesher-ink)]">
                    Nesher Tech
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--nesher-body)]">
                    {officeAddress}
                  </p>
                  <a
                    href={officeMapUrl}
                    rel="noreferrer"
                    target="_blank"
                    className="mt-4 inline-flex text-sm font-semibold text-primary hover:text-[var(--nesher-purple-900)]"
                  >
                    Buka di Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>

        </section>
      </main>
      <Footer />
    </div>
  );
}
