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
        <section className="relative overflow-hidden bg-[#F5F5F7] px-4 pb-24 pt-36 sm:px-6 sm:pb-32 sm:pt-44 lg:px-8 lg:pt-48">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-96 -top-64 h-[64rem] w-[84rem] bg-[radial-gradient(ellipse_at_center,rgba(109,40,217,0.12)_0%,rgba(109,40,217,0.04)_42%,transparent_72%)] blur-[75px]"
          />
          <div className="relative mx-auto max-w-7xl">
            <Button
              asChild
              variant="outline"
              className="mb-12 h-10 rounded-full border-black/10 bg-white/60 text-[#1D1D1F] backdrop-blur-xl hover:bg-white hover:text-[#6D28D9]"
            >
              <Link href="/#home">
                <ArrowLeft className="mr-2 size-4" />
                Kembali ke Home
              </Link>
            </Button>

            <div className="grid gap-14 lg:grid-cols-[0.62fr_0.38fr] lg:items-end">
              <div>
                <p className="text-sm font-semibold text-[#6D28D9]">
                  Contact
                </p>
                <h1 className="mt-5 text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#1D1D1F] sm:text-7xl lg:text-[5.25rem]">
                  Mari membangun sesuatu yang bekerja dengan indah.
                </h1>
                <p className="mt-7 max-w-3xl text-pretty text-lg leading-8 tracking-[-0.015em] text-[#6E6E73] sm:text-xl">
                  Ceritakan kebutuhan website, aplikasi, dashboard, atau sistem
                  custom Anda. Tim Nesher akan membantu memetakan solusi,
                  prioritas fitur, dan estimasi pengerjaan yang realistis.
                </p>
              </div>

              <div className="rounded-[2.5rem] bg-white p-7 sm:p-8">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-[#F3EEFF] text-[#6D28D9]">
                  <MapPin className="size-6" />
                </div>
                <p className="mt-7 text-sm font-semibold text-[#6D28D9]">
                  Kantor Kami
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-[#1D1D1F]">
                  Nesher Tech
                </h2>
                <p className="mt-4 text-base leading-7 text-[#6E6E73]">
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

        <section className="bg-white px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
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
                  className="group rounded-[2rem] bg-[#F5F5F7] p-7 transition duration-300 hover:-translate-y-1"
                >
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-white text-[#6D28D9] transition group-hover:bg-[#6D28D9] group-hover:text-white">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="mt-7 text-2xl font-semibold tracking-[-0.025em] text-[#1D1D1F]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[#6E6E73]">
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

        <section className="bg-[#F5F5F7] px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.4fr_0.6fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold text-[#6D28D9]">
                Konsultasi Gratis
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#1D1D1F] sm:text-5xl">
                Mulai dari brief singkat, kami bantu rapikan arahnya.
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#6E6E73]">
                Isi detail kebutuhan Anda atau langsung hubungi kami via
                WhatsApp. Untuk pengiriman dokumen, proposal, atau brief yang
                lebih lengkap, email juga tersedia.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {projectTypes.map((item) => (
                  <span
                    key={item}
                    className="inline-flex h-10 items-center rounded-full border border-black/8 bg-white px-4 text-sm font-medium text-[#1D1D1F]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[2.5rem] bg-white p-6 sm:p-8">
              <form
                action={`mailto:${emailAddress}`}
                className="grid gap-5"
                data-gtag-conversion
                encType="text/plain"
                method="post"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-semibold text-[#1D1D1F]">
                    Nama
                    <input
                      name="Nama"
                      placeholder="Nama lengkap"
                      className="h-12 rounded-2xl border border-black/10 bg-[#F5F5F7] px-4 text-sm font-normal text-[#1D1D1F] outline-none transition placeholder:text-[#86868B] focus:border-[#6D28D9] focus:bg-white focus:ring-4 focus:ring-[#E9DFFF]"
                    />
                  </label>
                  <label className="grid gap-2 text-sm font-semibold text-[#1D1D1F]">
                    Email Kerja
                    <input
                      name="Email"
                      placeholder="nama@perusahaan.com"
                      type="email"
                      className="h-12 rounded-2xl border border-black/10 bg-[#F5F5F7] px-4 text-sm font-normal text-[#1D1D1F] outline-none transition placeholder:text-[#86868B] focus:border-[#6D28D9] focus:bg-white focus:ring-4 focus:ring-[#E9DFFF]"
                    />
                  </label>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-semibold text-[#1D1D1F]">
                    Telepon
                    <input
                      name="Telepon"
                      placeholder="+62"
                      className="h-12 rounded-2xl border border-black/10 bg-[#F5F5F7] px-4 text-sm font-normal text-[#1D1D1F] outline-none transition placeholder:text-[#86868B] focus:border-[#6D28D9] focus:bg-white focus:ring-4 focus:ring-[#E9DFFF]"
                    />
                  </label>
                  <label className="grid gap-2 text-sm font-semibold text-[#1D1D1F]">
                    Perusahaan
                    <input
                      name="Perusahaan"
                      placeholder="Nama perusahaan"
                      className="h-12 rounded-2xl border border-black/10 bg-[#F5F5F7] px-4 text-sm font-normal text-[#1D1D1F] outline-none transition placeholder:text-[#86868B] focus:border-[#6D28D9] focus:bg-white focus:ring-4 focus:ring-[#E9DFFF]"
                    />
                  </label>
                </div>

                <label className="grid gap-2 text-sm font-semibold text-[#1D1D1F]">
                  Pesan
                  <textarea
                    name="Pesan"
                    placeholder="Ceritakan kebutuhan project, target, fitur utama, atau timeline yang diharapkan."
                    rows={6}
                    className="resize-none rounded-2xl border border-black/10 bg-[#F5F5F7] px-4 py-3 text-sm font-normal leading-6 text-[#1D1D1F] outline-none transition placeholder:text-[#86868B] focus:border-[#6D28D9] focus:bg-white focus:ring-4 focus:ring-[#E9DFFF]"
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
                    className="h-12 rounded-full border-black/10 bg-white px-7 text-base text-[#1D1D1F] hover:bg-[#F5F5F7] hover:text-[#6D28D9]"
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

        <section className="bg-white px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative mx-auto h-[520px] max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#F5F5F7] sm:h-[600px]">
            <iframe
              src={officeMapEmbedUrl}
              title="Lokasi kantor Nesher Tech di Google Maps"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/70 to-transparent" />

            <div className="absolute left-4 top-4 max-w-sm rounded-[1.75rem] border border-white/80 bg-white/80 p-5 shadow-[0_18px_55px_rgba(29,29,31,0.12)] backdrop-blur-xl sm:left-8 sm:top-8 sm:p-6">
              <div className="flex items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[#F6F1FF] text-[#6D28D9]">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <p className="text-base font-semibold text-[#1D1D1F]">
                    Nesher Tech
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#6E6E73]">
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

        </section>
      </main>
      <Footer />
    </div>
  );
}
